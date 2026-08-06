---
layout: post
date: 2025-01-02
title: "Macos Terminal Setup"
tags: [Tips, ]
categories: [Apple, ]
---


![0](/assets/img/2025-01-02-Macos-Terminal-Setup.md/0.png)



## Setup Terminal


```shell

##Install Brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


##Install zsh
brew install zsh

zsh --version
zsh 5.9 (arm64-apple-darwin24.0)

which zsh
/bin/zsh


##Change bash -> zsh
chsh -s 'which zsh'

echo $SHELL
/bin/zsh


##Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"


##Update oh-my-zsh setting
vi ~/.zshrc

export ZSH="$HOME/.oh-my-zsh"
export PATH=/opt/homebrew/bin:$PATH
export DEFAULT_USER="$(whoami)"

ZSH_THEME="agnoster"

plugins=(git, autojump, zsh-autosuggestions, zsh-syntax-highlighting)


##update oh-my-zsh
source ~/.zshrc


##iTerm2 설치

https://iterm2.com/downloads/stable/latest




##Powerline Font 설치
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts


##iTerm2 ColorSet
curl -O https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/schemes/Framer.itermcolors
```


폰트 출처


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25I6CXI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCvOBUrktcqtcUfkRTW6qvs1CSwY2eoNwKqfzbsl1IA6AIhAOsRRLYN5zgn0YLvSr0e9hRv9S31ZdB2O4HOj%2Bx9eGFkKv8DCDEQABoMNjM3NDIzMTgzODA1Igzvh2w%2BqXL15AgbteQq3APs62iO%2BLr3O566cKLhxlQQ9S%2FWN6X47RWsn7VEPMH%2FUaVrkHaob5MMxWdAwGhKGYkUbkQc8iLjUTpEVzhiUR0ii06ix5U%2B41tSSejhBiu9up8k75Su%2BkRsXiLqUF94RV7Qg4yXtlpgluUVaYc5De%2FioE5ecLP7OROIAbkeKkr5CDKrti9YoMl3gandRxiyg3cmfitcddDePMKBD%2BdtuiJiciqAHPXTYG9o93HLwLtSL%2Bl3U8%2BMyaIGs4tZcJuuwKl4Hajd8yIr0FgqnED0juewd6yn9kYJG%2Bj7qP0zOwnNn%2FX0RpBBulggSZIiVTwX%2BqIwanPqhiwI9KHj2DudjpGTbeB72MPqZ6c61nEWzoRBWi9SUT07hnBkB6oqETCPE7cdQ%2FM%2Be3pOVEVU4wtQNilhoZzJNNGvmFGMgeU9QnrJePUm%2F97gyL3hcCnI1evXqSo3Ax8i1AltxyjzOxqZG7%2BnCCnvF6Q3R0klaIjhx05cHUORB%2FTDCNABsOUbXTffLqxBXRKex%2F3XxdiIYN50dFR4Yi3XQCQ5EqWcPchgAz7jmRkbIu9VxWFm0LlkobE%2BD5wlX%2FRqkWld7M44k9fTortuAns%2Fro%2FbboN04A2Yq1eU652MEkfphXk%2F%2Fua53DCOpc%2FTBjqkAcwoPchzUEjaDAipZsjTKjbBWfDYbBOv%2FS%2BOoZMBNAXXjmglbxP8AJBpk%2Bo43ismyz5iOkdQVp%2BK2Fc0bDpq%2FHiTq4AjpDTNGF6vO%2BTp%2B%2Bs5bRgxqYUJJuXuv6R3hxL3E7%2F%2F7bmyuhC08BMXNzW%2BRPIo%2Bl8%2FEYeFcnaODTPiN8eaPRtAzAyDFe37arZKlT2Ym5hYOy725tHxwWLnNRsHtzkQzquq&X-Amz-Signature=a70fa2ca477f7a085935801d32a967042ae2d6a825b8dac2a08f1c04747c9997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25I6CXI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCvOBUrktcqtcUfkRTW6qvs1CSwY2eoNwKqfzbsl1IA6AIhAOsRRLYN5zgn0YLvSr0e9hRv9S31ZdB2O4HOj%2Bx9eGFkKv8DCDEQABoMNjM3NDIzMTgzODA1Igzvh2w%2BqXL15AgbteQq3APs62iO%2BLr3O566cKLhxlQQ9S%2FWN6X47RWsn7VEPMH%2FUaVrkHaob5MMxWdAwGhKGYkUbkQc8iLjUTpEVzhiUR0ii06ix5U%2B41tSSejhBiu9up8k75Su%2BkRsXiLqUF94RV7Qg4yXtlpgluUVaYc5De%2FioE5ecLP7OROIAbkeKkr5CDKrti9YoMl3gandRxiyg3cmfitcddDePMKBD%2BdtuiJiciqAHPXTYG9o93HLwLtSL%2Bl3U8%2BMyaIGs4tZcJuuwKl4Hajd8yIr0FgqnED0juewd6yn9kYJG%2Bj7qP0zOwnNn%2FX0RpBBulggSZIiVTwX%2BqIwanPqhiwI9KHj2DudjpGTbeB72MPqZ6c61nEWzoRBWi9SUT07hnBkB6oqETCPE7cdQ%2FM%2Be3pOVEVU4wtQNilhoZzJNNGvmFGMgeU9QnrJePUm%2F97gyL3hcCnI1evXqSo3Ax8i1AltxyjzOxqZG7%2BnCCnvF6Q3R0klaIjhx05cHUORB%2FTDCNABsOUbXTffLqxBXRKex%2F3XxdiIYN50dFR4Yi3XQCQ5EqWcPchgAz7jmRkbIu9VxWFm0LlkobE%2BD5wlX%2FRqkWld7M44k9fTortuAns%2Fro%2FbboN04A2Yq1eU652MEkfphXk%2F%2Fua53DCOpc%2FTBjqkAcwoPchzUEjaDAipZsjTKjbBWfDYbBOv%2FS%2BOoZMBNAXXjmglbxP8AJBpk%2Bo43ismyz5iOkdQVp%2BK2Fc0bDpq%2FHiTq4AjpDTNGF6vO%2BTp%2B%2Bs5bRgxqYUJJuXuv6R3hxL3E7%2F%2F7bmyuhC08BMXNzW%2BRPIo%2Bl8%2FEYeFcnaODTPiN8eaPRtAzAyDFe37arZKlT2Ym5hYOy725tHxwWLnNRsHtzkQzquq&X-Amz-Signature=3ad1f8ed7e19fa5fbd19dd4328511004e8e94eed18f726f0c5478139b35ac3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25I6CXI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCvOBUrktcqtcUfkRTW6qvs1CSwY2eoNwKqfzbsl1IA6AIhAOsRRLYN5zgn0YLvSr0e9hRv9S31ZdB2O4HOj%2Bx9eGFkKv8DCDEQABoMNjM3NDIzMTgzODA1Igzvh2w%2BqXL15AgbteQq3APs62iO%2BLr3O566cKLhxlQQ9S%2FWN6X47RWsn7VEPMH%2FUaVrkHaob5MMxWdAwGhKGYkUbkQc8iLjUTpEVzhiUR0ii06ix5U%2B41tSSejhBiu9up8k75Su%2BkRsXiLqUF94RV7Qg4yXtlpgluUVaYc5De%2FioE5ecLP7OROIAbkeKkr5CDKrti9YoMl3gandRxiyg3cmfitcddDePMKBD%2BdtuiJiciqAHPXTYG9o93HLwLtSL%2Bl3U8%2BMyaIGs4tZcJuuwKl4Hajd8yIr0FgqnED0juewd6yn9kYJG%2Bj7qP0zOwnNn%2FX0RpBBulggSZIiVTwX%2BqIwanPqhiwI9KHj2DudjpGTbeB72MPqZ6c61nEWzoRBWi9SUT07hnBkB6oqETCPE7cdQ%2FM%2Be3pOVEVU4wtQNilhoZzJNNGvmFGMgeU9QnrJePUm%2F97gyL3hcCnI1evXqSo3Ax8i1AltxyjzOxqZG7%2BnCCnvF6Q3R0klaIjhx05cHUORB%2FTDCNABsOUbXTffLqxBXRKex%2F3XxdiIYN50dFR4Yi3XQCQ5EqWcPchgAz7jmRkbIu9VxWFm0LlkobE%2BD5wlX%2FRqkWld7M44k9fTortuAns%2Fro%2FbboN04A2Yq1eU652MEkfphXk%2F%2Fua53DCOpc%2FTBjqkAcwoPchzUEjaDAipZsjTKjbBWfDYbBOv%2FS%2BOoZMBNAXXjmglbxP8AJBpk%2Bo43ismyz5iOkdQVp%2BK2Fc0bDpq%2FHiTq4AjpDTNGF6vO%2BTp%2B%2Bs5bRgxqYUJJuXuv6R3hxL3E7%2F%2F7bmyuhC08BMXNzW%2BRPIo%2Bl8%2FEYeFcnaODTPiN8eaPRtAzAyDFe37arZKlT2Ym5hYOy725tHxwWLnNRsHtzkQzquq&X-Amz-Signature=5b13fba22a159730b4e52288295c0066b6b7a940a297cb47d026aae063aa2141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



## Install Homebrew


```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```



## Install Oh My ZSH!


[https://ohmyz.sh/](https://ohmyz.sh/)


To install:


```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```



## Install PowerlineFont


[https://github.com/powerline/fonts/tree/master/SourceCodePro](https://github.com/powerline/fonts/tree/master/SourceCodePro)


```shell

## clone
git clone https://github.com/powerline/fonts.git --depth=1

## install
cd fonts
./install.sh

## clean-up a bit
cd ..
rm -rf fonts
```



## Install iTerm2


[https://iterm2.com/](https://iterm2.com/)


다운로드 링크
[https://iterm2.com/downloads/stable/latest](https://iterm2.com/downloads/stable/latest)



## Install Powerlevel10K


[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)


To Install:


```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

