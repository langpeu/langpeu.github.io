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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPFRTEF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T030621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfeI2WO6xt6%2FrXUpL1mnmV8eDnvCklJ9ssAnceCSeAjAiEAoed7z6yL%2BbgDs9uRTUWQTrWz4dxjx5qtFZV73AoehXAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaUkTgOGQQ52u1iircA469ex9fsgKNnsvjX%2BAxaw7K0rNWCraEXvgo5ody%2FJi90%2BXk%2BaMkgksMChDDlNxV7sT6PobQm4JQhr0DXRnHAl6iSnIrgx%2FvAhsO%2Frf1xzaIESExgfi0CwBSIl5wbbLAKWyl%2Fg2XNNdekifP%2BukRAkPmJuHWtqZCyyVQEmhcGak3fdpUVPk95r2Bf%2FCzTY%2FuHIJqNzxghqueVH9R3iNaGujQVjUGaGX9VyI3Wzk1KC4iX9ltwW5eUSdJpiz1XIivYydhbFyR4qIkfmpCHK8PoAtuId5GZTOIKQEs3Bij7VQqiDMCyzPqX0E3Wc4VEeRARcW5Bnciz8AYSarvA6B9usnNbuvkyEQHm30jvloGyin11QNooHEZ%2BS2Q7NDt3UIo%2BcoM%2FERr1fExdKfb3OHcjgdR2u2gxKK2NE6GZ90XsHtKIJqsduD2LFHCJTEASUyBLq21G1CXf9VYoHlNCGbqsKwEP8dlUym9%2Bs6e%2FL0ot%2FpNBWhMa4wlh3DpdUeJ%2BActjiKZF2wXH4lfslRBRlRdA5oB1kgjlIiFUIFHKNvx7n%2BO4AZ%2FSdthQZmkQIAWSiIBfortkwv2Uiip5KFnfVZsZQMlyGZDKpPR59nNhEKa7t9MYJaGfXyKxhtjqrNhMIGm2r0GOqUBqZxNSlOAxLkkZxZHxwgVTX205DVAo7NimjOaWp%2BU6LAIHm6azNlqRo60H2VT2FpNArqBuoWxamw2ZOTRa7oYPsessLR0a3ttP0w7CURu3VXkQxGJqkdfacQBk6c3%2FxwO%2FCo2ueTFZiJLqGCU4TuK0VZPguV3Bhn28kJyZAzYR%2FRt36pvgcJOHD2pYB0qSfyJ03r%2FdYRVljbD6dA2eqLEHANr6gBf&X-Amz-Signature=dfcd1463d279c8d22866d1937c59f275252053432558dc5a6e2f4ab424b6a383&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPFRTEF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T030621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfeI2WO6xt6%2FrXUpL1mnmV8eDnvCklJ9ssAnceCSeAjAiEAoed7z6yL%2BbgDs9uRTUWQTrWz4dxjx5qtFZV73AoehXAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaUkTgOGQQ52u1iircA469ex9fsgKNnsvjX%2BAxaw7K0rNWCraEXvgo5ody%2FJi90%2BXk%2BaMkgksMChDDlNxV7sT6PobQm4JQhr0DXRnHAl6iSnIrgx%2FvAhsO%2Frf1xzaIESExgfi0CwBSIl5wbbLAKWyl%2Fg2XNNdekifP%2BukRAkPmJuHWtqZCyyVQEmhcGak3fdpUVPk95r2Bf%2FCzTY%2FuHIJqNzxghqueVH9R3iNaGujQVjUGaGX9VyI3Wzk1KC4iX9ltwW5eUSdJpiz1XIivYydhbFyR4qIkfmpCHK8PoAtuId5GZTOIKQEs3Bij7VQqiDMCyzPqX0E3Wc4VEeRARcW5Bnciz8AYSarvA6B9usnNbuvkyEQHm30jvloGyin11QNooHEZ%2BS2Q7NDt3UIo%2BcoM%2FERr1fExdKfb3OHcjgdR2u2gxKK2NE6GZ90XsHtKIJqsduD2LFHCJTEASUyBLq21G1CXf9VYoHlNCGbqsKwEP8dlUym9%2Bs6e%2FL0ot%2FpNBWhMa4wlh3DpdUeJ%2BActjiKZF2wXH4lfslRBRlRdA5oB1kgjlIiFUIFHKNvx7n%2BO4AZ%2FSdthQZmkQIAWSiIBfortkwv2Uiip5KFnfVZsZQMlyGZDKpPR59nNhEKa7t9MYJaGfXyKxhtjqrNhMIGm2r0GOqUBqZxNSlOAxLkkZxZHxwgVTX205DVAo7NimjOaWp%2BU6LAIHm6azNlqRo60H2VT2FpNArqBuoWxamw2ZOTRa7oYPsessLR0a3ttP0w7CURu3VXkQxGJqkdfacQBk6c3%2FxwO%2FCo2ueTFZiJLqGCU4TuK0VZPguV3Bhn28kJyZAzYR%2FRt36pvgcJOHD2pYB0qSfyJ03r%2FdYRVljbD6dA2eqLEHANr6gBf&X-Amz-Signature=5eb9a1e5c535326aa15ddcf0e6aa9f68574e2a926d7cef84e8caea01a66e8866&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPFRTEF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T030621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfeI2WO6xt6%2FrXUpL1mnmV8eDnvCklJ9ssAnceCSeAjAiEAoed7z6yL%2BbgDs9uRTUWQTrWz4dxjx5qtFZV73AoehXAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaUkTgOGQQ52u1iircA469ex9fsgKNnsvjX%2BAxaw7K0rNWCraEXvgo5ody%2FJi90%2BXk%2BaMkgksMChDDlNxV7sT6PobQm4JQhr0DXRnHAl6iSnIrgx%2FvAhsO%2Frf1xzaIESExgfi0CwBSIl5wbbLAKWyl%2Fg2XNNdekifP%2BukRAkPmJuHWtqZCyyVQEmhcGak3fdpUVPk95r2Bf%2FCzTY%2FuHIJqNzxghqueVH9R3iNaGujQVjUGaGX9VyI3Wzk1KC4iX9ltwW5eUSdJpiz1XIivYydhbFyR4qIkfmpCHK8PoAtuId5GZTOIKQEs3Bij7VQqiDMCyzPqX0E3Wc4VEeRARcW5Bnciz8AYSarvA6B9usnNbuvkyEQHm30jvloGyin11QNooHEZ%2BS2Q7NDt3UIo%2BcoM%2FERr1fExdKfb3OHcjgdR2u2gxKK2NE6GZ90XsHtKIJqsduD2LFHCJTEASUyBLq21G1CXf9VYoHlNCGbqsKwEP8dlUym9%2Bs6e%2FL0ot%2FpNBWhMa4wlh3DpdUeJ%2BActjiKZF2wXH4lfslRBRlRdA5oB1kgjlIiFUIFHKNvx7n%2BO4AZ%2FSdthQZmkQIAWSiIBfortkwv2Uiip5KFnfVZsZQMlyGZDKpPR59nNhEKa7t9MYJaGfXyKxhtjqrNhMIGm2r0GOqUBqZxNSlOAxLkkZxZHxwgVTX205DVAo7NimjOaWp%2BU6LAIHm6azNlqRo60H2VT2FpNArqBuoWxamw2ZOTRa7oYPsessLR0a3ttP0w7CURu3VXkQxGJqkdfacQBk6c3%2FxwO%2FCo2ueTFZiJLqGCU4TuK0VZPguV3Bhn28kJyZAzYR%2FRt36pvgcJOHD2pYB0qSfyJ03r%2FdYRVljbD6dA2eqLEHANr6gBf&X-Amz-Signature=f1b3bee0f42e7e69cc27cd161870c38d0c04376f3ec719c93c6c94761156c72c&X-Amz-SignedHeaders=host&x-id=GetObject)



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


