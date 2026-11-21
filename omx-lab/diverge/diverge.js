/* diverge · 시뮬 폭발·발산 — 적분기, dt와 강성: 오일러 안정 조건 dt < 2/ω, ω = √(Kp/I)
 *
 * joint1 position 액추에이터를 한계 없는 스프링(Kp, kv = 0)으로 바꾸고 10° 스텝. 팔은 뻗은 자세, 마찰 끔.
 * 확인한 값 (MuJoCo 3.17.0, I = 0.0206): Kp 200 → 식 20.3 ms. Euler 20 ms 버팀 / 25 ms 발산. RK4 25 ms 버팀 / 30 ms 발산.
 *   Kp 800 → 식 10.1 ms (Euler 10 버팀 / 12 발산).
 */
(() => {
  "use strict";
  const { $, Q, A, deg, rad, logTable, pill } = OmxLab;
  const REACH = { [Q.j2]: 1.4, [Q.j3]: -1.4 };
  const RUN = 3.0;
  OmxLab.shell("diverge");
  const box = OmxLab.store("omx-lab-diverge"), state = box.get(), save = () => box.set(state);
  let lab = null, I = 0.0206;
  const logs = [];
  const dtMax = (kp) => 2 * Math.sqrt(I / kp);
  const INT = { 0: "Euler", 1: "RK4" };

  const plot = OmxLab.Plot($("plot"), { T: RUN, yRange: [-10, 40], digits: 0, series: [{ name: "목표", color: "--muted", dash: true }, { name: "joint1 각도", color: "--accent" }] });
  plot.legend($("plot-legend"));

  const run = (o = {}) => new Promise((resolve) => {
    const kp = o.kp ?? +$("sel-kp").value, dt = o.dt ?? +$("sel-dt").value, integ = o.integ ?? +$("sel-int").value;
    let mx = 0;
    plot.reset(RUN);
    lab.run({
      duration: RUN, speed: o.speed || 1,
      setup(model, data) {
        model.opt.timestep = dt; model.opt.integrator = integ;
        for (let j = 0; j < 5; j++) model.dof_frictionloss[j] = 0;
        model.actuator_gainprm[A.j1 * 10] = kp; model.actuator_biasprm[A.j1 * 10 + 1] = -kp; model.actuator_biasprm[A.j1 * 10 + 2] = 0;
        model.actuator_forcerange[A.j1 * 2] = -1e6; model.actuator_forcerange[A.j1 * 2 + 1] = 1e6;
        data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3];
        data.ctrl[A.j1] = rad(10); data.ctrl[A.j2] = REACH[Q.j2]; data.ctrl[A.j3] = REACH[Q.j3];
      },
      sample(t, data) { const q = deg(data.qpos[Q.j1]); if (isFinite(q)) mx = Math.max(mx, Math.abs(q)); plot.push(t, [10, isFinite(q) ? Math.max(-10, Math.min(40, q)) : NaN]); },
      judge() { const ok = mx < 90; return { ok, state: ok ? "안정" : "발산", cls: ok ? "hold" : "fall" }; },
      done(r) {
        const ok = !r.diverged && r.ok !== false;
        logs.push({ n: logs.length + 1, kp, dt, integ, ok, tDiv: r.tDiv });
        render();
        if (r.diverged) { lab.resetPose(REACH); lab.setRunState(`발산 (${r.tDiv.toFixed(2)} s) → 처음 자세로`, "fall"); }   // 터진 자세는 보기 어려우니 처음 자세로
        resolve({ ok, tDiv: r.tDiv });
      },
    });
  });
  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.kp, n: 1 }, { f: (r) => +(r.dt * 1000).toFixed(1) + " ms", n: 1 }, { f: (r) => INT[r.integ] },
      { f: (r) => (dtMax(r.kp) * 1000).toFixed(1) + " ms", n: 1 },
      { f: (r) => r.ok ? pill(true, "안정", "") : pill(false, "", `발산 (${r.tDiv != null ? r.tDiv.toFixed(2) + " s" : ""})`) },
    ]);
    $("p-dt").textContent = state.predDt != null && isFinite(state.predDt) ? state.predDt + " ms" : "아직 없음 (2단계에서 먼저 계산)";
    if (state.okChk && state.rk4) $("c3").classList.add("done");
  }
  const needPred = (fb) => { if (state.predDt != null && isFinite(state.predDt) && state.predDt > 0) return false; fb.hidden = false; fb.className = "fb no"; fb.textContent = "2단계에서 dt 한계를 먼저 예측하세요."; return true; };
  $("btn-chk").addEventListener("click", async () => {
    if (needPred($("fb-chk"))) return;
    const r = await OmxLab.check3({
      pred: state.predDt, lowGood: true, good: "안정입니다", bad: "발산합니다", fb: $("fb-chk"),
      round: (v) => Math.round(v * 10) / 10, fmt: (v) => v.toFixed(1) + " ms",
      run: (ms) => run({ kp: 200, dt: ms / 1000, integ: 0, speed: 2 }).then((x) => x.ok),
      hint: "ω = √(Kp ÷ I), dt 한계 = 2 ÷ ω (초 → ms) 를 다시 확인해 보세요.",
    });
    if (r.ok) { state.okChk = 1; save(); render(); $("fb-chk").innerHTML += ` 계산값은 ${(dtMax(200) * 1000).toFixed(1)} ms입니다.`; }
  });
  $("btn-rk4").addEventListener("click", async () => {
    if (needPred($("fb-rk4"))) return;
    const ms = Math.round(state.predDt * 1.1 * 10) / 10, r = await run({ kp: 200, dt: ms / 1000, integ: 1 }), fb = $("fb-rk4");
    fb.hidden = false; fb.className = "fb " + (r.ok ? "ok" : "");
    fb.innerHTML = r.ok ? `Euler로는 터지던 ${ms.toFixed(1)} ms인데, RK4로는 <b>안정</b>입니다. RK4는 한 칸을 4번 나눠 계산해서 한계가 약 1.4배 넓습니다. 그래도 dt를 더 키우면 결국 터집니다.`
      : `RK4로도 ${ms.toFixed(1)} ms에서 발산했습니다. 예측이 커서 RK4 한계(약 1.4배)도 넘었을 수 있습니다.`;
    state.rk4 = 1; save(); render();
  });
  $("btn-pred").addEventListener("click", () => {
    if (!lab) return;
    const v = parseFloat($("pred-dt").value); state.predDt = v; save(); render();
    if (OmxLab.checkPrediction($("fb-pred"), v, dtMax(200) * 1000, 0.05, "ms", "실험에서 dt를 늘려 확인해 보세요.", "ω = √(Kp ÷ I) 를 먼저 구하고 dt = 2 ÷ ω 입니다. 초를 ms로 바꿨는지 확인하세요."))
      { $("c1").classList.add("done"); $("c2").classList.add("done"); }
  });
  $("btn-run").addEventListener("click", () => run());
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "c") { fb.className = "fb ok"; fb.textContent = "맞습니다. ω = √(K ÷ m)라서 가벼운 링크일수록 진동이 빨라지고 dt 한계가 더 작아집니다. 아주 가벼운 링크는 오히려 질량을 현실적인 값으로 키우거나, 무거운 링크와의 질량비를 줄여야 합니다. (이 프로젝트 초기에 URDF의 질량 없는 링크 문제를 고친 것도 같은 이유입니다.)"; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "그 방법은 실제로 발산을 막는 데 도움이 됩니다. ω = √(K ÷ m) 에서 ω를 키우는 쪽을 골라 보세요."; }
  });
  if (state.predDt != null) $("pred-dt").value = state.predDt;
  render();

  OmxLab.start({ home: REACH, camera: { pos: [0.55, -0.45, 0.45], target: [0.12, 0, 0.08] } }).then((l) => {
    lab = l;
    const BTN = ["btn-run", "btn-chk", "btn-rk4"];
    lab.onBusy((busy) => BTN.forEach((id) => { $(id).disabled = busy; }));
    BTN.forEach((id) => { $(id).disabled = false; });
    I = lab.fullM()[0];
    $("given2").innerHTML = `joint1 관성 I = ${I.toFixed(4)} kg·m² (뻗은 팔, MuJoCo M(q))<br>스프링 Kp = 200 N·m/rad, 적분기 Euler`;
    const w = Math.sqrt(200 / I);
    $("sol").innerHTML = `ω = √(200 ÷ ${I.toFixed(4)}) = ${w.toFixed(1)} rad/s (${(w / 2 / Math.PI).toFixed(1)} Hz)<br>dt < 2 ÷ ${w.toFixed(1)} = <b>${(2 / w * 1000).toFixed(1)} ms</b>`;
    lab.readouts($("gauge"), [
      { k: "joint1 각도", v: () => `${deg(lab.data.qpos[Q.j1]).toFixed(2)}<small>°</small>` },
      { k: "dt (설정)", v: () => `${(lab.model.opt.timestep * 1000).toFixed(0)}<small> ms</small>` },
      { k: "식 한계 2/ω", v: () => `${(dtMax(+$("sel-kp").value) * 1000).toFixed(1)}<small> ms</small>` },
    ]);
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
