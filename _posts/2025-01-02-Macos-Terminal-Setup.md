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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ66NMZ7%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T073804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFcJsuB9zncodk4kfhWMOM5rIv3Qr3E%2F3yKZXyTsLtJrAiBXa1q8j%2BUxWB4gbmisHqIF9zYto%2BTMcY%2FiGXl7BI0JziqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdLsUVzk2XKk20%2F8ZKtwD1dISoDg7Ccy1j4W7T5Y%2FrgdQX6DEV7or6jlwfwSSF%2BwbdYj848tNwK63oo1fZEWOWJUZzE9PUHIP%2FwM7yQR41K68k393uN0KkRQGSsV01eq6zj3Ww4ifrKHZY0YgC93HJS4Ryp92jMR30sanyX2QztsrDs0uK8TBGDN%2FvX9oYbTz8KCHYj3cQonbhPJHnZbDU%2BXt5oyFGh%2FvLkF6IA4qdlr74mbErmZUZxzsnb1wSP0HDkymNkuMDKipUpTsi9uNq3eMPlStrZ4ct%2FYANLmsXIgfw5fhC1PN7pnqTcTW5PaJmAKNlMqJRJgI7RLObXrL%2BVj3WOnTJjMmvjs6iVCDm98%2Fs5hHBc2cqCADvDu3TUVy4aQu6UtM%2BvWWS72pu1T4Rjo36vRjjRr6ROmnEYGs0YphkmLk4uuKN1bPCKvKMHWZp3eRxXXVePaxWbS8%2FKVS5PB1rwH7UMfN54MSKlwj804YfCgLw1HuiJPV9PMIEiGuX1HDgpH%2BU5ih%2BDf5Lhf4TSut9A92OyuxGoiK4IHHfTXij88flFiqUUvAB%2B1CAh6zHd9%2BImgULl%2FnSersfFijq343NiY38VUq8tsKHTg2UvRQjWp6AFE1AiX1CC4m8Zq2grZzldOJMH1YgXcwn6PYygY6pgH0nrYBs2fIRpvudwMV3jSdR4Fv%2BgRXB2oiTNNvBfqHXhszOvl26DEjN2cmPpouh8ezoxcOFUAW4eAQXgELfMffPG5pkSOVQH6xFkDR57XrTqw6Gqdc0f10eZtY7N8njSGk9DofhdmS0j4IdSPC9EovHcL%2FaxtcaWPNQKAHPYE49cQwv72Q1Z85qHOW2G1bP4t2wvZyKW4p5sxYN7gN56yzyX%2FsIeWf&X-Amz-Signature=39399a630cf0afee15b9b3b80d9b2cfb71edf28dc57887e1e1df0cd712b47983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ66NMZ7%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T073804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFcJsuB9zncodk4kfhWMOM5rIv3Qr3E%2F3yKZXyTsLtJrAiBXa1q8j%2BUxWB4gbmisHqIF9zYto%2BTMcY%2FiGXl7BI0JziqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdLsUVzk2XKk20%2F8ZKtwD1dISoDg7Ccy1j4W7T5Y%2FrgdQX6DEV7or6jlwfwSSF%2BwbdYj848tNwK63oo1fZEWOWJUZzE9PUHIP%2FwM7yQR41K68k393uN0KkRQGSsV01eq6zj3Ww4ifrKHZY0YgC93HJS4Ryp92jMR30sanyX2QztsrDs0uK8TBGDN%2FvX9oYbTz8KCHYj3cQonbhPJHnZbDU%2BXt5oyFGh%2FvLkF6IA4qdlr74mbErmZUZxzsnb1wSP0HDkymNkuMDKipUpTsi9uNq3eMPlStrZ4ct%2FYANLmsXIgfw5fhC1PN7pnqTcTW5PaJmAKNlMqJRJgI7RLObXrL%2BVj3WOnTJjMmvjs6iVCDm98%2Fs5hHBc2cqCADvDu3TUVy4aQu6UtM%2BvWWS72pu1T4Rjo36vRjjRr6ROmnEYGs0YphkmLk4uuKN1bPCKvKMHWZp3eRxXXVePaxWbS8%2FKVS5PB1rwH7UMfN54MSKlwj804YfCgLw1HuiJPV9PMIEiGuX1HDgpH%2BU5ih%2BDf5Lhf4TSut9A92OyuxGoiK4IHHfTXij88flFiqUUvAB%2B1CAh6zHd9%2BImgULl%2FnSersfFijq343NiY38VUq8tsKHTg2UvRQjWp6AFE1AiX1CC4m8Zq2grZzldOJMH1YgXcwn6PYygY6pgH0nrYBs2fIRpvudwMV3jSdR4Fv%2BgRXB2oiTNNvBfqHXhszOvl26DEjN2cmPpouh8ezoxcOFUAW4eAQXgELfMffPG5pkSOVQH6xFkDR57XrTqw6Gqdc0f10eZtY7N8njSGk9DofhdmS0j4IdSPC9EovHcL%2FaxtcaWPNQKAHPYE49cQwv72Q1Z85qHOW2G1bP4t2wvZyKW4p5sxYN7gN56yzyX%2FsIeWf&X-Amz-Signature=a3b6785bf6889ffb5cab9cfb16ff37e5da8df06c0d8f2a471e6aa0025ed179bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ66NMZ7%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T073804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFcJsuB9zncodk4kfhWMOM5rIv3Qr3E%2F3yKZXyTsLtJrAiBXa1q8j%2BUxWB4gbmisHqIF9zYto%2BTMcY%2FiGXl7BI0JziqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdLsUVzk2XKk20%2F8ZKtwD1dISoDg7Ccy1j4W7T5Y%2FrgdQX6DEV7or6jlwfwSSF%2BwbdYj848tNwK63oo1fZEWOWJUZzE9PUHIP%2FwM7yQR41K68k393uN0KkRQGSsV01eq6zj3Ww4ifrKHZY0YgC93HJS4Ryp92jMR30sanyX2QztsrDs0uK8TBGDN%2FvX9oYbTz8KCHYj3cQonbhPJHnZbDU%2BXt5oyFGh%2FvLkF6IA4qdlr74mbErmZUZxzsnb1wSP0HDkymNkuMDKipUpTsi9uNq3eMPlStrZ4ct%2FYANLmsXIgfw5fhC1PN7pnqTcTW5PaJmAKNlMqJRJgI7RLObXrL%2BVj3WOnTJjMmvjs6iVCDm98%2Fs5hHBc2cqCADvDu3TUVy4aQu6UtM%2BvWWS72pu1T4Rjo36vRjjRr6ROmnEYGs0YphkmLk4uuKN1bPCKvKMHWZp3eRxXXVePaxWbS8%2FKVS5PB1rwH7UMfN54MSKlwj804YfCgLw1HuiJPV9PMIEiGuX1HDgpH%2BU5ih%2BDf5Lhf4TSut9A92OyuxGoiK4IHHfTXij88flFiqUUvAB%2B1CAh6zHd9%2BImgULl%2FnSersfFijq343NiY38VUq8tsKHTg2UvRQjWp6AFE1AiX1CC4m8Zq2grZzldOJMH1YgXcwn6PYygY6pgH0nrYBs2fIRpvudwMV3jSdR4Fv%2BgRXB2oiTNNvBfqHXhszOvl26DEjN2cmPpouh8ezoxcOFUAW4eAQXgELfMffPG5pkSOVQH6xFkDR57XrTqw6Gqdc0f10eZtY7N8njSGk9DofhdmS0j4IdSPC9EovHcL%2FaxtcaWPNQKAHPYE49cQwv72Q1Z85qHOW2G1bP4t2wvZyKW4p5sxYN7gN56yzyX%2FsIeWf&X-Amz-Signature=4054d0f8bf2155d36ceee9cfbd58c96a026de66152d58bf66d8d4b8138ec0d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


