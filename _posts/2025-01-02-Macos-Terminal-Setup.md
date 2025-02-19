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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEILPAK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDodePCPI9n6bf7gPhKQVRq2FDcyifUJfrPwoqg9UPxEwIhAPqE3HOyO7Qwp8lsHszd0aWJc5i40tDaPjXU%2FlEpupLIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFcO2J7O%2FEIoQQKuUq3AOYNqwUg2Nm6vJcZUmWswY2xZpicMao30DeCS1rYaUnjIua3HEfUvSDgbXF4kuMxoIGeuGNN6UMLlXVJE0NqRpkLff83eRNAVLjI4aPhDOJTr9vr5dlaRGNqAEiN0BIbcb8djv3LoCbtme9MZJBwuATeMtZNayASRLISbDNzKTu8WSETb5yiKIPmY0cwRF1OFYHgw%2F0Am8ir4emLV7KY82%2BVBto72eG7Vd7blNw%2FqUqtBYOZNBnzP%2FzsjzBXAFhq%2BCuQh1wxrCtGC1ebEDv%2BNYumYKBpl7dCNTn%2BvSKrAXcawxis9V9mRKHwWvLs22eJPcW8bNg2I1ZQGh8LLWQMNO4k9VdpOCxYZIRxxrt6LGiV4UPAIXS8E5qL4rSEjBTX%2Bs54kQjqh0Fb5Ss2YP8E7QXAs0LwRTVUZeOsnqbxTsaLn4nYqnPOg0fZwxLq0rLz11FSjvbYo%2BHDi6p5kYneXzmG1qvpJQRp72CVjneuWB7tsrVkRZdpmaQZUsN0AKb5PAF7zwLtaWEq87xZH1ZoS2%2Fw8nQufBl6ukkhGGvffGQE%2F4CEaCbZ40vYQjzY%2FOUexX59bi9wOP2LsFcNh4o9QQWI7DY5EKezU7nwTtkEgQjYlL1hYebdZoBkKy0GzCd%2Bta9BjqkAbqwXE413DlOxXYS%2FT6bwNnW7pZenzxsg%2BhilH4PJQ%2FNfUQd%2BwzIZyFjYyr6YXDCDV46PJJSzrmknB%2BHXxtoJVJrt0jtZug0q6cr9njUtB2fNacT%2F6maLw9nWdd7%2FEJHpOdmmYBochKzkz82Pf1lHGPisKlmnI%2BVWhmvv6mGa0w%2FyMmuVI7dwWTaItQ9x7Gj14xMSlfUiE1uYB67y3IE0V03aGma&X-Amz-Signature=f7c5a720d21a07c9e8d27001ac01df30cc459ca7bc9e8444ecff74fce81d8cfd&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEILPAK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDodePCPI9n6bf7gPhKQVRq2FDcyifUJfrPwoqg9UPxEwIhAPqE3HOyO7Qwp8lsHszd0aWJc5i40tDaPjXU%2FlEpupLIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFcO2J7O%2FEIoQQKuUq3AOYNqwUg2Nm6vJcZUmWswY2xZpicMao30DeCS1rYaUnjIua3HEfUvSDgbXF4kuMxoIGeuGNN6UMLlXVJE0NqRpkLff83eRNAVLjI4aPhDOJTr9vr5dlaRGNqAEiN0BIbcb8djv3LoCbtme9MZJBwuATeMtZNayASRLISbDNzKTu8WSETb5yiKIPmY0cwRF1OFYHgw%2F0Am8ir4emLV7KY82%2BVBto72eG7Vd7blNw%2FqUqtBYOZNBnzP%2FzsjzBXAFhq%2BCuQh1wxrCtGC1ebEDv%2BNYumYKBpl7dCNTn%2BvSKrAXcawxis9V9mRKHwWvLs22eJPcW8bNg2I1ZQGh8LLWQMNO4k9VdpOCxYZIRxxrt6LGiV4UPAIXS8E5qL4rSEjBTX%2Bs54kQjqh0Fb5Ss2YP8E7QXAs0LwRTVUZeOsnqbxTsaLn4nYqnPOg0fZwxLq0rLz11FSjvbYo%2BHDi6p5kYneXzmG1qvpJQRp72CVjneuWB7tsrVkRZdpmaQZUsN0AKb5PAF7zwLtaWEq87xZH1ZoS2%2Fw8nQufBl6ukkhGGvffGQE%2F4CEaCbZ40vYQjzY%2FOUexX59bi9wOP2LsFcNh4o9QQWI7DY5EKezU7nwTtkEgQjYlL1hYebdZoBkKy0GzCd%2Bta9BjqkAbqwXE413DlOxXYS%2FT6bwNnW7pZenzxsg%2BhilH4PJQ%2FNfUQd%2BwzIZyFjYyr6YXDCDV46PJJSzrmknB%2BHXxtoJVJrt0jtZug0q6cr9njUtB2fNacT%2F6maLw9nWdd7%2FEJHpOdmmYBochKzkz82Pf1lHGPisKlmnI%2BVWhmvv6mGa0w%2FyMmuVI7dwWTaItQ9x7Gj14xMSlfUiE1uYB67y3IE0V03aGma&X-Amz-Signature=af8bc03e5db753dd3c93c61ba20d7ba6979da6f3d171fad5da63446c26d7162b&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEILPAK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDodePCPI9n6bf7gPhKQVRq2FDcyifUJfrPwoqg9UPxEwIhAPqE3HOyO7Qwp8lsHszd0aWJc5i40tDaPjXU%2FlEpupLIKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFcO2J7O%2FEIoQQKuUq3AOYNqwUg2Nm6vJcZUmWswY2xZpicMao30DeCS1rYaUnjIua3HEfUvSDgbXF4kuMxoIGeuGNN6UMLlXVJE0NqRpkLff83eRNAVLjI4aPhDOJTr9vr5dlaRGNqAEiN0BIbcb8djv3LoCbtme9MZJBwuATeMtZNayASRLISbDNzKTu8WSETb5yiKIPmY0cwRF1OFYHgw%2F0Am8ir4emLV7KY82%2BVBto72eG7Vd7blNw%2FqUqtBYOZNBnzP%2FzsjzBXAFhq%2BCuQh1wxrCtGC1ebEDv%2BNYumYKBpl7dCNTn%2BvSKrAXcawxis9V9mRKHwWvLs22eJPcW8bNg2I1ZQGh8LLWQMNO4k9VdpOCxYZIRxxrt6LGiV4UPAIXS8E5qL4rSEjBTX%2Bs54kQjqh0Fb5Ss2YP8E7QXAs0LwRTVUZeOsnqbxTsaLn4nYqnPOg0fZwxLq0rLz11FSjvbYo%2BHDi6p5kYneXzmG1qvpJQRp72CVjneuWB7tsrVkRZdpmaQZUsN0AKb5PAF7zwLtaWEq87xZH1ZoS2%2Fw8nQufBl6ukkhGGvffGQE%2F4CEaCbZ40vYQjzY%2FOUexX59bi9wOP2LsFcNh4o9QQWI7DY5EKezU7nwTtkEgQjYlL1hYebdZoBkKy0GzCd%2Bta9BjqkAbqwXE413DlOxXYS%2FT6bwNnW7pZenzxsg%2BhilH4PJQ%2FNfUQd%2BwzIZyFjYyr6YXDCDV46PJJSzrmknB%2BHXxtoJVJrt0jtZug0q6cr9njUtB2fNacT%2F6maLw9nWdd7%2FEJHpOdmmYBochKzkz82Pf1lHGPisKlmnI%2BVWhmvv6mGa0w%2FyMmuVI7dwWTaItQ9x7Gj14xMSlfUiE1uYB67y3IE0V03aGma&X-Amz-Signature=11e7449d35a8246fb708119005b1283868779e95864177bb275b9912ee552c37&X-Amz-SignedHeaders=host&x-id=GetObject)



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


