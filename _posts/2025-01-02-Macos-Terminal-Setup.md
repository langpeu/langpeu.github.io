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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4IZNQV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T014655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWuKXHGY2NJ6lQqjVqNzcN%2F1CVwp3ZdrHqSdHOyuGQCAiEArVWFWIksSysVwhC5K1l0Z0wLLp5rEIxHwY4gSpS1sbMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl6QBkbYCOXWKLiMircAz4OHRHTuR5FqZ3N3St6FpvxxT5aiOuexh8ZPCYW3yvXabzzQxiUUKP5xLx5gKLMptlzF3kJrOG4mqQY0NtLFx3zHl%2B2QCdwiLVYlpF2%2B606gSYCDTy8rsFcdvH3g4qKuy4ty9nhXDMgUKtl2DCTX%2Brp05Fdriy5J5U1zSi1nQy4eFvN2B2mOZXF%2BYjOd1lwe%2BDYbql6tTa7s%2BgxZUrRLZY4c3FLEV%2B0EbF%2BsgZKRv7zf3MDo9R2JHzhUBN9vXq136pSfGoTk2W9IJ5Jg7PGazDr5axceRqI2ZeoTxBeUIKPw4Qt4Rbq4QvkEJh%2BQLN0vVbzGBwyoI8ZsbqR95UpdWh8c3aQiHlSH0x9ZwgDaRo%2FligDR0U9USTY4jq%2FCPpec%2BLCMqExwGlW%2Brh5fArWVSBG7gmVITcLMFKDkJH3mlN9mG0EQozS3fsOQ5B0NoOMVpMr6qW0bLmk%2FCtntQANSscohu%2FjZn8C7jAioeg01j2PP2JlZN3a4OaBdxKbwUvHcnSKsv1vCdoysk9Tk3PYGXF861YihwUheaYQQt49lUhsqrMLHLqy%2B3MEFDs8rsrjxUw7tAyU6KnfFCqS79qO%2FH9ZHQ2SAteQrMmMAz7n9ajLa64eaJEOXJaOiruOMPvyn70GOqUB4Y2zrAhahP3SChm6uidi2EDxqmZ%2FmFWstxP8gQl4PD4ff5IWdaSswVIRQNAUceOZSkJoKxxcji%2B5pK8SrRTs87TiEpyTDLxPMSoheLX1RBKqxyO6qraptw8JixBquozl1wRobbVkuJBXLt6Whd5TVTBZ%2BdbiJ7D%2FM7XLgJd8alpN7oBdzk7LtMsXrzGl1gUgXQjKJohajgjDM0dxp132CZyBQqf8&X-Amz-Signature=21aac66eaa401eb825e2f7592f4eec410ab07e212db8c6ca40ab403819984fd7&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4IZNQV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T014655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWuKXHGY2NJ6lQqjVqNzcN%2F1CVwp3ZdrHqSdHOyuGQCAiEArVWFWIksSysVwhC5K1l0Z0wLLp5rEIxHwY4gSpS1sbMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl6QBkbYCOXWKLiMircAz4OHRHTuR5FqZ3N3St6FpvxxT5aiOuexh8ZPCYW3yvXabzzQxiUUKP5xLx5gKLMptlzF3kJrOG4mqQY0NtLFx3zHl%2B2QCdwiLVYlpF2%2B606gSYCDTy8rsFcdvH3g4qKuy4ty9nhXDMgUKtl2DCTX%2Brp05Fdriy5J5U1zSi1nQy4eFvN2B2mOZXF%2BYjOd1lwe%2BDYbql6tTa7s%2BgxZUrRLZY4c3FLEV%2B0EbF%2BsgZKRv7zf3MDo9R2JHzhUBN9vXq136pSfGoTk2W9IJ5Jg7PGazDr5axceRqI2ZeoTxBeUIKPw4Qt4Rbq4QvkEJh%2BQLN0vVbzGBwyoI8ZsbqR95UpdWh8c3aQiHlSH0x9ZwgDaRo%2FligDR0U9USTY4jq%2FCPpec%2BLCMqExwGlW%2Brh5fArWVSBG7gmVITcLMFKDkJH3mlN9mG0EQozS3fsOQ5B0NoOMVpMr6qW0bLmk%2FCtntQANSscohu%2FjZn8C7jAioeg01j2PP2JlZN3a4OaBdxKbwUvHcnSKsv1vCdoysk9Tk3PYGXF861YihwUheaYQQt49lUhsqrMLHLqy%2B3MEFDs8rsrjxUw7tAyU6KnfFCqS79qO%2FH9ZHQ2SAteQrMmMAz7n9ajLa64eaJEOXJaOiruOMPvyn70GOqUB4Y2zrAhahP3SChm6uidi2EDxqmZ%2FmFWstxP8gQl4PD4ff5IWdaSswVIRQNAUceOZSkJoKxxcji%2B5pK8SrRTs87TiEpyTDLxPMSoheLX1RBKqxyO6qraptw8JixBquozl1wRobbVkuJBXLt6Whd5TVTBZ%2BdbiJ7D%2FM7XLgJd8alpN7oBdzk7LtMsXrzGl1gUgXQjKJohajgjDM0dxp132CZyBQqf8&X-Amz-Signature=4a171976a3aa597ea3eae86d72e97b39e6a0207a00ce4c2d659384f46dda9adf&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4IZNQV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T014655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWuKXHGY2NJ6lQqjVqNzcN%2F1CVwp3ZdrHqSdHOyuGQCAiEArVWFWIksSysVwhC5K1l0Z0wLLp5rEIxHwY4gSpS1sbMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl6QBkbYCOXWKLiMircAz4OHRHTuR5FqZ3N3St6FpvxxT5aiOuexh8ZPCYW3yvXabzzQxiUUKP5xLx5gKLMptlzF3kJrOG4mqQY0NtLFx3zHl%2B2QCdwiLVYlpF2%2B606gSYCDTy8rsFcdvH3g4qKuy4ty9nhXDMgUKtl2DCTX%2Brp05Fdriy5J5U1zSi1nQy4eFvN2B2mOZXF%2BYjOd1lwe%2BDYbql6tTa7s%2BgxZUrRLZY4c3FLEV%2B0EbF%2BsgZKRv7zf3MDo9R2JHzhUBN9vXq136pSfGoTk2W9IJ5Jg7PGazDr5axceRqI2ZeoTxBeUIKPw4Qt4Rbq4QvkEJh%2BQLN0vVbzGBwyoI8ZsbqR95UpdWh8c3aQiHlSH0x9ZwgDaRo%2FligDR0U9USTY4jq%2FCPpec%2BLCMqExwGlW%2Brh5fArWVSBG7gmVITcLMFKDkJH3mlN9mG0EQozS3fsOQ5B0NoOMVpMr6qW0bLmk%2FCtntQANSscohu%2FjZn8C7jAioeg01j2PP2JlZN3a4OaBdxKbwUvHcnSKsv1vCdoysk9Tk3PYGXF861YihwUheaYQQt49lUhsqrMLHLqy%2B3MEFDs8rsrjxUw7tAyU6KnfFCqS79qO%2FH9ZHQ2SAteQrMmMAz7n9ajLa64eaJEOXJaOiruOMPvyn70GOqUB4Y2zrAhahP3SChm6uidi2EDxqmZ%2FmFWstxP8gQl4PD4ff5IWdaSswVIRQNAUceOZSkJoKxxcji%2B5pK8SrRTs87TiEpyTDLxPMSoheLX1RBKqxyO6qraptw8JixBquozl1wRobbVkuJBXLt6Whd5TVTBZ%2BdbiJ7D%2FM7XLgJd8alpN7oBdzk7LtMsXrzGl1gUgXQjKJohajgjDM0dxp132CZyBQqf8&X-Amz-Signature=d2cf4c4c853a2a4b49d95f5f3f2e98ffcfb62b892b13a7a1687cb843c130e41a&X-Amz-SignedHeaders=host&x-id=GetObject)



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


