/* ik · IK: 공을 잡으려면 몇 도? — 역기구학, 손 수평 조건 + 코사인 법칙, 해 2개, 닿지 않는 곳
 *
 * 힘 없이 자세만 보여 줌(showPose). 좌표는 어깨(joint2) 축 기준. 채점은 FK 로 계산한 손끝과 공 거리 ≤ 5 mm.
 * 확인한 값 (MuJoCo 3.17.0, common/kin.js, 손끝 오차 0.000 mm):
 *   공 (0.35, 0): d 0.2294 m, γ 107.7°, 팔꿈치 위 θ2 27.56° θ3 2.49° θ4 −30.05°, 아래 θ2 112.16° θ3 −142.21° θ4 30.05°
 *   공 (0.42, 0): d 0.2994 > L1+L2 0.2825 → 해 없음
 */
(() => {
  "use strict";
  const { $ } = OmxLab, K = OmxKin, r = K.rad, dg = K.deg;
  const BALL = [0.35, 0.0], FAR = [0.42, 0.0], TOL = 0.005;
  OmxLab.shell("ik");
  const box = OmxLab.store("omx-lab-ik"), state = box.get(), save = () => box.set(state);
  state.found = state.found || {};
  const up = K.ik(BALL[0], BALL[1], true), down = K.ik(BALL[0], BALL[1], false);
  let lab = null, ball = BALL;

  function showBall() { if (lab) lab.marker("ball", { pos: K.world(ball[0], ball[1], 0), color: "--gravity", r: 0.012, opacity: 0.85 }); }
  function pose(t2, t3) {
    const t4 = -(t2 + t3), f = K.fk(r(t2), r(t3), r(t4));
    if (lab) {
      lab.showPose({ 1: r(t2), 2: r(t3), 3: r(t4) }, "자세 보기");
      lab.marker("tip", { pos: K.world(f.x, f.z, 0), color: "--accent", r: 0.006, depthTest: false });
      lab.path("arm", [[0, 0], f.elbow, f.wrist, f.tip].map((p) => K.world(p[0], p[1], 0)), { color: "--accent", dash: true });
    }
    return { f, t4, err: Math.hypot(f.x - ball[0], f.z - ball[1]) };
  }

  function fbSet(id, ok, msg) { const el = $(id); el.hidden = false; el.className = "fb " + (ok ? "ok" : "no"); el.textContent = msg; }
  $("btn-pd").addEventListener("click", () => {
    const v = parseFloat($("pd").value); state.pd = v; save();
    if (Math.abs(v - up.d) <= 0.001) fbSet("fb-pd", true, `맞습니다 (${up.d.toFixed(4)} m). L1 + L2 = ${(K.L1 + K.L2).toFixed(4)} m보다 짧으니 닿습니다.`);
    else fbSet("fb-pd", false, "손목은 공에서 L3만큼 뒤(x − 0.1206)에 있습니다. z = 0이면 d는 그 x 값 그대로입니다.");
  });
  $("btn-pg").addEventListener("click", () => {
    const v = parseFloat($("pg").value); state.pg = v; save();
    if (Math.abs(v - dg(up.gamma)) <= 0.5) fbSet("fb-pg", true, `맞습니다 (${dg(up.gamma).toFixed(1)}°).`);
    else fbSet("fb-pg", false, "cos γ를 먼저 구한 뒤 acos(역코사인)를 씁니다. 계산기에는 acos가 버튼에 없으니 acos(…)로 직접 입력하세요.");
  });
  $("btn-pt").addEventListener("click", () => {
    const a = parseFloat($("pt2").value), b = parseFloat($("pt3").value); state.pt = [a, b]; save();
    if (!isFinite(a) || !isFinite(b)) return fbSet("fb-pt", false, "θ2와 θ3을 도 단위로 입력하세요.");
    const res = pose(a, b); $("e2").value = a; $("e3").value = b;
    if (res.err <= TOL) { fbSet("fb-pt", true, `맞습니다. 이 각도면 손끝이 공에서 ${(res.err * 1000).toFixed(1)} mm 떨어져 있습니다. 3단계에서 확인해 보세요.`); state.okPred = 1; save(); mark(); }
    else fbSet("fb-pt", false, `손끝이 공에서 ${(res.err * 1000).toFixed(0)} mm 떨어집니다. φ1 = atan2(Wz, Wx) + β, θ2 = 90° − 20.1° − φ1 순서를 확인해 보세요.`);
  });

  $("btn-pose").addEventListener("click", () => {
    const a = parseFloat($("e2").value), b = parseFloat($("e3").value);
    if (!isFinite(a) || !isFinite(b)) return fbSet("fb-pose", false, "θ2와 θ3을 도 단위로 입력하세요.");
    const res = pose(a, b);
    if (res.err <= TOL) {
      const isUp = (ball[0] - K.L3) * res.f.elbow[1] - ball[1] * res.f.elbow[0] > 0;   // 어깨→손목 선보다 팔꿈치가 위인가 (외적 부호)
      state.found[isUp ? "up" : "down"] = [a, b]; save(); mark();
      fbSet("fb-pose", true, `잡았습니다! 손끝–공 ${(res.err * 1000).toFixed(1)} mm, θ4 = ${res.t4.toFixed(1)}°. 팔꿈치가 ${isUp ? "위" : "아래"}인 해입니다.`);
    } else fbSet("fb-pose", false, `손끝이 공에서 ${(res.err * 1000).toFixed(0)} mm 떨어져 있습니다.`);
  });
  function mark() {
    const f = state.found;
    $("found").innerHTML = ["up", "down"].map((k) => `<span class="pill ${f[k] ? "hold" : ""}">팔꿈치 ${k === "up" ? "위" : "아래"}: ${f[k] ? `θ2 ${f[k][0]}°, θ3 ${f[k][1]}°` : "아직"}</span>`).join(" ");
    if (state.okPred) { $("c1").classList.add("done"); $("c2").classList.add("done"); }
    if (f.up && f.down) $("c3").classList.add("done");
  }
  $("btn-far").addEventListener("click", () => { ball = FAR; showBall(); });
  $("btn-near").addEventListener("click", () => { ball = BALL; showBall(); });
  $("quiz1").addEventListener("change", (e) => {
    const d = Math.hypot(FAR[0] - K.L3, FAR[1]);
    if (e.target.value === "b") { fbSet("fb-quiz1", true, `맞습니다. d = ${d.toFixed(4)} m로 L1 + L2 = ${(K.L1 + K.L2).toFixed(4)} m보다 깁니다. 팔을 다 펴도 손목이 거기까지 가지 못합니다. 이럴 때 IK 계산은 acos에 1보다 큰 값이 들어가 답이 나오지 않습니다. 실제 제어기는 '닿지 않음'을 먼저 확인해야 합니다.`); $("c4").classList.add("done"); }
    else fbSet("fb-quiz1", false, "손목까지 거리 d를 구해 L1 + L2와 비교해 보세요.");
  });
  $("quiz2").addEventListener("change", (e) => {
    if (e.target.value === "b") { fbSet("fb-quiz2", true, `맞습니다. 아래 해(θ2 ${dg(down.t2).toFixed(1)}°, θ3 ${dg(down.t3).toFixed(1)}°)는 팔꿈치가 바닥에서 약 ${((K.SHOULDER[2] + K.L1 * Math.cos(down.t2 + K.ALPHA)) * 100).toFixed(1)} cm까지 내려가고, 관절이 100° 넘게 돌아야 합니다. 손끝 위치는 같아도 팔 모양이 다르니, 실제로는 부딪히지 않고 덜 도는 해를 고릅니다.`); $("c5").classList.add("done"); }
    else fbSet("fb-quiz2", false, "두 해의 팔 모양을 3D 화면에서 비교해 보세요. 팔꿈치가 어디까지 내려가나요?");
  });

  $("sol").innerHTML = (() => {
    const f4 = (v) => v.toFixed(4), f1 = (v) => v.toFixed(2);
    return `W = (0.35 − 0.1206, 0) = (${f4(BALL[0] - K.L3)}, 0) → d = <b>${f4(up.d)}</b> m<br>
      cos γ = (0.1205² + 0.162² − d²) ÷ (2·0.1205·0.162) = ${f4(Math.cos(up.gamma))} → γ = <b>${f1(dg(up.gamma))}°</b><br>
      cos β = (0.1205² + d² − 0.162²) ÷ (2·0.1205·d) = ${f4(Math.cos(up.beta))} → β = ${f1(dg(up.beta))}°<br>
      팔꿈치 위: φ1 = 0 + β = ${f1(dg(up.phi1))}° → θ2 = 90 − 20.14 − ${f1(dg(up.phi1))} = <b>${f1(dg(up.t2))}°</b><br>
      &nbsp; φ2 = φ1 − (180 − γ) = ${f1(dg(up.phi2))}° → θ3 = −φ2 − θ2 = <b>${f1(dg(up.t3))}°</b>, θ4 = ${f1(dg(up.t4))}°<br>
      팔꿈치 아래: φ1 = −β → θ2 = <b>${f1(dg(down.t2))}°</b>, θ3 = <b>${f1(dg(down.t3))}°</b>`;
  })();
  if (state.pd != null) $("pd").value = state.pd;
  if (state.pg != null) $("pg").value = state.pg;
  if (state.pt) { $("pt2").value = state.pt[0]; $("pt3").value = state.pt[1]; }
  mark();

  OmxLab.start({ camera: { pos: [0.18, -0.74, 0.16], target: [0.18, 0, 0.08] } }).then((l) => {
    lab = l;
    lab.readouts($("gauge"), [
      { k: "손끝–공 거리", v: () => { const d = lab.data, b = lab.id("body", "end_effector_link") * 3, w = K.world(ball[0], ball[1], 0); return `${(Math.hypot(d.xpos[b] - w[0], d.xpos[b + 2] - w[2]) * 1000).toFixed(1)}<small> mm</small>`; } },
      { k: "θ2 / θ3", v: () => `${dg(lab.data.qpos[1]).toFixed(1)}° <small>/</small> ${dg(lab.data.qpos[2]).toFixed(1)}°` },
      { k: "θ4 (손 수평)", v: () => `${dg(lab.data.qpos[3]).toFixed(1)}<small>°</small>` },
    ]);
    showBall(); pose(0, 0);
  }).catch(() => {});
})();
