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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3Q6DED%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T075327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBkXgbo2FRlbz9l5XbX%2F8%2FB6GukmgvpCUYdmeOwV9mZhAiEAgKaL997hxIXG%2Fsptjhn2rAsVOTZMWdCmDK0%2BvKdAtpgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMVLIPEv63oHaVdvCrcA2aAHVz5Qw2kVzHzD4rk89Jyy%2BdlkPQ5sDax5dHkFLv7NKZXHENPu9H2d%2BdO7bG8aL3JF5gXLK33GN7tyz4GxdRHCg9rxn4aG%2FqO%2BOzfb9PYjJ%2Fz7%2BLUHxxLm1O2Kv3bqmiTOZlFIRoAlE4M5RONA%2FWUuh1dzougIJ2KKvXky%2FjsC2ZUhmyl2CJUQKzAJQWOr16dTpFRFeTb5SlSSk8kDhnDVQ2jJCbU1u4ifDO4XZyPaJZkEjUO%2BoE7DNrelaotHkdJZomX0YKRdyferR2pVVbaJ%2FNBVUvt4dcex58wfDSZwgrkYBfUsPvg%2FUV7X98g7fhGBVfEjkCy0LaKvfVC67hA3VpuH21HWvb33A08KWv8wKz9h7vkMMLpE6A3yaM7KTAtVN5BSWLBGEs15jVKV9aDzWmtyFKFVidRUj2yzVj1wrehFKik467tIzKZST0gBzBlzQwqmaCQZZ7EfganFRn01tx69g73IVpMkJCgZvUEaTHC6ku77n6y75%2FEaBtoeZzEoRYIQ%2BUfXZQM6R2NU1El8bH%2BWGT32edgNjUCtOvoyBNVP2rVo%2BWkWomxAt9EpbIUB2zIwKaIqMAY993LowW9OfR8UxYmSJnI2MbqlNM7zpBR9xBPT1xvxF%2FEMMik2MoGOqUBn7IEJimT8mfpWlyt2F%2BOTJ78mu47xXvilT9YNAILRVhaQkkcXOAWRweitAp6khcNLeyms8Ve4FDDMdtb7c2zBcFZR1rMApPLh7LqxdmL3iQNWmcXhCpkDhIa4LIAur20ymDKZI1D78lwnULin2vYNc8e%2B77sVA3SbToovXsEGFD5ZFG1ls%2F8g5dc0UDFfpE6QIRlC%2FTqEGYpflNZL%2FonFFcPBgq5&X-Amz-Signature=8e4483cfc77ae92fa10aa2477df827a06b6d766be7acd85b27811f670b7d3baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3Q6DED%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T075327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBkXgbo2FRlbz9l5XbX%2F8%2FB6GukmgvpCUYdmeOwV9mZhAiEAgKaL997hxIXG%2Fsptjhn2rAsVOTZMWdCmDK0%2BvKdAtpgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMVLIPEv63oHaVdvCrcA2aAHVz5Qw2kVzHzD4rk89Jyy%2BdlkPQ5sDax5dHkFLv7NKZXHENPu9H2d%2BdO7bG8aL3JF5gXLK33GN7tyz4GxdRHCg9rxn4aG%2FqO%2BOzfb9PYjJ%2Fz7%2BLUHxxLm1O2Kv3bqmiTOZlFIRoAlE4M5RONA%2FWUuh1dzougIJ2KKvXky%2FjsC2ZUhmyl2CJUQKzAJQWOr16dTpFRFeTb5SlSSk8kDhnDVQ2jJCbU1u4ifDO4XZyPaJZkEjUO%2BoE7DNrelaotHkdJZomX0YKRdyferR2pVVbaJ%2FNBVUvt4dcex58wfDSZwgrkYBfUsPvg%2FUV7X98g7fhGBVfEjkCy0LaKvfVC67hA3VpuH21HWvb33A08KWv8wKz9h7vkMMLpE6A3yaM7KTAtVN5BSWLBGEs15jVKV9aDzWmtyFKFVidRUj2yzVj1wrehFKik467tIzKZST0gBzBlzQwqmaCQZZ7EfganFRn01tx69g73IVpMkJCgZvUEaTHC6ku77n6y75%2FEaBtoeZzEoRYIQ%2BUfXZQM6R2NU1El8bH%2BWGT32edgNjUCtOvoyBNVP2rVo%2BWkWomxAt9EpbIUB2zIwKaIqMAY993LowW9OfR8UxYmSJnI2MbqlNM7zpBR9xBPT1xvxF%2FEMMik2MoGOqUBn7IEJimT8mfpWlyt2F%2BOTJ78mu47xXvilT9YNAILRVhaQkkcXOAWRweitAp6khcNLeyms8Ve4FDDMdtb7c2zBcFZR1rMApPLh7LqxdmL3iQNWmcXhCpkDhIa4LIAur20ymDKZI1D78lwnULin2vYNc8e%2B77sVA3SbToovXsEGFD5ZFG1ls%2F8g5dc0UDFfpE6QIRlC%2FTqEGYpflNZL%2FonFFcPBgq5&X-Amz-Signature=359a647fcbdb402c1a1be6f8a8eb090955dd35c23847bacb9ce79fcfba367681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3Q6DED%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T075327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBkXgbo2FRlbz9l5XbX%2F8%2FB6GukmgvpCUYdmeOwV9mZhAiEAgKaL997hxIXG%2Fsptjhn2rAsVOTZMWdCmDK0%2BvKdAtpgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMVLIPEv63oHaVdvCrcA2aAHVz5Qw2kVzHzD4rk89Jyy%2BdlkPQ5sDax5dHkFLv7NKZXHENPu9H2d%2BdO7bG8aL3JF5gXLK33GN7tyz4GxdRHCg9rxn4aG%2FqO%2BOzfb9PYjJ%2Fz7%2BLUHxxLm1O2Kv3bqmiTOZlFIRoAlE4M5RONA%2FWUuh1dzougIJ2KKvXky%2FjsC2ZUhmyl2CJUQKzAJQWOr16dTpFRFeTb5SlSSk8kDhnDVQ2jJCbU1u4ifDO4XZyPaJZkEjUO%2BoE7DNrelaotHkdJZomX0YKRdyferR2pVVbaJ%2FNBVUvt4dcex58wfDSZwgrkYBfUsPvg%2FUV7X98g7fhGBVfEjkCy0LaKvfVC67hA3VpuH21HWvb33A08KWv8wKz9h7vkMMLpE6A3yaM7KTAtVN5BSWLBGEs15jVKV9aDzWmtyFKFVidRUj2yzVj1wrehFKik467tIzKZST0gBzBlzQwqmaCQZZ7EfganFRn01tx69g73IVpMkJCgZvUEaTHC6ku77n6y75%2FEaBtoeZzEoRYIQ%2BUfXZQM6R2NU1El8bH%2BWGT32edgNjUCtOvoyBNVP2rVo%2BWkWomxAt9EpbIUB2zIwKaIqMAY993LowW9OfR8UxYmSJnI2MbqlNM7zpBR9xBPT1xvxF%2FEMMik2MoGOqUBn7IEJimT8mfpWlyt2F%2BOTJ78mu47xXvilT9YNAILRVhaQkkcXOAWRweitAp6khcNLeyms8Ve4FDDMdtb7c2zBcFZR1rMApPLh7LqxdmL3iQNWmcXhCpkDhIa4LIAur20ymDKZI1D78lwnULin2vYNc8e%2B77sVA3SbToovXsEGFD5ZFG1ls%2F8g5dc0UDFfpE6QIRlC%2FTqEGYpflNZL%2FonFFcPBgq5&X-Amz-Signature=7c371f56c513158a456a364c1d6c7bc89af5fe11e39c6d59e7359167a41c02ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


