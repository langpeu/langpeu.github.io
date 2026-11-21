/* sag · 목표까지 못 감·처짐 — 중력보상 누락: 처짐 ≈ g(q) ÷ Kp
 *
 * 뻗은 자세에서 시작해 joint2만 토크 모터 PD(+선택: 중력보상)로 4초 버팁니다. 관절 마찰 끔.
 * 중력보상은 '모델이 아는 질량'으로 계산(손끝 물체 제외) → 모델에 없는 물체만큼 처짐.
 * 확인한 값 (MuJoCo 3.17.0): g(q) 0.574 N·m. Kp 5/10/20/50: 예측 6.58/3.29/1.64/0.66°, 시뮬 6.49/3.27/1.64/0.66°.
 *   중력보상 켬: 0.000°. 모델에 없는 100 g, Kp 10: 예측 2.25° / 시뮬 2.25°
 */
(() => {
  "use strict";
  const { $, Q, A, B, GRAV, deg, logTable } = OmxLab;
  const REACH = { [Q.j2]: 1.4, [Q.j3]: -1.4 };
  const RUN = 4.0, KD = 0.3;
  OmxLab.shell("sag");
  const box = OmxLab.store("omx-lab-sag"), state = box.get(), save = () => box.set(state);
  let lab = null, g0 = 0.574, xee = 0.401, d2 = null;
  const logs = [];

  const plot = OmxLab.Plot($("plot"), { T: RUN, digits: 1, series: [{ name: "처짐 (+ = 아래로)", color: "--gravity" }] });
  plot.legend($("plot-legend"));
  const sl = (id, f) => { const e = $(id), v = $("v" + id.slice(2)); const u = () => { v.textContent = f(+e.value); }; e.addEventListener("input", u); u(); return e; };
  const kpEl = sl("sl-kp", (v) => v + " N·m/rad"), mEl = sl("sl-m", (v) => v + " g");

  // 모델이 아는 질량만으로 계산한 중력 토크 (손끝 물체 0으로 두고 별도 data에서 계산)
  function gModel(qpos) {
    const m = lab.model, keep = m.body_mass[B.ee];
    m.body_mass[B.ee] = 0;
    d2.qpos.set(qpos); d2.qvel.fill(0); lab.mj.mj_forward(m, d2);
    m.body_mass[B.ee] = keep;
    return d2.qfrc_bias[Q.j2];
  }

  function run(kp, gc, payload) {
    plot.reset(RUN);
    lab.run({
      duration: RUN,
      setup(model, data) {
        lab.motor(A.j2);
        for (let j = 0; j < 5; j++) model.dof_frictionloss[j] = 0;
        lab.setPayload(payload);
        data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3]; data.ctrl[A.j3] = REACH[Q.j3];
      },
      control(t, data) {
        let tau = kp * (REACH[Q.j2] - data.qpos[Q.j2]) - KD * data.qvel[Q.j2];
        if (gc) tau += gModel(data.qpos);
        data.ctrl[A.j2] = tau;
      },
      sample(t, data) { plot.push(t, [deg(data.qpos[Q.j2] - REACH[Q.j2])]); },
      judge(data) { const e = deg(data.qpos[Q.j2] - REACH[Q.j2]); return { e, state: `처짐 ${e.toFixed(2)}°`, cls: Math.abs(e) < 0.1 ? "hold" : "" }; },
      done(r) {
        const pred = gc ? deg(payload * GRAV * xee / kp) : deg((g0 + payload * GRAV * xee) / kp);
        logs.push({ n: logs.length + 1, kp, gc, payload, pred, ...r }); render();
      },
    });
  }

  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.kp, n: 1 }, { f: (r) => r.gc ? "켬" : "끔" }, { f: (r) => Math.round(r.payload * 1000) + " g", n: 1 },
      { f: (r) => r.pred.toFixed(2) + "°", n: 1 }, { f: (r) => r.e.toFixed(2) + "°", n: 1 },
    ]);
    const kps = new Set(logs.filter((r) => !r.gc && !r.payload).map((r) => r.kp));
    if (kps.size >= 3 && logs.some((r) => r.gc && !r.payload)) $("c3").classList.add("done");
    if (logs.some((r) => r.gc && r.payload > 0)) $("c4").classList.add("done");
  }

  $("btn-pred").addEventListener("click", () => {
    if (!lab) return;
    const v = parseFloat($("pred-e").value); state.predE = v; save();
    if (OmxLab.checkPrediction($("fb-pred"), v, deg(g0 / 10), 0.05, "°", "실험으로 확인해 보세요.", "g(q) ÷ Kp는 라디안입니다. 180/π를 곱해 도로 바꿨는지 확인해 보세요."))
      { $("c1").classList.add("done"); $("c2").classList.add("done"); }
  });
  $("btn-pred2").addEventListener("click", () => {
    if (!lab) return;
    const v = parseFloat($("pred-e2").value);
    OmxLab.checkPrediction($("fb-pred2"), v, deg(0.1 * GRAV * xee / 10), 0.05, "°", "슬라이더 100 g으로 실행해 확인해 보세요.", "m은 kg(0.1), 결과는 라디안 → 도로 바꿔야 합니다.");
  });
  $("btn-run").addEventListener("click", () => run(+kpEl.value, $("cb-gc").checked, 0));
  $("btn-run2").addEventListener("click", () => run(10, true, +mEl.value / 1000));
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. Kp를 크게 올리면 처짐은 줄지만 " + OmxLab.label("vibration") + "처럼 떨림과 지연에 약해집니다. 목표를 미리 높이는 방법은 자세나 들고 있는 물체가 바뀌면 바로 틀립니다. 중력은 모델로 계산해 미리 넣고, PD는 남은 작은 오차만 맡기는 것이 기본입니다."; $("c5").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "그 방법도 처짐을 줄이긴 하지만 부작용이 있습니다. 자세가 바뀌어도, 떨림 없이 처짐을 없애는 방법을 골라 보세요."; }
  });
  if (state.predE != null) $("pred-e").value = state.predE;
  render();

  OmxLab.start({ home: REACH }).then((l) => {
    lab = l; d2 = new lab.mj.MjData(lab.model);
    const btns = ["btn-run", "btn-run2"];
    lab.onBusy((busy) => btns.forEach((id) => { $(id).disabled = busy; }));
    btns.forEach((id) => { $(id).disabled = false; });
    const { mj, model, data } = lab;
    data.qpos[Q.j2] = REACH[Q.j2]; data.qpos[Q.j3] = REACH[Q.j3]; mj.mj_forward(model, data);
    g0 = Math.abs(data.qfrc_bias[Q.j2]); xee = data.xpos[B.ee * 3] - data.xpos[B.link2 * 3];
    $("given2").innerHTML = `뻗은 자세의 joint2 중력 토크 g(q) = ${g0.toFixed(3)} N·m (${OmxLab.label("torque")}에서 계산한 값)<br>Kp = 10 N·m/rad, 중력보상 없음`;
    $("sol").innerHTML = `e = ${g0.toFixed(3)} ÷ 10 = ${(g0 / 10).toFixed(4)} rad<br>× 180/π = <b>${deg(g0 / 10).toFixed(2)}°</b>`;
    $("xee").textContent = xee.toFixed(3);
    lab.jointGauge($("gauge"), { dof: Q.j2, act: A.j2, targetDeg: deg(REACH[Q.j2]), max: 1.6, limit: () => 1.5 });
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
