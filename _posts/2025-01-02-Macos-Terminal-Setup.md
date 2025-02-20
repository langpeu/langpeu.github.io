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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z763XAD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7xps1SvvMLKNsFSzBzPPWfso3SLL2vuzvQijuJ9lhAiABEkVLFAUmijUK9lmzYUJKnmMrHDrvWI6rgwv83CRHBCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhFq8q7wkaBgMhQqKtwDabcHF32bwEYOXiqaJ5Gl6LmiwW5caLrvSefzrWp7RyYOCqx%2FTAZn9CRRisiBuLwJtjZUvvD9WGT1g18dJmhuEburbJKXZ9fVUZ46aaMJSO4Sv%2Bz4L%2Fdx9XOTAA3c8aPLJLvTy2tU%2BZb2unZwYcIYDNd9lZo1WG%2FvwmIwtkNYvv6g5DrC4mJxTOkvdyZutwej8oq4EQNOsMjpM3CFdI%2B7KOlU%2FpwvA2tVe7j8Z65kJ0Nu8JXhbdbjcsd38Hw0Avz2MMqfncMh8o8k59Mgn7cxXfQbt%2B4PTMFCGGPBozQYvFeZH%2Fdz%2FYKTdGIQQC8bzKXg9i8CyNYhwx8KA6Sq%2FhQHDJU94TySL1AjiSrdzP3Xm7dQcAAIwxZ3LLxr1TN%2FPvNeb%2Fy%2FXh%2BuC8bx6dQPY%2FT%2BBJNYsOEobtoDrd3JXEG%2BQJfZ3uPGvH7GtBmBlnmu60Pd649OsMO7ytfuw7yjFJX%2FGTEdCJzGa5l0%2FwZzgUQWDRURHaK67znS3tO8K6%2F4uZ8xmHnIN%2B36uQSrp9RLYJji0L9D3V9us%2Ffr%2BHA9GSQHk47dwN%2FeJURrLnnjnBCGXZBEWQJI2wlSs5eyWrRF1LDawAaclGdQCj4ScycUPgL7LmLFgREEyfT4%2FjDuP%2BowrIXavQY6pgHDAkhySOKKekBKzGy6BAPpSKQ5LvP8YNhGql2fc3GMUW0d4rW7999XQCSdF9rpqBuVo%2FEXBTU7%2FNxsPACDTUWzUk5TxmHRPFagjKSYjBUYocsaK20gY6uOcKu9yDTahE9mCHOs7qYepCIrvYY%2Bn7ckscWbH2YSrOANGv9sotA4T3Zo%2FQO5JlV7kUoA1UqB1FOyGAhUI1yXwP341atiu3pwvz32hJO9&X-Amz-Signature=0ea122c9254d612185588dcc56239cd67187daea144092b9d76978256421bb8b&X-Amz-SignedHeaders=host&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z763XAD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7xps1SvvMLKNsFSzBzPPWfso3SLL2vuzvQijuJ9lhAiABEkVLFAUmijUK9lmzYUJKnmMrHDrvWI6rgwv83CRHBCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhFq8q7wkaBgMhQqKtwDabcHF32bwEYOXiqaJ5Gl6LmiwW5caLrvSefzrWp7RyYOCqx%2FTAZn9CRRisiBuLwJtjZUvvD9WGT1g18dJmhuEburbJKXZ9fVUZ46aaMJSO4Sv%2Bz4L%2Fdx9XOTAA3c8aPLJLvTy2tU%2BZb2unZwYcIYDNd9lZo1WG%2FvwmIwtkNYvv6g5DrC4mJxTOkvdyZutwej8oq4EQNOsMjpM3CFdI%2B7KOlU%2FpwvA2tVe7j8Z65kJ0Nu8JXhbdbjcsd38Hw0Avz2MMqfncMh8o8k59Mgn7cxXfQbt%2B4PTMFCGGPBozQYvFeZH%2Fdz%2FYKTdGIQQC8bzKXg9i8CyNYhwx8KA6Sq%2FhQHDJU94TySL1AjiSrdzP3Xm7dQcAAIwxZ3LLxr1TN%2FPvNeb%2Fy%2FXh%2BuC8bx6dQPY%2FT%2BBJNYsOEobtoDrd3JXEG%2BQJfZ3uPGvH7GtBmBlnmu60Pd649OsMO7ytfuw7yjFJX%2FGTEdCJzGa5l0%2FwZzgUQWDRURHaK67znS3tO8K6%2F4uZ8xmHnIN%2B36uQSrp9RLYJji0L9D3V9us%2Ffr%2BHA9GSQHk47dwN%2FeJURrLnnjnBCGXZBEWQJI2wlSs5eyWrRF1LDawAaclGdQCj4ScycUPgL7LmLFgREEyfT4%2FjDuP%2BowrIXavQY6pgHDAkhySOKKekBKzGy6BAPpSKQ5LvP8YNhGql2fc3GMUW0d4rW7999XQCSdF9rpqBuVo%2FEXBTU7%2FNxsPACDTUWzUk5TxmHRPFagjKSYjBUYocsaK20gY6uOcKu9yDTahE9mCHOs7qYepCIrvYY%2Bn7ckscWbH2YSrOANGv9sotA4T3Zo%2FQO5JlV7kUoA1UqB1FOyGAhUI1yXwP341atiu3pwvz32hJO9&X-Amz-Signature=bfd2e713c64f990c5c4356caf6c16059d8195d782628ce4495f37381326aa377&X-Amz-SignedHeaders=host&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z763XAD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa7xps1SvvMLKNsFSzBzPPWfso3SLL2vuzvQijuJ9lhAiABEkVLFAUmijUK9lmzYUJKnmMrHDrvWI6rgwv83CRHBCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhFq8q7wkaBgMhQqKtwDabcHF32bwEYOXiqaJ5Gl6LmiwW5caLrvSefzrWp7RyYOCqx%2FTAZn9CRRisiBuLwJtjZUvvD9WGT1g18dJmhuEburbJKXZ9fVUZ46aaMJSO4Sv%2Bz4L%2Fdx9XOTAA3c8aPLJLvTy2tU%2BZb2unZwYcIYDNd9lZo1WG%2FvwmIwtkNYvv6g5DrC4mJxTOkvdyZutwej8oq4EQNOsMjpM3CFdI%2B7KOlU%2FpwvA2tVe7j8Z65kJ0Nu8JXhbdbjcsd38Hw0Avz2MMqfncMh8o8k59Mgn7cxXfQbt%2B4PTMFCGGPBozQYvFeZH%2Fdz%2FYKTdGIQQC8bzKXg9i8CyNYhwx8KA6Sq%2FhQHDJU94TySL1AjiSrdzP3Xm7dQcAAIwxZ3LLxr1TN%2FPvNeb%2Fy%2FXh%2BuC8bx6dQPY%2FT%2BBJNYsOEobtoDrd3JXEG%2BQJfZ3uPGvH7GtBmBlnmu60Pd649OsMO7ytfuw7yjFJX%2FGTEdCJzGa5l0%2FwZzgUQWDRURHaK67znS3tO8K6%2F4uZ8xmHnIN%2B36uQSrp9RLYJji0L9D3V9us%2Ffr%2BHA9GSQHk47dwN%2FeJURrLnnjnBCGXZBEWQJI2wlSs5eyWrRF1LDawAaclGdQCj4ScycUPgL7LmLFgREEyfT4%2FjDuP%2BowrIXavQY6pgHDAkhySOKKekBKzGy6BAPpSKQ5LvP8YNhGql2fc3GMUW0d4rW7999XQCSdF9rpqBuVo%2FEXBTU7%2FNxsPACDTUWzUk5TxmHRPFagjKSYjBUYocsaK20gY6uOcKu9yDTahE9mCHOs7qYepCIrvYY%2Bn7ckscWbH2YSrOANGv9sotA4T3Zo%2FQO5JlV7kUoA1UqB1FOyGAhUI1yXwP341atiu3pwvz32hJO9&X-Amz-Signature=cb7199849428ed0e034ae9fce77982e47365b828df933fac4015af080d1ed597&X-Amz-SignedHeaders=host&x-id=GetObject)



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


