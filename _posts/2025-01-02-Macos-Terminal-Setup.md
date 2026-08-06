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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3MIJ5U%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T123638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH1qIaRnQqtkgqYWjgl0mjwxXCf%2FRs04uLmRCG98RcpbAiEAzlRIogaxrBqBWDL%2B%2FaI%2B6SsUOHtuHi%2Bsx7IUAHDroaEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDH%2FL4RJDy6pe%2FcJcQSrcA59F0Vw5BxvqgGxd5Yk3LRB%2B3whuk6Bj94Ta3NTM6U1Gl6ChOfzABSPMPPVySD0gQewMUky7KEw6iJYRMM%2FtqyVMmfI9hbBBJYFimBzItiPMEdK4XZ6RFnsKqGM5bsnV%2FyfY%2FEaMqI0yisCY8tlC%2Btp7ZNJrAaAkROMMUVOMcnQNotQAE5I%2BtAz01OOK02RiK%2BbvUt2K3Oac1soJTmsi6xSlN1DQjwnMmtbMxKlwZRpr667MDi99TQ5hwbA6PpVz3gEDD%2BGzuzkkEpLqOlrGuMb4RbcRm0aNLiJDUhlmVuQrDzcFQ8%2BI%2Brqr%2BoFbKzZ5b2i3hZgyiya0%2BPjNbUlmlgJKA1nc7RIoSXHlW55p9c9sXhOM8Q9ZOc7bLZbQymaFnINLWyAexDIXEYk7ivL%2FGiyxU1ThI35%2ByvChPS6lH%2B7gps4uHtBxA0ZmeVPS7EcUsHAlcjbO0TMmFqJ80B2F78vF%2BZrhe78HbOAPzoutnj8R7eAojn3zRMiHGx28eEGkGrmU4bgyOzzfVjJnwo6TiMmqVHpZYeEiw59PrluP8ZNkrtjdVrSM49DGXw%2Fr%2BmSVPYqbkOaQocXpvlL4I8Bm53ahMHPf8Y2YTMWLA4t3obL3XWnq1b8EBppYAosCMMzq0dMGOqUBbIVtHzku1rQQfkIJP%2FxVk1aF62%2Fr%2B0RkvV0rAyan3R5lDAVjCooth46Dvj6chGAzG3ZHLFHFO5G500s0rXV9kBaIwqoRuU7%2FeNWZjUl2njBoDgZde7xp3Bg7VS95y8aJl2JKgWN151B71Bhxw%2BvXqxstnM3kemNYPZcd04tjr7mVnCL%2Fs4j4TtFlmTzHoH%2F4Nz8DVo013%2BNZi2YBF%2BTC1ZJT%2FP6L&X-Amz-Signature=e1324034e093e99295647f884df629f1d9d54576b67e895f4b30b556e96cabad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3MIJ5U%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T123638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH1qIaRnQqtkgqYWjgl0mjwxXCf%2FRs04uLmRCG98RcpbAiEAzlRIogaxrBqBWDL%2B%2FaI%2B6SsUOHtuHi%2Bsx7IUAHDroaEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDH%2FL4RJDy6pe%2FcJcQSrcA59F0Vw5BxvqgGxd5Yk3LRB%2B3whuk6Bj94Ta3NTM6U1Gl6ChOfzABSPMPPVySD0gQewMUky7KEw6iJYRMM%2FtqyVMmfI9hbBBJYFimBzItiPMEdK4XZ6RFnsKqGM5bsnV%2FyfY%2FEaMqI0yisCY8tlC%2Btp7ZNJrAaAkROMMUVOMcnQNotQAE5I%2BtAz01OOK02RiK%2BbvUt2K3Oac1soJTmsi6xSlN1DQjwnMmtbMxKlwZRpr667MDi99TQ5hwbA6PpVz3gEDD%2BGzuzkkEpLqOlrGuMb4RbcRm0aNLiJDUhlmVuQrDzcFQ8%2BI%2Brqr%2BoFbKzZ5b2i3hZgyiya0%2BPjNbUlmlgJKA1nc7RIoSXHlW55p9c9sXhOM8Q9ZOc7bLZbQymaFnINLWyAexDIXEYk7ivL%2FGiyxU1ThI35%2ByvChPS6lH%2B7gps4uHtBxA0ZmeVPS7EcUsHAlcjbO0TMmFqJ80B2F78vF%2BZrhe78HbOAPzoutnj8R7eAojn3zRMiHGx28eEGkGrmU4bgyOzzfVjJnwo6TiMmqVHpZYeEiw59PrluP8ZNkrtjdVrSM49DGXw%2Fr%2BmSVPYqbkOaQocXpvlL4I8Bm53ahMHPf8Y2YTMWLA4t3obL3XWnq1b8EBppYAosCMMzq0dMGOqUBbIVtHzku1rQQfkIJP%2FxVk1aF62%2Fr%2B0RkvV0rAyan3R5lDAVjCooth46Dvj6chGAzG3ZHLFHFO5G500s0rXV9kBaIwqoRuU7%2FeNWZjUl2njBoDgZde7xp3Bg7VS95y8aJl2JKgWN151B71Bhxw%2BvXqxstnM3kemNYPZcd04tjr7mVnCL%2Fs4j4TtFlmTzHoH%2F4Nz8DVo013%2BNZi2YBF%2BTC1ZJT%2FP6L&X-Amz-Signature=842b1db161c68a4af5224b2f39643077ca9f3ead8316839d3ea5291d76f35610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3MIJ5U%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T123638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH1qIaRnQqtkgqYWjgl0mjwxXCf%2FRs04uLmRCG98RcpbAiEAzlRIogaxrBqBWDL%2B%2FaI%2B6SsUOHtuHi%2Bsx7IUAHDroaEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDH%2FL4RJDy6pe%2FcJcQSrcA59F0Vw5BxvqgGxd5Yk3LRB%2B3whuk6Bj94Ta3NTM6U1Gl6ChOfzABSPMPPVySD0gQewMUky7KEw6iJYRMM%2FtqyVMmfI9hbBBJYFimBzItiPMEdK4XZ6RFnsKqGM5bsnV%2FyfY%2FEaMqI0yisCY8tlC%2Btp7ZNJrAaAkROMMUVOMcnQNotQAE5I%2BtAz01OOK02RiK%2BbvUt2K3Oac1soJTmsi6xSlN1DQjwnMmtbMxKlwZRpr667MDi99TQ5hwbA6PpVz3gEDD%2BGzuzkkEpLqOlrGuMb4RbcRm0aNLiJDUhlmVuQrDzcFQ8%2BI%2Brqr%2BoFbKzZ5b2i3hZgyiya0%2BPjNbUlmlgJKA1nc7RIoSXHlW55p9c9sXhOM8Q9ZOc7bLZbQymaFnINLWyAexDIXEYk7ivL%2FGiyxU1ThI35%2ByvChPS6lH%2B7gps4uHtBxA0ZmeVPS7EcUsHAlcjbO0TMmFqJ80B2F78vF%2BZrhe78HbOAPzoutnj8R7eAojn3zRMiHGx28eEGkGrmU4bgyOzzfVjJnwo6TiMmqVHpZYeEiw59PrluP8ZNkrtjdVrSM49DGXw%2Fr%2BmSVPYqbkOaQocXpvlL4I8Bm53ahMHPf8Y2YTMWLA4t3obL3XWnq1b8EBppYAosCMMzq0dMGOqUBbIVtHzku1rQQfkIJP%2FxVk1aF62%2Fr%2B0RkvV0rAyan3R5lDAVjCooth46Dvj6chGAzG3ZHLFHFO5G500s0rXV9kBaIwqoRuU7%2FeNWZjUl2njBoDgZde7xp3Bg7VS95y8aJl2JKgWN151B71Bhxw%2BvXqxstnM3kemNYPZcd04tjr7mVnCL%2Fs4j4TtFlmTzHoH%2F4Nz8DVo013%2BNZi2YBF%2BTC1ZJT%2FP6L&X-Amz-Signature=937ce221789d2284580c27a81663661cb40150caba2284d571d4205d36a867ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

