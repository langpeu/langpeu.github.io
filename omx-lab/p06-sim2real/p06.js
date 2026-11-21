/* 상황 6 · Sim-to-Real 갭 — 모델 파라미터 오차와 시스템 식별
 *
 * '실물 로봇' = 손끝에 숨은 무게(40~100 g, 브라우저마다 무작위, localStorage에 저장)가 붙은 같은 모델.
 * 제어기는 상황 3과 같음: joint2 토크 PD(Kp 10, Kd 0.3) + 모델 g(q). 모델 g(q)는 '보정 무게'만 손끝에 넣어 계산.
 * 처짐 e ≈ (숨은 − 보정)·g·x손끝 ÷ Kp (상황 3에서 확인: 100 g → 2.25°)
 */
(() => {
  "use strict";
  const { $, Q, A, B, GRAV, deg, logTable } = OmxLab;
  const REACH = { [Q.j2]: 1.4, [Q.j3]: -1.4 };
  const RUN = 4.0, KP = 10, KD = 0.3;
  OmxLab.renderNav($("nav"), "p06-sim2real");
  const box = OmxLab.store("omx-lab-6"), state = box.get(), save = () => box.set(state);
  const draw = () => 40 + Math.floor(Math.random() * 61);
  if (!state.hidden) { state.hidden = draw(); save(); }
  let lab = null, d2 = null, xee = 0.401;
  const logs = [];

  const plot = OmxLab.Plot($("plot"), { T: RUN, digits: 1, series: [{ name: "처짐 (+ = 아래로)", color: "--gravity" }] });
  plot.legend($("plot-legend"));

  function gModel(qpos, corrKg) {
    const m = lab.model, keep = m.body_mass[B.ee];
    m.body_mass[B.ee] = corrKg;
    d2.qpos.set(qpos); d2.qvel.fill(0); lab.mj.mj_forward(m, d2);
    m.body_mass[B.ee] = keep;
    return d2.qfrc_bias[Q.j2];
  }
  function run(real, corrG) {
    plot.reset(RUN);
    lab.run({
      duration: RUN,
      setup(model, data) {
        lab.motor(A.j2);
        for (let j = 0; j < 5; j++) model.dof_frictionloss[j] = 0;
        lab.setPayload(real ? state.hidden / 1000 : corrG / 1000);   // 시뮬 모델 = 모델이 믿는 값 그대로
        data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3]; data.ctrl[A.j3] = REACH[Q.j3];
      },
      control(t, data) { data.ctrl[A.j2] = KP * (REACH[Q.j2] - data.qpos[Q.j2]) - KD * data.qvel[Q.j2] + gModel(data.qpos, corrG / 1000); },
      sample(t, data) { plot.push(t, [deg(data.qpos[Q.j2] - REACH[Q.j2])]); },
      judge(data) { const e = deg(data.qpos[Q.j2] - REACH[Q.j2]); return { e, state: `처짐 ${e.toFixed(2)}°`, cls: Math.abs(e) < 0.15 ? "hold" : "" }; },
      done(r) { logs.push({ n: logs.length + 1, real, corrG, ...r }); render(); },
    });
  }
  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.real ? "'실물 로봇'" : "시뮬 모델" }, { f: (r) => r.corrG + " g", n: 1 }, { f: (r) => r.e.toFixed(2) + "°", n: 1 },
    ]);
    const realRuns = logs.filter((r) => r.real && r.corrG === 0);
    if (logs.some((r) => !r.real) && realRuns.length) $("c2").classList.add("done");
    const lastReal = realRuns[realRuns.length - 1];
    $("given3").innerHTML = lastReal ? `'실물'에서 잰 처짐 e = ${lastReal.e.toFixed(2)}° = ${(lastReal.e * Math.PI / 180).toFixed(4)} rad<br>Kp = ${KP} N·m/rad, g = 9.81 m/s², x손끝 = ${xee.toFixed(3)} m`
      : "먼저 2단계에서 '실물 로봇'으로 실행해 처짐을 재세요.";
  }

  $("btn-sim").addEventListener("click", () => run(false, 0));
  $("btn-real").addEventListener("click", () => run(true, 0));
  $("btn-pred").addEventListener("click", () => {
    const fb = $("fb-pred");
    if (!logs.some((r) => r.real && r.corrG === 0)) { fb.hidden = false; fb.className = "fb no"; fb.textContent = "먼저 '실물 로봇'으로 실행해 처짐을 재세요."; return; }
    const v = parseFloat($("pred-m").value);
    if (OmxLab.checkPrediction(fb, v, state.hidden, 0.1, "g", "4단계에서 이 값을 모델에 넣어 확인해 보세요.", "e를 rad로 바꿨는지, 결과 kg을 g으로 바꿨는지 확인하세요.")) {
      $("c1").classList.add("done"); $("c3").classList.add("done"); $("in-corr").value = Math.round(v);
    }
  });
  $("btn-corr").addEventListener("click", () => {
    const c = Math.max(0, parseFloat($("in-corr").value) || 0);
    run(true, c);
    const fb = $("fb-corr");
    const once = (r) => {
      fb.hidden = false;
      if (Math.abs(r.e) < 0.25) { fb.className = "fb ok"; fb.textContent = `보정 후 실물 처짐 ${r.e.toFixed(2)}° — 모델이 실물에 맞춰졌습니다. 이렇게 실물에서 잰 값으로 모델을 고치는 것이 시스템 식별입니다.`; $("c4").classList.add("done"); }
      else { fb.className = "fb no"; fb.textContent = `보정 후에도 ${r.e.toFixed(2)}° 처집니다. ${r.e > 0 ? "아직 무게가 모자랍니다" : "무게를 너무 많이 넣었습니다(반대로 들림)"}. 추정을 다시 해 보세요.`; }
    };
    const n0 = logs.length;
    const wait = () => { if (logs.length > n0) once(logs[logs.length - 1]); else requestAnimationFrame(wait); };
    wait();
  });
  $("btn-new").addEventListener("click", () => {
    state.hidden = draw(); save();
    logs.length = 0; render();
    ["c2", "c3", "c4"].forEach((id) => $(id).classList.remove("done"));
    ["fb-pred", "fb-corr"].forEach((id) => { $(id).hidden = true; });
    $("pred-m").value = ""; $("in-corr").value = 0;
  });
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. 랜덤화 범위가 실제 값을 포함하지 않으면 시뮬에서 아무리 잘 돼도 실물은 '처음 보는 조건'이 됩니다. 범위는 실제 가능한 값을 넉넉히 덮되, 너무 넓으면 제어가 둔해지므로 측정할 수 있는 값은 측정(시스템 식별)해서 좁히는 것이 좋습니다."; $("c5").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "그 범위에는 실제 값(40~100 g)이 들어 있지 않습니다. 시뮬에서 한 번도 본 적 없는 조건이 실물이 됩니다."; }
  });
  render();

  OmxLab.start({ home: REACH }).then((l) => {
    lab = l; d2 = new lab.mj.MjData(lab.model);
    const btns = ["btn-sim", "btn-real", "btn-corr"];
    lab.onBusy((busy) => btns.forEach((id) => { $(id).disabled = busy; }));
    btns.forEach((id) => { $(id).disabled = false; });
    const { mj, model, data } = lab;
    data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3]; mj.mj_forward(model, data);
    xee = data.xpos[B.ee * 3] - data.xpos[B.link2 * 3];
    render();
    lab.jointGauge($("gauge"), { dof: Q.j2, act: A.j2, targetDeg: deg(REACH[Q.j2]), max: 1.6, limit: () => 1.5 });
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
