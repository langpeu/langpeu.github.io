/* 피지컬AI 실험실 · 떠 있는 계산기 (window.OmxCalc)
 * 모든 페이지 오른쪽 아래 버튼 또는 \ 키. 적은 식과 결과가 테이프로 차례로 남고, 식을 누르면 다시 고친다.
 * 계산은 eval 없이 직접 해석: + − × ÷ ^ ² % ( ) π g(9.81) ans, sqrt/√ sin cos tan asin acos atan ln log abs, 곱셈 생략(2π, 2(3))
 * 기록 저장 키 omx-lab-calc = {hist:[{ex, rs}], deg, ans}
 */
(function () {
  "use strict";
  const KEY = "omx-lab-calc";

  function evaluate(src, opts) {
    const deg = !opts || opts.deg !== false, ans = (opts && opts.ans) || 0;
    const s = String(src).replace(/×|\*/g, "*").replace(/÷|\//g, "/").replace(/−|–/g, "-").replace(/√/g, "sqrt")
      .replace(/,/g, "").replace(/\s+/g, "");
    let i = 0;
    const eat = (c) => (s[i] === c ? (i++, true) : false);
    const toRad = (v) => (deg ? v * Math.PI / 180 : v), fromRad = (v) => (deg ? v * 180 / Math.PI : v);
    const FN = {
      sqrt: Math.sqrt, abs: Math.abs, ln: Math.log, log: Math.log10,
      sin: (v) => Math.sin(toRad(v)), cos: (v) => Math.cos(toRad(v)), tan: (v) => Math.tan(toRad(v)),
      asin: (v) => fromRad(Math.asin(v)), acos: (v) => fromRad(Math.acos(v)), atan: (v) => fromRad(Math.atan(v)),
    };
    const startsPrimary = () => /[0-9.(πa-z]/i.test(s[i] || "");
    function expr() { let v = term(); for (;;) { if (eat("+")) v += term(); else if (eat("-")) v -= term(); else return v; } }
    function term() { let v = unary(); for (;;) { if (eat("*")) v *= unary(); else if (eat("/")) v /= unary(); else if (startsPrimary()) v *= power(); else return v; } }
    function unary() { if (eat("-")) return -unary(); if (eat("+")) return unary(); return power(); }
    function power() { const v = post(); return eat("^") ? Math.pow(v, unary()) : v; }
    function post() { let v = primary(); for (;;) { if (eat("²")) v *= v; else if (eat("%")) v /= 100; else return v; } }
    function primary() {
      if (eat("(")) { const v = expr(); if (!eat(")")) throw new Error("괄호 ) 가 빠졌습니다"); return v; }
      if (eat("π")) return Math.PI;
      const m = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(s.slice(i));
      if (m) { i += m[0].length; return parseFloat(m[0]); }
      const w = /^[a-z]+/i.exec(s.slice(i));
      if (w) {
        const name = w[0].toLowerCase(); i += w[0].length;
        if (name === "pi") return Math.PI;
        if (name === "g") return 9.81;
        if (name === "ans") return ans;
        if (FN[name]) return FN[name](primary());
        throw new Error(`‘${w[0]}’는 모르는 이름입니다`);
      }
      throw new Error(s[i] ? `‘${s[i]}’ 자리를 읽을 수 없습니다` : "식이 끝나지 않았습니다");
    }
    if (!s) throw new Error("식을 입력하세요");
    const v = expr();
    if (i < s.length) throw new Error(s[i] === ")" ? "괄호 ( 가 빠졌습니다" : `‘${s[i]}’ 자리를 읽을 수 없습니다`);
    if (!isFinite(v)) throw new Error("값이 무한대입니다 (0으로 나눔?)");
    return v;
  }
  const fmt = (v) => { const a = Math.abs(v); return a !== 0 && (a >= 1e9 || a < 1e-6) ? v.toExponential(6) : String(+v.toPrecision(10)); };
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let api = { evaluate, open() {}, close() {} };
  window.OmxCalc = api;

  function build() {
    let st = { hist: [], deg: true, ans: 0 };
    try { const v = JSON.parse(localStorage.getItem(KEY) || "null"); if (v) st = Object.assign(st, v); } catch (e) { /* 기본값 */ }
    const save = () => { try { st.hist = st.hist.slice(-50); localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* 무시 */ } };

    const fab = document.createElement("button");
    fab.className = "calc-fab"; fab.type = "button"; fab.setAttribute("aria-controls", "calc"); fab.setAttribute("aria-expanded", "false");
    fab.title = "계산기 (단축키 \\)";
    fab.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="2.5" width="16" height="19" rx="3"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/></svg>계산기 <kbd>\\</kbd>`;
    const box = document.createElement("section");
    box.className = "calc"; box.id = "calc"; box.hidden = true; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "계산기");
    const K = (k, cls, label, title) => `<button type="button" data-k="${k}"${cls ? ` class="${cls}"` : ""}${title ? ` title="${title}"` : ""}>${label || k}</button>`;
    box.innerHTML = `
      <div class="calc-head"><b>계산기</b>
        <button type="button" class="mode" title="삼각함수 각도 단위"></button>
        <button type="button" class="clr">기록 지우기</button>
        <button type="button" class="x" aria-label="닫기">✕</button></div>
      <ul class="tape" aria-label="계산 기록"></ul>
      <div class="calc-in"><input id="calc-x" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="예: 0.0232÷9.81÷0.401×1000" aria-label="계산식"><span class="live"></span></div>
      <div class="keys">
        ${K("C", "fn")}${K("(")}${K(")")}${K("⌫", "fn")}${K("÷")}
        ${K("sin(", "fn", "sin")}${K("7", "num")}${K("8", "num")}${K("9", "num")}${K("×")}
        ${K("cos(", "fn", "cos")}${K("4", "num")}${K("5", "num")}${K("6", "num")}${K("−")}
        ${K("√(", "fn", "√")}${K("1", "num")}${K("2", "num")}${K("3", "num")}${K("+")}
        ${K("²", "fn", "x²")}${K("0", "num")}${K(".", "num")}${K("π", "fn")}${K("=", "eq")}
        ${K("g", "fn", "g", "중력가속도 9.81")}${K("ans", "fn", "ans", "직전 결과")}${K("^", "fn", "xʸ")}${K("tan(", "fn", "tan")}
      </div>
      <div class="calc-foot"><span class="sp">g = 9.81 · 키보드로 입력, Enter = 계산</span>
        <button type="button" class="put" title="마지막으로 누른 입력칸에 결과 넣기">답 넣기 ↵</button></div>`;
    document.body.append(fab, box);
    const $q = (sel) => box.querySelector(sel);
    const x = $q("#calc-x"), tape = $q(".tape"), live = $q(".live");
    let lastInput = null;

    function draw() {
      tape.innerHTML = st.hist.length
        ? st.hist.map((h, k) => `<li><span class="ex" data-i="${k}" title="식 다시 쓰기">${esc(h.ex)}</span><span class="rs" data-i="${k}" title="결과를 식에 넣기">= ${esc(h.rs)}</span></li>`).join("")
        : `<li class="empty">계산한 식이 여기 차례로 남습니다. 식을 누르면 다시 고칠 수 있습니다.</li>`;
      tape.scrollTop = tape.scrollHeight;
      $q(".mode").textContent = st.deg ? "DEG" : "RAD";
    }
    const err = (m) => { live.innerHTML = `<span class="err">${esc(m)}</span>`; };
    function preview() { try { live.textContent = x.value.trim() ? "= " + fmt(evaluate(x.value, st)) : ""; } catch (e) { live.textContent = ""; } }
    function run() {
      const ex = x.value.trim(); if (!ex) return;
      try { const v = evaluate(ex, st); st.ans = v; st.hist.push({ ex, rs: fmt(v) }); x.value = ""; live.textContent = ""; save(); draw(); }
      catch (e) { err(e.message); }
    }
    function insert(t) {
      const a = x.selectionStart ?? x.value.length, b = x.selectionEnd ?? x.value.length;
      x.value = x.value.slice(0, a) + t + x.value.slice(b); x.focus(); x.setSelectionRange(a + t.length, a + t.length); preview();
    }
    $q(".keys").addEventListener("click", (e) => {
      const k = e.target.closest("button")?.dataset.k; if (!k) return;
      if (k === "=") run();
      else if (k === "C") { x.value = ""; preview(); x.focus(); }
      else if (k === "⌫") { const a = x.selectionStart ?? x.value.length; if (a > 0) { x.value = x.value.slice(0, a - 1) + x.value.slice(a); x.setSelectionRange(a - 1, a - 1); } x.focus(); preview(); }
      else insert(k);
    });
    x.addEventListener("input", preview);
    x.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); run(); } else if (e.key === "Escape") toggle(false); });
    tape.addEventListener("click", (e) => {
      const t = e.target.closest("[data-i]"); if (!t) return; const h = st.hist[+t.dataset.i];
      if (t.classList.contains("ex")) { x.value = h.ex; x.focus(); preview(); } else insert(h.rs);
    });
    $q(".mode").addEventListener("click", () => { st.deg = !st.deg; save(); draw(); preview(); });
    $q(".clr").addEventListener("click", () => { st.hist = []; save(); draw(); });
    document.addEventListener("focusin", (e) => { if (e.target.matches && e.target.matches('input[type="number"]') && !box.contains(e.target)) lastInput = e.target; });
    $q(".put").addEventListener("click", () => {
      const last = st.hist[st.hist.length - 1];
      if (!last) return err("먼저 계산하세요");
      if (!lastInput || !document.contains(lastInput)) return err("넣을 입력칸을 먼저 한 번 누르세요");
      lastInput.value = last.rs; lastInput.dispatchEvent(new Event("input", { bubbles: true })); lastInput.dispatchEvent(new Event("change", { bubbles: true })); lastInput.focus();
    });

    function toggle(open) {
      open = open ?? box.hidden; box.hidden = !open; fab.setAttribute("aria-expanded", String(open));
      if (open) { draw(); x.focus(); } else fab.focus();
    }
    fab.addEventListener("click", () => toggle());
    $q(".x").addEventListener("click", () => toggle(false));
    document.addEventListener("keydown", (e) => {
      const t = e.target;
      if (e.key === "\\" && !(t && t.closest && t.closest("input, textarea, select, [contenteditable]"))) { e.preventDefault(); toggle(); }
    });
    // 머리줄 끌어 옮기기 (넓은 화면)
    const head = $q(".calc-head");
    head.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button") || matchMedia("(max-width: 820px)").matches) return;
      const r = box.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top;
      head.setPointerCapture(e.pointerId);
      const mv = (ev) => {
        box.style.left = Math.min(innerWidth - 60, Math.max(0, ev.clientX - dx)) + "px"; box.style.top = Math.min(innerHeight - 40, Math.max(0, ev.clientY - dy)) + "px";
        box.style.right = "auto"; box.style.bottom = "auto";
      };
      const up = () => { head.removeEventListener("pointermove", mv); head.removeEventListener("pointerup", up); };
      head.addEventListener("pointermove", mv); head.addEventListener("pointerup", up);
    });
    draw();
    api.open = () => toggle(true); api.close = () => toggle(false);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
