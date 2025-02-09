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
[https://iterm2.com/downloads/stable/latest](https://iterm2.com/downloads/stable/latest)


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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2DVY52%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T015707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHIfEIvFrmRyFn18bYr9eZKrmBcGXcoMXOuirHZOuk8gIhAJWf2yjLPNMOEzS7agbBdIW9bzxDEg5HdKKtzsB2PKBxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvTiwBA%2F14nKbUzAUq3APLJRL14iqHeSJrWr30si3fPuR9JtCpB%2BVaFUEsoqaPf5E%2BuCekoxkmyXBmXGnp1%2BG2gcwXLiY2XDlyD%2Broe3vYaO3XBXGYL1tWpnJIHhrulMcWOGR07yjM6kcQA1cXghTaZWXHHiXn%2F7aIEi6AIH%2FB3kwGXxUoXevQDELZ%2B5TlyL%2BJMWb0E3NLCMSQtrGAMyDuB96LnaAIc14xvnJ4lb8QVxU7pYz%2FDC6K7C3AFYDCDPjgnyurt1iZNek%2F1v6EABYhk2lk%2BpC%2B%2F9NlNvnW5WCTB4Tzi3g0ukLkYY3W%2Fke0gW0sqofqX2aHql2oCfzgadFv9BM67ZKCV5yjl0l6h%2B3%2BW0B6tehp3wFiBdrkUGw%2FcqV1MmlhLj2qEPnoF%2BK2GDNaeOWzeV6E7DYOHjgu7RPsPpFSTecMvz9ZiQ60Dr4%2Bf2QgihI%2BPOtk2CGDrzKMW607zWlAnbqY2MA7SfHxB5UUroPdjFj2PrW7LOJJ39X5wgfueGDBQlRz7Vy5ecCtMPa3LeFQLaxxbi75AGK9%2BKHPg0IEn0lgwwL%2FO%2BgqZ0ZTa7F2NQ0RYHMB9L3WbwVDYFNOXmcioFUPK%2BqF8vfwYfXa%2B7m8zdWcfSjdGjl3mWGyyNx3dg54F6wxhjpo0DC585%2B9BjqkAVrOa%2B0jbd9TVvFV%2BG1ND7aLlGFbmQmce7t%2BbjPM7155%2B7foeossT8FnjD7js8U2E%2BT%2Bl04Qe9u4yhziz5hNOtKBSF3ciEoMC%2FUMF%2B6nfu%2Bgu9QLedaojwvBEx5drOLAHglEVKQ%2BChNr6RtGZkF9d71WWX8myBf8a5BIJjd40Ja7%2BdjOX5Nse3mq6J9icZpipRURJUI6EzP4U9XU2%2FFsHmr4lWvv&X-Amz-Signature=87024aed37cab0777e3a2c09937863b9fc548a9b4309b799c9a183a4190a57f2&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2DVY52%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T015707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHIfEIvFrmRyFn18bYr9eZKrmBcGXcoMXOuirHZOuk8gIhAJWf2yjLPNMOEzS7agbBdIW9bzxDEg5HdKKtzsB2PKBxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvTiwBA%2F14nKbUzAUq3APLJRL14iqHeSJrWr30si3fPuR9JtCpB%2BVaFUEsoqaPf5E%2BuCekoxkmyXBmXGnp1%2BG2gcwXLiY2XDlyD%2Broe3vYaO3XBXGYL1tWpnJIHhrulMcWOGR07yjM6kcQA1cXghTaZWXHHiXn%2F7aIEi6AIH%2FB3kwGXxUoXevQDELZ%2B5TlyL%2BJMWb0E3NLCMSQtrGAMyDuB96LnaAIc14xvnJ4lb8QVxU7pYz%2FDC6K7C3AFYDCDPjgnyurt1iZNek%2F1v6EABYhk2lk%2BpC%2B%2F9NlNvnW5WCTB4Tzi3g0ukLkYY3W%2Fke0gW0sqofqX2aHql2oCfzgadFv9BM67ZKCV5yjl0l6h%2B3%2BW0B6tehp3wFiBdrkUGw%2FcqV1MmlhLj2qEPnoF%2BK2GDNaeOWzeV6E7DYOHjgu7RPsPpFSTecMvz9ZiQ60Dr4%2Bf2QgihI%2BPOtk2CGDrzKMW607zWlAnbqY2MA7SfHxB5UUroPdjFj2PrW7LOJJ39X5wgfueGDBQlRz7Vy5ecCtMPa3LeFQLaxxbi75AGK9%2BKHPg0IEn0lgwwL%2FO%2BgqZ0ZTa7F2NQ0RYHMB9L3WbwVDYFNOXmcioFUPK%2BqF8vfwYfXa%2B7m8zdWcfSjdGjl3mWGyyNx3dg54F6wxhjpo0DC585%2B9BjqkAVrOa%2B0jbd9TVvFV%2BG1ND7aLlGFbmQmce7t%2BbjPM7155%2B7foeossT8FnjD7js8U2E%2BT%2Bl04Qe9u4yhziz5hNOtKBSF3ciEoMC%2FUMF%2B6nfu%2Bgu9QLedaojwvBEx5drOLAHglEVKQ%2BChNr6RtGZkF9d71WWX8myBf8a5BIJjd40Ja7%2BdjOX5Nse3mq6J9icZpipRURJUI6EzP4U9XU2%2FFsHmr4lWvv&X-Amz-Signature=132a9adbda699de4b9e0e97b19f482d28adca6b43aafe66b6400eb893418d9fa&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2DVY52%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T015707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHIfEIvFrmRyFn18bYr9eZKrmBcGXcoMXOuirHZOuk8gIhAJWf2yjLPNMOEzS7agbBdIW9bzxDEg5HdKKtzsB2PKBxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvTiwBA%2F14nKbUzAUq3APLJRL14iqHeSJrWr30si3fPuR9JtCpB%2BVaFUEsoqaPf5E%2BuCekoxkmyXBmXGnp1%2BG2gcwXLiY2XDlyD%2Broe3vYaO3XBXGYL1tWpnJIHhrulMcWOGR07yjM6kcQA1cXghTaZWXHHiXn%2F7aIEi6AIH%2FB3kwGXxUoXevQDELZ%2B5TlyL%2BJMWb0E3NLCMSQtrGAMyDuB96LnaAIc14xvnJ4lb8QVxU7pYz%2FDC6K7C3AFYDCDPjgnyurt1iZNek%2F1v6EABYhk2lk%2BpC%2B%2F9NlNvnW5WCTB4Tzi3g0ukLkYY3W%2Fke0gW0sqofqX2aHql2oCfzgadFv9BM67ZKCV5yjl0l6h%2B3%2BW0B6tehp3wFiBdrkUGw%2FcqV1MmlhLj2qEPnoF%2BK2GDNaeOWzeV6E7DYOHjgu7RPsPpFSTecMvz9ZiQ60Dr4%2Bf2QgihI%2BPOtk2CGDrzKMW607zWlAnbqY2MA7SfHxB5UUroPdjFj2PrW7LOJJ39X5wgfueGDBQlRz7Vy5ecCtMPa3LeFQLaxxbi75AGK9%2BKHPg0IEn0lgwwL%2FO%2BgqZ0ZTa7F2NQ0RYHMB9L3WbwVDYFNOXmcioFUPK%2BqF8vfwYfXa%2B7m8zdWcfSjdGjl3mWGyyNx3dg54F6wxhjpo0DC585%2B9BjqkAVrOa%2B0jbd9TVvFV%2BG1ND7aLlGFbmQmce7t%2BbjPM7155%2B7foeossT8FnjD7js8U2E%2BT%2Bl04Qe9u4yhziz5hNOtKBSF3ciEoMC%2FUMF%2B6nfu%2Bgu9QLedaojwvBEx5drOLAHglEVKQ%2BChNr6RtGZkF9d71WWX8myBf8a5BIJjd40Ja7%2BdjOX5Nse3mq6J9icZpipRURJUI6EzP4U9XU2%2FFsHmr4lWvv&X-Amz-Signature=77b39abdbb8a8b3059c0513c4d078e93e2291423fce65f4614678f2f11c67873&X-Amz-SignedHeaders=host&x-id=GetObject)



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


