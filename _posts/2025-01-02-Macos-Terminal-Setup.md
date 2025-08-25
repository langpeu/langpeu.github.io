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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AELAK5H%2F20250825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250825T140547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIARl29JHHgKjSXbDt7kJjykpPYHh5nzZ9jLNtg0EeLAsAiEAvGlceLLOAvEFnGtjjQjttjZHGzPYKxvtXhZNygGN760q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP4%2BpRfB6YUXDofKRyrcAyLX5p3PDlEkq0y4Ks2cUQY%2BDpTzxOu0DMMMTZT9BH2i0UP8VQO6zGCnrtgccAK%2FsK%2Bmlr9VyS9FP7ZCbCoLyDkutcutOBPU4AWns8dt6I9ZHsNjRRHHZ7QimEDq2RxjYTdmtBeTiRyIVmBWYlV2bgTHXBKA%2Fx0o6KMLd%2Bd7%2FKkPBjIZPMN5F%2BDcgSau2G3w%2BkKNfnxDYFLk2BqsQ6bQoQol6uOEJBiaSVvWz1FMO6o%2FPIx2J4t%2F9V3pCL%2B4z3WzkDslSavHXOelexiJt%2FAIykJS%2BkWUL2%2Fdxsh7S%2Bw6yKU9nQLpFuGZxl4LzHmXengr8d%2BsPMsDFVzjizI37B%2BgOwNAs1zqkSm90TQX7eBYN%2BmhCkHM7FoJo66F1R22F%2B6akCbK6oVpNORC%2Fb3nUJcYi0J%2FREcmoIqcvR%2FXVjLal1muU1wckh5kYsvh6ZF5RQ67mYHyK1LkBWCn6GWZqAJC77cB8z6r6EkNKD9pf7EZKTbCS7dhfuWzcjphWIUb9J%2BQnH13cKoUpCSOqkdVnmagY6aPSnLaJobKJdKwrG%2BlfThy4WBY%2Bsr8Ns0mFFJwwKaJS97YM0uVFcgpoQvcM5SZzdZzH2IroqFntZbsa%2FRTIM4qUlYij6VNH2UZeXh5MPWnscUGOqUB21iUaLUH38NWQzK63dSpJiBhGBxNrJvjCSjAoDK1FcJ7uxFuzNpmaTkNVY0%2BHEfItDGC7qCMG2hxR3gM%2F6vsGN8PaqFwB3MWQaNwEZKL%2FG8UAAmKEs2%2B28uIgl3%2Bgj9UPVCYs3lLLZp64Rl7v%2FyVvDUF85292eMuOAO68J2Xzoz0cCroXV%2Faw4%2BzMJEvd%2BaN39mwidGVzeO8fSoDmMORFVcTtWaL&X-Amz-Signature=e9aa2ad816e6c9c3daf6c3a5d467ece729b4fd7bc9815e7e00a03793f99b88bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AELAK5H%2F20250825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250825T140547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIARl29JHHgKjSXbDt7kJjykpPYHh5nzZ9jLNtg0EeLAsAiEAvGlceLLOAvEFnGtjjQjttjZHGzPYKxvtXhZNygGN760q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP4%2BpRfB6YUXDofKRyrcAyLX5p3PDlEkq0y4Ks2cUQY%2BDpTzxOu0DMMMTZT9BH2i0UP8VQO6zGCnrtgccAK%2FsK%2Bmlr9VyS9FP7ZCbCoLyDkutcutOBPU4AWns8dt6I9ZHsNjRRHHZ7QimEDq2RxjYTdmtBeTiRyIVmBWYlV2bgTHXBKA%2Fx0o6KMLd%2Bd7%2FKkPBjIZPMN5F%2BDcgSau2G3w%2BkKNfnxDYFLk2BqsQ6bQoQol6uOEJBiaSVvWz1FMO6o%2FPIx2J4t%2F9V3pCL%2B4z3WzkDslSavHXOelexiJt%2FAIykJS%2BkWUL2%2Fdxsh7S%2Bw6yKU9nQLpFuGZxl4LzHmXengr8d%2BsPMsDFVzjizI37B%2BgOwNAs1zqkSm90TQX7eBYN%2BmhCkHM7FoJo66F1R22F%2B6akCbK6oVpNORC%2Fb3nUJcYi0J%2FREcmoIqcvR%2FXVjLal1muU1wckh5kYsvh6ZF5RQ67mYHyK1LkBWCn6GWZqAJC77cB8z6r6EkNKD9pf7EZKTbCS7dhfuWzcjphWIUb9J%2BQnH13cKoUpCSOqkdVnmagY6aPSnLaJobKJdKwrG%2BlfThy4WBY%2Bsr8Ns0mFFJwwKaJS97YM0uVFcgpoQvcM5SZzdZzH2IroqFntZbsa%2FRTIM4qUlYij6VNH2UZeXh5MPWnscUGOqUB21iUaLUH38NWQzK63dSpJiBhGBxNrJvjCSjAoDK1FcJ7uxFuzNpmaTkNVY0%2BHEfItDGC7qCMG2hxR3gM%2F6vsGN8PaqFwB3MWQaNwEZKL%2FG8UAAmKEs2%2B28uIgl3%2Bgj9UPVCYs3lLLZp64Rl7v%2FyVvDUF85292eMuOAO68J2Xzoz0cCroXV%2Faw4%2BzMJEvd%2BaN39mwidGVzeO8fSoDmMORFVcTtWaL&X-Amz-Signature=2ee2a38fd51c83dc3421ace19e80ff95693f699a293a457cd877cb6576c2a224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AELAK5H%2F20250825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250825T140547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIARl29JHHgKjSXbDt7kJjykpPYHh5nzZ9jLNtg0EeLAsAiEAvGlceLLOAvEFnGtjjQjttjZHGzPYKxvtXhZNygGN760q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP4%2BpRfB6YUXDofKRyrcAyLX5p3PDlEkq0y4Ks2cUQY%2BDpTzxOu0DMMMTZT9BH2i0UP8VQO6zGCnrtgccAK%2FsK%2Bmlr9VyS9FP7ZCbCoLyDkutcutOBPU4AWns8dt6I9ZHsNjRRHHZ7QimEDq2RxjYTdmtBeTiRyIVmBWYlV2bgTHXBKA%2Fx0o6KMLd%2Bd7%2FKkPBjIZPMN5F%2BDcgSau2G3w%2BkKNfnxDYFLk2BqsQ6bQoQol6uOEJBiaSVvWz1FMO6o%2FPIx2J4t%2F9V3pCL%2B4z3WzkDslSavHXOelexiJt%2FAIykJS%2BkWUL2%2Fdxsh7S%2Bw6yKU9nQLpFuGZxl4LzHmXengr8d%2BsPMsDFVzjizI37B%2BgOwNAs1zqkSm90TQX7eBYN%2BmhCkHM7FoJo66F1R22F%2B6akCbK6oVpNORC%2Fb3nUJcYi0J%2FREcmoIqcvR%2FXVjLal1muU1wckh5kYsvh6ZF5RQ67mYHyK1LkBWCn6GWZqAJC77cB8z6r6EkNKD9pf7EZKTbCS7dhfuWzcjphWIUb9J%2BQnH13cKoUpCSOqkdVnmagY6aPSnLaJobKJdKwrG%2BlfThy4WBY%2Bsr8Ns0mFFJwwKaJS97YM0uVFcgpoQvcM5SZzdZzH2IroqFntZbsa%2FRTIM4qUlYij6VNH2UZeXh5MPWnscUGOqUB21iUaLUH38NWQzK63dSpJiBhGBxNrJvjCSjAoDK1FcJ7uxFuzNpmaTkNVY0%2BHEfItDGC7qCMG2hxR3gM%2F6vsGN8PaqFwB3MWQaNwEZKL%2FG8UAAmKEs2%2B28uIgl3%2Bgj9UPVCYs3lLLZp64Rl7v%2FyVvDUF85292eMuOAO68J2Xzoz0cCroXV%2Faw4%2BzMJEvd%2BaN39mwidGVzeO8fSoDmMORFVcTtWaL&X-Amz-Signature=8b4d604e468c7502aee957ae6c974aba74671f01c25f96231bf58c9433610b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


