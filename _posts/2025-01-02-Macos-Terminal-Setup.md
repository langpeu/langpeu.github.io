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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2OHVIO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T101406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDCwooxPhLet2%2FFHxi0iuzyQYKHKU8OX4rh35j%2B1kERXwIgbolLXZKhJtNxkLM3AJBxWfS6HHJ5ojHTVYD7W3wl5jkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAeQI4tROdQ9nVEfyrcA7kiYQPYYUIFFqxV%2FJ70VHDsG1QMjPsQgaeGeCu52%2FWF%2BTPU0p%2FydQt86F65a88SwnJo9dEAHp9vaqtG7lVadlhqYR%2FymJrCK2z39b6TYc7AzDuZTfAURavzyYp2eWeGwDL5GplN6VeAWtndS0Vkbgisg74Wd%2Bg5QpVG5Aiqj%2FVkXsQlzuM7%2F0p4QU6Buy6ucAu9eTwqgydhhIy2mDxP0Byps6frBScJt9kt84UsQtdwXn71U18MTcyZ8mQt3L3G8qpnjARxYF6W6JRE%2FdXg83ukPpxFVKXHWOisNuIS0z%2B7Mf2GF62elW%2F66sm0B8i%2FdiqYZVrFrIze2zfios%2Fzw%2FRrEE%2BX%2B9968pxKYMnx1H7mbZhGxgogq1DgbSrhTfAImjXcXF2lhAtyaMD0hi2bYWPwzfKb0pX7%2Bz5OZ2GwEmBERRn7Nxv4NwAT%2FaBZeZmGji45bKfCTef%2FHTCtHu1bjvyjPRFkaSXzkZ944AREwsmOOG4IeXSzjYFUSC2ooCSQz148A7hd7Roq6jIe4hnC1i9TOYkDjwW9X1DA9Mth0Pap8RkCZqBr%2FT7AbD5tgSeKV5V8Ue%2FjjuYbO0pqI519XDI%2BCACDi%2FsqaaVLjyOYBKB2Sy3ZxakmIWlHe7KNMIKi2MoGOqUBQAj1z5iMMjyoQbxU%2B7JjvcEv24LaZw1IKTV0SSsWU2wkAnfpMsCZgw4lOwZhzTvcnVcOfNTQ0dAGHHQZCeguIvtzcjGp67GJk7xnQN38ndMByBW2U3dZCXTraYU7ynvvrsOWNacvnfox57dYU6Mtj9rwx%2BExqc5E1gIPcsgjo1JCzHANw9jShngekh1WQbuL0iA%2F3xp5zEh8KkVl4bltxp%2FR%2BwKt&X-Amz-Signature=db2ebe58ed8df789ea7cba6834f0300708f6e963223814187cdf328a5ee0f9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2OHVIO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T101406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDCwooxPhLet2%2FFHxi0iuzyQYKHKU8OX4rh35j%2B1kERXwIgbolLXZKhJtNxkLM3AJBxWfS6HHJ5ojHTVYD7W3wl5jkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAeQI4tROdQ9nVEfyrcA7kiYQPYYUIFFqxV%2FJ70VHDsG1QMjPsQgaeGeCu52%2FWF%2BTPU0p%2FydQt86F65a88SwnJo9dEAHp9vaqtG7lVadlhqYR%2FymJrCK2z39b6TYc7AzDuZTfAURavzyYp2eWeGwDL5GplN6VeAWtndS0Vkbgisg74Wd%2Bg5QpVG5Aiqj%2FVkXsQlzuM7%2F0p4QU6Buy6ucAu9eTwqgydhhIy2mDxP0Byps6frBScJt9kt84UsQtdwXn71U18MTcyZ8mQt3L3G8qpnjARxYF6W6JRE%2FdXg83ukPpxFVKXHWOisNuIS0z%2B7Mf2GF62elW%2F66sm0B8i%2FdiqYZVrFrIze2zfios%2Fzw%2FRrEE%2BX%2B9968pxKYMnx1H7mbZhGxgogq1DgbSrhTfAImjXcXF2lhAtyaMD0hi2bYWPwzfKb0pX7%2Bz5OZ2GwEmBERRn7Nxv4NwAT%2FaBZeZmGji45bKfCTef%2FHTCtHu1bjvyjPRFkaSXzkZ944AREwsmOOG4IeXSzjYFUSC2ooCSQz148A7hd7Roq6jIe4hnC1i9TOYkDjwW9X1DA9Mth0Pap8RkCZqBr%2FT7AbD5tgSeKV5V8Ue%2FjjuYbO0pqI519XDI%2BCACDi%2FsqaaVLjyOYBKB2Sy3ZxakmIWlHe7KNMIKi2MoGOqUBQAj1z5iMMjyoQbxU%2B7JjvcEv24LaZw1IKTV0SSsWU2wkAnfpMsCZgw4lOwZhzTvcnVcOfNTQ0dAGHHQZCeguIvtzcjGp67GJk7xnQN38ndMByBW2U3dZCXTraYU7ynvvrsOWNacvnfox57dYU6Mtj9rwx%2BExqc5E1gIPcsgjo1JCzHANw9jShngekh1WQbuL0iA%2F3xp5zEh8KkVl4bltxp%2FR%2BwKt&X-Amz-Signature=251c165e89a84f10e39c8c6c1147ce17f646b6e0764670a5df8ad63aafdc92e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2OHVIO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T101406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDCwooxPhLet2%2FFHxi0iuzyQYKHKU8OX4rh35j%2B1kERXwIgbolLXZKhJtNxkLM3AJBxWfS6HHJ5ojHTVYD7W3wl5jkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAeQI4tROdQ9nVEfyrcA7kiYQPYYUIFFqxV%2FJ70VHDsG1QMjPsQgaeGeCu52%2FWF%2BTPU0p%2FydQt86F65a88SwnJo9dEAHp9vaqtG7lVadlhqYR%2FymJrCK2z39b6TYc7AzDuZTfAURavzyYp2eWeGwDL5GplN6VeAWtndS0Vkbgisg74Wd%2Bg5QpVG5Aiqj%2FVkXsQlzuM7%2F0p4QU6Buy6ucAu9eTwqgydhhIy2mDxP0Byps6frBScJt9kt84UsQtdwXn71U18MTcyZ8mQt3L3G8qpnjARxYF6W6JRE%2FdXg83ukPpxFVKXHWOisNuIS0z%2B7Mf2GF62elW%2F66sm0B8i%2FdiqYZVrFrIze2zfios%2Fzw%2FRrEE%2BX%2B9968pxKYMnx1H7mbZhGxgogq1DgbSrhTfAImjXcXF2lhAtyaMD0hi2bYWPwzfKb0pX7%2Bz5OZ2GwEmBERRn7Nxv4NwAT%2FaBZeZmGji45bKfCTef%2FHTCtHu1bjvyjPRFkaSXzkZ944AREwsmOOG4IeXSzjYFUSC2ooCSQz148A7hd7Roq6jIe4hnC1i9TOYkDjwW9X1DA9Mth0Pap8RkCZqBr%2FT7AbD5tgSeKV5V8Ue%2FjjuYbO0pqI519XDI%2BCACDi%2FsqaaVLjyOYBKB2Sy3ZxakmIWlHe7KNMIKi2MoGOqUBQAj1z5iMMjyoQbxU%2B7JjvcEv24LaZw1IKTV0SSsWU2wkAnfpMsCZgw4lOwZhzTvcnVcOfNTQ0dAGHHQZCeguIvtzcjGp67GJk7xnQN38ndMByBW2U3dZCXTraYU7ynvvrsOWNacvnfox57dYU6Mtj9rwx%2BExqc5E1gIPcsgjo1JCzHANw9jShngekh1WQbuL0iA%2F3xp5zEh8KkVl4bltxp%2FR%2BwKt&X-Amz-Signature=6950e6bc598b0e9729be905c3c2143e269b2a9e001d5453bbd52205260ebed0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


