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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R3CZRNP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T143107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAr9ulsiUKIpcFNrnQbrdgNCN9VkLaGRLZFNaskxhTLqAiArJ%2Fzg89aMv5gl2yw6dilUTdXjWgO0Knv395LZvf2QWiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxLGkXcqNBfInr9wAKtwDRoyGuP6YnFtNvSBBtl%2Bf75fvqJDlpHBN0Hak4eMsDKr2XNTPN20g67lePOi4cN750IlXf1N7cH%2B%2BRAbQbj2npG3dxV4b%2BC2S2Eto%2Fwf%2Bs4yeSyMVYWBtxAKVfZxxaoBMMKRyPg5sVscfQjSM9Qmgusa3k72Rp6TOGzvY9VtRAP3hDj1duUaaGov1CvZdMZDIjq2v7QAfpJqvI9Qhr2I2NyDMd%2BxprkIcrindUq21LWv5QytJiX%2FsKn%2FJDV3A%2FDB%2Bfa95pwzSxFG9ED8GDqi1kqmerIJq7f0eFJgVrx6Jw4vGtr9nIbkAQ1Uiy3B1ZEVcQ59B2%2BcW%2FJo%2B2JYZ%2BQz1Ui3H4Z%2B1USiV%2Bc4Qj7IKfnYyqd4ZIRiKNAnJ6lufKusyj7hO6EQzJa2he0nRguAY2YAtP2dnCnEtcTuRK9YVD%2BZircBD8ZT0RQM8gOUQNerO3Tased7qN1ye4%2BorIqg1icxe%2BLmD7jThpEtwS3AVUBuf%2Fvr19dY79UR5QRxWsuedTRXQK0t0wYVdCphUiQiB0o1N7dCkFHk2nBRh%2FroDfZv1SXSmGmWzUbXiqOlomVVwQ3ThRpSQzgC7YR3c3S%2BkUpcpgljB8WszbgBpPkPcLJwbM4aNvlkeY0j48f8wk%2FrWvQY6pgG%2FkLGOhtyV5JQsWapMFR1EM%2F3QjNztjQxHaP%2BpzFrjzGmv3YI4otLsippNhE8eut54DcOGAqxRh8%2FnS5IksSSMA8cs3qoiCWki9Pa0cmt7OpPZVZxGp5BfTB9CwDm0uXvoYjO7B00nbRfQSfhVPA3fpYqYyU8E3dzdpDGYvdKRuPYD10fKs5LQRWTQyoUDrmoWhN2wDWEPymTXKH7tqtElv3HkW%2F%2FG&X-Amz-Signature=8da87035e59035996392a63a836895510f4191e7be6d060822ab8c1488966c76&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R3CZRNP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T143107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAr9ulsiUKIpcFNrnQbrdgNCN9VkLaGRLZFNaskxhTLqAiArJ%2Fzg89aMv5gl2yw6dilUTdXjWgO0Knv395LZvf2QWiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxLGkXcqNBfInr9wAKtwDRoyGuP6YnFtNvSBBtl%2Bf75fvqJDlpHBN0Hak4eMsDKr2XNTPN20g67lePOi4cN750IlXf1N7cH%2B%2BRAbQbj2npG3dxV4b%2BC2S2Eto%2Fwf%2Bs4yeSyMVYWBtxAKVfZxxaoBMMKRyPg5sVscfQjSM9Qmgusa3k72Rp6TOGzvY9VtRAP3hDj1duUaaGov1CvZdMZDIjq2v7QAfpJqvI9Qhr2I2NyDMd%2BxprkIcrindUq21LWv5QytJiX%2FsKn%2FJDV3A%2FDB%2Bfa95pwzSxFG9ED8GDqi1kqmerIJq7f0eFJgVrx6Jw4vGtr9nIbkAQ1Uiy3B1ZEVcQ59B2%2BcW%2FJo%2B2JYZ%2BQz1Ui3H4Z%2B1USiV%2Bc4Qj7IKfnYyqd4ZIRiKNAnJ6lufKusyj7hO6EQzJa2he0nRguAY2YAtP2dnCnEtcTuRK9YVD%2BZircBD8ZT0RQM8gOUQNerO3Tased7qN1ye4%2BorIqg1icxe%2BLmD7jThpEtwS3AVUBuf%2Fvr19dY79UR5QRxWsuedTRXQK0t0wYVdCphUiQiB0o1N7dCkFHk2nBRh%2FroDfZv1SXSmGmWzUbXiqOlomVVwQ3ThRpSQzgC7YR3c3S%2BkUpcpgljB8WszbgBpPkPcLJwbM4aNvlkeY0j48f8wk%2FrWvQY6pgG%2FkLGOhtyV5JQsWapMFR1EM%2F3QjNztjQxHaP%2BpzFrjzGmv3YI4otLsippNhE8eut54DcOGAqxRh8%2FnS5IksSSMA8cs3qoiCWki9Pa0cmt7OpPZVZxGp5BfTB9CwDm0uXvoYjO7B00nbRfQSfhVPA3fpYqYyU8E3dzdpDGYvdKRuPYD10fKs5LQRWTQyoUDrmoWhN2wDWEPymTXKH7tqtElv3HkW%2F%2FG&X-Amz-Signature=8cbbf0874c09ea667f6299e1ea3eb6f8c0af7028a9c70c6043134b97623c5ca5&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R3CZRNP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T143107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAr9ulsiUKIpcFNrnQbrdgNCN9VkLaGRLZFNaskxhTLqAiArJ%2Fzg89aMv5gl2yw6dilUTdXjWgO0Knv395LZvf2QWiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxLGkXcqNBfInr9wAKtwDRoyGuP6YnFtNvSBBtl%2Bf75fvqJDlpHBN0Hak4eMsDKr2XNTPN20g67lePOi4cN750IlXf1N7cH%2B%2BRAbQbj2npG3dxV4b%2BC2S2Eto%2Fwf%2Bs4yeSyMVYWBtxAKVfZxxaoBMMKRyPg5sVscfQjSM9Qmgusa3k72Rp6TOGzvY9VtRAP3hDj1duUaaGov1CvZdMZDIjq2v7QAfpJqvI9Qhr2I2NyDMd%2BxprkIcrindUq21LWv5QytJiX%2FsKn%2FJDV3A%2FDB%2Bfa95pwzSxFG9ED8GDqi1kqmerIJq7f0eFJgVrx6Jw4vGtr9nIbkAQ1Uiy3B1ZEVcQ59B2%2BcW%2FJo%2B2JYZ%2BQz1Ui3H4Z%2B1USiV%2Bc4Qj7IKfnYyqd4ZIRiKNAnJ6lufKusyj7hO6EQzJa2he0nRguAY2YAtP2dnCnEtcTuRK9YVD%2BZircBD8ZT0RQM8gOUQNerO3Tased7qN1ye4%2BorIqg1icxe%2BLmD7jThpEtwS3AVUBuf%2Fvr19dY79UR5QRxWsuedTRXQK0t0wYVdCphUiQiB0o1N7dCkFHk2nBRh%2FroDfZv1SXSmGmWzUbXiqOlomVVwQ3ThRpSQzgC7YR3c3S%2BkUpcpgljB8WszbgBpPkPcLJwbM4aNvlkeY0j48f8wk%2FrWvQY6pgG%2FkLGOhtyV5JQsWapMFR1EM%2F3QjNztjQxHaP%2BpzFrjzGmv3YI4otLsippNhE8eut54DcOGAqxRh8%2FnS5IksSSMA8cs3qoiCWki9Pa0cmt7OpPZVZxGp5BfTB9CwDm0uXvoYjO7B00nbRfQSfhVPA3fpYqYyU8E3dzdpDGYvdKRuPYD10fKs5LQRWTQyoUDrmoWhN2wDWEPymTXKH7tqtElv3HkW%2F%2FG&X-Amz-Signature=acca648f60a6564f277496df7ea08fabcbc2c3169b64ea613b5ccd2b70fff294&X-Amz-SignedHeaders=host&x-id=GetObject)



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


