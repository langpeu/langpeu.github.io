/* payload · 물체를 들면 동작 이상 — 손끝 하중이 관절마다 퍼짐: 관절 i 토크 = gᵢ + m·g·xᵢ
 *
 * ROBOTIS 위치 제어(Kp 50, 한계 joint2·3 1.5 N·m, joint4 0.52 N·m) 그대로, 마찰 끔. 3초 버틴 뒤 최종 오차 > 3° 이면 무너짐.
 * 확인한 값 (MuJoCo 3.17.0): 접은 자세(j2 0, j3 +90°, j4 −90°) 식 j4 398 g (j2 858, j3 1229) → 380 g 버팀 / 400 g j4 무너짐.
 *   뻗은 자세 식 j2 235 g → 220 g 버팀 / 240 g j2 무너짐
 */
(() => {
  "use strict";
  const { $, Q, A, B, GRAV, deg, logTable, pill } = OmxLab;
  const POSES = {
    fold: { name: "접은 자세", q: { [Q.j2]: 0, [Q.j3]: Math.PI / 2, [Q.j4]: -Math.PI / 2 } },
    reach: { name: "뻗은 자세", q: { [Q.j2]: 1.4, [Q.j3]: -1.4, [Q.j4]: 0 } },
  };
  const JN = [["joint2", Q.j2, A.j2, B.link2], ["joint3", Q.j3, A.j3, B.link3], ["joint4", Q.j4, A.j4, B.link4]];
  const RUN = 3, TOL = 3;
  OmxLab.shell("payload");
  const box = OmxLab.store("omx-lab-payload"), state = box.get(), save = () => box.set(state);
  let lab = null, table = {};
  const logs = [];

  const plot = OmxLab.Plot($("plot"), { T: RUN, yRange: [0, 20], digits: 0, series: [
    { name: "joint2", color: "--accent" }, { name: "joint3", color: "--good" }, { name: "joint4", color: "--gravity" }, { name: "무너짐 기준 3°", color: "--muted", dash: true }] });
  plot.legend($("plot-legend"));
  const mEl = $("sl-m"); const mu = () => { $("v-m").textContent = mEl.value + " g"; }; mEl.addEventListener("input", mu); mu();

  // 자세별 관절 표: 한계, 빈손 gᵢ, 손끝까지 수평거리 xᵢ, 최대 무게 mᵢ
  function analyse(key) {
    const { mj, model, data } = lab, q = POSES[key].q;
    mj.mj_resetData(model, data); for (const [i, v] of Object.entries(q)) data.qpos[+i] = v; mj.mj_forward(model, data);
    const xe = data.xpos[B.ee * 3];
    return JN.map(([name, qi, ai, bi]) => {
      const lim = model.actuator_forcerange[ai * 2 + 1], g = Math.abs(data.qfrc_bias[qi]), x = Math.abs(xe - data.xpos[bi * 3]);
      return { name, lim, g, x, m: (lim - g) / (GRAV * x) * 1000 };
    });
  }

  function run() {
    const key = $("sel-pose").value, m = +mEl.value, q = POSES[key].q;
    plot.reset(RUN);
    lab.run({
      duration: RUN,
      setup(model, data) {
        for (let j = 0; j < 5; j++) model.dof_frictionloss[j] = 0;
        lab.setPayload(m / 1000);
        for (const [i, v] of Object.entries(q)) { data.qpos[+i] = v; data.ctrl[+i] = v; }
      },
      sample(t, data) { plot.push(t, [...JN.map(([, qi]) => Math.min(20, deg(Math.abs(data.qpos[qi] - q[qi])))), TOL]); },
      judge(data) {
        const err = JN.map(([, qi]) => deg(Math.abs(data.qpos[qi] - q[qi])));
        const k = err.indexOf(Math.max(...err)), hold = err[k] <= TOL;
        return { err, hold, worst: JN[k][0], state: hold ? "버팀" : `${JN[k][0]} 무너짐`, cls: hold ? "hold" : "fall" };
      },
      done(r) { logs.push({ n: logs.length + 1, key, m, ...r }); render(); },
    });
  }
  function render() {
    logTable($("log"), logs, [
      { f: (r) => r.n, n: 1 }, { f: (r) => POSES[r.key].name }, { f: (r) => r.m + " g", n: 1 },
      { f: (r) => r.err.map((v) => v.toFixed(1)).join(" / ") + "°", n: 1 }, { f: (r) => pill(r.hold, "버팀", `${r.worst} 무너짐`) },
    ]);
    const chip = (key) => {
      const L = logs.filter((r) => r.key === key);
      const ok = Math.max(-1, ...L.filter((r) => r.hold).map((r) => r.m)), badRows = L.filter((r) => !r.hold && r.m > ok);
      if (ok < 0 || !badRows.length) return { html: `<span class="fb">${POSES[key].name}: 아직 모름</span>`, done: false };
      const bad = badRows.reduce((a, r) => (r.m < a.m ? r : a));
      const d = bad.m - ok <= 20;
      return { html: `<span class="fb ${d ? "ok" : ""}">${POSES[key].name}: ${ok} g 버팀 ~ ${bad.m} g ${bad.worst} 무너짐${d ? " ✓" : " (더 좁혀 보세요)"}</span>`, done: d };
    };
    const a = chip("fold"), c = chip("reach");
    $("bounds").innerHTML = a.html + c.html;
    if (a.done && c.done) $("c3").classList.add("done");
  }

  $("btn-pred").addEventListener("click", () => {
    if (!lab) return;
    const j = $("pred-j").value, v = parseFloat($("pred-m").value), fb = $("fb-pred");
    const rows = table.fold, first = rows.reduce((a, r) => (r.m < a.m ? r : a));
    state.predJ = j; state.predM = v; save();
    if (j !== first.name) { fb.hidden = false; fb.className = "fb no"; fb.textContent = "먼저 무너지는 관절이 다릅니다. 관절마다 mᵢ = (한계 − gᵢ) ÷ (g·xᵢ)를 계산해 가장 작은 것을 고르세요."; return; }
    if (OmxLab.checkPrediction(fb, v, first.m, 0.05, "g", `${first.name}가 가장 먼저입니다. 모터가 작은(0.52 N·m) 손목이 어깨보다 먼저 한계에 닿습니다.`, "관절은 맞았습니다. 한계에서 gᵢ를 빼고 g·xᵢ로 나눈 뒤 g 단위로 바꿨는지 확인하세요."))
      { $("c1").classList.add("done"); $("c2").classList.add("done"); }
  });
  $("btn-run").addEventListener("click", run);
  $("sel-pose").addEventListener("change", () => { if (lab && lab.mode !== "run") lab.showPose(POSES[$("sel-pose").value].q, POSES[$("sel-pose").value].name); });
  $("quiz").addEventListener("change", (e) => {
    const fb = $("fb-quiz"); fb.hidden = false;
    if (e.target.value === "b") { fb.className = "fb ok"; fb.textContent = "맞습니다. 손목이 받는 토크는 m·g·x손목이라서, 손목에서 물체까지 수평거리를 줄이면 바로 줄어듭니다. 어깨 모터를 키워도 손목 부담은 그대로이고, Kp를 올려도 모터 한계(포화)는 넘을 수 없습니다."; $("c4").classList.add("done"); }
    else { fb.className = "fb no"; fb.textContent = "그 방법은 무너지는 관절(손목)의 토크 한계나 부담을 바꾸지 못합니다. 식 gᵢ + m·g·xᵢ ≤ 한계ᵢ 에서 손목의 무엇을 바꿀 수 있을지 생각해 보세요."; }
  });
  if (state.predJ) $("pred-j").value = state.predJ;
  if (state.predM != null) $("pred-m").value = state.predM;
  render();

  OmxLab.start({ home: POSES.fold.q, camera: { pos: [0.3, -0.62, 0.32], target: [0.1, 0, 0.12] } }).then((l) => {
    lab = l;
    lab.onBusy((busy) => { $("btn-run").disabled = busy; });
    $("btn-run").disabled = false;
    table.fold = analyse("fold"); table.reach = analyse("reach");
    lab.resetPose(POSES.fold.q);
    $("jtbl").innerHTML = table.fold.map((r) => `<tr><td>${r.name}</td><td class="n">${r.lim.toFixed(2)} N·m</td><td class="n">${r.g.toFixed(3)} N·m</td><td class="n">${r.x.toFixed(3)} m</td><td class="n" style="color:var(--muted)">?</td></tr>`).join("");
    $("sol").innerHTML = table.fold.map((r) => `${r.name}: (${r.lim.toFixed(2)} − ${r.g.toFixed(3)}) ÷ (9.81 × ${r.x.toFixed(3)}) = ${r.m.toFixed(0)} g`).join("<br>") +
      `<br>가장 작은 값 → <b>${table.fold.reduce((a, r) => (r.m < a.m ? r : a)).name}, ${Math.min(...table.fold.map((r) => r.m)).toFixed(0)} g</b>` +
      `<br><span style="color:var(--muted)">뻗은 자세에서는: ${table.reach.map((r) => `${r.name} ${r.m.toFixed(0)} g`).join(", ")}</span>`;
    // 관절별 필요 토크 ÷ 한계 표시
    lab.readouts($("gauge"), JN.map(([name, qi, ai]) => ({
      k: `${name} 부담 (필요 ÷ 한계)`,
      v: () => { const lim = lab.model.actuator_forcerange[ai * 2 + 1], g = Math.abs(lab.data.qfrc_bias[qi]); return `${(g / lim * 100).toFixed(0)}<small>%</small>`; },
    })));
    lab.onFrame(() => plot.draw());
  }).catch(() => {});
})();
