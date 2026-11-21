/* fk · FK: 손끝은 어디에? — 순기구학, 각도를 더해 막대를 따라감
 *
 * 힘 없이 자세만 보여 줌(showPose). 손끝 = end_effector_link 원점, 어깨(joint2) 축 기준 (x 앞, z 위).
 * 확인한 값 (MuJoCo 3.17.0, common/kin.js 와 오차 0.000 mm):
 *   0°,0°,0° → (0.3241, 0.1132) m · 45°,10°,−55° → (0.3229, −0.0820) m
 *   joint1 30°, 나머지 0° → y 0.1607 (식 0.3241·sin30 = 0.1621, 손끝이 옆으로 1.6 mm 비켜 있음)
 */
(() => {
  "use strict";
  const { $ } = OmxLab, K = OmxKin, r = K.rad;
  const Q1 = [0, 0, 0], Q2 = [45, 10, -55], TOL = 0.005;
  OmxLab.shell("fk");
  const box = OmxLab.store("omx-lab-fk"), state = box.get(), save = () => box.set(state);
  state.seen = state.seen || {};
  let lab = null;

  const sl = {};
  for (const k of [1, 2, 3, 4]) { sl[k] = $("s" + k); sl[k].addEventListener("input", () => pose()); }
  const ang = () => [+sl[2].value, +sl[3].value, +sl[4].value];
  const truth = (q) => K.fk(r(q[0]), r(q[1]), r(q[2]));

  function pose() {
    for (const k of [1, 2, 3, 4]) $("v" + k).textContent = sl[k].value + "°";
    if (!lab) return;
    const [a2, a3, a4] = ang(), a1 = +sl[1].value;
    lab.showPose({ 0: r(a1), 1: r(a2), 2: r(a3), 3: r(a4) }, "자세 보기");
    const f = K.fk(r(a2), r(a3), r(a4));
    lab.marker("tip", { pos: K.world(f.x, f.z, r(a1)), color: "--accent", r: 0.007, depthTest: false });
    lab.path("arm", [[0, 0], f.elbow, f.wrist, f.tip].map((p) => K.world(p[0], p[1], r(a1))), { color: "--accent", dash: true });
    // 문제 자세를 확인했는지
    const same = (q) => q.every((v, i) => Math.abs(v - [a2, a3, a4][i]) < 0.5) && a1 === 0;
    if (same(Q1)) state.seen.q1 = 1;
    if (same(Q2)) state.seen.q2 = 1;
    if (state.seen.q1 && state.seen.q2 && !$("c3").classList.contains("done")) { $("c3").classList.add("done"); save(); }
  }
  function setPose(q, a1) { sl[2].value = q[0]; sl[3].value = q[1]; sl[4].value = q[2]; sl[1].value = a1 || 0; pose(); }
  $("go1").addEventListener("click", () => setPose(Q1));
  $("go2").addEventListener("click", () => setPose(Q2));
  $("go0").addEventListener("click", () => setPose([0, 0, 0]));

  // 예측 확인: 손끝 위치 차이 ≤ 5 mm
  function check(n, q, fb) {
    const x = parseFloat($(`p${n}x`).value), z = parseFloat($(`p${n}z`).value), t = truth(q), el = $(fb);
    state["p" + n] = [x, z]; save(); el.hidden = false;
    if (!isFinite(x) || !isFinite(z)) { el.className = "fb no"; el.textContent = "x와 z를 m 단위로 입력하세요."; return false; }
    const e = Math.hypot(x - t.x, z - t.z);
    if (lab) lab.marker("pred" + n, { pos: K.world(x, z, 0), color: "--gravity", r: 0.006, depthTest: false });
    if (e <= TOL) { el.className = "fb ok"; el.textContent = `맞습니다. 정답 (${t.x.toFixed(4)}, ${t.z.toFixed(4)}) m와 ${(e * 1000).toFixed(1)} mm 차이입니다.`; return true; }
    el.className = "fb no";
    el.textContent = `정답과 ${(e * 1000).toFixed(0)} mm 차이가 납니다. ` + (n === 1
      ? "위팔은 수직이 아니라 α = 20.1° 기울어 있습니다. 위팔이 x에 보태는 몫은 L1·sin α입니다."
      : "아래팔 방향은 θ2+θ3, 손 방향은 θ2+θ3+θ4입니다. 계산기가 DEG 모드인지도 확인하세요.");
    return false;
  }
  const solved = () => { if (state.ok1 && state.ok2) { $("c1").classList.add("done"); $("c2").classList.add("done"); } };
  $("btn-p1").addEventListener("click", () => { state.ok1 = check(1, Q1, "fb-p1") || state.ok1; save(); solved(); });
  $("btn-p2").addEventListener("click", () => { state.ok2 = check(2, Q2, "fb-p2") || state.ok2; save(); solved(); });
  $("btn-p3").addEventListener("click", () => {
    const y = parseFloat($("p3y").value), t = truth(Q1).x * Math.sin(r(30)), el = $("fb-p3"); el.hidden = false;
    if (!isFinite(y)) { el.className = "fb no"; el.textContent = "y를 m 단위로 입력하세요."; return; }
    if (Math.abs(y - t) <= TOL) { el.className = "fb ok"; el.textContent = `맞습니다 (${t.toFixed(4)} m). 슬라이더 θ1을 30°로 두고 위에서 확인해 보세요.`; $("c5").classList.add("done"); }
    else { el.className = "fb no"; el.textContent = `정답과 ${(Math.abs(y - t) * 1000).toFixed(0)} mm 차이가 납니다. 축에서 손끝까지 수평거리는 문제 1의 x입니다.`; }
  });
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. θ4는 손목 뒤의 막대(손)만 돌리므로 손끝은 손목을 중심으로 반지름 L3인 원 위를 움직입니다. 어느 관절을 돌리든 손끝은 그 관절을 중심으로 원을 그립니다. 이 사실이 손끝 속도(" + OmxLab.label("singularity") + ")의 출발점입니다."; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "손목 앞쪽의 손만 돌아갑니다. 돌아가는 중심이 어디인지 생각해 보세요."; }
  });

  $("sol").innerHTML = (() => {
    const L = (v) => v.toFixed(4), s = Math.sin, c = Math.cos, A = K.ALPHA;
    const f2 = truth(Q2);
    return `문제 1: x = ${K.L1.toFixed(4)}·sin20.1° + 0.162 + 0.1206 = ${L(K.L1 * s(A))} + 0.162 + 0.1206 = <b>${L(truth(Q1).x)}</b><br>
      &nbsp; z = ${K.L1.toFixed(4)}·cos20.1° = <b>${L(truth(Q1).z)}</b><br>
      문제 2: 위팔 각 θ2+α = 65.1°, 아래팔 θ2+θ3 = 55°, 손 θ2+θ3+θ4 = 0°<br>
      &nbsp; x = ${L(K.L1 * s(r(45) + A))} + ${L(K.L2 * c(r(55)))} + ${L(K.L3)} = <b>${L(f2.x)}</b><br>
      &nbsp; z = ${L(K.L1 * c(r(45) + A))} − ${L(K.L2 * s(r(55)))} − 0 = <b>${L(f2.z)}</b>`;
  })();
  if (state.p1) { $("p1x").value = state.p1[0]; $("p1z").value = state.p1[1]; }
  if (state.p2) { $("p2x").value = state.p2[0]; $("p2z").value = state.p2[1]; }
  solved(); if (state.seen.q1 && state.seen.q2) $("c3").classList.add("done");
  pose();

  OmxLab.start({ camera: { pos: [0.16, -0.72, 0.16], target: [0.16, 0, 0.09] } }).then((l) => {
    lab = l;
    lab.readouts($("gauge"), [
      { k: "손끝 x (어깨 기준)", v: () => tipTxt(0) },
      { k: "손끝 z (어깨 기준)", v: () => tipTxt(1) },
      { k: "손끝 y (옆)", v: () => tipTxt(2) },
    ]);
    pose();
    for (const n of [1, 2]) if (state["p" + n] && isFinite(state["p" + n][0])) lab.marker("pred" + n, { pos: K.world(state["p" + n][0], state["p" + n][1], 0), color: "--gravity", r: 0.006, depthTest: false });
  }).catch(() => {});
  // MuJoCo 가 계산한 실제 손끝 위치 (식이 아니라 시뮬 값)
  function tipTxt(k) {
    if (!lab) return "—";
    const d = lab.data, b = lab.id("body", "end_effector_link") * 3, sh = K.SHOULDER;
    const v = k === 0 ? Math.hypot(d.xpos[b] - sh[0], d.xpos[b + 1]) * Math.sign(d.xpos[b] - sh[0] || 1) : k === 1 ? d.xpos[b + 2] - sh[2] : d.xpos[b + 1];
    return `${v.toFixed(4)}<small> m</small>`;
  }
})();
