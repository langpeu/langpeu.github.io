/* 도구 · 단위 변환·어림 계산 (실습 문서 탭 2의 어림 계산 3가지 + 단위 확인표를 계산기로) */
(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);
  OmxLab.shell("tool-estimate");

  const G = 9.81;
  const KGF = 9.80665;
  const num = (id) => { const x = parseFloat($(id).value); return isFinite(x) ? x : 0; };
  // 유효숫자 4자리 정도로 보기 좋게
  const f = (v) => {
    if (!isFinite(v)) return "–";
    if (v === 0) return "0";
    const a = Math.abs(v);
    if (a >= 1e6 || a < 1e-4) return v.toExponential(3).replace("e", " × 10^");
    return v.toLocaleString("ko-KR", { maximumSignificantDigits: 4 });
  };
  const on = (ids, fn) => { ids.forEach((id) => $(id).addEventListener("input", fn)); fn(); };

  // 1. 중력 토크
  on(["g-m", "g-l", "g-th"], () => {
    const m = num("g-m") / 1000, L = num("g-l") / 100, th = num("g-th") * Math.PI / 180;
    const t = m * G * L * Math.cos(th);
    $("g-out").innerHTML = `<span class="big">${f(t)} Nm</span> <span class="unit">= ${f(t * 100 / KGF)} kg·cm</span>
      <span class="calc">${f(m)} kg × ${G} m/s² × ${f(L)} m${th ? ` × cos ${f(num("g-th"))}°(${f(Math.cos(th))})` : ""}</span>`;
  });

  // 2. 가속 토크
  on(["a-m", "a-l", "a-al"], () => {
    const m = num("a-m") / 1000, L = num("a-l") / 100, al = num("a-al");
    const t = m * L * L * al;
    $("a-out").innerHTML = `<span class="big">${f(t)} Nm</span> <span class="unit">= ${f(t * 100 / KGF)} kg·cm</span>
      <span class="calc">${f(m)} kg × (${f(L)} m)² × ${f(al)} rad/s² · 관성 m·L² = ${f(m * L * L)} kg·m²</span>`;
  });
  const alpha = () => { const t = num("a-t"); return t > 0 ? num("a-dq") * Math.PI / 180 * Math.PI ** 2 / (2 * t * t) : 0; };
  on(["a-dq", "a-t"], () => { $("a-helper").textContent = `α최대 = ${f(num("a-dq") * Math.PI / 180)} rad × π² ÷ (2 × ${f(num("a-t"))}²) = ${f(alpha())} rad/s²`; });
  $("a-use").addEventListener("click", () => { $("a-al").value = +alpha().toPrecision(4); $("a-al").dispatchEvent(new Event("input")); });

  // 3. 파지력
  on(["p-m", "p-a", "p-mu", "p-n"], () => {
    const m = num("p-m") / 1000, a = num("p-a"), mu = num("p-mu"), n = Math.max(1, Math.round(num("p-n")));
    const fn = mu > 0 ? m * (G + a) / (n * mu) : Infinity;
    $("p-out").innerHTML = mu > 0
      ? `<span class="big">${f(fn)} N</span> <span class="unit">이상 (손가락 하나당, ≈ ${f(fn / KGF * 1000)} gf)</span>
        <span class="calc">${f(m)} kg × (${G} + ${f(a)}) m/s² ÷ (${n} × ${f(mu)})</span>`
      : `<span class="big">μ를 0보다 크게 넣으세요</span>`;
  });

  // 4. 단위 변환: 각 단위를 SI 단위로 바꾸는 배수
  const CATS = [
    { name: "각도", u: [["rad", 1], ["deg (°)", Math.PI / 180], ["rev (바퀴)", 2 * Math.PI]], v: 90, from: 1 },
    { name: "각속도", u: [["rad/s", 1], ["deg/s (°/s)", Math.PI / 180], ["rpm", 2 * Math.PI / 60]], v: 61, from: 2 },
    { name: "각가속도", u: [["rad/s²", 1], ["deg/s²", Math.PI / 180]], v: 10, from: 0 },
    { name: "토크", u: [["Nm", 1], ["kg·cm (kgf·cm)", KGF / 100], ["N·mm", 0.001], ["oz·in", 0.00706155]], v: 20, from: 1 },
    { name: "힘", u: [["N", 1], ["kgf", KGF], ["gf", KGF / 1000], ["lbf", 4.44822]], v: 1, from: 1 },
    { name: "길이", u: [["m", 1], ["cm", 0.01], ["mm", 0.001], ["inch", 0.0254]], v: 40.1, from: 1 },
    { name: "질량", u: [["kg", 1], ["g", 0.001], ["lb", 0.453592]], v: 57, from: 1 },
    { name: "관성 모멘트", u: [["kg·m²", 1], ["kg·cm²", 1e-4], ["g·cm²", 1e-7], ["g·mm²", 1e-9]], v: 1, from: 3 },
    { name: "시간", u: [["s", 1], ["ms", 0.001]], v: 2, from: 1 },
  ];
  const cat = $("u-cat"), from = $("u-from");
  cat.innerHTML = CATS.map((c, i) => `<option value="${i}">${c.name}</option>`).join("");
  function fillUnits(reset) {
    const c = CATS[+cat.value];
    from.innerHTML = c.u.map((u, i) => `<option value="${i}">${u[0]}</option>`).join("");
    if (reset) { from.value = c.from; $("u-v").value = c.v; }
  }
  function conv() {
    const c = CATS[+cat.value], k = c.u[+from.value][1], si = num("u-v") * k;
    $("u-out").innerHTML = c.u.map((u, i) => `<tr class="${i === 0 ? "si" : ""} ${i === +from.value ? "mine" : ""}"><td>${u[0]}</td><td class="n">${f(si / u[1])}</td>
      <td class="note">${i === 0 ? "SI 표준 단위" : `${f(u[1])} ${c.u[0][0]}`}</td></tr>`).join("");
  }
  cat.addEventListener("change", () => { fillUnits(true); conv(); });
  from.addEventListener("change", conv);
  $("u-v").addEventListener("input", conv);
  fillUnits(true); conv();
})();
