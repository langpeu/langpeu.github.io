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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRSGTE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T142350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICZ9T4vYB4EkqeDDi%2F%2Bf3cur%2Bdd5yCevlVAMG%2BBEBmHZAiEA0Xf4M5SjbhC%2BhePmWMUHN6FmSUPdl3DGKdlkyUkTslYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpqI1OjCaC5rXwODSrcAwkH6umHoEB7RRTHEfZyo%2BrB0HPSkly2u9lDUzxaqx1RahiHpvfXMZWKCtfhgyhoT4nrYxU79jWhF7qwSTtjK7BB%2BGCGOpWCGSYBY485%2FGICD9kde9q2UrAe0PZM8%2F8mxFW6IX%2B%2BuzLdHqVQ7%2B09fernVIpN6uRIi4KPs%2Fkd0cDnVSMPfUAv0YOVSyaHrLQGdgxxIGU6OrZAn7kiclPH%2FYcrUmex9O9Z60sj2j6CLBXqIo8XbR8N6WddDkIkNtdocuD6v%2FZCHe0JewgUaKwPuGfTqxonnvCfZExiQwdAwdRKLSSqSb8miEWMwuqBTLjQVXmAq3lRxRdWZCHkvkH2wXG5%2FoVMObShYhBOnq2y%2BeypotacZAkl2U8PVzGDMwsN5tvxUtStpe1jtp%2F7vqos1uFGC8Pw8efNSKaQQEoOtiOXm7W6b8bEYf9rUbCTKGBC5CwIlHgJbWma1AgQ5j3wd7eAKeJnn7G8MobiyIWYgCBMwuxQcmPJDWiV811QHQM9ObtrsuaC7L%2FtpKmpIInzaJBtEZNcwdQIyTK8A%2FXFxaHqg5MrUggZS0chP9SjXGKy1Q8ZBhygtE%2BcWh87ga4QFr30x2Zy8je9sZkHthf4oVjl6nIyUhxDSoUfN6xZMIf61r0GOqUBkb%2BPUebAfPNtSJTdAqAJIj80cP5nwigJiUtplomqq%2B1quWlbfDhV20VBHT1k09x%2FPXiN4gFYyUDACVLADnFcCz%2Ffk9iyuHatM7Jl0wy8v%2F8exVjtPz37B8KDY99qjLghwJn%2Bc%2FFUixsk798l%2FLxF4gMAYOk6%2FcrPByFgRLtrIq%2BAhZKWiYZQGHLAny0wUFHdNYThttPy%2FxAHoP%2FU59O%2B3j7pZi0r&X-Amz-Signature=f49818b9cdf3c2ed79e68e72ba56861f30a306f2b19678b3b541bb7d58297e64&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRSGTE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T142350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICZ9T4vYB4EkqeDDi%2F%2Bf3cur%2Bdd5yCevlVAMG%2BBEBmHZAiEA0Xf4M5SjbhC%2BhePmWMUHN6FmSUPdl3DGKdlkyUkTslYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpqI1OjCaC5rXwODSrcAwkH6umHoEB7RRTHEfZyo%2BrB0HPSkly2u9lDUzxaqx1RahiHpvfXMZWKCtfhgyhoT4nrYxU79jWhF7qwSTtjK7BB%2BGCGOpWCGSYBY485%2FGICD9kde9q2UrAe0PZM8%2F8mxFW6IX%2B%2BuzLdHqVQ7%2B09fernVIpN6uRIi4KPs%2Fkd0cDnVSMPfUAv0YOVSyaHrLQGdgxxIGU6OrZAn7kiclPH%2FYcrUmex9O9Z60sj2j6CLBXqIo8XbR8N6WddDkIkNtdocuD6v%2FZCHe0JewgUaKwPuGfTqxonnvCfZExiQwdAwdRKLSSqSb8miEWMwuqBTLjQVXmAq3lRxRdWZCHkvkH2wXG5%2FoVMObShYhBOnq2y%2BeypotacZAkl2U8PVzGDMwsN5tvxUtStpe1jtp%2F7vqos1uFGC8Pw8efNSKaQQEoOtiOXm7W6b8bEYf9rUbCTKGBC5CwIlHgJbWma1AgQ5j3wd7eAKeJnn7G8MobiyIWYgCBMwuxQcmPJDWiV811QHQM9ObtrsuaC7L%2FtpKmpIInzaJBtEZNcwdQIyTK8A%2FXFxaHqg5MrUggZS0chP9SjXGKy1Q8ZBhygtE%2BcWh87ga4QFr30x2Zy8je9sZkHthf4oVjl6nIyUhxDSoUfN6xZMIf61r0GOqUBkb%2BPUebAfPNtSJTdAqAJIj80cP5nwigJiUtplomqq%2B1quWlbfDhV20VBHT1k09x%2FPXiN4gFYyUDACVLADnFcCz%2Ffk9iyuHatM7Jl0wy8v%2F8exVjtPz37B8KDY99qjLghwJn%2Bc%2FFUixsk798l%2FLxF4gMAYOk6%2FcrPByFgRLtrIq%2BAhZKWiYZQGHLAny0wUFHdNYThttPy%2FxAHoP%2FU59O%2B3j7pZi0r&X-Amz-Signature=c019ccbdc2f9291ec390016520cb6449e29f2f4cffff6aba2d3ccaaa38886af2&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRSGTE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T142350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICZ9T4vYB4EkqeDDi%2F%2Bf3cur%2Bdd5yCevlVAMG%2BBEBmHZAiEA0Xf4M5SjbhC%2BhePmWMUHN6FmSUPdl3DGKdlkyUkTslYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpqI1OjCaC5rXwODSrcAwkH6umHoEB7RRTHEfZyo%2BrB0HPSkly2u9lDUzxaqx1RahiHpvfXMZWKCtfhgyhoT4nrYxU79jWhF7qwSTtjK7BB%2BGCGOpWCGSYBY485%2FGICD9kde9q2UrAe0PZM8%2F8mxFW6IX%2B%2BuzLdHqVQ7%2B09fernVIpN6uRIi4KPs%2Fkd0cDnVSMPfUAv0YOVSyaHrLQGdgxxIGU6OrZAn7kiclPH%2FYcrUmex9O9Z60sj2j6CLBXqIo8XbR8N6WddDkIkNtdocuD6v%2FZCHe0JewgUaKwPuGfTqxonnvCfZExiQwdAwdRKLSSqSb8miEWMwuqBTLjQVXmAq3lRxRdWZCHkvkH2wXG5%2FoVMObShYhBOnq2y%2BeypotacZAkl2U8PVzGDMwsN5tvxUtStpe1jtp%2F7vqos1uFGC8Pw8efNSKaQQEoOtiOXm7W6b8bEYf9rUbCTKGBC5CwIlHgJbWma1AgQ5j3wd7eAKeJnn7G8MobiyIWYgCBMwuxQcmPJDWiV811QHQM9ObtrsuaC7L%2FtpKmpIInzaJBtEZNcwdQIyTK8A%2FXFxaHqg5MrUggZS0chP9SjXGKy1Q8ZBhygtE%2BcWh87ga4QFr30x2Zy8je9sZkHthf4oVjl6nIyUhxDSoUfN6xZMIf61r0GOqUBkb%2BPUebAfPNtSJTdAqAJIj80cP5nwigJiUtplomqq%2B1quWlbfDhV20VBHT1k09x%2FPXiN4gFYyUDACVLADnFcCz%2Ffk9iyuHatM7Jl0wy8v%2F8exVjtPz37B8KDY99qjLghwJn%2Bc%2FFUixsk798l%2FLxF4gMAYOk6%2FcrPByFgRLtrIq%2BAhZKWiYZQGHLAny0wUFHdNYThttPy%2FxAHoP%2FU59O%2B3j7pZi0r&X-Amz-Signature=b301ee37ee0420ba7b0df68604c8f121f1e66e3e6e15182023c1632ed10476a9&X-Amz-SignedHeaders=host&x-id=GetObject)



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


