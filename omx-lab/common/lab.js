/* 피지컬AI 실험실 · 공통 코드
 *
 * 모든 문제 페이지가 같이 쓰는 부분입니다.
 *   - 문제 목록(PROBLEMS)과 위쪽 탭 / 첫 화면 목록
 *   - MuJoCo(WASM) + ROBOTIS OMX 모델 불러오기 (문제마다 XML을 고친 변형 가능)
 *   - three.js 3D 화면, 고정 간격 시뮬레이션 진행, 발산 감지
 *   - 관절 토크 계기판, 숫자 표시, 시간 그래프, 부위 강조 + 무게중심/수평거리 표시
 *   - 경계(버팀/떨어짐) 계산, 브라우저 저장
 *
 * 문제 페이지에서는 window.OmxLab 으로 씁니다. 3D를 쓰는 페이지는 이 파일보다 먼저
 * lib/three.min.js, lib/OrbitControls.js 를 불러와야 합니다.
 */
(function () {
  "use strict";

  // 사이트 루트 = 이 파일(common/lab.js)이 있는 폴더의 부모
  const ROOT = new URL("../", document.currentScript.src).href;

  // ---- 단원과 문제 목록: 번호·단원·제목은 여기에만 둔다 (페이지에는 번호를 쓰지 않음) ----
  // 새 문제: 여기 한 줄 + <id>/ 폴더. ready:false 는 목록에 '준비 중'으로만 나온다.
  const UNITS = [
    { key: "basics", name: "기초", sub: "식, 기호, 단위" },
    { key: "kin", name: "기구학", sub: "위치와 각도" },
    { key: "statics", name: "정역학", sub: "멈춰서 버티는 힘" },
    { key: "dyn", name: "동역학", sub: "움직일 때의 관성" },
    { key: "control", name: "제어", sub: "목표를 따라가게 하기" },
    { key: "actuator", name: "액추에이터", sub: "모터·서보 특성" },
    { key: "sim", name: "시뮬레이션", sub: "시뮬레이터의 한계" },
    { key: "tools", name: "도구", sub: "계산기" },
  ];
  const PROBLEMS = [
    { n: 0, id: "basics", unit: "basics", ready: true, title: "기초 개념", concept: "식 하나, 기호 읽는 법, 단위, 용어 사전" },
    { n: 1, id: "fk", unit: "kin", ready: false, title: "FK: 손끝은 어디에?", concept: "순기구학, 링크 길이, 각도 더하기" },
    { n: 2, id: "ik", unit: "kin", ready: false, title: "IK: 공을 잡으려면 몇 도?", concept: "역기구학, 코사인 법칙, 해가 2개" },
    { n: 3, id: "singularity", unit: "kin", ready: false, title: "손끝 속도와 특이점", concept: "자코비안 v = J·q̇, 특이점" },
    { n: 4, id: "torque", unit: "statics", ready: true, title: "명령을 보내도 안 움직임", concept: "중력 토크 g(q)와 모터 최대 토크" },
    { n: 5, id: "payload", unit: "statics", ready: true, title: "물체를 들면 동작 이상", concept: "페이로드 하중이 관절마다 퍼지는 방식 Jᵀ·F" },
    { n: 6, id: "push", unit: "statics", ready: false, title: "어느 방향으로 밀 때 제일 셀까", concept: "손끝 힘 방향과 τ = Jᵀ·F" },
    { n: 7, id: "slip", unit: "statics", ready: true, title: "미끄러짐", concept: "마찰 한계 Ft ≤ μ·Fn, 파지력" },
    { n: 8, id: "tipping", unit: "statics", ready: true, title: "넘어짐", concept: "무게중심과 지지 영역, 빠른 동작의 관성" },
    { n: 9, id: "inertia", unit: "dyn", ready: false, title: "뻗은 팔은 왜 느리게 돌까", concept: "자세에 따라 바뀌는 관성 M(q)" },
    { n: 10, id: "pendulum", unit: "dyn", ready: false, title: "힘 빠진 팔 흔들기", concept: "진자 주기로 관성과 중력 확인" },
    { n: 11, id: "coupling", unit: "dyn", ready: false, title: "어깨를 돌리면 팔꿈치가 끌려간다", concept: "관절 결합, M(q)의 대각선 밖 항" },
    { n: 12, id: "centrifugal", unit: "dyn", ready: false, title: "원심력은 무시해도 될까", concept: "코리올리·원심력 C(q, q̇)·q̇" },
    { n: 13, id: "vibration", unit: "control", ready: true, title: "떨림·진동", concept: "PD 게인, 감쇠비 ζ, 제어 지연" },
    { n: 14, id: "sag", unit: "control", ready: true, title: "목표까지 못 감·처짐", concept: "중력보상 누락: 처짐 ≈ g(q) ÷ Kp" },
    { n: 15, id: "pid", unit: "control", ready: false, title: "처짐을 I항으로 없애기", concept: "PID 적분항과 와인드업" },
    { n: 16, id: "lag", unit: "control", ready: true, title: "너무 느림·궤적 지연", concept: "토크 한계, 관성 M(q), 피드포워드" },
    { n: 17, id: "speed-torque", unit: "actuator", ready: false, title: "빠를수록 힘이 약해진다", concept: "모터 토크-속도 곡선" },
    { n: 18, id: "current", unit: "actuator", ready: false, title: "서보가 뜨거워지는 이유", concept: "토크와 전류, 전력 τ·ω" },
    { n: 19, id: "diverge", unit: "sim", ready: true, title: "시뮬 폭발·발산", concept: "적분기, dt와 강성: dt < 2/ω" },
    { n: 20, id: "contact", unit: "sim", ready: true, title: "관통·튕김", concept: "접촉 강성: 파고듦 ≈ v·τ" },
    { n: 21, id: "sim2real", unit: "sim", ready: true, title: "Sim-to-Real 갭", concept: "모델 파라미터 오차와 시스템 식별" },
  ];
  // 도구: 문제가 아니라 문제를 풀 때 옆에 두고 쓰는 계산기
  const TOOLS = [
    { id: "tool-servo", unit: "tools", ready: true, title: "서보 스펙 계산기", desc: "토크·속도 단위 환산, 팔 길이별 버티는 무게, 내 팔에 충분한지 판정" },
    { id: "tool-estimate", unit: "tools", ready: true, title: "단위 변환·어림 계산", desc: "중력 토크, 가속 토크, 파지력 어림 + 단위 변환기" },
    { id: "tool-kinematics", unit: "tools", ready: false, title: "FK·IK 계산기", desc: "관절 각도 ↔ 손끝 위치, 두 IK 해, 작업 공간" },
  ];
  const find = (id) => PROBLEMS.find((p) => p.id === id) || TOOLS.find((t) => t.id === id) || null;
  // 다른 페이지를 가리키는 이름: 상황 → "상황 N", 기초 → "0 · 기초 개념", 도구 → "도구 · 제목"
  function label(id) {
    const p = find(id); if (!p) return id;
    if (p.unit === "tools") return `도구 · ${p.title}`;
    if (p.n === 0) return `0 · ${p.title}`;
    return `상황 ${p.n}`;
  }
  // <a data-ref="sag">상황 {n}</a> → 글자의 {n}·{t} 를 번호·제목으로, href 가 없으면 채움
  function refLinks(root) {
    (root || document).querySelectorAll("[data-ref]").forEach((a) => {
      const p = find(a.dataset.ref); if (!p) return;
      a.textContent = a.textContent.replace(/\{n\}/g, p.n ?? "").replace(/\{t\}/g, p.title);
      if (a.tagName === "A" && !a.getAttribute("href")) a.setAttribute("href", ROOT + p.id + "/");
    });
  }

  // ---- ROBOTIS omx.xml 인덱스 (팔이 바닥에 고정된 기본 모델, MuJoCo 3.17.0으로 확인) ----
  const Q = { j1: 0, j2: 1, j3: 2, j4: 3, j5: 4, g1: 5, g2: 6 };   // qpos / dof
  const A = { j1: 0, j2: 1, j3: 2, j4: 3, j5: 4, g: 5 };           // actuator
  const B = { link0: 1, link1: 2, link2: 3, link3: 4, link4: 5, link5: 6, ee: 7, link6: 8, link7: 9 };  // body
  const GRAV = 9.81;

  const $ = (id) => document.getElementById(id);
  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const deg = (rad) => rad * 180 / Math.PI;
  const rad = (d) => d * Math.PI / 180;
  const smooth = (s) => { s = Math.min(Math.max(s, 0), 1); return (1 - Math.cos(Math.PI * s)) / 2; };   // 0→1 코사인

  // ---- 사이드바 틀: 모든 페이지가 OmxLab.shell(현재 id) 를 한 번 부른다 (첫 화면은 null) ----
  const LS = {   // 브라우저 저장: 막혀 있어도 기본값으로 동작
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 무시 */ } },
  };
  const SIDE_W = { def: 288, min: 220, max: 520 };
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // 설명 글자: q̇·q̈ 결합 문자는 글꼴에서 점이 밀리므로 CSS 로 점을 그리는 표기로 (lab.css .d1/.d2)
  const rich = (t) => esc(t).replace(/q\u0307/g, '<span class="d1">q</span>').replace(/q\u0308/g, '<span class="d2">q</span>');
  const unitOf = (key) => UNITS.find((u) => u.key === key);
  const isProblem = (p) => p && p.unit !== "tools";

  function shell(currentId) {
    const cur = currentId ? find(currentId) : null;
    const body = document.body;
    const app = document.createElement("div"); app.className = "app";
    const main = document.createElement("main"); main.className = "main";
    // 기존 내용(.wrap, footer 등)을 본문으로 옮김
    [...body.childNodes].filter((n) => !(n.tagName === "SCRIPT")).forEach((n) => main.appendChild(n));
    const top = document.createElement("div"); top.className = "topbar";
    top.innerHTML = `<button class="menu-btn" type="button" aria-controls="side" aria-expanded="false">☰ 문제 목록</button>` +
      (cur ? `<span class="crumb">${esc(unitOf(cur.unit).name)} / <b>${isProblem(cur) ? cur.n + " · " : ""}${esc(cur.title)}</b></span>` : "");
    main.prepend(top);
    const side = document.createElement("aside"); side.className = "side"; side.id = "side"; side.setAttribute("aria-label", "문제 목록");
    side.innerHTML = `
      <div class="brand-row"><a class="brand" href="${ROOT}"><img class="logo" src="${ROOT}common/logo.jpg" alt="랑프 두잇 로고" width="36" height="36">
        <span><b>피지컬AI 실험실</b><small>OMX-AI로 배우는 기구학·동역학</small></span></a>
        <button class="side-collapse" type="button" aria-label="목록 접기" title="목록 접기 ( [ 키 )">«</button></div>
      <div class="side-search"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="side-q" type="search" placeholder="문제·개념 찾기 (예: 관성, Kp)" aria-label="문제 찾기" autocomplete="off"></div>
      <div class="progress"><div class="row"><span>내 진행</span><span class="cnt"></span></div><div class="track"><span></span></div></div>
      <nav aria-label="단원별 문제"></nav>
      <div class="side-foot">
        <a class="maker" href="https://www.youtube.com/@langpeudoit" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9v6l5-3z" fill="#fff"/></svg>
          <span><small>제작</small><b>Langpeu</b></span><span class="yt">YouTube ↗</span></a>
        <span>비공식 학습 자료 · ROBOTIS와 관계없음</span>
      </div>`;
    const rs = document.createElement("div"); rs.className = "resizer"; rs.tabIndex = 0;
    rs.setAttribute("role", "separator"); rs.setAttribute("aria-orientation", "vertical"); rs.setAttribute("aria-label", "목록 폭 조절");
    rs.title = "끌어서 목록 폭 조절 · 두 번 클릭하면 원래대로";
    const scrim = document.createElement("div"); scrim.className = "scrim";
    app.append(side, rs, scrim, main);
    body.prepend(app);

    // 목록
    const nav = side.querySelector("nav"), q = side.querySelector("#side-q");
    let closed = new Set(LS.get("omx-lab-units", []));
    if (cur) closed.delete(cur.unit);   // 현재 문제 단원은 항상 펼친 채로 시작
    const progress = () => LS.get("omx-lab-progress", {});
    function drawList() {
      const f = q.value.trim().toLowerCase(), prog = progress();
      const html = UNITS.map((u) => {
        const list = PROBLEMS.concat(TOOLS).filter((p) => p.unit === u.key &&
          (!f || `${p.n ?? ""} ${p.title} ${p.concept || ""} ${p.desc || ""}`.toLowerCase().includes(f)));
        if (!list.length) return "";
        const isClosed = !f && closed.has(u.key);
        return `<div class="unit${isClosed ? " closed" : ""}" data-u="${u.key}"><button type="button" aria-expanded="${!isClosed}"><span>${esc(u.name)}<small class="usub">${esc(u.sub)}</small></span><span class="chev" aria-hidden="true">▾</span></button><ul>` +
          list.map((p) => {
            const on = cur && p.id === cur.id, st = prog[p.id] || "";
            const inner = `<span class="no">${isProblem(p) ? p.n : "⚙"}</span><span class="t">${esc(p.title)}</span><span class="st ${st}"${st ? ` aria-label="${st === "done" ? "완료" : "진행 중"}"` : ""}></span>`;
            return p.ready
              ? `<li><a class="item${on ? " on" : ""}" data-id="${p.id}" href="${ROOT}${p.id}/"${on ? ' aria-current="page"' : ""}>${inner}</a></li>`
              : `<li><div class="item soon" data-id="${p.id}">${inner}</div></li>`;
          }).join("") + "</ul></div>";
      }).join("");
      nav.innerHTML = html || `<p class="none">‘${esc(q.value.trim())}’와 맞는 문제가 없습니다.</p>`;
      const ready = PROBLEMS.filter((p) => p.ready), done = ready.filter((p) => prog[p.id] === "done").length;
      side.querySelector(".progress .cnt").textContent = `${done} / ${ready.length}`;
      side.querySelector(".progress .track span").style.width = (100 * done / ready.length) + "%";
    }
    drawList();
    q.addEventListener("input", drawList);
    // 목록 스크롤 위치: 다른 문제로 넘어가도 그대로 (탭 하나 안에서만 기억)
    try { const y = +sessionStorage.getItem("omx-lab-side-scroll"); if (y) side.scrollTop = y; } catch (e) { /* 무시 */ }
    side.addEventListener("scroll", () => { try { sessionStorage.setItem("omx-lab-side-scroll", String(Math.round(side.scrollTop))); } catch (e) { /* 무시 */ } }, { passive: true });
    nav.addEventListener("click", (e) => {
      const b = e.target.closest(".unit > button"); if (!b) return;
      const u = b.parentElement, key = u.dataset.u, now = !u.classList.contains("closed");
      u.classList.toggle("closed", now); b.setAttribute("aria-expanded", String(!now));
      if (now) closed.add(key); else closed.delete(key);
      LS.set("omx-lab-units", [...closed]);
    });

    // 서랍 (좁은 화면) / 접기 (넓은 화면)
    const menu = top.querySelector(".menu-btn");
    const narrow = () => matchMedia("(max-width: 820px)").matches;
    const drawer = (open) => { app.classList.toggle("open", open); body.classList.toggle("drawer", open); menu.setAttribute("aria-expanded", String(open)); };
    const collapse = (c) => { app.classList.toggle("collapsed", c); LS.set("omx-lab-side-closed", c); if (!c) side.querySelector(".side-collapse").focus(); else menu.focus(); };
    if (LS.get("omx-lab-side-closed", false)) app.classList.add("collapsed");
    menu.addEventListener("click", () => (narrow() ? drawer(!app.classList.contains("open")) : collapse(false)));
    side.querySelector(".side-collapse").addEventListener("click", () => (narrow() ? drawer(false) : collapse(true)));
    document.addEventListener("keydown", (e) => {
      const t = e.target;
      if (e.key === "[" && !narrow() && !e.ctrlKey && !e.metaKey && !e.altKey && !(t && t.closest && t.closest("input, textarea, select, [contenteditable]"))) {
        e.preventDefault(); collapse(!app.classList.contains("collapsed"));
      }
    });
    scrim.addEventListener("click", () => drawer(false));
    nav.addEventListener("click", (e) => { if (e.target.closest("a.item")) drawer(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && app.classList.contains("open")) drawer(false); });

    // 폭 조절
    const root = document.documentElement;
    const setW = (w) => { w = Math.round(Math.min(SIDE_W.max, Math.max(SIDE_W.min, +w || SIDE_W.def))); root.style.setProperty("--side-w", w + "px"); rs.setAttribute("aria-valuenow", w); return w; };
    setW(LS.get("omx-lab-side-w", SIDE_W.def));
    rs.setAttribute("aria-valuemin", SIDE_W.min); rs.setAttribute("aria-valuemax", SIDE_W.max);
    rs.addEventListener("pointerdown", (e) => {
      rs.setPointerCapture(e.pointerId); rs.classList.add("drag"); body.classList.add("resizing");
      const move = (ev) => setW(ev.clientX);
      const up = (ev) => { LS.set("omx-lab-side-w", setW(ev.clientX)); rs.classList.remove("drag"); body.classList.remove("resizing"); rs.removeEventListener("pointermove", move); rs.removeEventListener("pointerup", up); };
      rs.addEventListener("pointermove", move); rs.addEventListener("pointerup", up);
    });
    rs.addEventListener("dblclick", () => LS.set("omx-lab-side-w", setW(SIDE_W.def)));
    rs.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault(); LS.set("omx-lab-side-w", setW(parseInt(getComputedStyle(root).getPropertyValue("--side-w"), 10) + (e.key === "ArrowRight" ? 16 : -16)));
    });

    // 문제 페이지: 제목 번호, 단원 칩, 단계 진행줄, 이전·다음, 진행 기록
    const h1 = main.querySelector("header.top h1");
    if (cur && h1) {
      if (isProblem(cur) && cur.n > 0) h1.insertAdjacentHTML("afterbegin", `<span class="n">${cur.n}</span>`);
      h1.insertAdjacentHTML("beforebegin", `<div class="eyebrow"><span class="chip c">${esc(unitOf(cur.unit).name)}</span><span>${rich(cur.concept || cur.desc || "")}</span></div>`);
    }
    const cards = [...main.querySelectorAll('article.card[id^="c"]')];
    if (cur && cards.length > 1) {
      const st = document.createElement("nav"); st.className = "stepper"; st.setAttribute("aria-label", "단계");
      (main.querySelector("header.top") || main).appendChild(st);
      const drawSteps = () => {
        const firstOpen = cards.findIndex((c) => !c.classList.contains("done"));
        st.innerHTML = cards.map((c, k) => {
          const h = c.querySelector("h2"), name = (h ? h.textContent.replace(/^\s*\d+/, "") : "").split(":")[0].trim();
          const done = c.classList.contains("done");
          return `<a href="#${c.id}" class="${done ? "done" : k === firstOpen ? "cur" : ""}"><i>${done ? "✓" : k + 1}</i>${esc(name)}</a>`;
        }).join("");
      };
      drawSteps();
      const mark = () => {
        if (!isProblem(cur)) return;
        const n = cards.filter((c) => c.classList.contains("done")).length;
        const prog = progress(), want = n === cards.length ? "done" : n > 0 ? "part" : prog[cur.id];
        if (want && prog[cur.id] !== "done" && prog[cur.id] !== want) { prog[cur.id] = want; LS.set("omx-lab-progress", prog); drawList(); }
      };
      new MutationObserver(() => { drawSteps(); mark(); }).observe(main, { subtree: true, attributes: true, attributeFilter: ["class"] });
      mark();
    } else if (cur && isProblem(cur)) {   // 단계 카드가 없는 읽기 페이지(기초 개념)는 열면 완료
      const prog = progress(); if (prog[cur.id] !== "done") { prog[cur.id] = "done"; LS.set("omx-lab-progress", prog); drawList(); }
    }
    if (cur && isProblem(cur)) {
      const ready = PROBLEMS.filter((p) => p.ready), k = ready.findIndex((p) => p.id === cur.id);
      const prev = ready[k - 1], next = ready[k + 1];
      const lab = (p) => `${p.n} · ${esc(p.title)}`;
      const pg = document.createElement("nav"); pg.className = "pager"; pg.setAttribute("aria-label", "이전·다음 문제");
      pg.innerHTML = (prev ? `<a class="prev" href="${ROOT}${prev.id}/"><small>← 이전</small><b>${lab(prev)}</b></a>` : "") +
        (next ? `<a class="next" href="${ROOT}${next.id}/"><small>다음 →</small><b>${lab(next)}</b></a>` : "");
      const wrap = main.querySelector(".wrap"); (wrap || main).appendChild(pg);
    }
    refLinks(main);
    body.classList.add("shelled");
  }

  // ---- 첫 화면: 단원별 카드 ----
  function renderHome(el) {
    const prog = LS.get("omx-lab-progress", {});
    el.innerHTML = UNITS.map((u) => {
      const list = PROBLEMS.concat(TOOLS).filter((p) => p.unit === u.key);
      return `<section class="hunit"><h2>${esc(u.name)} <small>${esc(u.sub)}</small></h2><ul class="plist${u.key === "tools" ? " tools" : ""}">` +
        list.map((p) => {
          const no = isProblem(p) ? (p.n === 0 ? "0 · 처음이면 여기부터" : `상황 ${p.n}`) : "도구";
          const st = prog[p.id] ? `<span class="hst ${prog[p.id]}">${prog[p.id] === "done" ? "완료" : "진행 중"}</span>` : "";
          const inner = `<span class="no">${no}${st}</span><span class="t">${esc(p.title)}</span><span class="c">${rich(p.concept || p.desc || "")}</span>`;
          return p.ready ? `<li><a href="${ROOT}${p.id}/">${inner}</a></li>` : `<li><div class="soon">${inner.replace('</span><span class="t">', ' · 준비 중</span><span class="t">')}</div></li>`;
        }).join("") + "</ul></section>";
    }).join("");
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

  // ---- 예측 확인: 상대 오차 tol 안이면 맞음 ----
  // el: 피드백 상자, v: 입력값, truth: 정답, tol: 0.05 = 5%
  function checkPrediction(el, v, truth, tol, unit, okMsg, hint) {
    el.hidden = false;
    if (!isFinite(v)) { el.className = "fb no"; el.textContent = `숫자를 ${unit} 단위로 입력하세요.`; return false; }
    const err = Math.abs(v - truth) / Math.abs(truth);
    if (err <= tol) { el.className = "fb ok"; el.textContent = `맞습니다 (정답 ${fmt(truth)} ${unit}, 오차 ${(err * 100).toFixed(1)}%). ${okMsg || ""}`; return true; }
    el.className = "fb no"; el.textContent = `차이가 ${(err * 100).toFixed(0)}% 납니다. ${hint || ""}`; return false;
  }
  const fmt = (v) => (Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : Math.abs(v) >= 1 ? v.toFixed(2) : v.toFixed(3));

  // ---- 실행 기록 표 ----
  // cols: [{ h: 제목, f: (row) => html, n: 숫자열? }]
  function logTable(tbody, rows, cols, empty) {
    tbody.innerHTML = rows.length ? rows.slice().reverse().map((r) =>
      `<tr>${cols.map((c) => `<td${c.n ? ' class="n"' : ""}>${c.f(r)}</td>`).join("")}</tr>`).join("")
      : `<tr><td colspan="${cols.length}" class="note">${empty || "아직 실험 기록이 없습니다."}</td></tr>`;
  }
  const pill = (ok, yes, no) => `<span class="pill ${ok ? "hold" : "fall"}">${ok ? yes : no}</span>`;

  // ---- 시간 그래프 (canvas) ----
  // series: [{ name, color: css 변수 이름 또는 색, dash? }], yRange: [min,max] 또는 null(자동)
  function Plot(canvas, o) {
    const ctx = canvas.getContext("2d");
    const pts = [];
    let T = o.T || 4;
    function color(c) { return c.startsWith("--") ? (cssVar(c) || "#888") : c; }
    function draw() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = canvas.clientWidth, H = canvas.clientHeight;
      if (!W || !H) return;
      if (canvas.width !== Math.round(W * dpr)) { canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const L = 40, R = 8, Tp = 8, Bm = 20, pw = W - L - R, ph = H - Tp - Bm;
      let lo = o.yRange ? o.yRange[0] : Infinity, hi = o.yRange ? o.yRange[1] : -Infinity;
      if (!o.yRange) for (const p of pts) for (const v of p.v) if (isFinite(v)) { lo = Math.min(lo, v); hi = Math.max(hi, v); }
      if (!isFinite(lo)) { lo = 0; hi = 1; }
      if (hi - lo < 1e-9) { hi += 1; lo -= 1; }
      const pad = (hi - lo) * 0.08; if (!o.yRange) { lo -= pad; hi += pad; }
      const X = (t) => L + (t / T) * pw, Y = (v) => Tp + (1 - (v - lo) / (hi - lo)) * ph;
      ctx.strokeStyle = color("--line"); ctx.lineWidth = 1; ctx.fillStyle = color("--muted");
      ctx.font = `11px ${cssVar("--font-mono") || "monospace"}`;
      for (let i = 0; i <= 4; i++) {
        const v = lo + (hi - lo) * i / 4, y = Y(v);
        ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(W - R, y); ctx.stroke();
        ctx.textAlign = "right"; ctx.textBaseline = "middle"; ctx.fillText(v.toFixed(o.digits ?? 1), L - 4, y);
      }
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      for (let s = 0; s <= T + 1e-9; s += T <= 2 ? 0.5 : 1) ctx.fillText(`${s}s`, X(s), H - Bm + 4);
      o.series.forEach((s, k) => {
        ctx.strokeStyle = color(s.color); ctx.lineWidth = s.width || 2; ctx.setLineDash(s.dash ? [5, 4] : []);
        ctx.beginPath(); let first = true;
        for (const p of pts) { const v = p.v[k]; if (!isFinite(v)) { first = true; continue; } const x = X(Math.min(p.t, T)), y = Y(Math.max(lo, Math.min(hi, v))); if (first) { ctx.moveTo(x, y); first = false; } else ctx.lineTo(x, y); }
        ctx.stroke();
      });
      ctx.setLineDash([]);
    }
    return {
      reset(newT) { pts.length = 0; if (newT) T = newT; draw(); },
      push(t, v) { if (!pts.length || t - pts[pts.length - 1].t >= T / 400) pts.push({ t, v }); },
      draw,
      legend(el) { el.innerHTML = o.series.map((s) => `<span><i style="background:${s.color.startsWith("--") ? `var(${s.color})` : s.color}"></i>${s.name}</span>`).join(""); },
    };
  }

  // ---- 실험실 시작 ----
  // opts: { transform(xml) → xml, camera: { pos:[x,y,z], target:[x,y,z] }, viewport, overlay, clock, runstate }
  // 돌려주는 lab 객체로 시뮬레이션을 다룹니다. 아래 lab.* 설명 참고.
  function start(opts) {
    opts = opts || {};
    const vp = $(opts.viewport || "viewport");
    const overlay = $(opts.overlay || "overlay");
    const clock = $(opts.clock || "simclock");
    const runstateEl = $(opts.runstate || "runstate");

    let mj, model, data, defaults;
    let renderer, scene, camera, controls;
    const geomMeshes = [];
    const frameFns = [], busyFns = [];
    const sim = { mode: "idle", t: 0, job: null, posing: false, acc: 0, lastTime: 0 };

    // -- 3D --
    function initThree() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      vp.prepend(renderer.domElement);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(38, 4 / 3, 0.01, 20);
      camera.up.set(0, 0, 1);
      const cam = opts.camera || {};
      camera.position.set(...(cam.pos || [0.22, -0.62, 0.30]));
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.target.set(...(cam.target || [0.16, 0, 0.09]));
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
      let xmlText = await xr.text();
      const files = [...new Set([...xmlText.matchAll(/file="([^"]+\.stl)"/g)].map((m) => m[1]))];
      await Promise.all(files.map(async (f) => {
        const r = await fetch(new URL("model/meshes/" + f, ROOT));
        if (!r.ok) throw new Error(`메시 파일 ${f}를 받지 못했습니다 (${r.status})`);
        vfs.addBuffer(f, new Uint8Array(await r.arrayBuffer()));
      }));
      if (opts.transform) xmlText = opts.transform(xmlText);   // 문제별 변형 (물체 추가, 바닥 고정 풀기 등)
      model = mj.MjModel.from_xml_string(xmlText, vfs);
      data = new mj.MjData(model);
      // 손끝 물체 자리: end_effector_link 원점의 점질량 (기본 0 kg). lab.setPayload 로 바꿈
      for (let k = 0; k < 3; k++) { model.body_ipos[B.ee * 3 + k] = 0; model.body_inertia[B.ee * 3 + k] = 1e-7; }
      model.body_mass[B.ee] = 0;
      // 문제마다 바꿀 수 있는 모델 값의 원래 값 (실행·초기화 때마다 되돌림)
      const keep = ["actuator_forcerange", "actuator_gainprm", "actuator_biasprm", "dof_frictionloss", "dof_damping",
        "dof_armature", "body_mass", "geom_size", "geom_friction", "geom_solref"];
      defaults = { arrays: {}, opt: { timestep: model.opt.timestep, integrator: model.opt.integrator, gravity: Array.from(model.opt.gravity) } };
      for (const k of keep) defaults.arrays[k] = Float64Array.from(model[k]);
    }
    function restoreDefaults() {
      for (const [k, v] of Object.entries(defaults.arrays)) model[k].set(v);
      model.opt.timestep = defaults.opt.timestep;
      model.opt.integrator = defaults.opt.integrator;
      for (let k = 0; k < 3; k++) model.opt.gravity[k] = defaults.opt.gravity[k];
    }

    // 로봇 메시 + 문제에서 추가한 상자/공 같은 단순 형상을 3D로
    function buildMeshes() {
      const vert = model.mesh_vert, face = model.mesh_face;
      const vadr = model.mesh_vertadr, vnum = model.mesh_vertnum, fadr = model.mesh_faceadr, fnum = model.mesh_facenum;
      const gtype = model.geom_type, gdata = model.geom_dataid, ggroup = model.geom_group, gbody = model.geom_bodyid;
      const cache = {};
      for (let g = 0; g < model.ngeom; g++) {
        let geo, color;
        const rgba = model.geom_rgba.slice(g * 4, g * 4 + 4);
        if (gtype[g] === 7) {                                    // 7 = mjGEOM_MESH
          if (ggroup[g] !== 2) continue;                         // group 2 = 보이는 메시 (3은 충돌용)
          const m = gdata[g];
          if (!cache[m]) {
            const pos = new Float32Array(vnum[m] * 3);
            pos.set(vert.subarray(vadr[m] * 3, (vadr[m] + vnum[m]) * 3));
            const idx = new Uint32Array(fnum[m] * 3);
            idx.set(face.subarray(fadr[m] * 3, (fadr[m] + fnum[m]) * 3));
            cache[m] = new THREE.BufferGeometry();
            cache[m].setAttribute("position", new THREE.BufferAttribute(pos, 3));
            cache[m].setIndex(new THREE.BufferAttribute(idx, 1));
            cache[m].computeVertexNormals();
          }
          geo = cache[m];
          color = gbody[g] <= 2 ? 0x8b949e : 0xf2f4f6;
        } else {
          // 문제에서 추가한 형상만 (이름이 있는 geom). 바닥(plane)과 손끝 표시 상자는 그리지 않음
          if (gtype[g] === 0 || gbody[g] === B.ee || !geomName(g)) continue;   // 손끝 표시용 빨간 상자도 생략
          const s = model.geom_size.slice(g * 3, g * 3 + 3);
          if (gtype[g] === 6) geo = new THREE.BoxGeometry(2 * s[0], 2 * s[1], 2 * s[2]);        // box
          else if (gtype[g] === 2) geo = new THREE.SphereGeometry(s[0], 24, 16);                 // sphere
          else if (gtype[g] === 5) { geo = new THREE.CylinderGeometry(s[0], s[0], 2 * s[1], 24); geo.rotateX(Math.PI / 2); }
          else continue;
          color = new THREE.Color(rgba[0], rgba[1], rgba[2]);
        }
        const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.05, flatShading: gtype[g] === 7 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.matrixAutoUpdate = false;
        scene.add(mesh);
        geomMeshes.push({ g, mesh, body: gbody[g], base: mat.color.getHex(), prim: gtype[g] !== 7, size: Array.from(model.geom_size.slice(g * 3, g * 3 + 3)) });
      }
    }
    function geomName(g) { try { return mj.mj_id2name(model, mj.mjtObj.mjOBJ_GEOM.value, g) || ""; } catch (e) { return ""; } }
    function syncMeshes() {
      const xp = data.geom_xpos, xm = data.geom_xmat;
      for (const gm of geomMeshes) {
        const p = gm.g * 3, r = gm.g * 9;
        gm.mesh.matrix.set(xm[r], xm[r + 1], xm[r + 2], xp[p], xm[r + 3], xm[r + 4], xm[r + 5], xp[p + 1],
          xm[r + 6], xm[r + 7], xm[r + 8], xp[p + 2], 0, 0, 0, 1);
        if (gm.prim) {   // 실행 중 크기를 바꾼 상자(예: 판 두께)는 비율로 반영
          const s = model.geom_size;
          const k = [s[p] / gm.size[0] || 1, s[p + 1] / gm.size[1] || 1, s[p + 2] / gm.size[2] || 1];
          if (k.some((v) => Math.abs(v - 1) > 1e-6) && model.geom_type[gm.g] === 6) gm.mesh.matrix.multiply(new THREE.Matrix4().makeScale(k[0], k[1], k[2]));
        }
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
    // ids: 강조할 body 번호 배열 (빈 배열/null 이면 해제), pivot: 수평거리를 잴 관절이 붙은 body (없으면 선 생략)
    // tint=false 이면 색은 그대로 두고 무게중심 점만 표시
    function showLever(ids, pivot, tint = true) {
      ids = ids && ids.length ? ids : null;
      lever = ids ? { ids, pivot } : null;
      const hl = new THREE.Color(cssVar("--gravity") || "#c2410c");
      for (const gm of geomMeshes) {
        if (gm.prim) continue;
        const on = !!ids && tint && ids.includes(gm.body);
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
      leverGfx.dot.position.set(c[0], c[1], c[2]);
      const show = lever.pivot != null;
      leverGfx.axis.visible = leverGfx.h.visible = leverGfx.v.visible = show;
      if (!show) return;
      const p = lever.pivot * 3, j = [data.xpos[p], data.xpos[p + 1], data.xpos[p + 2]];
      leverGfx.axis.position.set(j[0], j[1], j[2]);
      const hp = leverGfx.h.geometry.attributes.position;   // 관절축 높이에서 수평으로 x만큼
      hp.setXYZ(0, j[0], c[1], j[2]); hp.setXYZ(1, c[0], c[1], j[2]); hp.needsUpdate = true;
      const vp2 = leverGfx.v.geometry.attributes.position;  // 그 끝에서 무게중심까지 수직 점선
      vp2.setXYZ(0, c[0], c[1], j[2]); vp2.setXYZ(1, c[0], c[1], c[2]); vp2.needsUpdate = true;
      leverGfx.v.computeLineDistances();
    }

    // -- 관절 이름표: 각 관절 위치(xanchor)를 화면 좌표로 옮겨 표시 --
    const JOINT_LABELS = [
      ["joint1", "joint1 · 바닥 회전"], ["joint2", "joint2 · 어깨"], ["joint3", "joint3 · 팔꿈치"],
      ["joint4", "joint4 · 손목 꺾기"], ["joint5", "joint5 · 손목 돌리기"],
    ];
    let jlabels = [], jshow = true;
    function initJointLabels() {
      try { jshow = localStorage.getItem("omx-lab-jlabels") !== "0"; } catch (e) { /* 기본: 켬 */ }
      jlabels = JOINT_LABELS.map(([name, text]) => {
        const el = document.createElement("span"); el.className = "jlabel" + (name === "joint5" ? " below" : ""); el.textContent = text; el.setAttribute("aria-hidden", "true");
        vp.appendChild(el); return { j: lab.id("joint", name), el };
      }).filter((x) => x.j >= 0);
      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "jtoggle ghost";
      const upd = () => { btn.textContent = jshow ? "관절 이름 숨기기" : "관절 이름 보기"; btn.setAttribute("aria-pressed", jshow); jlabels.forEach((l) => { l.el.hidden = !jshow; }); };
      btn.addEventListener("click", () => { jshow = !jshow; try { localStorage.setItem("omx-lab-jlabels", jshow ? "1" : "0"); } catch (e) { /* 무시 */ } upd(); });
      vp.appendChild(btn); upd();
    }
    const tmpV = () => new THREE.Vector3();
    function syncJointLabels() {
      if (!jshow || !jlabels.length) return;
      const w = vp.clientWidth, h = vp.clientHeight, v = tmpV();
      for (const l of jlabels) {
        v.set(data.xanchor[l.j * 3], data.xanchor[l.j * 3 + 1], data.xanchor[l.j * 3 + 2]).project(camera);
        const off = v.z > 1 || v.x < -1.1 || v.x > 1.1 || v.y < -1.1 || v.y > 1.1;
        l.el.style.visibility = off ? "hidden" : "visible";
        l.el.style.left = `${(v.x + 1) / 2 * w}px`; l.el.style.top = `${(1 - v.y) / 2 * h}px`;
      }
    }

    // -- 상태 표시 --
    function setRunState(text, cls) { runstateEl.textContent = text; runstateEl.className = "runstate " + (cls || ""); }
    function setBusy(b) { busyFns.forEach((f) => f(b)); }

    // -- 시뮬레이션 진행: 화면 시간만큼 고정 간격(model.opt.timestep)으로 계산 --
    function finish(r) {
      sim.mode = "frozen";
      setRunState(r.state || "끝", r.cls || "");
      setBusy(false);
      const job = sim.job; job && job.done && job.done(r);
    }
    function stepSim(dtWall) {
      if (sim.mode !== "run") return;
      const job = sim.job, h = model.opt.timestep;
      sim.acc += dtWall * (job.speed || 1);
      let n = 0;
      while (sim.acc >= h && sim.t < job.duration - 1e-9 && n < 600) {
        job.control && job.control(sim.t, data, model);
        mj.mj_step(model, data);
        sim.t += h; sim.acc -= h; n++;
        job.sample && job.sample(sim.t, data, model);
        // 발산 감지: 값이 무한대/NaN 이 되거나, MuJoCo가 불안정을 감지해 상태를 처음으로 되돌린 경우(time 감소)
        let bad = data.time < sim.lastTime - 1e-9;
        for (let i = 0; i < model.nv && !bad; i++) if (!isFinite(data.qvel[i]) || Math.abs(data.qvel[i]) > 1e4) bad = true;
        sim.lastTime = data.time;
        if (bad) { finish({ diverged: true, tDiv: sim.t, state: "발산", cls: "fall" }); return; }
      }
      if (sim.t >= job.duration - 1e-9) {
        sim.acc = 0;
        finish(job.judge ? job.judge(data, model) : {});
      }
    }
    let last = performance.now();
    function loop(now) {
      const dt = Math.min((now - last) / 1000, 0.05); last = now;
      if (model) {
        stepSim(dt);
        syncMeshes(); syncLever(); syncJointLabels();
        frameFns.forEach((f) => f(lab));
        clock.textContent = `t = ${sim.t.toFixed(2)} s`;
      }
      controls && controls.update();
      renderer && renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }

    const ID_TYPES = { body: "mjOBJ_BODY", joint: "mjOBJ_JOINT", geom: "mjOBJ_GEOM", actuator: "mjOBJ_ACTUATOR" };
    const lab = {
      ROOT, Q, A, B, GRAV,
      get mj() { return mj; }, get model() { return model; }, get data() { return data; },
      get mode() { return sim.mode; }, get t() { return sim.t; }, get posing() { return sim.posing; },
      /** 이름 → 번호. type: body | joint | geom | actuator */
      id(type, name) { return mj.mj_name2id(model, mj.mjtObj[ID_TYPES[type]].value, name); },
      /** 관절 이름 → qpos 위치 / qvel(dof) 위치 (바닥 고정을 푼 모델에서도 맞게) */
      qadr(name) { return model.jnt_qposadr[lab.id("joint", name)]; },
      dadr(name) { return model.jnt_dofadr[lab.id("joint", name)]; },
      /** 모든 관절 0°(팔 세움)로 되돌리고 모델 값을 원래대로 */
      resetPose(q) {
        restoreDefaults();
        mj.mj_resetData(model, data);
        if (q) for (const [i, v] of Object.entries(q)) data.qpos[+i] = v;
        mj.mj_forward(model, data);
        sim.mode = "idle"; sim.t = 0; sim.job = null; sim.posing = false; sim.lastTime = 0;
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
      /** 실행. job: { setup(model, data), control(t, data, model), sample(t, data, model), duration, speed,
       *              judge(data, model) → {state, cls, ...}, done(result) }
       *  setup 은 모델 값을 바꾼 뒤 data 초기 자세를 정할 수 있음 (그 뒤 mj_forward) */
      run(job) {
        restoreDefaults();
        mj.mj_resetData(model, data);
        job.setup && job.setup(model, data);
        mj.mj_forward(model, data);
        sim.mode = "run"; sim.t = 0; sim.job = job; sim.posing = false; sim.acc = 0; sim.lastTime = data.time;
        setRunState("실행 중", "run");
        setBusy(true);
      },
      /** 실행 중단 */
      stop() { if (sim.mode === "run") finish({ state: "중단", cls: "" }); },
      /** 손끝 물체 질량 [kg] (실행 setup 안에서 부르기) */
      setPayload(kg) { model.body_mass[B.ee] = kg; },
      /** 액추에이터 a 를 토크 모터로 바꿈: 힘 = ctrl (한계는 forcerange 그대로). setup 안에서 부르기 */
      motor(a) { model.actuator_gainprm[a * 10] = 1; model.actuator_biasprm[a * 10 + 1] = 0; model.actuator_biasprm[a * 10 + 2] = 0; },
      /** 질량 행렬 M(q) 전체 (nv×nv, 행 우선) */
      fullM() {
        const nv = model.nv, b = new mj.DoubleBuffer(nv * nv);
        mj.mj_fullM(model, data, b); const M = Float64Array.from(b.GetView()); b.delete(); return M;
      },
      /** 접촉 i 의 힘 [법선, 접선1, 접선2] (접촉 좌표계) */
      contactForce(i) {
        const b = new mj.DoubleBuffer(6); mj.mj_contactForce(model, data, i, b); const f = Array.from(b.GetView()).slice(0, 3); b.delete(); return f;
      },
      /** 매 프레임 호출할 함수 등록 */
      onFrame(fn) { frameFns.push(fn); },
      /** 실행 시작/끝 알림: fn(true=실행 중) */
      onBusy(fn) { busyFns.push(fn); },
      showLever, setRunState,
      /** 숫자 표시 줄. items: [{ k: 이름, v: (lab) => html }] */
      readouts(el, items) {
        el.insertAdjacentHTML("beforeend", `<div class="readouts">${items.map((it, i) =>
          `<div class="ro"><span class="k">${it.k}</span><span class="v" data-i="${i}">—</span></div>`).join("")}</div>`);
        const vs = [...el.querySelectorAll(".readouts:last-of-type .v")];
        lab.onFrame(() => items.forEach((it, i) => { vs[i].innerHTML = it.v(lab); }));
      },
      /** 관절 토크 계기판. el 안에 그림. o: { dof, act, targetDeg, max, limit: () => Nm, name } */
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
          q.innerHTML = `${deg(data.qpos[o.qpos ?? o.dof]).toFixed(1)}<small>°${o.targetDeg != null ? ` / 목표 ${o.targetDeg.toFixed(1)}°` : ""}</small>`;
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
      buildMeshes();
      initJointLabels();
      lab.resetPose(opts.home);
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

  window.OmxLab = {
    ROOT, UNITS, PROBLEMS, TOOLS, find, label, refLinks, Q, A, B, GRAV, $, deg, rad, smooth, fmt, shell, renderHome, store,
    bracket, narrow, boundChip, checkPrediction, logTable, pill, Plot, start,
  };
})();
