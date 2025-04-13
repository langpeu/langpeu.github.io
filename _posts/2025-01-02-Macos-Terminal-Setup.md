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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBJISE5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T080337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAY2LW8QWGQsGC%2FeuBIx2ThlkCcESOLhnVhsuH7t%2FDwSAiEA%2FYhW%2BcDKzFZ1hg%2Bf4%2Ff1FTGefi5Utg%2BT02Vdh7nEFgMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLg1fOp1ADePN1HnircA5bmM8wf8DB225VYpgOF7Urw3reEiFclZeblcK9v7sTI9vZrdCGUybHaTVgYZoU7jZdXVxCrn93rXMwp5DkXJIqOT5RETONIC9vwP5NBYVGo03w5NTBR%2BXYbDROnXB550theO1OmUSJVpSmxma71ktszcAigQamAsSUDzZX3z4chcCcFoMY6ftpYVrwCRQ7VyFR9%2BK9ifyvcrtzYzZnSMyBO8xcj%2BsTdGQT8Wvj2HVWCE0zSSvwEu8KCHosUl965gviPJwLYxlqPly68%2BiDLrLgS0gW1nbDmmg7R%2Fmif9%2BMKe6jlF39bCJPHOv%2BBbAiOLO%2FJJ7%2F%2FXeuxt%2By3zf%2F3i4ifKIx95u1kHWsVXZHZU7kmhO9JCAObhe%2FIydrbvYlBOuxuO4QzV4qnSHpPHustXXNtYFUqulvkzQpr%2F%2B6reJxHqLIBcYwaU7U%2BToAetuzEUDWItvFUEqWxlxG6DH3FWg6KE5PhSIwrnRu6O5%2FpX3l0YQva6v30hue%2BPpTwcrqU5v%2BGUOYkFXoYoIOhXFCjZzIWIUxPQy6xZovyXUrgA%2Fohx4Rh9UQmO2M3xrhWb3EEoKJYQC5%2F3AP8wVBklOv%2BaPEMbbpsEi%2FpcLegegE52G3ehNKLp0gt3afB5fXxMJre7b8GOqUBKQgg9TickAOdsMkFjxj%2BkcADMGG6tevrpm8ZgM6L18nfdiuWRsLajiBMSZu4uWhLzaG1%2BW2kdcKDIvj48%2BQFq69tA6zr2y43kBsifDr7neHcql1ajPc%2FWS2KTDXq%2ByGoE0o%2F%2FQt%2F2McAedHirjceH63QxY4CupWRji7TnhKhXu9I8kEr5T0nL7NdSeM1uqv6ktlwg6dz4K3cxwYbwy0qWuS7VGvR&X-Amz-Signature=9a910d308ca99ecb29ec4071b96d6eb0acb2f2bb0c9fa206aa62e8ba70cde4b5&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBJISE5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T080337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAY2LW8QWGQsGC%2FeuBIx2ThlkCcESOLhnVhsuH7t%2FDwSAiEA%2FYhW%2BcDKzFZ1hg%2Bf4%2Ff1FTGefi5Utg%2BT02Vdh7nEFgMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLg1fOp1ADePN1HnircA5bmM8wf8DB225VYpgOF7Urw3reEiFclZeblcK9v7sTI9vZrdCGUybHaTVgYZoU7jZdXVxCrn93rXMwp5DkXJIqOT5RETONIC9vwP5NBYVGo03w5NTBR%2BXYbDROnXB550theO1OmUSJVpSmxma71ktszcAigQamAsSUDzZX3z4chcCcFoMY6ftpYVrwCRQ7VyFR9%2BK9ifyvcrtzYzZnSMyBO8xcj%2BsTdGQT8Wvj2HVWCE0zSSvwEu8KCHosUl965gviPJwLYxlqPly68%2BiDLrLgS0gW1nbDmmg7R%2Fmif9%2BMKe6jlF39bCJPHOv%2BBbAiOLO%2FJJ7%2F%2FXeuxt%2By3zf%2F3i4ifKIx95u1kHWsVXZHZU7kmhO9JCAObhe%2FIydrbvYlBOuxuO4QzV4qnSHpPHustXXNtYFUqulvkzQpr%2F%2B6reJxHqLIBcYwaU7U%2BToAetuzEUDWItvFUEqWxlxG6DH3FWg6KE5PhSIwrnRu6O5%2FpX3l0YQva6v30hue%2BPpTwcrqU5v%2BGUOYkFXoYoIOhXFCjZzIWIUxPQy6xZovyXUrgA%2Fohx4Rh9UQmO2M3xrhWb3EEoKJYQC5%2F3AP8wVBklOv%2BaPEMbbpsEi%2FpcLegegE52G3ehNKLp0gt3afB5fXxMJre7b8GOqUBKQgg9TickAOdsMkFjxj%2BkcADMGG6tevrpm8ZgM6L18nfdiuWRsLajiBMSZu4uWhLzaG1%2BW2kdcKDIvj48%2BQFq69tA6zr2y43kBsifDr7neHcql1ajPc%2FWS2KTDXq%2ByGoE0o%2F%2FQt%2F2McAedHirjceH63QxY4CupWRji7TnhKhXu9I8kEr5T0nL7NdSeM1uqv6ktlwg6dz4K3cxwYbwy0qWuS7VGvR&X-Amz-Signature=a9c710ad6ed41dcb60d8e4f0edb3401c7bffc1be6bbc088c2aebe9ff8aba34c0&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBJISE5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T080337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAY2LW8QWGQsGC%2FeuBIx2ThlkCcESOLhnVhsuH7t%2FDwSAiEA%2FYhW%2BcDKzFZ1hg%2Bf4%2Ff1FTGefi5Utg%2BT02Vdh7nEFgMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLg1fOp1ADePN1HnircA5bmM8wf8DB225VYpgOF7Urw3reEiFclZeblcK9v7sTI9vZrdCGUybHaTVgYZoU7jZdXVxCrn93rXMwp5DkXJIqOT5RETONIC9vwP5NBYVGo03w5NTBR%2BXYbDROnXB550theO1OmUSJVpSmxma71ktszcAigQamAsSUDzZX3z4chcCcFoMY6ftpYVrwCRQ7VyFR9%2BK9ifyvcrtzYzZnSMyBO8xcj%2BsTdGQT8Wvj2HVWCE0zSSvwEu8KCHosUl965gviPJwLYxlqPly68%2BiDLrLgS0gW1nbDmmg7R%2Fmif9%2BMKe6jlF39bCJPHOv%2BBbAiOLO%2FJJ7%2F%2FXeuxt%2By3zf%2F3i4ifKIx95u1kHWsVXZHZU7kmhO9JCAObhe%2FIydrbvYlBOuxuO4QzV4qnSHpPHustXXNtYFUqulvkzQpr%2F%2B6reJxHqLIBcYwaU7U%2BToAetuzEUDWItvFUEqWxlxG6DH3FWg6KE5PhSIwrnRu6O5%2FpX3l0YQva6v30hue%2BPpTwcrqU5v%2BGUOYkFXoYoIOhXFCjZzIWIUxPQy6xZovyXUrgA%2Fohx4Rh9UQmO2M3xrhWb3EEoKJYQC5%2F3AP8wVBklOv%2BaPEMbbpsEi%2FpcLegegE52G3ehNKLp0gt3afB5fXxMJre7b8GOqUBKQgg9TickAOdsMkFjxj%2BkcADMGG6tevrpm8ZgM6L18nfdiuWRsLajiBMSZu4uWhLzaG1%2BW2kdcKDIvj48%2BQFq69tA6zr2y43kBsifDr7neHcql1ajPc%2FWS2KTDXq%2ByGoE0o%2F%2FQt%2F2McAedHirjceH63QxY4CupWRji7TnhKhXu9I8kEr5T0nL7NdSeM1uqv6ktlwg6dz4K3cxwYbwy0qWuS7VGvR&X-Amz-Signature=36fb336138e5a3d400a2eda955511b50a3f3806863b46c28f10abe9570d35f1f&X-Amz-SignedHeaders=host&x-id=GetObject)



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


