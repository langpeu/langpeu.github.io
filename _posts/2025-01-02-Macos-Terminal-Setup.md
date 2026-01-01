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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZX2HYT3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T094431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFG0dCpbPcgu48OJw5xAYNxvJ89T60m35BFSoTnLtlfSAiB4muPLg3Enx5xTQjtSuc5VvWP7Lop65KoEutkWZP0OgSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpB7%2FIsK8UfxCecZFKtwDiLjk%2Bddg4XtujgLQZUGBXGmRqMXXS6BxtsHVmKaOF6IuGzKTU9iwWudjf19YZC3Sd1hEwwlnCLnBvWSY8kScnmx0ksxqJ3zFwa7JTAYWH%2F1a%2BCWVM6fAaLw6Rb9MnlEyhdMR%2BcX1U%2BjWPibeWEowmOTCKzNtz09PLrQw7Q80e4drdsVxON3zQFf%2BbiZTqyzQpY9mTbykoEoP7f0J7zzenU9j44mrOolsZVTFARCHM7%2BbZnCKNy8klyucOhKJu7xOYiFH1b2A%2FMZJCMlqvDkFweo87Sdld4EXU7L3VaA9Io%2FpkLuzQnv37Y9eE5%2BtejyIlB%2F8xC2bLqe4iOcdG2F1MmvqDrl2puBCrBlG%2FL%2Fd8MFCfWPDulI5iG%2Fx5yGd1yr4GaVBizQmQRt79xZGEb1rMrAYQWnTjMgdvNGQxM5vIye5IpXXfsijO27y%2Ff5ADefis1Yxx1ngBujW22v6VQqYuRRY%2BdTlF9EuukYPhFG6sBqaFoYD%2F0lKXesmlGuXn%2F1YbLGV%2FK3d4Cti%2FkU8eIMq3lQyPvZDcB8b2Wwu79F8NllVX8AzfMIswTfpHIdCxDmEVpJTxMfUW%2FJIhqv1EOLrNuxLDOnDkzYPQGVlDMN1h3rOIOLdiWuvyjM4fQwwiafYygY6pgFduzc%2FsKaTADGahgiY37wYTSYh8e3iYedt7svSBXg7Cj4mjbEf3D1qOETyjJ8%2Fon786mPBAz8bnAq65itWZArYcSvQW2o9ju9UMoHWknX6dIEICdi%2B9AxWiyqOcxhEpirCMb1fdr%2B9G7MhArxw3MTH6sWLQPv0ZPKetBoBXLAJ3EMhuvmJlHp523o4laMrsL0iri6ppTMFq29NT0OP7U25O2zZyhFb&X-Amz-Signature=8ef098743ec1e1b09a058b837530e896dc8371c5335ed2c162bb948cabbcc78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZX2HYT3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T094431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFG0dCpbPcgu48OJw5xAYNxvJ89T60m35BFSoTnLtlfSAiB4muPLg3Enx5xTQjtSuc5VvWP7Lop65KoEutkWZP0OgSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpB7%2FIsK8UfxCecZFKtwDiLjk%2Bddg4XtujgLQZUGBXGmRqMXXS6BxtsHVmKaOF6IuGzKTU9iwWudjf19YZC3Sd1hEwwlnCLnBvWSY8kScnmx0ksxqJ3zFwa7JTAYWH%2F1a%2BCWVM6fAaLw6Rb9MnlEyhdMR%2BcX1U%2BjWPibeWEowmOTCKzNtz09PLrQw7Q80e4drdsVxON3zQFf%2BbiZTqyzQpY9mTbykoEoP7f0J7zzenU9j44mrOolsZVTFARCHM7%2BbZnCKNy8klyucOhKJu7xOYiFH1b2A%2FMZJCMlqvDkFweo87Sdld4EXU7L3VaA9Io%2FpkLuzQnv37Y9eE5%2BtejyIlB%2F8xC2bLqe4iOcdG2F1MmvqDrl2puBCrBlG%2FL%2Fd8MFCfWPDulI5iG%2Fx5yGd1yr4GaVBizQmQRt79xZGEb1rMrAYQWnTjMgdvNGQxM5vIye5IpXXfsijO27y%2Ff5ADefis1Yxx1ngBujW22v6VQqYuRRY%2BdTlF9EuukYPhFG6sBqaFoYD%2F0lKXesmlGuXn%2F1YbLGV%2FK3d4Cti%2FkU8eIMq3lQyPvZDcB8b2Wwu79F8NllVX8AzfMIswTfpHIdCxDmEVpJTxMfUW%2FJIhqv1EOLrNuxLDOnDkzYPQGVlDMN1h3rOIOLdiWuvyjM4fQwwiafYygY6pgFduzc%2FsKaTADGahgiY37wYTSYh8e3iYedt7svSBXg7Cj4mjbEf3D1qOETyjJ8%2Fon786mPBAz8bnAq65itWZArYcSvQW2o9ju9UMoHWknX6dIEICdi%2B9AxWiyqOcxhEpirCMb1fdr%2B9G7MhArxw3MTH6sWLQPv0ZPKetBoBXLAJ3EMhuvmJlHp523o4laMrsL0iri6ppTMFq29NT0OP7U25O2zZyhFb&X-Amz-Signature=1449a8c1d7a7ef446a19aa2a55316e9f545e059e36cd026d16e09df0f3277d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZX2HYT3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T094431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFG0dCpbPcgu48OJw5xAYNxvJ89T60m35BFSoTnLtlfSAiB4muPLg3Enx5xTQjtSuc5VvWP7Lop65KoEutkWZP0OgSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpB7%2FIsK8UfxCecZFKtwDiLjk%2Bddg4XtujgLQZUGBXGmRqMXXS6BxtsHVmKaOF6IuGzKTU9iwWudjf19YZC3Sd1hEwwlnCLnBvWSY8kScnmx0ksxqJ3zFwa7JTAYWH%2F1a%2BCWVM6fAaLw6Rb9MnlEyhdMR%2BcX1U%2BjWPibeWEowmOTCKzNtz09PLrQw7Q80e4drdsVxON3zQFf%2BbiZTqyzQpY9mTbykoEoP7f0J7zzenU9j44mrOolsZVTFARCHM7%2BbZnCKNy8klyucOhKJu7xOYiFH1b2A%2FMZJCMlqvDkFweo87Sdld4EXU7L3VaA9Io%2FpkLuzQnv37Y9eE5%2BtejyIlB%2F8xC2bLqe4iOcdG2F1MmvqDrl2puBCrBlG%2FL%2Fd8MFCfWPDulI5iG%2Fx5yGd1yr4GaVBizQmQRt79xZGEb1rMrAYQWnTjMgdvNGQxM5vIye5IpXXfsijO27y%2Ff5ADefis1Yxx1ngBujW22v6VQqYuRRY%2BdTlF9EuukYPhFG6sBqaFoYD%2F0lKXesmlGuXn%2F1YbLGV%2FK3d4Cti%2FkU8eIMq3lQyPvZDcB8b2Wwu79F8NllVX8AzfMIswTfpHIdCxDmEVpJTxMfUW%2FJIhqv1EOLrNuxLDOnDkzYPQGVlDMN1h3rOIOLdiWuvyjM4fQwwiafYygY6pgFduzc%2FsKaTADGahgiY37wYTSYh8e3iYedt7svSBXg7Cj4mjbEf3D1qOETyjJ8%2Fon786mPBAz8bnAq65itWZArYcSvQW2o9ju9UMoHWknX6dIEICdi%2B9AxWiyqOcxhEpirCMb1fdr%2B9G7MhArxw3MTH6sWLQPv0ZPKetBoBXLAJ3EMhuvmJlHp523o4laMrsL0iri6ppTMFq29NT0OP7U25O2zZyhFb&X-Amz-Signature=fdb11e7429d275872d117ce9e04549fb0d8f7b1c27f76fbe40eebf830c17fcd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


