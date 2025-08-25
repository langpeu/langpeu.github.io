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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZC3SAB%2F20250825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250825T141743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDNhY4sPtsceDZ23tGoYw2H5%2Bo0vtVHFyH%2BJrbAJiHtIQIhAMW7dAjMT8n09YjhwLscwp7%2BgvPBkdysGoH223uN7b%2FoKv8DCF8QABoMNjM3NDIzMTgzODA1IgyizvXd5NrUbeej6%2F8q3AMmUtu2VWuprhZcPAZ%2B95J6%2BzINjLSkexchIcm7KCHaM9o5gLUyBWDaZgXYzqVpOYzxeo1RS1xMZcD%2Fn7j6VxpHQ9gZpkBa1vK43XlNe1K1dYWUeFvhwKqgFPIebJGFP0Jx5iQGAsVMnXhTY5HeUSYkCPtJfWmyEVmdBxuX0tVhM0zRS4czFzdPC%2F9mRbvcWYe07MHhFvXDgHTywMSISgoadPleELwAg27WbEyvKFyE7o4wT97Hhvn87RF4gkDZaG456XvdRrzuyO7NvPPy4QPHg%2BciEnMqtd6z60YhOtRe7QS4NjSutVh9noA34BEw6orPexuVztg95OIqCFxkuvHCj41NxNh4AwHuyq1ufHpdM5YDsxPIJpQ8hd%2Fib%2BIFm3AQbGTbJ4ebhektezBxCaA1BNcFabLx4d3cac77DqUEn69JCm5j%2BmzckU9rIBg79J0I4viTsJpkvtSvp3K%2Fx%2FMG%2B8VGa3qKGsl5xOiXdviTYQ8Lw6HobdUWUNG7debZpE%2Fyxp%2FHNJwqZv03smteO1jnW%2FHRQ2u6bYrlQfa4E7uc9wP%2FP8XTQ0Mm2kORE8vlEX3P5BojkJz09L8b0SVjpsNQQWlM%2FjmvITvJl1HozR%2FwhSmTPIjRqRhgocSfRDDN2rHFBjqkAdpK5R9lsq63ggtoXn%2BjCsCKvrlyytUP1HmYo6R8%2BkmwQPmjGjTaq6o3wNMDdFPoXzdJJoAoG1agth82P%2BZ71Sv2iIHihNEWlYQRSVP4lDqSaNw8YVX9FP1HtHe0BcgA%2BBuDkCjOorgf90FN2etepSsFk6z2PvbDvIvfNNT24lJYyG3Cq3nkEv6wWPF9foqF%2FEaPLNb0xRtlMjS%2BBCpwGaaY5XCf&X-Amz-Signature=8ba963f71265d98140213aab66445aa01478841ed37f437489d697aa8d6d4199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZC3SAB%2F20250825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250825T141743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDNhY4sPtsceDZ23tGoYw2H5%2Bo0vtVHFyH%2BJrbAJiHtIQIhAMW7dAjMT8n09YjhwLscwp7%2BgvPBkdysGoH223uN7b%2FoKv8DCF8QABoMNjM3NDIzMTgzODA1IgyizvXd5NrUbeej6%2F8q3AMmUtu2VWuprhZcPAZ%2B95J6%2BzINjLSkexchIcm7KCHaM9o5gLUyBWDaZgXYzqVpOYzxeo1RS1xMZcD%2Fn7j6VxpHQ9gZpkBa1vK43XlNe1K1dYWUeFvhwKqgFPIebJGFP0Jx5iQGAsVMnXhTY5HeUSYkCPtJfWmyEVmdBxuX0tVhM0zRS4czFzdPC%2F9mRbvcWYe07MHhFvXDgHTywMSISgoadPleELwAg27WbEyvKFyE7o4wT97Hhvn87RF4gkDZaG456XvdRrzuyO7NvPPy4QPHg%2BciEnMqtd6z60YhOtRe7QS4NjSutVh9noA34BEw6orPexuVztg95OIqCFxkuvHCj41NxNh4AwHuyq1ufHpdM5YDsxPIJpQ8hd%2Fib%2BIFm3AQbGTbJ4ebhektezBxCaA1BNcFabLx4d3cac77DqUEn69JCm5j%2BmzckU9rIBg79J0I4viTsJpkvtSvp3K%2Fx%2FMG%2B8VGa3qKGsl5xOiXdviTYQ8Lw6HobdUWUNG7debZpE%2Fyxp%2FHNJwqZv03smteO1jnW%2FHRQ2u6bYrlQfa4E7uc9wP%2FP8XTQ0Mm2kORE8vlEX3P5BojkJz09L8b0SVjpsNQQWlM%2FjmvITvJl1HozR%2FwhSmTPIjRqRhgocSfRDDN2rHFBjqkAdpK5R9lsq63ggtoXn%2BjCsCKvrlyytUP1HmYo6R8%2BkmwQPmjGjTaq6o3wNMDdFPoXzdJJoAoG1agth82P%2BZ71Sv2iIHihNEWlYQRSVP4lDqSaNw8YVX9FP1HtHe0BcgA%2BBuDkCjOorgf90FN2etepSsFk6z2PvbDvIvfNNT24lJYyG3Cq3nkEv6wWPF9foqF%2FEaPLNb0xRtlMjS%2BBCpwGaaY5XCf&X-Amz-Signature=05e8334dac6dd5cd0f300623f148e2410e8a64287f12cfb1a977cb5626781fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZC3SAB%2F20250825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250825T141743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDNhY4sPtsceDZ23tGoYw2H5%2Bo0vtVHFyH%2BJrbAJiHtIQIhAMW7dAjMT8n09YjhwLscwp7%2BgvPBkdysGoH223uN7b%2FoKv8DCF8QABoMNjM3NDIzMTgzODA1IgyizvXd5NrUbeej6%2F8q3AMmUtu2VWuprhZcPAZ%2B95J6%2BzINjLSkexchIcm7KCHaM9o5gLUyBWDaZgXYzqVpOYzxeo1RS1xMZcD%2Fn7j6VxpHQ9gZpkBa1vK43XlNe1K1dYWUeFvhwKqgFPIebJGFP0Jx5iQGAsVMnXhTY5HeUSYkCPtJfWmyEVmdBxuX0tVhM0zRS4czFzdPC%2F9mRbvcWYe07MHhFvXDgHTywMSISgoadPleELwAg27WbEyvKFyE7o4wT97Hhvn87RF4gkDZaG456XvdRrzuyO7NvPPy4QPHg%2BciEnMqtd6z60YhOtRe7QS4NjSutVh9noA34BEw6orPexuVztg95OIqCFxkuvHCj41NxNh4AwHuyq1ufHpdM5YDsxPIJpQ8hd%2Fib%2BIFm3AQbGTbJ4ebhektezBxCaA1BNcFabLx4d3cac77DqUEn69JCm5j%2BmzckU9rIBg79J0I4viTsJpkvtSvp3K%2Fx%2FMG%2B8VGa3qKGsl5xOiXdviTYQ8Lw6HobdUWUNG7debZpE%2Fyxp%2FHNJwqZv03smteO1jnW%2FHRQ2u6bYrlQfa4E7uc9wP%2FP8XTQ0Mm2kORE8vlEX3P5BojkJz09L8b0SVjpsNQQWlM%2FjmvITvJl1HozR%2FwhSmTPIjRqRhgocSfRDDN2rHFBjqkAdpK5R9lsq63ggtoXn%2BjCsCKvrlyytUP1HmYo6R8%2BkmwQPmjGjTaq6o3wNMDdFPoXzdJJoAoG1agth82P%2BZ71Sv2iIHihNEWlYQRSVP4lDqSaNw8YVX9FP1HtHe0BcgA%2BBuDkCjOorgf90FN2etepSsFk6z2PvbDvIvfNNT24lJYyG3Cq3nkEv6wWPF9foqF%2FEaPLNb0xRtlMjS%2BBCpwGaaY5XCf&X-Amz-Signature=ad85a680eba517649864f9f2ce118252216752baceb77a5bddbf9c644f48fcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


