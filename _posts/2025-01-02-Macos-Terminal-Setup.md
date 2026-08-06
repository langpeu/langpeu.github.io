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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7Z56FE5%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T021852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDDi50bpWKxF5TzF%2BFH27MK5V1%2FVcAC0ll6cBdW9m2DbQIgM5WW6qIRgK8u7syCAf4k5Xef8nn1d7vJMYlxh9Ww13Eq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPCvlvetJGTRHwrDlyrcA52lbrOkMcnqbR%2BpCokXOynB3aimHOMBQq8k1tfkgSWm55KYUcJTJxMjag9Q%2FELMkMHDobyzyGmvTqo2pUrleEMEIjvpnAKVQtAjPwhl4Lq%2FNgtgBPSsK1UthQwQWv0Ao%2FaKSJbW0mqtXEGruX7n8F3uTXRDC1fiDlUlzNfCYNplhZZOsnBcw6GzM7nqVHdS8ffUPGjtRVT1nVdXrQfPdM5nAyEpHPCrCKvfBca2loaL6vvi8FajNa6up%2BTCHvpMAZmC9bw1fDUspu8rbvT3jBf%2F6VXmSgHZxrQjGviuXY%2FWMc%2BvGFPRy5rqITe4QdHVX2OPR%2FDffGuCC1Jr0HlJ%2BG9yL3Ln1k4cS93PCmNy1y4vjTs52uMtpuo5ElxL%2BLsYhKId%2FRO%2FzKHnlsLB%2FE1EUvIUOMcWbPZAXfVIRGgnDCHjP4CDs9on0Iu1MHVlLvpczPo7pmrhoduvLSQkoDMELfagK8XW2QWIuwuY6qVBE0vAGd49OIsIj55XGhw%2B7Aeh60yOM%2BSp%2BzLEayQA2hBCa3nUE8UmRXVvnmHwmUwGsARsZAVMtO9b5rSheKIE3ApY3EScjePFcHLxwa7GK7RXaFv39fYfnY4urX6%2BYrQN74KkLl997lsYGofJE6BNMPnTz9MGOqUBr3hLuri%2B9B6%2FCIujF4HBQolHBSPnAqCyXObfiDTrdPBhxveu2r8UOeXE09beTOUbRcePEEVgt9gIMDrZQg%2BxiS3hil37A%2BFOthWPPf3mb%2BNxgLPEzslIt%2BvmmYKvmEFXwI%2FZy8XgXovgqPiT307NktAOwFh3TkBgCgyiXsTHrwjLz4x3oBBToIOYpAipjZwkEwO5%2BK37kq80YdbHWxYY3BzrT75Q&X-Amz-Signature=d4aee04c8ef23482f36b641b3aed30628d49f196e40af9cd414a30731769a839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7Z56FE5%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T021852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDDi50bpWKxF5TzF%2BFH27MK5V1%2FVcAC0ll6cBdW9m2DbQIgM5WW6qIRgK8u7syCAf4k5Xef8nn1d7vJMYlxh9Ww13Eq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPCvlvetJGTRHwrDlyrcA52lbrOkMcnqbR%2BpCokXOynB3aimHOMBQq8k1tfkgSWm55KYUcJTJxMjag9Q%2FELMkMHDobyzyGmvTqo2pUrleEMEIjvpnAKVQtAjPwhl4Lq%2FNgtgBPSsK1UthQwQWv0Ao%2FaKSJbW0mqtXEGruX7n8F3uTXRDC1fiDlUlzNfCYNplhZZOsnBcw6GzM7nqVHdS8ffUPGjtRVT1nVdXrQfPdM5nAyEpHPCrCKvfBca2loaL6vvi8FajNa6up%2BTCHvpMAZmC9bw1fDUspu8rbvT3jBf%2F6VXmSgHZxrQjGviuXY%2FWMc%2BvGFPRy5rqITe4QdHVX2OPR%2FDffGuCC1Jr0HlJ%2BG9yL3Ln1k4cS93PCmNy1y4vjTs52uMtpuo5ElxL%2BLsYhKId%2FRO%2FzKHnlsLB%2FE1EUvIUOMcWbPZAXfVIRGgnDCHjP4CDs9on0Iu1MHVlLvpczPo7pmrhoduvLSQkoDMELfagK8XW2QWIuwuY6qVBE0vAGd49OIsIj55XGhw%2B7Aeh60yOM%2BSp%2BzLEayQA2hBCa3nUE8UmRXVvnmHwmUwGsARsZAVMtO9b5rSheKIE3ApY3EScjePFcHLxwa7GK7RXaFv39fYfnY4urX6%2BYrQN74KkLl997lsYGofJE6BNMPnTz9MGOqUBr3hLuri%2B9B6%2FCIujF4HBQolHBSPnAqCyXObfiDTrdPBhxveu2r8UOeXE09beTOUbRcePEEVgt9gIMDrZQg%2BxiS3hil37A%2BFOthWPPf3mb%2BNxgLPEzslIt%2BvmmYKvmEFXwI%2FZy8XgXovgqPiT307NktAOwFh3TkBgCgyiXsTHrwjLz4x3oBBToIOYpAipjZwkEwO5%2BK37kq80YdbHWxYY3BzrT75Q&X-Amz-Signature=ab14135982851fdbb7c507ce194ccf8b1ba7ce4e08e74fe57dad6697fa94b608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7Z56FE5%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T021852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDDi50bpWKxF5TzF%2BFH27MK5V1%2FVcAC0ll6cBdW9m2DbQIgM5WW6qIRgK8u7syCAf4k5Xef8nn1d7vJMYlxh9Ww13Eq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPCvlvetJGTRHwrDlyrcA52lbrOkMcnqbR%2BpCokXOynB3aimHOMBQq8k1tfkgSWm55KYUcJTJxMjag9Q%2FELMkMHDobyzyGmvTqo2pUrleEMEIjvpnAKVQtAjPwhl4Lq%2FNgtgBPSsK1UthQwQWv0Ao%2FaKSJbW0mqtXEGruX7n8F3uTXRDC1fiDlUlzNfCYNplhZZOsnBcw6GzM7nqVHdS8ffUPGjtRVT1nVdXrQfPdM5nAyEpHPCrCKvfBca2loaL6vvi8FajNa6up%2BTCHvpMAZmC9bw1fDUspu8rbvT3jBf%2F6VXmSgHZxrQjGviuXY%2FWMc%2BvGFPRy5rqITe4QdHVX2OPR%2FDffGuCC1Jr0HlJ%2BG9yL3Ln1k4cS93PCmNy1y4vjTs52uMtpuo5ElxL%2BLsYhKId%2FRO%2FzKHnlsLB%2FE1EUvIUOMcWbPZAXfVIRGgnDCHjP4CDs9on0Iu1MHVlLvpczPo7pmrhoduvLSQkoDMELfagK8XW2QWIuwuY6qVBE0vAGd49OIsIj55XGhw%2B7Aeh60yOM%2BSp%2BzLEayQA2hBCa3nUE8UmRXVvnmHwmUwGsARsZAVMtO9b5rSheKIE3ApY3EScjePFcHLxwa7GK7RXaFv39fYfnY4urX6%2BYrQN74KkLl997lsYGofJE6BNMPnTz9MGOqUBr3hLuri%2B9B6%2FCIujF4HBQolHBSPnAqCyXObfiDTrdPBhxveu2r8UOeXE09beTOUbRcePEEVgt9gIMDrZQg%2BxiS3hil37A%2BFOthWPPf3mb%2BNxgLPEzslIt%2BvmmYKvmEFXwI%2FZy8XgXovgqPiT307NktAOwFh3TkBgCgyiXsTHrwjLz4x3oBBToIOYpAipjZwkEwO5%2BK37kq80YdbHWxYY3BzrT75Q&X-Amz-Signature=b0a61db7ab7093b60a5a68be13d1fc2d8f2e38288fb52b4fb1efd0578f43f99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

