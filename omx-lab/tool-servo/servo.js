/* 도구 · 서보 스펙 계산기 (실습 문서 탭 2 계산기를 옮김. 시뮬레이션 없음) */
(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);
  OmxLab.renderNav($("nav"), "tool-servo");

  const KGF = 9.80665;          // 1 kgf = 9.80665 N  →  1 kg·cm = 0.0980665 Nm
  const OZIN = 0.00706155;      // 1 oz·in [Nm]

  // 공식 스펙 (DYNAMIXEL: ROBOTIS 공식 스펙표 2026-11-21, OMX-AI 실제 전압 12 V / 5 V 와 같음)
  const PRESETS = [
    { name: "OMX · XL430-W250-T", tq: 1.5, tu: "nm", sp: 61, su: "rpm",
      note: "XL430-W250-T · OMX-AI 팔로워 1~3번 관절(어깨 쪽) · 12 V 기준 스톨 1.5 Nm, 무부하 61 rpm · 무게 57 g · 기어비 258.5:1 · 실험실 모델의 1.5 Nm와 같은 값" },
    { name: "OMX · XL330-M288-T", tq: 0.52, tu: "nm", sp: 104, su: "rpm",
      note: "XL330-M288-T · OMX-AI 팔로워 4~5번 관절·그리퍼, 리더 1~5번 · 5 V 기준 스톨 0.52 Nm, 무부하 104 rpm · 무게 18 g · 기어비 288.4:1" },
    { name: "OMX · XL330-M077-T", tq: 0.22, tu: "nm", sp: 363, su: "rpm",
      note: "XL330-M077-T · OMX-AI 리더 그리퍼 · 5 V 기준 스톨 0.22 Nm, 무부하 363 rpm · 무게 18 g · 기어비 77.5:1" },
    { name: "SO-ARM · STS3215 7.4V (C001)", tq: 19.5, tu: "kgcm", sp: 0.192, su: "sec",
      note: "STS3215-C001 (7.4 V) · SO-ARM100/101 팔로워 전 관절, 리더 어깨 · 7.4 V 기준 스톨 19.5 kg·cm, 무부하 0.192 sec/60° · 기어비 1:345 · 출처: Waveshare·판매처 스펙" },
    { name: "SO-ARM · STS3215 12V (C018)", tq: 30, tu: "kgcm", sp: 0.222, su: "sec",
      note: "STS3215-C018 (12 V) · SO-ARM100/101 팔로워 12 V 버전 · 12 V 기준 스톨 30 kg·cm(정격 약 10 kg·cm), 무부하 0.222 sec/60° · 기어비 1:345 · 출처: Waveshare·판매처 스펙" },
  ];

  const num = (id) => { const x = parseFloat($(id).value); return isFinite(x) ? x : 0; };
  const f = (v, d) => (isFinite(v) ? v : 0).toLocaleString("ko-KR", { maximumFractionDigits: d });
  const kgT = (kg) => (kg >= 1 ? f(kg, 2) + " kg" : f(kg * 1000, 0) + " g");

  // 프리셋 버튼
  const box = $("presets");
  PRESETS.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "ghost"; b.type = "button"; b.textContent = p.name;
    b.addEventListener("click", () => {
      $("tq").value = p.tq; $("tq-u").value = p.tu; $("sp").value = p.sp; $("sp-u").value = p.su;
      $("note").textContent = p.note; $("note").classList.add("ok");
      box.querySelectorAll("button").forEach((x, j) => x.setAttribute("aria-pressed", String(i === j)));
      calc();
    });
    b.setAttribute("aria-pressed", "false");
    box.appendChild(b);
  });
  // 스펙을 직접 바꾸면 프리셋 설명은 지움
  ["tq", "tq-u", "sp", "sp-u"].forEach((id) => $(id).addEventListener("input", () => {
    $("note").textContent = "직접 입력한 값입니다."; $("note").classList.remove("ok");
    box.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", "false"));
  }));
  ["tq", "tq-u", "sp", "sp-u", "use", "len", "link", "load", "acc"].forEach((id) => $(id).addEventListener("input", calc));

  function calc() {
    const t = num("tq"), tu = $("tq-u").value;
    const nm = tu === "kgcm" ? t * KGF / 100 : tu === "nm" ? t : tu === "nmm" ? t / 1000 : t * OZIN;
    const kgcm = nm * 100 / KGF;
    const u = Math.min(Math.max(num("use"), 1), 100) / 100;
    const sv = num("sp");
    const dps = sv > 0 ? ($("sp-u").value === "rpm" ? sv * 6 : 60 / sv) : 0;   // °/s
    const ok = dps > 0;

    // 2. 단위 환산
    const kp = [
      [f(nm, 3), "Nm"], [f(kgcm, 2), "kg·cm"], [f(nm * 1000, 0), "N·mm"], [f(nm / OZIN, 1), "oz·in"],
      [ok ? f(dps, 0) : "–", "°/s (초당 각도)"], [ok ? f(dps * Math.PI / 180, 2) : "–", "rad/s"],
      [ok ? f(dps / 6, 1) : "–", "rpm"], [ok ? f(180 / dps, 2) : "–", "180° 도는 시간 (s)"],
    ];
    $("kpis").innerHTML = kp.map(([v, k]) => `<div class="kpi"><span class="v">${v}</span><span class="k">${k}</span></div>`).join("");
    $("feel").innerHTML = `이 서보의 최대 힘은 <b>${kgT(kgcm / 10)}</b>을 <b>10 cm 끝</b>에서 버티는 정도입니다. 오래 버틸 때는 <b>${kgT(kgcm * u / 10)}</b> 정도로 생각하세요.`;

    // 3. 팔 길이별
    const L = num("len");
    const base = [5, 10, 15, 20, 30];
    const ds = (L > 0 && base.indexOf(L) < 0 ? base.concat([L]) : base).sort((a, b) => a - b);
    $("lentbl").innerHTML = ds.map((d) => `<tr${d === L ? ' class="mine"' : ""}><td>${f(d, 1)} cm${d === L ? " (내 팔)" : ""}</td>
      <td class="n">${kgT(kgcm / d)}</td><td class="n">${kgT(kgcm * u / d)}</td><td class="n">${f(kgcm * u / d / 0.5, 1)}병</td></tr>`).join("");

    // 4. 내 팔에 충분한가
    const lk = num("link") / 1000, ld = num("load") / 1000, ac = num("acc") / 100;
    const needS = ld * L + lk * L / 2;            // kg·cm (팔 무게는 가운데)
    const need = needS * (1 + ac);
    const usable = kgcm * u;
    const ratio = need > 0 ? usable / need : 0;
    const v = $("verdict");
    if (need <= 0) { v.className = "verdict"; v.textContent = "팔 길이와 무게를 입력하세요"; $("needtxt").textContent = ""; }
    else {
      v.className = "verdict " + (ratio >= 1.3 ? "good" : ratio >= 1 ? "warn" : "bad");
      v.textContent = (ratio >= 1.3 ? "여유 있음" : ratio >= 1 ? "빠듯함" : "부족함") + ` · 연속 사용 기준 ${f(ratio, 2)}배`;
      $("needtxt").innerHTML = `필요 토크 = 물체 ${f(ld * L, 2)} + 팔 ${f(lk * L / 2, 2)} = <b>${f(needS, 2)} kg·cm</b> (${f(needS * KGF / 100, 3)} Nm), 가속 여유 포함 <b>${f(need, 2)} kg·cm</b>.<br>
        연속 사용 비율을 고려하면 스톨 토크 <b>${f(need / u, 1)} kg·cm 이상</b>(${f(need / u * KGF / 100, 2)} Nm)인 서보가 필요합니다.` +
        (ok ? ` 팔 끝 최대 속도는 약 ${f(dps * Math.PI / 180 * L / 100, 2)} m/s입니다.` : "");
    }
    const mx = Math.max(need, usable, kgcm, 1e-9);
    const bar = (label, val, cls) => `<div class="vbar"><div class="vl"><span>${label}</span><span>${f(val, 2)} kg·cm · ${f(val * KGF / 100, 3)} Nm</span></div>
      <div class="vt"><span class="${cls}" style="width:${Math.min(100, val / mx * 100)}%"></span></div></div>`;
    $("bars").innerHTML = bar("필요한 토크 (가속 여유 포함)", need, "need") + bar("연속 사용 가능 토크", usable, "use") + bar("스톨 토크 (최대, 멈춘 상태)", kgcm, "stall");
  }
  calc();
})();
