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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3LDUMF%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T072430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAyZ%2FTC%2BMOiJf2Yfz%2BZr9276WdpgttT305FfaoesCG8iAiAsA%2BdmnoYXnunRzccqXGTb90%2BNXbAmL6rDEGMaw%2BKEBCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpDPHBboFzrJsE6GfKtwDy9U0bcwgsRn%2FYMhFzJK119mD2uWPQDaMXQ2E%2FpIG5BAjQlCjvItLitvfYSQFjViM%2FQ28bObpR2Vpz2YfOsNrMbHm7pkuuYJrPX5CB8BzO2fup8PklyAPEOtS5o2I95aA0sm13CdAJox%2FMgpR8wiI%2FyrLZVSsYHiGoTtWiFhOydmUsN2cm4k%2B9GoK%2B%2FlnCSaLx%2BBFQUa2i3yeXMUDCW%2BSJhkIus7tS%2F6ne0dzzWoQHGJbpUDUBeRU6rogaLkFLHJgzZcxEEIuio10knOi2KZCuxxBUwKWYNS4r6HK%2F1IR9WIUnt4bA6e%2FVAoRWombG7ZCw0HUkrPnD6%2B6dNpQ52%2B1AhY5D%2Ffy8eGp4C4hk3mg1VFKWJDj9Q0ASYerORuGOHftpA0LoqNXcneexOxoBoKhBbi9dYSJRIV61tbWBAzRhr7G8vKbVBeVDhAdTdALf4zkSnnAo2IwWuMSkk3s0Bu8dlZriGIZ%2BPB92jGNpUzdCBxKl7tfI1syy%2BiNFPsS%2FfE20Qj0pxuiOpff35WBUxEQwmcgGzaFqGicgW9qKM1DJHuTy5bR37rxpo%2B27sBfDZFd0nazZJUsU7B%2Fcc834eKyZwtXK2C98xnLpHYUecn%2BOXFoN1enNdxE8eFIFfYwwISF2AY6pgGCdYK24gDcFf8VzHxixC7O8t%2F6qldIgjKnXHBySktuAQs5XO7GwlDEQ5KHmLGzYTd2daOjzEJFBbatenx0ij%2Ba6lKTyjJtblRKz0636hXZvGOHkpor3qtJR9OEq7qm8Pd6MEwK%2FERedAFihbKQpnnud%2BkO77LSeiwMmqvzKoOOm3vA%2BkbI33dk6Thhfm8zu8n18IdlDdiaeZd4FYxyV8juNURhPVRm&X-Amz-Signature=fff05d528933b51778040d2e89fb86f19e3739a1bd930ae7d298944bf4ffd657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3LDUMF%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T072430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAyZ%2FTC%2BMOiJf2Yfz%2BZr9276WdpgttT305FfaoesCG8iAiAsA%2BdmnoYXnunRzccqXGTb90%2BNXbAmL6rDEGMaw%2BKEBCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpDPHBboFzrJsE6GfKtwDy9U0bcwgsRn%2FYMhFzJK119mD2uWPQDaMXQ2E%2FpIG5BAjQlCjvItLitvfYSQFjViM%2FQ28bObpR2Vpz2YfOsNrMbHm7pkuuYJrPX5CB8BzO2fup8PklyAPEOtS5o2I95aA0sm13CdAJox%2FMgpR8wiI%2FyrLZVSsYHiGoTtWiFhOydmUsN2cm4k%2B9GoK%2B%2FlnCSaLx%2BBFQUa2i3yeXMUDCW%2BSJhkIus7tS%2F6ne0dzzWoQHGJbpUDUBeRU6rogaLkFLHJgzZcxEEIuio10knOi2KZCuxxBUwKWYNS4r6HK%2F1IR9WIUnt4bA6e%2FVAoRWombG7ZCw0HUkrPnD6%2B6dNpQ52%2B1AhY5D%2Ffy8eGp4C4hk3mg1VFKWJDj9Q0ASYerORuGOHftpA0LoqNXcneexOxoBoKhBbi9dYSJRIV61tbWBAzRhr7G8vKbVBeVDhAdTdALf4zkSnnAo2IwWuMSkk3s0Bu8dlZriGIZ%2BPB92jGNpUzdCBxKl7tfI1syy%2BiNFPsS%2FfE20Qj0pxuiOpff35WBUxEQwmcgGzaFqGicgW9qKM1DJHuTy5bR37rxpo%2B27sBfDZFd0nazZJUsU7B%2Fcc834eKyZwtXK2C98xnLpHYUecn%2BOXFoN1enNdxE8eFIFfYwwISF2AY6pgGCdYK24gDcFf8VzHxixC7O8t%2F6qldIgjKnXHBySktuAQs5XO7GwlDEQ5KHmLGzYTd2daOjzEJFBbatenx0ij%2Ba6lKTyjJtblRKz0636hXZvGOHkpor3qtJR9OEq7qm8Pd6MEwK%2FERedAFihbKQpnnud%2BkO77LSeiwMmqvzKoOOm3vA%2BkbI33dk6Thhfm8zu8n18IdlDdiaeZd4FYxyV8juNURhPVRm&X-Amz-Signature=d0bb30d9416f7913d075c1dedf91835bc0bbdab7095f9e1408688f66e2e740e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3LDUMF%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T072430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAyZ%2FTC%2BMOiJf2Yfz%2BZr9276WdpgttT305FfaoesCG8iAiAsA%2BdmnoYXnunRzccqXGTb90%2BNXbAmL6rDEGMaw%2BKEBCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpDPHBboFzrJsE6GfKtwDy9U0bcwgsRn%2FYMhFzJK119mD2uWPQDaMXQ2E%2FpIG5BAjQlCjvItLitvfYSQFjViM%2FQ28bObpR2Vpz2YfOsNrMbHm7pkuuYJrPX5CB8BzO2fup8PklyAPEOtS5o2I95aA0sm13CdAJox%2FMgpR8wiI%2FyrLZVSsYHiGoTtWiFhOydmUsN2cm4k%2B9GoK%2B%2FlnCSaLx%2BBFQUa2i3yeXMUDCW%2BSJhkIus7tS%2F6ne0dzzWoQHGJbpUDUBeRU6rogaLkFLHJgzZcxEEIuio10knOi2KZCuxxBUwKWYNS4r6HK%2F1IR9WIUnt4bA6e%2FVAoRWombG7ZCw0HUkrPnD6%2B6dNpQ52%2B1AhY5D%2Ffy8eGp4C4hk3mg1VFKWJDj9Q0ASYerORuGOHftpA0LoqNXcneexOxoBoKhBbi9dYSJRIV61tbWBAzRhr7G8vKbVBeVDhAdTdALf4zkSnnAo2IwWuMSkk3s0Bu8dlZriGIZ%2BPB92jGNpUzdCBxKl7tfI1syy%2BiNFPsS%2FfE20Qj0pxuiOpff35WBUxEQwmcgGzaFqGicgW9qKM1DJHuTy5bR37rxpo%2B27sBfDZFd0nazZJUsU7B%2Fcc834eKyZwtXK2C98xnLpHYUecn%2BOXFoN1enNdxE8eFIFfYwwISF2AY6pgGCdYK24gDcFf8VzHxixC7O8t%2F6qldIgjKnXHBySktuAQs5XO7GwlDEQ5KHmLGzYTd2daOjzEJFBbatenx0ij%2Ba6lKTyjJtblRKz0636hXZvGOHkpor3qtJR9OEq7qm8Pd6MEwK%2FERedAFihbKQpnnud%2BkO77LSeiwMmqvzKoOOm3vA%2BkbI33dk6Thhfm8zu8n18IdlDdiaeZd4FYxyV8juNURhPVRm&X-Amz-Signature=65937c9bd35a8b6c88389f1da5d07bb3303a34b5edc045ecc1fbb320df5e6539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

