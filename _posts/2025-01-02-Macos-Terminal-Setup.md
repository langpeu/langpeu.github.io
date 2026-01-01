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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4E7WJX7%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T160019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDoa2OXEzNCQfKQFXHnBbP4jfJ24cnlotgcfVdYsGdGbQIhAL%2F0iYoFBkGxobA0aWu9nneD6Hi4WbDz%2FrJpiENl5Vc8KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsGFOUqFC5bituX18q3AOJ4aESRZHaDWqh55T2l3A9Ll%2FBan1sRq33eRjmG9XNUW4a7mV5e%2FYGjlGHYmB9ddmtpHQ2%2B1Q0Uk8Dj2%2F4XfXJYgv87rifV%2F%2Bi4ccxSUjbuUUXRjG1w25HqQPzxwg7pcAzZc2tSUeHhshOJDCXcEkV2pkNHPWAhCn1cH3UJercdAJH%2BuolDG5g8zvbvGi1L3dqgc%2FO%2FqCHyvna8yZ97YYgMMXiZPB7RhVG%2Fz9OFv09qYcX0RT5fjY8ocnzIlpatJcop7nyYvVq92v7Cddu3D8xkyM%2FltOTI7Lx%2FO4Z9PT28tMLdnmpMNq%2FOtepvOvNTyHhUODMRAC7kR1SrZ59uX%2FicAUK15tfI5cCDQf7APoCb03c8P5NRILzV8nmUsUAJy1tM%2F0%2B9wtk%2FFikkWbUhfnBvf8zpnyP9E6URv7cP2PlX%2FrQ13ClSsAXkD5vUyaUyIhz9rcWc54Ib1qvuaDK2SBeLXbm9e1JHRjzGxuJNZs92sGlgnypWgWXskc2jHMdppWiWSOfqHNj0TRzOrzcIPipruqX77NPuStWpnTnqEuLvuX9KNTvzjye9b%2Fugln%2BaxaqrPUegigDUg88VMJi8oh7UxtW3SfXXs4UtchJ05cbhFdMtK2gj44h27Zu8zD95dnKBjqkAZW5%2FSEVtAQtnV7v%2FJLlzu%2FZJaz5xIVQtV0hKw2ip6Saa%2BqKBtr72xSkc5ghNtAPOwx28NUbcl4o3JaL6R%2BF%2FNwPZahjFKHcjmEUDAbeed4YQF91msLjhVaP3LQH3ieDXgL2%2BQUoDNJobC%2FJ2F47ClGIp3%2Busx5f%2BKK6Ft4NYQvrGvy9B4OJkKTnjeOINrIpp9LSbftws987rYFoU9wQnF3T%2Fves&X-Amz-Signature=1d12ce3ed3bfeb4ded987569bceb20e041ca4f94a6b01741ab598aaa07eb483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4E7WJX7%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T160019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDoa2OXEzNCQfKQFXHnBbP4jfJ24cnlotgcfVdYsGdGbQIhAL%2F0iYoFBkGxobA0aWu9nneD6Hi4WbDz%2FrJpiENl5Vc8KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsGFOUqFC5bituX18q3AOJ4aESRZHaDWqh55T2l3A9Ll%2FBan1sRq33eRjmG9XNUW4a7mV5e%2FYGjlGHYmB9ddmtpHQ2%2B1Q0Uk8Dj2%2F4XfXJYgv87rifV%2F%2Bi4ccxSUjbuUUXRjG1w25HqQPzxwg7pcAzZc2tSUeHhshOJDCXcEkV2pkNHPWAhCn1cH3UJercdAJH%2BuolDG5g8zvbvGi1L3dqgc%2FO%2FqCHyvna8yZ97YYgMMXiZPB7RhVG%2Fz9OFv09qYcX0RT5fjY8ocnzIlpatJcop7nyYvVq92v7Cddu3D8xkyM%2FltOTI7Lx%2FO4Z9PT28tMLdnmpMNq%2FOtepvOvNTyHhUODMRAC7kR1SrZ59uX%2FicAUK15tfI5cCDQf7APoCb03c8P5NRILzV8nmUsUAJy1tM%2F0%2B9wtk%2FFikkWbUhfnBvf8zpnyP9E6URv7cP2PlX%2FrQ13ClSsAXkD5vUyaUyIhz9rcWc54Ib1qvuaDK2SBeLXbm9e1JHRjzGxuJNZs92sGlgnypWgWXskc2jHMdppWiWSOfqHNj0TRzOrzcIPipruqX77NPuStWpnTnqEuLvuX9KNTvzjye9b%2Fugln%2BaxaqrPUegigDUg88VMJi8oh7UxtW3SfXXs4UtchJ05cbhFdMtK2gj44h27Zu8zD95dnKBjqkAZW5%2FSEVtAQtnV7v%2FJLlzu%2FZJaz5xIVQtV0hKw2ip6Saa%2BqKBtr72xSkc5ghNtAPOwx28NUbcl4o3JaL6R%2BF%2FNwPZahjFKHcjmEUDAbeed4YQF91msLjhVaP3LQH3ieDXgL2%2BQUoDNJobC%2FJ2F47ClGIp3%2Busx5f%2BKK6Ft4NYQvrGvy9B4OJkKTnjeOINrIpp9LSbftws987rYFoU9wQnF3T%2Fves&X-Amz-Signature=392fec913c5dc09a404a770d617977a363a48ce14b87ec5cf2965355a37d89e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4E7WJX7%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T160019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDoa2OXEzNCQfKQFXHnBbP4jfJ24cnlotgcfVdYsGdGbQIhAL%2F0iYoFBkGxobA0aWu9nneD6Hi4WbDz%2FrJpiENl5Vc8KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsGFOUqFC5bituX18q3AOJ4aESRZHaDWqh55T2l3A9Ll%2FBan1sRq33eRjmG9XNUW4a7mV5e%2FYGjlGHYmB9ddmtpHQ2%2B1Q0Uk8Dj2%2F4XfXJYgv87rifV%2F%2Bi4ccxSUjbuUUXRjG1w25HqQPzxwg7pcAzZc2tSUeHhshOJDCXcEkV2pkNHPWAhCn1cH3UJercdAJH%2BuolDG5g8zvbvGi1L3dqgc%2FO%2FqCHyvna8yZ97YYgMMXiZPB7RhVG%2Fz9OFv09qYcX0RT5fjY8ocnzIlpatJcop7nyYvVq92v7Cddu3D8xkyM%2FltOTI7Lx%2FO4Z9PT28tMLdnmpMNq%2FOtepvOvNTyHhUODMRAC7kR1SrZ59uX%2FicAUK15tfI5cCDQf7APoCb03c8P5NRILzV8nmUsUAJy1tM%2F0%2B9wtk%2FFikkWbUhfnBvf8zpnyP9E6URv7cP2PlX%2FrQ13ClSsAXkD5vUyaUyIhz9rcWc54Ib1qvuaDK2SBeLXbm9e1JHRjzGxuJNZs92sGlgnypWgWXskc2jHMdppWiWSOfqHNj0TRzOrzcIPipruqX77NPuStWpnTnqEuLvuX9KNTvzjye9b%2Fugln%2BaxaqrPUegigDUg88VMJi8oh7UxtW3SfXXs4UtchJ05cbhFdMtK2gj44h27Zu8zD95dnKBjqkAZW5%2FSEVtAQtnV7v%2FJLlzu%2FZJaz5xIVQtV0hKw2ip6Saa%2BqKBtr72xSkc5ghNtAPOwx28NUbcl4o3JaL6R%2BF%2FNwPZahjFKHcjmEUDAbeed4YQF91msLjhVaP3LQH3ieDXgL2%2BQUoDNJobC%2FJ2F47ClGIp3%2Busx5f%2BKK6Ft4NYQvrGvy9B4OJkKTnjeOINrIpp9LSbftws987rYFoU9wQnF3T%2Fves&X-Amz-Signature=0e01a7fb9935ffe090d7d64face02e79e8778d31b728c059904a974342b42c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


