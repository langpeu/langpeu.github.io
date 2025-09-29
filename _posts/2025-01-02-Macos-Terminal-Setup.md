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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T35F3MQV%2F20250929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250929T145725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID8HcwaVjrFgvANyLpN9R3T6LvzBGdCGwdtOOb43i3NrAiEA0V7%2B4K4r5yn35yC%2Fo46U94WrCTBmMt3HK4APcGA4szQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3l3ql2Dp%2BvfHB8ircA2eXGvvqjfFz4TkrXKrMJFDg35Ve9%2BI%2BretHGN5Zi5Fb3nxEppktM2LYd6WZynFVb%2FMdcKXyga3rt76HuzyLGZMzzBorgcdWoky%2F7aVj0zYEgqM5JPMPzoyjfN1OYMFrhj%2BCqM3wml%2BINNuFns6zjpX%2F6AeItp3e0o4zJdTQN5tWLF4cMRbPIj6fmJoDfwM5TZ1uJTFAfy0pwk1tWAs0yg6TlOS37bjg8nC84Optep0k7def4CLnUwxtg%2B%2F6aTly8L%2FxEdKu28KMW7puVzdCFN19W8rhXAeXFKv4ZdUq5mSXLuSDDym4V0ZCHBbq0vsGvOcTSSUEpAdutwvebo255fzJESgQy8l3NOoXSU0K00NRVOiLZwnE2ODV12qOcqddfZkv5p82SI61fohG0VagynsWrwsh2TfdkhpGKBWFMlma%2FkDvn%2BezhTYAWRDygkZP0jS5RQmFC4KgtTE4ye577eZnUKh6hNza95dvzz2y5VVqU45%2BmA048ilbOARZbV4dMWY1FGxw%2FkxMx9pucd8%2FoeolfhbKUBWfeEg321yuReWC00AaTMxTCAkZeSWn4WawuA1IpcfzE7SeG4qk8w4721S%2BD0rdkh0tN%2FPe%2BfbRRlJB%2FdEJwscXO1k%2BTw6tMPqx6sYGOqUB7BnjCeakLkBRzrhTCoi%2BEwNtKf2lGZ%2FYWiLjBJCiOWzwob7tT%2FI5bWOHGzD5Qw6OB3Aum1sczfcfF312acgJVxDKw9JHjbelIC4fhfklQKsCR4q4Yfj8hckfqeaDnQSIZ1mjhpseTJBd8NYfmYwrn%2FQVAheoL5VRhe6BlDFIZZqSiUa4jNMYVRUkked6BLUru%2FVuxdp3dRKBYkUgZpHn01xyoviB&X-Amz-Signature=5a4bd57fef00ef66fd528940807d85671e6b4798dcae02c8fbef52f58baa9ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T35F3MQV%2F20250929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250929T145725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID8HcwaVjrFgvANyLpN9R3T6LvzBGdCGwdtOOb43i3NrAiEA0V7%2B4K4r5yn35yC%2Fo46U94WrCTBmMt3HK4APcGA4szQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3l3ql2Dp%2BvfHB8ircA2eXGvvqjfFz4TkrXKrMJFDg35Ve9%2BI%2BretHGN5Zi5Fb3nxEppktM2LYd6WZynFVb%2FMdcKXyga3rt76HuzyLGZMzzBorgcdWoky%2F7aVj0zYEgqM5JPMPzoyjfN1OYMFrhj%2BCqM3wml%2BINNuFns6zjpX%2F6AeItp3e0o4zJdTQN5tWLF4cMRbPIj6fmJoDfwM5TZ1uJTFAfy0pwk1tWAs0yg6TlOS37bjg8nC84Optep0k7def4CLnUwxtg%2B%2F6aTly8L%2FxEdKu28KMW7puVzdCFN19W8rhXAeXFKv4ZdUq5mSXLuSDDym4V0ZCHBbq0vsGvOcTSSUEpAdutwvebo255fzJESgQy8l3NOoXSU0K00NRVOiLZwnE2ODV12qOcqddfZkv5p82SI61fohG0VagynsWrwsh2TfdkhpGKBWFMlma%2FkDvn%2BezhTYAWRDygkZP0jS5RQmFC4KgtTE4ye577eZnUKh6hNza95dvzz2y5VVqU45%2BmA048ilbOARZbV4dMWY1FGxw%2FkxMx9pucd8%2FoeolfhbKUBWfeEg321yuReWC00AaTMxTCAkZeSWn4WawuA1IpcfzE7SeG4qk8w4721S%2BD0rdkh0tN%2FPe%2BfbRRlJB%2FdEJwscXO1k%2BTw6tMPqx6sYGOqUB7BnjCeakLkBRzrhTCoi%2BEwNtKf2lGZ%2FYWiLjBJCiOWzwob7tT%2FI5bWOHGzD5Qw6OB3Aum1sczfcfF312acgJVxDKw9JHjbelIC4fhfklQKsCR4q4Yfj8hckfqeaDnQSIZ1mjhpseTJBd8NYfmYwrn%2FQVAheoL5VRhe6BlDFIZZqSiUa4jNMYVRUkked6BLUru%2FVuxdp3dRKBYkUgZpHn01xyoviB&X-Amz-Signature=bb50975c2ddeb39d1cabe92c1f0d4423490f2352648bc3a07fb503bfb78fd25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T35F3MQV%2F20250929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250929T145725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID8HcwaVjrFgvANyLpN9R3T6LvzBGdCGwdtOOb43i3NrAiEA0V7%2B4K4r5yn35yC%2Fo46U94WrCTBmMt3HK4APcGA4szQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs3l3ql2Dp%2BvfHB8ircA2eXGvvqjfFz4TkrXKrMJFDg35Ve9%2BI%2BretHGN5Zi5Fb3nxEppktM2LYd6WZynFVb%2FMdcKXyga3rt76HuzyLGZMzzBorgcdWoky%2F7aVj0zYEgqM5JPMPzoyjfN1OYMFrhj%2BCqM3wml%2BINNuFns6zjpX%2F6AeItp3e0o4zJdTQN5tWLF4cMRbPIj6fmJoDfwM5TZ1uJTFAfy0pwk1tWAs0yg6TlOS37bjg8nC84Optep0k7def4CLnUwxtg%2B%2F6aTly8L%2FxEdKu28KMW7puVzdCFN19W8rhXAeXFKv4ZdUq5mSXLuSDDym4V0ZCHBbq0vsGvOcTSSUEpAdutwvebo255fzJESgQy8l3NOoXSU0K00NRVOiLZwnE2ODV12qOcqddfZkv5p82SI61fohG0VagynsWrwsh2TfdkhpGKBWFMlma%2FkDvn%2BezhTYAWRDygkZP0jS5RQmFC4KgtTE4ye577eZnUKh6hNza95dvzz2y5VVqU45%2BmA048ilbOARZbV4dMWY1FGxw%2FkxMx9pucd8%2FoeolfhbKUBWfeEg321yuReWC00AaTMxTCAkZeSWn4WawuA1IpcfzE7SeG4qk8w4721S%2BD0rdkh0tN%2FPe%2BfbRRlJB%2FdEJwscXO1k%2BTw6tMPqx6sYGOqUB7BnjCeakLkBRzrhTCoi%2BEwNtKf2lGZ%2FYWiLjBJCiOWzwob7tT%2FI5bWOHGzD5Qw6OB3Aum1sczfcfF312acgJVxDKw9JHjbelIC4fhfklQKsCR4q4Yfj8hckfqeaDnQSIZ1mjhpseTJBd8NYfmYwrn%2FQVAheoL5VRhe6BlDFIZZqSiUa4jNMYVRUkked6BLUru%2FVuxdp3dRKBYkUgZpHn01xyoviB&X-Amz-Signature=7f4a751c86774253a4fb45ae8e585c7bc226f68789d5d23f830bc3d17d3b0a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


