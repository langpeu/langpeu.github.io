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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466744WH3Q4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9LBr4RE4xirqvosTo%2FyZPUkP1YvshKP3LOGb6i5bhdAIhAKxEuf77tGONn94AYHHJznofzblCyY6LUIcCyFF%2B6YoFKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzri9RXSd9UHfjHzpEq3APgsHSIsVkeeA85CY3hIKTMbJf3XxScpAimjkZANpQ%2FmShrKMYaHM9FpnKxPH79Y%2FTct7JJ2KWd1PpSbAUhwiCAjhngTI1u86wYk73cs7wVhy%2BQYWFr0rpTwG9P2RmiCsCR%2FEQ22h7lwiz57Bcj6k194sB8S8TJLHubeM%2FUdBWb8ap%2BTtlaboz2cg%2B%2BThSlbB8EVitAeD3te5EkS%2Bdf6v68p9%2BWNhjcxzYucrqeUSndp0GOCr81OO%2FgrdOkQDKCvSFa24E59KqioHAmplT%2FjZ5c1drwDPeFXQUjNWAeXwHn%2FFV8kp6O0kjhsK2jrKY4VEvFyKAQpxLqBh3JtHeZuRsEcHHNPWyRh9rIsyAWDOLyQz6bOnPhAIK9JIZpGdtdAawWl8ZqhD6xFRrnZkWkV%2FhgBoTPpjKVwzmYwqzTdG%2F7ypPOs2NCZ1UlmQ9l%2F%2FAmXYsQ8VMFhEYYU59nELifUnVDq%2F5kHetVfa1EZfOjd%2FkXf9jLZ3ZmnvSKVsvIYQW%2FfYaTeUDErq8AyuJVlLqJh431eRGA0LHJPZqtauQDeHnsqhaKsa575%2FGKDFuiCbDPWvVDfKqj1T08kExBv4XxwLGv5xvv9itc0CNJTsVaMHeVItMFXj2oms3Yfu4eUzCVi73GBjqkAa7jDuMtmuVoc08JeJY%2FJ94JxEyN7Ts3TzDCMIFa%2BhToc58X4aI6hSdly21HmuM8Amy%2FI5wh2ci78L65aSWmYLaYWwcgfahLPUHBRHGKF0TQ8aBz%2Ff1fWNrYJtRbAlfidIJwBvOiI1nk7gZiYgH3Mgc9M3aqveG1p%2Fs4b2R6m49wopbq8BWI00oMW86hrL6DYox69Tll9sTiS0Vy1STPK8XU5kNT&X-Amz-Signature=0c64e425f46672d8179db963f280afe9d374c6cc441ba89569e625c17dbd16fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466744WH3Q4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9LBr4RE4xirqvosTo%2FyZPUkP1YvshKP3LOGb6i5bhdAIhAKxEuf77tGONn94AYHHJznofzblCyY6LUIcCyFF%2B6YoFKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzri9RXSd9UHfjHzpEq3APgsHSIsVkeeA85CY3hIKTMbJf3XxScpAimjkZANpQ%2FmShrKMYaHM9FpnKxPH79Y%2FTct7JJ2KWd1PpSbAUhwiCAjhngTI1u86wYk73cs7wVhy%2BQYWFr0rpTwG9P2RmiCsCR%2FEQ22h7lwiz57Bcj6k194sB8S8TJLHubeM%2FUdBWb8ap%2BTtlaboz2cg%2B%2BThSlbB8EVitAeD3te5EkS%2Bdf6v68p9%2BWNhjcxzYucrqeUSndp0GOCr81OO%2FgrdOkQDKCvSFa24E59KqioHAmplT%2FjZ5c1drwDPeFXQUjNWAeXwHn%2FFV8kp6O0kjhsK2jrKY4VEvFyKAQpxLqBh3JtHeZuRsEcHHNPWyRh9rIsyAWDOLyQz6bOnPhAIK9JIZpGdtdAawWl8ZqhD6xFRrnZkWkV%2FhgBoTPpjKVwzmYwqzTdG%2F7ypPOs2NCZ1UlmQ9l%2F%2FAmXYsQ8VMFhEYYU59nELifUnVDq%2F5kHetVfa1EZfOjd%2FkXf9jLZ3ZmnvSKVsvIYQW%2FfYaTeUDErq8AyuJVlLqJh431eRGA0LHJPZqtauQDeHnsqhaKsa575%2FGKDFuiCbDPWvVDfKqj1T08kExBv4XxwLGv5xvv9itc0CNJTsVaMHeVItMFXj2oms3Yfu4eUzCVi73GBjqkAa7jDuMtmuVoc08JeJY%2FJ94JxEyN7Ts3TzDCMIFa%2BhToc58X4aI6hSdly21HmuM8Amy%2FI5wh2ci78L65aSWmYLaYWwcgfahLPUHBRHGKF0TQ8aBz%2Ff1fWNrYJtRbAlfidIJwBvOiI1nk7gZiYgH3Mgc9M3aqveG1p%2Fs4b2R6m49wopbq8BWI00oMW86hrL6DYox69Tll9sTiS0Vy1STPK8XU5kNT&X-Amz-Signature=63debbe1a2cec9c5145de52b6106c156794609feafac6c74343249a46abe4d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466744WH3Q4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9LBr4RE4xirqvosTo%2FyZPUkP1YvshKP3LOGb6i5bhdAIhAKxEuf77tGONn94AYHHJznofzblCyY6LUIcCyFF%2B6YoFKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzri9RXSd9UHfjHzpEq3APgsHSIsVkeeA85CY3hIKTMbJf3XxScpAimjkZANpQ%2FmShrKMYaHM9FpnKxPH79Y%2FTct7JJ2KWd1PpSbAUhwiCAjhngTI1u86wYk73cs7wVhy%2BQYWFr0rpTwG9P2RmiCsCR%2FEQ22h7lwiz57Bcj6k194sB8S8TJLHubeM%2FUdBWb8ap%2BTtlaboz2cg%2B%2BThSlbB8EVitAeD3te5EkS%2Bdf6v68p9%2BWNhjcxzYucrqeUSndp0GOCr81OO%2FgrdOkQDKCvSFa24E59KqioHAmplT%2FjZ5c1drwDPeFXQUjNWAeXwHn%2FFV8kp6O0kjhsK2jrKY4VEvFyKAQpxLqBh3JtHeZuRsEcHHNPWyRh9rIsyAWDOLyQz6bOnPhAIK9JIZpGdtdAawWl8ZqhD6xFRrnZkWkV%2FhgBoTPpjKVwzmYwqzTdG%2F7ypPOs2NCZ1UlmQ9l%2F%2FAmXYsQ8VMFhEYYU59nELifUnVDq%2F5kHetVfa1EZfOjd%2FkXf9jLZ3ZmnvSKVsvIYQW%2FfYaTeUDErq8AyuJVlLqJh431eRGA0LHJPZqtauQDeHnsqhaKsa575%2FGKDFuiCbDPWvVDfKqj1T08kExBv4XxwLGv5xvv9itc0CNJTsVaMHeVItMFXj2oms3Yfu4eUzCVi73GBjqkAa7jDuMtmuVoc08JeJY%2FJ94JxEyN7Ts3TzDCMIFa%2BhToc58X4aI6hSdly21HmuM8Amy%2FI5wh2ci78L65aSWmYLaYWwcgfahLPUHBRHGKF0TQ8aBz%2Ff1fWNrYJtRbAlfidIJwBvOiI1nk7gZiYgH3Mgc9M3aqveG1p%2Fs4b2R6m49wopbq8BWI00oMW86hrL6DYox69Tll9sTiS0Vy1STPK8XU5kNT&X-Amz-Signature=d8af64c21ed3bb2bfbceed7aef00555bbed0846098f939714d2fe323c9ac0186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


