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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6JOJ4N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T162940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDDKf7Kpb%2FeEeycNc2z0Uh5Jl5LnIGj8m0h7SqHWaKMOAiBm1zg%2BjvbgWD%2BgXFzkxDlgHBkCpUqJhg1apd7Z86VbtyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0GtNqz7hXXiohfCuKtwDWpR%2Fja5OVlTcNG2x4KWsW9LV2JgMJXaWOOzqoHvq8JRqEODJLlnjgj4Wt0M8feh1VZv4dTs0KgD0WBpTcUpnqkKVSy9wl78KD853KbST2q2kdjU7Nvk6mD5j1kA0z7ecboLLDlvc3WhkSKd%2BgydoTv8b5h%2BZtpbPWMfucb9IeDPey4OpeW3j1mU0EHNh768eLKC2ZS2NKSJ%2BdN1x4ExtvqCsJpic2EbMi9QJ6AfxVvS0plGXrfjta37UmZH%2FbsCYkLhPRZ6qVTnW1ofHc96x2THGJ6ulD9qBBWQ5cwRQMldoYfwVlusdX4lTAbZ%2Fp4rRVOhPpZPYrATniylIYPd8Pm8adYetSEZ7q8pB3eunJewUmzhUt6Q318czKGP1SBlLashibVWm4OOCqSiiaB6YpWRDAIBrOmAom6w60AhlzhgB83YxL7u1jCZP6AoeVFpCW36d6rS8PyFc3NLpMdcJhiUOxi38DNfPHiS%2BYCaSd6G88MjfkGLEGxYOCdov%2BZ5AY%2BHQOEhMzGNs1X0djuABcYgiQDHFdP8h6uNukMqtzAsfC5Mc5ga6i3mQSpnojWD3onw7xtYUXZnbCPX8SSmjK0t%2BzpF1Ya5drYk4eB2u4NIrFX5LxcTU6k2y9zowzebZygY6pgGC%2BUx4SNuu9SbSTE38vQdGqJxUThjR5a5xqycK361T0NNmhc70FzlKLJwKWFgKCiR2aOUwBbaN11Xal10ccjnpKN60WI4SW4MNF4azICKa55gbcQqWYL6rIBawq2Ax7TUCXqvccengzJXxVlaO53aBoZ%2BNhDrxJCTaMCaQiFS3pjoDefkWXvwHpS3VpvSND5D4whgVPo5LlXsPO4CFPcrMkLnXVtcJ&X-Amz-Signature=2e9bfe2b0f7955c7e53b8f1446a04ff40cbdacf1adcd3b6aa739e71ad35639d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6JOJ4N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T162940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDDKf7Kpb%2FeEeycNc2z0Uh5Jl5LnIGj8m0h7SqHWaKMOAiBm1zg%2BjvbgWD%2BgXFzkxDlgHBkCpUqJhg1apd7Z86VbtyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0GtNqz7hXXiohfCuKtwDWpR%2Fja5OVlTcNG2x4KWsW9LV2JgMJXaWOOzqoHvq8JRqEODJLlnjgj4Wt0M8feh1VZv4dTs0KgD0WBpTcUpnqkKVSy9wl78KD853KbST2q2kdjU7Nvk6mD5j1kA0z7ecboLLDlvc3WhkSKd%2BgydoTv8b5h%2BZtpbPWMfucb9IeDPey4OpeW3j1mU0EHNh768eLKC2ZS2NKSJ%2BdN1x4ExtvqCsJpic2EbMi9QJ6AfxVvS0plGXrfjta37UmZH%2FbsCYkLhPRZ6qVTnW1ofHc96x2THGJ6ulD9qBBWQ5cwRQMldoYfwVlusdX4lTAbZ%2Fp4rRVOhPpZPYrATniylIYPd8Pm8adYetSEZ7q8pB3eunJewUmzhUt6Q318czKGP1SBlLashibVWm4OOCqSiiaB6YpWRDAIBrOmAom6w60AhlzhgB83YxL7u1jCZP6AoeVFpCW36d6rS8PyFc3NLpMdcJhiUOxi38DNfPHiS%2BYCaSd6G88MjfkGLEGxYOCdov%2BZ5AY%2BHQOEhMzGNs1X0djuABcYgiQDHFdP8h6uNukMqtzAsfC5Mc5ga6i3mQSpnojWD3onw7xtYUXZnbCPX8SSmjK0t%2BzpF1Ya5drYk4eB2u4NIrFX5LxcTU6k2y9zowzebZygY6pgGC%2BUx4SNuu9SbSTE38vQdGqJxUThjR5a5xqycK361T0NNmhc70FzlKLJwKWFgKCiR2aOUwBbaN11Xal10ccjnpKN60WI4SW4MNF4azICKa55gbcQqWYL6rIBawq2Ax7TUCXqvccengzJXxVlaO53aBoZ%2BNhDrxJCTaMCaQiFS3pjoDefkWXvwHpS3VpvSND5D4whgVPo5LlXsPO4CFPcrMkLnXVtcJ&X-Amz-Signature=a0e50d23eb630b9c27d2050d4e6f8d061fc077c18f8b4b370a643f5723d05c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6JOJ4N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T162940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDDKf7Kpb%2FeEeycNc2z0Uh5Jl5LnIGj8m0h7SqHWaKMOAiBm1zg%2BjvbgWD%2BgXFzkxDlgHBkCpUqJhg1apd7Z86VbtyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0GtNqz7hXXiohfCuKtwDWpR%2Fja5OVlTcNG2x4KWsW9LV2JgMJXaWOOzqoHvq8JRqEODJLlnjgj4Wt0M8feh1VZv4dTs0KgD0WBpTcUpnqkKVSy9wl78KD853KbST2q2kdjU7Nvk6mD5j1kA0z7ecboLLDlvc3WhkSKd%2BgydoTv8b5h%2BZtpbPWMfucb9IeDPey4OpeW3j1mU0EHNh768eLKC2ZS2NKSJ%2BdN1x4ExtvqCsJpic2EbMi9QJ6AfxVvS0plGXrfjta37UmZH%2FbsCYkLhPRZ6qVTnW1ofHc96x2THGJ6ulD9qBBWQ5cwRQMldoYfwVlusdX4lTAbZ%2Fp4rRVOhPpZPYrATniylIYPd8Pm8adYetSEZ7q8pB3eunJewUmzhUt6Q318czKGP1SBlLashibVWm4OOCqSiiaB6YpWRDAIBrOmAom6w60AhlzhgB83YxL7u1jCZP6AoeVFpCW36d6rS8PyFc3NLpMdcJhiUOxi38DNfPHiS%2BYCaSd6G88MjfkGLEGxYOCdov%2BZ5AY%2BHQOEhMzGNs1X0djuABcYgiQDHFdP8h6uNukMqtzAsfC5Mc5ga6i3mQSpnojWD3onw7xtYUXZnbCPX8SSmjK0t%2BzpF1Ya5drYk4eB2u4NIrFX5LxcTU6k2y9zowzebZygY6pgGC%2BUx4SNuu9SbSTE38vQdGqJxUThjR5a5xqycK361T0NNmhc70FzlKLJwKWFgKCiR2aOUwBbaN11Xal10ccjnpKN60WI4SW4MNF4azICKa55gbcQqWYL6rIBawq2Ax7TUCXqvccengzJXxVlaO53aBoZ%2BNhDrxJCTaMCaQiFS3pjoDefkWXvwHpS3VpvSND5D4whgVPo5LlXsPO4CFPcrMkLnXVtcJ&X-Amz-Signature=e9902f3bd9b56e78a3227f236b7652f1e92bd8e50b2724d8ecad3b88d42cdca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

