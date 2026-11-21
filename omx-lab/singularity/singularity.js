/* singularity · 손끝 속도와 특이점 — v = ω·r (관절 하나), 여러 관절은 더함 = J·q̇, 다 뻗으면 바깥 방향을 못 만듦
 *
 * 힘 없이 자세만 움직이는 기구학 실험. 관절 속도 한계 = XL430 12 V 무부하 61 rpm = 6.39 rad/s.
 * 확인한 값 (common/kin.js = MuJoCo 위치):
 *   모든 관절 0°: 팔꿈치→손끝 r 0.2826 m → 1.806 m/s, 어깨→손끝 r 0.3433 m → 2.193 m/s
 *   어깨 높이 z = 0, 손 수평으로 바깥 밀기: 최대 x = L1 + L2 + L3 = 0.4032 m (손목 거리 d = L1 + L2 에서 팔이 일직선)
 */
(() => {
  "use strict";
  const { $, logTable } = OmxLab, K = OmxKin, dg = K.deg;
  const W = 61 * 2 * Math.PI / 60;                       // 6.388 rad/s
  const SPIN_T = 0.06, SLOW = 25, PUSH_V = 0.05, PUSH_T = 3, X0 = 0.30;
  OmxLab.shell("singularity");
  const box = OmxLab.store("omx-lab-singularity"), state = box.get(), save = () => box.set(state);
  const f0 = K.fk(0, 0, 0);
  const r3 = Math.hypot(f0.x - f0.elbow[0], f0.z - f0.elbow[1]), r2 = Math.hypot(f0.x, f0.z);
  const XMAX = K.L1 + K.L2 + K.L3;
  let lab = null, busy = false;
  const logs = [];

  const plot = OmxLab.Plot($("plot"), { T: PUSH_T, digits: 0, series: [
    { name: "팔꿈치 θ3 속도", color: "--accent" }, { name: "어깨 θ2 속도", color: "--gravity" }, { name: "한계 366 °/s", color: "--muted", dash: true, width: 1 }] });
  plot.legend($("plot-legend"));

  const fbSet = (id, ok, msg) => { const el = $(id); el.hidden = false; el.className = "fb " + (ok ? "ok" : "no"); el.textContent = msg; };
  const tipWorld = () => { const d = lab.data, b = lab.id("body", "end_effector_link") * 3; return [d.xpos[b], d.xpos[b + 1], d.xpos[b + 2]]; };
  function setQ(t2, t3, t4) { lab.showPose({ 1: t2, 2: t3, 3: t4 }, busy ? "움직이는 중" : "자세 보기"); }
  function setBusy(b) { busy = b; ["btn-spin3", "btn-spin2", "btn-push"].forEach((id) => { $(id).disabled = b || !lab; }); }

  // ---- 2. 예측 ----
  function pred(id, truth, hint) {
    const v = parseFloat($(id).value); state[id] = v; save();
    if (Math.abs(v - truth) / truth <= 0.03) { fbSet("fb-" + id, true, `맞습니다 (${truth.toFixed(3)} m/s). 실험으로 확인해 보세요.`); return true; }
    fbSet("fb-" + id, false, hint); return false;
  }
  $("btn-pv3").addEventListener("click", () => { state.ok3 = pred("pv3", W * r3, "r은 팔꿈치에서 손끝까지 거리입니다. 손끝 x에서 팔꿈치 x를 빼고(z는 같음), 6.39를 곱하세요.") || state.ok3; save(); mark(); });
  $("btn-pv2").addEventListener("click", () => { state.ok2 = pred("pv2", W * r2, "r은 어깨에서 손끝까지 거리 √(x² + z²)입니다.") || state.ok2; save(); mark(); });

  // ---- 3. 관절 하나 돌리기 ----
  function spin(j) {
    if (!lab || busy) return;
    setBusy(true);
    const dt = 1e-4; setQ(0, 0, 0); const p0 = tipWorld();
    if (j === 3) setQ(0, W * dt, 0); else setQ(W * dt, 0, 0);
    const p1 = tipWorld(), v = Math.hypot(p1[0] - p0[0], p1[2] - p0[2]) / dt;
    const dir = [(p1[0] - p0[0]) / (v * dt), 0, (p1[2] - p0[2]) / (v * dt)];
    const trace = [], t0 = performance.now();
    const step = () => {
      const t = Math.min((performance.now() - t0) / 1000 / SLOW, SPIN_T), a = W * t;
      if (j === 3) setQ(0, a, 0); else setQ(a, 0, 0);
      trace.push(tipWorld()); lab.path("trace", trace, { color: "--accent" });
      if (t < SPIN_T) return requestAnimationFrame(step);
      lab.path("vel", [p0, [p0[0] + dir[0] * 0.08, p0[1], p0[2] + dir[2] * 0.08]], { color: "--gravity" });
      logs.push({ j, r: j === 3 ? r3 : r2, v }); state["seen" + j] = 1; save(); render(); setBusy(false);
    };
    lab.path("vel", null); requestAnimationFrame(step);
  }
  $("btn-spin3").addEventListener("click", () => spin(3));
  $("btn-spin2").addEventListener("click", () => spin(2));
  function render() {
    logTable($("log"), logs, [
      { f: (x) => x.j === 3 ? "팔꿈치 θ3" : "어깨 θ2" }, { f: (x) => x.r.toFixed(4), n: 1 },
      { f: (x) => (W * x.r).toFixed(3) + " m/s", n: 1 }, { f: (x) => x.v.toFixed(3) + " m/s", n: 1 }]);
    mark();
  }

  // ---- 4. 바깥으로 밀기: 매 순간 IK, 관절 속도 한계 ----
  $("btn-pxm").addEventListener("click", () => {
    const v = parseFloat($("pxm").value); state.pxm = v; save();
    if (Math.abs(v - XMAX) <= 0.005) fbSet("fb-pxm", true, `맞습니다 (${XMAX.toFixed(4)} m). 손을 수평으로 든 채 어깨 높이에서는 L1 + L2 + L3에서 팔이 일직선이 됩니다. 밀어서 확인해 보세요.`);
    else fbSet("fb-pxm", false, "손목이 어깨에서 가장 멀리 갈 수 있는 거리는 위팔과 아래팔이 일직선일 때 L1 + L2입니다. 거기에 손 L3를 더합니다.");
  });
  function push() {
    if (!lab || busy) return;
    setBusy(true); plot.reset(PUSH_T); lab.path("trace", null); lab.path("vel", null);
    let s = K.ik(X0, 0, true), q = [s.t2, s.t3, s.t4], t = 0, xMax = 0, satAt = null;
    const h = 1 / 240, trace = [];
    lab.path("goal", [K.world(X0, 0, 0), K.world(0.45, 0, 0)], { color: "--muted", dash: true });
    const t0 = performance.now();
    const step = () => {
      const until = Math.min((performance.now() - t0) / 1000, PUSH_T);
      while (t < until) {
        const want = K.ik(Math.min(X0 + PUSH_V * (t + h), XMAX - 1e-7), 0, true) || s;
        s = want;
        const need = [want.t2 - q[0], want.t3 - q[1], want.t4 - q[2]].map((d) => d / h);   // 필요한 각속도
        const k = Math.max(1, ...need.map((w) => Math.abs(w) / W));                    // 한계 넘으면 함께 줄임
        q = q.map((v, i) => v + need[i] / k * h);
        if (k > 1 && satAt == null) satAt = t;
        t += h;
        plot.push(t, [Math.min(Math.abs(dg(need[1])), 2000), Math.min(Math.abs(dg(need[0])), 2000), dg(W)]);
      }
      setQ(q[0], q[1], q[2]);
      const p = tipWorld(); trace.push(p); lab.path("trace", trace, { color: "--accent" });
      xMax = Math.max(xMax, p[0] - K.SHOULDER[0]);
      plot.draw();
      if (until < PUSH_T) return requestAnimationFrame(step);
      state.pushed = { xMax, satAt }; save(); mark(); setBusy(false);
      fbSet("fb-pxm", true, `시뮬: 손끝은 x = ${xMax.toFixed(4)} m에서 멈췄습니다 (식 ${XMAX.toFixed(4)} m). ` +
        (satAt != null ? `t = ${satAt.toFixed(2)} s (x ≈ ${(X0 + PUSH_V * satAt).toFixed(4)} m)부터 관절이 한계 속도에 걸렸습니다. 끝에 가까울수록 필요한 팔꿈치 속도가 폭발적으로 커집니다.` : ""));
    };
    requestAnimationFrame(step);
  }
  $("btn-push").addEventListener("click", push);

  $("quiz").addEventListener("change", (e) => {
    if (e.target.value === "b") { fbSet("fb-quiz", true, "맞습니다. 팔이 일직선이면 어깨·팔꿈치·손목 모두 손끝을 위아래로만 움직입니다(관절→손끝 선이 수평이라 그 수직은 위아래). 바깥 방향 속도를 만들 수 없는 자세를 특이점이라고 합니다. 그 근처에서는 아주 조금 움직이려 해도 관절이 매우 빨리 돌아야 해서, 실제 로봇은 특이점을 피해 경로를 짭니다."); $("c5").classList.add("done"); }
    else fbSet("fb-quiz", false, "다 뻗은 자세에서 각 관절이 만드는 손끝 속도 방향을 떠올려 보세요. 관절→손끝 선에 수직입니다.");
  });
  function mark() {
    if (state.ok3 && state.ok2) { $("c1").classList.add("done"); $("c2").classList.add("done"); }
    if (state.seen3 && state.seen2) $("c3").classList.add("done");
    if (state.pushed) $("c4").classList.add("done");
  }
  $("sol").innerHTML = `① 팔꿈치→손끝 r = 0.3241 − 0.0415 = ${r3.toFixed(4)} m → v = 6.39 × ${r3.toFixed(4)} = <b>${(W * r3).toFixed(3)} m/s</b><br>
    ② 어깨→손끝 r = √(0.3241² + 0.1132²) = ${r2.toFixed(4)} m → v = 6.39 × ${r2.toFixed(4)} = <b>${(W * r2).toFixed(3)} m/s</b>`;
  for (const id of ["pv3", "pv2", "pxm"]) if (state[id] != null) $(id).value = state[id];
  mark();

  OmxLab.start({ camera: { pos: [0.18, -0.74, 0.16], target: [0.18, 0, 0.09] } }).then((l) => {
    lab = l;
    lab.readouts($("gauge"), [
      { k: "손끝 x (어깨 기준)", v: () => `${(tipWorld()[0] - K.SHOULDER[0]).toFixed(4)}<small> m</small>` },
      { k: "손끝 z (어깨 기준)", v: () => `${(tipWorld()[2] - K.SHOULDER[2]).toFixed(4)}<small> m</small>` },
      { k: "마지막 측정 속도", v: () => logs.length ? `${logs[logs.length - 1].v.toFixed(3)}<small> m/s</small>` : "—" },
    ]);
    setQ(0, 0, 0); setBusy(false);
  }).catch(() => {});
})();
