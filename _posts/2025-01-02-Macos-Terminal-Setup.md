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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2SVHAU%2F20250929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250929T151244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDN2%2BIMwmYLSCPPAYtUFUv2%2BmW0Wg1iveVASInhaceteQIgcZ5IM1yim0FECpLK4Wd8HVUJdmabc0VsxCLsM4bJ4wUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvR2Nntqo7QYgKQsSrcAz4gIU7qZEwtdnIzVFUBOzqlwNUhSrJSeqwmH5YhQn9%2FlnhqPZGPIUt0nooqcz%2FBohXU4aWrAsRngb%2BYVIL62IJPp1DwQQWT0MEESY34fiNlWIlfgfZrlg0%2B2LkwKNEFmTWGq6BBTNMr4C2WZhsRmMYzCuMICKyucoH%2Fwh1%2BzhqIMSZD9ouJFd4qlebmMfU1oCjBgfcee%2B7Nyw0lVtk1If62HRZvrQYTUeTUrmDF6CYc%2FkmNS0mJmo1AdWBhSJRb%2BvhGmb3%2BAGp%2BVE8Qh%2BoWfyeTYYkJckpcT%2Fm8ey0wpACamAHcpyzez5x0nLWw3sJhqPBOVC49E78Hn4j%2FgasKmitVqa1DxawjjxJG9UhEuFBdDsLWzTTnrpiLEdByzOht54C2cpqGq5U0IvqxB09GsD8HdCtJHi9bX6dB5tHiTkVnDqDe8N%2BbPKHK8nnnf8uFTnHSyy3dSKYyNgW%2B%2FLeDgtrxZEPQHV72EP%2BNzJkUoRptYhuwsplqDHBN9kOdl4cVM7n4FGKxK1FWSi01NQ5yIemnq4PCndmYyNHTRtje1zUqEppfUjM1NjFeuD4%2BjzEsVuBSs5b8fKnNYcR%2BLxVKJrVYr2UzDrjE%2B8eCdLS9mCTPRs8ddB27PsVhuZyDMPGy6sYGOqUBZNANrBzHZix4Yy%2BvwRjT%2Fmh28pOpF1QPg8GG6raDndArZPJQm89gN5UOIJldSNhzMjCQpzUxbw%2FjbU8oL%2BmSX10PKYIc5qrI6e8eq59FBFoA4tWH6o7vNzix9zf%2BQ3rmDaeJXHr8kOIbmDC0eI%2Fcnn8X304P13i8bXAlqGDLf%2FkFMrKXMPKC%2FDKeC7Rs3U54qwNn5UU1y75K7e%2BO5mWTPS1I%2BQy5&X-Amz-Signature=0025be7d93e251f3e3543163b9f0c7ae5657f943b90439940f128e095721a39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2SVHAU%2F20250929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250929T151244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDN2%2BIMwmYLSCPPAYtUFUv2%2BmW0Wg1iveVASInhaceteQIgcZ5IM1yim0FECpLK4Wd8HVUJdmabc0VsxCLsM4bJ4wUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvR2Nntqo7QYgKQsSrcAz4gIU7qZEwtdnIzVFUBOzqlwNUhSrJSeqwmH5YhQn9%2FlnhqPZGPIUt0nooqcz%2FBohXU4aWrAsRngb%2BYVIL62IJPp1DwQQWT0MEESY34fiNlWIlfgfZrlg0%2B2LkwKNEFmTWGq6BBTNMr4C2WZhsRmMYzCuMICKyucoH%2Fwh1%2BzhqIMSZD9ouJFd4qlebmMfU1oCjBgfcee%2B7Nyw0lVtk1If62HRZvrQYTUeTUrmDF6CYc%2FkmNS0mJmo1AdWBhSJRb%2BvhGmb3%2BAGp%2BVE8Qh%2BoWfyeTYYkJckpcT%2Fm8ey0wpACamAHcpyzez5x0nLWw3sJhqPBOVC49E78Hn4j%2FgasKmitVqa1DxawjjxJG9UhEuFBdDsLWzTTnrpiLEdByzOht54C2cpqGq5U0IvqxB09GsD8HdCtJHi9bX6dB5tHiTkVnDqDe8N%2BbPKHK8nnnf8uFTnHSyy3dSKYyNgW%2B%2FLeDgtrxZEPQHV72EP%2BNzJkUoRptYhuwsplqDHBN9kOdl4cVM7n4FGKxK1FWSi01NQ5yIemnq4PCndmYyNHTRtje1zUqEppfUjM1NjFeuD4%2BjzEsVuBSs5b8fKnNYcR%2BLxVKJrVYr2UzDrjE%2B8eCdLS9mCTPRs8ddB27PsVhuZyDMPGy6sYGOqUBZNANrBzHZix4Yy%2BvwRjT%2Fmh28pOpF1QPg8GG6raDndArZPJQm89gN5UOIJldSNhzMjCQpzUxbw%2FjbU8oL%2BmSX10PKYIc5qrI6e8eq59FBFoA4tWH6o7vNzix9zf%2BQ3rmDaeJXHr8kOIbmDC0eI%2Fcnn8X304P13i8bXAlqGDLf%2FkFMrKXMPKC%2FDKeC7Rs3U54qwNn5UU1y75K7e%2BO5mWTPS1I%2BQy5&X-Amz-Signature=5374ead8e15fc084c17425b3e647476b0147af503726d292154a3dae35981462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2SVHAU%2F20250929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250929T151244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDN2%2BIMwmYLSCPPAYtUFUv2%2BmW0Wg1iveVASInhaceteQIgcZ5IM1yim0FECpLK4Wd8HVUJdmabc0VsxCLsM4bJ4wUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvR2Nntqo7QYgKQsSrcAz4gIU7qZEwtdnIzVFUBOzqlwNUhSrJSeqwmH5YhQn9%2FlnhqPZGPIUt0nooqcz%2FBohXU4aWrAsRngb%2BYVIL62IJPp1DwQQWT0MEESY34fiNlWIlfgfZrlg0%2B2LkwKNEFmTWGq6BBTNMr4C2WZhsRmMYzCuMICKyucoH%2Fwh1%2BzhqIMSZD9ouJFd4qlebmMfU1oCjBgfcee%2B7Nyw0lVtk1If62HRZvrQYTUeTUrmDF6CYc%2FkmNS0mJmo1AdWBhSJRb%2BvhGmb3%2BAGp%2BVE8Qh%2BoWfyeTYYkJckpcT%2Fm8ey0wpACamAHcpyzez5x0nLWw3sJhqPBOVC49E78Hn4j%2FgasKmitVqa1DxawjjxJG9UhEuFBdDsLWzTTnrpiLEdByzOht54C2cpqGq5U0IvqxB09GsD8HdCtJHi9bX6dB5tHiTkVnDqDe8N%2BbPKHK8nnnf8uFTnHSyy3dSKYyNgW%2B%2FLeDgtrxZEPQHV72EP%2BNzJkUoRptYhuwsplqDHBN9kOdl4cVM7n4FGKxK1FWSi01NQ5yIemnq4PCndmYyNHTRtje1zUqEppfUjM1NjFeuD4%2BjzEsVuBSs5b8fKnNYcR%2BLxVKJrVYr2UzDrjE%2B8eCdLS9mCTPRs8ddB27PsVhuZyDMPGy6sYGOqUBZNANrBzHZix4Yy%2BvwRjT%2Fmh28pOpF1QPg8GG6raDndArZPJQm89gN5UOIJldSNhzMjCQpzUxbw%2FjbU8oL%2BmSX10PKYIc5qrI6e8eq59FBFoA4tWH6o7vNzix9zf%2BQ3rmDaeJXHr8kOIbmDC0eI%2Fcnn8X304P13i8bXAlqGDLf%2FkFMrKXMPKC%2FDKeC7Rs3U54qwNn5UU1y75K7e%2BO5mWTPS1I%2BQy5&X-Amz-Signature=733af94fa802213c0ff14e0f290bc02cc75fd27e806329dc8623ff9e98f43240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


