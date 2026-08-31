---
layout: post
date: 2025-01-02
title: "Macos Terminal Setup"
tags: [Tips, ]
categories: [Apple, ]
---


![0](/assets/img/2025-01-02-Macos-Terminal-Setup.md/0.png)



## Setup Terminal


```shell

##Install Brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


##Install zsh
brew install zsh

zsh --version
zsh 5.9 (arm64-apple-darwin24.0)

which zsh
/bin/zsh


##Change bash -> zsh
chsh -s 'which zsh'

echo $SHELL
/bin/zsh


##Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"


##Update oh-my-zsh setting
vi ~/.zshrc

export ZSH="$HOME/.oh-my-zsh"
export PATH=/opt/homebrew/bin:$PATH
export DEFAULT_USER="$(whoami)"

ZSH_THEME="agnoster"

plugins=(git, autojump, zsh-autosuggestions, zsh-syntax-highlighting)


##update oh-my-zsh
source ~/.zshrc


##iTerm2 설치

https://iterm2.com/downloads/stable/latest




##Powerline Font 설치
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts


##iTerm2 ColorSet
curl -O https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/schemes/Framer.itermcolors
```


폰트 출처


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEJVM4B%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFyps%2FG5AcKnL5fFaTf9FisS1GBicGExw8MsX7OHtJMQIgW0pVltn9q7L0kI9UPQSzT4yKqOebKTmLHEcIyP1f%2Fi8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9gVE9%2BarUVPOroKSrcAxRwuxzPZLzDkWQsH2roWLaINcsQkC55HdH07zHhTr1goRpx5EOfOShrLjf%2FUgDIyGzO4O1ENHlDAweM0%2FuJay9clpba030Jj%2BZ5VTLj%2B1mlWfyWiYgxUf7zHMFWx%2Brj7FlLefNgsXsk2lS%2B9C6N7VGdwwbAGbm5JAmOLfYNYL0PG3uq2Pgoel0rVubGVg44Y7S5LZMaqxbYTW6OprIOHEgA%2BKQQokBV9QCvT6J1dQvkfMIderAGANny7rJZSoZmHkhpWQGEvsCWb4bPjNaLK9%2Bf8%2Ft8pq5FGdZvKiNlmEwEAIKcTZZt4bzTueURqaBuyECz0G3z4C6rklBB9RestIlWdt0pWCM9mvUu3DC6xVu02FQpuW%2BbS5TypIn3FtVAL%2BvV5WqEeiq2iFb59%2BrmQqOkE2bVpQhFQp10GKgdSkBoPTG2v%2Fl%2BT%2BFvoVo0bi8G1%2BFuMyha1abs4kv1wuINGHLQMWjPboVX%2Bj%2B3ypBtYZaIyLbUi63fQwV6QVgDH6roB1kbDLNRhwCIODWZBWsiqZjJMb0QEJ%2FhHUJvJ97Ddyuv9jcleCQYWHoODy88WF%2FlMCeCDmlsW1WLjqzhiCIVtr4xYiRGR6GUi8UhfedltqQjLTjlQSGHEpQZAlzxMMCq09QGOqUBNiQoWP2tnNFndQIy4jWLs3nR73t37rBILY%2BcglGaHBc9Z8RsykSr8jywWhK9GBeB278wt7Bs3amhjTs2JnEnPPe9ncyzaaSVr11gX7c5ijGh%2FSyk73h8GHc9Te1CAH3QAZOYji27wKeoKghhxqtedu7or%2FNfOMovsigJuG8ebnO4iC05VeVAfQN%2FaudD8R4yda3bnrjmnLlxIVjJGJxLWZq7kTOf&X-Amz-Signature=8349cbebed25a3fbf0a2349003ed16fa59dacdcb9433e660478a6c16401828c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEJVM4B%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFyps%2FG5AcKnL5fFaTf9FisS1GBicGExw8MsX7OHtJMQIgW0pVltn9q7L0kI9UPQSzT4yKqOebKTmLHEcIyP1f%2Fi8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9gVE9%2BarUVPOroKSrcAxRwuxzPZLzDkWQsH2roWLaINcsQkC55HdH07zHhTr1goRpx5EOfOShrLjf%2FUgDIyGzO4O1ENHlDAweM0%2FuJay9clpba030Jj%2BZ5VTLj%2B1mlWfyWiYgxUf7zHMFWx%2Brj7FlLefNgsXsk2lS%2B9C6N7VGdwwbAGbm5JAmOLfYNYL0PG3uq2Pgoel0rVubGVg44Y7S5LZMaqxbYTW6OprIOHEgA%2BKQQokBV9QCvT6J1dQvkfMIderAGANny7rJZSoZmHkhpWQGEvsCWb4bPjNaLK9%2Bf8%2Ft8pq5FGdZvKiNlmEwEAIKcTZZt4bzTueURqaBuyECz0G3z4C6rklBB9RestIlWdt0pWCM9mvUu3DC6xVu02FQpuW%2BbS5TypIn3FtVAL%2BvV5WqEeiq2iFb59%2BrmQqOkE2bVpQhFQp10GKgdSkBoPTG2v%2Fl%2BT%2BFvoVo0bi8G1%2BFuMyha1abs4kv1wuINGHLQMWjPboVX%2Bj%2B3ypBtYZaIyLbUi63fQwV6QVgDH6roB1kbDLNRhwCIODWZBWsiqZjJMb0QEJ%2FhHUJvJ97Ddyuv9jcleCQYWHoODy88WF%2FlMCeCDmlsW1WLjqzhiCIVtr4xYiRGR6GUi8UhfedltqQjLTjlQSGHEpQZAlzxMMCq09QGOqUBNiQoWP2tnNFndQIy4jWLs3nR73t37rBILY%2BcglGaHBc9Z8RsykSr8jywWhK9GBeB278wt7Bs3amhjTs2JnEnPPe9ncyzaaSVr11gX7c5ijGh%2FSyk73h8GHc9Te1CAH3QAZOYji27wKeoKghhxqtedu7or%2FNfOMovsigJuG8ebnO4iC05VeVAfQN%2FaudD8R4yda3bnrjmnLlxIVjJGJxLWZq7kTOf&X-Amz-Signature=b3bff84b72ab907763bacef35bdcc30fc2f00e929bb682302436655eacfc1d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEJVM4B%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFyps%2FG5AcKnL5fFaTf9FisS1GBicGExw8MsX7OHtJMQIgW0pVltn9q7L0kI9UPQSzT4yKqOebKTmLHEcIyP1f%2Fi8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9gVE9%2BarUVPOroKSrcAxRwuxzPZLzDkWQsH2roWLaINcsQkC55HdH07zHhTr1goRpx5EOfOShrLjf%2FUgDIyGzO4O1ENHlDAweM0%2FuJay9clpba030Jj%2BZ5VTLj%2B1mlWfyWiYgxUf7zHMFWx%2Brj7FlLefNgsXsk2lS%2B9C6N7VGdwwbAGbm5JAmOLfYNYL0PG3uq2Pgoel0rVubGVg44Y7S5LZMaqxbYTW6OprIOHEgA%2BKQQokBV9QCvT6J1dQvkfMIderAGANny7rJZSoZmHkhpWQGEvsCWb4bPjNaLK9%2Bf8%2Ft8pq5FGdZvKiNlmEwEAIKcTZZt4bzTueURqaBuyECz0G3z4C6rklBB9RestIlWdt0pWCM9mvUu3DC6xVu02FQpuW%2BbS5TypIn3FtVAL%2BvV5WqEeiq2iFb59%2BrmQqOkE2bVpQhFQp10GKgdSkBoPTG2v%2Fl%2BT%2BFvoVo0bi8G1%2BFuMyha1abs4kv1wuINGHLQMWjPboVX%2Bj%2B3ypBtYZaIyLbUi63fQwV6QVgDH6roB1kbDLNRhwCIODWZBWsiqZjJMb0QEJ%2FhHUJvJ97Ddyuv9jcleCQYWHoODy88WF%2FlMCeCDmlsW1WLjqzhiCIVtr4xYiRGR6GUi8UhfedltqQjLTjlQSGHEpQZAlzxMMCq09QGOqUBNiQoWP2tnNFndQIy4jWLs3nR73t37rBILY%2BcglGaHBc9Z8RsykSr8jywWhK9GBeB278wt7Bs3amhjTs2JnEnPPe9ncyzaaSVr11gX7c5ijGh%2FSyk73h8GHc9Te1CAH3QAZOYji27wKeoKghhxqtedu7or%2FNfOMovsigJuG8ebnO4iC05VeVAfQN%2FaudD8R4yda3bnrjmnLlxIVjJGJxLWZq7kTOf&X-Amz-Signature=289da3e97fc76723289b9ae92c400c3ebd8c4dbb4759f4035baec0405d8cb654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



## Install Homebrew


```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```



## Install Oh My ZSH!


[https://ohmyz.sh/](https://ohmyz.sh/)


To install:


```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```



## Install PowerlineFont


[https://github.com/powerline/fonts/tree/master/SourceCodePro](https://github.com/powerline/fonts/tree/master/SourceCodePro)


```shell

## clone
git clone https://github.com/powerline/fonts.git --depth=1

## install
cd fonts
./install.sh

## clean-up a bit
cd ..
rm -rf fonts
```



## Install iTerm2


[https://iterm2.com/](https://iterm2.com/)


다운로드 링크
[https://iterm2.com/downloads/stable/latest](https://iterm2.com/downloads/stable/latest)



## Install Powerlevel10K


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


To Install:


```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

