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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDICDSSQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC6DRUMJcYpOmu7XtbzSz5Ft0OTesvfU3UV0eWXGS8QfAIhAIU6Nyn1btxtRE%2F8eWlpARYLyI7uWGDohWYJcYd92ivrKv8DCGwQABoMNjM3NDIzMTgzODA1Igyw2NYalLd%2FrWAvPv4q3APxXDtEXXRzMCodNdppD6Y4gQRp5mQerws3b3vPzfdIWjxc33f0Q8OxImBlakeIDzzW79%2FNYtsGrYKd5h2fyYi9JlCz4BEeMDNZZglCc1ADsUV0nhoaQ%2FndH7idOK2IYw8V71L655tBMYOEb9SI%2BQVOVIIn5OsL9g8cqq4f2NOxfM7UlVY6H06pyLNUviSKXHlxNVeZaiiMQNV7u9LTzwimlIyJgdQyZ8Kvuw%2BEUVipIEWi4KCY763qu85SnZNKaD5lCxe%2FN0uzZne26lFxTbABZbgZA2YyjWVE1xTyxY3VO8X4kK8QpUtq3icgP5DEWx86f7dAq9Yt0bWwXIzmL%2FSgLsHsnuDTMY5L7Kay1uIlTqUaVWDwqUwL1IzTKuQ4RamlcMe0NTeV1R2ty4UbGaUEb31vR%2B7KSWWYwa5HrdNwnPvIU1r6j%2BxTvd4DX8i%2Fi%2BcJYH8hTVxb9yT9%2BW4qVLQIAOcdT1B%2ByfjUdPAw0f3VQdVwFAfuoCMqcramA6NIXSl6bjClsFTEHnhJevlgjItQvle75EA6d6m%2FsUB%2F2fz6uveiEjexoEJ%2FV6YKxURzUH3Wnuo3rRNUKYCnPWgzkWNnXYKo3qUSIcpC3e7hcG4DKZIWjQh%2FERSf%2BPa1EjCL7%2F%2FEBjqkAe9UW%2BtzrzkAcE%2BV59qrQme7w3RDTFgFmxnHk8C9EP3OO4gM8G0Pn8C1b4o0oS3HbSs2dwEB5pniqAWs7qD955U9DuvQgqJ%2BWZdlqe63efB4hVVLOISzXmhyk8Lz7IdQuAcwJIghW6oFdaAI%2FisNEIp2qYohZtEownNO4WCpnwzZs48T2QCgZGf%2FlvFGGKcc0%2F7yUFwivthL%2BbyIDU9ToGNOrnrn&X-Amz-Signature=4349b0b3235744412b64a829b7196c37c513e5d7071ddfa50d3bcdd4e5c16dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDICDSSQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC6DRUMJcYpOmu7XtbzSz5Ft0OTesvfU3UV0eWXGS8QfAIhAIU6Nyn1btxtRE%2F8eWlpARYLyI7uWGDohWYJcYd92ivrKv8DCGwQABoMNjM3NDIzMTgzODA1Igyw2NYalLd%2FrWAvPv4q3APxXDtEXXRzMCodNdppD6Y4gQRp5mQerws3b3vPzfdIWjxc33f0Q8OxImBlakeIDzzW79%2FNYtsGrYKd5h2fyYi9JlCz4BEeMDNZZglCc1ADsUV0nhoaQ%2FndH7idOK2IYw8V71L655tBMYOEb9SI%2BQVOVIIn5OsL9g8cqq4f2NOxfM7UlVY6H06pyLNUviSKXHlxNVeZaiiMQNV7u9LTzwimlIyJgdQyZ8Kvuw%2BEUVipIEWi4KCY763qu85SnZNKaD5lCxe%2FN0uzZne26lFxTbABZbgZA2YyjWVE1xTyxY3VO8X4kK8QpUtq3icgP5DEWx86f7dAq9Yt0bWwXIzmL%2FSgLsHsnuDTMY5L7Kay1uIlTqUaVWDwqUwL1IzTKuQ4RamlcMe0NTeV1R2ty4UbGaUEb31vR%2B7KSWWYwa5HrdNwnPvIU1r6j%2BxTvd4DX8i%2Fi%2BcJYH8hTVxb9yT9%2BW4qVLQIAOcdT1B%2ByfjUdPAw0f3VQdVwFAfuoCMqcramA6NIXSl6bjClsFTEHnhJevlgjItQvle75EA6d6m%2FsUB%2F2fz6uveiEjexoEJ%2FV6YKxURzUH3Wnuo3rRNUKYCnPWgzkWNnXYKo3qUSIcpC3e7hcG4DKZIWjQh%2FERSf%2BPa1EjCL7%2F%2FEBjqkAe9UW%2BtzrzkAcE%2BV59qrQme7w3RDTFgFmxnHk8C9EP3OO4gM8G0Pn8C1b4o0oS3HbSs2dwEB5pniqAWs7qD955U9DuvQgqJ%2BWZdlqe63efB4hVVLOISzXmhyk8Lz7IdQuAcwJIghW6oFdaAI%2FisNEIp2qYohZtEownNO4WCpnwzZs48T2QCgZGf%2FlvFGGKcc0%2F7yUFwivthL%2BbyIDU9ToGNOrnrn&X-Amz-Signature=1df165367e2951787ae51bbbfee18391173fba7775b4147dd88e12b0649a9277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDICDSSQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC6DRUMJcYpOmu7XtbzSz5Ft0OTesvfU3UV0eWXGS8QfAIhAIU6Nyn1btxtRE%2F8eWlpARYLyI7uWGDohWYJcYd92ivrKv8DCGwQABoMNjM3NDIzMTgzODA1Igyw2NYalLd%2FrWAvPv4q3APxXDtEXXRzMCodNdppD6Y4gQRp5mQerws3b3vPzfdIWjxc33f0Q8OxImBlakeIDzzW79%2FNYtsGrYKd5h2fyYi9JlCz4BEeMDNZZglCc1ADsUV0nhoaQ%2FndH7idOK2IYw8V71L655tBMYOEb9SI%2BQVOVIIn5OsL9g8cqq4f2NOxfM7UlVY6H06pyLNUviSKXHlxNVeZaiiMQNV7u9LTzwimlIyJgdQyZ8Kvuw%2BEUVipIEWi4KCY763qu85SnZNKaD5lCxe%2FN0uzZne26lFxTbABZbgZA2YyjWVE1xTyxY3VO8X4kK8QpUtq3icgP5DEWx86f7dAq9Yt0bWwXIzmL%2FSgLsHsnuDTMY5L7Kay1uIlTqUaVWDwqUwL1IzTKuQ4RamlcMe0NTeV1R2ty4UbGaUEb31vR%2B7KSWWYwa5HrdNwnPvIU1r6j%2BxTvd4DX8i%2Fi%2BcJYH8hTVxb9yT9%2BW4qVLQIAOcdT1B%2ByfjUdPAw0f3VQdVwFAfuoCMqcramA6NIXSl6bjClsFTEHnhJevlgjItQvle75EA6d6m%2FsUB%2F2fz6uveiEjexoEJ%2FV6YKxURzUH3Wnuo3rRNUKYCnPWgzkWNnXYKo3qUSIcpC3e7hcG4DKZIWjQh%2FERSf%2BPa1EjCL7%2F%2FEBjqkAe9UW%2BtzrzkAcE%2BV59qrQme7w3RDTFgFmxnHk8C9EP3OO4gM8G0Pn8C1b4o0oS3HbSs2dwEB5pniqAWs7qD955U9DuvQgqJ%2BWZdlqe63efB4hVVLOISzXmhyk8Lz7IdQuAcwJIghW6oFdaAI%2FisNEIp2qYohZtEownNO4WCpnwzZs48T2QCgZGf%2FlvFGGKcc0%2F7yUFwivthL%2BbyIDU9ToGNOrnrn&X-Amz-Signature=dbcaa970b75bb59fbaf9b685c92bd97ce30d4191e3d5a5ad05b1f5bfb2590d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


