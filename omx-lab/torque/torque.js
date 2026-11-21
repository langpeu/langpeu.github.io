/* torque · 아예 안 움직임 — 중력 토크 g(q)와 모터 최대 토크
 *
 * 실험: 팔을 세운 자세(모든 관절 0°)에서 1.5초 동안 뻗은 자세(joint2 +80.2°, joint3 −80.2°)로 움직이고,
 * 4초 뒤 joint2가 목표에서 3° 안이면 '버팀'. joint2 최대 토크(forcerange)와 관절 마찰만 바꿉니다.
 * 확인한 값 (MuJoCo 3.17.0): g(q) 0.574 Nm, 경계 마찰 끔 0.55~0.58 / 켬 0.45~0.48, 1.5 Nm일 때 손끝 230~240 g.
 */
(() => {
  "use strict";
  const { $, Q, A, B, GRAV, deg, bracket, narrow, boundChip } = OmxLab;
  const REACH = { q2: 1.4, q3: -1.4 };                 // 뻗은 자세 [rad] (80.2°)
  const RAMP = 1.5, RUN = 4.0, TOL_DEG = 3, FMAX_ROBOTIS = 1.5;
  const BTN = ["btn-run", "btn-reset", "btn-runm"];

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
      duration: RUN,
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

  // ---- 기록과 경계 ----
  const pill = (hold) => `<span class="pill ${hold ? "hold" : "fall"}">${hold ? "버팀" : "떨어짐"}</span>`;
  function torqueBounds() {
    return { on: bracket(logs.torque.filter((r) => r.fric), "f2", false), off: bracket(logs.torque.filter((r) => !r.fric), "f2", false) };
  }
  function renderTorqueLog() {
    const L = logs.torque;
    $("logtbl").innerHTML = L.length ? L.slice().reverse().map((r) =>
      `<tr><td class="n">${r.n}</td><td class="n">${r.f2.toFixed(2)} Nm</td><td>${r.fric ? "켬" : "끔"}</td>` +
      `<td>${pill(r.hold)}</td><td class="n">${r.q2deg.toFixed(1)}°</td></tr>`).join("")
      : `<tr><td colspan="5" class="note">아직 실험 기록이 없습니다.</td></tr>`;
    const b = torqueBounds();
    $("bounds").innerHTML = boundChip("마찰 켬 경계", b.on, "Nm", 0.05, 2) + boundChip("마찰 끔 경계", b.off, "Nm", 0.05, 2);
    if (narrow(b.on, 0.05) && narrow(b.off, 0.05)) markDone("c3");
    renderCompare();
  }
  function renderPayloadLog() {
    const L = logs.payload;
    $("logtbl-m").innerHTML = L.length ? L.slice().reverse().map((r) =>
      `<tr><td class="n">${r.n}</td><td class="n">${Math.round(r.payload * 1000)} g</td>` +
      `<td>${pill(r.hold)}</td><td class="n">${r.q2deg.toFixed(1)}°</td></tr>`).join("")
      : `<tr><td colspan="4" class="note">아직 기록이 없습니다.</td></tr>`;
    const b = bracket(L.map((r) => ({ ...r, g: r.payload * 1000 })), "g", true);
    $("bounds-m").innerHTML = boundChip("버틸 수 있는 최대 물체", b, "g", 10, 0);
    if (narrow(b, 10) && state.predM != null) {
      const truthM = (FMAX_ROBOTIS - truth.g) / (GRAV * truth.eeX) * 1000;
      const inside = truthM >= b.lo - 5 && truthM <= b.hi + 5;
      const fb = $("fb-predm"); fb.hidden = false; fb.className = "fb ok";
      fb.innerHTML = `실험 경계 ${b.lo}~${b.hi} g, 계산값 ${truthM.toFixed(0)} g${inside ? " — 계산과 실험이 맞습니다." : ""} 내 예측은 ${state.predM} g였습니다.`;
      markDone("c5");
    }
  }
  function renderCompare() {
    const b = torqueBounds();
    const ready = state.predG != null && narrow(b.on, 0.05) && narrow(b.off, 0.05);
    $("c4-lock").hidden = ready; $("c4-body").hidden = !ready;
    if (!ready) return;
    const mid = (x) => (x.lo + x.hi) / 2;
    const items = [
      ["내 예측", state.predG, "var(--muted)"],
      ["MuJoCo g(q)", truth.g, "var(--gravity)"],
      ["경계 · 마찰 끔", mid(b.off), "var(--accent)"],
      ["경계 · 마찰 켬", mid(b.on), "var(--accent)"],
    ];
    $("cmp").innerHTML = items.map(([k, v, c]) =>
      `<div class="cmprow"><span>${k}</span><div class="b"><span style="width:${Math.min(v / 0.8, 1) * 100}%;background:${c}"></span></div><span class="n">${v.toFixed(2)}</span></div>`).join("") +
      `<p class="note" style="margin-top:6px">마찰 끔 경계 ≈ g(q). 마찰 켬 경계 ≈ g(q) − 마찰 ${fric0.toFixed(2)} = ${(truth.g - fric0).toFixed(2)} Nm.</p>`;
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
    renderCompare();
  });
  $("btn-run").addEventListener("click", () => {
    const cfg = { f2: +$("sl-f").value, fric: $("cb-fric").checked, payload: 0 };
    runReach(cfg, (r) => { logs.torque.push({ n: logs.torque.length + 1, ...cfg, ...r }); renderTorqueLog(); });
  });
  $("btn-reset").addEventListener("click", () => { curF2 = null; lab.resetPose(); });
  $("btn-predm").addEventListener("click", () => {
    const v = parseFloat($("pred-m").value), fb = $("fb-predm"); fb.hidden = false;
    if (!isFinite(v)) { fb.className = "fb no"; fb.textContent = "g 단위 숫자를 입력하세요. 예: 150"; return; }
    state.predM = v; save();
    fb.className = "fb"; fb.textContent = `예측 ${v} g을 저장했습니다. 슬라이더로 물체 무게를 바꿔 실행하며 경계를 10 g 폭 안으로 좁혀 보세요.`;
    renderPayloadLog();
  });
  $("btn-runm").addEventListener("click", () => {
    const cfg = { f2: FMAX_ROBOTIS, fric: false, payload: +$("sl-m").value / 1000 };
    runReach(cfg, (r) => { logs.payload.push({ n: logs.payload.length + 1, ...cfg, ...r }); renderPayloadLog(); });
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
    computeTruth(); fillTables();
  }).catch(() => { /* 오류 문구는 lab.js가 화면에 표시 */ });
})();
