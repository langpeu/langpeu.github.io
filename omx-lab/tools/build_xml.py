# ROBOTIS omx.xml + scene.xml 을 한 파일로 합치고 메시 경로를 파일 이름만 남깁니다.
# 사용법 (저장소 폴더에서): python3 tools/build_xml.py
#   → model/omx_lab.xml 생성, 메시 STL 을 model/meshes/ 로 복사
# ROBOTIS open_manipulator 저장소가 이 저장소 옆(../open_manipulator)에 있어야 합니다. 원본은 수정하지 않습니다.
import os
import re
import shutil

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
DESC = os.path.join(REPO, "..", "open_manipulator", "open_manipulator_description")
MJ = os.path.join(DESC, "mujoco", "omx")
MESH = os.path.join(DESC, "meshes", "omx_f")

omx = open(os.path.join(MJ, "omx.xml"), encoding="utf-8").read()
scene = open(os.path.join(MJ, "scene.xml"), encoding="utf-8").read()
omx = omx.replace('meshdir="../../"', 'meshdir="."').replace('file="meshes/omx_f/', 'file="')
body = re.search(r"<mujoco[^>]*>(.*)</mujoco>", omx, re.S).group(1)
sbody = re.search(r"<mujoco[^>]*>(.*)</mujoco>", scene, re.S).group(1).replace('<include file="omx.xml"/>', "")
out = '<mujoco model="omx_f lab">' + body + sbody + "</mujoco>"
open(os.path.join(REPO, "model", "omx_lab.xml"), "w", encoding="utf-8").write(out)

os.makedirs(os.path.join(REPO, "model", "meshes"), exist_ok=True)
files = sorted(set(re.findall(r'file="([^"]+\.stl)"', out)))
for f in files:
    shutil.copy(os.path.join(MESH, f), os.path.join(REPO, "model", "meshes", f))
print("model/omx_lab.xml", len(out), "bytes,", len(files), "meshes")
