---
layout: post
date: 2026-08-05
title: "시놀로지 나스 디스크 Smart 관리툴 Scrutiny 세팅"
tags: [Tips, ]
categories: [Synology, NAS, ]
---


시놀로지 DSM 은  7.4.2 로 업데이트 하는 시점에서 하드 디스크 의 SMART 정보상세를 제외 했기에 여간 답답한게 아니다. 사실 나도 4년 정도 사용하면서 장애가 발생해서 디스크 상태 보려고 했는데 이제서야 해당 메뉴가 삭제된걸 알았다.


그래서 아무래도 해외 포럼을 뒤지다 보니 알게된 scrutiny 라는 프로젝트를 알게되서 내 나스에 설치해 보았다.  제대로 하드 상태를 관리하려면 최소 일주일에 한번은 하드디스크 smart 빠른스캔 정도 돌리는게 좋다고 하기에 일단 세팅해 봤고 몇일 사용하고 설치 방법 기록겸 리뷰겸 남긴다.


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

[scrutiny.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/dad48fd0-b3ef-4ae1-8deb-9e7b515129f2/scrutiny.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662225IZY3%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE2odl5X1o1lqDvSukDH975FdYc7QElHSu4aRtNur7hJAiEA4YJ%2FKNoScPPHCUR73WzNiyB34AiW%2B9i%2FsO90ywOQ1%2FYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEOArtsOHVmeWLnhryrcA5OGkMDtd8iZCjhZ66%2BKGMr4sj%2BkApHj2Nkr3Qk8I%2Bgq4HptOXV9v0Ovv7Gv5LkQov5s5U2dufFq56Zm1NFLJT2IrfP88pjj1yxhNB4GfP7TEtxpC%2BEzp1WfY9FL7KQP1zWwK8%2BLhhy74jWWeUGoIGYa%2FAgxgsnNmmlSpUrkLdSTmRdkLmrQw%2FBTeU6%2F1t9IO2Ue8v7qARJcogmWCT%2BCBPKpg%2F0N0whwDq0nTVq31dNwP%2FV9nPUA83roXWqeO1ZgGj2EQ3dO%2Fqcs4K06bKgLDatBA0JNRFYGDIyBGtFCA%2BvHNY2rQFg2iPhWc%2BRX6e7INmNRZ7gto3Iir1cBvSL0tJlK2YPbD1fIRz1qw96eeRy3Qe5XPKe77GQgwtGPl%2Fa6t9pvPqtZZezZT1%2FZPzl6Bb0SPnCt%2BscOdtrFuJe3LO8I7B3XQ7hDfBzLYjeo45y9KMQ1CG%2BTSnma81IDQkvPjZ2t7qcD9XnTmjRYnKRi1gDbIlfkeW5hvjmmrd8HPQ5XhUZlhC67PYzjXno9b534OliY5CZHwoeHZD4qG2Cg4msbZbhCKdtc60S8VWltBMmx9x8y3VQuIVRxc5WsHXtUfhaHwPpHNP30q0LCszK%2B9Fg5H5YHj4OcaJVAH37QMMjUz9MGOqUBV8kxSpnzrdRXlEBH4l8zbMYSBa12jKGqgyd4OAOq4JcOAL%2BWov7WrOSLa5zIm3dfWgr%2FgBD18jgbvbqYaAwoy%2B%2BVSJ6afdSzdgBcZrMcLrPMI%2F8%2BamNl3u0Lt%2FbIDOlYmfnm9wdOGgexJKWKlk18z0qtL2mPYrdFHM5eqkOHQznoOOp81CxxirEX3GNgaep884aHON%2BHXo71wnusRcEks9hB39M%2F&X-Amz-Signature=8e5eb11c13275e5434813f68d03bf6deadbd7869de3b2f8c485d5d3339234e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


자료출처: [https://drfrankenstein.co.uk/scrutiny-in-container-manager-on-a-synology-nas/](https://drfrankenstein.co.uk/scrutiny-in-container-manager-on-a-synology-nas/)

