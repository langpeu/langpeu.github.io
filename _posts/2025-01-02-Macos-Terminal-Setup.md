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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAM2L7W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T021331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCppn%2Bi5tiKzoJqAiURlwJKo5lS%2BT%2FpcGtHFNwrs5ozdQIhAIvbO7x8yQNsBpFwWi8mTfcZ18tOH0VzedKJsKQVwUPyKv8DCDMQABoMNjM3NDIzMTgzODA1IgwEoKeaTQnXqMocKLYq3ANkXBaIwkxVYDJjFQmKtnWAnYoy6LDZ1qNtRvaRJOZF62twwSwSEuC3UT%2FhujHJlBkNlLpPETLj8fmToeVh2uEE2Poxr%2B%2Fdoiq0yVmOwjV9uDF67zVUaKSzbKSYVEMrlBPtdyM1n8NyaxHUcmYb8Hf1LHyt8FKDwCxZagJNHraCSJ36MR2IPTnDNa9WRiM5JYYyirQ9D3iLma0bG0DJ6ymGOrBwIEcsedtI0ehCm3KWNnL8OZz7%2Fp0XG92Pof06jCGRIz0dW78shCHmuETHZJaovlzQ%2Bl%2B%2BaI4LIQROp4N43t6Rho3ANN53bh6YyqB75ZEtVh1ewzCo2RZioJPW0ucBbskpCYoxu4j15jmyNfCsr3HJUe8b9b2Xr3XPcKo2LW6a8Cra%2BpBuE0%2B8hOTq%2Fx5fPsjHwoEKsg3pZUbkxXRi830vQOJrTU9Ho22gU3y3nv5FqwP1ehaNaprLx2FM0RQDlL9D2c%2FsBzAwkC8INcZJhyOgyVdGFPOJJyBaFKc7N5UpN4GzIoG4QjuVts2UXBWc6wKSXOA8wo7bbIqiqi0paYm%2FWV%2FK%2F%2B35578A0H2zMf%2Bmy3uJSG2rkoTBp3G897KPnEWInLY50gV6hapmVbJncVNA8lCvFvQKpeCrVzCi18%2FTBjqkAZupoKXhTFCsSR5GPv3bZUw9TJT0N69BpijpFbcdAO7h2WF9pGRnVdPeZBZiaJj8wDI5Ter1as4rUPp%2FiYdKaP%2FZfP9C6Is0QldHbWE4hblODVH6RmcL%2FicnL26usVFgJRLjpBIsq2dkhTb6jSWFIXFUE0oDYUCm%2FzNuq1dt7S%2B65ZFziCglL2O3X3f8n22%2FqB7jXGCVXyX%2BDihHsl7rXjD5bdBu&X-Amz-Signature=27a99c0dd8d37ee1be3f5e8e577f2a58f165ab003ae3c87fb6dc19cc1b10fa16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAM2L7W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T021331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCppn%2Bi5tiKzoJqAiURlwJKo5lS%2BT%2FpcGtHFNwrs5ozdQIhAIvbO7x8yQNsBpFwWi8mTfcZ18tOH0VzedKJsKQVwUPyKv8DCDMQABoMNjM3NDIzMTgzODA1IgwEoKeaTQnXqMocKLYq3ANkXBaIwkxVYDJjFQmKtnWAnYoy6LDZ1qNtRvaRJOZF62twwSwSEuC3UT%2FhujHJlBkNlLpPETLj8fmToeVh2uEE2Poxr%2B%2Fdoiq0yVmOwjV9uDF67zVUaKSzbKSYVEMrlBPtdyM1n8NyaxHUcmYb8Hf1LHyt8FKDwCxZagJNHraCSJ36MR2IPTnDNa9WRiM5JYYyirQ9D3iLma0bG0DJ6ymGOrBwIEcsedtI0ehCm3KWNnL8OZz7%2Fp0XG92Pof06jCGRIz0dW78shCHmuETHZJaovlzQ%2Bl%2B%2BaI4LIQROp4N43t6Rho3ANN53bh6YyqB75ZEtVh1ewzCo2RZioJPW0ucBbskpCYoxu4j15jmyNfCsr3HJUe8b9b2Xr3XPcKo2LW6a8Cra%2BpBuE0%2B8hOTq%2Fx5fPsjHwoEKsg3pZUbkxXRi830vQOJrTU9Ho22gU3y3nv5FqwP1ehaNaprLx2FM0RQDlL9D2c%2FsBzAwkC8INcZJhyOgyVdGFPOJJyBaFKc7N5UpN4GzIoG4QjuVts2UXBWc6wKSXOA8wo7bbIqiqi0paYm%2FWV%2FK%2F%2B35578A0H2zMf%2Bmy3uJSG2rkoTBp3G897KPnEWInLY50gV6hapmVbJncVNA8lCvFvQKpeCrVzCi18%2FTBjqkAZupoKXhTFCsSR5GPv3bZUw9TJT0N69BpijpFbcdAO7h2WF9pGRnVdPeZBZiaJj8wDI5Ter1as4rUPp%2FiYdKaP%2FZfP9C6Is0QldHbWE4hblODVH6RmcL%2FicnL26usVFgJRLjpBIsq2dkhTb6jSWFIXFUE0oDYUCm%2FzNuq1dt7S%2B65ZFziCglL2O3X3f8n22%2FqB7jXGCVXyX%2BDihHsl7rXjD5bdBu&X-Amz-Signature=986294c247313a25b6606a6294cb61fb670a47673166c1d8eefde967e347eff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAM2L7W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T021331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCppn%2Bi5tiKzoJqAiURlwJKo5lS%2BT%2FpcGtHFNwrs5ozdQIhAIvbO7x8yQNsBpFwWi8mTfcZ18tOH0VzedKJsKQVwUPyKv8DCDMQABoMNjM3NDIzMTgzODA1IgwEoKeaTQnXqMocKLYq3ANkXBaIwkxVYDJjFQmKtnWAnYoy6LDZ1qNtRvaRJOZF62twwSwSEuC3UT%2FhujHJlBkNlLpPETLj8fmToeVh2uEE2Poxr%2B%2Fdoiq0yVmOwjV9uDF67zVUaKSzbKSYVEMrlBPtdyM1n8NyaxHUcmYb8Hf1LHyt8FKDwCxZagJNHraCSJ36MR2IPTnDNa9WRiM5JYYyirQ9D3iLma0bG0DJ6ymGOrBwIEcsedtI0ehCm3KWNnL8OZz7%2Fp0XG92Pof06jCGRIz0dW78shCHmuETHZJaovlzQ%2Bl%2B%2BaI4LIQROp4N43t6Rho3ANN53bh6YyqB75ZEtVh1ewzCo2RZioJPW0ucBbskpCYoxu4j15jmyNfCsr3HJUe8b9b2Xr3XPcKo2LW6a8Cra%2BpBuE0%2B8hOTq%2Fx5fPsjHwoEKsg3pZUbkxXRi830vQOJrTU9Ho22gU3y3nv5FqwP1ehaNaprLx2FM0RQDlL9D2c%2FsBzAwkC8INcZJhyOgyVdGFPOJJyBaFKc7N5UpN4GzIoG4QjuVts2UXBWc6wKSXOA8wo7bbIqiqi0paYm%2FWV%2FK%2F%2B35578A0H2zMf%2Bmy3uJSG2rkoTBp3G897KPnEWInLY50gV6hapmVbJncVNA8lCvFvQKpeCrVzCi18%2FTBjqkAZupoKXhTFCsSR5GPv3bZUw9TJT0N69BpijpFbcdAO7h2WF9pGRnVdPeZBZiaJj8wDI5Ter1as4rUPp%2FiYdKaP%2FZfP9C6Is0QldHbWE4hblODVH6RmcL%2FicnL26usVFgJRLjpBIsq2dkhTb6jSWFIXFUE0oDYUCm%2FzNuq1dt7S%2B65ZFziCglL2O3X3f8n22%2FqB7jXGCVXyX%2BDihHsl7rXjD5bdBu&X-Amz-Signature=4a21a74a140718ce52e0a877436a3fd58d0e7fb8c557c984f799f75b54567ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

