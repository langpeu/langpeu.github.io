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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULS7NDTL%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID3vF%2B386Cy1nc5vj21adq8ABzUAmtUi1GfnIbLP6hBDAiBxq0HikNwpE33w5tWcB885Nn4L%2FkBrGRdBplq1hQ6cwyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkSGXbzlI%2F0StnnF1KtwDIh8I7TrtGBtwnCtykEaxfwoh42Vxv1ruasjN8y%2Fp9wVMZfdgJ6wzkWubNv10mB2wMDmXqSyqq%2B68PiT7CiwcD1LCd3kH8ekYKf0X1YOyjrqsAe%2BaVNOXyv5mam3K1TkZg75J0Sg9%2Buv8XIg%2BsvEpcVwmdb4xTDzHBSGvIOG1gkF47DpMGVadJ%2F3jc2%2FdHUr83bnN6mSuSfEz9MidhHTZSojNyX5Dx9C%2F4nXiIvIhGS%2FZzzw488%2Ff4MgAnUGplaHa8DQhRWyyfGSR1R8T0HyX64f%2FlzdycRbcufhMv68xc2lkZjVAOZpSSPWOj%2Bwv9qRaMSkM28V9UdR1fpemL1oUmBKwIliTh1f54eJYAMww%2Bce4AGKv0CfQlH%2FUjNhvS%2B39rhYtnNS9s5YHuKBRXlxt1Al%2BLCX%2FdbssUYfacS%2FP4vplcL%2FvoBljRqCkTsBHErnpFz60ANVdJfd6f22PXD6Dazs0%2BwFIXZASjuXcAqIlx%2F%2FOyDhUbh2IiTXTH%2BoPMl%2FGwkzGX74DSCgvoYQ91NNbJeKla90Nxo%2BTrrDdPxPLm0Y181yUzFVt%2FudpL%2BUlUcX%2By1Z%2Bo4VoRccQbux%2FuAVHGVbdkP9c7X3TEPfoFi2lLhG%2FuU%2FvAOKN2n%2FLYJcwnfeF2AY6pgE4at5KBDXbTrdVMQMdBZ2hEyyGY5stgnSCphxVpHwz0Oj%2BC3CLXy7AtNKqhP8sqts4ghyALG1Eej4scR%2FACKLogh3yZWjr8UiHxg2KM3rno9fQW9ZiKpMnz9p0SF98KyaV%2FKOFz9G9CAog8x%2B09F4tvCrUmQXJQJ3lzD%2Faz8cl0I7ozX6zkQvOgfzgm7A%2BxRtqWDRwJ0H3%2Bdl9kGITKpYN9feQO8GD&X-Amz-Signature=80cccf3c0c584d8cb0e1738f3997ae39c18f619f2566464c4d2ec7c2457e06fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULS7NDTL%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID3vF%2B386Cy1nc5vj21adq8ABzUAmtUi1GfnIbLP6hBDAiBxq0HikNwpE33w5tWcB885Nn4L%2FkBrGRdBplq1hQ6cwyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkSGXbzlI%2F0StnnF1KtwDIh8I7TrtGBtwnCtykEaxfwoh42Vxv1ruasjN8y%2Fp9wVMZfdgJ6wzkWubNv10mB2wMDmXqSyqq%2B68PiT7CiwcD1LCd3kH8ekYKf0X1YOyjrqsAe%2BaVNOXyv5mam3K1TkZg75J0Sg9%2Buv8XIg%2BsvEpcVwmdb4xTDzHBSGvIOG1gkF47DpMGVadJ%2F3jc2%2FdHUr83bnN6mSuSfEz9MidhHTZSojNyX5Dx9C%2F4nXiIvIhGS%2FZzzw488%2Ff4MgAnUGplaHa8DQhRWyyfGSR1R8T0HyX64f%2FlzdycRbcufhMv68xc2lkZjVAOZpSSPWOj%2Bwv9qRaMSkM28V9UdR1fpemL1oUmBKwIliTh1f54eJYAMww%2Bce4AGKv0CfQlH%2FUjNhvS%2B39rhYtnNS9s5YHuKBRXlxt1Al%2BLCX%2FdbssUYfacS%2FP4vplcL%2FvoBljRqCkTsBHErnpFz60ANVdJfd6f22PXD6Dazs0%2BwFIXZASjuXcAqIlx%2F%2FOyDhUbh2IiTXTH%2BoPMl%2FGwkzGX74DSCgvoYQ91NNbJeKla90Nxo%2BTrrDdPxPLm0Y181yUzFVt%2FudpL%2BUlUcX%2By1Z%2Bo4VoRccQbux%2FuAVHGVbdkP9c7X3TEPfoFi2lLhG%2FuU%2FvAOKN2n%2FLYJcwnfeF2AY6pgE4at5KBDXbTrdVMQMdBZ2hEyyGY5stgnSCphxVpHwz0Oj%2BC3CLXy7AtNKqhP8sqts4ghyALG1Eej4scR%2FACKLogh3yZWjr8UiHxg2KM3rno9fQW9ZiKpMnz9p0SF98KyaV%2FKOFz9G9CAog8x%2B09F4tvCrUmQXJQJ3lzD%2Faz8cl0I7ozX6zkQvOgfzgm7A%2BxRtqWDRwJ0H3%2Bdl9kGITKpYN9feQO8GD&X-Amz-Signature=32fd5baf903e1a1f96e573f585b6b8ed225bd1dcdc264ba2fbded97bd9c03f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULS7NDTL%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID3vF%2B386Cy1nc5vj21adq8ABzUAmtUi1GfnIbLP6hBDAiBxq0HikNwpE33w5tWcB885Nn4L%2FkBrGRdBplq1hQ6cwyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkSGXbzlI%2F0StnnF1KtwDIh8I7TrtGBtwnCtykEaxfwoh42Vxv1ruasjN8y%2Fp9wVMZfdgJ6wzkWubNv10mB2wMDmXqSyqq%2B68PiT7CiwcD1LCd3kH8ekYKf0X1YOyjrqsAe%2BaVNOXyv5mam3K1TkZg75J0Sg9%2Buv8XIg%2BsvEpcVwmdb4xTDzHBSGvIOG1gkF47DpMGVadJ%2F3jc2%2FdHUr83bnN6mSuSfEz9MidhHTZSojNyX5Dx9C%2F4nXiIvIhGS%2FZzzw488%2Ff4MgAnUGplaHa8DQhRWyyfGSR1R8T0HyX64f%2FlzdycRbcufhMv68xc2lkZjVAOZpSSPWOj%2Bwv9qRaMSkM28V9UdR1fpemL1oUmBKwIliTh1f54eJYAMww%2Bce4AGKv0CfQlH%2FUjNhvS%2B39rhYtnNS9s5YHuKBRXlxt1Al%2BLCX%2FdbssUYfacS%2FP4vplcL%2FvoBljRqCkTsBHErnpFz60ANVdJfd6f22PXD6Dazs0%2BwFIXZASjuXcAqIlx%2F%2FOyDhUbh2IiTXTH%2BoPMl%2FGwkzGX74DSCgvoYQ91NNbJeKla90Nxo%2BTrrDdPxPLm0Y181yUzFVt%2FudpL%2BUlUcX%2By1Z%2Bo4VoRccQbux%2FuAVHGVbdkP9c7X3TEPfoFi2lLhG%2FuU%2FvAOKN2n%2FLYJcwnfeF2AY6pgE4at5KBDXbTrdVMQMdBZ2hEyyGY5stgnSCphxVpHwz0Oj%2BC3CLXy7AtNKqhP8sqts4ghyALG1Eej4scR%2FACKLogh3yZWjr8UiHxg2KM3rno9fQW9ZiKpMnz9p0SF98KyaV%2FKOFz9G9CAog8x%2B09F4tvCrUmQXJQJ3lzD%2Faz8cl0I7ozX6zkQvOgfzgm7A%2BxRtqWDRwJ0H3%2Bdl9kGITKpYN9feQO8GD&X-Amz-Signature=e41527f7a94b02372029ba9c5745a697ab88aa7cd92f9a794ffbf2cf407ce715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

