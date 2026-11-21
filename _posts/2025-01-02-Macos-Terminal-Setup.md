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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645P4VONK%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T113558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAHpEGkYYURzRVnFADaKduhq0VhZ5%2FQOSN%2FuJO1Lzk7JAiAPrVPJoNfUw1%2Fi0tE4AYIitD6xo7Dqy4dFP25iN3Zmbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMmoTLdvCQnuVPyKIJKtwDqbo7vCr3IHCMcOkezJwweTxFfjJGxaIV1VCa0sq4U1RPS3Srm2NBC%2FlJ94ITm0o88iYMgMJvxOQ0jeqRugd7qMAIu2FoiwroT6xszMSqnEwxiZqnkGlVy8H2Seurlhelig%2FJUfV6WInRlZwnXPUrgYZ9FYQGUMb9M2GlJBOV%2BkRB6vwRugEmAyD3ATeFzTiWXUYcv1Cg3Ij0TMliVnxIccWtEwJmS64lV6U%2FBuehtVLmVumpm8Um%2BlSM%2BdjYSokNFNZykxS1IQfXWqZUMqWXRV9PRTDO25Y7rXpJjJQNoKzudGBJOJMtEihF%2Fqg4%2BkS9QFXzjlUguAVWcgxxw5m%2BzCT6mNASkUM63%2BZkqIHKjcE7oDbTal58%2FN8biojkFnMLj63eHNddZXI54snWYF4mcOYxWg4nyQgLSkXeqPqPReeNjc3H%2FkJwjQgHP9%2Fb4Dx5l7SPKn1q4dyAL6n7%2F7lN1AJeUbR6W049UaPbiVVCZAe8jFb3qtdRuN8ODrdgbJu5EUfM%2FGYR5q6pt9Kbg0Kz6doi47FKfX9HXRwwqfNLcxla2WGPqtwmG5eY%2BydTIUAgIcMPtm3IvfHB6ZhCY80UDwZPxKUIK%2Ft4Q6ljAmyQx2W4ulXt4%2FQmJodle%2FAw6%2FaF2AY6pgGSYdpEhDcKwxkHEv6NW8ByG%2FC37sj573O3J%2BN%2B6DJdNfUmagIflsRMS%2F2VvG%2Bq4ZyzQjza07A6fsZ%2FnVsYJgxJV6ppTIXY2SSIKg%2FgzpvtMYCtcAehaR6cgOrsVOdsEjikQpZckc8O51tQhhUlarQkXyCX0pbZXRyj8CXl7A3KHTXDDch79WdIsByYmkPR%2FCjWvobd7GdECRa11cGjtpDbla6X1dS%2B&X-Amz-Signature=6f2544f5c2ecf281490b02cd60977ddb6990bd4a86136c489bd7e3be2466b305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645P4VONK%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T113558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAHpEGkYYURzRVnFADaKduhq0VhZ5%2FQOSN%2FuJO1Lzk7JAiAPrVPJoNfUw1%2Fi0tE4AYIitD6xo7Dqy4dFP25iN3Zmbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMmoTLdvCQnuVPyKIJKtwDqbo7vCr3IHCMcOkezJwweTxFfjJGxaIV1VCa0sq4U1RPS3Srm2NBC%2FlJ94ITm0o88iYMgMJvxOQ0jeqRugd7qMAIu2FoiwroT6xszMSqnEwxiZqnkGlVy8H2Seurlhelig%2FJUfV6WInRlZwnXPUrgYZ9FYQGUMb9M2GlJBOV%2BkRB6vwRugEmAyD3ATeFzTiWXUYcv1Cg3Ij0TMliVnxIccWtEwJmS64lV6U%2FBuehtVLmVumpm8Um%2BlSM%2BdjYSokNFNZykxS1IQfXWqZUMqWXRV9PRTDO25Y7rXpJjJQNoKzudGBJOJMtEihF%2Fqg4%2BkS9QFXzjlUguAVWcgxxw5m%2BzCT6mNASkUM63%2BZkqIHKjcE7oDbTal58%2FN8biojkFnMLj63eHNddZXI54snWYF4mcOYxWg4nyQgLSkXeqPqPReeNjc3H%2FkJwjQgHP9%2Fb4Dx5l7SPKn1q4dyAL6n7%2F7lN1AJeUbR6W049UaPbiVVCZAe8jFb3qtdRuN8ODrdgbJu5EUfM%2FGYR5q6pt9Kbg0Kz6doi47FKfX9HXRwwqfNLcxla2WGPqtwmG5eY%2BydTIUAgIcMPtm3IvfHB6ZhCY80UDwZPxKUIK%2Ft4Q6ljAmyQx2W4ulXt4%2FQmJodle%2FAw6%2FaF2AY6pgGSYdpEhDcKwxkHEv6NW8ByG%2FC37sj573O3J%2BN%2B6DJdNfUmagIflsRMS%2F2VvG%2Bq4ZyzQjza07A6fsZ%2FnVsYJgxJV6ppTIXY2SSIKg%2FgzpvtMYCtcAehaR6cgOrsVOdsEjikQpZckc8O51tQhhUlarQkXyCX0pbZXRyj8CXl7A3KHTXDDch79WdIsByYmkPR%2FCjWvobd7GdECRa11cGjtpDbla6X1dS%2B&X-Amz-Signature=18135dfd6ebdb83e769aff015e61d54ebfac4d5dc5b19e1a20da4483ba3980f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645P4VONK%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T113558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAHpEGkYYURzRVnFADaKduhq0VhZ5%2FQOSN%2FuJO1Lzk7JAiAPrVPJoNfUw1%2Fi0tE4AYIitD6xo7Dqy4dFP25iN3Zmbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMmoTLdvCQnuVPyKIJKtwDqbo7vCr3IHCMcOkezJwweTxFfjJGxaIV1VCa0sq4U1RPS3Srm2NBC%2FlJ94ITm0o88iYMgMJvxOQ0jeqRugd7qMAIu2FoiwroT6xszMSqnEwxiZqnkGlVy8H2Seurlhelig%2FJUfV6WInRlZwnXPUrgYZ9FYQGUMb9M2GlJBOV%2BkRB6vwRugEmAyD3ATeFzTiWXUYcv1Cg3Ij0TMliVnxIccWtEwJmS64lV6U%2FBuehtVLmVumpm8Um%2BlSM%2BdjYSokNFNZykxS1IQfXWqZUMqWXRV9PRTDO25Y7rXpJjJQNoKzudGBJOJMtEihF%2Fqg4%2BkS9QFXzjlUguAVWcgxxw5m%2BzCT6mNASkUM63%2BZkqIHKjcE7oDbTal58%2FN8biojkFnMLj63eHNddZXI54snWYF4mcOYxWg4nyQgLSkXeqPqPReeNjc3H%2FkJwjQgHP9%2Fb4Dx5l7SPKn1q4dyAL6n7%2F7lN1AJeUbR6W049UaPbiVVCZAe8jFb3qtdRuN8ODrdgbJu5EUfM%2FGYR5q6pt9Kbg0Kz6doi47FKfX9HXRwwqfNLcxla2WGPqtwmG5eY%2BydTIUAgIcMPtm3IvfHB6ZhCY80UDwZPxKUIK%2Ft4Q6ljAmyQx2W4ulXt4%2FQmJodle%2FAw6%2FaF2AY6pgGSYdpEhDcKwxkHEv6NW8ByG%2FC37sj573O3J%2BN%2B6DJdNfUmagIflsRMS%2F2VvG%2Bq4ZyzQjza07A6fsZ%2FnVsYJgxJV6ppTIXY2SSIKg%2FgzpvtMYCtcAehaR6cgOrsVOdsEjikQpZckc8O51tQhhUlarQkXyCX0pbZXRyj8CXl7A3KHTXDDch79WdIsByYmkPR%2FCjWvobd7GdECRa11cGjtpDbla6X1dS%2B&X-Amz-Signature=6ac2a197fc9d4e46982debb6dd6ddb4715dc31fbb798bf7fc708d833159b4eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

