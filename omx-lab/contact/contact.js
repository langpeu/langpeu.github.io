/* contact · 관통·튕김 — 접촉 시간 상수 τ: 파고듦 ≈ v·τ, 관통 조건 v·τ > 두께/2 + r
 *
 * 모델 변형: 로봇 옆(y = 0.25 m) 높이 0.10 m의 얇은 판(table)과 반지름 1 cm, 20 g 공(ball).
 * τ는 판(table)의 solref[0]만 바꿈(공은 기본값). dt 2 ms 고정.
 * 확인한 값 (MuJoCo 3.17.0, τ 4 ms): 깊이 0.3 m → 10.5 mm (식 9.7). 관통 경계 2 mm: 0.3~0.4 m (식 0.39),
 *   10 mm: 0.7~1.0 m (식 0.72), 20 mm: 1.0~1.5 m (식 1.27). τ 20 ms, 10 mm: 0.2 m 버팀 / 0.3 m 관통
 */
(() => {
  "use strict";
  const { $, GRAV, logTable, pill } = OmxLab;
  const R = 0.01, TOP0 = 0.10, RUN = 1.5;
  OmxLab.shell("contact");
  const box = OmxLab.store("omx-lab-contact"), state = box.get(), save = () => box.set(state);
  let lab = null, TG, BQ;
  const logs = [];
  const transform = (x) => x.replace(/<\/worldbody>\s*<\/mujoco>\s*$/,
    `<body name="table" pos="0.2 0.25 ${TOP0}"><geom name="table" type="box" size="0.08 0.08 0.005" rgba="0.62 0.5 0.38 1"/></body>` +
    `<body name="ball" pos="0.2 0.25 0.4"><freejoint name="ball"/><geom name="ball" type="sphere" size="${R}" mass="0.02" rgba="0.92 0.35 0.12 1"/></body></worldbody></mujoco>`);

  const plot = OmxLab.Plot($("plot"), { T: RUN, yRange: [-40, 60], digits: 0, series: [{ name: "공 바닥 − 판 윗면", color: "--accent" }, { name: "판 아랫면", color: "--muted", dash: true }] });
  plot.legend($("plot-legend"));
  const hEl = $("sl-h"); const hu = () => { $("v-h").textContent = (+hEl.value).toFixed(2) + " m"; }; hEl.addEventListener("input", hu); hu();
  const vtau = (h, tc) => Math.sqrt(2 * GRAV * h) * tc * 1000;

  const run = (o = {}) => new Promise((resolve) => {
    const h = o.h ?? +hEl.value, t = o.t ?? +$("sel-t").value, tc = o.tc ?? +$("sel-tc").value;
    const top = TOP0 + t / 2;
    let minD = 1e9;
    plot.reset(RUN);
    lab.run({
      duration: RUN, speed: o.speed || 1,
      setup(model, data) {
        model.geom_size[TG * 3 + 2] = t / 2;
        model.geom_solref[TG * 2] = tc; model.geom_solref[TG * 2 + 1] = 1;
        data.qpos[BQ + 2] = top + R + h;
      },
      sample(time, data) { const d = (data.qpos[BQ + 2] - R - top) * 1000; minD = Math.min(minD, d); plot.push(time, [Math.max(-40, Math.min(60, d)), -t * 1000]); },
      judge(data) { const through = data.qpos[BQ + 2] < TOP0; return { through, pen: -minD, state: through ? "관통" : `파고듦 ${(-minD).toFixed(1)} mm`, cls: through ? "fall" : "hold" }; },
      done(r) { logs.push({ n: logs.length + 1, h, t, tc, pred: vtau(h, tc), ...r }); render(); resolve(r); },
    });
  });
  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.h.toFixed(2) + " m", n: 1 }, { f: (r) => r.t * 1000 + " mm", n: 1 }, { f: (r) => r.tc * 1000 + " ms", n: 1 },
      { f: (r) => r.pred.toFixed(1) + " mm", n: 1 }, { f: (r) => r.through ? "—" : r.pen.toFixed(1) + " mm", n: 1 }, { f: (r) => pill(!r.through, "버팀", "관통") },
    ]);
    if (state.ok1 && state.okSweep && state.soft) $("c3").classList.add("done");
  }
  const fbSet = (id, cls, html) => { const fb = $(id); fb.hidden = false; fb.className = "fb " + cls; fb.innerHTML = html; };
  const H_TRUTH = Math.pow((0.005 + R) / 0.004, 2) / (2 * GRAV);
  $("btn-chk1").addEventListener("click", async () => {
    const r = await run({ h: 0.3, t: 0.01, tc: 0.004 }), p = state.predD;
    const near = p != null && isFinite(p) && Math.abs(r.pen - p) / r.pen <= 0.1;
    fbSet("fb-chk1", near ? "ok" : "", `30 cm에서 <b>${r.pen.toFixed(1)} mm</b> 파고들었습니다. 식 v·τ = ${vtau(0.3, 0.004).toFixed(1)} mm` +
      (p != null && isFinite(p) ? `, 내 예측 ${p} mm ${near ? "— 10% 안에서 맞습니다." : "— 차이가 큽니다. 2단계 (1)을 다시 확인해 보세요."}` : ". 2단계 (1)에 예측을 넣으면 비교해 줍니다.") +
      " MuJoCo 접촉은 완전한 스프링이 아니라서 식보다 조금 깊게 들어갑니다.");
    if (near) { state.ok1 = 1; save(); render(); }
  });
  $("btn-sweep").addEventListener("click", async () => {
    const P = state.predH;
    if (P == null || !isFinite(P) || P <= 0) return fbSet("fb-sweep", "no", "2단계 (2)에서 관통 높이를 먼저 예측하세요.");
    const ks = [0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4], res = [];
    $("strip").innerHTML = "";
    for (const k of ks) {
      const h = Math.round(P * k * 100) / 100, r = await run({ h, t: 0.01, tc: 0.004, speed: 3 });
      res.push({ h, through: r.through });
      $("strip").innerHTML = res.map((x) => `<span class="pill ${x.through ? "fall" : "hold"}">${x.h.toFixed(2)} m ${x.through ? "관통" : "버팀"}</span>`).join(" ");
    }
    const first = res.find((x) => x.through), mixed = first && res.some((x) => !x.through && x.h > first.h);
    const ok = first && Math.abs(first.h - P) / P <= 0.15;
    let msg = !first ? `1.4배(${(P * 1.4).toFixed(2)} m)까지 한 번도 뚫리지 않았습니다. 예측이 너무 작습니다.`
      : ok ? `예측이 맞습니다. 처음 뚫린 높이는 <b>${first.h.toFixed(2)} m</b>로 내 예측 ${P} m 근처입니다.`
      : first.h < P ? `내 예측보다 한참 낮은 ${first.h.toFixed(2)} m에서 이미 뚫렸습니다. 예측이 너무 큽니다.` : `처음 뚫린 높이 ${first.h.toFixed(2)} m가 예측보다 한참 높습니다. 예측이 너무 작습니다.`;
    if (mixed) msg += " 그 위에서도 <b>버팀과 관통이 섞여</b> 나옵니다. 공이 판에 닿는 순간이 계산 간격(2 ms) 안 어디에 걸리느냐에 따라 결과가 바뀌기 때문입니다. 시뮬에서 경계 근처의 접촉은 믿기 어렵다는 뜻입니다.";
    if (!ok) msg += " 두께의 절반 + 반지름(15 mm)을 τ로 나눠 필요한 속도를 구하고, h = v² ÷ 2g 입니다.";
    else msg += ` 계산값은 ${H_TRUTH.toFixed(2)} m입니다.`;
    fbSet("fb-sweep", ok ? "ok" : "no", msg);
    if (ok) { state.okSweep = 1; save(); render(); }
  });
  $("btn-soft").addEventListener("click", async () => {
    const r = await run({ h: 0.3, t: 0.01, tc: 0.02 });
    fbSet("fb-soft", "ok", r.through ? `τ 20 ms(무른 접촉)에서는 30 cm만 떨어뜨려도 <b>관통</b>합니다. 밀어내는 데 5배 오래 걸려 그동안 더 깊이 들어가기 때문입니다(v·τ = ${vtau(0.3, 0.02).toFixed(0)} mm > 15 mm).`
      : `τ 20 ms에서 ${r.pen.toFixed(1)} mm 파고들었습니다. 4 ms일 때보다 훨씬 깊습니다.`);
    state.soft = 1; save(); render();
  });
  $("btn-pred").addEventListener("click", () => {
    const v = parseFloat($("pred-d").value); state.predD = v; save();
    if (OmxLab.checkPrediction($("fb-pred"), v, vtau(0.3, 0.004), 0.08, "mm", "", "v = √(2gh)를 m/s로 구하고, τ는 초(0.004 s)로 곱하세요."))
      { $("c1").classList.add("done"); }
  });
  $("btn-predh").addEventListener("click", () => {
    const v = parseFloat($("pred-h").value); state.predH = v; save();
    const truth = Math.pow((0.005 + R) / 0.004, 2) / (2 * GRAV);
    if (OmxLab.checkPrediction($("fb-predh"), v, truth, 0.05, "m", "실험으로 경계를 찾아 보세요.", "두께의 절반(5 mm) + 반지름(10 mm) = 15 mm를 τ로 나누면 필요한 속도입니다."))
      { $("c2").classList.add("done"); }
  });
  $("btn-run").addEventListener("click", () => run());
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. 시뮬은 dt마다 한 번씩만 힘을 계산하므로, dt보다 빠르게 반응하는 접촉은 표현하지 못하고 힘이 과하게 들어가 튕기거나 떨게 됩니다. τ는 dt의 2배 이상으로 두고, 더 딱딱한 접촉이 필요하면 dt를 함께 줄여야 합니다."; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "다시 생각해 보세요. 시뮬레이터는 dt 간격으로만 계산합니다. dt보다 빠른 반응을 요구하면 어떻게 될까요?"; }
  });
  if (state.predD != null) $("pred-d").value = state.predD;
  if (state.predH != null) $("pred-h").value = state.predH;
  render();

  OmxLab.start({ transform, camera: { pos: [0.75, -0.55, 0.55], target: [0.12, 0.1, 0.08] } }).then((l) => {
    lab = l; TG = lab.id("geom", "table"); BQ = lab.qadr("ball");
    const BTN = ["btn-run", "btn-chk1", "btn-sweep", "btn-soft"];
    lab.onBusy((busy) => BTN.forEach((id) => { $(id).disabled = busy; }));
    BTN.forEach((id) => { $(id).disabled = false; });
    lab.readouts($("gauge"), [
      { k: "공 높이 (판 윗면 기준)", v: () => `${((lab.data.qpos[BQ + 2] - R - TOP0 - lab.model.geom_size[TG * 3 + 2]) * 1000).toFixed(1)}<small> mm</small>` },
      { k: "공 속도", v: () => `${Math.abs(lab.data.qvel[lab.dadr("ball") + 2]).toFixed(2)}<small> m/s</small>` },
      { k: "판 τ", v: () => `${(lab.model.geom_solref[TG * 2] * 1000).toFixed(0)}<small> ms</small>` },
    ]);
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
