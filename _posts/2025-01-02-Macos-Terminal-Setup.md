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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGI3QF2T%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDxgurTIxtdCzT1xTHR%2FVQPtdE89OQBkH6x1tGLs90JSwIgXMBhR%2FAkqbm7v7aThduT656SPe785lGT6Y%2BI41pGau8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMzzvcmOqnyvPTp7tircA9LHAdtwMos9xuHii3KlQmb4cWLiv9ifRhCLHmMK6Z4WCJCpKz%2F7h8Q9nUymTv7Y%2FdhdaHvDfJfFTOEeH6%2FkciQA2FCNRYV04Jwf4QRnfjSJ4ypG5%2Fb13r6CcKawE6SkzkJQMgVX204JszIgpSL%2FSf%2FGscQJveJ97SYIyUE3aDNLon8379cY7o2MIQCmCmbWp%2BkJl4WgyLlguQrVdCU4xYSZmlwjtiKefKGJfqjPNPEBUgo0B0CYfn4NQZ3wukA4nLi79mtNeM3CCEi27KZ%2Fe0sb2NCjMqwmPOoieKcyxb%2F31ejPsqEOd6zIxbGejd4CspGpxon59Z1cqgLi1WEFBnl%2BvYZIx4ggIrqnOqYs8nCjHL6G5%2FurtuPowDzPXSVyZiLeNwsLLjj%2BvqFf7gbvhRsbLK9aefN6EkCc4FtU9psBT15KzMaPGNnIrTgmFl51mG5T8wBJr0BsqGcsV2oppV%2BvS7IsjwOAMVTvH%2FT7OILnqwiyuDl3Oki1R9yREhksUFfyHocv1GtHc55H7ajNXY1TxA%2FkeFenU%2FrHjkq9CtDOotMW1bqzo8UFm3SGclI2YnsLa2BRGtRMgpKb7kfAI9mvCuzP42c5N54ZVcSVpP2t4cCMdQwKO4aDDkL0MNrWz9MGOqUBNjw8Waq9eoUBSDZBRmkpGLkyS8ZK%2FSZuQqMRw%2B4uJ%2Ba4I8R8OYr2t3x%2BkJ5B6XHkJuJ8FpahGdzbigtUlBIuUzbwE5DKYF41lALDtcOAiCl0MNdp206nUuaPIS6%2BrGz52KuoDTLyZeANbO7f%2B4MiSo7Ro%2FZW7dSDR3p92BqIugOe8bTX0%2F18lBKtmmSthO1INDMG7tE%2BLjF2c84e3JSdgp%2F7hi4i&X-Amz-Signature=58fd7c70f5762de58700dc843fd2cc952fe3fd642d439ca81cfe1633fc9fa205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGI3QF2T%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDxgurTIxtdCzT1xTHR%2FVQPtdE89OQBkH6x1tGLs90JSwIgXMBhR%2FAkqbm7v7aThduT656SPe785lGT6Y%2BI41pGau8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMzzvcmOqnyvPTp7tircA9LHAdtwMos9xuHii3KlQmb4cWLiv9ifRhCLHmMK6Z4WCJCpKz%2F7h8Q9nUymTv7Y%2FdhdaHvDfJfFTOEeH6%2FkciQA2FCNRYV04Jwf4QRnfjSJ4ypG5%2Fb13r6CcKawE6SkzkJQMgVX204JszIgpSL%2FSf%2FGscQJveJ97SYIyUE3aDNLon8379cY7o2MIQCmCmbWp%2BkJl4WgyLlguQrVdCU4xYSZmlwjtiKefKGJfqjPNPEBUgo0B0CYfn4NQZ3wukA4nLi79mtNeM3CCEi27KZ%2Fe0sb2NCjMqwmPOoieKcyxb%2F31ejPsqEOd6zIxbGejd4CspGpxon59Z1cqgLi1WEFBnl%2BvYZIx4ggIrqnOqYs8nCjHL6G5%2FurtuPowDzPXSVyZiLeNwsLLjj%2BvqFf7gbvhRsbLK9aefN6EkCc4FtU9psBT15KzMaPGNnIrTgmFl51mG5T8wBJr0BsqGcsV2oppV%2BvS7IsjwOAMVTvH%2FT7OILnqwiyuDl3Oki1R9yREhksUFfyHocv1GtHc55H7ajNXY1TxA%2FkeFenU%2FrHjkq9CtDOotMW1bqzo8UFm3SGclI2YnsLa2BRGtRMgpKb7kfAI9mvCuzP42c5N54ZVcSVpP2t4cCMdQwKO4aDDkL0MNrWz9MGOqUBNjw8Waq9eoUBSDZBRmkpGLkyS8ZK%2FSZuQqMRw%2B4uJ%2Ba4I8R8OYr2t3x%2BkJ5B6XHkJuJ8FpahGdzbigtUlBIuUzbwE5DKYF41lALDtcOAiCl0MNdp206nUuaPIS6%2BrGz52KuoDTLyZeANbO7f%2B4MiSo7Ro%2FZW7dSDR3p92BqIugOe8bTX0%2F18lBKtmmSthO1INDMG7tE%2BLjF2c84e3JSdgp%2F7hi4i&X-Amz-Signature=6a36702890bd189d8349fcd66524fe0b0157d0ee24b00b21d8b656c04afa26c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGI3QF2T%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDxgurTIxtdCzT1xTHR%2FVQPtdE89OQBkH6x1tGLs90JSwIgXMBhR%2FAkqbm7v7aThduT656SPe785lGT6Y%2BI41pGau8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMzzvcmOqnyvPTp7tircA9LHAdtwMos9xuHii3KlQmb4cWLiv9ifRhCLHmMK6Z4WCJCpKz%2F7h8Q9nUymTv7Y%2FdhdaHvDfJfFTOEeH6%2FkciQA2FCNRYV04Jwf4QRnfjSJ4ypG5%2Fb13r6CcKawE6SkzkJQMgVX204JszIgpSL%2FSf%2FGscQJveJ97SYIyUE3aDNLon8379cY7o2MIQCmCmbWp%2BkJl4WgyLlguQrVdCU4xYSZmlwjtiKefKGJfqjPNPEBUgo0B0CYfn4NQZ3wukA4nLi79mtNeM3CCEi27KZ%2Fe0sb2NCjMqwmPOoieKcyxb%2F31ejPsqEOd6zIxbGejd4CspGpxon59Z1cqgLi1WEFBnl%2BvYZIx4ggIrqnOqYs8nCjHL6G5%2FurtuPowDzPXSVyZiLeNwsLLjj%2BvqFf7gbvhRsbLK9aefN6EkCc4FtU9psBT15KzMaPGNnIrTgmFl51mG5T8wBJr0BsqGcsV2oppV%2BvS7IsjwOAMVTvH%2FT7OILnqwiyuDl3Oki1R9yREhksUFfyHocv1GtHc55H7ajNXY1TxA%2FkeFenU%2FrHjkq9CtDOotMW1bqzo8UFm3SGclI2YnsLa2BRGtRMgpKb7kfAI9mvCuzP42c5N54ZVcSVpP2t4cCMdQwKO4aDDkL0MNrWz9MGOqUBNjw8Waq9eoUBSDZBRmkpGLkyS8ZK%2FSZuQqMRw%2B4uJ%2Ba4I8R8OYr2t3x%2BkJ5B6XHkJuJ8FpahGdzbigtUlBIuUzbwE5DKYF41lALDtcOAiCl0MNdp206nUuaPIS6%2BrGz52KuoDTLyZeANbO7f%2B4MiSo7Ro%2FZW7dSDR3p92BqIugOe8bTX0%2F18lBKtmmSthO1INDMG7tE%2BLjF2c84e3JSdgp%2F7hi4i&X-Amz-Signature=7691711491caa453606a2c12a9dcc19b130d7507fbcbcd34d6b796cd4747db54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

