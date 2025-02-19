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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNM4OBR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T142611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1a4Dr3dPExlfhNdGx9I6NYxyLN5QGVOvVoJTh1dCvcAIhAOjRHnRH4oIorEyGo5MFU9l3aGFgBExchKYRNkI6tGX%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVdt3afs8YfCNo608q3APEemALAqojcfdvxT5Zbp6E2hBnrQyUWbva8bvJuKXH616vnJaXV6tCcAlYrLlbQ1Vb7eEbHKpghN9CAskCZc37Wl52NqbUHzF%2FbSHo0Yw8v65nq9S8cVt4E31s5fqSjgjn%2BXhGQeXPk5zlJQse%2FpGC1g2kHGUN1Pei5Eb5pStcL40rKonQB7F4ZsBgTw%2BOfqWFLhjhs1OBXbfwKy71Xmd1HeI64dfLNjLR7ISHHH687FqIeav6oPvD5RETjFixRUEe9YNCPZPmd58kehppVlbpYfi%2Fv%2FDUEfztQESf8vlmc%2Bvx1xtun6mhAyGGXJQ2GoKThc89dyeMMmvZy0wmHY0jwh%2B7cvihG%2FPaZmlGUnXMntKXUbPIbYSOwFLIP5FFzzxJy6vfjFJf3JAlkErLuu81NsicHDeNUEHiAJR5PEqM7UaBeF4kSlr%2F8ovMVHJPoMYriRteELhavoE%2FnpoYufAVjYNunkq%2F7ujAtnCU6iV7lhevFY9Hvv0dFfJR7Y9yx8l2cvaDvdxb%2BA%2FNnLplkm%2BLpEJD6QVypz2anbe1XqbiqGZwYytrxHlW%2BChZE5zHpmHOzQp5nkL5C2JK2ihYXd6Vx9eSFN%2BGa5IMRk2q%2FA%2BuTl03izRgrOgVMVtL0DDB%2Bda9BjqkAQq9Fykthd1d4EjfM52sE7pkpveUrmI32vAJa4BhetGN7kKdq%2BaAdbbM8p5u82PcYA9CGKkS9IDgBKlB%2BsdqdC6ciL137yF3OTnrQDnfp%2BKrSmjOxVpgCTMKCH8UsXOTukqWD2s9Pmayxs9nazDOZHQzhE5Xg%2Fj9Z01UaQmDup5mWnn%2FRZgEnvxFpHWXnHC6QdF8qiydxa5kMs%2FXGCEmtrcM2Ckd&X-Amz-Signature=45ab540fc75a9a1ebb30790c75dabc471a9ebfaf89ce89dbe9d7fa3575b851a8&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNM4OBR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T142611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1a4Dr3dPExlfhNdGx9I6NYxyLN5QGVOvVoJTh1dCvcAIhAOjRHnRH4oIorEyGo5MFU9l3aGFgBExchKYRNkI6tGX%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVdt3afs8YfCNo608q3APEemALAqojcfdvxT5Zbp6E2hBnrQyUWbva8bvJuKXH616vnJaXV6tCcAlYrLlbQ1Vb7eEbHKpghN9CAskCZc37Wl52NqbUHzF%2FbSHo0Yw8v65nq9S8cVt4E31s5fqSjgjn%2BXhGQeXPk5zlJQse%2FpGC1g2kHGUN1Pei5Eb5pStcL40rKonQB7F4ZsBgTw%2BOfqWFLhjhs1OBXbfwKy71Xmd1HeI64dfLNjLR7ISHHH687FqIeav6oPvD5RETjFixRUEe9YNCPZPmd58kehppVlbpYfi%2Fv%2FDUEfztQESf8vlmc%2Bvx1xtun6mhAyGGXJQ2GoKThc89dyeMMmvZy0wmHY0jwh%2B7cvihG%2FPaZmlGUnXMntKXUbPIbYSOwFLIP5FFzzxJy6vfjFJf3JAlkErLuu81NsicHDeNUEHiAJR5PEqM7UaBeF4kSlr%2F8ovMVHJPoMYriRteELhavoE%2FnpoYufAVjYNunkq%2F7ujAtnCU6iV7lhevFY9Hvv0dFfJR7Y9yx8l2cvaDvdxb%2BA%2FNnLplkm%2BLpEJD6QVypz2anbe1XqbiqGZwYytrxHlW%2BChZE5zHpmHOzQp5nkL5C2JK2ihYXd6Vx9eSFN%2BGa5IMRk2q%2FA%2BuTl03izRgrOgVMVtL0DDB%2Bda9BjqkAQq9Fykthd1d4EjfM52sE7pkpveUrmI32vAJa4BhetGN7kKdq%2BaAdbbM8p5u82PcYA9CGKkS9IDgBKlB%2BsdqdC6ciL137yF3OTnrQDnfp%2BKrSmjOxVpgCTMKCH8UsXOTukqWD2s9Pmayxs9nazDOZHQzhE5Xg%2Fj9Z01UaQmDup5mWnn%2FRZgEnvxFpHWXnHC6QdF8qiydxa5kMs%2FXGCEmtrcM2Ckd&X-Amz-Signature=048296390781c61232a9e658dd83c6ffcaca57417c62e94237fe74fda3f6c50b&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNM4OBR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T142611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1a4Dr3dPExlfhNdGx9I6NYxyLN5QGVOvVoJTh1dCvcAIhAOjRHnRH4oIorEyGo5MFU9l3aGFgBExchKYRNkI6tGX%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVdt3afs8YfCNo608q3APEemALAqojcfdvxT5Zbp6E2hBnrQyUWbva8bvJuKXH616vnJaXV6tCcAlYrLlbQ1Vb7eEbHKpghN9CAskCZc37Wl52NqbUHzF%2FbSHo0Yw8v65nq9S8cVt4E31s5fqSjgjn%2BXhGQeXPk5zlJQse%2FpGC1g2kHGUN1Pei5Eb5pStcL40rKonQB7F4ZsBgTw%2BOfqWFLhjhs1OBXbfwKy71Xmd1HeI64dfLNjLR7ISHHH687FqIeav6oPvD5RETjFixRUEe9YNCPZPmd58kehppVlbpYfi%2Fv%2FDUEfztQESf8vlmc%2Bvx1xtun6mhAyGGXJQ2GoKThc89dyeMMmvZy0wmHY0jwh%2B7cvihG%2FPaZmlGUnXMntKXUbPIbYSOwFLIP5FFzzxJy6vfjFJf3JAlkErLuu81NsicHDeNUEHiAJR5PEqM7UaBeF4kSlr%2F8ovMVHJPoMYriRteELhavoE%2FnpoYufAVjYNunkq%2F7ujAtnCU6iV7lhevFY9Hvv0dFfJR7Y9yx8l2cvaDvdxb%2BA%2FNnLplkm%2BLpEJD6QVypz2anbe1XqbiqGZwYytrxHlW%2BChZE5zHpmHOzQp5nkL5C2JK2ihYXd6Vx9eSFN%2BGa5IMRk2q%2FA%2BuTl03izRgrOgVMVtL0DDB%2Bda9BjqkAQq9Fykthd1d4EjfM52sE7pkpveUrmI32vAJa4BhetGN7kKdq%2BaAdbbM8p5u82PcYA9CGKkS9IDgBKlB%2BsdqdC6ciL137yF3OTnrQDnfp%2BKrSmjOxVpgCTMKCH8UsXOTukqWD2s9Pmayxs9nazDOZHQzhE5Xg%2Fj9Z01UaQmDup5mWnn%2FRZgEnvxFpHWXnHC6QdF8qiydxa5kMs%2FXGCEmtrcM2Ckd&X-Amz-Signature=d3ec195a1e82cf24c4358c98c115925914a75ab3543bfa66c0a1c3e44e81c61b&X-Amz-SignedHeaders=host&x-id=GetObject)



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


