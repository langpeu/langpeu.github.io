# 피지컬AI 실험실

OMX-AI 팔로워 팔(OMX-F)을 브라우저 안의 MuJoCo로 움직이며 로봇 기구학과 동역학을 배우는 비공식 학습 자료입니다.
상황마다 **손으로 예측 → 시뮬레이션 실험 → 예측과 비교** 순서로 진행합니다.

- 사이트: https://langpeu.github.io/omx-lab/ (langpeu.github.io 블로그 저장소의 omx-lab/ 폴더)
- 제작: Langpeu · https://www.youtube.com/@langpeudoit

## 구조

```
index.html            첫 화면 (단원별 문제 목록)
common/lab.css        공통 디자인 (사이드바 틀, 카드, 계산기)
common/lab.js         공통 코드: 단원·문제 목록(UNITS, PROBLEMS, TOOLS), 사이드바 틀(shell),
                      MuJoCo 불러오기, 3D, 계기판, 경계 계산
common/calc.js        떠 있는 계산기 (모든 페이지, \ 키)
common/logo.jpg       랑프 두잇 로고
lib/                  mujoco.js/.wasm (MuJoCo 3.17.0), three.js r128
model/                omx_lab.xml + meshes/*.stl (ROBOTIS 원본에서 생성)
<id>/                 문제 하나: index.html(내용) + <id>.js(이 문제의 실험). 예: torque/, sag/
tool-*/               도구: 서보 스펙 계산기, 단위 변환·어림 계산
tools/                개발용 (배포에서 뺌): build_xml.py, check_site.py, test.html, calc_test.html
```

## 번호 규칙

번호·단원·제목은 `common/lab.js` 의 `PROBLEMS` 에만 있습니다. 페이지에는 번호를 쓰지 않습니다.
다른 문제를 가리킬 때는 `<a data-ref="sag" href="../sag/">상황 {n}</a>` 처럼 쓰면 번호가 자동으로 들어갑니다(JS 안에서는 `OmxLab.label("sag")`).
그래서 문제를 중간에 끼워 넣어도 `PROBLEMS` 순서만 바꾸면 됩니다.

## 문제 추가

1. 비슷한 문제 폴더(예: `torque/`)를 복사해 `<새 id>/` 를 만들고 내용과 실험(`<새 id>.js`)을 바꿉니다. 실험 JS 는 `OmxLab.shell("<새 id>")` 를 부릅니다.
2. `common/lab.js` 의 `PROBLEMS` 에서 그 id 의 `ready` 를 `true` 로 바꿉니다 (없으면 한 줄 추가).
3. `python3 tools/check_site.py` 로 검사합니다.

## 로컬에서 보기

```
python3 -m http.server 8000     # 이 폴더에서
```
브라우저에서 http://localhost:8000 (파일을 더블클릭해 열면 동작하지 않습니다). 검사: http://localhost:8000/tools/test.html

## 출처와 라이선스

로봇 모델은 ROBOTIS open_manipulator (Apache-2.0), 물리 엔진은 MuJoCo (Apache-2.0), 3D는 three.js (MIT) 입니다.
자세한 내용은 `NOTICE` 를 보세요. 이 저장소의 코드도 Apache-2.0 (`LICENSE`) 입니다.
