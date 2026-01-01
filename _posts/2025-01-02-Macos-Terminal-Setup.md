---
layout: post
date: 2025-01-02
title: "Macos Terminal Setup"
tags: [Tips, ]
categories: [Apple, ]
---


![0](/assets/img/2025-01-02-Macos-Terminal-Setup.md/0.png)



## Setup Terminal



{% raw %}
```shell
#Install Brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

#Install zsh
brew install zsh

zsh --version
zsh 5.9 (arm64-apple-darwin24.0)

which zsh
/bin/zsh

#Change bash -> zsh
chsh -s 'which zsh'

echo $SHELL
/bin/zsh

#Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

#Update oh-my-zsh setting
vi ~/.zshrc

export ZSH="$HOME/.oh-my-zsh"
export PATH=/opt/homebrew/bin:$PATH
export DEFAULT_USER="$(whoami)"

ZSH_THEME="agnoster"

plugins=(git, autojump, zsh-autosuggestions, zsh-syntax-highlighting)

#update oh-my-zsh
source ~/.zshrc

#iTerm2 설치

https://iterm2.com/downloads/stable/latest



#Powerline Font 설치
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts

#iTerm2 ColorSet
curl -O https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/schemes/Framer.itermcolors
```
{% endraw %}



폰트 출처


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIOYM2CB%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T045447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHiJzUdmVGubvjvAvrBtq9lPsqRJEX6RrqE%2BbryoiVPMAiEAxeMXn%2FaUaFsGBgwaaJebfcEwa2GA0IqagzY1Bbkr414qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBnuA8nchmjrg6nGCrcA9Co%2Bsz69WYKTH1siv96YootjFGOcfFjonRtMlbwBeR09PZebvnQKtilQHEWuhNuNZpu2%2FcLRLiHiIN%2BDMUUWmm7yImt7IECuYGgTUnjqy1N0immdS4k87lIJFZ18FffbzPH8wWf62thwUJpTtQTjT8mgzP80KQM4R7QeYNyhqKT3WeM%2FakrSPc2zNS%2BndWOPvvl5zAorBPbUW8Cfg%2ByMLs1NEcPh7JpQj5XFaVXTeQF5ph%2FyM9BsnAv4y0RowIKDcB0V5p2%2B%2BKZNO06bEEZ6JrzdZ2pneiJ9KYNwGbWpbOl8C77Gpa6xEzxXp%2FYGagCyOmRbblSGJ76YTPvUyw1ztCRaFWLRSAADHBSVeFKJgaiawmXcfAHnYqV%2F1cvaxAT5do%2FtbsvIkmk8alHyeXfYSx6vCE0MXSpPXQy%2ByNp74E%2Fabevs1E%2BzlHN4E7Odn19pKYW6BcwevqZzru9BdsmoB6qKCh35PI8w4zEn70pV813qBuQDyZb1rb%2BI%2B1nl2ilx9JHemSJ5mbCN9adC%2FFDYy%2BMDQQRIMTIBOMsUDOkBtm4XKBCbqp8BgmJ06DuYn2fBcK3J0XvdVxNxBuKAMxzsfZ7yfI1LMkNajQVjxhp1j9wCaYNJkPVpl3RpFOeMPKl18oGOqUBSAbWFFJq7UldaE94euxXp7nnDIJtfvO9Ac46RDiBPVcKhpdzCvFBj7qjGamYP%2FnVJciXkhDuA0m4eVWiK30KiUqWbCPu9lI9BXV69wETzlWQobpQcv8XzfktAfdj%2B1lUq2Hwio5upSDZwhhCWymqa9mMv0fzBSQAetyGHIWa%2BzfM7rrlz7iI%2FJs50Vz%2FnfP1zYOnapAFrbNm%2B6SFpRbVkTVcKiPR&X-Amz-Signature=4ded8d4fc573a6fa79d5bc3e56154fcff57ff3916e27089edd5514ed65fcf87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIOYM2CB%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T045447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHiJzUdmVGubvjvAvrBtq9lPsqRJEX6RrqE%2BbryoiVPMAiEAxeMXn%2FaUaFsGBgwaaJebfcEwa2GA0IqagzY1Bbkr414qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBnuA8nchmjrg6nGCrcA9Co%2Bsz69WYKTH1siv96YootjFGOcfFjonRtMlbwBeR09PZebvnQKtilQHEWuhNuNZpu2%2FcLRLiHiIN%2BDMUUWmm7yImt7IECuYGgTUnjqy1N0immdS4k87lIJFZ18FffbzPH8wWf62thwUJpTtQTjT8mgzP80KQM4R7QeYNyhqKT3WeM%2FakrSPc2zNS%2BndWOPvvl5zAorBPbUW8Cfg%2ByMLs1NEcPh7JpQj5XFaVXTeQF5ph%2FyM9BsnAv4y0RowIKDcB0V5p2%2B%2BKZNO06bEEZ6JrzdZ2pneiJ9KYNwGbWpbOl8C77Gpa6xEzxXp%2FYGagCyOmRbblSGJ76YTPvUyw1ztCRaFWLRSAADHBSVeFKJgaiawmXcfAHnYqV%2F1cvaxAT5do%2FtbsvIkmk8alHyeXfYSx6vCE0MXSpPXQy%2ByNp74E%2Fabevs1E%2BzlHN4E7Odn19pKYW6BcwevqZzru9BdsmoB6qKCh35PI8w4zEn70pV813qBuQDyZb1rb%2BI%2B1nl2ilx9JHemSJ5mbCN9adC%2FFDYy%2BMDQQRIMTIBOMsUDOkBtm4XKBCbqp8BgmJ06DuYn2fBcK3J0XvdVxNxBuKAMxzsfZ7yfI1LMkNajQVjxhp1j9wCaYNJkPVpl3RpFOeMPKl18oGOqUBSAbWFFJq7UldaE94euxXp7nnDIJtfvO9Ac46RDiBPVcKhpdzCvFBj7qjGamYP%2FnVJciXkhDuA0m4eVWiK30KiUqWbCPu9lI9BXV69wETzlWQobpQcv8XzfktAfdj%2B1lUq2Hwio5upSDZwhhCWymqa9mMv0fzBSQAetyGHIWa%2BzfM7rrlz7iI%2FJs50Vz%2FnfP1zYOnapAFrbNm%2B6SFpRbVkTVcKiPR&X-Amz-Signature=5467141f3e178990f44c32e9d13119967fadcb0b974e15700cd59aaa32aaef3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIOYM2CB%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T045447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHiJzUdmVGubvjvAvrBtq9lPsqRJEX6RrqE%2BbryoiVPMAiEAxeMXn%2FaUaFsGBgwaaJebfcEwa2GA0IqagzY1Bbkr414qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBnuA8nchmjrg6nGCrcA9Co%2Bsz69WYKTH1siv96YootjFGOcfFjonRtMlbwBeR09PZebvnQKtilQHEWuhNuNZpu2%2FcLRLiHiIN%2BDMUUWmm7yImt7IECuYGgTUnjqy1N0immdS4k87lIJFZ18FffbzPH8wWf62thwUJpTtQTjT8mgzP80KQM4R7QeYNyhqKT3WeM%2FakrSPc2zNS%2BndWOPvvl5zAorBPbUW8Cfg%2ByMLs1NEcPh7JpQj5XFaVXTeQF5ph%2FyM9BsnAv4y0RowIKDcB0V5p2%2B%2BKZNO06bEEZ6JrzdZ2pneiJ9KYNwGbWpbOl8C77Gpa6xEzxXp%2FYGagCyOmRbblSGJ76YTPvUyw1ztCRaFWLRSAADHBSVeFKJgaiawmXcfAHnYqV%2F1cvaxAT5do%2FtbsvIkmk8alHyeXfYSx6vCE0MXSpPXQy%2ByNp74E%2Fabevs1E%2BzlHN4E7Odn19pKYW6BcwevqZzru9BdsmoB6qKCh35PI8w4zEn70pV813qBuQDyZb1rb%2BI%2B1nl2ilx9JHemSJ5mbCN9adC%2FFDYy%2BMDQQRIMTIBOMsUDOkBtm4XKBCbqp8BgmJ06DuYn2fBcK3J0XvdVxNxBuKAMxzsfZ7yfI1LMkNajQVjxhp1j9wCaYNJkPVpl3RpFOeMPKl18oGOqUBSAbWFFJq7UldaE94euxXp7nnDIJtfvO9Ac46RDiBPVcKhpdzCvFBj7qjGamYP%2FnVJciXkhDuA0m4eVWiK30KiUqWbCPu9lI9BXV69wETzlWQobpQcv8XzfktAfdj%2B1lUq2Hwio5upSDZwhhCWymqa9mMv0fzBSQAetyGHIWa%2BzfM7rrlz7iI%2FJs50Vz%2FnfP1zYOnapAFrbNm%2B6SFpRbVkTVcKiPR&X-Amz-Signature=aa40c07e2da72bf286b0062af6e91e2f21115bba366c38da575b6ab004b2bfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



## Install Homebrew



{% raw %}
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
{% endraw %}




## Install Oh My ZSH!


[https://ohmyz.sh/](https://ohmyz.sh/)


To install:



{% raw %}
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
{% endraw %}




## Install PowerlineFont


[https://github.com/powerline/fonts/tree/master/SourceCodePro](https://github.com/powerline/fonts/tree/master/SourceCodePro)



{% raw %}
```shell
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```
{% endraw %}




## Install iTerm2


[https://iterm2.com/](https://iterm2.com/)


다운로드 링크
[https://iterm2.com/downloads/stable/latest](https://iterm2.com/downloads/stable/latest)



## Install Powerlevel10K


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


To Install:



{% raw %}
```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
{% endraw %}


