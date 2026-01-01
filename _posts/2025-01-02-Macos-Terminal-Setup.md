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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65A7NGX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T155615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC1nwSL8QZZAUDXt4WwKvdUtob3OqAMYmDQFiXM6w0gmQIhALWm8jOA8g3SA4CeQCVpLcgi4BQ6oM%2Bq%2F0fDZ%2FATMboXKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVJWagaMjv9HH10y4q3APNx%2FUKvnYuqJDyzlyS6xXMlz301cckJVOjLcB0CqLyW9MqhoV5jxxSQW0dAqojqfCBqMah%2FGDWbiaRColjinDqsRhdIwHwiefneJFfr9gNdh%2BI8y4KEmaHG9YqxSDp7IiDBGoxrPpAp%2FyuUwId12hEhAbY6jAkmw1C3UHwY3JHpdgZrj%2B4i1mSRNIHs8%2FwK8eNavkroO2fFtKDr64hFEmi0rRsDtMdfyXv3LME%2BZgi5pY8kcEqRtirCFJCnzKwDfdzPjFfKR9ZY64F6qeC5nb9LTR06FXZXRM8zgQKHz7YlH6OGy7VCHrT1dhJ2WaacnGVt9qxeKsv04yUmtKUutnqqLHdHQcQDg6t9cYCmrvvwXsB8U%2BzSjdY%2F7v2VlIkf24S31Ry2VgJcqFiqSDBjbZGywk9u0ATcGig0YjGb8RWYrkxw9xxwnhEY%2BQ8ipAhjgtckWAXgNzNCardPGNlPB0DjbmHxbZbxC%2FH4LEqCmcSwv7UrlmPoUEvioXMYbEdELaRcAXpQlAshVPOUkm3hxK4plMiXj%2BAO5BREjGC8JBCcTjyn%2FNEY0o7y0lYJy7G5s%2FxiYvMGm1xg5g7Z7lF6IyA66hDEY%2FyZquPQDoqQ6ImOZuvdFX2sHFpP526xTCK5tnKBjqkAUWTQZnnuMq7UQhYZ01IGV%2F9dJ5FZJG%2F14NAKnofo6sne3%2F%2F3STuBs0U%2B7GTfBlTwg2jeuZgQUpvuSr0hh8TM4oivdjQdMF8yV2pL7whsQY0UNqzTuFQrtParCl7uTJJZAFiSXsWIJviStADaVVCGsEzvGPBrfZyuj9KAt03%2F%2BMcW0EUfo6d0rD%2BeLNt4S7w6%2BWO9jxvI%2F2oiJhue617YmVA2T5b&X-Amz-Signature=cbf8060e666ef2e9f986de0ae9a4b319a546ff0b7072470cf6b06b0bb0c74656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65A7NGX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T155615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC1nwSL8QZZAUDXt4WwKvdUtob3OqAMYmDQFiXM6w0gmQIhALWm8jOA8g3SA4CeQCVpLcgi4BQ6oM%2Bq%2F0fDZ%2FATMboXKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVJWagaMjv9HH10y4q3APNx%2FUKvnYuqJDyzlyS6xXMlz301cckJVOjLcB0CqLyW9MqhoV5jxxSQW0dAqojqfCBqMah%2FGDWbiaRColjinDqsRhdIwHwiefneJFfr9gNdh%2BI8y4KEmaHG9YqxSDp7IiDBGoxrPpAp%2FyuUwId12hEhAbY6jAkmw1C3UHwY3JHpdgZrj%2B4i1mSRNIHs8%2FwK8eNavkroO2fFtKDr64hFEmi0rRsDtMdfyXv3LME%2BZgi5pY8kcEqRtirCFJCnzKwDfdzPjFfKR9ZY64F6qeC5nb9LTR06FXZXRM8zgQKHz7YlH6OGy7VCHrT1dhJ2WaacnGVt9qxeKsv04yUmtKUutnqqLHdHQcQDg6t9cYCmrvvwXsB8U%2BzSjdY%2F7v2VlIkf24S31Ry2VgJcqFiqSDBjbZGywk9u0ATcGig0YjGb8RWYrkxw9xxwnhEY%2BQ8ipAhjgtckWAXgNzNCardPGNlPB0DjbmHxbZbxC%2FH4LEqCmcSwv7UrlmPoUEvioXMYbEdELaRcAXpQlAshVPOUkm3hxK4plMiXj%2BAO5BREjGC8JBCcTjyn%2FNEY0o7y0lYJy7G5s%2FxiYvMGm1xg5g7Z7lF6IyA66hDEY%2FyZquPQDoqQ6ImOZuvdFX2sHFpP526xTCK5tnKBjqkAUWTQZnnuMq7UQhYZ01IGV%2F9dJ5FZJG%2F14NAKnofo6sne3%2F%2F3STuBs0U%2B7GTfBlTwg2jeuZgQUpvuSr0hh8TM4oivdjQdMF8yV2pL7whsQY0UNqzTuFQrtParCl7uTJJZAFiSXsWIJviStADaVVCGsEzvGPBrfZyuj9KAt03%2F%2BMcW0EUfo6d0rD%2BeLNt4S7w6%2BWO9jxvI%2F2oiJhue617YmVA2T5b&X-Amz-Signature=4f888c541437323016a9ffba5893975e4c05574405a9697f31302d8e92d70c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65A7NGX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T155615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC1nwSL8QZZAUDXt4WwKvdUtob3OqAMYmDQFiXM6w0gmQIhALWm8jOA8g3SA4CeQCVpLcgi4BQ6oM%2Bq%2F0fDZ%2FATMboXKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVJWagaMjv9HH10y4q3APNx%2FUKvnYuqJDyzlyS6xXMlz301cckJVOjLcB0CqLyW9MqhoV5jxxSQW0dAqojqfCBqMah%2FGDWbiaRColjinDqsRhdIwHwiefneJFfr9gNdh%2BI8y4KEmaHG9YqxSDp7IiDBGoxrPpAp%2FyuUwId12hEhAbY6jAkmw1C3UHwY3JHpdgZrj%2B4i1mSRNIHs8%2FwK8eNavkroO2fFtKDr64hFEmi0rRsDtMdfyXv3LME%2BZgi5pY8kcEqRtirCFJCnzKwDfdzPjFfKR9ZY64F6qeC5nb9LTR06FXZXRM8zgQKHz7YlH6OGy7VCHrT1dhJ2WaacnGVt9qxeKsv04yUmtKUutnqqLHdHQcQDg6t9cYCmrvvwXsB8U%2BzSjdY%2F7v2VlIkf24S31Ry2VgJcqFiqSDBjbZGywk9u0ATcGig0YjGb8RWYrkxw9xxwnhEY%2BQ8ipAhjgtckWAXgNzNCardPGNlPB0DjbmHxbZbxC%2FH4LEqCmcSwv7UrlmPoUEvioXMYbEdELaRcAXpQlAshVPOUkm3hxK4plMiXj%2BAO5BREjGC8JBCcTjyn%2FNEY0o7y0lYJy7G5s%2FxiYvMGm1xg5g7Z7lF6IyA66hDEY%2FyZquPQDoqQ6ImOZuvdFX2sHFpP526xTCK5tnKBjqkAUWTQZnnuMq7UQhYZ01IGV%2F9dJ5FZJG%2F14NAKnofo6sne3%2F%2F3STuBs0U%2B7GTfBlTwg2jeuZgQUpvuSr0hh8TM4oivdjQdMF8yV2pL7whsQY0UNqzTuFQrtParCl7uTJJZAFiSXsWIJviStADaVVCGsEzvGPBrfZyuj9KAt03%2F%2BMcW0EUfo6d0rD%2BeLNt4S7w6%2BWO9jxvI%2F2oiJhue617YmVA2T5b&X-Amz-Signature=df0eb546ebfe3ef65ee33e311f4cc6c36d4f05e7b14427b9cee9f921610d5831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


