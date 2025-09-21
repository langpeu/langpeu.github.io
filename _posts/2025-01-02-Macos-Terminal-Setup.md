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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S52BPZW%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T004601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRsTJPmNqTcEIs%2BY%2FlPlElc72vuL58KMLd%2BDT1YgtTlgIgYzppFnPnKGzaTFMHQIM68lHrPeTe%2Bq4dUl6r8ATPAaQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD1mzYjQVGXaTwlvyrcA90T2ynmv7eElSO32TSv9dxXXKlpuLF%2BLFQIJxYBOa7Z%2F%2BqXD%2BaqcIbkNb8uh%2BytT6lJs62h0YFVBJAaH52zmDJcTl2ypSLFs4Bf2I4%2BA1L6YpzuMy1EFsH%2FPK0atesYxDbUNIBc42GxIOoRLWSJQNw4A%2BL0DZLMYj74w9OKf9IUMwV7CertDw54VUpVK7GMersPozaHkqZDUCXdgr9p6akgzSEVm08kt1VNCX9lr54Tau2T1dCWL1o9%2FXa2T6J%2FdRMQ%2BFs%2FNAPnD%2FZ%2FV%2F2nLz1kSo5WIF3YC26S5a4VLy2M7xcaH6CS0ZUiVvKoiU0tPk3n%2Fvrhb849FI5f2iWeiwuAUpArL2WkYqBTbbs%2BHT6paetmfPdKvkvptDjHqKgjTiObWpPh1wv55byWsM0ZLP644t3UJjIAOZ%2F67l1kG0EjCNr26k%2BybeVLeOmTkNJJ4R4VJWhbePfOic9ExEYbqA6mtioqH7VkmXWyMm0Z%2F7tDrfDgrcEGCI9u0Mo4j%2B6xnFPyQtUoX4ft6J4psn1da6dZQp%2FxsvCMe9lDc4e4eFdeTP5O0nzNQFGNyf1wuk3W07m0lLPBK4TwTb%2B2CFDMvzAdaHcvH83688qZq%2BqpKFNV0AzSCnzv5EhjsBOEMJyMvcYGOqUBCDReBf7xdpyMry7hfOImIu1rLNTRa018YwAUVD03XZ2fyZP3IbOqrTg4PhgQsFbnxTrVwEIVzpANcRueeuPj2a6jyP9IVgp1%2FgVnCBd%2FCy1XJ20i3c6yaovl7Xmh0c4Ytu7qoI3n29gSjhZh4EHZWT0Gwd51KbRbmQnA8rnXh%2FwydUGLCcnPESQEDSb4tsD%2BcDIyCwVUY39bA%2F9Rjuidi28n9fCl&X-Amz-Signature=8cb6de6df3d92ae7fa5835197b9abffbb71b61e2c01e83a31ef5374f8b16ec2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S52BPZW%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T004601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRsTJPmNqTcEIs%2BY%2FlPlElc72vuL58KMLd%2BDT1YgtTlgIgYzppFnPnKGzaTFMHQIM68lHrPeTe%2Bq4dUl6r8ATPAaQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD1mzYjQVGXaTwlvyrcA90T2ynmv7eElSO32TSv9dxXXKlpuLF%2BLFQIJxYBOa7Z%2F%2BqXD%2BaqcIbkNb8uh%2BytT6lJs62h0YFVBJAaH52zmDJcTl2ypSLFs4Bf2I4%2BA1L6YpzuMy1EFsH%2FPK0atesYxDbUNIBc42GxIOoRLWSJQNw4A%2BL0DZLMYj74w9OKf9IUMwV7CertDw54VUpVK7GMersPozaHkqZDUCXdgr9p6akgzSEVm08kt1VNCX9lr54Tau2T1dCWL1o9%2FXa2T6J%2FdRMQ%2BFs%2FNAPnD%2FZ%2FV%2F2nLz1kSo5WIF3YC26S5a4VLy2M7xcaH6CS0ZUiVvKoiU0tPk3n%2Fvrhb849FI5f2iWeiwuAUpArL2WkYqBTbbs%2BHT6paetmfPdKvkvptDjHqKgjTiObWpPh1wv55byWsM0ZLP644t3UJjIAOZ%2F67l1kG0EjCNr26k%2BybeVLeOmTkNJJ4R4VJWhbePfOic9ExEYbqA6mtioqH7VkmXWyMm0Z%2F7tDrfDgrcEGCI9u0Mo4j%2B6xnFPyQtUoX4ft6J4psn1da6dZQp%2FxsvCMe9lDc4e4eFdeTP5O0nzNQFGNyf1wuk3W07m0lLPBK4TwTb%2B2CFDMvzAdaHcvH83688qZq%2BqpKFNV0AzSCnzv5EhjsBOEMJyMvcYGOqUBCDReBf7xdpyMry7hfOImIu1rLNTRa018YwAUVD03XZ2fyZP3IbOqrTg4PhgQsFbnxTrVwEIVzpANcRueeuPj2a6jyP9IVgp1%2FgVnCBd%2FCy1XJ20i3c6yaovl7Xmh0c4Ytu7qoI3n29gSjhZh4EHZWT0Gwd51KbRbmQnA8rnXh%2FwydUGLCcnPESQEDSb4tsD%2BcDIyCwVUY39bA%2F9Rjuidi28n9fCl&X-Amz-Signature=b0bc6298d6154853f536d48c29d2391fb37d49cf9404abb649a622ca503ded23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S52BPZW%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T004601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRsTJPmNqTcEIs%2BY%2FlPlElc72vuL58KMLd%2BDT1YgtTlgIgYzppFnPnKGzaTFMHQIM68lHrPeTe%2Bq4dUl6r8ATPAaQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD1mzYjQVGXaTwlvyrcA90T2ynmv7eElSO32TSv9dxXXKlpuLF%2BLFQIJxYBOa7Z%2F%2BqXD%2BaqcIbkNb8uh%2BytT6lJs62h0YFVBJAaH52zmDJcTl2ypSLFs4Bf2I4%2BA1L6YpzuMy1EFsH%2FPK0atesYxDbUNIBc42GxIOoRLWSJQNw4A%2BL0DZLMYj74w9OKf9IUMwV7CertDw54VUpVK7GMersPozaHkqZDUCXdgr9p6akgzSEVm08kt1VNCX9lr54Tau2T1dCWL1o9%2FXa2T6J%2FdRMQ%2BFs%2FNAPnD%2FZ%2FV%2F2nLz1kSo5WIF3YC26S5a4VLy2M7xcaH6CS0ZUiVvKoiU0tPk3n%2Fvrhb849FI5f2iWeiwuAUpArL2WkYqBTbbs%2BHT6paetmfPdKvkvptDjHqKgjTiObWpPh1wv55byWsM0ZLP644t3UJjIAOZ%2F67l1kG0EjCNr26k%2BybeVLeOmTkNJJ4R4VJWhbePfOic9ExEYbqA6mtioqH7VkmXWyMm0Z%2F7tDrfDgrcEGCI9u0Mo4j%2B6xnFPyQtUoX4ft6J4psn1da6dZQp%2FxsvCMe9lDc4e4eFdeTP5O0nzNQFGNyf1wuk3W07m0lLPBK4TwTb%2B2CFDMvzAdaHcvH83688qZq%2BqpKFNV0AzSCnzv5EhjsBOEMJyMvcYGOqUBCDReBf7xdpyMry7hfOImIu1rLNTRa018YwAUVD03XZ2fyZP3IbOqrTg4PhgQsFbnxTrVwEIVzpANcRueeuPj2a6jyP9IVgp1%2FgVnCBd%2FCy1XJ20i3c6yaovl7Xmh0c4Ytu7qoI3n29gSjhZh4EHZWT0Gwd51KbRbmQnA8rnXh%2FwydUGLCcnPESQEDSb4tsD%2BcDIyCwVUY39bA%2F9Rjuidi28n9fCl&X-Amz-Signature=85b60781f3323eb3ce554f78b2d77600156c7bde68d9b2e33dcfad3fe87ef213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


