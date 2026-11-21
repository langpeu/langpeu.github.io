/* 상황 2 · 떨림·진동 — PD 게인, 감쇠비 ζ, 제어 지연
 *
 * joint1(바닥 회전, 중력 영향 없음)을 토크 모터로 바꿔 PD로 10° 스텝을 따라가게 합니다.
 * 팔은 뻗은 자세(joint2 +80.2°, joint3 −80.2°)로 고정, 관절 마찰 끔.
 * 확인한 값 (MuJoCo 3.17.0): I = 0.0206 kg·m², b = 0.2 → Kp 4 Kd 0: ζ 0.348, 예측 31.1% / 시뮬 31.3%
 *   Kp 4 Kd 0.2: 예측 4.7% / 시뮬 4.7%. 지연 Kp 4 Kd 0.05: 0 ms 22%, 20 ms 38%, 40 ms 62%, 60 ms 계속 흔들림
 */
(() => {
  "use strict";
  const { $, Q, A, deg, rad, fmt, logTable, pill } = OmxLab;
  const REACH = { [Q.j2]: 1.4, [Q.j3]: -1.4 };
  const STEP = rad(10), T0 = 0.2, RUN = 3.0;
  OmxLab.renderNav($("nav"), "p02-vibration");
  const box = OmxLab.store("omx-lab-2"), state = box.get(), save = () => box.set(state);
  let lab = null, I = 0.0206, b = 0.2;
  const logs = [];
  const zeta = (kp, kd) => (kd + b) / (2 * Math.sqrt(kp * I));
  const osPred = (kp, kd) => { const z = zeta(kp, kd); return z < 1 ? 100 * Math.exp(-Math.PI * z / Math.sqrt(1 - z * z)) : 0; };

  const plot = OmxLab.Plot($("plot"), { T: RUN, yRange: [-2, 22], digits: 0,
    series: [{ name: "목표", color: "--muted", dash: true }, { name: "joint1 각도", color: "--accent" }] });
  plot.legend($("plot-legend"));

  const sl = (id, f) => { const e = $(id), v = $("v" + id.slice(2)); const u = () => { v.textContent = f(+e.value); }; e.addEventListener("input", u); u(); return e; };
  const kpEl = sl("sl-kp", (v) => v.toFixed(1) + " N·m/rad"), kdEl = sl("sl-kd", (v) => v.toFixed(2) + " N·m·s/rad"), dlEl = sl("sl-dl", (v) => v + " ms");

  function run() {
    const kp = +kpEl.value, kd = +kdEl.value, delay = +dlEl.value;
    let hist = [], peak = -1e9, lastWin = [];
    plot.reset(RUN);
    lab.run({
      duration: RUN,
      setup(model, data) {
        lab.motor(A.j1);
        for (let j = 0; j < 5; j++) model.dof_frictionloss[j] = 0;
        data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3];
        data.ctrl[A.j2] = REACH[Q.j2]; data.ctrl[A.j3] = REACH[Q.j3];
      },
      control(t, data, model) {
        hist.push([data.qpos[Q.j1], data.qvel[Q.j1]]);
        const nd = Math.round(delay / 1000 / model.opt.timestep);
        const [q, v] = hist[Math.max(0, hist.length - 1 - nd)];
        const tgt = t >= T0 ? STEP : 0;
        data.ctrl[A.j1] = kp * (tgt - q) - kd * v;
      },
      sample(t, data) {
        const q = data.qpos[Q.j1];
        if (t >= T0) peak = Math.max(peak, q);
        if (t > RUN - 1) lastWin.push(q);
        plot.push(t, [deg(t >= T0 ? STEP : 0), deg(q)]);
      },
      judge() {
        const os = (peak - STEP) / STEP * 100;
        const swing = deg(Math.max(...lastWin) - Math.min(...lastWin));
        const settled = swing < 0.5;
        return { os, settled, state: settled ? `오버슈트 ${os.toFixed(1)}%` : "계속 흔들림", cls: settled ? (os <= 5 ? "hold" : "") : "fall" };
      },
      done(r) {
        logs.push({ n: logs.length + 1, kp, kd, delay, pred: osPred(kp, kd), ...r });
        render();
      },
    });
  }

  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.kp.toFixed(1), n: 1 }, { f: (r) => r.kd.toFixed(2), n: 1 }, { f: (r) => r.delay + " ms", n: 1 },
      { f: (r) => r.pred.toFixed(1) + "%", n: 1 }, { f: (r) => r.os.toFixed(1) + "%", n: 1 },
      { f: (r) => r.settled ? pill(r.os <= 5, "5% 이하", "수렴") : pill(false, "", "계속 흔들림") },
    ]);
    const good = logs.find((r) => r.delay === 0 && r.settled && r.os <= 5);
    $("goal3").innerHTML = good ? `<span class="fb ok">오버슈트 5% 이하 달성 ✓ (Kp ${good.kp}, Kd ${good.kd.toFixed(2)} → ${good.os.toFixed(1)}%). 식으로는 ζ ≥ 0.69 → Kd ≥ ${(2 * 0.69 * Math.sqrt(good.kp * I) - b).toFixed(2)}</span>`
      : `<span class="fb">목표: 지연 0에서 오버슈트 5% 이하</span>`;
    if (good) $("c3").classList.add("done");
    const dl = logs.filter((r) => Math.abs(r.kp - 4) < 1e-9 && Math.abs(r.kd - 0.05) < 1e-9).map((r) => r.delay);
    const need = [0, 20, 40, 60].filter((d) => !dl.includes(d));
    $("goal4").innerHTML = need.length ? `<span class="fb">Kp 4, Kd 0.05에서 아직 안 해 본 지연: ${need.join(", ")} ms</span>`
      : `<span class="fb ok">지연 0~60 ms 모두 실행 ✓ — 식의 ζ는 그대로인데 지연이 늘수록 오버슈트가 커지고, 60 ms에서는 멈추지 않습니다.</span>`;
  }

  $("btn-pred").addEventListener("click", () => {
    if (!lab) return;
    const v = parseFloat($("pred-os").value); state.predOS = v; save();
    if (OmxLab.checkPrediction($("fb-pred"), v, osPred(4, 0), 0.1, "%", "이제 실험으로 확인해 보세요.", "ζ = (Kd + b) ÷ (2√(Kp·I))를 먼저 구하고, 지수 식에 넣었는지 확인해 보세요."))
      { $("c1").classList.add("done"); $("c2").classList.add("done"); }
  });
  $("btn-run").addEventListener("click", run);
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. 제어기는 '지금'이 아니라 '조금 전' 각도를 보고 힘을 냅니다. 목표를 이미 지나쳤는데도 아직 덜 왔다고 믿고 계속 밀어서 더 멀리 지나칩니다. 실제 로봇에서 통신 주기, 필터, USB 지연이 모두 이런 지연을 만듭니다. Kd를 키우면 조금 버티지만, 근본적으로는 지연을 줄이거나 게인을 낮춰야 합니다."; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "다시 생각해 보세요. 질량(관성)과 모터 한계는 그대로입니다. 바뀐 것은 제어기가 보는 각도가 '언제' 값이냐 뿐입니다."; }
  });
  if (state.predOS != null) $("pred-os").value = state.predOS;
  render();

  OmxLab.start({ home: REACH, camera: { pos: [0.55, -0.45, 0.45], target: [0.12, 0, 0.08] } }).then((l) => {
    lab = l;
    lab.onBusy((busy) => { $("btn-run").disabled = busy; });
    $("btn-run").disabled = false;
    lab.data.qpos[Q.j2] = REACH[Q.j2]; lab.data.qpos[Q.j3] = REACH[Q.j3]; lab.mj.mj_forward(lab.model, lab.data);
    I = lab.fullM()[0]; b = lab.model.dof_damping[0];
    $("given2").innerHTML = `joint1이 돌려야 하는 관성 I = ${I.toFixed(4)} kg·m² (뻗은 팔 전체, MuJoCo 질량 행렬 M(q)의 joint1 성분)<br>관절 감쇠 b = ${b.toFixed(2)} N·m·s/rad`;
    $("sol").innerHTML = `ζ = (0 + ${b.toFixed(2)}) ÷ (2 × √(4 × ${I.toFixed(4)})) = ${zeta(4, 0).toFixed(3)}<br>` +
      `오버슈트 = e^(−π × ${zeta(4, 0).toFixed(3)} ÷ √(1 − ${zeta(4, 0).toFixed(3)}²)) = <b>${osPred(4, 0).toFixed(1)} %</b>`;
    lab.readouts($("gauge"), [
      { k: "joint1 각도", v: () => `${deg(lab.data.qpos[Q.j1]).toFixed(2)}<small>°</small>` },
      { k: "모터 토크", v: () => `${Math.abs(lab.data.actuator_force[A.j1]).toFixed(2)}<small> N·m</small>` },
      { k: "감쇠비 ζ (슬라이더 값)", v: () => zeta(+kpEl.value, +kdEl.value).toFixed(3) },
    ]);
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
