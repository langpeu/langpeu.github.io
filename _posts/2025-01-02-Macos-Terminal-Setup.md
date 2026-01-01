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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G22W67P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T100257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIB%2B%2FFtLBS8sbLrml%2FxQbtZ4YIIu7cdnhMv%2BldSLa05ITAiBzsnNxJud52cBPxSKLlaClxkuot0EJ2yRocyrzAGbGqyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs%2BHuzxVL3FTd%2FigKtwDUJpd4M%2Bg1XXDFUdSuG3hfqxPtly%2Bsbit%2FiqXjc3SvBXqfaDSOk3xht4gCx%2FRh5qj5o6GwCsa9QoiRQVF%2F%2BBdRmldlH6frHdnjukpC7GoupFrQYAkeQEawEESpccxN7AT5TJg3wL8DUBbk1sWaLL%2FYOdeBSryR9ig4L7bVDbnt38y6RPbCXGIxniryabhat6AUXZNtZcs3ygqUYZAeOtR2O9sMkq0myNIVIlvpwv3YAG9wMrt1dlKLPlxldS4kVXJ73yms%2FSzVGcdUEAGVpJJmBgWkRGfqGeFXCQoqD%2B6XBs1zpN5kzRmwZySGUGWnXiw8PCB7epoKRPvN%2BTXdJIp5eV%2FLIVLdy1ohCSD32ssXpHNnmt%2BJ4brNxNzviWkBvIlnennn9PAqKlo65zlQdfmxFdBVOpXooEAidOHpWuMERZ4OQtc5fNLKTrJZX3NWzo9t18DNqwl47t1vJoPB0ExrHe184EAwQPnFSNCIrF0mbGYZg0I8nYMRAJIU5oF14DPQ59r%2BPXRKtjCWtBbs51Y6%2BF%2BkMr7qp%2FLDH4Ayoa0EcP2zAzcdLDq2G3sji%2BiMGSK5CzlDJZ4VfgucV%2FWt8%2FGOmBO8kmaXIoHiXkzsLvBM9AlloCwk749HGOEvDIwzqbYygY6pgGsAQN7Cv23jJFCszn6nB%2F2Yl6IgsUCkoLZOgVn8GzgiME6G61XovebC7eosy6p%2BoExZADWpf7B%2B6Od2GWEHGBCqUUNbFYWMcJV03ehPTJ%2FKjcaTthz7g37K4tk6%2Bb%2FppSOxsfRm3KYiSp3T8ZAruWLIArNPQY70Q5EOV%2FUXlV74B8JM470VdDzMqiDK50tfduVdBiIx1LqOYbgHaCPwkr7rvNP1ejN&X-Amz-Signature=2acc80db8f05d68694bed62e32d8290243c2df9a938642540676be1a49017554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G22W67P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T100257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIB%2B%2FFtLBS8sbLrml%2FxQbtZ4YIIu7cdnhMv%2BldSLa05ITAiBzsnNxJud52cBPxSKLlaClxkuot0EJ2yRocyrzAGbGqyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs%2BHuzxVL3FTd%2FigKtwDUJpd4M%2Bg1XXDFUdSuG3hfqxPtly%2Bsbit%2FiqXjc3SvBXqfaDSOk3xht4gCx%2FRh5qj5o6GwCsa9QoiRQVF%2F%2BBdRmldlH6frHdnjukpC7GoupFrQYAkeQEawEESpccxN7AT5TJg3wL8DUBbk1sWaLL%2FYOdeBSryR9ig4L7bVDbnt38y6RPbCXGIxniryabhat6AUXZNtZcs3ygqUYZAeOtR2O9sMkq0myNIVIlvpwv3YAG9wMrt1dlKLPlxldS4kVXJ73yms%2FSzVGcdUEAGVpJJmBgWkRGfqGeFXCQoqD%2B6XBs1zpN5kzRmwZySGUGWnXiw8PCB7epoKRPvN%2BTXdJIp5eV%2FLIVLdy1ohCSD32ssXpHNnmt%2BJ4brNxNzviWkBvIlnennn9PAqKlo65zlQdfmxFdBVOpXooEAidOHpWuMERZ4OQtc5fNLKTrJZX3NWzo9t18DNqwl47t1vJoPB0ExrHe184EAwQPnFSNCIrF0mbGYZg0I8nYMRAJIU5oF14DPQ59r%2BPXRKtjCWtBbs51Y6%2BF%2BkMr7qp%2FLDH4Ayoa0EcP2zAzcdLDq2G3sji%2BiMGSK5CzlDJZ4VfgucV%2FWt8%2FGOmBO8kmaXIoHiXkzsLvBM9AlloCwk749HGOEvDIwzqbYygY6pgGsAQN7Cv23jJFCszn6nB%2F2Yl6IgsUCkoLZOgVn8GzgiME6G61XovebC7eosy6p%2BoExZADWpf7B%2B6Od2GWEHGBCqUUNbFYWMcJV03ehPTJ%2FKjcaTthz7g37K4tk6%2Bb%2FppSOxsfRm3KYiSp3T8ZAruWLIArNPQY70Q5EOV%2FUXlV74B8JM470VdDzMqiDK50tfduVdBiIx1LqOYbgHaCPwkr7rvNP1ejN&X-Amz-Signature=7855321349dc448b0bbb8905a07993b065d78f17b66604b63470f4d29912931c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G22W67P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T100257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIB%2B%2FFtLBS8sbLrml%2FxQbtZ4YIIu7cdnhMv%2BldSLa05ITAiBzsnNxJud52cBPxSKLlaClxkuot0EJ2yRocyrzAGbGqyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs%2BHuzxVL3FTd%2FigKtwDUJpd4M%2Bg1XXDFUdSuG3hfqxPtly%2Bsbit%2FiqXjc3SvBXqfaDSOk3xht4gCx%2FRh5qj5o6GwCsa9QoiRQVF%2F%2BBdRmldlH6frHdnjukpC7GoupFrQYAkeQEawEESpccxN7AT5TJg3wL8DUBbk1sWaLL%2FYOdeBSryR9ig4L7bVDbnt38y6RPbCXGIxniryabhat6AUXZNtZcs3ygqUYZAeOtR2O9sMkq0myNIVIlvpwv3YAG9wMrt1dlKLPlxldS4kVXJ73yms%2FSzVGcdUEAGVpJJmBgWkRGfqGeFXCQoqD%2B6XBs1zpN5kzRmwZySGUGWnXiw8PCB7epoKRPvN%2BTXdJIp5eV%2FLIVLdy1ohCSD32ssXpHNnmt%2BJ4brNxNzviWkBvIlnennn9PAqKlo65zlQdfmxFdBVOpXooEAidOHpWuMERZ4OQtc5fNLKTrJZX3NWzo9t18DNqwl47t1vJoPB0ExrHe184EAwQPnFSNCIrF0mbGYZg0I8nYMRAJIU5oF14DPQ59r%2BPXRKtjCWtBbs51Y6%2BF%2BkMr7qp%2FLDH4Ayoa0EcP2zAzcdLDq2G3sji%2BiMGSK5CzlDJZ4VfgucV%2FWt8%2FGOmBO8kmaXIoHiXkzsLvBM9AlloCwk749HGOEvDIwzqbYygY6pgGsAQN7Cv23jJFCszn6nB%2F2Yl6IgsUCkoLZOgVn8GzgiME6G61XovebC7eosy6p%2BoExZADWpf7B%2B6Od2GWEHGBCqUUNbFYWMcJV03ehPTJ%2FKjcaTthz7g37K4tk6%2Bb%2FppSOxsfRm3KYiSp3T8ZAruWLIArNPQY70Q5EOV%2FUXlV74B8JM470VdDzMqiDK50tfduVdBiIx1LqOYbgHaCPwkr7rvNP1ejN&X-Amz-Signature=be989022fe85fb727e00f118057280049db9af4b524366bf8b2e1dbd75bd5ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

