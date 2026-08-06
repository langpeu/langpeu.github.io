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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ7NLXRZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T025841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCoOWz2mNn%2B97YyNwJl4ctsRmae%2B4pFco2AMS3bQdg4CgIhAJJDUogNAddEDG1AU1iniNrexXkFC0JXZNo9E%2BUywhPPKv8DCDMQABoMNjM3NDIzMTgzODA1IgySqoGkIyllXSpg4xIq3AP8bCNWXBd11pYW9jBhxEqvnQoGpZmskVHAm1W27mvsNrwSui4ioX9U%2B9wsQgfe2QyAz88nhwZb5TL9j%2F4x8iH%2FpS70Se1pXKzhhii4C4kR5wDJWAioy%2FD8B5f7XZGUqN6KAJHzwFObq1K%2Fsr9x7x3rVqu1XRaca%2BFi1N5F09hzwbsClTczfBtYpVApVgKqtuAcoekR7gsgV4xHnyTjDr0gzHgeDNgBjuOflKkcjhSYDRIT6zOT0CxnM%2FzQbDekwXu0a%2Bi9P2GuDQg3JRTmw7lAC3arO7OIWwBAzIqOKMfaeQ%2B5QPpkl%2FmjH5ao0qEobC5HcSR7xcZnExm1BBNSGKINQeUURImaJhQ0hzcnmOKDe4ULmqiXT3Lz7457NgBUD93U4VOOIMPBk5fScEKy%2F7yOJs0hD4RT70doOIPg3QtqMzz1MkFER4pH1LUITwmV1eLJ6Fzc56epqtNfU9YVT0aIRcm9blQm%2BuzbjQ6eOgX%2FkObaQQ8353Gd58A5ZBl3tJv7m8wFMUwAaXT%2BXyJfjNY5%2FzBopTdFvr7qFDPcsybEigaitjWdad1%2F6Knnap5sP8DXwAyNPW%2BL5vgN0QGAuvjyYQbFOHfrwWWp8nUW56JelePPQf0%2BuVTDUXslTzDL1s%2FTBjqkAYdbwCSpIoH%2Bcl2nhP2mL5eAuBz%2FBz4iF%2B95ITsTCgPAgZoh3XXsnHDLtblqiutwfitUHt3R8qPqYfcZHXdyLL9Bt98bKV1I8hUbQKA8HsXQmXMVUqJbh3pnTuR3tscxmtJ1ze4yVfV9O9aanz3gC2QhyRYZ1nvPoin7d5CvzjA%2BMkSfuQBB9n%2FSk%2FXqz3VpTeS18Uy8PoUHa7XAhAGJANmWPeJh&X-Amz-Signature=2e85a9b53ea5b43b9f0288d11f89d1fe2b66efad4cded6d8a6f429b67a78f8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ7NLXRZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T025841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCoOWz2mNn%2B97YyNwJl4ctsRmae%2B4pFco2AMS3bQdg4CgIhAJJDUogNAddEDG1AU1iniNrexXkFC0JXZNo9E%2BUywhPPKv8DCDMQABoMNjM3NDIzMTgzODA1IgySqoGkIyllXSpg4xIq3AP8bCNWXBd11pYW9jBhxEqvnQoGpZmskVHAm1W27mvsNrwSui4ioX9U%2B9wsQgfe2QyAz88nhwZb5TL9j%2F4x8iH%2FpS70Se1pXKzhhii4C4kR5wDJWAioy%2FD8B5f7XZGUqN6KAJHzwFObq1K%2Fsr9x7x3rVqu1XRaca%2BFi1N5F09hzwbsClTczfBtYpVApVgKqtuAcoekR7gsgV4xHnyTjDr0gzHgeDNgBjuOflKkcjhSYDRIT6zOT0CxnM%2FzQbDekwXu0a%2Bi9P2GuDQg3JRTmw7lAC3arO7OIWwBAzIqOKMfaeQ%2B5QPpkl%2FmjH5ao0qEobC5HcSR7xcZnExm1BBNSGKINQeUURImaJhQ0hzcnmOKDe4ULmqiXT3Lz7457NgBUD93U4VOOIMPBk5fScEKy%2F7yOJs0hD4RT70doOIPg3QtqMzz1MkFER4pH1LUITwmV1eLJ6Fzc56epqtNfU9YVT0aIRcm9blQm%2BuzbjQ6eOgX%2FkObaQQ8353Gd58A5ZBl3tJv7m8wFMUwAaXT%2BXyJfjNY5%2FzBopTdFvr7qFDPcsybEigaitjWdad1%2F6Knnap5sP8DXwAyNPW%2BL5vgN0QGAuvjyYQbFOHfrwWWp8nUW56JelePPQf0%2BuVTDUXslTzDL1s%2FTBjqkAYdbwCSpIoH%2Bcl2nhP2mL5eAuBz%2FBz4iF%2B95ITsTCgPAgZoh3XXsnHDLtblqiutwfitUHt3R8qPqYfcZHXdyLL9Bt98bKV1I8hUbQKA8HsXQmXMVUqJbh3pnTuR3tscxmtJ1ze4yVfV9O9aanz3gC2QhyRYZ1nvPoin7d5CvzjA%2BMkSfuQBB9n%2FSk%2FXqz3VpTeS18Uy8PoUHa7XAhAGJANmWPeJh&X-Amz-Signature=01328c0c3a87ea74140438aec2c3a926214ad260b4b9b7717187246150400074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ7NLXRZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T025841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCoOWz2mNn%2B97YyNwJl4ctsRmae%2B4pFco2AMS3bQdg4CgIhAJJDUogNAddEDG1AU1iniNrexXkFC0JXZNo9E%2BUywhPPKv8DCDMQABoMNjM3NDIzMTgzODA1IgySqoGkIyllXSpg4xIq3AP8bCNWXBd11pYW9jBhxEqvnQoGpZmskVHAm1W27mvsNrwSui4ioX9U%2B9wsQgfe2QyAz88nhwZb5TL9j%2F4x8iH%2FpS70Se1pXKzhhii4C4kR5wDJWAioy%2FD8B5f7XZGUqN6KAJHzwFObq1K%2Fsr9x7x3rVqu1XRaca%2BFi1N5F09hzwbsClTczfBtYpVApVgKqtuAcoekR7gsgV4xHnyTjDr0gzHgeDNgBjuOflKkcjhSYDRIT6zOT0CxnM%2FzQbDekwXu0a%2Bi9P2GuDQg3JRTmw7lAC3arO7OIWwBAzIqOKMfaeQ%2B5QPpkl%2FmjH5ao0qEobC5HcSR7xcZnExm1BBNSGKINQeUURImaJhQ0hzcnmOKDe4ULmqiXT3Lz7457NgBUD93U4VOOIMPBk5fScEKy%2F7yOJs0hD4RT70doOIPg3QtqMzz1MkFER4pH1LUITwmV1eLJ6Fzc56epqtNfU9YVT0aIRcm9blQm%2BuzbjQ6eOgX%2FkObaQQ8353Gd58A5ZBl3tJv7m8wFMUwAaXT%2BXyJfjNY5%2FzBopTdFvr7qFDPcsybEigaitjWdad1%2F6Knnap5sP8DXwAyNPW%2BL5vgN0QGAuvjyYQbFOHfrwWWp8nUW56JelePPQf0%2BuVTDUXslTzDL1s%2FTBjqkAYdbwCSpIoH%2Bcl2nhP2mL5eAuBz%2FBz4iF%2B95ITsTCgPAgZoh3XXsnHDLtblqiutwfitUHt3R8qPqYfcZHXdyLL9Bt98bKV1I8hUbQKA8HsXQmXMVUqJbh3pnTuR3tscxmtJ1ze4yVfV9O9aanz3gC2QhyRYZ1nvPoin7d5CvzjA%2BMkSfuQBB9n%2FSk%2FXqz3VpTeS18Uy8PoUHa7XAhAGJANmWPeJh&X-Amz-Signature=bcd60709e4555765846fb75887a08b1a344afc74cb02806930e8e650670ab7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

