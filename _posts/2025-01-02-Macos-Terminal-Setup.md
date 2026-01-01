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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSTR5O6%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T161406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrGDGwJjjr8q4m7RG%2FE5vu1zYyaFE3Ul7NgMYV%2BiE46AiBFgt1BDNhJtZIUT0Uxfc8rZCfBvihPgKlgie7RFviWaiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJq%2BJAxF2vrdXyf6KtwDhWConvVpZeJbBKYZRrxZk7HRPghhUbgSlYnyYhyrVqDMAL3XZRcFUHjgwi6MgtAivdSF4rzGj%2FgNyFhhK%2F%2FyVZf%2B%2Bm81FTXc0I%2BnY%2FtMLEKGngzmC9Wa%2BHx1z15esYEJITDO2mR%2FOGSgz6CvoDdVYi3Kd0rJdHbizbH213VPzqiYMBUkJ6O9FX3JOX3yOtt6e90DUPIjLsPdMR%2Bf1qYx4aVCX9a97QW8fnVp2mAxX8mxbS%2BZ0xIwUb1XYnCPJVcSIRxifyhVsjf94h%2FhAZhbaCeDryj59k5Iyt83RCfD0L8H%2FxsgwaxfsBsJHrhhF8hc3YGuVkWuYxjsVxeaSqVRQdMu5F84RFhOuaaQzyqi6RI9Un%2F43HYVju4exUD45gN8BWklHDJLquJ7MzFmCsIKgTyQ1GuSBMAx6QMsIplu4sr%2Ff2V1ZGA6xTbMUUTspv%2BV0W8jaCO5TYhEfwsMKuLT2p8lkhZwmOWCtc%2FEYkDW2K25xPZHungJzlXNtMjLhvOAMWewqaHmthTStH6l3KHG%2BUYkZJyzK%2B0djt7LI3e1WQSnbbCYhDSXFkzf5EqtfoOcvBffQp%2Fvxr%2B5cpcXF0JFFAGgK041UzJcbFZ4WzliXAFTCdkcm0vZfUBhTM0wwObZygY6pgE9v4i3JUCYV%2BpQVtvE18wtL51ZMiA7BQor%2FjW9gnyaQWy3BHvKLd%2BdT0dvlkBvDWvEnZ46yyY%2FnwR04qasz4SpMvk6ye2n22dGryBhAUivCLOTetoIjvO3agyr689LqPsOyn7Dt87t4a4T1oZgFnQkPhJ4lZnYcbYqWQlGZkkEcL5T3KgVcW8LPog1xX%2F9GO3Be66II8LqnzOPbSgkN6T2NUMKMsLh&X-Amz-Signature=f54eedca6a91e3059ee6f9e315476781329cbc4fd24d80eb9814ffe9766d5b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSTR5O6%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T161406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrGDGwJjjr8q4m7RG%2FE5vu1zYyaFE3Ul7NgMYV%2BiE46AiBFgt1BDNhJtZIUT0Uxfc8rZCfBvihPgKlgie7RFviWaiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJq%2BJAxF2vrdXyf6KtwDhWConvVpZeJbBKYZRrxZk7HRPghhUbgSlYnyYhyrVqDMAL3XZRcFUHjgwi6MgtAivdSF4rzGj%2FgNyFhhK%2F%2FyVZf%2B%2Bm81FTXc0I%2BnY%2FtMLEKGngzmC9Wa%2BHx1z15esYEJITDO2mR%2FOGSgz6CvoDdVYi3Kd0rJdHbizbH213VPzqiYMBUkJ6O9FX3JOX3yOtt6e90DUPIjLsPdMR%2Bf1qYx4aVCX9a97QW8fnVp2mAxX8mxbS%2BZ0xIwUb1XYnCPJVcSIRxifyhVsjf94h%2FhAZhbaCeDryj59k5Iyt83RCfD0L8H%2FxsgwaxfsBsJHrhhF8hc3YGuVkWuYxjsVxeaSqVRQdMu5F84RFhOuaaQzyqi6RI9Un%2F43HYVju4exUD45gN8BWklHDJLquJ7MzFmCsIKgTyQ1GuSBMAx6QMsIplu4sr%2Ff2V1ZGA6xTbMUUTspv%2BV0W8jaCO5TYhEfwsMKuLT2p8lkhZwmOWCtc%2FEYkDW2K25xPZHungJzlXNtMjLhvOAMWewqaHmthTStH6l3KHG%2BUYkZJyzK%2B0djt7LI3e1WQSnbbCYhDSXFkzf5EqtfoOcvBffQp%2Fvxr%2B5cpcXF0JFFAGgK041UzJcbFZ4WzliXAFTCdkcm0vZfUBhTM0wwObZygY6pgE9v4i3JUCYV%2BpQVtvE18wtL51ZMiA7BQor%2FjW9gnyaQWy3BHvKLd%2BdT0dvlkBvDWvEnZ46yyY%2FnwR04qasz4SpMvk6ye2n22dGryBhAUivCLOTetoIjvO3agyr689LqPsOyn7Dt87t4a4T1oZgFnQkPhJ4lZnYcbYqWQlGZkkEcL5T3KgVcW8LPog1xX%2F9GO3Be66II8LqnzOPbSgkN6T2NUMKMsLh&X-Amz-Signature=0ebbfb4e21ab2cdace5aa1a604097ec5f71720861b64e0901fc4f1c18256a812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSTR5O6%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T161406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrGDGwJjjr8q4m7RG%2FE5vu1zYyaFE3Ul7NgMYV%2BiE46AiBFgt1BDNhJtZIUT0Uxfc8rZCfBvihPgKlgie7RFviWaiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJq%2BJAxF2vrdXyf6KtwDhWConvVpZeJbBKYZRrxZk7HRPghhUbgSlYnyYhyrVqDMAL3XZRcFUHjgwi6MgtAivdSF4rzGj%2FgNyFhhK%2F%2FyVZf%2B%2Bm81FTXc0I%2BnY%2FtMLEKGngzmC9Wa%2BHx1z15esYEJITDO2mR%2FOGSgz6CvoDdVYi3Kd0rJdHbizbH213VPzqiYMBUkJ6O9FX3JOX3yOtt6e90DUPIjLsPdMR%2Bf1qYx4aVCX9a97QW8fnVp2mAxX8mxbS%2BZ0xIwUb1XYnCPJVcSIRxifyhVsjf94h%2FhAZhbaCeDryj59k5Iyt83RCfD0L8H%2FxsgwaxfsBsJHrhhF8hc3YGuVkWuYxjsVxeaSqVRQdMu5F84RFhOuaaQzyqi6RI9Un%2F43HYVju4exUD45gN8BWklHDJLquJ7MzFmCsIKgTyQ1GuSBMAx6QMsIplu4sr%2Ff2V1ZGA6xTbMUUTspv%2BV0W8jaCO5TYhEfwsMKuLT2p8lkhZwmOWCtc%2FEYkDW2K25xPZHungJzlXNtMjLhvOAMWewqaHmthTStH6l3KHG%2BUYkZJyzK%2B0djt7LI3e1WQSnbbCYhDSXFkzf5EqtfoOcvBffQp%2Fvxr%2B5cpcXF0JFFAGgK041UzJcbFZ4WzliXAFTCdkcm0vZfUBhTM0wwObZygY6pgE9v4i3JUCYV%2BpQVtvE18wtL51ZMiA7BQor%2FjW9gnyaQWy3BHvKLd%2BdT0dvlkBvDWvEnZ46yyY%2FnwR04qasz4SpMvk6ye2n22dGryBhAUivCLOTetoIjvO3agyr689LqPsOyn7Dt87t4a4T1oZgFnQkPhJ4lZnYcbYqWQlGZkkEcL5T3KgVcW8LPog1xX%2F9GO3Be66II8LqnzOPbSgkN6T2NUMKMsLh&X-Amz-Signature=c6fa0c634ab5359678de8e0d910e56dda99a3b96167ee57e0778fe4159a27865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

