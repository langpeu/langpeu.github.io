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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPV4FVFY%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T072027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDQW8y%2F5xJqnOpdi%2BwYYGK535htvO5Ghj47gAZA0tWIiAiEA%2Fh%2FlmvVElr80EWniMAzPsqUk%2FAxVt5TJqxOBLYZ9w00qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2g79zZa8we4Q1WYyrcA6kc5DpPsBxzMGARg3xgBc2VCGLA7cBSidrAkP8JoXcUM%2F%2BHaRadkAwI%2FmhBl3mJK%2BDK%2BkBCjK2vZTKJ3jIwlOJqGG4iU7mgx11LapjHhQuPXA1CFLzdCreaWyufEPb2Znhcf%2BK0TVzvjfU1kVTAkEUaFUPgMwKi85nECgXTzG2alUQ8u%2BQJ0mYkXivUim7AvJlGFFChu0suhHgYZ6JOkFDQ9FnE0wl96%2BBJtutK3F5N1%2FxB%2B%2BjkqQ2y7%2BD0Gp69deJO%2FVxchSLhT%2BB04nREY%2FwB91CUw%2BFUdds2d6Sq3QLUtLBSYlYjkBP%2F96LIt0QlMZ%2BU5exwwZzVRo4uN4SRlI4NsCJvRb09bKtHsQJVcwFPWmyFt%2BWpDXWxKVZoU%2B8dDzQbgEx7x1CAvG%2B4we610OrppxlQuBOJZRK8zMXeomMensadt00Lm77BinJeedA2oKSkxyAzn89Ae0qRrdY9lle%2FxQAYkszqhvqI2t552zsiQRRhitT69e2XRHcPO47eFxuEVBiuczbWAJxBeabguGzS3RlmbGf%2FcBvSGHnjJjA66%2Bc1JGmLGfzxAUemzLH5MRST4JmszVfjUNzoC1L7fD2askU3ccVCdsgSCT6gQpa8Fr9u5%2BNCvtSOKjVhMJym2MoGOqUBISc8NmEN3XOkoPenUzSEwbZM3Zhg3fOplgJrS6TuCKO5wq8T1JKFXLj21eukv1vuIdv4i19jdVNELhGtELzYp8rlIivoV5yLy1zOV5KPa5UJymQMWcMlOMx%2B03OWkv9kVhOV6PL1EJjTC8sxnLj6eOTFq8oYG5HCYu0D962nHhUBEIBtT5DhLM3yJ5hCMo4R38IFAXinFG5go9pP%2FVygp1Y90Pch&X-Amz-Signature=5483feef1327d354e090245dd738c043d82f7f06937152d557f874b86072957d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPV4FVFY%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T072027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDQW8y%2F5xJqnOpdi%2BwYYGK535htvO5Ghj47gAZA0tWIiAiEA%2Fh%2FlmvVElr80EWniMAzPsqUk%2FAxVt5TJqxOBLYZ9w00qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2g79zZa8we4Q1WYyrcA6kc5DpPsBxzMGARg3xgBc2VCGLA7cBSidrAkP8JoXcUM%2F%2BHaRadkAwI%2FmhBl3mJK%2BDK%2BkBCjK2vZTKJ3jIwlOJqGG4iU7mgx11LapjHhQuPXA1CFLzdCreaWyufEPb2Znhcf%2BK0TVzvjfU1kVTAkEUaFUPgMwKi85nECgXTzG2alUQ8u%2BQJ0mYkXivUim7AvJlGFFChu0suhHgYZ6JOkFDQ9FnE0wl96%2BBJtutK3F5N1%2FxB%2B%2BjkqQ2y7%2BD0Gp69deJO%2FVxchSLhT%2BB04nREY%2FwB91CUw%2BFUdds2d6Sq3QLUtLBSYlYjkBP%2F96LIt0QlMZ%2BU5exwwZzVRo4uN4SRlI4NsCJvRb09bKtHsQJVcwFPWmyFt%2BWpDXWxKVZoU%2B8dDzQbgEx7x1CAvG%2B4we610OrppxlQuBOJZRK8zMXeomMensadt00Lm77BinJeedA2oKSkxyAzn89Ae0qRrdY9lle%2FxQAYkszqhvqI2t552zsiQRRhitT69e2XRHcPO47eFxuEVBiuczbWAJxBeabguGzS3RlmbGf%2FcBvSGHnjJjA66%2Bc1JGmLGfzxAUemzLH5MRST4JmszVfjUNzoC1L7fD2askU3ccVCdsgSCT6gQpa8Fr9u5%2BNCvtSOKjVhMJym2MoGOqUBISc8NmEN3XOkoPenUzSEwbZM3Zhg3fOplgJrS6TuCKO5wq8T1JKFXLj21eukv1vuIdv4i19jdVNELhGtELzYp8rlIivoV5yLy1zOV5KPa5UJymQMWcMlOMx%2B03OWkv9kVhOV6PL1EJjTC8sxnLj6eOTFq8oYG5HCYu0D962nHhUBEIBtT5DhLM3yJ5hCMo4R38IFAXinFG5go9pP%2FVygp1Y90Pch&X-Amz-Signature=9394aa31db50178401a2c5d483200e7aab12ed4559d660275bdbd31b9d11c445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPV4FVFY%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T072027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDQW8y%2F5xJqnOpdi%2BwYYGK535htvO5Ghj47gAZA0tWIiAiEA%2Fh%2FlmvVElr80EWniMAzPsqUk%2FAxVt5TJqxOBLYZ9w00qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2g79zZa8we4Q1WYyrcA6kc5DpPsBxzMGARg3xgBc2VCGLA7cBSidrAkP8JoXcUM%2F%2BHaRadkAwI%2FmhBl3mJK%2BDK%2BkBCjK2vZTKJ3jIwlOJqGG4iU7mgx11LapjHhQuPXA1CFLzdCreaWyufEPb2Znhcf%2BK0TVzvjfU1kVTAkEUaFUPgMwKi85nECgXTzG2alUQ8u%2BQJ0mYkXivUim7AvJlGFFChu0suhHgYZ6JOkFDQ9FnE0wl96%2BBJtutK3F5N1%2FxB%2B%2BjkqQ2y7%2BD0Gp69deJO%2FVxchSLhT%2BB04nREY%2FwB91CUw%2BFUdds2d6Sq3QLUtLBSYlYjkBP%2F96LIt0QlMZ%2BU5exwwZzVRo4uN4SRlI4NsCJvRb09bKtHsQJVcwFPWmyFt%2BWpDXWxKVZoU%2B8dDzQbgEx7x1CAvG%2B4we610OrppxlQuBOJZRK8zMXeomMensadt00Lm77BinJeedA2oKSkxyAzn89Ae0qRrdY9lle%2FxQAYkszqhvqI2t552zsiQRRhitT69e2XRHcPO47eFxuEVBiuczbWAJxBeabguGzS3RlmbGf%2FcBvSGHnjJjA66%2Bc1JGmLGfzxAUemzLH5MRST4JmszVfjUNzoC1L7fD2askU3ccVCdsgSCT6gQpa8Fr9u5%2BNCvtSOKjVhMJym2MoGOqUBISc8NmEN3XOkoPenUzSEwbZM3Zhg3fOplgJrS6TuCKO5wq8T1JKFXLj21eukv1vuIdv4i19jdVNELhGtELzYp8rlIivoV5yLy1zOV5KPa5UJymQMWcMlOMx%2B03OWkv9kVhOV6PL1EJjTC8sxnLj6eOTFq8oYG5HCYu0D962nHhUBEIBtT5DhLM3yJ5hCMo4R38IFAXinFG5go9pP%2FVygp1Y90Pch&X-Amz-Signature=8868182954ec8b88eb39207d8d67630a0628c6f08d9b7fc0765492b09c8c41b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


