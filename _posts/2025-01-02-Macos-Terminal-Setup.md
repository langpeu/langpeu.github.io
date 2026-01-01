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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQC6N3B%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T023033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICJYkPwXAuA9UeqqUmYdvoCl40rjOgsTkdmT%2FpzBqIY3AiEA03cKE95o933eqxx4AJgDZ2EOQl9MXvDIz0tOgZ0JORgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGueUwytiU7%2FqFUjQCrcA1GjTjhzTc9j%2FUUy%2BAngdXF2fdPvERmgZguSU9pgD3UGvIH4%2B7OlLdpuOSv2cAGGJl3%2FeaSmenhi3EH0OVq3%2FwY%2FFWcE59V0dxRiZ2Do9eQWtbZJh9sbeJk4Q%2BxxNKDsz8dfOG2epHc8UFgtamiBfn8QaPlOhz1L3RaIPKvdoM%2FJo%2F5wp%2Bu%2BpPVJX0USYwYBQzAcgHM%2BVKCdz7RWuzCyvLhANXFZgczs842EvbnXDH5bo8n0T8LTJnTaUtyOm%2FCrXp8t%2Foig1e2tSrmGvPK4yuEbU%2B6Zj1Dwq%2BUWJf1Ivnvh2ipPKXasOLNL5IaC0a9uvZ%2FvZP3M2eSPoEYTWyv%2BJAiHCU5Ja0OJhhR8Ktip0Gm0SnAEolRBwG7s%2Fnlwnoezkena7dLatcPCktkE7oox3xrLyl22wtMqPBjFSqmwFBAWT%2BzXeR2ulFNn0PQVrmmXj%2FLXw20NrL1KsssYlnEaN9UPIUeSH3oUQlTIT7MqCNsobleqRb2jpH%2FBrbVlxKbuP%2FxbV3H7GIkXwx4ZD%2B4KHvcixZ6J3EbtOaZKt5llmdJY%2Fbhh19HpcwGNf%2B0tfs%2BFGj809n5U3tN2PefGHBz%2BxUrHhMXQ0BPLU%2FjuVL3vHokXEaKgkHr%2FSoepedgRMJeI18oGOqUBazxJk54jUvdR5EB6b6rsSPhpLuKKHmFFOLLhAIipCsiwKDtCOktRaOBZx1GnMDDLiA95jMQ8vwmB92uVo3UQeVsJrBFQnfKNsmAVsfOZf9QcvSZSdCJBEFWo3gGdwNKeQ68D8oMJBYRrvufAlSw6oF5kgO%2FafpwJDS8NodfU82DllHsR6Q%2BiD0QDTXNw4Mo88s%2FG9tJEq0fWlH7sDBo7c7aHvaKq&X-Amz-Signature=bcd4a79038f8b65034381299adc8400f7aff0934576a8bc208a04f5aff201f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQC6N3B%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T023033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICJYkPwXAuA9UeqqUmYdvoCl40rjOgsTkdmT%2FpzBqIY3AiEA03cKE95o933eqxx4AJgDZ2EOQl9MXvDIz0tOgZ0JORgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGueUwytiU7%2FqFUjQCrcA1GjTjhzTc9j%2FUUy%2BAngdXF2fdPvERmgZguSU9pgD3UGvIH4%2B7OlLdpuOSv2cAGGJl3%2FeaSmenhi3EH0OVq3%2FwY%2FFWcE59V0dxRiZ2Do9eQWtbZJh9sbeJk4Q%2BxxNKDsz8dfOG2epHc8UFgtamiBfn8QaPlOhz1L3RaIPKvdoM%2FJo%2F5wp%2Bu%2BpPVJX0USYwYBQzAcgHM%2BVKCdz7RWuzCyvLhANXFZgczs842EvbnXDH5bo8n0T8LTJnTaUtyOm%2FCrXp8t%2Foig1e2tSrmGvPK4yuEbU%2B6Zj1Dwq%2BUWJf1Ivnvh2ipPKXasOLNL5IaC0a9uvZ%2FvZP3M2eSPoEYTWyv%2BJAiHCU5Ja0OJhhR8Ktip0Gm0SnAEolRBwG7s%2Fnlwnoezkena7dLatcPCktkE7oox3xrLyl22wtMqPBjFSqmwFBAWT%2BzXeR2ulFNn0PQVrmmXj%2FLXw20NrL1KsssYlnEaN9UPIUeSH3oUQlTIT7MqCNsobleqRb2jpH%2FBrbVlxKbuP%2FxbV3H7GIkXwx4ZD%2B4KHvcixZ6J3EbtOaZKt5llmdJY%2Fbhh19HpcwGNf%2B0tfs%2BFGj809n5U3tN2PefGHBz%2BxUrHhMXQ0BPLU%2FjuVL3vHokXEaKgkHr%2FSoepedgRMJeI18oGOqUBazxJk54jUvdR5EB6b6rsSPhpLuKKHmFFOLLhAIipCsiwKDtCOktRaOBZx1GnMDDLiA95jMQ8vwmB92uVo3UQeVsJrBFQnfKNsmAVsfOZf9QcvSZSdCJBEFWo3gGdwNKeQ68D8oMJBYRrvufAlSw6oF5kgO%2FafpwJDS8NodfU82DllHsR6Q%2BiD0QDTXNw4Mo88s%2FG9tJEq0fWlH7sDBo7c7aHvaKq&X-Amz-Signature=a76c9acf8486e8b63eec31ecfa3b961b3d6cc05cef49b79773468b3eddd3d1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQC6N3B%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T023033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICJYkPwXAuA9UeqqUmYdvoCl40rjOgsTkdmT%2FpzBqIY3AiEA03cKE95o933eqxx4AJgDZ2EOQl9MXvDIz0tOgZ0JORgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGueUwytiU7%2FqFUjQCrcA1GjTjhzTc9j%2FUUy%2BAngdXF2fdPvERmgZguSU9pgD3UGvIH4%2B7OlLdpuOSv2cAGGJl3%2FeaSmenhi3EH0OVq3%2FwY%2FFWcE59V0dxRiZ2Do9eQWtbZJh9sbeJk4Q%2BxxNKDsz8dfOG2epHc8UFgtamiBfn8QaPlOhz1L3RaIPKvdoM%2FJo%2F5wp%2Bu%2BpPVJX0USYwYBQzAcgHM%2BVKCdz7RWuzCyvLhANXFZgczs842EvbnXDH5bo8n0T8LTJnTaUtyOm%2FCrXp8t%2Foig1e2tSrmGvPK4yuEbU%2B6Zj1Dwq%2BUWJf1Ivnvh2ipPKXasOLNL5IaC0a9uvZ%2FvZP3M2eSPoEYTWyv%2BJAiHCU5Ja0OJhhR8Ktip0Gm0SnAEolRBwG7s%2Fnlwnoezkena7dLatcPCktkE7oox3xrLyl22wtMqPBjFSqmwFBAWT%2BzXeR2ulFNn0PQVrmmXj%2FLXw20NrL1KsssYlnEaN9UPIUeSH3oUQlTIT7MqCNsobleqRb2jpH%2FBrbVlxKbuP%2FxbV3H7GIkXwx4ZD%2B4KHvcixZ6J3EbtOaZKt5llmdJY%2Fbhh19HpcwGNf%2B0tfs%2BFGj809n5U3tN2PefGHBz%2BxUrHhMXQ0BPLU%2FjuVL3vHokXEaKgkHr%2FSoepedgRMJeI18oGOqUBazxJk54jUvdR5EB6b6rsSPhpLuKKHmFFOLLhAIipCsiwKDtCOktRaOBZx1GnMDDLiA95jMQ8vwmB92uVo3UQeVsJrBFQnfKNsmAVsfOZf9QcvSZSdCJBEFWo3gGdwNKeQ68D8oMJBYRrvufAlSw6oF5kgO%2FafpwJDS8NodfU82DllHsR6Q%2BiD0QDTXNw4Mo88s%2FG9tJEq0fWlH7sDBo7c7aHvaKq&X-Amz-Signature=8b383813fdb2d0dbfbb1cd85389c3a5f4f0d50b86208feb4ffc3a876ed5df8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


