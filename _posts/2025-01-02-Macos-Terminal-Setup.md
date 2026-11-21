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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHLORRR%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCoy%2FBSvBXplOmMX6o9P50IqZ7G1z5qMKdN7%2FZCuM3hLQIgHv6YwR2V%2By2eOTdAqAHCvhs3cWEx78hQrPSA65keCyMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCSE9gidMwPwTRvkzCrcA6XTDzWzsBFYX4AuwNy315NAwRe98ZtSuoM0QmGAFiIVhV8%2Fdi8voYYeXhCQiXrriOJgnL3mR4MMZ8ua3KkdFaJsgug3C%2FN%2FD0iNL3lUWi7cF3qP2x3EH0LkWipElEplwMMYrVE%2FvwJffTv2BxPvr0aOSMzFCnYRREI5iXdz946Xt%2FUdaz4deshjnwlaOGgpKeELEl0Ly2yHue490%2BqgK28Xy1jSRxRQP2uehRH1dT9mOyys0uOuMfm5ICIeUUiIfV9Q%2F6Q%2FG%2FnxvPWiTOcBW72OVuOVCSo%2BxyfjONy988iihgKmjNbrNIqStWBjLfInSi4dlEpHa%2FnfglNGU%2Ft8HfuNq68i9P8gCqDDwP2b7dn5EcjCwOwRsPTNmPxaaX4HB1TLtgm8w3%2BwcjzR%2BFeQ1vFKWuukuIY%2FIXbCocHxICREoH9qCLIqoskZV2KO8XJ4f5F01K1vzvMKEbRXDa77IW4bcwcYYtoxRE4%2FzGMrN%2B0krrGn5wbkpRWv0yMx80p7rzsyJcw5m1tTft%2BS7wmbs8WC4S5Ysz2GufAvSCqoVfdx1pX9pV%2FPGqmQUoRzkY%2FCqx%2FRXTZHQzxm%2F6KCW9In81IvhQV%2FYLLW78tAJw9PxXRA8QzNtFVe6eGS7v%2B%2BMLi9hdgGOqUBHybBNWTlen%2BvSNEK1D6cCSyca%2FgayIF%2BMHceFFDt0sS9Ia6kCbieDuEmH4A4o2B3cVfuaV4JCOEaYpQq4c4ceHXW7sVfwLRhd8tYxBeF9uE6lDWLxBqPSpUPuImZMye%2FP%2FYTLnFnhBI4mTgnY9A38zpH12kdRBM2KkP%2FI5%2B%2BgkYrMGxeuNPV7UISZ21R7vnyyr6WHsZHwgVQCtQo8gGWwkGRywRk&X-Amz-Signature=79d40b3bbdf4efaef8f30606c57979970a7b1bf9d47127d50a343b4b9caf1f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHLORRR%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCoy%2FBSvBXplOmMX6o9P50IqZ7G1z5qMKdN7%2FZCuM3hLQIgHv6YwR2V%2By2eOTdAqAHCvhs3cWEx78hQrPSA65keCyMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCSE9gidMwPwTRvkzCrcA6XTDzWzsBFYX4AuwNy315NAwRe98ZtSuoM0QmGAFiIVhV8%2Fdi8voYYeXhCQiXrriOJgnL3mR4MMZ8ua3KkdFaJsgug3C%2FN%2FD0iNL3lUWi7cF3qP2x3EH0LkWipElEplwMMYrVE%2FvwJffTv2BxPvr0aOSMzFCnYRREI5iXdz946Xt%2FUdaz4deshjnwlaOGgpKeELEl0Ly2yHue490%2BqgK28Xy1jSRxRQP2uehRH1dT9mOyys0uOuMfm5ICIeUUiIfV9Q%2F6Q%2FG%2FnxvPWiTOcBW72OVuOVCSo%2BxyfjONy988iihgKmjNbrNIqStWBjLfInSi4dlEpHa%2FnfglNGU%2Ft8HfuNq68i9P8gCqDDwP2b7dn5EcjCwOwRsPTNmPxaaX4HB1TLtgm8w3%2BwcjzR%2BFeQ1vFKWuukuIY%2FIXbCocHxICREoH9qCLIqoskZV2KO8XJ4f5F01K1vzvMKEbRXDa77IW4bcwcYYtoxRE4%2FzGMrN%2B0krrGn5wbkpRWv0yMx80p7rzsyJcw5m1tTft%2BS7wmbs8WC4S5Ysz2GufAvSCqoVfdx1pX9pV%2FPGqmQUoRzkY%2FCqx%2FRXTZHQzxm%2F6KCW9In81IvhQV%2FYLLW78tAJw9PxXRA8QzNtFVe6eGS7v%2B%2BMLi9hdgGOqUBHybBNWTlen%2BvSNEK1D6cCSyca%2FgayIF%2BMHceFFDt0sS9Ia6kCbieDuEmH4A4o2B3cVfuaV4JCOEaYpQq4c4ceHXW7sVfwLRhd8tYxBeF9uE6lDWLxBqPSpUPuImZMye%2FP%2FYTLnFnhBI4mTgnY9A38zpH12kdRBM2KkP%2FI5%2B%2BgkYrMGxeuNPV7UISZ21R7vnyyr6WHsZHwgVQCtQo8gGWwkGRywRk&X-Amz-Signature=b41f5d8e5b07bed40da2cfe394731e76782be7ea0f31306f031f2c3952576518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHLORRR%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T102232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCoy%2FBSvBXplOmMX6o9P50IqZ7G1z5qMKdN7%2FZCuM3hLQIgHv6YwR2V%2By2eOTdAqAHCvhs3cWEx78hQrPSA65keCyMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCSE9gidMwPwTRvkzCrcA6XTDzWzsBFYX4AuwNy315NAwRe98ZtSuoM0QmGAFiIVhV8%2Fdi8voYYeXhCQiXrriOJgnL3mR4MMZ8ua3KkdFaJsgug3C%2FN%2FD0iNL3lUWi7cF3qP2x3EH0LkWipElEplwMMYrVE%2FvwJffTv2BxPvr0aOSMzFCnYRREI5iXdz946Xt%2FUdaz4deshjnwlaOGgpKeELEl0Ly2yHue490%2BqgK28Xy1jSRxRQP2uehRH1dT9mOyys0uOuMfm5ICIeUUiIfV9Q%2F6Q%2FG%2FnxvPWiTOcBW72OVuOVCSo%2BxyfjONy988iihgKmjNbrNIqStWBjLfInSi4dlEpHa%2FnfglNGU%2Ft8HfuNq68i9P8gCqDDwP2b7dn5EcjCwOwRsPTNmPxaaX4HB1TLtgm8w3%2BwcjzR%2BFeQ1vFKWuukuIY%2FIXbCocHxICREoH9qCLIqoskZV2KO8XJ4f5F01K1vzvMKEbRXDa77IW4bcwcYYtoxRE4%2FzGMrN%2B0krrGn5wbkpRWv0yMx80p7rzsyJcw5m1tTft%2BS7wmbs8WC4S5Ysz2GufAvSCqoVfdx1pX9pV%2FPGqmQUoRzkY%2FCqx%2FRXTZHQzxm%2F6KCW9In81IvhQV%2FYLLW78tAJw9PxXRA8QzNtFVe6eGS7v%2B%2BMLi9hdgGOqUBHybBNWTlen%2BvSNEK1D6cCSyca%2FgayIF%2BMHceFFDt0sS9Ia6kCbieDuEmH4A4o2B3cVfuaV4JCOEaYpQq4c4ceHXW7sVfwLRhd8tYxBeF9uE6lDWLxBqPSpUPuImZMye%2FP%2FYTLnFnhBI4mTgnY9A38zpH12kdRBM2KkP%2FI5%2B%2BgkYrMGxeuNPV7UISZ21R7vnyyr6WHsZHwgVQCtQo8gGWwkGRywRk&X-Amz-Signature=38707f542edcc88ac2691200e271c18b6f4e55a23c31986cc57d2d6f3d8f35ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

