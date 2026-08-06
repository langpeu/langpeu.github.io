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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RS77WHO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T020308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDbSDJtvRpR0QdRb0IvqzIgZx2PCuJpBpVKE1xs9i8F6gIhAIJQZfRUtOqgJGTZ5l9HdHxhPdhh8cHA7hzmsRNzHu%2FHKv8DCDEQABoMNjM3NDIzMTgzODA1IgyjL3grS3VmvGlIgWEq3ANA0GE559qmlqBkMpzX8ahewP6C66553NjudzdaBRK%2F%2BMw6AxIAfMbVDE%2BoosN1MsMi4S84wX02WRosZ7Ek%2BcnmCtUEOB55hDszgScmzeJCx3%2BpkNMj%2BoDHIi298Os0f5n4Z8GsoTv6MWAcE13Yt1%2BT3a3ZsYaDY7sj%2BHy3zBNE183FXhFgkHKel32FzLjbGkS3i1uSM41CH4AH9WSH1vEkJEQ7RyNrdT69OeO08AEmqoMa5nlx4MtaQC9AHaF546kMwLcaRb8Sn80zvMxLJOnEx%2B2F1Wjfwt43yb4ZQkHSqLtAk315%2FUoAmvgRycqniMqEmBGo7vliDaE7k3fO8zurxAQduxAKGzKvys5wtRkMsbnfvoxDQ2%2B7XeE5EkTTCSOhNPwS1%2BPg3e4UKm8Q4ollTNmx5zfynE8eCCMU5cwFL77zAVKu1Fk3EBQA4VN0LrM85gsYVNoppocNme6A1DUv8nD6cVVxm9URbP2i%2B0dWH4dYaddxdCz9k0Y0pU5SX%2Btlf5YnzoDowYt3aA1JwHBZNOp37fqIwrS2bwaD0YoDsiOvUP1%2FxOr0DGF7ecmTOOEqijP6M2KZjzESm152JHlMV%2BX81NALt1XfEG4c%2Fsh371nnEAVF4JKOu1u%2FHDDfps%2FTBjqkAQlDSr9zDYo9fDdjUo8%2BFWtYH6UUJ8UmifRljep%2F7G8ozx%2FE3JUK%2FzgvhHNLJDJ31R%2BS7BQiSOSz%2B4SIm%2FlkQkpe1pgrDBKwtDdFMz2Jy5IhMwNC6nixKFvF6icRwf236OqiLY5bU01u32it6XpQTz9F8CV%2BIeBSYw%2BcQfTET3sDk5Q37SnA3TVofxG5N6bHKwAJ7UFi6wRserwn0Yq4k5YwoRDh&X-Amz-Signature=78bab26da53971a15f0c77eeb357e2cc4d46a4957f8f779e48259be8dcf24a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RS77WHO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T020308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDbSDJtvRpR0QdRb0IvqzIgZx2PCuJpBpVKE1xs9i8F6gIhAIJQZfRUtOqgJGTZ5l9HdHxhPdhh8cHA7hzmsRNzHu%2FHKv8DCDEQABoMNjM3NDIzMTgzODA1IgyjL3grS3VmvGlIgWEq3ANA0GE559qmlqBkMpzX8ahewP6C66553NjudzdaBRK%2F%2BMw6AxIAfMbVDE%2BoosN1MsMi4S84wX02WRosZ7Ek%2BcnmCtUEOB55hDszgScmzeJCx3%2BpkNMj%2BoDHIi298Os0f5n4Z8GsoTv6MWAcE13Yt1%2BT3a3ZsYaDY7sj%2BHy3zBNE183FXhFgkHKel32FzLjbGkS3i1uSM41CH4AH9WSH1vEkJEQ7RyNrdT69OeO08AEmqoMa5nlx4MtaQC9AHaF546kMwLcaRb8Sn80zvMxLJOnEx%2B2F1Wjfwt43yb4ZQkHSqLtAk315%2FUoAmvgRycqniMqEmBGo7vliDaE7k3fO8zurxAQduxAKGzKvys5wtRkMsbnfvoxDQ2%2B7XeE5EkTTCSOhNPwS1%2BPg3e4UKm8Q4ollTNmx5zfynE8eCCMU5cwFL77zAVKu1Fk3EBQA4VN0LrM85gsYVNoppocNme6A1DUv8nD6cVVxm9URbP2i%2B0dWH4dYaddxdCz9k0Y0pU5SX%2Btlf5YnzoDowYt3aA1JwHBZNOp37fqIwrS2bwaD0YoDsiOvUP1%2FxOr0DGF7ecmTOOEqijP6M2KZjzESm152JHlMV%2BX81NALt1XfEG4c%2Fsh371nnEAVF4JKOu1u%2FHDDfps%2FTBjqkAQlDSr9zDYo9fDdjUo8%2BFWtYH6UUJ8UmifRljep%2F7G8ozx%2FE3JUK%2FzgvhHNLJDJ31R%2BS7BQiSOSz%2B4SIm%2FlkQkpe1pgrDBKwtDdFMz2Jy5IhMwNC6nixKFvF6icRwf236OqiLY5bU01u32it6XpQTz9F8CV%2BIeBSYw%2BcQfTET3sDk5Q37SnA3TVofxG5N6bHKwAJ7UFi6wRserwn0Yq4k5YwoRDh&X-Amz-Signature=3d7972eb1c80db49ea54dae7b088622bf90d2b38d776d52e25716b41fe239067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RS77WHO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T020308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDbSDJtvRpR0QdRb0IvqzIgZx2PCuJpBpVKE1xs9i8F6gIhAIJQZfRUtOqgJGTZ5l9HdHxhPdhh8cHA7hzmsRNzHu%2FHKv8DCDEQABoMNjM3NDIzMTgzODA1IgyjL3grS3VmvGlIgWEq3ANA0GE559qmlqBkMpzX8ahewP6C66553NjudzdaBRK%2F%2BMw6AxIAfMbVDE%2BoosN1MsMi4S84wX02WRosZ7Ek%2BcnmCtUEOB55hDszgScmzeJCx3%2BpkNMj%2BoDHIi298Os0f5n4Z8GsoTv6MWAcE13Yt1%2BT3a3ZsYaDY7sj%2BHy3zBNE183FXhFgkHKel32FzLjbGkS3i1uSM41CH4AH9WSH1vEkJEQ7RyNrdT69OeO08AEmqoMa5nlx4MtaQC9AHaF546kMwLcaRb8Sn80zvMxLJOnEx%2B2F1Wjfwt43yb4ZQkHSqLtAk315%2FUoAmvgRycqniMqEmBGo7vliDaE7k3fO8zurxAQduxAKGzKvys5wtRkMsbnfvoxDQ2%2B7XeE5EkTTCSOhNPwS1%2BPg3e4UKm8Q4ollTNmx5zfynE8eCCMU5cwFL77zAVKu1Fk3EBQA4VN0LrM85gsYVNoppocNme6A1DUv8nD6cVVxm9URbP2i%2B0dWH4dYaddxdCz9k0Y0pU5SX%2Btlf5YnzoDowYt3aA1JwHBZNOp37fqIwrS2bwaD0YoDsiOvUP1%2FxOr0DGF7ecmTOOEqijP6M2KZjzESm152JHlMV%2BX81NALt1XfEG4c%2Fsh371nnEAVF4JKOu1u%2FHDDfps%2FTBjqkAQlDSr9zDYo9fDdjUo8%2BFWtYH6UUJ8UmifRljep%2F7G8ozx%2FE3JUK%2FzgvhHNLJDJ31R%2BS7BQiSOSz%2B4SIm%2FlkQkpe1pgrDBKwtDdFMz2Jy5IhMwNC6nixKFvF6icRwf236OqiLY5bU01u32it6XpQTz9F8CV%2BIeBSYw%2BcQfTET3sDk5Q37SnA3TVofxG5N6bHKwAJ7UFi6wRserwn0Yq4k5YwoRDh&X-Amz-Signature=e4f7e670e6e7e455b6ba3ca4dc662d975a63722e478e9cbd8cc6250e29262d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

