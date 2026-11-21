/* OMX 동역학 실험실 · 공통 코드
 *
 * 모든 문제 페이지가 같이 쓰는 부분입니다.
 *   - 문제 목록(PROBLEMS)과 위쪽 탭 / 첫 화면 목록
 *   - MuJoCo(WASM) + ROBOTIS OMX 모델 불러오기
 *   - three.js 3D 화면, 매 프레임 시뮬레이션 진행
 *   - 관절 토크 계기판, 부위 강조 + 무게중심/수평거리 표시
 *   - 경계(버팀/떨어짐) 계산, 브라우저 저장
 *
 * 문제 페이지에서는 window.OmxLab 으로 씁니다. 3D를 쓰는 페이지는 이 파일보다 먼저
 * lib/three.min.js, lib/OrbitControls.js 를 불러와야 합니다.
 */
(function () {
  "use strict";

  // 사이트 루트 = 이 파일(common/lab.js)이 있는 폴더의 부모
  const ROOT = new URL("../", document.currentScript.src).href;

  // ---- 문제 목록: 새 문제를 만들면 여기에 한 줄 추가 ----
  const PROBLEMS = [
    { n: 1, id: "p01-torque", title: "아예 안 움직임", concept: "중력 토크 g(q)와 모터 최대 토크" },
    { n: 2, title: "떨림" },
    { n: 3, title: "처짐" },
    { n: 4, title: "미끄러짐" },
    { n: 5, title: "넘어짐" },
  ];
  const MORE_SOON = "6~10 준비 중";

  // ---- ROBOTIS omx.xml 인덱스 (MuJoCo 3.17.0으로 확인) ----
  const Q = { j1: 0, j2: 1, j3: 2, j4: 3, j5: 4 };          // qpos / dof
  const A = { j1: 0, j2: 1, j3: 2, j4: 3, j5: 4 };          // actuator
  const B = { link2: 3, link3: 4, link4: 5, link5: 6, ee: 7, link6: 8, link7: 9 };  // body
  const GRAV = 9.81;

  const $ = (id) => document.getElementById(id);
  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const deg = (rad) => rad * 180 / Math.PI;

  // ---- 탭 / 목록 ----
  function renderNav(el, currentId) {
    const items = PROBLEMS.map((p) => {
      const label = `${p.n} ${p.title}`;
      if (p.id === currentId) return `<span class="tab on" aria-current="page">상황 ${p.n} · ${p.title}</span>`;
      if (p.id) return `<a class="tab" href="${ROOT}${p.id}/">${label}</a>`;
      return `<span class="tab" aria-disabled="true">${label}</span>`;
    });
    items.push(`<span class="tab" aria-disabled="true">${MORE_SOON}</span>`);
    el.innerHTML = items.join("");
  }
  function renderList(el) {
    el.innerHTML = PROBLEMS.map((p) => p.id
      ? `<li><a href="${ROOT}${p.id}/"><span class="no">상황 ${p.n}</span><span class="t">${p.title}</span><span class="c">${p.concept || ""}</span></a></li>`
      : `<li><div class="soon"><span class="no">상황 ${p.n}</span><span class="t">${p.title}</span><span class="c">준비 중</span></div></li>`).join("");
  }

  // ---- 브라우저 저장 (못 써도 페이지는 동작) ----
  function store(key) {
    return {
      get() { try { return JSON.parse(localStorage.getItem(key) || "null") || {}; } catch (e) { return {}; } },
      set(v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* 저장 못 해도 계속 */ } },
    };
  }

  // ---- 경계: 실행 기록에서 버팀/떨어짐이 바뀌는 구간 ----
  // holdIsLow=false: 값이 클수록 버팀(토크). true: 값이 작을수록 버팀(물체 무게)
  function bracket(list, key, holdIsLow) {
    const holds = list.filter((r) => r.hold).map((r) => r[key]);
    const falls = list.filter((r) => !r.hold).map((r) => r[key]);
    if (!holds.length || !falls.length) return null;
    if (!holdIsLow) {
      const hi = Math.min(...holds), lo = Math.max(...falls.filter((v) => v < hi));
      return isFinite(lo) ? { lo, hi } : null;
    }
    const lo = Math.max(...holds), hi = Math.min(...falls.filter((v) => v > lo));
    return isFinite(hi) ? { lo, hi } : null;
  }
  const narrow = (b, width) => !!b && b.hi - b.lo <= width + 1e-9;
  function boundChip(label, b, unit, width, digits) {
    if (!b) return `<span class="fb">${label}: 아직 모름</span>`;
    const ok = narrow(b, width);
    return `<span class="fb ${ok ? "ok" : ""}">${label}: ${b.lo.toFixed(digits)} ~ ${b.hi.toFixed(digits)} ${unit}${ok ? " ✓" : " (더 좁혀 보세요)"}</span>`;
  }

  // ---- 실험실 시작 ----
  // opts: { viewport, overlay, clock, runstate }  (요소 id)
  // 돌려주는 lab 객체로 시뮬레이션을 다룹니다. 아래 lab.* 설명 참고.
  function start(opts) {
    const vp = $(opts.viewport || "viewport");
    const overlay = $(opts.overlay || "overlay");
    const clock = $(opts.clock || "simclock");
    const runstateEl = $(opts.runstate || "runstate");

    let mj, model, data, defaults;
    let renderer, scene, camera, controls;
    const geomMeshes = [];
    const frameFns = [], busyFns = [];
    const sim = { mode: "idle", t: 0, job: null, posing: false };

    // -- 3D --
    function initThree() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      vp.prepend(renderer.domElement);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(38, 4 / 3, 0.01, 10);
      camera.up.set(0, 0, 1);
      camera.position.set(0.22, -0.62, 0.30);
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.target.set(0.16, 0, 0.09);
      controls.enableDamping = true;
      controls.update();
      scene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 0.9));
      const sun = new THREE.DirectionalLight(0xffffff, 0.75); sun.position.set(0.5, -0.8, 1.2); scene.add(sun);
      const grid = new THREE.GridHelper(1.2, 24, 0x7a8692, 0x9aa6b2);
      grid.rotation.x = Math.PI / 2; grid.material.transparent = true; grid.material.opacity = 0.35; scene.add(grid);
      applyTheme();
      new ResizeObserver(resize).observe(vp); resize();
      matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
      new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }
    function applyTheme() { if (scene) scene.background = new THREE.Color(cssVar("--viewport") || "#e6eaee"); }
    function resize() {
      const w = vp.clientWidth, h = vp.clientHeight; if (!w || !h) return;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    }

    // -- MuJoCo --
    async function initMujoco() {
      const mod = await import(new URL("lib/mujoco.js", ROOT).href);
      mj = await mod.default({ locateFile: (p) => new URL("lib/" + p, ROOT).href });
      const vfs = new mj.MjVFS();
      // 모델 XML을 받고, 그 안에 적힌 메시 STL을 model/meshes/ 에서 받아 가상 파일로 넣는다
      const xr = await fetch(new URL("model/omx_lab.xml", ROOT));
      if (!xr.ok) throw new Error(`모델 파일을 받지 못했습니다 (${xr.status})`);
      const xmlText = await xr.text();
      const files = [...new Set([...xmlText.matchAll(/file="([^"]+\.stl)"/g)].map((m) => m[1]))];
      await Promise.all(files.map(async (f) => {
        const r = await fetch(new URL("model/meshes/" + f, ROOT));
        if (!r.ok) throw new Error(`메시 파일 ${f}를 받지 못했습니다 (${r.status})`);
        vfs.addBuffer(f, new Uint8Array(await r.arrayBuffer()));
      }));
      model = mj.MjModel.from_xml_string(xmlText, vfs);
      data = new mj.MjData(model);
      // 손끝 물체 자리: end_effector_link 원점의 점질량 (기본 0 kg). lab.setPayload 로 바꿈
      for (let k = 0; k < 3; k++) { model.body_ipos[B.ee * 3 + k] = 0; model.body_inertia[B.ee * 3 + k] = 1e-7; }
      model.body_mass[B.ee] = 0;
      // 문제마다 바꿀 수 있는 모델 값의 원래 값 (실행·초기화 때마다 되돌림)
      defaults = {
        forcerange: Float64Array.from(model.actuator_forcerange),
        frictionloss: Float64Array.from(model.dof_frictionloss),
        damping: Float64Array.from(model.dof_damping),
        gainprm: Float64Array.from(model.actuator_gainprm),
        biasprm: Float64Array.from(model.actuator_biasprm),
        body_mass: Float64Array.from(model.body_mass),
      };
    }
    function restoreDefaults() {
      model.actuator_forcerange.set(defaults.forcerange);
      model.dof_frictionloss.set(defaults.frictionloss);
      model.dof_damping.set(defaults.damping);
      model.actuator_gainprm.set(defaults.gainprm);
      model.actuator_biasprm.set(defaults.biasprm);
      model.body_mass.set(defaults.body_mass);
    }

    function buildRobotMeshes() {
      const vert = model.mesh_vert, face = model.mesh_face;
      const vadr = model.mesh_vertadr, vnum = model.mesh_vertnum, fadr = model.mesh_faceadr, fnum = model.mesh_facenum;
      const gtype = model.geom_type, gdata = model.geom_dataid, ggroup = model.geom_group, gbody = model.geom_bodyid;
      const cache = {};
      for (let g = 0; g < model.ngeom; g++) {
        if (gtype[g] !== 7 || ggroup[g] !== 2) continue;      // 7 = mjGEOM_MESH, group 2 = 보이는 메시
        const m = gdata[g];
        if (!cache[m]) {
          const pos = new Float32Array(vnum[m] * 3);
          pos.set(vert.subarray(vadr[m] * 3, (vadr[m] + vnum[m]) * 3));
          const idx = new Uint32Array(fnum[m] * 3);
          idx.set(face.subarray(fadr[m] * 3, (fadr[m] + fnum[m]) * 3));
          const geo = new THREE.BufferGeometry();
          geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
          geo.setIndex(new THREE.BufferAttribute(idx, 1));
          geo.computeVertexNormals();
          cache[m] = geo;
        }
        const isBase = gbody[g] <= 2;
        const mat = new THREE.MeshStandardMaterial({ color: isBase ? 0x8b949e : 0xf2f4f6, roughness: 0.6, metalness: 0.05, flatShading: true });
        const mesh = new THREE.Mesh(cache[m], mat);
        mesh.matrixAutoUpdate = false;
        scene.add(mesh);
        geomMeshes.push({ g, mesh, body: gbody[g], base: mat.color.getHex() });
      }
    }
    function syncMeshes() {
      const xp = data.geom_xpos, xm = data.geom_xmat;
      for (const { g, mesh } of geomMeshes) {
        const p = g * 3, r = g * 9;
        mesh.matrix.set(xm[r], xm[r + 1], xm[r + 2], xp[p], xm[r + 3], xm[r + 4], xm[r + 5], xp[p + 1],
          xm[r + 6], xm[r + 7], xm[r + 8], xp[p + 2], 0, 0, 0, 1);
      }
    }

    // -- 부위 강조 + 무게중심(●) + 관절축에서의 수평거리(─) --
    let lever = null, leverGfx = null;
    function makeLeverGfx() {
      const col = new THREE.Color(cssVar("--gravity") || "#c2410c");
      const basic = () => new THREE.MeshBasicMaterial({ color: col, depthTest: false });
      const line = (dashed) => new (dashed ? THREE.LineSegments : THREE.Line)(
        new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3)),
        dashed ? new THREE.LineDashedMaterial({ color: col, dashSize: 0.008, gapSize: 0.006, depthTest: false })
          : new THREE.LineBasicMaterial({ color: col, depthTest: false }));
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.008, 20, 14), basic());
      const axis = new THREE.Mesh(new THREE.SphereGeometry(0.006, 16, 12), basic());
      const h = line(false), v = line(true);
      const grp = new THREE.Group(); grp.add(dot, axis, h, v); grp.visible = false;
      grp.children.forEach((o) => { o.renderOrder = 10; });
      scene.add(grp);
      return { grp, dot, axis, h, v };
    }
    // ids: 강조할 body 번호 배열 (빈 배열/null 이면 해제), pivot: 수평거리를 잴 관절이 붙은 body
    function showLever(ids, pivot) {
      ids = ids && ids.length ? ids : null;
      lever = ids ? { ids, pivot } : null;
      const hl = new THREE.Color(cssVar("--gravity") || "#c2410c");
      for (const gm of geomMeshes) {
        const on = !!ids && ids.includes(gm.body);
        gm.mesh.material.color.set(on ? hl : gm.base);
        gm.mesh.material.emissive.set(on ? hl : 0x000000).multiplyScalar(on ? 0.35 : 0);
      }
      if (!leverGfx) leverGfx = makeLeverGfx();
      leverGfx.grp.visible = !!ids;
    }
    function syncLever() {
      if (!lever) return;
      const xi = data.xipos, bm = model.body_mass;
      let m = 0; const c = [0, 0, 0];
      for (const b of lever.ids) { m += bm[b]; for (let k = 0; k < 3; k++) c[k] += bm[b] * xi[b * 3 + k]; }
      if (m > 0) for (let k = 0; k < 3; k++) c[k] /= m;
      const p = lever.pivot * 3, j = [data.xpos[p], data.xpos[p + 1], data.xpos[p + 2]];
      leverGfx.dot.position.set(c[0], c[1], c[2]);
      leverGfx.axis.position.set(j[0], j[1], j[2]);
      const hp = leverGfx.h.geometry.attributes.position;   // 관절축 높이에서 수평으로 x만큼
      hp.setXYZ(0, j[0], c[1], j[2]); hp.setXYZ(1, c[0], c[1], j[2]); hp.needsUpdate = true;
      const vp2 = leverGfx.v.geometry.attributes.position;  // 그 끝에서 무게중심까지 수직 점선
      vp2.setXYZ(0, c[0], c[1], j[2]); vp2.setXYZ(1, c[0], c[1], c[2]); vp2.needsUpdate = true;
      leverGfx.v.computeLineDistances();
    }

    // -- 상태 표시 --
    function setRunState(text, cls) { runstateEl.textContent = text; runstateEl.className = "runstate " + (cls || ""); }
    function setBusy(b) { busyFns.forEach((f) => f(b)); }

    // -- 시뮬레이션 진행 --
    function stepSim(dtWall) {
      if (sim.mode !== "run") return;
      const job = sim.job, h = model.opt.timestep;
      const n = Math.min(Math.round(dtWall / h), 40);
      for (let i = 0; i < n && sim.t < job.duration; i++) {
        job.control && job.control(sim.t, data, model);
        mj.mj_step(model, data);
        sim.t += h;
      }
      if (sim.t >= job.duration - 1e-9) {
        sim.mode = "frozen";
        const r = job.judge ? job.judge(data, model) : {};
        if (r.state) setRunState(r.state, r.cls);
        else setRunState("끝", "");
        setBusy(false);
        job.done && job.done(r);
      }
    }
    let last = performance.now();
    function loop(now) {
      const dt = Math.min((now - last) / 1000, 0.05); last = now;
      if (model) {
        stepSim(dt);
        syncMeshes(); syncLever();
        frameFns.forEach((f) => f(lab));
        clock.textContent = `t = ${sim.t.toFixed(2)} s`;
      }
      controls && controls.update();
      renderer && renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }

    const lab = {
      ROOT, Q, A, B, GRAV,
      get mj() { return mj; }, get model() { return model; }, get data() { return data; },
      get mode() { return sim.mode; }, get t() { return sim.t; }, get posing() { return sim.posing; },
      defaults: () => defaults,
      /** 모든 관절 0°(팔 세움)로 되돌리고 모델 값을 원래대로 */
      resetPose() {
        restoreDefaults();
        mj.mj_resetData(model, data); mj.mj_forward(model, data);
        sim.mode = "idle"; sim.t = 0; sim.job = null; sim.posing = false;
        setRunState("준비", "");
      },
      /** 시뮬레이션 없이 자세만 보여 줌. q: {qpos 인덱스: rad} */
      showPose(q, label) {
        if (sim.mode === "run") return;
        mj.mj_resetData(model, data);
        for (const [i, v] of Object.entries(q)) data.qpos[+i] = v;
        mj.mj_forward(model, data);
        sim.mode = "idle"; sim.t = 0; sim.posing = true;   // 자세만 보여 주는 중: 모터 토크는 의미 없음
        setRunState(label || "자세 보기", "");
      },
      /** 실행. job: { setup(model), control(t, data, model), duration, judge(data, model) → {state, cls, ...}, done(result) } */
      run(job) {
        restoreDefaults();
        job.setup && job.setup(model);
        mj.mj_resetData(model, data); mj.mj_forward(model, data);
        sim.mode = "run"; sim.t = 0; sim.job = job; sim.posing = false;
        setRunState("실행 중", "run");
        setBusy(true);
      },
      /** 손끝 물체 질량 [kg] (실행 setup 안에서 부르기) */
      setPayload(kg) { model.body_mass[B.ee] = kg; },
      /** 매 프레임 호출할 함수 등록 */
      onFrame(fn) { frameFns.push(fn); },
      /** 실행 시작/끝 알림: fn(true=실행 중) */
      onBusy(fn) { busyFns.push(fn); },
      showLever, setRunState,
      /** 관절 토크 계기판. el 안에 그림. o: { dof, act, targetDeg, max, limit: () => Nm } */
      jointGauge(el, o) {
        const name = o.name || "joint2";
        el.innerHTML = `
          <div class="readouts">
            <div class="ro"><span class="k">${name} 각도</span><span class="v" data-k="q">—</span></div>
            <div class="ro"><span class="k">모터가 내는 토크</span><span class="v" data-k="tau">—</span></div>
            <div class="ro"><span class="k">버텨야 할 중력 토크</span><span class="v" data-k="g">—</span></div>
          </div>
          <div class="bar" aria-hidden="true"><div class="fill"></div><div class="lim"></div><div class="mark"></div></div>
          <div class="legend">
            <span><i style="background:var(--accent)"></i>모터 토크 (0 ~ ${o.max} Nm)</span>
            <span><i style="background:var(--gravity)"></i>중력 토크 g(q)</span>
            <span><i style="background:var(--ink);opacity:.6"></i>최대 토크 설정값</span>
          </div>`;
        const q = el.querySelector('[data-k="q"]'), tau = el.querySelector('[data-k="tau"]'), g = el.querySelector('[data-k="g"]');
        const fill = el.querySelector(".fill"), lim = el.querySelector(".lim"), mark = el.querySelector(".mark");
        const pct = (v) => `${Math.min(v / o.max, 1) * 100}%`;
        lab.onFrame(() => {
          const t = Math.abs(data.actuator_force[o.act]), gv = Math.abs(data.qfrc_bias[o.dof]);
          q.innerHTML = `${deg(data.qpos[o.dof]).toFixed(1)}<small>°${o.targetDeg != null ? ` / 목표 ${o.targetDeg.toFixed(1)}°` : ""}</small>`;
          tau.innerHTML = sim.posing ? "—" : `${t.toFixed(2)}<small> Nm</small>`;
          g.innerHTML = `${gv.toFixed(2)}<small> Nm</small>`;
          fill.style.width = sim.posing ? "0%" : pct(t);
          mark.style.left = `calc(${pct(gv)} - 1px)`;
          lim.style.left = pct(o.limit ? o.limit() : 0);
        });
      },
    };

    try { initThree(); } catch (e) { overlay.className = "overlay err"; overlay.textContent = "3D 화면을 만들지 못했습니다: " + e.message; }
    requestAnimationFrame(loop);
    return initMujoco().then(() => {
      buildRobotMeshes();
      lab.resetPose();
      overlay.hidden = true;
      setBusy(false);
      return lab;
    }).catch((e) => {
      console.error(e);
      overlay.className = "overlay err";
      overlay.textContent = "MuJoCo를 불러오지 못했습니다: " + (e && e.message ? e.message : e);
      throw e;
    });
  }

  // ---- 꼬리말: 페이지에 <footer id="foot"> 가 있으면 출처를 채움 ----
  function renderFoot() {
    const el = document.getElementById("foot"); if (!el) return;
    el.innerHTML = `<span>비공식 학습 자료입니다. ROBOTIS와 관계없습니다.</span>
      <span>로봇 모델: <a href="https://github.com/ROBOTIS-GIT/open_manipulator">ROBOTIS open_manipulator</a> (Apache-2.0) ·
      물리 엔진: <a href="https://github.com/google-deepmind/mujoco">MuJoCo</a> (Apache-2.0) ·
      3D: <a href="https://threejs.org/">three.js</a> (MIT) · 자세한 출처: <a href="${ROOT}NOTICE">NOTICE</a></span>`;
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderFoot); else renderFoot();

  window.OmxLab = { ROOT, PROBLEMS, Q, A, B, GRAV, $, deg, renderNav, renderList, store, bracket, narrow, boundChip, start };
})();
