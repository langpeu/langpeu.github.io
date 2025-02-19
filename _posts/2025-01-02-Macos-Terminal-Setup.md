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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3H5P45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID%2F%2B%2BM5gfRaTw66Fm4MerlmfLw%2B71gU3H8uUiTlbcyI1AiA2GIilorw4fUMi6IlP8hEcMpSvXQN16%2FEBCph6MjvygiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkaiwkKS5YEadRz8eKtwDC%2F8ytJqGzhPLYifY1aodfOkFS0%2FtrXnOdH2lhXBl4LUrHkbUHDV81r0ttWdJotfKlwu%2FMUGYNfYV46fEY4MeITOKjRHJseEkR49ekA3nqcrBjVx5U5oZp6RmFahJz8Lm5O4Ea90dYBMUzDnTNWbygw0g3n%2BCWLcwc%2F6WvQF79egoGauhLnUSkYugf7dheAPN0HmUWiHqgRR2oeCJUgOlaTLrdwk2mAQ6SJs1SHuSLNFTEtf5mWcXafwQY69AIOIZEIkhhgDC7dl%2BSZJsC7AHYEip3xtw1fY4kJF80R9SVqTlOjhnp7KTNGPSuduuq3sdr3zP%2Fh5BSR5%2FV%2BtXfUUheeEYkUEhAJrgEng1DzPrcz2xfI7fFUdiWn4b9TqYtX%2BvW2iJiRPYbsRy23Rw6vI24vWlNtUrg387y771urzPIdYSS6v0sHQnHQojVRHZ8YvGJ2QR8h7IQ2NOFBTHewvk8WMFsw0JRQx4Brm0A74sv7lK4QsRQa%2FNiMD8MGGUJm94zADOF%2FuSTttiqHzGOGjO7bhb3NfsgEGDGbRyHQBFzR58U9EeyJUsUxsOKXuEST46a5lKoR6m0dwkEh7Y2SlFba%2BvGR1rzDCw5%2BIvH2iRJWO7mbgpbe%2BVQYZBNBUwpfrWvQY6pgGF3xhn2z7Lca2vyXCWr140Qgh6YNogTdn5Lm49i5rngAWee9g0n5xG%2Bzp6LmLwutvjtFcv6Gyjqv%2FhnHTNMY94Q4bze8ghplPyM0ZhyK6kRMFxYWiuJAvuDhYyNUF7tItkg%2FeiBccME1LZFa2AbzU0lYE8Q3IvM1kzSMIPyN9fSrePkOtv%2FL68KjC4awS30tv0Ilqg2yUlz2XJ9doM9tDlfjBxT1n%2F&X-Amz-Signature=690bc9c57342e50c8207b11340d4ca709b41de4e92336b025b0bd46b4abcb7ce&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3H5P45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID%2F%2B%2BM5gfRaTw66Fm4MerlmfLw%2B71gU3H8uUiTlbcyI1AiA2GIilorw4fUMi6IlP8hEcMpSvXQN16%2FEBCph6MjvygiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkaiwkKS5YEadRz8eKtwDC%2F8ytJqGzhPLYifY1aodfOkFS0%2FtrXnOdH2lhXBl4LUrHkbUHDV81r0ttWdJotfKlwu%2FMUGYNfYV46fEY4MeITOKjRHJseEkR49ekA3nqcrBjVx5U5oZp6RmFahJz8Lm5O4Ea90dYBMUzDnTNWbygw0g3n%2BCWLcwc%2F6WvQF79egoGauhLnUSkYugf7dheAPN0HmUWiHqgRR2oeCJUgOlaTLrdwk2mAQ6SJs1SHuSLNFTEtf5mWcXafwQY69AIOIZEIkhhgDC7dl%2BSZJsC7AHYEip3xtw1fY4kJF80R9SVqTlOjhnp7KTNGPSuduuq3sdr3zP%2Fh5BSR5%2FV%2BtXfUUheeEYkUEhAJrgEng1DzPrcz2xfI7fFUdiWn4b9TqYtX%2BvW2iJiRPYbsRy23Rw6vI24vWlNtUrg387y771urzPIdYSS6v0sHQnHQojVRHZ8YvGJ2QR8h7IQ2NOFBTHewvk8WMFsw0JRQx4Brm0A74sv7lK4QsRQa%2FNiMD8MGGUJm94zADOF%2FuSTttiqHzGOGjO7bhb3NfsgEGDGbRyHQBFzR58U9EeyJUsUxsOKXuEST46a5lKoR6m0dwkEh7Y2SlFba%2BvGR1rzDCw5%2BIvH2iRJWO7mbgpbe%2BVQYZBNBUwpfrWvQY6pgGF3xhn2z7Lca2vyXCWr140Qgh6YNogTdn5Lm49i5rngAWee9g0n5xG%2Bzp6LmLwutvjtFcv6Gyjqv%2FhnHTNMY94Q4bze8ghplPyM0ZhyK6kRMFxYWiuJAvuDhYyNUF7tItkg%2FeiBccME1LZFa2AbzU0lYE8Q3IvM1kzSMIPyN9fSrePkOtv%2FL68KjC4awS30tv0Ilqg2yUlz2XJ9doM9tDlfjBxT1n%2F&X-Amz-Signature=6340518028cec83930fe56b15a48d3250436083afc6c22999b9713359f505a30&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3H5P45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID%2F%2B%2BM5gfRaTw66Fm4MerlmfLw%2B71gU3H8uUiTlbcyI1AiA2GIilorw4fUMi6IlP8hEcMpSvXQN16%2FEBCph6MjvygiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkaiwkKS5YEadRz8eKtwDC%2F8ytJqGzhPLYifY1aodfOkFS0%2FtrXnOdH2lhXBl4LUrHkbUHDV81r0ttWdJotfKlwu%2FMUGYNfYV46fEY4MeITOKjRHJseEkR49ekA3nqcrBjVx5U5oZp6RmFahJz8Lm5O4Ea90dYBMUzDnTNWbygw0g3n%2BCWLcwc%2F6WvQF79egoGauhLnUSkYugf7dheAPN0HmUWiHqgRR2oeCJUgOlaTLrdwk2mAQ6SJs1SHuSLNFTEtf5mWcXafwQY69AIOIZEIkhhgDC7dl%2BSZJsC7AHYEip3xtw1fY4kJF80R9SVqTlOjhnp7KTNGPSuduuq3sdr3zP%2Fh5BSR5%2FV%2BtXfUUheeEYkUEhAJrgEng1DzPrcz2xfI7fFUdiWn4b9TqYtX%2BvW2iJiRPYbsRy23Rw6vI24vWlNtUrg387y771urzPIdYSS6v0sHQnHQojVRHZ8YvGJ2QR8h7IQ2NOFBTHewvk8WMFsw0JRQx4Brm0A74sv7lK4QsRQa%2FNiMD8MGGUJm94zADOF%2FuSTttiqHzGOGjO7bhb3NfsgEGDGbRyHQBFzR58U9EeyJUsUxsOKXuEST46a5lKoR6m0dwkEh7Y2SlFba%2BvGR1rzDCw5%2BIvH2iRJWO7mbgpbe%2BVQYZBNBUwpfrWvQY6pgGF3xhn2z7Lca2vyXCWr140Qgh6YNogTdn5Lm49i5rngAWee9g0n5xG%2Bzp6LmLwutvjtFcv6Gyjqv%2FhnHTNMY94Q4bze8ghplPyM0ZhyK6kRMFxYWiuJAvuDhYyNUF7tItkg%2FeiBccME1LZFa2AbzU0lYE8Q3IvM1kzSMIPyN9fSrePkOtv%2FL68KjC4awS30tv0Ilqg2yUlz2XJ9doM9tDlfjBxT1n%2F&X-Amz-Signature=fbd8540a795e1ecd05ef067e39c04d0120184a1963020156bd47baf7cde9e523&X-Amz-SignedHeaders=host&x-id=GetObject)



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


