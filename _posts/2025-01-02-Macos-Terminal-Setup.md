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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFU6UYT%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T042827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLGFlNKaDiGEn%2Fei7XE0l%2BnvcEDFUHJtkTfacyV%2FQ%2BcAIhAPsH2IYf285wJqfbPQ6x3wK3uF%2BFuUbV%2BtsKomWbIYX9KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpyKFaloJi%2FLZw%2Bd8q3ANMEHb5UR4afNN2MxVKmGWmlSq8RWs2YEbom1ogOafsSPY7USFhZ23DoV%2B3VsqFEek2spUjqeNiVm8cVZ2I63rCbL45NxwzzHYNn0MIl%2FMGgF8CoxLMIq%2FxJtHvik7ywfLoz1OkLDkDv81N2i2YgOmCJtCEJt%2FFb%2F02Y1f2lkLYpagMnbhnGx48yajlfORnqfT8kxepZieIsa9uy6CjmUMTKLyo5zX%2BKFD3FlQNaTDwC3WLHT6hGguyA0rzEUJSPjGzuifdnLM%2F5ffo1L4WxEnoPV6JgC6P3ldoZy2AMO3duWnx54XMDCHgKTnjEAIwIVvCDCXOqFsuV5lp8XIxtfznoHd3bLUm%2FnCb26icNOpXcvn8%2BQdjQApFXfIc%2Fbkr57qz8JepYW9G8%2BTjWS%2BskDtyRHSjCOEaj90RK%2Bd3PIpmnetl93r%2FnlIUgXzgIcuIgpu03bAH0KiZwqdyz7PO4%2BgKG9Vy07ilxHxKCQYjdk%2BjcQIR1ymwReIo%2B2U2R9LUEX1QC3YB4qvZ5Ow1SZhkvXR5l99bbZAV9aPAud5vvuh0KtSdtm2zBO1SPxpfUoysVqmldlvTfMy4Tp06DZ%2BL8Cfd5VFSR9buJM5ty1zYmypC4pYmB%2F8JpEf7MuLBZTCZ3L3GBjqkAffAneO%2BNAjhHlcM2v5Ep07oOhd48ybo5O1i9qXOK62PVwovy4XTbp7qxEbfxyafbsYf8COOlKPk8peUPK1EyeBHSOmAYh7AMfJ762ilBfchunqUuUCcdSB1mMvk2HjgWGmIwsK2K7x%2F4rrJgqWtezwbYkkhlv7i0Oh0L36fuoQASqYOByD1pX54v5PwSscNo%2FYOwMZDwgD4636gFZRu0iq8HYqv&X-Amz-Signature=05734b23bc1776ffb4f91cfcc8a161b1b668613b7218d25b5062e2948f501ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFU6UYT%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T042827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLGFlNKaDiGEn%2Fei7XE0l%2BnvcEDFUHJtkTfacyV%2FQ%2BcAIhAPsH2IYf285wJqfbPQ6x3wK3uF%2BFuUbV%2BtsKomWbIYX9KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpyKFaloJi%2FLZw%2Bd8q3ANMEHb5UR4afNN2MxVKmGWmlSq8RWs2YEbom1ogOafsSPY7USFhZ23DoV%2B3VsqFEek2spUjqeNiVm8cVZ2I63rCbL45NxwzzHYNn0MIl%2FMGgF8CoxLMIq%2FxJtHvik7ywfLoz1OkLDkDv81N2i2YgOmCJtCEJt%2FFb%2F02Y1f2lkLYpagMnbhnGx48yajlfORnqfT8kxepZieIsa9uy6CjmUMTKLyo5zX%2BKFD3FlQNaTDwC3WLHT6hGguyA0rzEUJSPjGzuifdnLM%2F5ffo1L4WxEnoPV6JgC6P3ldoZy2AMO3duWnx54XMDCHgKTnjEAIwIVvCDCXOqFsuV5lp8XIxtfznoHd3bLUm%2FnCb26icNOpXcvn8%2BQdjQApFXfIc%2Fbkr57qz8JepYW9G8%2BTjWS%2BskDtyRHSjCOEaj90RK%2Bd3PIpmnetl93r%2FnlIUgXzgIcuIgpu03bAH0KiZwqdyz7PO4%2BgKG9Vy07ilxHxKCQYjdk%2BjcQIR1ymwReIo%2B2U2R9LUEX1QC3YB4qvZ5Ow1SZhkvXR5l99bbZAV9aPAud5vvuh0KtSdtm2zBO1SPxpfUoysVqmldlvTfMy4Tp06DZ%2BL8Cfd5VFSR9buJM5ty1zYmypC4pYmB%2F8JpEf7MuLBZTCZ3L3GBjqkAffAneO%2BNAjhHlcM2v5Ep07oOhd48ybo5O1i9qXOK62PVwovy4XTbp7qxEbfxyafbsYf8COOlKPk8peUPK1EyeBHSOmAYh7AMfJ762ilBfchunqUuUCcdSB1mMvk2HjgWGmIwsK2K7x%2F4rrJgqWtezwbYkkhlv7i0Oh0L36fuoQASqYOByD1pX54v5PwSscNo%2FYOwMZDwgD4636gFZRu0iq8HYqv&X-Amz-Signature=b123d6af909e2f0c543100ac4acdbf4163c24da15ebee9e5dc1a39ecc9d7141c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFU6UYT%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T042827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLGFlNKaDiGEn%2Fei7XE0l%2BnvcEDFUHJtkTfacyV%2FQ%2BcAIhAPsH2IYf285wJqfbPQ6x3wK3uF%2BFuUbV%2BtsKomWbIYX9KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpyKFaloJi%2FLZw%2Bd8q3ANMEHb5UR4afNN2MxVKmGWmlSq8RWs2YEbom1ogOafsSPY7USFhZ23DoV%2B3VsqFEek2spUjqeNiVm8cVZ2I63rCbL45NxwzzHYNn0MIl%2FMGgF8CoxLMIq%2FxJtHvik7ywfLoz1OkLDkDv81N2i2YgOmCJtCEJt%2FFb%2F02Y1f2lkLYpagMnbhnGx48yajlfORnqfT8kxepZieIsa9uy6CjmUMTKLyo5zX%2BKFD3FlQNaTDwC3WLHT6hGguyA0rzEUJSPjGzuifdnLM%2F5ffo1L4WxEnoPV6JgC6P3ldoZy2AMO3duWnx54XMDCHgKTnjEAIwIVvCDCXOqFsuV5lp8XIxtfznoHd3bLUm%2FnCb26icNOpXcvn8%2BQdjQApFXfIc%2Fbkr57qz8JepYW9G8%2BTjWS%2BskDtyRHSjCOEaj90RK%2Bd3PIpmnetl93r%2FnlIUgXzgIcuIgpu03bAH0KiZwqdyz7PO4%2BgKG9Vy07ilxHxKCQYjdk%2BjcQIR1ymwReIo%2B2U2R9LUEX1QC3YB4qvZ5Ow1SZhkvXR5l99bbZAV9aPAud5vvuh0KtSdtm2zBO1SPxpfUoysVqmldlvTfMy4Tp06DZ%2BL8Cfd5VFSR9buJM5ty1zYmypC4pYmB%2F8JpEf7MuLBZTCZ3L3GBjqkAffAneO%2BNAjhHlcM2v5Ep07oOhd48ybo5O1i9qXOK62PVwovy4XTbp7qxEbfxyafbsYf8COOlKPk8peUPK1EyeBHSOmAYh7AMfJ762ilBfchunqUuUCcdSB1mMvk2HjgWGmIwsK2K7x%2F4rrJgqWtezwbYkkhlv7i0Oh0L36fuoQASqYOByD1pX54v5PwSscNo%2FYOwMZDwgD4636gFZRu0iq8HYqv&X-Amz-Signature=9b6525a07cbdcbf1ed78445ad6de253d81aca8f9fbe3f04641febb5c6bd54432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


