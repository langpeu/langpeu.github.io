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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHC25IK3%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T115115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDmzZCKYwzP9gOul%2FIgCghmX0f55Z01Lhlt%2BS42WD%2FRBgIhAP5hwW5HGWoIlSx8vwMs1zAVrCEEQXxmVCwEmQD2Q6LOKv8DCEQQABoMNjM3NDIzMTgzODA1Igzmeh7E56PmAsi9ARMq3AMCFMzSbPH6sujEJT5q1s3szhive9bwIL0nqCM1i2iXNQz18Kpr7FTxvI4WvM4%2BKooYV1%2FhuzADNRZR%2Fjj9yjbMhxX1qVLK1S9KGVolMryRhVNT7Zzwn4RsQeyd5vuPC%2Fo%2FlKqIhMupLHqflPozOaYL8i17rl0apKWEv72DZwiVjZyME7nmlYksZ7P%2BzRF2XtVSVhNhHQWVSr1SlWYZWEac0O6KfGA4eKK%2BdnDwjL60NpDk9Rh619kScLhltardNUVM4Pxte5akcndEQKp44exCwssEflXEg1L2o9vd6jAbzBa4JJRz9cfZlzzGgCiyDxwuNDlTHxwPe2ga8nDS7%2Ba9Cb6lhpLWJgZF7knqeGe4knOHbuTmIa0tnWGMYJZtXrD74uUnUr7dbg8S0ZakeJnWNHXnqBRevMpoY%2F2TSLDNRQPIDeS%2B4jz2FVSmLo4MDZuFhSx%2FyNopA6Wc35vs6a49PaA2B7GGIcdFdxEbFDvsdtG85fRTzoxLsfGTAN1ruIZvFxPtWegOsO3eWZrEz9HQduR%2BF6xpV3f6YnywsxBNmQqCLkHDvf3FR9GQq9Dm%2Fpndeiz2%2FRSyekNwpZcdeJ%2B1QHGDBHMR5hddMNMb90cBp8BM5gIxS2Aa7KzQJzCj%2BYXYBjqkAQzSUSQSqrEljfKzq2e9FptF6fXti3%2BKx0HOy%2FCSyJMsTcrx9OC6WZxAAIhKud0BsI4bFPc8g6jB660lBwa5Ctzq8L1teyAC1o9trmyItXBF0OauAaXJ6GuSRsXzkSZJrJdXwKtlQ%2BuxfxCEB7RnAVREmHc392CzEyQwsxX9E2zwr9v08IEUezD2iTvwM9BccKuw8HA6oBaGAI4e4h9TF8bx5yN4&X-Amz-Signature=ad102bb410ffea92dee38650e6d4fc48b233c7ac1096683b3b494d95b806e75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHC25IK3%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T115115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDmzZCKYwzP9gOul%2FIgCghmX0f55Z01Lhlt%2BS42WD%2FRBgIhAP5hwW5HGWoIlSx8vwMs1zAVrCEEQXxmVCwEmQD2Q6LOKv8DCEQQABoMNjM3NDIzMTgzODA1Igzmeh7E56PmAsi9ARMq3AMCFMzSbPH6sujEJT5q1s3szhive9bwIL0nqCM1i2iXNQz18Kpr7FTxvI4WvM4%2BKooYV1%2FhuzADNRZR%2Fjj9yjbMhxX1qVLK1S9KGVolMryRhVNT7Zzwn4RsQeyd5vuPC%2Fo%2FlKqIhMupLHqflPozOaYL8i17rl0apKWEv72DZwiVjZyME7nmlYksZ7P%2BzRF2XtVSVhNhHQWVSr1SlWYZWEac0O6KfGA4eKK%2BdnDwjL60NpDk9Rh619kScLhltardNUVM4Pxte5akcndEQKp44exCwssEflXEg1L2o9vd6jAbzBa4JJRz9cfZlzzGgCiyDxwuNDlTHxwPe2ga8nDS7%2Ba9Cb6lhpLWJgZF7knqeGe4knOHbuTmIa0tnWGMYJZtXrD74uUnUr7dbg8S0ZakeJnWNHXnqBRevMpoY%2F2TSLDNRQPIDeS%2B4jz2FVSmLo4MDZuFhSx%2FyNopA6Wc35vs6a49PaA2B7GGIcdFdxEbFDvsdtG85fRTzoxLsfGTAN1ruIZvFxPtWegOsO3eWZrEz9HQduR%2BF6xpV3f6YnywsxBNmQqCLkHDvf3FR9GQq9Dm%2Fpndeiz2%2FRSyekNwpZcdeJ%2B1QHGDBHMR5hddMNMb90cBp8BM5gIxS2Aa7KzQJzCj%2BYXYBjqkAQzSUSQSqrEljfKzq2e9FptF6fXti3%2BKx0HOy%2FCSyJMsTcrx9OC6WZxAAIhKud0BsI4bFPc8g6jB660lBwa5Ctzq8L1teyAC1o9trmyItXBF0OauAaXJ6GuSRsXzkSZJrJdXwKtlQ%2BuxfxCEB7RnAVREmHc392CzEyQwsxX9E2zwr9v08IEUezD2iTvwM9BccKuw8HA6oBaGAI4e4h9TF8bx5yN4&X-Amz-Signature=952d2e49c25adbdd13c699ab720be8b31ea4db6302bc10744c9c3418aa47cb7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHC25IK3%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T115115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDmzZCKYwzP9gOul%2FIgCghmX0f55Z01Lhlt%2BS42WD%2FRBgIhAP5hwW5HGWoIlSx8vwMs1zAVrCEEQXxmVCwEmQD2Q6LOKv8DCEQQABoMNjM3NDIzMTgzODA1Igzmeh7E56PmAsi9ARMq3AMCFMzSbPH6sujEJT5q1s3szhive9bwIL0nqCM1i2iXNQz18Kpr7FTxvI4WvM4%2BKooYV1%2FhuzADNRZR%2Fjj9yjbMhxX1qVLK1S9KGVolMryRhVNT7Zzwn4RsQeyd5vuPC%2Fo%2FlKqIhMupLHqflPozOaYL8i17rl0apKWEv72DZwiVjZyME7nmlYksZ7P%2BzRF2XtVSVhNhHQWVSr1SlWYZWEac0O6KfGA4eKK%2BdnDwjL60NpDk9Rh619kScLhltardNUVM4Pxte5akcndEQKp44exCwssEflXEg1L2o9vd6jAbzBa4JJRz9cfZlzzGgCiyDxwuNDlTHxwPe2ga8nDS7%2Ba9Cb6lhpLWJgZF7knqeGe4knOHbuTmIa0tnWGMYJZtXrD74uUnUr7dbg8S0ZakeJnWNHXnqBRevMpoY%2F2TSLDNRQPIDeS%2B4jz2FVSmLo4MDZuFhSx%2FyNopA6Wc35vs6a49PaA2B7GGIcdFdxEbFDvsdtG85fRTzoxLsfGTAN1ruIZvFxPtWegOsO3eWZrEz9HQduR%2BF6xpV3f6YnywsxBNmQqCLkHDvf3FR9GQq9Dm%2Fpndeiz2%2FRSyekNwpZcdeJ%2B1QHGDBHMR5hddMNMb90cBp8BM5gIxS2Aa7KzQJzCj%2BYXYBjqkAQzSUSQSqrEljfKzq2e9FptF6fXti3%2BKx0HOy%2FCSyJMsTcrx9OC6WZxAAIhKud0BsI4bFPc8g6jB660lBwa5Ctzq8L1teyAC1o9trmyItXBF0OauAaXJ6GuSRsXzkSZJrJdXwKtlQ%2BuxfxCEB7RnAVREmHc392CzEyQwsxX9E2zwr9v08IEUezD2iTvwM9BccKuw8HA6oBaGAI4e4h9TF8bx5yN4&X-Amz-Signature=0881bd8a41b7960beed1699bc459b8de505207ce9cd6623fe3f1252e5587c9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

