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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAPI2KM%2F20250824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250824T111935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQd6%2BoD0pUQTecuDAtXl9tVo6PfyU2OQgTrt2dSeHGaAiEAiaQmYmRnqxMb9VYBGTvrvIIqNXUKGeRjHQcfMxqKvSUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDB3aGg1JdqZKCz%2BfBCrcA1b4w%2BZ4tSkPKSd73DDbeEwgrq6hQ2JD0j%2BHgSk9LwfGKrRF7%2FKRorv81EpnVtN7rzmAXhvNZ4dxE5U6l4i03GLAmnwVDl5EEtYRwjPFSCN9Gr7ow12p28RFMNV4TeczdXxKYuQueXqg3wnEMGFLNVqkrJGcLERT9KO8U676qMzZzsk7KLyEq3ueR%2BWj9G%2F1XM%2BNxwRAd8aGmYy7Vm0vDYd3ERhaSwFV1%2FwEH936eXCh2L%2BbKfYTOIxuCfuEm%2FtJf%2BWNpYy09vAin7cGnprrOR4nEuWiWuo%2BU11mKsJruBJksaxq1A6C74Vhh2dG4aH0r8ZVYLrgpyr7rj%2BxU0USOIH2MkUJBj6b4q8LZJsqOKIoRedmenj4n90i46ddhKMdzDAxJYAZA%2BlnuFEpgtvxNExrWBT3rQfW3H0NRacUZT78HRB%2BNbh24uC%2F0J%2FPmpzUTucN2B20gereK12ni7Fe%2B9ZNBCtaOf9My3yUhOmyCcEyIqruoD4rp%2BJ8EQekAd%2BKNkJ50xGfuYR9HAhnRxNAwU0MSdX%2FDl2PHbvYI56hR%2FXu7eYYLlBkOfBm0g8hJegWbW5hWvKU6OWWboByfPjy%2Bpvxf35OMpAyzRnum1lqjEtl6w1TuBgD5%2BMRZOfdMKi6q8UGOqUBX0VXR88z8aVsL0CUXHEGZO%2BcPYSQJDRCPD9He9eHw%2BannLLHFKA8e8sW%2Bmnc3KT%2BXCnBMpnnh32eeMl1o83wrwscSzqh8mikNszgBwvOciER%2B6PDS7nJJR6ejGw61XeqCPGkueed2F5%2BwAYaUz81nxipXAqp25d19O%2FQBND4WAphfuqd2HN9xl4QyiCenQVKy54ItmH9JYsGYOw%2FVySOw92%2Fbqao&X-Amz-Signature=078147ce530e13499684f4273bd533c5c79407b1818a39a7cff34cae81497506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAPI2KM%2F20250824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250824T111935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQd6%2BoD0pUQTecuDAtXl9tVo6PfyU2OQgTrt2dSeHGaAiEAiaQmYmRnqxMb9VYBGTvrvIIqNXUKGeRjHQcfMxqKvSUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDB3aGg1JdqZKCz%2BfBCrcA1b4w%2BZ4tSkPKSd73DDbeEwgrq6hQ2JD0j%2BHgSk9LwfGKrRF7%2FKRorv81EpnVtN7rzmAXhvNZ4dxE5U6l4i03GLAmnwVDl5EEtYRwjPFSCN9Gr7ow12p28RFMNV4TeczdXxKYuQueXqg3wnEMGFLNVqkrJGcLERT9KO8U676qMzZzsk7KLyEq3ueR%2BWj9G%2F1XM%2BNxwRAd8aGmYy7Vm0vDYd3ERhaSwFV1%2FwEH936eXCh2L%2BbKfYTOIxuCfuEm%2FtJf%2BWNpYy09vAin7cGnprrOR4nEuWiWuo%2BU11mKsJruBJksaxq1A6C74Vhh2dG4aH0r8ZVYLrgpyr7rj%2BxU0USOIH2MkUJBj6b4q8LZJsqOKIoRedmenj4n90i46ddhKMdzDAxJYAZA%2BlnuFEpgtvxNExrWBT3rQfW3H0NRacUZT78HRB%2BNbh24uC%2F0J%2FPmpzUTucN2B20gereK12ni7Fe%2B9ZNBCtaOf9My3yUhOmyCcEyIqruoD4rp%2BJ8EQekAd%2BKNkJ50xGfuYR9HAhnRxNAwU0MSdX%2FDl2PHbvYI56hR%2FXu7eYYLlBkOfBm0g8hJegWbW5hWvKU6OWWboByfPjy%2Bpvxf35OMpAyzRnum1lqjEtl6w1TuBgD5%2BMRZOfdMKi6q8UGOqUBX0VXR88z8aVsL0CUXHEGZO%2BcPYSQJDRCPD9He9eHw%2BannLLHFKA8e8sW%2Bmnc3KT%2BXCnBMpnnh32eeMl1o83wrwscSzqh8mikNszgBwvOciER%2B6PDS7nJJR6ejGw61XeqCPGkueed2F5%2BwAYaUz81nxipXAqp25d19O%2FQBND4WAphfuqd2HN9xl4QyiCenQVKy54ItmH9JYsGYOw%2FVySOw92%2Fbqao&X-Amz-Signature=6a2664bff421a80419d455626c7cebe5889e7539139b89bf4992d2d28ecc1a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAPI2KM%2F20250824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250824T111935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQd6%2BoD0pUQTecuDAtXl9tVo6PfyU2OQgTrt2dSeHGaAiEAiaQmYmRnqxMb9VYBGTvrvIIqNXUKGeRjHQcfMxqKvSUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDB3aGg1JdqZKCz%2BfBCrcA1b4w%2BZ4tSkPKSd73DDbeEwgrq6hQ2JD0j%2BHgSk9LwfGKrRF7%2FKRorv81EpnVtN7rzmAXhvNZ4dxE5U6l4i03GLAmnwVDl5EEtYRwjPFSCN9Gr7ow12p28RFMNV4TeczdXxKYuQueXqg3wnEMGFLNVqkrJGcLERT9KO8U676qMzZzsk7KLyEq3ueR%2BWj9G%2F1XM%2BNxwRAd8aGmYy7Vm0vDYd3ERhaSwFV1%2FwEH936eXCh2L%2BbKfYTOIxuCfuEm%2FtJf%2BWNpYy09vAin7cGnprrOR4nEuWiWuo%2BU11mKsJruBJksaxq1A6C74Vhh2dG4aH0r8ZVYLrgpyr7rj%2BxU0USOIH2MkUJBj6b4q8LZJsqOKIoRedmenj4n90i46ddhKMdzDAxJYAZA%2BlnuFEpgtvxNExrWBT3rQfW3H0NRacUZT78HRB%2BNbh24uC%2F0J%2FPmpzUTucN2B20gereK12ni7Fe%2B9ZNBCtaOf9My3yUhOmyCcEyIqruoD4rp%2BJ8EQekAd%2BKNkJ50xGfuYR9HAhnRxNAwU0MSdX%2FDl2PHbvYI56hR%2FXu7eYYLlBkOfBm0g8hJegWbW5hWvKU6OWWboByfPjy%2Bpvxf35OMpAyzRnum1lqjEtl6w1TuBgD5%2BMRZOfdMKi6q8UGOqUBX0VXR88z8aVsL0CUXHEGZO%2BcPYSQJDRCPD9He9eHw%2BannLLHFKA8e8sW%2Bmnc3KT%2BXCnBMpnnh32eeMl1o83wrwscSzqh8mikNszgBwvOciER%2B6PDS7nJJR6ejGw61XeqCPGkueed2F5%2BwAYaUz81nxipXAqp25d19O%2FQBND4WAphfuqd2HN9xl4QyiCenQVKy54ItmH9JYsGYOw%2FVySOw92%2Fbqao&X-Amz-Signature=605f18a4834ab030b2561308262e9b8842965b613829efe67efba50dfd59f99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


