/* 피지컬AI 실험실 · OMX 팔 평면 기구학 (window.OmxKin)
 * 어깨(joint2) 축을 원점으로 한 옆에서 본 평면(x 앞, z 위). joint1 은 이 평면 전체를 바닥 축으로 돌린다.
 * 치수는 ROBOTIS 모델(model/omx_lab.xml)의 body 위치에서 읽음 (MuJoCo 3.17.0 과 0.1 mm 안에서 일치 확인):
 *   어깨→팔꿈치 (x 0.0415, z 0.11315) → 길이 L1 0.1205 m, 수직에서 앞으로 α 20.1° 기울어짐
 *   팔꿈치→손목 L2 0.162 m,  손목→손끝(end_effector_link) L3 0.0287 + 0.09193 = 0.1206 m
 *   어깨 축의 세계 좌표: (-0.01125, 0, 0.0975), joint1 축도 x = -0.01125 에 있음
 * 각도 부호: 관절이 + 로 돌면 팔이 앞(아래)으로 숙여짐.
 */
(function () {
  "use strict";
  const L1 = Math.hypot(0.0415, 0.11315), ALPHA = Math.atan2(0.0415, 0.11315), L2 = 0.162, L3 = 0.0287 + 0.09193;
  const SHOULDER = [-0.01125, 0, 0.0975];
  const deg = (r) => r * 180 / Math.PI, rad = (d) => d * Math.PI / 180;

  /** 관절 각도(rad) → 어깨 기준 팔꿈치·손목·손끝 (x, z) [m] */
  function fk(t2, t3, t4) {
    const e = [L1 * Math.sin(t2 + ALPHA), L1 * Math.cos(t2 + ALPHA)];
    const a23 = t2 + t3, a234 = a23 + t4;
    const w = [e[0] + L2 * Math.cos(a23), e[1] - L2 * Math.sin(a23)];
    const p = [w[0] + L3 * Math.cos(a234), w[1] - L3 * Math.sin(a234)];
    return { elbow: e, wrist: w, tip: p, x: p[0], z: p[1] };
  }

  /** 손끝 목표 (x, z) [m], 손은 수평(θ2+θ3+θ4 = 0) → 관절 각도(rad). 팔꿈치 위(up=true) / 아래. 닿지 않으면 null */
  function ik(x, z, up) {
    const wx = x - L3, wz = z, d = Math.hypot(wx, wz);
    if (d > L1 + L2 - 1e-9 || d < Math.abs(L1 - L2) + 1e-9) return null;
    const beta = Math.acos((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d));      // 어깨에서 본 위팔과 손목 방향 사이 각
    const gamma = Math.acos((L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2));    // 팔꿈치 안쪽 각
    const phi1 = Math.atan2(wz, wx) + (up ? beta : -beta);                  // 위팔 방향 (수평에서 위로 +)
    const phi2 = phi1 + (up ? -(Math.PI - gamma) : (Math.PI - gamma));      // 아래팔 방향
    const t2 = Math.PI / 2 - ALPHA - phi1, t23 = -phi2;
    return { t2, t3: t23 - t2, t4: -t23, d, beta, gamma, phi1, phi2 };
  }

  /** 어깨 기준 (x, z) 와 joint1 각도 → 세계 좌표 [x, y, z] (3D 표시용) */
  function world(x, z, t1) {
    t1 = t1 || 0;
    return [SHOULDER[0] + x * Math.cos(t1), x * Math.sin(t1), SHOULDER[2] + z];
  }

  window.OmxKin = { L1, ALPHA, L2, L3, SHOULDER, REACH: L1 + L2 + L3, fk, ik, world, deg, rad };
})();
