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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEVI5IN%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T015354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBFu68PB4LhEJbSKddi9tYp8tlJoDIU13aBHg9Qc%2FI%2BAiEA5YMdVAZj4BOzth4jgHvDCtstxsKKmAarnV0R0BwlNa8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFerEGJdyZWMBJjRTSrcA7l%2FVkMbUXNE%2FXFFR3gVSCaTmKbkKdTBuepjPiZWWwuuHlfj8UTMpJopmktYyiIPCxwb1jjlNg3IOMeADuTe5CoXWJVQL0%2Bl84ANFAUN5ehX1SXAKY2LssGjMq3vnUx1FcqWFaMFClmao4jEb%2B%2FbAEsQgCfndvm14uiT%2FvaDtdlhcMGEIGNLjABZa0SJMDkSQvUWxbXxW2%2Bi6paG6AlnI%2B6WXaBg0l%2BxH0vY4jQkF4WUPkK%2BBFLW0T2fx%2BDOAuYkneLSVbaWFSgtTfDYxnTppLtlhf%2FtxDRQ5A0LnqaTVpVqyfIKn4DLdn1LHzIIfAobA07A8DHkeMnTCKDW7VLEd3wGGe4P2iEQ8xFwSNo14BsfzKh%2FpLCSKbXUaphS9CVbF0JVrmgK5l1Ow54YJ9NCOBEHH37KyAUA9QJZqXYXxinAbePQtHBiysQh13C6BqG%2Fix5bgR8BGhno%2FeTJuAEcjTEe5SpDPQuagAWYU08Kmk1OhTm2cb3qTXt9IrRWZ2qLtl9k6orsk5FPUpQK3lEb4UTVHjDl2tZwrnGFBa4Av0Obi7iaym2ZWWcFgu1QlcHjtZtKcxy41hxHgIzQmfOuUHc5rbY8qcTygRCyapF8AdjPCqlwtBKrGqVm9H5tMKSLvcYGOqUB4bq8%2FUx3oTfkglWXM7VJ0LVMnPlSfxR4WwAWOfB6nCPHlg0rXV5h0v1uheeIv140kYoYG69TwUASucF%2FfaH3QEaE9ScSB8Pvwiv%2Fjdd3656Tk1fYuUFfxyCdgqrP19aYhq5r98JbHq9PCX62KgefeE5EG68GWm25mEpTrsy9I2M0Ptb7E8vRBqDEnJVFmhfrQzzhN2XBrDMwk3onO1qsZ1oiaY2Z&X-Amz-Signature=429db666fa532a89661cace42a6d3522b2a4aadd94e28e3e572be447fb3d470b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEVI5IN%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T015354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBFu68PB4LhEJbSKddi9tYp8tlJoDIU13aBHg9Qc%2FI%2BAiEA5YMdVAZj4BOzth4jgHvDCtstxsKKmAarnV0R0BwlNa8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFerEGJdyZWMBJjRTSrcA7l%2FVkMbUXNE%2FXFFR3gVSCaTmKbkKdTBuepjPiZWWwuuHlfj8UTMpJopmktYyiIPCxwb1jjlNg3IOMeADuTe5CoXWJVQL0%2Bl84ANFAUN5ehX1SXAKY2LssGjMq3vnUx1FcqWFaMFClmao4jEb%2B%2FbAEsQgCfndvm14uiT%2FvaDtdlhcMGEIGNLjABZa0SJMDkSQvUWxbXxW2%2Bi6paG6AlnI%2B6WXaBg0l%2BxH0vY4jQkF4WUPkK%2BBFLW0T2fx%2BDOAuYkneLSVbaWFSgtTfDYxnTppLtlhf%2FtxDRQ5A0LnqaTVpVqyfIKn4DLdn1LHzIIfAobA07A8DHkeMnTCKDW7VLEd3wGGe4P2iEQ8xFwSNo14BsfzKh%2FpLCSKbXUaphS9CVbF0JVrmgK5l1Ow54YJ9NCOBEHH37KyAUA9QJZqXYXxinAbePQtHBiysQh13C6BqG%2Fix5bgR8BGhno%2FeTJuAEcjTEe5SpDPQuagAWYU08Kmk1OhTm2cb3qTXt9IrRWZ2qLtl9k6orsk5FPUpQK3lEb4UTVHjDl2tZwrnGFBa4Av0Obi7iaym2ZWWcFgu1QlcHjtZtKcxy41hxHgIzQmfOuUHc5rbY8qcTygRCyapF8AdjPCqlwtBKrGqVm9H5tMKSLvcYGOqUB4bq8%2FUx3oTfkglWXM7VJ0LVMnPlSfxR4WwAWOfB6nCPHlg0rXV5h0v1uheeIv140kYoYG69TwUASucF%2FfaH3QEaE9ScSB8Pvwiv%2Fjdd3656Tk1fYuUFfxyCdgqrP19aYhq5r98JbHq9PCX62KgefeE5EG68GWm25mEpTrsy9I2M0Ptb7E8vRBqDEnJVFmhfrQzzhN2XBrDMwk3onO1qsZ1oiaY2Z&X-Amz-Signature=08f45c9a1504ca3cd819cd5589f47bca78e56a53f4dba953c7ee604922dc97a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEVI5IN%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T015354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBFu68PB4LhEJbSKddi9tYp8tlJoDIU13aBHg9Qc%2FI%2BAiEA5YMdVAZj4BOzth4jgHvDCtstxsKKmAarnV0R0BwlNa8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFerEGJdyZWMBJjRTSrcA7l%2FVkMbUXNE%2FXFFR3gVSCaTmKbkKdTBuepjPiZWWwuuHlfj8UTMpJopmktYyiIPCxwb1jjlNg3IOMeADuTe5CoXWJVQL0%2Bl84ANFAUN5ehX1SXAKY2LssGjMq3vnUx1FcqWFaMFClmao4jEb%2B%2FbAEsQgCfndvm14uiT%2FvaDtdlhcMGEIGNLjABZa0SJMDkSQvUWxbXxW2%2Bi6paG6AlnI%2B6WXaBg0l%2BxH0vY4jQkF4WUPkK%2BBFLW0T2fx%2BDOAuYkneLSVbaWFSgtTfDYxnTppLtlhf%2FtxDRQ5A0LnqaTVpVqyfIKn4DLdn1LHzIIfAobA07A8DHkeMnTCKDW7VLEd3wGGe4P2iEQ8xFwSNo14BsfzKh%2FpLCSKbXUaphS9CVbF0JVrmgK5l1Ow54YJ9NCOBEHH37KyAUA9QJZqXYXxinAbePQtHBiysQh13C6BqG%2Fix5bgR8BGhno%2FeTJuAEcjTEe5SpDPQuagAWYU08Kmk1OhTm2cb3qTXt9IrRWZ2qLtl9k6orsk5FPUpQK3lEb4UTVHjDl2tZwrnGFBa4Av0Obi7iaym2ZWWcFgu1QlcHjtZtKcxy41hxHgIzQmfOuUHc5rbY8qcTygRCyapF8AdjPCqlwtBKrGqVm9H5tMKSLvcYGOqUB4bq8%2FUx3oTfkglWXM7VJ0LVMnPlSfxR4WwAWOfB6nCPHlg0rXV5h0v1uheeIv140kYoYG69TwUASucF%2FfaH3QEaE9ScSB8Pvwiv%2Fjdd3656Tk1fYuUFfxyCdgqrP19aYhq5r98JbHq9PCX62KgefeE5EG68GWm25mEpTrsy9I2M0Ptb7E8vRBqDEnJVFmhfrQzzhN2XBrDMwk3onO1qsZ1oiaY2Z&X-Amz-Signature=bd71d913865aecd286a03326e97e51ed50616e6c7d31bb46d2236c9be2c7f2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


