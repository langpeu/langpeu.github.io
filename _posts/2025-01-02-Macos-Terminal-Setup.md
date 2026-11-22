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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUNY234%2F20261122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261122T115955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4U2TlOoi6Hk8exIjGW2Vb7olHGbzz%2FuW6n7L5UcXP6QIhAKHBnza8jE63NS4R0P3qMwFlGT1U8eQfrx0%2FNp8U66LUKv8DCFsQABoMNjM3NDIzMTgzODA1IgwdI1pMSsJTYsEMKzwq3APh%2BTZD8eB5ldEx5EeqsKMMrPTISCdvoKDHoTuiB4q2U5YlNZabWxhBARZ2jGNCuyq7hqtd1BkSNPcm4bl5L1VG8TrvLYVrW2%2BY9LJ1fxSNwYNT60I6UxHdaPMVxGns5JlwzuuD%2FnP%2Bqc%2BT9QvpiTY%2FRvjhTNMnGJSX6GfOgTkRHaevvBgMd1QBOTV6tDDxnP1Kxp3IY5r9tBE5B1Lw16ydNw6Tz5OHXtuZhJdeEeFsvRwkDvTV5CsHJBrSpo9i9%2Bt9gQ6rlYwcioi56npXzoH0XpsamwbGeVDKgInwb%2FwKw0DhNNk69ugq6M08OwQad%2B5rcUUcZH0C8QFktbG%2Ftdmpxy78ICQyZY8NHANTcWZ0w7dShBSapHg3VsqRkQda28pnMKonnUtywyGLRa1xPEMo1Mx8QUftSlYYMAuMAdQK8CRWBPMgTvNhlWvEgFRd%2BKxNr8n8HVBVzGFDQmgzNUrio%2F%2FZicILLZaE2xjC3ByPEZTUw0%2Fxm57o%2BJbi9LvTQr%2FUufuDKdSg22gC6BDK4EZUUqb0R9KBggcWVD0M5lUf7q3UdMf4rlrItoxg7Jnz6NksIYFpgqtseo4QZsniz9%2FTzezsose2dVqyT3Cqkw5riFwnwGNl7LikL3AJvDCSgIvYBjqkAcALHlWHb6EIKIoBkFtFxi4CctpRl4ntnFZeU6mvOFZcKET%2FZikVxLMsCbp8TgGqkDYfbVFJeflE2I9kXnsMI6IOfzm3QguFx72vPMtwasus7qhX5%2Bml8ogwfnxZfCC56WmjikbTN%2F3DXtUBLXJa64pXUpJQj8xgpgK8vWTpW4MTgVKocvse1tCRqEC%2F8UnNxd6BZWiUf%2Fte3y6AYJyu6y5mjGzV&X-Amz-Signature=8ca9e0114b9103e7ea20ccf744ae90e7cd6e24fcc86b1cc8576e6cc09594ca59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUNY234%2F20261122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261122T115955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4U2TlOoi6Hk8exIjGW2Vb7olHGbzz%2FuW6n7L5UcXP6QIhAKHBnza8jE63NS4R0P3qMwFlGT1U8eQfrx0%2FNp8U66LUKv8DCFsQABoMNjM3NDIzMTgzODA1IgwdI1pMSsJTYsEMKzwq3APh%2BTZD8eB5ldEx5EeqsKMMrPTISCdvoKDHoTuiB4q2U5YlNZabWxhBARZ2jGNCuyq7hqtd1BkSNPcm4bl5L1VG8TrvLYVrW2%2BY9LJ1fxSNwYNT60I6UxHdaPMVxGns5JlwzuuD%2FnP%2Bqc%2BT9QvpiTY%2FRvjhTNMnGJSX6GfOgTkRHaevvBgMd1QBOTV6tDDxnP1Kxp3IY5r9tBE5B1Lw16ydNw6Tz5OHXtuZhJdeEeFsvRwkDvTV5CsHJBrSpo9i9%2Bt9gQ6rlYwcioi56npXzoH0XpsamwbGeVDKgInwb%2FwKw0DhNNk69ugq6M08OwQad%2B5rcUUcZH0C8QFktbG%2Ftdmpxy78ICQyZY8NHANTcWZ0w7dShBSapHg3VsqRkQda28pnMKonnUtywyGLRa1xPEMo1Mx8QUftSlYYMAuMAdQK8CRWBPMgTvNhlWvEgFRd%2BKxNr8n8HVBVzGFDQmgzNUrio%2F%2FZicILLZaE2xjC3ByPEZTUw0%2Fxm57o%2BJbi9LvTQr%2FUufuDKdSg22gC6BDK4EZUUqb0R9KBggcWVD0M5lUf7q3UdMf4rlrItoxg7Jnz6NksIYFpgqtseo4QZsniz9%2FTzezsose2dVqyT3Cqkw5riFwnwGNl7LikL3AJvDCSgIvYBjqkAcALHlWHb6EIKIoBkFtFxi4CctpRl4ntnFZeU6mvOFZcKET%2FZikVxLMsCbp8TgGqkDYfbVFJeflE2I9kXnsMI6IOfzm3QguFx72vPMtwasus7qhX5%2Bml8ogwfnxZfCC56WmjikbTN%2F3DXtUBLXJa64pXUpJQj8xgpgK8vWTpW4MTgVKocvse1tCRqEC%2F8UnNxd6BZWiUf%2Fte3y6AYJyu6y5mjGzV&X-Amz-Signature=c723bc10b5818bd3c2ffd1347f094dd8b484207414d36bbed11727a999953760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUNY234%2F20261122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261122T115955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4U2TlOoi6Hk8exIjGW2Vb7olHGbzz%2FuW6n7L5UcXP6QIhAKHBnza8jE63NS4R0P3qMwFlGT1U8eQfrx0%2FNp8U66LUKv8DCFsQABoMNjM3NDIzMTgzODA1IgwdI1pMSsJTYsEMKzwq3APh%2BTZD8eB5ldEx5EeqsKMMrPTISCdvoKDHoTuiB4q2U5YlNZabWxhBARZ2jGNCuyq7hqtd1BkSNPcm4bl5L1VG8TrvLYVrW2%2BY9LJ1fxSNwYNT60I6UxHdaPMVxGns5JlwzuuD%2FnP%2Bqc%2BT9QvpiTY%2FRvjhTNMnGJSX6GfOgTkRHaevvBgMd1QBOTV6tDDxnP1Kxp3IY5r9tBE5B1Lw16ydNw6Tz5OHXtuZhJdeEeFsvRwkDvTV5CsHJBrSpo9i9%2Bt9gQ6rlYwcioi56npXzoH0XpsamwbGeVDKgInwb%2FwKw0DhNNk69ugq6M08OwQad%2B5rcUUcZH0C8QFktbG%2Ftdmpxy78ICQyZY8NHANTcWZ0w7dShBSapHg3VsqRkQda28pnMKonnUtywyGLRa1xPEMo1Mx8QUftSlYYMAuMAdQK8CRWBPMgTvNhlWvEgFRd%2BKxNr8n8HVBVzGFDQmgzNUrio%2F%2FZicILLZaE2xjC3ByPEZTUw0%2Fxm57o%2BJbi9LvTQr%2FUufuDKdSg22gC6BDK4EZUUqb0R9KBggcWVD0M5lUf7q3UdMf4rlrItoxg7Jnz6NksIYFpgqtseo4QZsniz9%2FTzezsose2dVqyT3Cqkw5riFwnwGNl7LikL3AJvDCSgIvYBjqkAcALHlWHb6EIKIoBkFtFxi4CctpRl4ntnFZeU6mvOFZcKET%2FZikVxLMsCbp8TgGqkDYfbVFJeflE2I9kXnsMI6IOfzm3QguFx72vPMtwasus7qhX5%2Bml8ogwfnxZfCC56WmjikbTN%2F3DXtUBLXJa64pXUpJQj8xgpgK8vWTpW4MTgVKocvse1tCRqEC%2F8UnNxd6BZWiUf%2Fte3y6AYJyu6y5mjGzV&X-Amz-Signature=674ce72fc45c41ab5f8b9558518be81a72c3248badae3ca9a75af374d4d07c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

