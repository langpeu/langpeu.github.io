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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KBWSXTW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T033350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC5pTgnsy8m5TzokuEEYBbsSb7ILS3P0SNYHYBsrIvGyAiEA%2F1Wj%2BaE7%2BQN3%2BgSXfXNYFfte6DZ40lVxs4JchlpEOD0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBd3q%2BzatTyQg5XbTSrcAwDdSE5VVEZRlNEpiIqGmPIfPaNBLorlQJInTvsjXLaHNtNuS756%2Fk6rvLWLaWTwmRO%2Ffrkroh9wydMeB5jI7KZ0hIQ9lfWVhZSEmueJB2eKRb82zFUAXd9x%2FuA8llIJw2ioEtv0c52jUWkWB02bziJG8g0E1g%2FRiUkgG%2BIdEOdn2dPeBgQ50KVC8cCe3M%2B9he1d9A2ootClNrbnZZfBtY9sPPYYXHU71Jy7G3Jyqf4w99L7dJN0oClLVA429pv0BDc8wG39%2B1z1jpuCpBKYzzNceouVxPQLPcS2qbxn45u1a2ZMR1RMc4gQJCfZMrrdI5sfXQ9WWU%2BVniKme2blpm0NdkXxw58u2vhh%2FdCnRL%2FbA0zyuK%2FZ1rkTxH0OP3fkynImorK%2BEdtjUGDipurEpnxfz0iH1InkkCppDk%2BvC%2FZODtiZDzyhjjs%2F8vnNmqBJHSRtq%2F%2BU%2B7oOcuHu6xsQDwmO4oMMR58ecnGgqlnnCCmKFQJJrqMOmW3vAS9hIIQ8sZUieCfIqtLzEMOD1bUMeCWH9J3%2BguuC8hN%2BDHvYRwUGxVpZWTBbx49HlBx0MJbJptaumsGrUjKHnj9dD6CI1htCaJXK7PgINTwMTgXU5Wzum70I8EBl2fXjntXWMMnWz9MGOqUBSbXURBFrOZ%2FzLiWPjTlIB9uJXKJIF6MZjEL5yRrq0Bg0wydKchiXytxhQFnPVXT%2BHzDp%2Bd3appooqtG1WblJf2sJchYK%2BY8SuDMkU9okfjIHOrV1H18Jv%2FlK%2BoBK5HdtaAmOYATnBCr7L4qfrFH7uPqRirSao%2B5FYeKkungaXg4GhaUUhipetOtcxSWBtb3Bh7aG1p3DgxALMKg02KwxFWl%2F7IyS&X-Amz-Signature=6b87f75597a504cc2795cfc4c346ce49beed0ef1b1630580e3c9f165c057b6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KBWSXTW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T033350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC5pTgnsy8m5TzokuEEYBbsSb7ILS3P0SNYHYBsrIvGyAiEA%2F1Wj%2BaE7%2BQN3%2BgSXfXNYFfte6DZ40lVxs4JchlpEOD0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBd3q%2BzatTyQg5XbTSrcAwDdSE5VVEZRlNEpiIqGmPIfPaNBLorlQJInTvsjXLaHNtNuS756%2Fk6rvLWLaWTwmRO%2Ffrkroh9wydMeB5jI7KZ0hIQ9lfWVhZSEmueJB2eKRb82zFUAXd9x%2FuA8llIJw2ioEtv0c52jUWkWB02bziJG8g0E1g%2FRiUkgG%2BIdEOdn2dPeBgQ50KVC8cCe3M%2B9he1d9A2ootClNrbnZZfBtY9sPPYYXHU71Jy7G3Jyqf4w99L7dJN0oClLVA429pv0BDc8wG39%2B1z1jpuCpBKYzzNceouVxPQLPcS2qbxn45u1a2ZMR1RMc4gQJCfZMrrdI5sfXQ9WWU%2BVniKme2blpm0NdkXxw58u2vhh%2FdCnRL%2FbA0zyuK%2FZ1rkTxH0OP3fkynImorK%2BEdtjUGDipurEpnxfz0iH1InkkCppDk%2BvC%2FZODtiZDzyhjjs%2F8vnNmqBJHSRtq%2F%2BU%2B7oOcuHu6xsQDwmO4oMMR58ecnGgqlnnCCmKFQJJrqMOmW3vAS9hIIQ8sZUieCfIqtLzEMOD1bUMeCWH9J3%2BguuC8hN%2BDHvYRwUGxVpZWTBbx49HlBx0MJbJptaumsGrUjKHnj9dD6CI1htCaJXK7PgINTwMTgXU5Wzum70I8EBl2fXjntXWMMnWz9MGOqUBSbXURBFrOZ%2FzLiWPjTlIB9uJXKJIF6MZjEL5yRrq0Bg0wydKchiXytxhQFnPVXT%2BHzDp%2Bd3appooqtG1WblJf2sJchYK%2BY8SuDMkU9okfjIHOrV1H18Jv%2FlK%2BoBK5HdtaAmOYATnBCr7L4qfrFH7uPqRirSao%2B5FYeKkungaXg4GhaUUhipetOtcxSWBtb3Bh7aG1p3DgxALMKg02KwxFWl%2F7IyS&X-Amz-Signature=e9eca616cc1924ae06a610f657b94228e8737f3b57788c057b5ca725692f412a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KBWSXTW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T033350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC5pTgnsy8m5TzokuEEYBbsSb7ILS3P0SNYHYBsrIvGyAiEA%2F1Wj%2BaE7%2BQN3%2BgSXfXNYFfte6DZ40lVxs4JchlpEOD0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBd3q%2BzatTyQg5XbTSrcAwDdSE5VVEZRlNEpiIqGmPIfPaNBLorlQJInTvsjXLaHNtNuS756%2Fk6rvLWLaWTwmRO%2Ffrkroh9wydMeB5jI7KZ0hIQ9lfWVhZSEmueJB2eKRb82zFUAXd9x%2FuA8llIJw2ioEtv0c52jUWkWB02bziJG8g0E1g%2FRiUkgG%2BIdEOdn2dPeBgQ50KVC8cCe3M%2B9he1d9A2ootClNrbnZZfBtY9sPPYYXHU71Jy7G3Jyqf4w99L7dJN0oClLVA429pv0BDc8wG39%2B1z1jpuCpBKYzzNceouVxPQLPcS2qbxn45u1a2ZMR1RMc4gQJCfZMrrdI5sfXQ9WWU%2BVniKme2blpm0NdkXxw58u2vhh%2FdCnRL%2FbA0zyuK%2FZ1rkTxH0OP3fkynImorK%2BEdtjUGDipurEpnxfz0iH1InkkCppDk%2BvC%2FZODtiZDzyhjjs%2F8vnNmqBJHSRtq%2F%2BU%2B7oOcuHu6xsQDwmO4oMMR58ecnGgqlnnCCmKFQJJrqMOmW3vAS9hIIQ8sZUieCfIqtLzEMOD1bUMeCWH9J3%2BguuC8hN%2BDHvYRwUGxVpZWTBbx49HlBx0MJbJptaumsGrUjKHnj9dD6CI1htCaJXK7PgINTwMTgXU5Wzum70I8EBl2fXjntXWMMnWz9MGOqUBSbXURBFrOZ%2FzLiWPjTlIB9uJXKJIF6MZjEL5yRrq0Bg0wydKchiXytxhQFnPVXT%2BHzDp%2Bd3appooqtG1WblJf2sJchYK%2BY8SuDMkU9okfjIHOrV1H18Jv%2FlK%2BoBK5HdtaAmOYATnBCr7L4qfrFH7uPqRirSao%2B5FYeKkungaXg4GhaUUhipetOtcxSWBtb3Bh7aG1p3DgxALMKg02KwxFWl%2F7IyS&X-Amz-Signature=efda96b1119ee67d6fc37c0dafa4725af2b13c59c01ebaa2f1fb5010ba07d699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

