/* 상황 8 · 관통·튕김 — 접촉 시간 상수 τ: 파고듦 ≈ v·τ, 관통 조건 v·τ > 두께/2 + r
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
  OmxLab.renderNav($("nav"), "p08-contact");
  const box = OmxLab.store("omx-lab-8"), state = box.get(), save = () => box.set(state);
  let lab = null, TG, BQ;
  const logs = [];
  const transform = (x) => x.replace(/<\/worldbody>\s*<\/mujoco>\s*$/,
    `<body name="table" pos="0.2 0.25 ${TOP0}"><geom name="table" type="box" size="0.08 0.08 0.005" rgba="0.62 0.5 0.38 1"/></body>` +
    `<body name="ball" pos="0.2 0.25 0.4"><freejoint name="ball"/><geom name="ball" type="sphere" size="${R}" mass="0.02" rgba="0.92 0.35 0.12 1"/></body></worldbody></mujoco>`);

  const plot = OmxLab.Plot($("plot"), { T: RUN, yRange: [-40, 60], digits: 0, series: [{ name: "공 바닥 − 판 윗면", color: "--accent" }, { name: "판 아랫면", color: "--muted", dash: true }] });
  plot.legend($("plot-legend"));
  const hEl = $("sl-h"); const hu = () => { $("v-h").textContent = (+hEl.value).toFixed(2) + " m"; }; hEl.addEventListener("input", hu); hu();
  const vtau = (h, tc) => Math.sqrt(2 * GRAV * h) * tc * 1000;

  function run() {
    const h = +hEl.value, t = +$("sel-t").value, tc = +$("sel-tc").value;
    const top = TOP0 + t / 2;
    let minD = 1e9;
    plot.reset(RUN);
    lab.run({
      duration: RUN,
      setup(model, data) {
        model.geom_size[TG * 3 + 2] = t / 2;
        model.geom_solref[TG * 2] = tc; model.geom_solref[TG * 2 + 1] = 1;
        data.qpos[BQ + 2] = top + R + h;
      },
      sample(time, data) { const d = (data.qpos[BQ + 2] - R - top) * 1000; minD = Math.min(minD, d); plot.push(time, [Math.max(-40, Math.min(60, d)), -t * 1000]); },
      judge(data) { const through = data.qpos[BQ + 2] < TOP0; return { through, pen: -minD, state: through ? "관통" : `파고듦 ${(-minD).toFixed(1)} mm`, cls: through ? "fall" : "hold" }; },
      done(r) { logs.push({ n: logs.length + 1, h, t, tc, pred: vtau(h, tc), ...r }); render(); },
    });
  }
  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => r.h.toFixed(2) + " m", n: 1 }, { f: (r) => r.t * 1000 + " mm", n: 1 }, { f: (r) => r.tc * 1000 + " ms", n: 1 },
      { f: (r) => r.pred.toFixed(1) + " mm", n: 1 }, { f: (r) => r.through ? "—" : r.pen.toFixed(1) + " mm", n: 1 }, { f: (r) => pill(!r.through, "버팀", "관통") },
    ]);
    const L = logs.filter((r) => r.t === 0.01 && r.tc === 0.004);
    const ok = Math.max(-1, ...L.filter((r) => !r.through).map((r) => r.h)), bad = Math.min(9, ...L.filter((r) => r.through).map((r) => r.h));
    const found = ok >= 0 && bad < 9 && bad > ok;
    $("bounds").innerHTML = found ? `<span class="fb ${bad - ok <= 0.1 + 1e-9 ? "ok" : ""}">10 mm, τ 4 ms 관통 경계: ${ok.toFixed(2)} ~ ${bad.toFixed(2)} m (식 0.72 m)${bad - ok <= 0.1 + 1e-9 ? " ✓" : " (더 좁혀 보세요)"}</span>`
      : `<span class="fb">10 mm, τ 4 ms 관통 경계: 아직 모름</span>`;
    if (found && bad - ok <= 0.1 + 1e-9 && logs.some((r) => r.tc === 0.02)) $("c3").classList.add("done");
  }

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
  $("btn-run").addEventListener("click", run);
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
    lab.onBusy((busy) => { $("btn-run").disabled = busy; });
    $("btn-run").disabled = false;
    lab.readouts($("gauge"), [
      { k: "공 높이 (판 윗면 기준)", v: () => `${((lab.data.qpos[BQ + 2] - R - TOP0 - lab.model.geom_size[TG * 3 + 2]) * 1000).toFixed(1)}<small> mm</small>` },
      { k: "공 속도", v: () => `${Math.abs(lab.data.qvel[lab.dadr("ball") + 2]).toFixed(2)}<small> m/s</small>` },
      { k: "판 τ", v: () => `${(lab.model.geom_solref[TG * 2] * 1000).toFixed(0)}<small> ms</small>` },
    ]);
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
