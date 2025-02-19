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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHG46UC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDjqd8aOoUy4JkOqOyQ%2FY3gROaVju01mMvPr2GozVUgaAIgWAAgtcGh9ZHQy7mY%2Bgg6ruMOugwzzvPfByG75Cb4LmYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcfyPljC6HaRjw8bircA75gB3nMxMHpsYFOJeI6xPdFJHvvoCz3nbT6VblGXcpE4SXmeqCwd2KJNLrSOfDpBnv4bnQmwcBkpyvGniBwM7vdmoD0HTuCj3iBd3g0KQMdiVymlTuYfqTISnhD2Mx%2FwsqHyW8AFBpT6q1hNyDcahQyZpErX4XjoEM%2Bwxy%2BtKQarbTZGfF5pI26YWO4f5I1uAwgFFEM6%2B08KweFhKEVe7ImCbbnvkV4lmDGPOlmk0%2BOesqcOTHt5g%2FAP4yETtPNpeydqk35BtNdWIHUaHQ5vj2EeLlqCC%2BMk8ZkENrcKCdlKlLqtXs86ClIuxT5asp6XVNt57G0JweNdDCVWlXGjqZmpkiOkEDRda3EdE3riNNdxvrtebimM3TMNJ5KI1PP6IZZ9KGgE%2BChiAToquak%2F4kV%2Bpz4xkK%2BG1%2F8NGAMIxo1aHg4fpmGaPlc1TqVNSbiRu4KGxtvi4YKGEQVHjPvMJbXJf9Gc998a94ncWnTxNqlrhXqwzUCryD7qbmjbCccptEEE8x0GyVLhQAJQYd%2Fzt2lNRpnTxij3%2BTjdFA234y1IKwxlvXrBba%2BjSZXLiVn7ZXj7HJ57qk3Jqzh6WfjeNcgN3NBiLtnSvXaxFaLdUPpll6hXCIG5nuKo4RdMPr51r0GOqUBHhH8JaHQOwHXzLAYilxayIO7l%2Fht%2FlQvgVnLWNvURo9jYgyryRwaDQCdIQeHsILhkEywhfhbC0Q%2FvuGo8ZqkaMwR7i0IgS17eiTldQwumV9hy7I7fg%2F8riB5GO7HZe1s4nS0z0APFrwn%2BNxNZM2YBFJ83Rae3BFw4tQsgtk70tlf6qrxAFW%2FhkiRxhk1IyaImSv%2FMYfyaDgZPmy5gvQQf%2FIMs%2FOg&X-Amz-Signature=d8d6ad9021b02e3ea8eefd014e9b65e0e57a4c4e49c2976ed56d9043b601e9dc&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHG46UC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDjqd8aOoUy4JkOqOyQ%2FY3gROaVju01mMvPr2GozVUgaAIgWAAgtcGh9ZHQy7mY%2Bgg6ruMOugwzzvPfByG75Cb4LmYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcfyPljC6HaRjw8bircA75gB3nMxMHpsYFOJeI6xPdFJHvvoCz3nbT6VblGXcpE4SXmeqCwd2KJNLrSOfDpBnv4bnQmwcBkpyvGniBwM7vdmoD0HTuCj3iBd3g0KQMdiVymlTuYfqTISnhD2Mx%2FwsqHyW8AFBpT6q1hNyDcahQyZpErX4XjoEM%2Bwxy%2BtKQarbTZGfF5pI26YWO4f5I1uAwgFFEM6%2B08KweFhKEVe7ImCbbnvkV4lmDGPOlmk0%2BOesqcOTHt5g%2FAP4yETtPNpeydqk35BtNdWIHUaHQ5vj2EeLlqCC%2BMk8ZkENrcKCdlKlLqtXs86ClIuxT5asp6XVNt57G0JweNdDCVWlXGjqZmpkiOkEDRda3EdE3riNNdxvrtebimM3TMNJ5KI1PP6IZZ9KGgE%2BChiAToquak%2F4kV%2Bpz4xkK%2BG1%2F8NGAMIxo1aHg4fpmGaPlc1TqVNSbiRu4KGxtvi4YKGEQVHjPvMJbXJf9Gc998a94ncWnTxNqlrhXqwzUCryD7qbmjbCccptEEE8x0GyVLhQAJQYd%2Fzt2lNRpnTxij3%2BTjdFA234y1IKwxlvXrBba%2BjSZXLiVn7ZXj7HJ57qk3Jqzh6WfjeNcgN3NBiLtnSvXaxFaLdUPpll6hXCIG5nuKo4RdMPr51r0GOqUBHhH8JaHQOwHXzLAYilxayIO7l%2Fht%2FlQvgVnLWNvURo9jYgyryRwaDQCdIQeHsILhkEywhfhbC0Q%2FvuGo8ZqkaMwR7i0IgS17eiTldQwumV9hy7I7fg%2F8riB5GO7HZe1s4nS0z0APFrwn%2BNxNZM2YBFJ83Rae3BFw4tQsgtk70tlf6qrxAFW%2FhkiRxhk1IyaImSv%2FMYfyaDgZPmy5gvQQf%2FIMs%2FOg&X-Amz-Signature=b8ab8279e457ee745387e86448797a74a787b057ed6cc6ff6ebb8fcb67a403d7&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHG46UC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDjqd8aOoUy4JkOqOyQ%2FY3gROaVju01mMvPr2GozVUgaAIgWAAgtcGh9ZHQy7mY%2Bgg6ruMOugwzzvPfByG75Cb4LmYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcfyPljC6HaRjw8bircA75gB3nMxMHpsYFOJeI6xPdFJHvvoCz3nbT6VblGXcpE4SXmeqCwd2KJNLrSOfDpBnv4bnQmwcBkpyvGniBwM7vdmoD0HTuCj3iBd3g0KQMdiVymlTuYfqTISnhD2Mx%2FwsqHyW8AFBpT6q1hNyDcahQyZpErX4XjoEM%2Bwxy%2BtKQarbTZGfF5pI26YWO4f5I1uAwgFFEM6%2B08KweFhKEVe7ImCbbnvkV4lmDGPOlmk0%2BOesqcOTHt5g%2FAP4yETtPNpeydqk35BtNdWIHUaHQ5vj2EeLlqCC%2BMk8ZkENrcKCdlKlLqtXs86ClIuxT5asp6XVNt57G0JweNdDCVWlXGjqZmpkiOkEDRda3EdE3riNNdxvrtebimM3TMNJ5KI1PP6IZZ9KGgE%2BChiAToquak%2F4kV%2Bpz4xkK%2BG1%2F8NGAMIxo1aHg4fpmGaPlc1TqVNSbiRu4KGxtvi4YKGEQVHjPvMJbXJf9Gc998a94ncWnTxNqlrhXqwzUCryD7qbmjbCccptEEE8x0GyVLhQAJQYd%2Fzt2lNRpnTxij3%2BTjdFA234y1IKwxlvXrBba%2BjSZXLiVn7ZXj7HJ57qk3Jqzh6WfjeNcgN3NBiLtnSvXaxFaLdUPpll6hXCIG5nuKo4RdMPr51r0GOqUBHhH8JaHQOwHXzLAYilxayIO7l%2Fht%2FlQvgVnLWNvURo9jYgyryRwaDQCdIQeHsILhkEywhfhbC0Q%2FvuGo8ZqkaMwR7i0IgS17eiTldQwumV9hy7I7fg%2F8riB5GO7HZe1s4nS0z0APFrwn%2BNxNZM2YBFJ83Rae3BFw4tQsgtk70tlf6qrxAFW%2FhkiRxhk1IyaImSv%2FMYfyaDgZPmy5gvQQf%2FIMs%2FOg&X-Amz-Signature=68ebee06297fe8332878d903195bb8a147c4cd9ba5cb22e9564f3d1669db2413&X-Amz-SignedHeaders=host&x-id=GetObject)



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


