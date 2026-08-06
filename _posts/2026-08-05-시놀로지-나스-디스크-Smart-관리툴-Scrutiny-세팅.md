---
layout: post
date: 2026-08-05
title: "시놀로지 나스 디스크 Smart 관리툴 Scrutiny 세팅"
tags: [Tips, ]
categories: [Synology, NAS, ]
---


안녕하세요 랑프입니다.


시놀로지 DSM 은  7.4.2 로 업데이트 하는 시점에서 하드 디스크 의 SMART 정보상세를 제외 했기에 여간 답답한게 아니다. 사실 나도 4년 정도 사용하면서 장애가 발생해서 디스크 상태 보려고 했는데 이제서야 해당 메뉴가 삭제된걸 알았다.


그래서 아무래도 해외 포럼을 뒤지다 보니 알게된 scrutiny 라는 프로젝트를 알게되서 내 나스에 설치해 보았다.  제대로 하드 상태를 관리하려면 최소 일주일에 한번은 하드디스크 smart 빠른스캔 정도 돌리는게 좋다고 하기에 일단 세팅해 봤고 몇일 사용하고 설치 방법 기록겸 리뷰겸 남긴다.


SMART 는 디스크 펌웨어 영역에 설치되어 있는 디스크 관리툴이다.

> 
>
> **1. 상태 모니터링 (Self-Monitoring)**
>
>
> 디스크 컨트롤러가 평소 동작 중에 계속 아래와 같은 지표들을 자체적으로 측정하고 기록합니다.
>
> - 배드 섹터 개수 (Reallocated Sector Count)
> - 읽기/쓰기 오류율
> - 시크(seek) 오류율
> - 디스크 가동 시간 (Power-On Hours)
> - 전원 켜고 끈 횟수 (Power Cycle Count)
> - 온도
> - (SSD의 경우) 남은 수명, 총 쓰기 바이트량(TBW), 웨어 레벨링 상태 등
>
> **2. 분석 (Analysis)**
>
> - 각 지표별로 제조사가 정한 **임계값(threshold)**과 비교해서, 정상 범위인지 위험 수준인지 판단합니다. 아래 검사 기능들은 수동이고, 디스크의 모터, 디스크 핵심영역이나 전체등을 물리적으로 검사합니다. SMART 속송값에 업데이트 되는게 아니라 별도의 TestLog 가 생성됩니다.
> - Short scan(단축 검사): 제조사가 정한 디스크 일부 핵심 구간만 빠르게 점검
> - Extended scan(정밀 검사): 디스크 표면 전체를 훑어서 배드 섹터 유무를 확인
>
> **3. 보고 (Reporting)**
>
> - 분석 결과를 디스크 내부 예약 영역에 저장해두고, 운영체제나 관리 툴(시놀로지의 Scrutiny, `smartctl` 등)이 요청하면 그 값을 읽어서 사용자에게 보여줍니다.
> - 값이 임계치를 넘으면 "디스크 고장 임박" 같은 경고를 미리 띄워서, 데이터 유실 전에 백업/교체할 시간을 벌어줍니다.
>
> 핵심은 **디스크 안의 사용자 파일(문서, 사진 등)을 검사하는 게 아니라, 디스크라는 하드웨어 자체의 물리적/전기적 건강 상태를 스스로 진단하고 보고하는 기능**이라는 점입니다.
> Scrunity 는 이 디스크의 펌웨어 영역에 저장되어 있는 SMART 속성 정보를 가져와서 웹UI로 보여주는 것이지 디스크에 단축,정밀 검사를 실행 하거나, 그 결과인 TestLog를 가져오지는 않습니다.

![0](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/0.png)


Scrutiny는 하드 드라이브 상태 대시보드 및 모니터링 솔루션으로, 제조업체에서 제공하는 SMART 지표와 실제 고장률을 비교해 안내해 주는 도구입니다.


소스 출처


[link_preview](https://github.com/Starosdev/scrutiny)


먼저 시놀로지 나스에 ssh 를 열어서 아래와 같이 접속해주세요


![1](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/1.png)


아래 명령어로 마운트된 드라이브 목록을 확인합니다.


```bash
icopy@DS1517P:~$ fdisk -l
```


![2](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/2.png)


현재 저는 DS1517+ 모델이고 아래 4개의 디스크가 레이드5로 연결되어 있습니다.


![3](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/3.png)


미리 해당 내용을 메모장에 적어 둡니다.


```bash
fdisk: cannot open /dev/sda: Permission denied
fdisk: cannot open /dev/sdb: Permission denied
fdisk: cannot open /dev/sdd: Permission denied
fdisk: cannot open /dev/sdc: Permission denied
```

> USB 외장하드는 제조업체 지원 여부에 따라 안될수 있기에  설정 파일 뒷부분에 제외 했습니다.

설치를 위해 docker 폴더에 아래처럼  폴더를 생성합니다.


```bash
/docker/projects/scrutiny-compose
/docker/scrutiny
/docker/scrutiny/influxdb
```


![4](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/4.png)


위에 메모한 드라이브 정보를 가지로 아래 설정 파일 작성합니다.


저는 언제든지 편집 가능한 시놀로지 텍스트 에디터로 생성함 

> /docker/scrutiny/collector.yaml

```bash
version: 1
host:
  id: ""
devices:
  - device: /dev/sda
    type: 'sat'
  - device: /dev/sdb
    type: 'sat'
  - device: /dev/sdc
    type: 'sat'
  - device: /dev/sdd
    type: 'sat'

##  - device: /dev/sde
#    type: 'sat'

##  - device: /dev/usb1
#    type: 'sat'

##  - device: /dev/usb2
#    type: 'sat'
```


![5](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/5.png)


아래 경로에 scrunity 설정 파일 생성

> /docker/scrutiny/scrutiny.yaml

[scrutiny.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/dad48fd0-b3ef-4ae1-8deb-9e7b515129f2/scrutiny.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DD3YYHP%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T033337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCGH%2FyWMzOESpyNefPxG8zvB4UAXzvHBDKyIkEjX4Y4pwIhAMWihEixt2RJ1X4kIAAFeEZ5gVJha4nfXYd1IfcbqlVSKv8DCDMQABoMNjM3NDIzMTgzODA1IgzQlyojI5N8L6zfpRgq3AMt7spFVdCvNSI3uBbtOBA0vI5uS4Y7TTOPouTtG47P2vvR9sMBybJV7hKyln8Bvkd7HPVaHdEoRLUmNfFMlW2G7RrqCOdo1jVbic099mdGNRZ6QReSvOKOGkz5JBEnGTjLhjsKaa1qrbt30e3W6NleN5Xb2MI%2Bwzsz7iXb1MVIKoyjIbNJu0%2BAhJrjI8xQY1Mym8MmD23qlZ%2BaCx13bBuXTYEsi0AbesyDDk%2BRbAujt0YY%2BncyCpbXLieSV18WVwwOuevw8gfP8gSQ7cP27t79gJASyuQ95aUQbrkea5TeElvjlLLFbCX8a08EXT0xSw2Tt05U4UEvDB7XwJDRZ4HHvznqqnUSaeWSKO78OIts0el7WGvXzEueDjeSGIPCe4xpGejm6fkanQJJbZEJ65CKH8p9Obw1igNfDvUVpJMJnUBj3HC0TqYJvAsQEZL7K34MqzgR2iFE%2BPa0ga3T5MM%2BFRUSI%2B1YSt19J%2BcqAgWcRw3yHU1VqJkM%2FMCTYMx0o4MbiB%2Bf5IqkXgIAzfpfSoXu7%2FEfiqp%2F%2BYWQFq7HxDKNjuKigQktWSLIY16bgqKlVb5z2R1i0RgFQN2dzUJ6skPA8PvXXpdA7vNHyKvOo%2BKJHYupPJ8bWODpeRliBjDI1M%2FTBjqkAUzocwWDZP9rmcoSyfrfJKNzzLUVtTfz5IxVGLLNXadNi5AIS76aK8lXVG62YXa%2BE%2FwJYr3kmksYMt37pAsyzjFq989icaq6s0KAiH47a7D%2FesKxtDl9B1k2%2FTVi9tmz8NL9Ko%2BtbCUzvBhjGJfT8jaesXXEUpT%2BKooVy9ZPFaNA7TRi6ld0eP2YAMU15gZynilUxJ5eu6LEeCWdUrl3F8W1C22G&X-Amz-Signature=d20ecffb025f863f91b9e1eea3f5ab7a7e36f7c0ce660dca5abab9ee696d13d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


```bash

## Commented Scrutiny Configuration File
#

## The default location for this file is /opt/scrutiny/config/scrutiny.yaml.
# In some cases to improve clarity default values are specified,

## uncommented. Other example values are commented out.
#

## When this file is parsed by Scrutiny, all configuration file keys are
# lowercased automatically. As such, Configuration keys are case-insensitive,

## and should be lowercase in this file to be consistent with usage.
#

#######################################################################
# Environment Variable Overrides
#

## Any configuration key can be overridden via environment variables using
# the SCRUTINY_ prefix. Dots and dashes in key names become underscores.
#

## Pattern: SCRUTINY_<KEY_WITH_DOTS_AS_UNDERSCORES>
#

## Examples:
#   web.listen.port                       -> SCRUTINY_WEB_LISTEN_PORT

##   web.listen.host                       -> SCRUTINY_WEB_LISTEN_HOST
#   web.listen.basepath                   -> SCRUTINY_WEB_LISTEN_BASEPATH

##   web.database.location                 -> SCRUTINY_WEB_DATABASE_LOCATION
#   web.database.journal_mode             -> SCRUTINY_WEB_DATABASE_JOURNAL_MODE

##   web.src.frontend.path                 -> SCRUTINY_WEB_SRC_FRONTEND_PATH
#   web.influxdb.scheme                   -> SCRUTINY_WEB_INFLUXDB_SCHEME

##   web.influxdb.host                     -> SCRUTINY_WEB_INFLUXDB_HOST
#   web.influxdb.port                     -> SCRUTINY_WEB_INFLUXDB_PORT

##   web.influxdb.org                      -> SCRUTINY_WEB_INFLUXDB_ORG
....

##limits:
#  ata:

##    critical:
#      error: 10

##    standard:
#      error: 20

##      warn: 10
#  scsi:

##    critical: true
#    standard: true

##  nvme:
#    critical: true

##    standard: true
```


기본 설정 그대로 사용했고, notify 를 discord 로 받기 위해 아래 처럼 주석 해제후 discord 쪽 세팅했다.


```bash
notify:
  urls:

##    # Existing Shoutrrr targets keep their current URL syntax
    - "discord://token@webhookid"
```


컨테이너 매니저 실행 → 프로젝트에서 생성


![6](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/6.png)


경로는 아래


```bash
/docker/projects/scrunity
```


내용은 아래 복사해서 붙여 넣고 수정


```bash
services:
  scrutiny:
    container_name: scrutiny
    image: ghcr.io/starosdev/scrutiny:latest
    cap_add:
      - SYS_RAWIO
      - SYS_ADMIN
    ports:
      - 6090:8080/tcp # webapp
      - 8086:8086/tcp # influxDB admin
    volumes:
      - /run/udev:/run/udev:ro
      - /volume1/docker/scrutiny:/opt/scrutiny/config
      - /volume1/docker/scrutiny/influxdb:/opt/scrutiny/influxdb
    devices:
      - /dev/nvme0
      - /dev/nvme1
      - /dev/sata1
      - /dev/sata2
      - /dev/sata3
      - /dev/sata4
      - /dev/sata5
      - /dev/sata6
      - /dev/sata7
      - /dev/sata8

##      - /dev/usb1
#      - /dev/usb2
    environment:
      - SCRUTINY_WEB_INFLUXDB_TOKEN=랜덤 문자열
      - SCRUTINY_WEB_INFLUXDB_INIT_USERNAME=유저명
      - SCRUTINY_WEB_INFLUXDB_INIT_PASSWORD=안전한 비밀번호 (최소 8자이상)
      - COLLECTOR_CRON_SCHEDULE=0 23 * * *
    security_opt:
      - no-new-privileges:true
    restart: unless-stopped
```

> 
>
> | SCRUTINY_WEB_INFLUXDB_TOKEN         | 랜덤 문자열                                                                                             |
> | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
> | SCRUTINY_WEB_INFLUXDB_INIT_USERNAME | 아무거나                                                                                               |
> | SCRUTINY_WEB_INFLUXDB_INIT_PASSWORD | 안전한 비밀번호(최소 8자)                                                                                    |
> | COLLECTOR_CRON_SCHEDULE             | `0 23 * * *`이 코드는 
> 오후 11시(23:00)에 실행합니다                                                            |
> | /volume1/docker/scrutiny            | 보시다시피 저는 'docker' 공유 폴더를 volume1에 저장한다고 가정했습니다. 만약 SSD/NVME 볼륨을 사용하고 있다면, 해당 줄을 올바른 볼륨 번호로 수정하십시오. |
>
>

위에 3개는 초기 influxdb 생성시 필요하구 다음 실행부터는 필요없어 삭제해도 됩니다.


그래도 백업은 해둬야 함


다음 다음 누르면 아래 처럼 도커 컨테이너를 생서합니다.


![7](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/7.png)


완료된 화면


![8](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/8.png)


위에처럼 녹색불이 들어오면 브라우저 실행해서 아래 주소로 호출하면 된다

> https://나스ip:6090

![9](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/9.png)


![10](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/10.png)


우측 메뉴 선택하면 팝업 나오고 View Details 누르면 해당 디스크의 SMART 정보와, 외부 드라이브 통계 정보 기반으로 현재 하드 상태를 비교해서 알려준다.


NVME 드라이브는 별도 Rated TBW 설정할수 있게 되어 있어 제조업체 스펙에 따른 현재 사용율과 수명을 단순하지만 알려준다.


![11](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/11.png)


![12](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/12.png)


![13](/assets/img/2026-08-05-시놀로지-나스-디스크-Smart-관리툴-Scrutiny-세팅.md/13.png)


참고: [https://drfrankenstein.co.uk/scrutiny-in-container-manager-on-a-synology-nas/](https://drfrankenstein.co.uk/scrutiny-in-container-manager-on-a-synology-nas/)

