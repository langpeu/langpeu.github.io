# OMX 동역학 실험실

OMX-AI 팔로워 팔(OMX-F)을 브라우저 안의 MuJoCo로 움직이며 로봇 동역학을 배우는 비공식 학습 자료입니다.
상황마다 **손으로 예측 → 시뮬레이션 실험 → 예측과 비교** 순서로 진행합니다.

- 사이트: https://langpeu.github.io/omx-lab/ (langpeu.github.io 블로그 저장소의 omx-lab/ 폴더)

## 구조

```
index.html            첫 화면 (문제 목록)
common/lab.css        공통 디자인
common/lab.js         공통 코드: 문제 목록, MuJoCo 불러오기, 3D, 계기판, 경계 계산
lib/                  mujoco.js/.wasm (MuJoCo 3.17.0), three.js r128
model/                omx_lab.xml + meshes/*.stl (ROBOTIS 원본에서 생성)
p00-basics/           0 · 기초 개념: 운동방정식, 기호 읽는 법, 단위, 용어 사전 (시뮬레이션 없음)
p01-torque/ … p10-payload/   상황 1~10: index.html(내용) + pNN.js(이 문제의 실험)
tool-servo/ tool-estimate/   도구: 서보 스펙 계산기, 단위 변환·어림 계산 (common/lab.js 의 TOOLS)
tools/build_xml.py    model/ 을 ROBOTIS 원본에서 다시 만들기
```

## 문제 추가

1. `p01-torque/` 를 복사해 `p02-이름/` 을 만들고 내용과 실험(`p02.js`)을 바꿉니다.
2. `common/lab.js` 의 `PROBLEMS` 에 한 줄 추가하면 첫 화면과 탭에 나타납니다.

## 로컬에서 보기

```
python3 -m http.server 8000     # 이 폴더에서
```
브라우저에서 http://localhost:8000 (파일을 더블클릭해 열면 동작하지 않습니다)

## 출처와 라이선스

로봇 모델은 ROBOTIS open_manipulator (Apache-2.0), 물리 엔진은 MuJoCo (Apache-2.0), 3D는 three.js (MIT) 입니다.
자세한 내용은 `NOTICE` 를 보세요. 이 저장소의 코드도 Apache-2.0 (`LICENSE`) 입니다.
