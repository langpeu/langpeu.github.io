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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6RQIYC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T165142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCuPQbEPwhKtHV6h%2FIkTDi4RpV0ARIrRg0aGrRDQ0M4gIhAJ%2BCG2UYLVVCz%2FuEatRqzxLUnczo2UL5Wuj1wdoptnluKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc3fb0VsX8dZuAxEUq3AOimGG6pJkcwK4fN6nEvatgrsiCJ8RjzASgTcQ7kL9EJ5%2FjTXjtduFYXa2Q6PFWY%2BYXFBA9GHp2MFu2jzh8ihKIRG69qtxMTnbQoGuSjXMCJ4lYM1IXtmbiFXYG5XlJDe5OVZ%2FPFuR4YlimT1n85E9zZ1R027Ke5ScvhhvkGgFRFOkAuDK1iI33L7AqCuYqb324qSPejCJRx7iADgvhz1saGmrkOl%2BW8462UzdT3fWyc0Yn899JXTL5l9vdiXAtu%2B2nWg0RSBvZOXr790jZS%2FcjF2%2FVYQL7kzdu0FDGgbrm1UByUVhUaReS49pqCSJN%2F%2F0ylTS3feqFsx3MjIGPXGyP00eSYJ%2FmHyBH2x2v51glMp8MFhm0F4AWMnanzQI%2Fpl0IFDs7TOxgs6BGG0BUPcpUB7OOQiHQdG0u4vpMiD72ArJlqi22zBCxvUD%2B4B7Bl%2Bzi30591ACtfw%2FQW%2FOCCZOm9n%2BEaHHE5Da%2FMU2%2FjkT8tYJ4DEKRlzlvZnzkKdrpSa1uK%2BjH54VXA91uwJRzlX26vQ28jNmGSoKQBoG9zNetsIGPeLjWxyGyJ6w7nm6wzK4KN87CoeH%2BHXOn3gw7nOnhfNEFCF6MvJCHuQT2%2FIcvA8y4afJ2Gv86gVBNkTCq5tnKBjqkAcetea%2B4WLerwyo4vfM9OQvjeg7075d3xdwE4yZurFc7Ox46Bq3rUFppTBi657EzBqN8Z7%2BLC3qvpLLZym01Y00nHZ391j%2BhCHoH1wQgQYps%2BlWJH5E70ppJpAK91DjOQZU8xHOZYy%2BghyUxk%2FOw2cOUqc9bCqivhqOlqSm%2Blhv0oQrBFqN2oOvII3iEStxR8gkAiwLY%2F2R4TXGNR73eSs7mhKfg&X-Amz-Signature=edeb21febe52c9e85fa69a34a4135bf5d856c2b3f1327c6e3c85992523f00c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6RQIYC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T165142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCuPQbEPwhKtHV6h%2FIkTDi4RpV0ARIrRg0aGrRDQ0M4gIhAJ%2BCG2UYLVVCz%2FuEatRqzxLUnczo2UL5Wuj1wdoptnluKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc3fb0VsX8dZuAxEUq3AOimGG6pJkcwK4fN6nEvatgrsiCJ8RjzASgTcQ7kL9EJ5%2FjTXjtduFYXa2Q6PFWY%2BYXFBA9GHp2MFu2jzh8ihKIRG69qtxMTnbQoGuSjXMCJ4lYM1IXtmbiFXYG5XlJDe5OVZ%2FPFuR4YlimT1n85E9zZ1R027Ke5ScvhhvkGgFRFOkAuDK1iI33L7AqCuYqb324qSPejCJRx7iADgvhz1saGmrkOl%2BW8462UzdT3fWyc0Yn899JXTL5l9vdiXAtu%2B2nWg0RSBvZOXr790jZS%2FcjF2%2FVYQL7kzdu0FDGgbrm1UByUVhUaReS49pqCSJN%2F%2F0ylTS3feqFsx3MjIGPXGyP00eSYJ%2FmHyBH2x2v51glMp8MFhm0F4AWMnanzQI%2Fpl0IFDs7TOxgs6BGG0BUPcpUB7OOQiHQdG0u4vpMiD72ArJlqi22zBCxvUD%2B4B7Bl%2Bzi30591ACtfw%2FQW%2FOCCZOm9n%2BEaHHE5Da%2FMU2%2FjkT8tYJ4DEKRlzlvZnzkKdrpSa1uK%2BjH54VXA91uwJRzlX26vQ28jNmGSoKQBoG9zNetsIGPeLjWxyGyJ6w7nm6wzK4KN87CoeH%2BHXOn3gw7nOnhfNEFCF6MvJCHuQT2%2FIcvA8y4afJ2Gv86gVBNkTCq5tnKBjqkAcetea%2B4WLerwyo4vfM9OQvjeg7075d3xdwE4yZurFc7Ox46Bq3rUFppTBi657EzBqN8Z7%2BLC3qvpLLZym01Y00nHZ391j%2BhCHoH1wQgQYps%2BlWJH5E70ppJpAK91DjOQZU8xHOZYy%2BghyUxk%2FOw2cOUqc9bCqivhqOlqSm%2Blhv0oQrBFqN2oOvII3iEStxR8gkAiwLY%2F2R4TXGNR73eSs7mhKfg&X-Amz-Signature=137e2f9ac8d7a3c289f90b6dd11d6f9ecf5f4c70d99f36671136b694d1330c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6RQIYC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T165142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCuPQbEPwhKtHV6h%2FIkTDi4RpV0ARIrRg0aGrRDQ0M4gIhAJ%2BCG2UYLVVCz%2FuEatRqzxLUnczo2UL5Wuj1wdoptnluKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc3fb0VsX8dZuAxEUq3AOimGG6pJkcwK4fN6nEvatgrsiCJ8RjzASgTcQ7kL9EJ5%2FjTXjtduFYXa2Q6PFWY%2BYXFBA9GHp2MFu2jzh8ihKIRG69qtxMTnbQoGuSjXMCJ4lYM1IXtmbiFXYG5XlJDe5OVZ%2FPFuR4YlimT1n85E9zZ1R027Ke5ScvhhvkGgFRFOkAuDK1iI33L7AqCuYqb324qSPejCJRx7iADgvhz1saGmrkOl%2BW8462UzdT3fWyc0Yn899JXTL5l9vdiXAtu%2B2nWg0RSBvZOXr790jZS%2FcjF2%2FVYQL7kzdu0FDGgbrm1UByUVhUaReS49pqCSJN%2F%2F0ylTS3feqFsx3MjIGPXGyP00eSYJ%2FmHyBH2x2v51glMp8MFhm0F4AWMnanzQI%2Fpl0IFDs7TOxgs6BGG0BUPcpUB7OOQiHQdG0u4vpMiD72ArJlqi22zBCxvUD%2B4B7Bl%2Bzi30591ACtfw%2FQW%2FOCCZOm9n%2BEaHHE5Da%2FMU2%2FjkT8tYJ4DEKRlzlvZnzkKdrpSa1uK%2BjH54VXA91uwJRzlX26vQ28jNmGSoKQBoG9zNetsIGPeLjWxyGyJ6w7nm6wzK4KN87CoeH%2BHXOn3gw7nOnhfNEFCF6MvJCHuQT2%2FIcvA8y4afJ2Gv86gVBNkTCq5tnKBjqkAcetea%2B4WLerwyo4vfM9OQvjeg7075d3xdwE4yZurFc7Ox46Bq3rUFppTBi657EzBqN8Z7%2BLC3qvpLLZym01Y00nHZ391j%2BhCHoH1wQgQYps%2BlWJH5E70ppJpAK91DjOQZU8xHOZYy%2BghyUxk%2FOw2cOUqc9bCqivhqOlqSm%2Blhv0oQrBFqN2oOvII3iEStxR8gkAiwLY%2F2R4TXGNR73eSs7mhKfg&X-Amz-Signature=57042d7437f3499a6ff5007ba6e0c0aa0e6041988b2902f018506df7ce80d3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

