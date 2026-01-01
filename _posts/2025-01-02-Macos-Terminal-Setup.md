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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZX7VSR2%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T163058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDeSQZcIzDfbZKeezP%2Fu6p0nHuxlWMNaGV0UboGHCRN3wIhAMrTqQhMFiLVALfsGeX4o4ErIeDv9Aiia1NiZl2Sy7c7KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy36s7e8zNAAtGAtngq3ANxWek6k5QmUqgt7kp5FiG%2FDQGNb3jpf%2FvSb1tHEAEfgQ4fMbmGF5jYek3FxKC8VEmtjrH7G9el0LdLFADcWQshGsH9zUdI8568%2B%2BM%2FcZUUgO2WWlXW6YCyq5q8IkJnwq0sW764E0NL9b%2FVHhjJfpLGqf3bH6mf%2Fwff5dOAX8wFmohQ%2BC1g8T8nP901Rx5TE5Ix%2Bq2jBwTAQQt8z1wq7XUnnCvhGLnLO5VwM4Xi%2F4YMx9RrH%2BOaAwHz%2FHUL39oS6%2F%2FZ9zDo5CF2cdDZp7WID5erkEiuZkIYc8ftL43VFE0h1suDuDpKm%2BvkA4EfxxMHRCMfloU9sFaquNQm0kcdJ5AKQWZCdDo0iMKOP%2F2EwmmtZ2l6rbm5qECRUYXUMtYsMuVSve6VkApNJJ8y3XegJgyb4GjnfoXKMHuK4xFysqI6kKAzF4WKO%2FXduXqKMfHV4%2F8uuAypnt9x7nOYhBADUYmFzUU6yXBVGYv62hQgBES3KTPgZKgSdOSgS0iK0mKmDJ9So91rnn2RpG8Iec1n%2FRIMdJ1KZt8Acgcv8l7rp68Bf6ZqeeAKaG7iQlD3%2B%2BnnHOzbQ2DU0t63n7DtX04oEEwQULUThHk%2Bd6j6JmdyCk8Yxay2XV81RTNoC1%2FueDCE5tnKBjqkAYHN3iIPudjTyhns%2FskM1quxOoRhFuJp7j7RTJtZ32%2BA%2FFAAblV6%2BDURj4WdnUar0e8Tz7mgGqd77sHHTxvUZgog4c5Vwei4%2BhrCPtx7IJ8ITbuFJ8NK2B1Fcnl5wF1zbmDTTTK4l5BBmp91BnACVg7TC7RyPmTtrxPMMAOgX4gGxQUm0nHoL7zfMnQaTB8vV4dOPrCgWCfQr58qjmu5DzEL%2BOD2&X-Amz-Signature=982df987e85fd1e8369d08f056f8d2677c979b6c080557b14d227abafc5e18d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZX7VSR2%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T163058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDeSQZcIzDfbZKeezP%2Fu6p0nHuxlWMNaGV0UboGHCRN3wIhAMrTqQhMFiLVALfsGeX4o4ErIeDv9Aiia1NiZl2Sy7c7KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy36s7e8zNAAtGAtngq3ANxWek6k5QmUqgt7kp5FiG%2FDQGNb3jpf%2FvSb1tHEAEfgQ4fMbmGF5jYek3FxKC8VEmtjrH7G9el0LdLFADcWQshGsH9zUdI8568%2B%2BM%2FcZUUgO2WWlXW6YCyq5q8IkJnwq0sW764E0NL9b%2FVHhjJfpLGqf3bH6mf%2Fwff5dOAX8wFmohQ%2BC1g8T8nP901Rx5TE5Ix%2Bq2jBwTAQQt8z1wq7XUnnCvhGLnLO5VwM4Xi%2F4YMx9RrH%2BOaAwHz%2FHUL39oS6%2F%2FZ9zDo5CF2cdDZp7WID5erkEiuZkIYc8ftL43VFE0h1suDuDpKm%2BvkA4EfxxMHRCMfloU9sFaquNQm0kcdJ5AKQWZCdDo0iMKOP%2F2EwmmtZ2l6rbm5qECRUYXUMtYsMuVSve6VkApNJJ8y3XegJgyb4GjnfoXKMHuK4xFysqI6kKAzF4WKO%2FXduXqKMfHV4%2F8uuAypnt9x7nOYhBADUYmFzUU6yXBVGYv62hQgBES3KTPgZKgSdOSgS0iK0mKmDJ9So91rnn2RpG8Iec1n%2FRIMdJ1KZt8Acgcv8l7rp68Bf6ZqeeAKaG7iQlD3%2B%2BnnHOzbQ2DU0t63n7DtX04oEEwQULUThHk%2Bd6j6JmdyCk8Yxay2XV81RTNoC1%2FueDCE5tnKBjqkAYHN3iIPudjTyhns%2FskM1quxOoRhFuJp7j7RTJtZ32%2BA%2FFAAblV6%2BDURj4WdnUar0e8Tz7mgGqd77sHHTxvUZgog4c5Vwei4%2BhrCPtx7IJ8ITbuFJ8NK2B1Fcnl5wF1zbmDTTTK4l5BBmp91BnACVg7TC7RyPmTtrxPMMAOgX4gGxQUm0nHoL7zfMnQaTB8vV4dOPrCgWCfQr58qjmu5DzEL%2BOD2&X-Amz-Signature=cd77da42b7776c986ddd9c72da1a36d2a7a85c0c423ef2290d211a99405695ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZX7VSR2%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T163058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDeSQZcIzDfbZKeezP%2Fu6p0nHuxlWMNaGV0UboGHCRN3wIhAMrTqQhMFiLVALfsGeX4o4ErIeDv9Aiia1NiZl2Sy7c7KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy36s7e8zNAAtGAtngq3ANxWek6k5QmUqgt7kp5FiG%2FDQGNb3jpf%2FvSb1tHEAEfgQ4fMbmGF5jYek3FxKC8VEmtjrH7G9el0LdLFADcWQshGsH9zUdI8568%2B%2BM%2FcZUUgO2WWlXW6YCyq5q8IkJnwq0sW764E0NL9b%2FVHhjJfpLGqf3bH6mf%2Fwff5dOAX8wFmohQ%2BC1g8T8nP901Rx5TE5Ix%2Bq2jBwTAQQt8z1wq7XUnnCvhGLnLO5VwM4Xi%2F4YMx9RrH%2BOaAwHz%2FHUL39oS6%2F%2FZ9zDo5CF2cdDZp7WID5erkEiuZkIYc8ftL43VFE0h1suDuDpKm%2BvkA4EfxxMHRCMfloU9sFaquNQm0kcdJ5AKQWZCdDo0iMKOP%2F2EwmmtZ2l6rbm5qECRUYXUMtYsMuVSve6VkApNJJ8y3XegJgyb4GjnfoXKMHuK4xFysqI6kKAzF4WKO%2FXduXqKMfHV4%2F8uuAypnt9x7nOYhBADUYmFzUU6yXBVGYv62hQgBES3KTPgZKgSdOSgS0iK0mKmDJ9So91rnn2RpG8Iec1n%2FRIMdJ1KZt8Acgcv8l7rp68Bf6ZqeeAKaG7iQlD3%2B%2BnnHOzbQ2DU0t63n7DtX04oEEwQULUThHk%2Bd6j6JmdyCk8Yxay2XV81RTNoC1%2FueDCE5tnKBjqkAYHN3iIPudjTyhns%2FskM1quxOoRhFuJp7j7RTJtZ32%2BA%2FFAAblV6%2BDURj4WdnUar0e8Tz7mgGqd77sHHTxvUZgog4c5Vwei4%2BhrCPtx7IJ8ITbuFJ8NK2B1Fcnl5wF1zbmDTTTK4l5BBmp91BnACVg7TC7RyPmTtrxPMMAOgX4gGxQUm0nHoL7zfMnQaTB8vV4dOPrCgWCfQr58qjmu5DzEL%2BOD2&X-Amz-Signature=cb3b5b9b1524a13a38dd2fea2522f18fe5919e981204e88b0b29efa972a5b841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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

