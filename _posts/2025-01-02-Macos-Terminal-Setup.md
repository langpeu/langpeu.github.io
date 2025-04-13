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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFDQE4U%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T080607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDc%2ByD7zZlVHi52qGi8H4vm4omFjngU86EcA5%2BcX9lxVAiBuNxgJNQ%2FYoR42HVle2t3afz7JtxMyEBTztnAHXWumHyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92cEpnMec%2FRSByaUKtwDsOp3MfYU4DxnDj4mYdQKFoqaHQSv96GGlFtWNKW%2FPANTURpEuaapsa6pSU2bjUbmjOcXlxOqUVULpvaHxetBt24vTvRRUuS8UHpzJER%2Fpp5PSC7afUriJUIf4%2BlurKjxVUOyIua1OmxCsiAlSGk629eiwtarD0Ykz%2BwiXu8nCkzIzt7BMx6QLfwdw1SSZNQ5ghAybg%2Fmta8JspCL2MFOSAsEoQouQrU7Bi0QAU21BRR6r0W3hx%2BrNssP0%2Fwbgnk9fmlpb0Ha1bp7j0Brqx8I95LcF20EtPjQ5r6YZ%2BfAMdPaT6D8X16a25CMo6oGJTJRQqquFk0Yj6IKtCgUEUFTJJAm%2FKzTgwtRpHhvEnD3AwmYQzR3EamYFhAt6BZgcvxGG9Uqvw%2B0otwgnvFI4ikl3bI2SqhltoTFViAUXs7IBBYEwlsklpOE1KsvEMGHfIdYZxwFeb3PjodlQ%2Br%2BdVbH2RjZ7lph%2B9XH6qAHngpkLM06Hcuyj217VG6h%2B5EYvDAA3%2B%2F9iGoMiGd%2BuSuGQWkgyuNh9i0e%2B%2BfH1NCys4wRE8hpO%2FUXj1DF%2BuOkGhBRiVVtMcDbKpQF8cpWRUyjmWxu9RyPa0YUBQICc7Y7FSrzdflG3HTTiYCVLA0kCygwt97tvwY6pgFHT3ncOJoXH1aENf9JL3YZOihKNH54CHvgo1iivFI2W%2BB9zA%2FD3DDOFz4om86aG6L%2FP0z%2F3FyukxqoSHN8rySq0Qs9xvjQR4GX2hcYQONWJM6sGBrQ7WdYWBo8q1RMvd0%2BT6sPo7CARNQI%2BzeI0%2BQ%2BiRhcllp0jrDB1c%2B32Ez9DjlPBUeDKAjupLu5ixf3EkSBTSsZNKe66k18l6TotKGppbhNbzwF&X-Amz-Signature=ae05887fc77fc658f8f87e06d505e09f71b0cbe9f4b0630f5095c0b33538c42f&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFDQE4U%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T080607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDc%2ByD7zZlVHi52qGi8H4vm4omFjngU86EcA5%2BcX9lxVAiBuNxgJNQ%2FYoR42HVle2t3afz7JtxMyEBTztnAHXWumHyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92cEpnMec%2FRSByaUKtwDsOp3MfYU4DxnDj4mYdQKFoqaHQSv96GGlFtWNKW%2FPANTURpEuaapsa6pSU2bjUbmjOcXlxOqUVULpvaHxetBt24vTvRRUuS8UHpzJER%2Fpp5PSC7afUriJUIf4%2BlurKjxVUOyIua1OmxCsiAlSGk629eiwtarD0Ykz%2BwiXu8nCkzIzt7BMx6QLfwdw1SSZNQ5ghAybg%2Fmta8JspCL2MFOSAsEoQouQrU7Bi0QAU21BRR6r0W3hx%2BrNssP0%2Fwbgnk9fmlpb0Ha1bp7j0Brqx8I95LcF20EtPjQ5r6YZ%2BfAMdPaT6D8X16a25CMo6oGJTJRQqquFk0Yj6IKtCgUEUFTJJAm%2FKzTgwtRpHhvEnD3AwmYQzR3EamYFhAt6BZgcvxGG9Uqvw%2B0otwgnvFI4ikl3bI2SqhltoTFViAUXs7IBBYEwlsklpOE1KsvEMGHfIdYZxwFeb3PjodlQ%2Br%2BdVbH2RjZ7lph%2B9XH6qAHngpkLM06Hcuyj217VG6h%2B5EYvDAA3%2B%2F9iGoMiGd%2BuSuGQWkgyuNh9i0e%2B%2BfH1NCys4wRE8hpO%2FUXj1DF%2BuOkGhBRiVVtMcDbKpQF8cpWRUyjmWxu9RyPa0YUBQICc7Y7FSrzdflG3HTTiYCVLA0kCygwt97tvwY6pgFHT3ncOJoXH1aENf9JL3YZOihKNH54CHvgo1iivFI2W%2BB9zA%2FD3DDOFz4om86aG6L%2FP0z%2F3FyukxqoSHN8rySq0Qs9xvjQR4GX2hcYQONWJM6sGBrQ7WdYWBo8q1RMvd0%2BT6sPo7CARNQI%2BzeI0%2BQ%2BiRhcllp0jrDB1c%2B32Ez9DjlPBUeDKAjupLu5ixf3EkSBTSsZNKe66k18l6TotKGppbhNbzwF&X-Amz-Signature=fc55768dc8de3f9a32482a4e996640a80906ed7562913d4e5ddcb9cfcac101ab&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFDQE4U%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T080607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDc%2ByD7zZlVHi52qGi8H4vm4omFjngU86EcA5%2BcX9lxVAiBuNxgJNQ%2FYoR42HVle2t3afz7JtxMyEBTztnAHXWumHyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92cEpnMec%2FRSByaUKtwDsOp3MfYU4DxnDj4mYdQKFoqaHQSv96GGlFtWNKW%2FPANTURpEuaapsa6pSU2bjUbmjOcXlxOqUVULpvaHxetBt24vTvRRUuS8UHpzJER%2Fpp5PSC7afUriJUIf4%2BlurKjxVUOyIua1OmxCsiAlSGk629eiwtarD0Ykz%2BwiXu8nCkzIzt7BMx6QLfwdw1SSZNQ5ghAybg%2Fmta8JspCL2MFOSAsEoQouQrU7Bi0QAU21BRR6r0W3hx%2BrNssP0%2Fwbgnk9fmlpb0Ha1bp7j0Brqx8I95LcF20EtPjQ5r6YZ%2BfAMdPaT6D8X16a25CMo6oGJTJRQqquFk0Yj6IKtCgUEUFTJJAm%2FKzTgwtRpHhvEnD3AwmYQzR3EamYFhAt6BZgcvxGG9Uqvw%2B0otwgnvFI4ikl3bI2SqhltoTFViAUXs7IBBYEwlsklpOE1KsvEMGHfIdYZxwFeb3PjodlQ%2Br%2BdVbH2RjZ7lph%2B9XH6qAHngpkLM06Hcuyj217VG6h%2B5EYvDAA3%2B%2F9iGoMiGd%2BuSuGQWkgyuNh9i0e%2B%2BfH1NCys4wRE8hpO%2FUXj1DF%2BuOkGhBRiVVtMcDbKpQF8cpWRUyjmWxu9RyPa0YUBQICc7Y7FSrzdflG3HTTiYCVLA0kCygwt97tvwY6pgFHT3ncOJoXH1aENf9JL3YZOihKNH54CHvgo1iivFI2W%2BB9zA%2FD3DDOFz4om86aG6L%2FP0z%2F3FyukxqoSHN8rySq0Qs9xvjQR4GX2hcYQONWJM6sGBrQ7WdYWBo8q1RMvd0%2BT6sPo7CARNQI%2BzeI0%2BQ%2BiRhcllp0jrDB1c%2B32Ez9DjlPBUeDKAjupLu5ixf3EkSBTSsZNKe66k18l6TotKGppbhNbzwF&X-Amz-Signature=7159de540e3fd135988da17bda0441f3e5bee344145c63b8f819cbe858db9525&X-Amz-SignedHeaders=host&x-id=GetObject)



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


