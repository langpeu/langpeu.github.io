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
[https://iterm2.com/downloads/stable/latest](https://iterm2.com/downloads/stable/latest)


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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OBZNBQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T030231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhCNTMZRO%2BDZglC2YpW0Xf8otXFkUG11%2B98HMZX3y1TAIgc90BGTTNrJtfk3QqEwaQQE1SMfpvrYYcO1bxMlxEPr0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoMvLegW7V1c7lnNSrcA%2FsAXaavQWHS9rB90wEjuc0JbeAPYCk6UwlbtVkejJ7pe%2BBBQu1Ewv5sUORjYF3pz7A%2FonEsU2KNUR55jwmE8LqIboo0WMLOQ7Bmbd7PX8nZsPk2yE1cqvWAhZLbG4XHDP8tXFtO%2F9BwESJldagSRPh9CitSPZDEnCUpx8cczElu3LrDhr5vAGcTf3zwEFP3fkYZVtttjUR0DMrCgmmCBiawjpXJaOeVmyg2uiN2hOp%2FX06UDtzHHer3y4%2BUr50%2Bes09FEANXm%2F3yhicSembBls1B0yY9uU3vQr0P4WnTu9BtCNccEOV4%2BVdVmsVzk8YEv42yHUVU3WdHwjwusWRz5MUzxaHuNvpo%2Fo7WaechRDUcfogcIeO9Lm5nlMgDDmKGKFYUfPyUdX6tSsRTepNC%2FO9SboMTG5pNwlgTrUpcIk9MXHJe32dTnm7skg1wBjfQHWdRg8tco6uU1r08HMQ%2FcoO6OZoifzRjHb8jcZVhTuUxkxS0Gj0crgGwbAoO6pFWows7Vbm1vtFawfcQyihJ2LhfBTS6IRiWJklMKFOBiU4KuX4YK4jhYHmVm%2F9xLvtUYDk9d96nmenFPIfTBu9m3jm%2Bi84iJf6xRJmNq9BEhqW8dyD%2FnAWnkgMz1ClMLWgoL0GOqUBf%2BXvRotgxZAwYkGfrzmmzHs779aYEoHCGktoMCU%2FeywGzZC%2BvAHywtNW476Hz%2F3mFa7xXJ913ihqn8HV2Yu8JQ6cR%2FLwJLjq9ItDKS8NmTvGIJOoh21vc3cwEqg347gELoA%2B%2BNtaWuj1utQtNpawTuMfTNhbIq1wgqzDsELu01ED48XVOTsItOvImkiDB55k7EHf%2BpD9aqpPuqR31GWkoKbYEU1C&X-Amz-Signature=886720e36c1c521574685ac2f5c92030c3612521bbbd75406980812a2d5e2bb8&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OBZNBQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T030231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhCNTMZRO%2BDZglC2YpW0Xf8otXFkUG11%2B98HMZX3y1TAIgc90BGTTNrJtfk3QqEwaQQE1SMfpvrYYcO1bxMlxEPr0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoMvLegW7V1c7lnNSrcA%2FsAXaavQWHS9rB90wEjuc0JbeAPYCk6UwlbtVkejJ7pe%2BBBQu1Ewv5sUORjYF3pz7A%2FonEsU2KNUR55jwmE8LqIboo0WMLOQ7Bmbd7PX8nZsPk2yE1cqvWAhZLbG4XHDP8tXFtO%2F9BwESJldagSRPh9CitSPZDEnCUpx8cczElu3LrDhr5vAGcTf3zwEFP3fkYZVtttjUR0DMrCgmmCBiawjpXJaOeVmyg2uiN2hOp%2FX06UDtzHHer3y4%2BUr50%2Bes09FEANXm%2F3yhicSembBls1B0yY9uU3vQr0P4WnTu9BtCNccEOV4%2BVdVmsVzk8YEv42yHUVU3WdHwjwusWRz5MUzxaHuNvpo%2Fo7WaechRDUcfogcIeO9Lm5nlMgDDmKGKFYUfPyUdX6tSsRTepNC%2FO9SboMTG5pNwlgTrUpcIk9MXHJe32dTnm7skg1wBjfQHWdRg8tco6uU1r08HMQ%2FcoO6OZoifzRjHb8jcZVhTuUxkxS0Gj0crgGwbAoO6pFWows7Vbm1vtFawfcQyihJ2LhfBTS6IRiWJklMKFOBiU4KuX4YK4jhYHmVm%2F9xLvtUYDk9d96nmenFPIfTBu9m3jm%2Bi84iJf6xRJmNq9BEhqW8dyD%2FnAWnkgMz1ClMLWgoL0GOqUBf%2BXvRotgxZAwYkGfrzmmzHs779aYEoHCGktoMCU%2FeywGzZC%2BvAHywtNW476Hz%2F3mFa7xXJ913ihqn8HV2Yu8JQ6cR%2FLwJLjq9ItDKS8NmTvGIJOoh21vc3cwEqg347gELoA%2B%2BNtaWuj1utQtNpawTuMfTNhbIq1wgqzDsELu01ED48XVOTsItOvImkiDB55k7EHf%2BpD9aqpPuqR31GWkoKbYEU1C&X-Amz-Signature=d1a865e3ab4e29d9c3b879f9dee1f73da8397188f1150cf32ec6e1431a650381&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OBZNBQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T030231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhCNTMZRO%2BDZglC2YpW0Xf8otXFkUG11%2B98HMZX3y1TAIgc90BGTTNrJtfk3QqEwaQQE1SMfpvrYYcO1bxMlxEPr0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoMvLegW7V1c7lnNSrcA%2FsAXaavQWHS9rB90wEjuc0JbeAPYCk6UwlbtVkejJ7pe%2BBBQu1Ewv5sUORjYF3pz7A%2FonEsU2KNUR55jwmE8LqIboo0WMLOQ7Bmbd7PX8nZsPk2yE1cqvWAhZLbG4XHDP8tXFtO%2F9BwESJldagSRPh9CitSPZDEnCUpx8cczElu3LrDhr5vAGcTf3zwEFP3fkYZVtttjUR0DMrCgmmCBiawjpXJaOeVmyg2uiN2hOp%2FX06UDtzHHer3y4%2BUr50%2Bes09FEANXm%2F3yhicSembBls1B0yY9uU3vQr0P4WnTu9BtCNccEOV4%2BVdVmsVzk8YEv42yHUVU3WdHwjwusWRz5MUzxaHuNvpo%2Fo7WaechRDUcfogcIeO9Lm5nlMgDDmKGKFYUfPyUdX6tSsRTepNC%2FO9SboMTG5pNwlgTrUpcIk9MXHJe32dTnm7skg1wBjfQHWdRg8tco6uU1r08HMQ%2FcoO6OZoifzRjHb8jcZVhTuUxkxS0Gj0crgGwbAoO6pFWows7Vbm1vtFawfcQyihJ2LhfBTS6IRiWJklMKFOBiU4KuX4YK4jhYHmVm%2F9xLvtUYDk9d96nmenFPIfTBu9m3jm%2Bi84iJf6xRJmNq9BEhqW8dyD%2FnAWnkgMz1ClMLWgoL0GOqUBf%2BXvRotgxZAwYkGfrzmmzHs779aYEoHCGktoMCU%2FeywGzZC%2BvAHywtNW476Hz%2F3mFa7xXJ913ihqn8HV2Yu8JQ6cR%2FLwJLjq9ItDKS8NmTvGIJOoh21vc3cwEqg347gELoA%2B%2BNtaWuj1utQtNpawTuMfTNhbIq1wgqzDsELu01ED48XVOTsItOvImkiDB55k7EHf%2BpD9aqpPuqR31GWkoKbYEU1C&X-Amz-Signature=1478800200e98016cd95a86a0bf9ff442002ae3a66a0b0feee028d2afa2ad34f&X-Amz-SignedHeaders=host&x-id=GetObject)



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


