---
layout: post
date: 2025-01-02
title: "Macos Terminal Setup"
tags: [Tips, ]
categories: [Apple, ]
---


![0](/assets/img/2025-01-02-Macos-Terminal-Setup.md/0.png)



## Setup Terminal


```shell

##Install Brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


##Install zsh
brew install zsh

zsh --version
zsh 5.9 (arm64-apple-darwin24.0)

which zsh
/bin/zsh


##Change bash -> zsh
chsh -s 'which zsh'

echo $SHELL
/bin/zsh


##Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"


##Update oh-my-zsh setting
vi ~/.zshrc

export ZSH="$HOME/.oh-my-zsh"
export PATH=/opt/homebrew/bin:$PATH
export DEFAULT_USER="$(whoami)"

ZSH_THEME="agnoster"

plugins=(git, autojump, zsh-autosuggestions, zsh-syntax-highlighting)


##update oh-my-zsh
source ~/.zshrc


##iTerm2 설치

https://iterm2.com/downloads/stable/latest




##Powerline Font 설치
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts


##iTerm2 ColorSet
curl -O https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/schemes/Framer.itermcolors
```


폰트 출처


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUWOJ2L%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFcTT7VxL%2FuTgDkKvr1TDZXxe5bgfkWXAbKSwhp4CASFAiEAhqAAXrAqgEXPQfSU3z7Q8H50mvc5Wz9nbdflZ6kTrjoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNWe642pREBoYqwgzCrcAzuFpq9cZiQcBTvEhaG4FfcZP8U%2F1gUvvTMZSMaVgkL1qn5BCoFVC8MUoFpat6YR%2Fy8I5x4lmdltHKUzgTX492i2v3Hpseb75vQ3tHUBBz8pzcOHoTia0Xmgvx4OnqfKmi0Z5MaYYja3PfVYmJY7II90st0WzW%2BFRfpVN4PDwEmuGCGbd3oYirmzG5YHJlzUFgB%2FcRGBTOFgUi439KtZtFWAxNc%2BuQ0n2mt7LSH5%2F0B3J5gvY063%2FW2lxSV5BmoeZHpGIDas%2BUujFttzLSUnx%2Bl6rxYPU6g8yj%2BnD%2Bh7NCamHBCCfvgLyhxUj2SiBVjaaACA%2FRpymbuUwpaoyZxdg43zq6DZwDk3lzPzRlOvVBoeZ5olf40IZEaz0SzPYGkw7rILIotoUfsgUkdwvceLnTTDfWEI6kUw3eSK41HNUOz4vupUyN61mg6KxVwCLz7%2Bo29NfEWySox5TQPQci5PxI3MiCeZun0EEPQpVTWWJyCGV3ULrTMWL%2Fmaxg%2BlvYL9y1%2BDd9X7LN5waQlYQqGG4OmG%2BjAruIp0xcjTMEnqhoUTCb%2FhmOAd0UQkbkBMoLm9XCRCZkkOu%2FleFHgtMMzOgSrQn8NJw8IfMet6cpmrsOCROBM7tdRNm9GT58DLMPikz9MGOqUBtzV7xFt2yFEWkMgX%2BjvXWp0BUYjyz3yVGYpEfvBGDUMfff8Vd2gItk38piavF51nV5E2n7yztgLneiy1ldL049KESSxIGxo2mmkbgbEAN2lO7hxug9zcpN8wgFx3zps%2BMJHntBiRPu%2FstliV5MmkV6RSAM%2BXfNukIerW5MtKX0Vs6GmcveBGrbzNQ0YwmsDBX5d8TiliMWXdQyCAQNSSGqunY0Av&X-Amz-Signature=815afb78a4c8133e904052e4c048b2c24458e1ca19e096ec4b12df8630e83a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUWOJ2L%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFcTT7VxL%2FuTgDkKvr1TDZXxe5bgfkWXAbKSwhp4CASFAiEAhqAAXrAqgEXPQfSU3z7Q8H50mvc5Wz9nbdflZ6kTrjoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNWe642pREBoYqwgzCrcAzuFpq9cZiQcBTvEhaG4FfcZP8U%2F1gUvvTMZSMaVgkL1qn5BCoFVC8MUoFpat6YR%2Fy8I5x4lmdltHKUzgTX492i2v3Hpseb75vQ3tHUBBz8pzcOHoTia0Xmgvx4OnqfKmi0Z5MaYYja3PfVYmJY7II90st0WzW%2BFRfpVN4PDwEmuGCGbd3oYirmzG5YHJlzUFgB%2FcRGBTOFgUi439KtZtFWAxNc%2BuQ0n2mt7LSH5%2F0B3J5gvY063%2FW2lxSV5BmoeZHpGIDas%2BUujFttzLSUnx%2Bl6rxYPU6g8yj%2BnD%2Bh7NCamHBCCfvgLyhxUj2SiBVjaaACA%2FRpymbuUwpaoyZxdg43zq6DZwDk3lzPzRlOvVBoeZ5olf40IZEaz0SzPYGkw7rILIotoUfsgUkdwvceLnTTDfWEI6kUw3eSK41HNUOz4vupUyN61mg6KxVwCLz7%2Bo29NfEWySox5TQPQci5PxI3MiCeZun0EEPQpVTWWJyCGV3ULrTMWL%2Fmaxg%2BlvYL9y1%2BDd9X7LN5waQlYQqGG4OmG%2BjAruIp0xcjTMEnqhoUTCb%2FhmOAd0UQkbkBMoLm9XCRCZkkOu%2FleFHgtMMzOgSrQn8NJw8IfMet6cpmrsOCROBM7tdRNm9GT58DLMPikz9MGOqUBtzV7xFt2yFEWkMgX%2BjvXWp0BUYjyz3yVGYpEfvBGDUMfff8Vd2gItk38piavF51nV5E2n7yztgLneiy1ldL049KESSxIGxo2mmkbgbEAN2lO7hxug9zcpN8wgFx3zps%2BMJHntBiRPu%2FstliV5MmkV6RSAM%2BXfNukIerW5MtKX0Vs6GmcveBGrbzNQ0YwmsDBX5d8TiliMWXdQyCAQNSSGqunY0Av&X-Amz-Signature=ecc39eeb3d9bcd8d558d9667b9102f541dc187ff99a17ec8b7b74c0b137f1312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUWOJ2L%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFcTT7VxL%2FuTgDkKvr1TDZXxe5bgfkWXAbKSwhp4CASFAiEAhqAAXrAqgEXPQfSU3z7Q8H50mvc5Wz9nbdflZ6kTrjoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNWe642pREBoYqwgzCrcAzuFpq9cZiQcBTvEhaG4FfcZP8U%2F1gUvvTMZSMaVgkL1qn5BCoFVC8MUoFpat6YR%2Fy8I5x4lmdltHKUzgTX492i2v3Hpseb75vQ3tHUBBz8pzcOHoTia0Xmgvx4OnqfKmi0Z5MaYYja3PfVYmJY7II90st0WzW%2BFRfpVN4PDwEmuGCGbd3oYirmzG5YHJlzUFgB%2FcRGBTOFgUi439KtZtFWAxNc%2BuQ0n2mt7LSH5%2F0B3J5gvY063%2FW2lxSV5BmoeZHpGIDas%2BUujFttzLSUnx%2Bl6rxYPU6g8yj%2BnD%2Bh7NCamHBCCfvgLyhxUj2SiBVjaaACA%2FRpymbuUwpaoyZxdg43zq6DZwDk3lzPzRlOvVBoeZ5olf40IZEaz0SzPYGkw7rILIotoUfsgUkdwvceLnTTDfWEI6kUw3eSK41HNUOz4vupUyN61mg6KxVwCLz7%2Bo29NfEWySox5TQPQci5PxI3MiCeZun0EEPQpVTWWJyCGV3ULrTMWL%2Fmaxg%2BlvYL9y1%2BDd9X7LN5waQlYQqGG4OmG%2BjAruIp0xcjTMEnqhoUTCb%2FhmOAd0UQkbkBMoLm9XCRCZkkOu%2FleFHgtMMzOgSrQn8NJw8IfMet6cpmrsOCROBM7tdRNm9GT58DLMPikz9MGOqUBtzV7xFt2yFEWkMgX%2BjvXWp0BUYjyz3yVGYpEfvBGDUMfff8Vd2gItk38piavF51nV5E2n7yztgLneiy1ldL049KESSxIGxo2mmkbgbEAN2lO7hxug9zcpN8wgFx3zps%2BMJHntBiRPu%2FstliV5MmkV6RSAM%2BXfNukIerW5MtKX0Vs6GmcveBGrbzNQ0YwmsDBX5d8TiliMWXdQyCAQNSSGqunY0Av&X-Amz-Signature=e509a82dbd0ff1f583217a1a0bd6625e4ebf623ba325919c472aa728aab1591f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



## Install Homebrew


```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```



## Install Oh My ZSH!


[https://ohmyz.sh/](https://ohmyz.sh/)


To install:


```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```



## Install PowerlineFont


[https://github.com/powerline/fonts/tree/master/SourceCodePro](https://github.com/powerline/fonts/tree/master/SourceCodePro)


```shell

## clone
git clone https://github.com/powerline/fonts.git --depth=1

## install
cd fonts
./install.sh

## clean-up a bit
cd ..
rm -rf fonts
```



## Install iTerm2


[https://iterm2.com/](https://iterm2.com/)


다운로드 링크
[https://iterm2.com/downloads/stable/latest](https://iterm2.com/downloads/stable/latest)



## Install Powerlevel10K


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


To Install:


```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

