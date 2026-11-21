/* torque · 아예 안 움직임 — 중력 토크 g(q)와 모터 최대 토크
 *
 * 실험: 팔을 세운 자세(모든 관절 0°)에서 1.5초 동안 뻗은 자세(joint2 +80.2°, joint3 −80.2°)로 움직이고,
 * 4초 뒤 joint2가 목표에서 3° 안이면 '버팀'. joint2 최대 토크(forcerange)와 관절 마찰만 바꿉니다.
 * 확인한 값 (MuJoCo 3.17.0): g(q) 0.574 Nm. 경계(4초 뒤 3° 안): 마찰 끔 0.565 떨어짐 / 0.57 버팀,
 *   켬 0.465 / 0.47, 1.5 Nm·마찰 끔 손끝 235 g 버팀 / 240 g 떨어짐.
 * 3단계·5단계는 '내 예측 ×0.9 / ×1 / ×1.1' 세 번 실행: ×0.9 떨어짐(물체는 버팀)·×1.1 버팀(물체는 떨어짐)이면 예측이 맞음.
 */
(() => {
  "use strict";
  const { $, Q, A, B, GRAV, deg } = OmxLab;
  const REACH = { q2: 1.4, q3: -1.4 };                 // 뻗은 자세 [rad] (80.2°)
  const RAMP = 1.5, RUN = 4.0, TOL_DEG = 3, FMAX_ROBOTIS = 1.5;
  const BTN = ["btn-run", "btn-reset", "btn-runm", "btn-chk-off", "btn-chk-on", "btn-predm"];
  const K3 = [0.9, 1, 1.1], SPEED = 3;                 // 예측 확인: 10% 작게 / 그대로 / 10% 크게, 3배 빠르게 재생

  OmxLab.shell("torque");
  const box = OmxLab.store("omx-lab-torque");
  const state = box.get();
  const save = () => box.set(state);
  const truth = { g: 0, eeX: 0, rows: [] };
  const logs = { torque: [], payload: [] };
  let fric0 = 0.1, lab = null, curF2 = null, pick = -1;

  // ---- 정답 값: 뻗은 자세에서 MuJoCo로 계산 ----
  function computeTruth() {
    const { mj, model, data } = lab;
    mj.mj_resetData(model, data);
    data.qpos[Q.j2] = REACH.q2; data.qpos[Q.j3] = REACH.q3;
    mj.mj_forward(model, data);
    truth.g = Math.abs(data.qfrc_bias[Q.j2]);
    const xj = data.xpos[B.link2 * 3];
    const xi = data.xipos, bm = model.body_mass;
    const row = (name, ids) => {
      const m = ids.reduce((s, b) => s + bm[b], 0);
      const x = ids.reduce((s, b) => s + bm[b] * (xi[b * 3] - xj), 0) / m;
      return { name, m, x, ids };
    };
    truth.rows = [row("link2 · 위팔", [B.link2]), row("link3 · 아래팔", [B.link3]), row("link4 · 손목", [B.link4]),
      row("link5 · 그리퍼 몸체", [B.link5]), row("link6+7 · 손가락 2개", [B.link6, B.link7])];
    truth.eeX = data.xpos[B.ee * 3] - xj;
    fric0 = model.dof_frictionloss[Q.j2];
    lab.resetPose();
  }
  function fillTables() {
    $("linktbl").innerHTML = truth.rows.map((r, i) =>
      `<tr class="pick" data-i="${i}" tabindex="0" aria-pressed="false"><td>${r.name}</td><td class="n">${r.m.toFixed(4)}</td><td class="n">${r.x.toFixed(4)}</td><td class="n" style="color:var(--muted)">?</td></tr>`).join("");
    $("fric-val").textContent = fric0.toFixed(2);
    $("ee-x").textContent = truth.eeX.toFixed(3);
    const sum = truth.rows.reduce((s, r) => s + r.m * r.x, 0);
    $("sol-pred-body").innerHTML = truth.rows.map((r) => `${r.m.toFixed(4)} × ${r.x.toFixed(4)} = ${(r.m * r.x).toFixed(5)}`).join("<br>") +
      `<br>Σ m·x = ${sum.toFixed(5)} kg·m<br>g(q) = ${sum.toFixed(5)} × 9.81 = <b>${(sum * GRAV).toFixed(3)} Nm</b>` +
      `<br><span style="color:var(--muted)">MuJoCo가 계산한 값(qfrc_bias): ${truth.g.toFixed(3)} Nm</span>`;
  }

  // ---- 2단계 표 행 선택 → 3D에서 부위 표시 ----
  function setPick(i) {
    pick = (i === pick) ? -1 : i;
    document.querySelectorAll("#linktbl tr.pick").forEach((tr) => {
      const on = +tr.dataset.i === pick; tr.classList.toggle("sel", on); tr.setAttribute("aria-pressed", on);
    });
    lab.showLever(pick >= 0 ? truth.rows[pick].ids : null, B.link2);
    if (lab.mode === "idle") {
      if (pick >= 0) lab.showPose({ [Q.j2]: REACH.q2, [Q.j3]: REACH.q3 }, "뻗은 자세 보기");
      else lab.resetPose();
    }
  }

  // ---- 실행: 팔 세움 → 뻗은 자세 ----
  function runReach(cfg, done) {
    curF2 = cfg.f2;
    lab.run({
      duration: RUN, speed: cfg.speed || 1,
      setup(model) {
        model.actuator_forcerange[A.j2 * 2] = -cfg.f2; model.actuator_forcerange[A.j2 * 2 + 1] = cfg.f2;
        if (!cfg.fric) for (let j = 0; j < 5; j++) model.dof_frictionloss[j] = 0;
        lab.setPayload(cfg.payload || 0);
      },
      control(t, data) {
        const s = Math.min(t / RAMP, 1), a = (1 - Math.cos(Math.PI * s)) / 2;   // 부드럽게 0 → 1
        data.ctrl[A.j2] = REACH.q2 * a; data.ctrl[A.j3] = REACH.q3 * a;
      },
      judge(data) {
        const q2deg = deg(data.qpos[Q.j2]);
        const hold = Math.abs(q2deg - deg(REACH.q2)) < TOL_DEG;
        return { hold, q2deg, state: hold ? "버팀" : "떨어짐", cls: hold ? "hold" : "fall" };
      },
      done,
    });
  }

  // ---- 기록 ----
  const pill = (hold) => `<span class="pill ${hold ? "hold" : "fall"}">${hold ? "버팀" : "떨어짐"}</span>`;
  const expTxt = (e) => e == null ? "—" : e ? "버텨야 함" : "떨어져야 함";
  function renderTorqueLog() {
    const L = logs.torque;
    $("logtbl").innerHTML = L.length ? L.slice().reverse().map((r) =>
      `<tr><td class="n">${r.n}</td><td class="n">${r.f2.toFixed(3)} Nm</td><td>${r.fric ? "켬" : "끔"}</td><td>${expTxt(r.expect)}</td>` +
      `<td>${pill(r.hold)}${r.expect != null && r.expect !== r.hold ? " ✗" : ""}</td><td class="n">${r.q2deg.toFixed(1)}°</td></tr>`).join("")
      : `<tr><td colspan="6" class="note">아직 실험 기록이 없습니다.</td></tr>`;
  }
  function renderPayloadLog() {
    const L = logs.payload;
    $("logtbl-m").innerHTML = L.length ? L.slice().reverse().map((r) =>
      `<tr><td class="n">${r.n}</td><td class="n">${Math.round(r.payload * 1000)} g</td><td>${expTxt(r.expect)}</td>` +
      `<td>${pill(r.hold)}${r.expect != null && r.expect !== r.hold ? " ✗" : ""}</td><td class="n">${r.q2deg.toFixed(1)}°</td></tr>`).join("")
      : `<tr><td colspan="5" class="note">아직 기록이 없습니다.</td></tr>`;
  }
  // 한 번에 하나씩 실행 (Promise)
  const runOnce = (cfg) => new Promise((res) => runReach(cfg, res));
  // 예측 확인: kind = "off" | "on" | "m". 결과 3개로 판정
  async function checkPred(kind, P) {
    const isM = kind === "m", rows = [];
    for (const k of K3) {
      const cfg = isM ? { f2: FMAX_ROBOTIS, fric: false, payload: P * k / 1000, speed: SPEED } : { f2: +(P * k).toFixed(3), fric: kind === "on", speed: SPEED };
      const expect = k === 1 ? null : isM ? k < 1 : k > 1;      // 토크: 크면 버팀, 물체: 가벼우면 버팀
      const r = await runOnce(cfg);
      const row = { n: 0, ...cfg, ...r, expect };
      if (isM) { row.n = logs.payload.length + 1; logs.payload.push(row); renderPayloadLog(); }
      else { row.n = logs.torque.length + 1; logs.torque.push(row); renderTorqueLog(); }
      rows.push(row);
    }
    const [lo, mid, hi] = rows, ok = lo.hold === lo.expect && hi.hold === hi.expect;
    const fb = $(isM ? "fb-predm" : "fb-chk-" + kind); fb.hidden = false; fb.className = "fb " + (ok ? "ok" : "no");
    const unit = isM ? " g" : " Nm", f = (v) => isM ? Math.round(v) + unit : v.toFixed(3) + unit;
    const midTxt = `예측값 그대로(${f(P)})는 <b>${mid.hold ? "버텼습니다" : "떨어졌습니다"}</b>.`;
    let msg;
    if (ok) {
      msg = `예측이 맞습니다. ${f(P * K3[0])}에서는 ${lo.hold ? "버티고" : "떨어지고"}, ${f(P * K3[2])}에서는 ${hi.hold ? "버팁니다" : "떨어집니다"}. ${midTxt}`;
      if (isM) {
        const truthM = (FMAX_ROBOTIS - truth.g) / (GRAV * truth.eeX) * 1000;
        msg += ` 계산값은 ${truthM.toFixed(0)} g입니다.` + (mid.hold ? "" : " 경계 바로 근처라 몇 %만 달라도 결과가 바뀝니다. 실제로 쓸 때는 여유를 두어야 하는 이유입니다.");
      } else msg += " 경계 바로 근처라 예측값 자체는 어느 쪽이 나와도 이상하지 않습니다.";
      state["ok" + kind] = 1; save();
    } else {
      const tooSmall = isM ? !lo.hold : !hi.hold;     // 토크 예측이 작다 = 10% 커도 떨어짐 / 물체 예측이 크다 = 10% 가벼워도 떨어짐
      msg = isM
        ? (!lo.hold ? `${f(P * K3[0])}도 떨어졌습니다. 예측이 너무 큽니다.` : `${f(P * K3[2])}도 버텼습니다. 예측이 너무 작습니다.`) + " 1.5 − g(q)를 9.81과 손끝 거리 x로 나눴는지, kg → g 단위를 확인해 보세요."
        : (tooSmall ? `${f(P * K3[2])}로도 떨어졌습니다. 예측이 너무 작습니다.` : `${f(P * K3[0])}로도 버텼습니다. 예측이 너무 큽니다.`) + (kind === "on" ? " 마찰은 버티는 쪽을 돕습니다. 모터가 덜 내도 됩니다." : " 2단계 계산을 다시 확인해 보세요.");
      msg += " " + midTxt;
    }
    fb.innerHTML = msg;
    refreshDone();
  }
  function renderCompare() {
    const ready = state.okoff && state.okon;
    $("c4-lock").hidden = !!ready; $("c4-body").hidden = !ready;
    if (!ready) return;
    const items = [
      ["내 예측 · 마찰 끔", state.predG, "var(--muted)"],
      ["MuJoCo g(q)", truth.g, "var(--gravity)"],
      ["내 예측 · 마찰 켬", state.predOn, "var(--muted)"],
      ["g(q) − 마찰", truth.g - fric0, "var(--accent)"],
    ];
    $("cmp").innerHTML = items.map(([k, v, c]) =>
      `<div class="cmprow"><span>${k}</span><div class="b"><span style="width:${Math.min(v / 0.8, 1) * 100}%;background:${c}"></span></div><span class="n">${v.toFixed(3)}</span></div>`).join("") +
      `<p class="note" style="margin-top:6px">실험 경계(4초 뒤 3° 안): 마찰 끔 0.565 Nm 떨어짐 / 0.57 Nm 버팀, 마찰 켬 0.465 / 0.47. 계산 g(q) ${truth.g.toFixed(3)}, g(q) − 마찰 ${(truth.g - fric0).toFixed(3)} Nm와 거의 같습니다.</p>`;
  }
  function refreshDone() {
    if (state.okoff && state.okon) markDone("c3");
    if (state.okm) markDone("c5");
    $("p-off").textContent = state.predG != null ? `${state.predG} Nm` : "아직 없음 (2단계에서 먼저 계산)";
    renderCompare();
  }
  function markDone(id) { $(id).classList.add("done"); }

  // ---- 이벤트 ----
  $("sl-f").addEventListener("input", (e) => { $("sl-f-val").textContent = (+e.target.value).toFixed(2) + " Nm"; });
  $("sl-m").addEventListener("input", (e) => { $("sl-m-val").textContent = e.target.value + " g"; });
  $("btn-pred").addEventListener("click", () => {
    const v = parseFloat($("pred-g").value);
    const fb = $("fb-pred"); fb.hidden = false;
    if (!isFinite(v)) { fb.className = "fb no"; fb.textContent = "숫자를 Nm 단위로 입력하세요. 예: 0.42"; return; }
    if (!lab) { fb.className = "fb"; fb.textContent = "모델을 불러오는 중입니다. 잠시 뒤 다시 눌러 주세요."; return; }
    state.predG = v; save();
    const err = Math.abs(v - truth.g) / truth.g;
    if (err <= 0.05) { fb.className = "fb ok"; fb.textContent = `맞습니다. MuJoCo 값은 ${truth.g.toFixed(3)} Nm입니다 (오차 ${(err * 100).toFixed(1)}%). 이제 실험으로 확인해 보세요.`; markDone("c1"); markDone("c2"); }
    else { fb.className = "fb no"; fb.textContent = `차이가 ${(err * 100).toFixed(0)}% 납니다. 각 줄의 m·x를 더한 뒤 9.81을 곱했는지, 단위(kg, m)를 확인해 보세요.`; }
    refreshDone();
  });
  $("btn-run").addEventListener("click", () => {
    const cfg = { f2: +$("sl-f").value, fric: $("cb-fric").checked, payload: 0 };
    runReach(cfg, (r) => { logs.torque.push({ n: logs.torque.length + 1, ...cfg, ...r, expect: null }); renderTorqueLog(); });
  });
  $("btn-chk-off").addEventListener("click", () => {
    if (state.predG == null) { const fb = $("fb-chk-off"); fb.hidden = false; fb.className = "fb no"; fb.textContent = "2단계에서 g(q)를 먼저 예측하세요."; return; }
    checkPred("off", state.predG);
  });
  $("btn-chk-on").addEventListener("click", () => {
    const v = parseFloat($("pred-on").value), fb = $("fb-chk-on");
    if (!isFinite(v) || v <= 0) { fb.hidden = false; fb.className = "fb no"; fb.textContent = "Nm 단위 숫자를 입력하세요. 예: 0.42"; return; }
    state.predOn = v; save(); checkPred("on", v);
  });
  $("btn-reset").addEventListener("click", () => { curF2 = null; lab.resetPose(); });
  $("btn-predm").addEventListener("click", () => {
    const v = parseFloat($("pred-m").value), fb = $("fb-predm");
    if (!isFinite(v) || v <= 0) { fb.hidden = false; fb.className = "fb no"; fb.textContent = "g 단위 숫자를 입력하세요. 예: 150"; return; }
    state.predM = v; save(); checkPred("m", v);
  });
  $("btn-runm").addEventListener("click", () => {
    const cfg = { f2: FMAX_ROBOTIS, fric: false, payload: +$("sl-m").value / 1000 };
    runReach(cfg, (r) => { logs.payload.push({ n: logs.payload.length + 1, ...cfg, ...r, expect: null }); renderPayloadLog(); });
  });
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. 정지 마찰은 움직임을 막는 쪽으로 작용합니다. 그래서 모터 토크 + 마찰 ≥ g(q)이면 버팁니다. 실제 서보는 기어 마찰이 더 커서, 토크가 모자라도 그 자리에 버티는 것처럼 보일 수 있습니다(1번 탭 '정지 마찰')."; markDone("c4"); }
    else { fb.className = "fb no"; fb.textContent = "다시 생각해 보세요. 질량과 모터 최대 토크는 그대로입니다. 바뀐 것은 관절에 생기는 마찰력뿐입니다."; }
  });
  const tb = $("linktbl");
  tb.addEventListener("click", (e) => { const tr = e.target.closest("tr.pick"); if (tr && lab) setPick(+tr.dataset.i); });
  tb.addEventListener("keydown", (e) => {
    const tr = e.target.closest("tr.pick");
    if (tr && lab && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setPick(+tr.dataset.i); }
  });
  if (state.predG != null) $("pred-g").value = state.predG;
  if (state.predM != null) $("pred-m").value = state.predM;
  if (state.predOn != null) $("pred-on").value = state.predOn;
  renderTorqueLog(); renderPayloadLog(); refreshDone();

  // ---- 시작 ----
  OmxLab.start({}).then((l) => {
    lab = l;
    lab.onBusy((busy) => BTN.forEach((id) => { $(id).disabled = busy; }));
    BTN.forEach((id) => { $(id).disabled = false; });
    lab.jointGauge($("gauge"), {
      dof: Q.j2, act: A.j2, targetDeg: deg(REACH.q2), max: 1.6,
      // 막대의 '최대 토크 설정값': 실행 중/후에는 그 실행 값, 대기 중에는 슬라이더 값
      limit: () => (curF2 != null && lab.mode !== "idle" ? curF2 : +$("sl-f").value),
    });
    computeTruth(); fillTables(); refreshDone();
  }).catch(() => { /* 오류 문구는 lab.js가 화면에 표시 */ });
})();
