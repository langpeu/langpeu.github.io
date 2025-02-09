---
layout: post
date: 2025-01-02
title: "Macos Terminal Setup"
tags: [Tips, ]
categories: [Apple, ]
---


![0](/assets/img/2025-01-02-Macos-Terminal-Setup.md/0.png)_스크린샷_2025-01-05_오후_12.40.09.png_



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
[https://iterm2.com/downloads/stable/latest](https://iterm2.com/downloads/stable/latest)


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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KH2EH66%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T012758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FjPIzRrioA3mWdLy4Yv%2F2uoixhdLy3m0wmtJ2hBlCFAIhANLYMuxCT21zVZmqhMJ9ooMxCmlvBCXqz3MsJgi2r%2FV7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4TMD75FhnlAo%2FV2Iq3ANGay%2BFJA4gYkBwmMlHoQC%2BCW3eJZTSFZDds6XzH0wKOz3ukIAS%2FV37bQPEw0PiEXkt15Yv0k5mag4CVdmwGe8niL87gLZACLdplcse5swONC%2BqLedJg1XKks6hF9RS1vP38oHbo3pQ7J%2Fp9p5ZKfbKFVHckaAgBjBHT0KpfCUji1kWi0EJiHHAPf3LA4CANcr3aHbRmKrGQdZr6UrL5DlBT4rEyFcdjiDKv38ynnuMiiTqRk3ZJ7kkBXdgtAofSBBjvbkttTLfJB40olzeAKhEKCzSuXHUk4vwHLHHEKbkUTFjLOwiaDOkkQXhah59QHApxo%2FJMTwH4Lv2X%2B%2FHHB6sufOqZVJkEQ3YPfnz0L1mLpAKxn93HVE%2FvdlpugB1q%2FobmyeGE5pNtGvwWtm5u%2BQ4Rur2V%2B%2FtSvt6gOfFOo2VSzHgMCt1a6Chtl8VnxNf8bieRjlBP16OJYDbIm%2FyIin68foBc4Y5yVYG0GLGeGFKyKALBl0CEaAi5zuXLngNsT%2BHdFEsvphDn2MXoEt5ud2Z8pz4UvRtE5VQ26sF6LBm7F4SEbrO13hYiqJZ6DHPoO8aBYgzf5S8780VH2Z43r76aEbus%2FeVi3NAPjjPVyAfbl9nqgxf%2FcgfdFWfNDDU85%2B9BjqkAbMlH8bUVJ1k32nqSN3CLiGXpo6ALQ6Gcr9sI1Y70DTqgENaHePh98Op1h54YILUIl5mWIC2846WSvGRpNfo02ivaRVVk2jB6qPyqbif1q0KP3hSfzElvgUdMdPYO1KObFjDInEijJbM30uM0j21%2BrUSxvUz6wvsiMAOh%2FuO4tLhLc%2BwMXc5VDHfh9p3r%2FlCJHBlW6aDWGoBkauuYtQ2QcFJM%2BTx&X-Amz-Signature=66c3a64ef9025b3d0dd94e6b9574287989eeba86ea77d2fe000494371179f6a5&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KH2EH66%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T012758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FjPIzRrioA3mWdLy4Yv%2F2uoixhdLy3m0wmtJ2hBlCFAIhANLYMuxCT21zVZmqhMJ9ooMxCmlvBCXqz3MsJgi2r%2FV7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4TMD75FhnlAo%2FV2Iq3ANGay%2BFJA4gYkBwmMlHoQC%2BCW3eJZTSFZDds6XzH0wKOz3ukIAS%2FV37bQPEw0PiEXkt15Yv0k5mag4CVdmwGe8niL87gLZACLdplcse5swONC%2BqLedJg1XKks6hF9RS1vP38oHbo3pQ7J%2Fp9p5ZKfbKFVHckaAgBjBHT0KpfCUji1kWi0EJiHHAPf3LA4CANcr3aHbRmKrGQdZr6UrL5DlBT4rEyFcdjiDKv38ynnuMiiTqRk3ZJ7kkBXdgtAofSBBjvbkttTLfJB40olzeAKhEKCzSuXHUk4vwHLHHEKbkUTFjLOwiaDOkkQXhah59QHApxo%2FJMTwH4Lv2X%2B%2FHHB6sufOqZVJkEQ3YPfnz0L1mLpAKxn93HVE%2FvdlpugB1q%2FobmyeGE5pNtGvwWtm5u%2BQ4Rur2V%2B%2FtSvt6gOfFOo2VSzHgMCt1a6Chtl8VnxNf8bieRjlBP16OJYDbIm%2FyIin68foBc4Y5yVYG0GLGeGFKyKALBl0CEaAi5zuXLngNsT%2BHdFEsvphDn2MXoEt5ud2Z8pz4UvRtE5VQ26sF6LBm7F4SEbrO13hYiqJZ6DHPoO8aBYgzf5S8780VH2Z43r76aEbus%2FeVi3NAPjjPVyAfbl9nqgxf%2FcgfdFWfNDDU85%2B9BjqkAbMlH8bUVJ1k32nqSN3CLiGXpo6ALQ6Gcr9sI1Y70DTqgENaHePh98Op1h54YILUIl5mWIC2846WSvGRpNfo02ivaRVVk2jB6qPyqbif1q0KP3hSfzElvgUdMdPYO1KObFjDInEijJbM30uM0j21%2BrUSxvUz6wvsiMAOh%2FuO4tLhLc%2BwMXc5VDHfh9p3r%2FlCJHBlW6aDWGoBkauuYtQ2QcFJM%2BTx&X-Amz-Signature=ce61614b38e699b72e040b18cd10b24533c58b58a9d780cccf1612814cec142d&X-Amz-SignedHeaders=host&x-id=GetObject)


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KH2EH66%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T012758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FjPIzRrioA3mWdLy4Yv%2F2uoixhdLy3m0wmtJ2hBlCFAIhANLYMuxCT21zVZmqhMJ9ooMxCmlvBCXqz3MsJgi2r%2FV7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4TMD75FhnlAo%2FV2Iq3ANGay%2BFJA4gYkBwmMlHoQC%2BCW3eJZTSFZDds6XzH0wKOz3ukIAS%2FV37bQPEw0PiEXkt15Yv0k5mag4CVdmwGe8niL87gLZACLdplcse5swONC%2BqLedJg1XKks6hF9RS1vP38oHbo3pQ7J%2Fp9p5ZKfbKFVHckaAgBjBHT0KpfCUji1kWi0EJiHHAPf3LA4CANcr3aHbRmKrGQdZr6UrL5DlBT4rEyFcdjiDKv38ynnuMiiTqRk3ZJ7kkBXdgtAofSBBjvbkttTLfJB40olzeAKhEKCzSuXHUk4vwHLHHEKbkUTFjLOwiaDOkkQXhah59QHApxo%2FJMTwH4Lv2X%2B%2FHHB6sufOqZVJkEQ3YPfnz0L1mLpAKxn93HVE%2FvdlpugB1q%2FobmyeGE5pNtGvwWtm5u%2BQ4Rur2V%2B%2FtSvt6gOfFOo2VSzHgMCt1a6Chtl8VnxNf8bieRjlBP16OJYDbIm%2FyIin68foBc4Y5yVYG0GLGeGFKyKALBl0CEaAi5zuXLngNsT%2BHdFEsvphDn2MXoEt5ud2Z8pz4UvRtE5VQ26sF6LBm7F4SEbrO13hYiqJZ6DHPoO8aBYgzf5S8780VH2Z43r76aEbus%2FeVi3NAPjjPVyAfbl9nqgxf%2FcgfdFWfNDDU85%2B9BjqkAbMlH8bUVJ1k32nqSN3CLiGXpo6ALQ6Gcr9sI1Y70DTqgENaHePh98Op1h54YILUIl5mWIC2846WSvGRpNfo02ivaRVVk2jB6qPyqbif1q0KP3hSfzElvgUdMdPYO1KObFjDInEijJbM30uM0j21%2BrUSxvUz6wvsiMAOh%2FuO4tLhLc%2BwMXc5VDHfh9p3r%2FlCJHBlW6aDWGoBkauuYtQ2QcFJM%2BTx&X-Amz-Signature=1a67414043877a3df6b480eb848964fb84fb20edc1486498f4e7e9133396aae4&X-Amz-SignedHeaders=host&x-id=GetObject)



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


