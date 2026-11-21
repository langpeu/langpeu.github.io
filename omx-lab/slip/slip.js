/* slip · 미끄러짐 — 마찰 한계 m·g ≤ μ·ΣFn, 파지력 ΣFn ≈ τ ÷ r
 *
 * 모델 변형: 손가락 안쪽에 평평한 충돌 패드(pad6, pad7), 물체 상자(obj), 바닥이 물체와 부딪히게 conaffinity 3.
 * 손가락 메시(contype 1)는 물체(contype 2)와 부딪히지 않음 → 물체는 패드로만 쥠.
 * 진행: 0~0.6 s 무중력에서 쥠 → 중력 켜고 2 s. 물체가 손에서 10 mm 넘게 빠지면 미끄러짐.
 * 확인한 값 (MuJoCo 3.17.0, r = 0.045 m): μ0.5 τ0.15 식 170 g → 175 버팀 / 187 미끄러짐,
 *   μ0.4 τ0.2 식 181 → 187 버팀 / 199 미끄러짐, μ0.6 τ0.1 식 136 → 140 / 150. 잰 ΣFn(τ 0.2) = 5.11 N
 */
(() => {
  "use strict";
  const { $, Q, A, B, GRAV, deg, logTable, pill } = OmxLab;
  const R_PAD = 0.045, GRASP = 0.6, HOLD = 2.0, SLIP_MM = 10;
  OmxLab.shell("slip");
  const box = OmxLab.store("omx-lab-slip"), state = box.get(), save = () => box.set(state);
  let lab = null, OB, OG, PADS;
  const logs = [];

  const PAD = (y, n) => `<geom name="pad${n}" type="box" pos="0.045 ${y} 0" size="0.015 0.0015 0.012" contype="2" conaffinity="2" group="3" rgba="0.95 0.55 0.15 1"/>`;
  function transform(x) {
    x = x.replace(/(<joint name="gripper_joint_1"[^>]*\/>)/, `$1${PAD(0.0024, 6)}`)
      .replace(/(<joint name="gripper_joint_2"[^>]*\/>)/, `$1${PAD(-0.0023, 7)}`)
      .replace('<geom name="floor" size="0 0 0.05" type="plane" material="groundplane"/>', '<geom size="0 0 0.05" type="plane" material="groundplane" conaffinity="3"/>');
    return x.replace(/<\/worldbody>\s*<\/mujoco>\s*$/, `<body name="obj" pos="0.295 -0.0016 0.2107"><freejoint name="obj"/>` +
      `<geom name="obj" type="box" size="0.012 0.011 0.012" mass="0.1" rgba="0.25 0.55 0.95 1" contype="2" conaffinity="2" condim="4" friction="0.5 0.005 0.0001"/></body></worldbody></mujoco>`);
  }

  const plot = OmxLab.Plot($("plot"), { T: GRASP + HOLD, yRange: [0, 40], digits: 0, series: [{ name: "빠진 거리", color: "--bad" }, { name: "미끄러짐 기준 10 mm", color: "--muted", dash: true }] });
  plot.legend($("plot-legend"));
  const sl = (id, f) => { const e = $(id), v = $("v" + id.slice(2)); const u = () => { v.textContent = f(+e.value); }; e.addEventListener("input", u); u(); return e; };
  const muEl = sl("sl-mu", (v) => v.toFixed(2)), tauEl = sl("sl-tau", (v) => v.toFixed(2) + " N·m"), mEl = sl("sl-m", (v) => v + " g");
  const mmax = (mu, tau) => mu * tau / (R_PAD * GRAV) * 1000;

  // 실행: 값을 안 주면 슬라이더 값. 끝나면 결과로 resolve
  const run = (o = {}) => new Promise((resolve) => {
    const mu = o.mu ?? +muEl.value, tau = o.tau ?? +tauEl.value, m = o.m ?? +mEl.value;
    let rel0 = null, slip = 0, Fn = 0;
    plot.reset(GRASP + HOLD);
    lab.run({
      duration: GRASP + HOLD, speed: o.speed || 1,
      setup(model, data) {
        model.body_mass[OB] = m / 1000;
        for (const g of [OG, ...PADS]) model.geom_friction[g * 3] = mu;
        model.actuator_forcerange[A.g * 2] = -tau; model.actuator_forcerange[A.g * 2 + 1] = tau;
        model.opt.gravity[2] = 0;
        data.qpos[Q.g1] = 0.3; data.qpos[Q.g2] = -0.3;     // 벌린 상태에서 시작
      },
      control(t, data, model) {
        data.ctrl[A.g] = 0;                                // 닫는 방향으로 (힘은 τ 한계에서 잘림)
        if (t >= GRASP && rel0 == null) {
          Fn = 0;
          for (let i = 0; i < data.ncon; i++) { const c = data.contact.get(i); if (c.geom1 === OG || c.geom2 === OG) Fn += lab.contactForce(i)[0]; }
          model.opt.gravity[2] = -GRAV;
          rel0 = data.xpos[OB * 3 + 2] - data.xpos[B.ee * 3 + 2];
        }
      },
      sample(t, data) {
        if (rel0 != null) slip = Math.max(slip, (rel0 - (data.xpos[OB * 3 + 2] - data.xpos[B.ee * 3 + 2])) * 1000);
        plot.push(t, [rel0 != null ? Math.min(slip, 40) : 0, SLIP_MM]);
      },
      judge() { const hold = slip < SLIP_MM; return { hold, slip, Fn, state: hold ? "버팀" : "미끄러짐", cls: hold ? "hold" : "fall" }; },
      done(r) { logs.push({ n: logs.length + 1, mu, tau, m, pred: mmax(mu, tau), ...r }); render(); resolve(r); },
    });
  });

  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.mu.toFixed(2), n: 1 }, { f: (r) => r.tau.toFixed(2), n: 1 }, { f: (r) => r.m + " g", n: 1 },
      { f: (r) => r.Fn.toFixed(2) + " N", n: 1 }, { f: (r) => r.pred.toFixed(0) + " g", n: 1 }, { f: (r) => pill(r.hold, "버팀", "미끄러짐") },
    ]);
    $("p-m").textContent = state.predM != null && isFinite(state.predM) ? state.predM + " g" : "아직 없음 (2단계에서 먼저 계산)";
    if (state.okChk) $("c3").classList.add("done");
  }
  $("btn-chk").addEventListener("click", async () => {
    if (state.predM == null || !isFinite(state.predM)) { const fb = $("fb-chk"); fb.hidden = false; fb.className = "fb no"; fb.textContent = "2단계에서 최대 무게를 먼저 예측하세요."; return; }
    const r = await OmxLab.check3({
      pred: state.predM, lowGood: true, good: "버팁니다", bad: "미끄러집니다", fb: $("fb-chk"),
      round: (v) => Math.round(v), fmt: (v) => v + " g",
      run: (m) => run({ mu: 0.5, tau: 0.2, m, speed: 2 }).then((x) => x.hold),
      hint: "Fn 합 = τ ÷ r, m최대 = μ × Fn 합 ÷ g 를 다시 확인해 보세요.",
    });
    if (r.ok) { state.okChk = 1; save(); render(); $("fb-chk").innerHTML += ` 식은 ${mmax(0.5, 0.2).toFixed(0)} g입니다.`; }
  });

  $("btn-pred").addEventListener("click", () => {
    const v = parseFloat($("pred-m").value); state.predM = v; save(); render();
    if (OmxLab.checkPrediction($("fb-pred"), v, mmax(0.5, 0.2), 0.05, "g", "실험으로 경계를 찾아 보세요.", "Fn 합 = τ ÷ r, 그다음 μ × Fn 합 ÷ g. kg을 g으로 바꿨는지 확인하세요."))
      { $("c1").classList.add("done"); $("c2").classList.add("done"); }
  });
  $("btn-predma").addEventListener("click", () => {
    const v = parseFloat($("pred-ma").value);
    OmxLab.checkPrediction($("fb-predma"), v, 0.5 * 0.2 / R_PAD / (GRAV + 4.9) * 1000, 0.05, "g", "가만히 들 때(227 g)의 2/3입니다. 가속도가 클수록 같은 손힘으로 들 수 있는 무게가 줄어듭니다.", "m최대 = μ·ΣFn ÷ (g + a) 입니다.");
  });
  $("btn-run").addEventListener("click", () => run());
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "c") { fb.className = "fb ok"; fb.textContent = "맞습니다. 버틸 수 있는 마찰력은 μ × 누르는 힘으로 정해집니다. 닫는 속도는 상관없고, 오히려 빨리 닫으면 물체를 쳐서 밀어낼 수 있습니다. 가속도를 줄이거나(m(g+a) 감소), μ를 키우거나, 쥐는 힘을 키우는 것이 맞는 방법입니다."; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "그 방법은 실제로 미끄러짐을 줄입니다. 식 m(g + a) ≤ μ·ΣFn 에 들어 있지 않은 것을 골라 보세요."; }
  });
  if (state.predM != null) $("pred-m").value = state.predM;
  render();

  OmxLab.start({ transform, home: { [Q.g1]: 0.3, [Q.g2]: -0.3 }, camera: { pos: [0.6, -0.42, 0.42], target: [0.2, 0, 0.17] } }).then((l) => {
    lab = l;
    OB = lab.id("body", "obj"); OG = lab.id("geom", "obj"); PADS = [lab.id("geom", "pad6"), lab.id("geom", "pad7")];
    lab.onBusy((busy) => { $("btn-run").disabled = busy; $("btn-chk").disabled = busy; });
    $("btn-run").disabled = false; $("btn-chk").disabled = false;
    lab.readouts($("gauge"), [
      { k: "그리퍼 각도", v: () => `${deg(lab.data.qpos[Q.g1]).toFixed(1)}<small>°</small>` },
      { k: "그리퍼 모터 토크", v: () => `${Math.abs(lab.data.actuator_force[A.g]).toFixed(3)}<small> N·m</small>` },
      { k: "물체 높이", v: () => `${(lab.data.xpos[OB * 3 + 2] * 100).toFixed(1)}<small> cm</small>` },
    ]);
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
