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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUKR5DI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDSHRou9kmwFBZtG6dD5kc0BSxR%2BN8gWj3LuyUfeI%2FrZwIgN3nxEDskUR3RjtZ%2BgQLr5JEsrDy2pZZRnQWhIFxWurkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD5y6dpv8G1cJ93FzircAzLtPfiUfWr4ACREquNbMP5Cds32P2Jiei%2FkM%2FTQDM7BdoMoZdrHx7lOxiY%2BDfVnkU94NZlSHrYdW6Mljfx4sSxyTjPJ%2FlQ9%2F3HQ6uBdXXEYfFME8fMMjmOhv3FX96obmVO%2Fji2PnyUos9Iq%2FhVzuC8KM2baIvSrU1s%2Bj1lqUjc%2FLXLm8TY9JB61egNx6A3vyDfpaPpXEvifr%2FzFRxmCqo30zoWjzYO4ZFtAgHvZPe%2BB7O0a6TFwAbViLIgDSS7THJuWWqTU8PTkVWakAAdysALL%2FKPtLcf6UEQSaoHDjTovznOLFxwrFGDwbDMwKgVHOE7zFfHWhMV34ZIbXS381nA%2Bsk1FE96d%2FUzE3vPo%2BzP8V35Q4YrIIaLij7R95LsOOlJE3T0eGYQF3J6LatfkoE0%2FCExJuyyLsJzVN6oJfUzFbc2ogKr42mdoseyM1HI9aH3Tvgma2W3tHrdrXEGYB0Nw%2FRBsCh7EPMQOf5MVq5hSOBEpStvlXa6CZKLXsBnvFGe5e%2BANVKfGdsxyTyi093iMxTqjAqA6MTvmxndEdypbysgAQPDCXv7c8JRZrX6Qnjm1VdeoWS2jpRIF5Nf7tctKq43JaGCUIAXBbbnJJ4Dg%2FtZ6g3iuylqvWo02MNenz9MGOqUBgU2dLH%2BtfuhjILeqBl%2B38KteaJ6eIow1utJinjt0H4OVhAp29WdlYY%2Fs51pmcbxcyu8yAo%2B%2Bl5IE1GWfNq%2F7vmiK86nCZrmaneO3dBSmQVbiWDSl%2B5gEceiAd8WkkwoBVBXiDM3pYeFAZ5hgfn9WJMbVXXoSDB6U02VZiKZCSXR%2FVLQW02a2KjCqwVqUhguEy73KT5FQC3oSamDh6LcmfvhzsNYM&X-Amz-Signature=fc9d00e8ea215926f13d6ee47e5bed29d0ab515b83a48d942bead7caea145183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUKR5DI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDSHRou9kmwFBZtG6dD5kc0BSxR%2BN8gWj3LuyUfeI%2FrZwIgN3nxEDskUR3RjtZ%2BgQLr5JEsrDy2pZZRnQWhIFxWurkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD5y6dpv8G1cJ93FzircAzLtPfiUfWr4ACREquNbMP5Cds32P2Jiei%2FkM%2FTQDM7BdoMoZdrHx7lOxiY%2BDfVnkU94NZlSHrYdW6Mljfx4sSxyTjPJ%2FlQ9%2F3HQ6uBdXXEYfFME8fMMjmOhv3FX96obmVO%2Fji2PnyUos9Iq%2FhVzuC8KM2baIvSrU1s%2Bj1lqUjc%2FLXLm8TY9JB61egNx6A3vyDfpaPpXEvifr%2FzFRxmCqo30zoWjzYO4ZFtAgHvZPe%2BB7O0a6TFwAbViLIgDSS7THJuWWqTU8PTkVWakAAdysALL%2FKPtLcf6UEQSaoHDjTovznOLFxwrFGDwbDMwKgVHOE7zFfHWhMV34ZIbXS381nA%2Bsk1FE96d%2FUzE3vPo%2BzP8V35Q4YrIIaLij7R95LsOOlJE3T0eGYQF3J6LatfkoE0%2FCExJuyyLsJzVN6oJfUzFbc2ogKr42mdoseyM1HI9aH3Tvgma2W3tHrdrXEGYB0Nw%2FRBsCh7EPMQOf5MVq5hSOBEpStvlXa6CZKLXsBnvFGe5e%2BANVKfGdsxyTyi093iMxTqjAqA6MTvmxndEdypbysgAQPDCXv7c8JRZrX6Qnjm1VdeoWS2jpRIF5Nf7tctKq43JaGCUIAXBbbnJJ4Dg%2FtZ6g3iuylqvWo02MNenz9MGOqUBgU2dLH%2BtfuhjILeqBl%2B38KteaJ6eIow1utJinjt0H4OVhAp29WdlYY%2Fs51pmcbxcyu8yAo%2B%2Bl5IE1GWfNq%2F7vmiK86nCZrmaneO3dBSmQVbiWDSl%2B5gEceiAd8WkkwoBVBXiDM3pYeFAZ5hgfn9WJMbVXXoSDB6U02VZiKZCSXR%2FVLQW02a2KjCqwVqUhguEy73KT5FQC3oSamDh6LcmfvhzsNYM&X-Amz-Signature=2ccbf742eee1c8cd0088e988e565699780c38dfc3aaf22d790a4125b8f04b0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUKR5DI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDSHRou9kmwFBZtG6dD5kc0BSxR%2BN8gWj3LuyUfeI%2FrZwIgN3nxEDskUR3RjtZ%2BgQLr5JEsrDy2pZZRnQWhIFxWurkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD5y6dpv8G1cJ93FzircAzLtPfiUfWr4ACREquNbMP5Cds32P2Jiei%2FkM%2FTQDM7BdoMoZdrHx7lOxiY%2BDfVnkU94NZlSHrYdW6Mljfx4sSxyTjPJ%2FlQ9%2F3HQ6uBdXXEYfFME8fMMjmOhv3FX96obmVO%2Fji2PnyUos9Iq%2FhVzuC8KM2baIvSrU1s%2Bj1lqUjc%2FLXLm8TY9JB61egNx6A3vyDfpaPpXEvifr%2FzFRxmCqo30zoWjzYO4ZFtAgHvZPe%2BB7O0a6TFwAbViLIgDSS7THJuWWqTU8PTkVWakAAdysALL%2FKPtLcf6UEQSaoHDjTovznOLFxwrFGDwbDMwKgVHOE7zFfHWhMV34ZIbXS381nA%2Bsk1FE96d%2FUzE3vPo%2BzP8V35Q4YrIIaLij7R95LsOOlJE3T0eGYQF3J6LatfkoE0%2FCExJuyyLsJzVN6oJfUzFbc2ogKr42mdoseyM1HI9aH3Tvgma2W3tHrdrXEGYB0Nw%2FRBsCh7EPMQOf5MVq5hSOBEpStvlXa6CZKLXsBnvFGe5e%2BANVKfGdsxyTyi093iMxTqjAqA6MTvmxndEdypbysgAQPDCXv7c8JRZrX6Qnjm1VdeoWS2jpRIF5Nf7tctKq43JaGCUIAXBbbnJJ4Dg%2FtZ6g3iuylqvWo02MNenz9MGOqUBgU2dLH%2BtfuhjILeqBl%2B38KteaJ6eIow1utJinjt0H4OVhAp29WdlYY%2Fs51pmcbxcyu8yAo%2B%2Bl5IE1GWfNq%2F7vmiK86nCZrmaneO3dBSmQVbiWDSl%2B5gEceiAd8WkkwoBVBXiDM3pYeFAZ5hgfn9WJMbVXXoSDB6U02VZiKZCSXR%2FVLQW02a2KjCqwVqUhguEy73KT5FQC3oSamDh6LcmfvhzsNYM&X-Amz-Signature=a89ab1166c0f946df8b1ec4d87f967e6f75b400d4fb6bbf94663932af4b33ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

