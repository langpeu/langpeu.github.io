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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEBZZQZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T132250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAuCPH6WGcO3eks4H8ro757weH%2F57v2tIvm%2FiGvmnNotAiEA9QLre38hA4W%2FyATxCJxeimfSFsXstnzZA6VGDHZPlKAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwBsa6e0R2pbZM%2BnCrcA1P3IBN4uIXJmqsZGBHB7nwrMB7VJX4Y8MX8v2W6REtV6jKTMJg8xzT5FF1Rd2G5FBixpAgytgDhiM5%2FEUtDlVAPJEBAGq2c0gRLpHb1fG6jb3gsYM%2BHD6wtzaORE%2BIw0UUE%2Bt18lOq%2BJCXtnmxwN4eTvt2aKfTK0ZVgw1VEoSdU30M%2BzB8eMZ9hyE3ea81RXsE4RNtUvnfx4fxv%2BRNoahTP6wulatJXhWmfJQ53AlywgYudA5vmjyWBst76ai0ItGeDaoCxKF%2FDbek6CPuQxEuTLXU8n%2FwWyydnGFT51%2BWW6v9aIWNrV0DmloGpfroguGPUfcVJrM2Bbs%2B1CRRuzmz2zyZEHNttW23U8Zwcn9NvA597ypP5%2F5%2Ft85TzicUm%2Bb6o2wpIuKjPMHsQq2Uc3wdcBZgVvU60sfdvQQIOUtkNIgVxZgAybpVlAl7Cf4gYzlYcNRx8W2TaCguBUDZrp3VwhUBapBdtNWAomCm%2BB0b1Zfqx3xwdLsuQMPR%2BRMU6NtKgQq1PwdYO3si4ryxpS7odCGVzvxxX4ajU4HUVJb3F7Rd%2BkVFHvusAsHzg1jqcgdW9ngh6oh%2B651cImoax9O2wNZidh7V1skgkPRFDEAFJkEdQxuT28PD6SKyAMOr51r0GOqUBYkkVJtDe2hZ6Gg%2BILKjuEj%2BdqgjvRm0xGi%2BsaWSP%2B6xBY53txpEiJq8%2B5RQdmg76ICoTRvmbeYPUcGcgmmVWH5XfrjNPROMHnaGmKNRJym1O5B5Wwl5cV92QHy4c7sH%2BcCNZCeSiUk07s%2B7W6Q1z8Ogfg4D6km%2F7YGX4bWWFE5hWm0N5W1mHiBTGkEtY4tHUBAEXPStIBZdZETLhYhJ1WlPrAcQl&X-Amz-Signature=fabee8005fb7c238d5fe5c1e7da3ae8c6abe6550e992789c888a4f84060cc2fc&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEBZZQZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T132250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAuCPH6WGcO3eks4H8ro757weH%2F57v2tIvm%2FiGvmnNotAiEA9QLre38hA4W%2FyATxCJxeimfSFsXstnzZA6VGDHZPlKAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwBsa6e0R2pbZM%2BnCrcA1P3IBN4uIXJmqsZGBHB7nwrMB7VJX4Y8MX8v2W6REtV6jKTMJg8xzT5FF1Rd2G5FBixpAgytgDhiM5%2FEUtDlVAPJEBAGq2c0gRLpHb1fG6jb3gsYM%2BHD6wtzaORE%2BIw0UUE%2Bt18lOq%2BJCXtnmxwN4eTvt2aKfTK0ZVgw1VEoSdU30M%2BzB8eMZ9hyE3ea81RXsE4RNtUvnfx4fxv%2BRNoahTP6wulatJXhWmfJQ53AlywgYudA5vmjyWBst76ai0ItGeDaoCxKF%2FDbek6CPuQxEuTLXU8n%2FwWyydnGFT51%2BWW6v9aIWNrV0DmloGpfroguGPUfcVJrM2Bbs%2B1CRRuzmz2zyZEHNttW23U8Zwcn9NvA597ypP5%2F5%2Ft85TzicUm%2Bb6o2wpIuKjPMHsQq2Uc3wdcBZgVvU60sfdvQQIOUtkNIgVxZgAybpVlAl7Cf4gYzlYcNRx8W2TaCguBUDZrp3VwhUBapBdtNWAomCm%2BB0b1Zfqx3xwdLsuQMPR%2BRMU6NtKgQq1PwdYO3si4ryxpS7odCGVzvxxX4ajU4HUVJb3F7Rd%2BkVFHvusAsHzg1jqcgdW9ngh6oh%2B651cImoax9O2wNZidh7V1skgkPRFDEAFJkEdQxuT28PD6SKyAMOr51r0GOqUBYkkVJtDe2hZ6Gg%2BILKjuEj%2BdqgjvRm0xGi%2BsaWSP%2B6xBY53txpEiJq8%2B5RQdmg76ICoTRvmbeYPUcGcgmmVWH5XfrjNPROMHnaGmKNRJym1O5B5Wwl5cV92QHy4c7sH%2BcCNZCeSiUk07s%2B7W6Q1z8Ogfg4D6km%2F7YGX4bWWFE5hWm0N5W1mHiBTGkEtY4tHUBAEXPStIBZdZETLhYhJ1WlPrAcQl&X-Amz-Signature=20ace58815873472a4e4aa9380449d1e1b83846f944f6bb14be01225f9ecf38b&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEBZZQZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T132250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAuCPH6WGcO3eks4H8ro757weH%2F57v2tIvm%2FiGvmnNotAiEA9QLre38hA4W%2FyATxCJxeimfSFsXstnzZA6VGDHZPlKAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwBsa6e0R2pbZM%2BnCrcA1P3IBN4uIXJmqsZGBHB7nwrMB7VJX4Y8MX8v2W6REtV6jKTMJg8xzT5FF1Rd2G5FBixpAgytgDhiM5%2FEUtDlVAPJEBAGq2c0gRLpHb1fG6jb3gsYM%2BHD6wtzaORE%2BIw0UUE%2Bt18lOq%2BJCXtnmxwN4eTvt2aKfTK0ZVgw1VEoSdU30M%2BzB8eMZ9hyE3ea81RXsE4RNtUvnfx4fxv%2BRNoahTP6wulatJXhWmfJQ53AlywgYudA5vmjyWBst76ai0ItGeDaoCxKF%2FDbek6CPuQxEuTLXU8n%2FwWyydnGFT51%2BWW6v9aIWNrV0DmloGpfroguGPUfcVJrM2Bbs%2B1CRRuzmz2zyZEHNttW23U8Zwcn9NvA597ypP5%2F5%2Ft85TzicUm%2Bb6o2wpIuKjPMHsQq2Uc3wdcBZgVvU60sfdvQQIOUtkNIgVxZgAybpVlAl7Cf4gYzlYcNRx8W2TaCguBUDZrp3VwhUBapBdtNWAomCm%2BB0b1Zfqx3xwdLsuQMPR%2BRMU6NtKgQq1PwdYO3si4ryxpS7odCGVzvxxX4ajU4HUVJb3F7Rd%2BkVFHvusAsHzg1jqcgdW9ngh6oh%2B651cImoax9O2wNZidh7V1skgkPRFDEAFJkEdQxuT28PD6SKyAMOr51r0GOqUBYkkVJtDe2hZ6Gg%2BILKjuEj%2BdqgjvRm0xGi%2BsaWSP%2B6xBY53txpEiJq8%2B5RQdmg76ICoTRvmbeYPUcGcgmmVWH5XfrjNPROMHnaGmKNRJym1O5B5Wwl5cV92QHy4c7sH%2BcCNZCeSiUk07s%2B7W6Q1z8Ogfg4D6km%2F7YGX4bWWFE5hWm0N5W1mHiBTGkEtY4tHUBAEXPStIBZdZETLhYhJ1WlPrAcQl&X-Amz-Signature=d3868d6d5011e9670108a84ee91355fadd55173051378eae64ec4e8f60f81d69&X-Amz-SignedHeaders=host&x-id=GetObject)



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


