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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ523E6I%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T080038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDAHvPMJYU1gApGiZnliYtQjQtFiET00%2Bo3JhvFGXofAgIgduqu9jcxS05sCLEWAesgjZwyahNELLoEZCYoAtqpn00q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNW9k35xo4PVLCDxwSrcA7zZ1NqqdJSXraHkIaWoTVLqOxGsmiO1yJXW3IvGJaH43XaEVaphRwEsvGSnxIu1iV2%2F2iYkMQuxEunFdbs4tyPhb9qrgEirFRDrwe2dxCeOW2ezQFnHbSsNdX4RFfUIfmcjrNCCx08RpV1H8MA5Y3gkGDMxZ3oYsOmHPPGI8DgX0FWGRNT3Y4jIBzi4iN9hbG988fWtmD8t1O3a9tVAuM%2FQMykr7rqO5%2FwHi%2BOa41U%2B%2BfNoejQHgZ2gnERqv64Ur%2FzI0aRsdzOAy65N3JmdHcsNe9ZS1nKXCVCoi1%2FET5Oon7MuTowN09rb%2Bz%2FfQz%2BcsQrV6eva8V55W8q3eYJ88a9f7bgPgJPOu9SS0p%2B5VZlH5lP3nt%2FSnYKKUg178KaI3ZS4Ns%2F9TSmVtXWSY2pHCtzGpOzVmujg5c1s3XV6ms7Cf%2Fy7dKdeS8669aCUTaLQuvORS7YYj9%2FmR9h%2BBUXgO%2FunK2prFaUNg6KMhQPYsso%2FB8w05Bxx6DkuivYgyxVmCajdW8aC%2FFmiYHdQQ7l8mVU42daXo6049372lK8%2BWqwXPzRexlPYRb%2BjfTyeZnl9nAgHZXfqrMPPPGmcm5QT2pWo6oDIqxczsjsGVWvg2OVe400%2BQJZD00V2e%2FIOMLCFhdgGOqUByLAzj4cUloq%2F66JfsjDhJs5dJcf1%2BFd90dlt41KU4%2BRg%2BKppfa8eHdRpgpD6lTLfIGAXtmxEvKX7n7U4cG%2FLdyjyqo41MGrbRLqT7%2BDUsNiZD4qs5lpOyB3v5tSTkV7OMXQbXdRXRg4maT5n7CuTMCWIpkmnJ2EM3j9PWgSelKmTHU52A27GvY5VZQPl%2BFBFgZDnLyhh4I0C7MTeh5j%2BoVx0bsc3&X-Amz-Signature=c5f5d5ce693a4cc99c9677c4607e66f71bfcbb2307995bcf8b812d889a0e4734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ523E6I%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T080038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDAHvPMJYU1gApGiZnliYtQjQtFiET00%2Bo3JhvFGXofAgIgduqu9jcxS05sCLEWAesgjZwyahNELLoEZCYoAtqpn00q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNW9k35xo4PVLCDxwSrcA7zZ1NqqdJSXraHkIaWoTVLqOxGsmiO1yJXW3IvGJaH43XaEVaphRwEsvGSnxIu1iV2%2F2iYkMQuxEunFdbs4tyPhb9qrgEirFRDrwe2dxCeOW2ezQFnHbSsNdX4RFfUIfmcjrNCCx08RpV1H8MA5Y3gkGDMxZ3oYsOmHPPGI8DgX0FWGRNT3Y4jIBzi4iN9hbG988fWtmD8t1O3a9tVAuM%2FQMykr7rqO5%2FwHi%2BOa41U%2B%2BfNoejQHgZ2gnERqv64Ur%2FzI0aRsdzOAy65N3JmdHcsNe9ZS1nKXCVCoi1%2FET5Oon7MuTowN09rb%2Bz%2FfQz%2BcsQrV6eva8V55W8q3eYJ88a9f7bgPgJPOu9SS0p%2B5VZlH5lP3nt%2FSnYKKUg178KaI3ZS4Ns%2F9TSmVtXWSY2pHCtzGpOzVmujg5c1s3XV6ms7Cf%2Fy7dKdeS8669aCUTaLQuvORS7YYj9%2FmR9h%2BBUXgO%2FunK2prFaUNg6KMhQPYsso%2FB8w05Bxx6DkuivYgyxVmCajdW8aC%2FFmiYHdQQ7l8mVU42daXo6049372lK8%2BWqwXPzRexlPYRb%2BjfTyeZnl9nAgHZXfqrMPPPGmcm5QT2pWo6oDIqxczsjsGVWvg2OVe400%2BQJZD00V2e%2FIOMLCFhdgGOqUByLAzj4cUloq%2F66JfsjDhJs5dJcf1%2BFd90dlt41KU4%2BRg%2BKppfa8eHdRpgpD6lTLfIGAXtmxEvKX7n7U4cG%2FLdyjyqo41MGrbRLqT7%2BDUsNiZD4qs5lpOyB3v5tSTkV7OMXQbXdRXRg4maT5n7CuTMCWIpkmnJ2EM3j9PWgSelKmTHU52A27GvY5VZQPl%2BFBFgZDnLyhh4I0C7MTeh5j%2BoVx0bsc3&X-Amz-Signature=f8ed930487dbe4aad6e15b9142b4c45dde38d45cc03613cf48295015adca92b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ523E6I%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T080038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDAHvPMJYU1gApGiZnliYtQjQtFiET00%2Bo3JhvFGXofAgIgduqu9jcxS05sCLEWAesgjZwyahNELLoEZCYoAtqpn00q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNW9k35xo4PVLCDxwSrcA7zZ1NqqdJSXraHkIaWoTVLqOxGsmiO1yJXW3IvGJaH43XaEVaphRwEsvGSnxIu1iV2%2F2iYkMQuxEunFdbs4tyPhb9qrgEirFRDrwe2dxCeOW2ezQFnHbSsNdX4RFfUIfmcjrNCCx08RpV1H8MA5Y3gkGDMxZ3oYsOmHPPGI8DgX0FWGRNT3Y4jIBzi4iN9hbG988fWtmD8t1O3a9tVAuM%2FQMykr7rqO5%2FwHi%2BOa41U%2B%2BfNoejQHgZ2gnERqv64Ur%2FzI0aRsdzOAy65N3JmdHcsNe9ZS1nKXCVCoi1%2FET5Oon7MuTowN09rb%2Bz%2FfQz%2BcsQrV6eva8V55W8q3eYJ88a9f7bgPgJPOu9SS0p%2B5VZlH5lP3nt%2FSnYKKUg178KaI3ZS4Ns%2F9TSmVtXWSY2pHCtzGpOzVmujg5c1s3XV6ms7Cf%2Fy7dKdeS8669aCUTaLQuvORS7YYj9%2FmR9h%2BBUXgO%2FunK2prFaUNg6KMhQPYsso%2FB8w05Bxx6DkuivYgyxVmCajdW8aC%2FFmiYHdQQ7l8mVU42daXo6049372lK8%2BWqwXPzRexlPYRb%2BjfTyeZnl9nAgHZXfqrMPPPGmcm5QT2pWo6oDIqxczsjsGVWvg2OVe400%2BQJZD00V2e%2FIOMLCFhdgGOqUByLAzj4cUloq%2F66JfsjDhJs5dJcf1%2BFd90dlt41KU4%2BRg%2BKppfa8eHdRpgpD6lTLfIGAXtmxEvKX7n7U4cG%2FLdyjyqo41MGrbRLqT7%2BDUsNiZD4qs5lpOyB3v5tSTkV7OMXQbXdRXRg4maT5n7CuTMCWIpkmnJ2EM3j9PWgSelKmTHU52A27GvY5VZQPl%2BFBFgZDnLyhh4I0C7MTeh5j%2BoVx0bsc3&X-Amz-Signature=cc0550ef079e15bcd1fa221ff946607bbb7c764f93a219edda876a6c8b1ede67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

