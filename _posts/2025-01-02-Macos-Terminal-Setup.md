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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTF4Y26%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T151433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbNIyYyXb5f1voqrTrrK4zLkZJz0WmcMmfudQBMG3QlAiEAxePQShwo1odhC1KVRuVlJRNK7AaeSMLQGfrx9C3%2B0B0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDCiWMreWUkDPCvBStSrcA%2FZ6gWj%2F3Bm6VKXKBS7eDpxlYpzXoRwlsaj2SG5e3nR7k5cW6M1Z6Xai1MBAgDvW08K4cmvenTYPEVjhrQzCVfAVzMpHd8RIfaEKiu9U%2BtzyWWj53kda2jtW7KeorkoP7JcF94DSuPcKb4%2BSi2BtjL5Ry4%2FYml%2FculV0CESFftXwy400zPGTfi89s6YfOOYpW3ZC%2BSY79Pu14RD8Knt8OlGLnr46ANWUl%2FXMxvp%2BwgrLdarvmItBdLdGBufDzSRcFEdjlNfQNmG6rBxloFU1VNM533rvjKEEhTEYfE2eRdqiBjd230%2Fb0g59xY1%2FxfyzY2Xb5Jj4S6BBvTZP5bW8SyXmq53QbDRmH1eyed4jtjkQaoIVe92Orjsf2%2BXsmy6gzG5bW3xRl%2B7%2BOeFeYDOjLbfU3jsXAEyAjMqhdCQcfP9x%2Fs4MGPiqmdGfzbRpWCa8CKD438h88Aw7zjCIdckU2p1N9GBdLPwl49iAVxmhG1r2VkwvLCQQDmo6p0sblZt2XmMWhJTtEPzSlswyMU6JfELqvIUJd87uOxpmu3g0dY9N4cCaqOGGbXZgelbh4AtrVCA6lmDC%2FI8Yhbgu%2BB4pszBykiGYiwLNQgOe%2Fns6nyLfG0wVYyFx3Ej%2BfgCqMNO%2FxcYGOqUB4DHYFXo9R0Pxu%2Fx9pHrI5eOOqFsXmiyJ70gvCWjil0dW0x8ZpgH7P%2BsmQyG%2FI5Zwpm9ENHr0e5s1DqdOPFfaq21KTbbrRVwxy%2FyBya2sg%2F13EKVsNO6p%2FW92tDRXQbabhlD%2FNJTF4BLcNDtAQ2fxC2cyG8Ajk2VA1IuC%2FD%2FujBOLHOHxyhb543t1%2FRutjj12u187Nqb5h2E9bGf8kgDE0QiVcaSY&X-Amz-Signature=401766b91e9f5b7111add1e8a14705a00b9d27aebf7f0bd9f89828f5dbdb2380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTF4Y26%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T151433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbNIyYyXb5f1voqrTrrK4zLkZJz0WmcMmfudQBMG3QlAiEAxePQShwo1odhC1KVRuVlJRNK7AaeSMLQGfrx9C3%2B0B0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDCiWMreWUkDPCvBStSrcA%2FZ6gWj%2F3Bm6VKXKBS7eDpxlYpzXoRwlsaj2SG5e3nR7k5cW6M1Z6Xai1MBAgDvW08K4cmvenTYPEVjhrQzCVfAVzMpHd8RIfaEKiu9U%2BtzyWWj53kda2jtW7KeorkoP7JcF94DSuPcKb4%2BSi2BtjL5Ry4%2FYml%2FculV0CESFftXwy400zPGTfi89s6YfOOYpW3ZC%2BSY79Pu14RD8Knt8OlGLnr46ANWUl%2FXMxvp%2BwgrLdarvmItBdLdGBufDzSRcFEdjlNfQNmG6rBxloFU1VNM533rvjKEEhTEYfE2eRdqiBjd230%2Fb0g59xY1%2FxfyzY2Xb5Jj4S6BBvTZP5bW8SyXmq53QbDRmH1eyed4jtjkQaoIVe92Orjsf2%2BXsmy6gzG5bW3xRl%2B7%2BOeFeYDOjLbfU3jsXAEyAjMqhdCQcfP9x%2Fs4MGPiqmdGfzbRpWCa8CKD438h88Aw7zjCIdckU2p1N9GBdLPwl49iAVxmhG1r2VkwvLCQQDmo6p0sblZt2XmMWhJTtEPzSlswyMU6JfELqvIUJd87uOxpmu3g0dY9N4cCaqOGGbXZgelbh4AtrVCA6lmDC%2FI8Yhbgu%2BB4pszBykiGYiwLNQgOe%2Fns6nyLfG0wVYyFx3Ej%2BfgCqMNO%2FxcYGOqUB4DHYFXo9R0Pxu%2Fx9pHrI5eOOqFsXmiyJ70gvCWjil0dW0x8ZpgH7P%2BsmQyG%2FI5Zwpm9ENHr0e5s1DqdOPFfaq21KTbbrRVwxy%2FyBya2sg%2F13EKVsNO6p%2FW92tDRXQbabhlD%2FNJTF4BLcNDtAQ2fxC2cyG8Ajk2VA1IuC%2FD%2FujBOLHOHxyhb543t1%2FRutjj12u187Nqb5h2E9bGf8kgDE0QiVcaSY&X-Amz-Signature=c2236d38ca14dd2e90d3f5dacfa1592442726442bed38aa9d163e49a2936301f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTF4Y26%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T151433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbNIyYyXb5f1voqrTrrK4zLkZJz0WmcMmfudQBMG3QlAiEAxePQShwo1odhC1KVRuVlJRNK7AaeSMLQGfrx9C3%2B0B0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDCiWMreWUkDPCvBStSrcA%2FZ6gWj%2F3Bm6VKXKBS7eDpxlYpzXoRwlsaj2SG5e3nR7k5cW6M1Z6Xai1MBAgDvW08K4cmvenTYPEVjhrQzCVfAVzMpHd8RIfaEKiu9U%2BtzyWWj53kda2jtW7KeorkoP7JcF94DSuPcKb4%2BSi2BtjL5Ry4%2FYml%2FculV0CESFftXwy400zPGTfi89s6YfOOYpW3ZC%2BSY79Pu14RD8Knt8OlGLnr46ANWUl%2FXMxvp%2BwgrLdarvmItBdLdGBufDzSRcFEdjlNfQNmG6rBxloFU1VNM533rvjKEEhTEYfE2eRdqiBjd230%2Fb0g59xY1%2FxfyzY2Xb5Jj4S6BBvTZP5bW8SyXmq53QbDRmH1eyed4jtjkQaoIVe92Orjsf2%2BXsmy6gzG5bW3xRl%2B7%2BOeFeYDOjLbfU3jsXAEyAjMqhdCQcfP9x%2Fs4MGPiqmdGfzbRpWCa8CKD438h88Aw7zjCIdckU2p1N9GBdLPwl49iAVxmhG1r2VkwvLCQQDmo6p0sblZt2XmMWhJTtEPzSlswyMU6JfELqvIUJd87uOxpmu3g0dY9N4cCaqOGGbXZgelbh4AtrVCA6lmDC%2FI8Yhbgu%2BB4pszBykiGYiwLNQgOe%2Fns6nyLfG0wVYyFx3Ej%2BfgCqMNO%2FxcYGOqUB4DHYFXo9R0Pxu%2Fx9pHrI5eOOqFsXmiyJ70gvCWjil0dW0x8ZpgH7P%2BsmQyG%2FI5Zwpm9ENHr0e5s1DqdOPFfaq21KTbbrRVwxy%2FyBya2sg%2F13EKVsNO6p%2FW92tDRXQbabhlD%2FNJTF4BLcNDtAQ2fxC2cyG8Ajk2VA1IuC%2FD%2FujBOLHOHxyhb543t1%2FRutjj12u187Nqb5h2E9bGf8kgDE0QiVcaSY&X-Amz-Signature=7cffd4c565592f4d53f8546daad95f8c0a0def64da25a7c0062734df803766d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


