/* lag · 너무 느림·궤적 지연 — 토크 한계와 관성: T최소 = π·√(I·Δq ÷ (2·τ한계)), 피드포워드
 *
 * joint1을 토크 모터로: 0 → 90° 코사인 궤적(T초), PD Kp 20 Kd 0.5 (+ 선택: I·α + b·ω 피드포워드). 한계 1.5 N·m.
 * 팔은 뻗은 자세, 손끝 200 g, 마찰 끔. 판정: 최대 오차 ≤ 2°.
 * 확인한 값 (MuJoCo 3.17.0): I = 0.0528 → T최소 0.522 s. 피드포워드 켬: 0.52 s 3.5° / 0.54 s 1.2°.
 *   끔: 0.8 s 2.8° / 1.0 s 1.9°
 */
(() => {
  "use strict";
  const { $, Q, A, deg, rad, smooth, logTable, pill } = OmxLab;
  const REACH = { [Q.j2]: 1.4, [Q.j3]: -1.4 };
  const DQ = rad(90), TAU = 1.5, KP = 20, KD = 0.5, PAY = 0.2, AFTER = 1.5, TOL = 2;
  OmxLab.shell("lag");
  const box = OmxLab.store("omx-lab-lag"), state = box.get(), save = () => box.set(state);
  let lab = null, I = 0.0528, b = 0.2;
  const logs = [];
  const tmin = () => Math.PI * Math.sqrt(I * DQ / (2 * TAU));

  const plot = OmxLab.Plot($("plot"), { T: 2.5, yRange: [-5, 100], digits: 0, series: [{ name: "계획", color: "--muted", dash: true }, { name: "실제 joint1", color: "--accent" }] });
  plot.legend($("plot-legend"));
  const TEl = $("sl-T"); const tu = () => { $("v-T").textContent = (+TEl.value).toFixed(2) + " s"; }; TEl.addEventListener("input", tu); tu();
  const plan = (t, T) => {   // 계획 궤적: 각도, 각속도, 각가속도
    if (t >= T) return [DQ, 0, 0];
    const s = t / T;
    return [DQ * smooth(s), DQ * Math.PI / (2 * T) * Math.sin(Math.PI * s), DQ * Math.PI * Math.PI / (2 * T * T) * Math.cos(Math.PI * s)];
  };

  const run = (o = {}) => new Promise((resolve) => {
    const T = o.T ?? +TEl.value, ff = o.ff ?? $("cb-ff").checked;
    let emax = 0, sat = 0, n = 0;
    plot.reset(T + AFTER);
    lab.run({
      duration: T + AFTER, speed: o.speed || 1,
      setup(model, data) {
        lab.motor(A.j1); lab.setPayload(PAY);
        for (let j = 0; j < 5; j++) model.dof_frictionloss[j] = 0;
        data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3]; data.ctrl[A.j2] = REACH[Q.j2]; data.ctrl[A.j3] = REACH[Q.j3];
      },
      control(t, data) {
        const [qd, vd, ad] = plan(t, T);
        let tau = KP * (qd - data.qpos[Q.j1]) + KD * (vd - data.qvel[Q.j1]);
        if (ff) tau += I * ad + b * vd;
        n++; if (Math.abs(tau) > TAU) sat++;
        data.ctrl[A.j1] = tau;
      },
      sample(t, data) { const qd = plan(t, T)[0]; emax = Math.max(emax, Math.abs(qd - data.qpos[Q.j1])); plot.push(t, [deg(qd), deg(data.qpos[Q.j1])]); },
      judge() { const e = deg(emax), ok = e <= TOL; return { e, satPct: sat / Math.max(n, 1) * 100, ok, state: ok ? "따라감" : `늦음 (최대 ${e.toFixed(1)}°)`, cls: ok ? "hold" : "fall" }; },
      done(r) { logs.push({ n: logs.length + 1, T, ff, ...r }); render(); resolve(r); },
    });
  });
  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.T.toFixed(2) + " s", n: 1 }, { f: (r) => r.ff ? "켬" : "끔" }, { f: (r) => r.e.toFixed(1) + "°", n: 1 },
      { f: (r) => r.satPct.toFixed(0) + "%", n: 1 }, { f: (r) => pill(r.ok, "따라감", "늦음") },
    ]);
    $("p-T").textContent = state.predT != null && isFinite(state.predT) ? state.predT + " s" : "아직 없음 (2단계에서 먼저 계산)";
    if (state.okChk && state.noff) $("c3").classList.add("done");
  }
  const needPred = (fb) => { if (state.predT != null && isFinite(state.predT) && state.predT > 0) return false; fb.hidden = false; fb.className = "fb no"; fb.textContent = "2단계에서 T최소를 먼저 예측하세요."; return true; };
  $("btn-chk").addEventListener("click", async () => {
    if (needPred($("fb-chk"))) return;
    const r = await OmxLab.check3({
      pred: state.predT, lowGood: false, good: "따라갑니다", bad: "늦습니다", fb: $("fb-chk"),
      round: (v) => Math.round(v * 1000) / 1000, fmt: (v) => v.toFixed(3) + " s",
      run: (T) => run({ T, ff: true, speed: 2 }).then((x) => x.ok),
      hint: "T최소 = π × √(I·Δq ÷ (2·τ한계)), Δq는 라디안(1.571)입니다.",
    });
    if (r.ok) { state.okChk = 1; save(); render(); $("fb-chk").innerHTML += ` 계산값은 ${tmin().toFixed(3)} s입니다.`; }
  });
  $("btn-noff").addEventListener("click", async () => {
    if (needPred($("fb-noff"))) return;
    const T = Math.round(state.predT * 1.1 * 1000) / 1000, r = await run({ T, ff: false }), fb = $("fb-noff");
    fb.hidden = false; fb.className = "fb " + (r.ok ? "" : "ok");
    fb.innerHTML = r.ok ? `피드포워드 없이도 ${T.toFixed(3)} s에 따라갔습니다(최대 ${r.e.toFixed(1)}°).`
      : `피드포워드를 켜면 따라가던 ${T.toFixed(3)} s인데, 끄니 <b>늦습니다</b>(최대 오차 ${r.e.toFixed(1)}°). PD는 오차가 생긴 뒤에야 힘을 내기 때문입니다. 피드포워드 없이 따라가려면 약 1초가 필요합니다(직접 값 넣어 보기에서 확인).`;
    state.noff = 1; save(); render();
  });
  $("btn-pred").addEventListener("click", () => {
    if (!lab) return;
    const v = parseFloat($("pred-T").value); state.predT = v; save(); render();
    if (OmxLab.checkPrediction($("fb-pred"), v, tmin(), 0.05, "s", "피드포워드를 켜고 실험해 보세요.", "Δq는 라디안(π/2 = 1.571)으로 넣었는지 확인하세요."))
      { $("c1").classList.add("done"); $("c2").classList.add("done"); }
  });
  $("btn-run").addEventListener("click", () => run());
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. T최소보다 빠른 궤적은 모터가 낼 수 있는 토크를 넘는 가속을 요구하므로, 게인이나 피드포워드를 아무리 키워도 토크 한계에서 잘립니다(토크 포화). 궤적을 느리게 하거나, 관성 I를 줄이거나(물체를 가볍게, 팔을 접어서), 더 센 모터를 써야 합니다."; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "표의 '토크 한계에 걸린 시간'을 보세요. 이미 모터가 낼 수 있는 최대 토크를 내고 있습니다. 명령을 더 크게 해도 잘릴 뿐입니다."; }
  });
  if (state.predT != null) $("pred-T").value = state.predT;
  render();

  OmxLab.start({ home: REACH, camera: { pos: [0.3, -0.75, 0.6], target: [0.1, 0.05, 0.08] } }).then((l) => {
    lab = l;
    const BTN = ["btn-run", "btn-chk", "btn-noff"];
    lab.onBusy((busy) => BTN.forEach((id) => { $(id).disabled = busy; }));
    BTN.forEach((id) => { $(id).disabled = false; });
    const { mj, model, data } = lab;
    lab.setPayload(PAY); data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3]; mj.mj_forward(model, data);
    I = lab.fullM()[0]; b = model.dof_damping[Q.j1];
    lab.resetPose(REACH);
    $("given2").innerHTML = `joint1 관성 (뻗은 팔 + 손끝 200 g) I = ${I.toFixed(4)} kg·m²<br>Δq = 90° = π/2 rad, 모터 한계 τ한계 = ${TAU} N·m`;
    $("sol").innerHTML = `T최소 = π × √(${I.toFixed(4)} × 1.571 ÷ (2 × ${TAU})) = π × ${Math.sqrt(I * DQ / (2 * TAU)).toFixed(4)} = <b>${tmin().toFixed(3)} s</b>`;
    lab.readouts($("gauge"), [
      { k: "joint1 각도", v: () => `${deg(lab.data.qpos[Q.j1]).toFixed(1)}<small>°</small>` },
      { k: "모터 토크", v: () => `${Math.abs(lab.data.actuator_force[A.j1]).toFixed(2)}<small> / ${TAU} N·m</small>` },
      { k: "식 T최소", v: () => `${tmin().toFixed(3)}<small> s</small>` },
    ]);
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
