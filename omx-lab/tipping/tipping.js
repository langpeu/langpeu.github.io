/* tipping · 넘어짐 — 무게중심과 지지 영역, 빠른 동작의 관성
 *
 * 모델 변형: link0(베이스)에 freejoint → 바닥에 고정되지 않음. 관절 qpos는 7칸 뒤로 밀림(lab.qadr 사용).
 * 베이스 바닥면 x = −0.06 ~ +0.06 m (충돌 메시 바닥 꼭짓점에서 확인). 무게추는 베이스 질량(link0, 무게중심 x ≈ −0.0144)에 더함.
 * 확인한 값 (MuJoCo 3.17.0): 뻗은 자세 M 0.5588 kg, x무게중심 0.0922 → 식 0.242 kg.
 *   5초: 0.24 넘어짐 / 0.25 버팀. 0.8초: 0.27 넘어짐 / 0.30 버팀 근처. 0.4초: 0.4 넘어짐 / 0.5 버팀
 */
(() => {
  "use strict";
  const { $, A, B, deg, smooth, logTable, pill } = OmxLab;
  const X_EDGE = 0.06, HOLD = 3, TILT = 3;
  OmxLab.shell("tipping");
  const box = OmxLab.store("omx-lab-tipping"), state = box.get(), save = () => box.set(state);
  let lab = null, qa = {}, m0 = 0, truth = { M: 0.5588, xc: 0.0922, xb: -0.0144, w: 0.242 };
  const logs = [];
  const transform = (x) => x.replace('<body name="link0">', '<body name="link0" pos="0 0 0"><freejoint name="base"/>');

  const plot = OmxLab.Plot($("plot"), { T: 8, yRange: [0, 30], digits: 0, series: [{ name: "베이스 기울기", color: "--bad" }, { name: "넘어짐 기준 3°", color: "--muted", dash: true }] });
  plot.legend($("plot-legend"));
  const wEl = $("sl-w"); const wu = () => { $("v-w").textContent = (+wEl.value).toFixed(2) + " kg"; }; wEl.addEventListener("input", wu); wu();
  const tilt = (d) => deg(2 * Math.asin(Math.min(1, Math.hypot(d.qpos[4], d.qpos[5], d.qpos[6]))));   // 베이스 쿼터니언 → 기울기

  const run = (o = {}) => new Promise((resolve) => {
    const w = o.w ?? +wEl.value, T = o.T ?? +$("sel-T").value;
    let mx = 0;
    plot.reset(T + HOLD);
    lab.run({
      duration: T + HOLD, speed: o.speed || 1,
      setup(model) { model.body_mass[B.link0] = m0 + w; },
      control(t, data) { const a = smooth(t / T); data.ctrl[A.j2] = 1.4 * a; data.ctrl[A.j3] = -1.4 * a; },
      sample(t, data) { const v = tilt(data); mx = Math.max(mx, v); plot.push(t, [Math.min(v, 30), TILT]); },
      judge() { const hold = mx < TILT; return { hold, mx, state: hold ? "버팀" : "넘어짐", cls: hold ? "hold" : "fall" }; },
      done(r) { logs.push({ n: logs.length + 1, w, T, ...r }); render(); resolve(r); },
    });
  });
  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.w.toFixed(2) + " kg", n: 1 }, { f: (r) => r.T + " s", n: 1 }, { f: (r) => r.mx.toFixed(1) + "°", n: 1 },
      { f: (r) => pill(r.hold, "버팀", "넘어짐") },
    ]);
    $("p-w").textContent = state.predW != null && isFinite(state.predW) ? state.predW + " kg" : "아직 없음 (2단계에서 먼저 계산)";
    if (state.okChk && state.fast) $("c3").classList.add("done");
  }
  const needPred = (fb) => { if (state.predW != null && isFinite(state.predW) && state.predW > 0) return false; fb.hidden = false; fb.className = "fb no"; fb.textContent = "2단계에서 무게추를 먼저 예측하세요."; return true; };
  $("btn-chk").addEventListener("click", async () => {
    if (needPred($("fb-chk"))) return;
    const r = await OmxLab.check3({
      pred: state.predW, lowGood: false, good: "버팁니다", bad: "넘어집니다", fb: $("fb-chk"),
      round: (v) => Math.round(v * 1000) / 1000, fmt: (v) => v.toFixed(3) + " kg",
      run: (w) => run({ w, T: 5, speed: 3 }).then((x) => x.hold),
      hint: "앞 모서리(x = 0.06) 기준 회전력: 로봇 M × (x무게중심 − 0.06) = 무게추 × (0.06 − x추) 를 확인해 보세요.",
    });
    if (r.ok) { state.okChk = 1; save(); render(); $("fb-chk").innerHTML += ` 계산값은 ${truth.w.toFixed(3)} kg입니다.`; }
  });
  $("btn-fast").addEventListener("click", async () => {
    if (needPred($("fb-fast"))) return;
    const w = Math.round(state.predW * 1.1 * 1000) / 1000, r = await run({ w, T: 0.4 }), fb = $("fb-fast");
    fb.hidden = false; fb.className = "fb " + (r.hold ? "" : "ok");
    fb.innerHTML = r.hold ? `${w.toFixed(3)} kg로 빠르게 뻗어도 버텼습니다(최대 ${r.mx.toFixed(1)}°). 예측이 넉넉했던 것 같습니다. 무게추를 줄여 다시 해 보세요.`
      : `천천히는 버티던 ${w.toFixed(3)} kg인데, 빠르게 뻗으니 <b>넘어졌습니다</b>(최대 ${r.mx.toFixed(1)}°). 멈출 때 팔이 앞으로 쏠리는 관성 때문입니다. 4단계에서 이유를 확인해 보세요.`;
    state.fast = 1; save(); render();
  });

  $("btn-pred").addEventListener("click", () => {
    if (!lab) return;
    const v = parseFloat($("pred-w").value); state.predW = v; save(); render();
    if (OmxLab.checkPrediction($("fb-pred"), v, truth.w, 0.05, "kg", "천천히 뻗는 실험으로 확인해 보세요.", "앞 모서리(x = 0.06)를 기준으로 거리를 재야 합니다. 무게추는 모서리 뒤쪽에 있어서 거리 = 0.06 − x추 입니다."))
      { $("c1").classList.add("done"); $("c2").classList.add("done"); }
  });
  $("btn-run").addEventListener("click", () => run());
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. 정지 상태 조건(무게중심이 받침 안)은 천천히 움직일 때만 맞습니다. 빠르게 가속·감속하면 링크의 관성력까지 바닥이 받쳐야 해서, 실제로 바닥을 누르는 점(ZMP)이 무게중심보다 더 앞까지 갑니다. 보행 로봇이 빠르게 걸을 때 넘어지기 쉬운 것도 같은 이유입니다."; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "다시 생각해 보세요. 질량과 바닥 마찰은 그대로입니다. 바뀐 것은 팔이 얼마나 빨리 가속하고 멈추느냐입니다."; }
  });
  if (state.predW != null) $("pred-w").value = state.predW;
  render();

  OmxLab.start({ transform, camera: { pos: [0.35, -0.7, 0.3], target: [0.12, 0, 0.08] } }).then((l) => {
    lab = l;
    for (const j of ["joint2", "joint3"]) qa[j] = lab.qadr(j);
    m0 = lab.model.body_mass[B.link0];
    const BTN = ["btn-run", "btn-chk", "btn-fast"];
    lab.onBusy((busy) => BTN.forEach((id) => { $(id).disabled = busy; }));
    BTN.forEach((id) => { $(id).disabled = false; });
    // 뻗은 자세의 전체 질량과 무게중심 (화면 표시용으로 MuJoCo에서 계산)
    const { mj, model, data } = lab;
    mj.mj_resetData(model, data); data.qpos[qa.joint2] = 1.4; data.qpos[qa.joint3] = -1.4; mj.mj_forward(model, data);
    let M = 0, X = 0; for (let b = 1; b < model.nbody; b++) { M += model.body_mass[b]; X += model.body_mass[b] * data.xipos[b * 3]; }
    truth = { M, xc: X / M, xb: data.xipos[B.link0 * 3] };
    truth.w = M * (truth.xc - X_EDGE) / (X_EDGE - truth.xb);
    lab.resetPose();
    $("given2").innerHTML = `뻗은 자세에서 로봇 전체 질량 M = ${M.toFixed(4)} kg, 전체 무게중심 x = ${truth.xc.toFixed(4)} m<br>` +
      `베이스 앞 모서리 x모서리 = ${X_EDGE.toFixed(2)} m, 무게추 위치(베이스 무게중심) x추 = ${truth.xb.toFixed(4)} m`;
    $("sol").innerHTML = `앞 모서리 앞쪽 회전력: ${M.toFixed(4)} × (${truth.xc.toFixed(4)} − ${X_EDGE}) = ${(M * (truth.xc - X_EDGE)).toFixed(5)} kg·m<br>` +
      `무게추 팔 길이: ${X_EDGE} − (${truth.xb.toFixed(4)}) = ${(X_EDGE - truth.xb).toFixed(4)} m<br>m추 ≥ ${(M * (truth.xc - X_EDGE)).toFixed(5)} ÷ ${(X_EDGE - truth.xb).toFixed(4)} = <b>${truth.w.toFixed(3)} kg</b>`;
    const all = []; for (let b = 1; b < model.nbody; b++) all.push(b);
    lab.showLever(all, null, false);   // 전체 무게중심 점만 (강조 색은 끔)
    lab.readouts($("gauge"), [
      { k: "베이스 기울기", v: () => `${tilt(lab.data).toFixed(1)}<small>°</small>` },
      { k: "전체 무게중심 x", v: () => { const d = lab.data, m = lab.model; let s = 0, sx = 0; for (let b = 1; b < m.nbody; b++) { s += m.body_mass[b]; sx += m.body_mass[b] * d.xipos[b * 3]; } return `${(sx / s - d.qpos[0]).toFixed(3)}<small> m (모서리 ${X_EDGE})</small>`; } },
      { k: "joint2 각도", v: () => `${deg(lab.data.qpos[qa.joint2]).toFixed(1)}<small>°</small>` },
    ]);
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
