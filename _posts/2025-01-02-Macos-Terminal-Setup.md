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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC64SNXI%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T011857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt8LxZ%2FqU78cn47PYwaX7%2B3uyR22Vq5eH%2Bp0ZApzTp%2BAIhAKS0L06tuyF4qqMpSGU%2BrybXc%2F6CzsPDKxhPmdIs%2BU99KogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVolTIxXCBJ%2BJ638Uq3ANSIylQorSxgsKEwTsXALe%2FqDxBWFpR8pt3y7l3yNx4lVUroRwptOpSR9yw74aCxL8%2BQC6AmpCgJKkWodrYsvbANFnRdT0n56YwaJCwi2YaVw04ppA9wZFRrtBdBANcGmU%2BIQFccI9PqY0FH5s%2B%2BLDxpkEytrD%2FTSVXxH2xlyXG8RXdN0glDAODUhtjQmBYO9yQC767HxC%2Fy8s7SghorOlj4eUje2WFiOdtTHjQichNWbX4ErcZRnQhJ6lJkEc9wNPLv4RzTwAMLls88cjavKSTjuNPexOYvjH1jbFo8kYw4ANts9C9vmhcYhhr64Mbmtv66iR%2B8FYs0FIgrQZSg8gCXfnc%2BqUZW85UOpUKoObRdhGvcDXmj5yvSxi2Gly7Mgxv2h3cfnFWXu5tW8z7K2SiY84gtVWmGGtv%2FtVfwCYYcI92C0wts6cFTvLreKd0js1lpVr67pZjkpw91oqHK2yrcrCyzYiAHN5H8j4OV8Quzx17fp2sB8xuhJUnOPd%2F%2Fg69HOnwjIFs2LdC%2BTbIbnkpliPwbqvsHB3w0ot9pCA9E%2FmOGYWXVNktXYuxrSgQhwZ46nodzJl7C5cGyAaNzPln1UeN%2B65uGYaTWKG7srdJH044cvF8nCALIAsODDCbjL3GBjqkAbl8roe7UJDg2ProL8rGHbSX4ZLFeMaypqlOmIOXoUpIxFzUrRyKvzIXqcqco5p26pZ8tiZhhqMmO9nhPjZug6H0Ou4YIND2KgX7t0PojveLovpEjwuiwh59ZOvBj%2B8YBKokE5srgizrlYpxTJObmk0hR7JExeqpME9zNbVv5RmAJyc3dAPWhcehO732dbQs3iGELuD1iQeFjigMbogOjwbkXLKK&X-Amz-Signature=a6d0f86ae0d0f27f4a69b533ee2941defcede9038513906ed5d3908c7f9e59e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC64SNXI%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T011857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt8LxZ%2FqU78cn47PYwaX7%2B3uyR22Vq5eH%2Bp0ZApzTp%2BAIhAKS0L06tuyF4qqMpSGU%2BrybXc%2F6CzsPDKxhPmdIs%2BU99KogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVolTIxXCBJ%2BJ638Uq3ANSIylQorSxgsKEwTsXALe%2FqDxBWFpR8pt3y7l3yNx4lVUroRwptOpSR9yw74aCxL8%2BQC6AmpCgJKkWodrYsvbANFnRdT0n56YwaJCwi2YaVw04ppA9wZFRrtBdBANcGmU%2BIQFccI9PqY0FH5s%2B%2BLDxpkEytrD%2FTSVXxH2xlyXG8RXdN0glDAODUhtjQmBYO9yQC767HxC%2Fy8s7SghorOlj4eUje2WFiOdtTHjQichNWbX4ErcZRnQhJ6lJkEc9wNPLv4RzTwAMLls88cjavKSTjuNPexOYvjH1jbFo8kYw4ANts9C9vmhcYhhr64Mbmtv66iR%2B8FYs0FIgrQZSg8gCXfnc%2BqUZW85UOpUKoObRdhGvcDXmj5yvSxi2Gly7Mgxv2h3cfnFWXu5tW8z7K2SiY84gtVWmGGtv%2FtVfwCYYcI92C0wts6cFTvLreKd0js1lpVr67pZjkpw91oqHK2yrcrCyzYiAHN5H8j4OV8Quzx17fp2sB8xuhJUnOPd%2F%2Fg69HOnwjIFs2LdC%2BTbIbnkpliPwbqvsHB3w0ot9pCA9E%2FmOGYWXVNktXYuxrSgQhwZ46nodzJl7C5cGyAaNzPln1UeN%2B65uGYaTWKG7srdJH044cvF8nCALIAsODDCbjL3GBjqkAbl8roe7UJDg2ProL8rGHbSX4ZLFeMaypqlOmIOXoUpIxFzUrRyKvzIXqcqco5p26pZ8tiZhhqMmO9nhPjZug6H0Ou4YIND2KgX7t0PojveLovpEjwuiwh59ZOvBj%2B8YBKokE5srgizrlYpxTJObmk0hR7JExeqpME9zNbVv5RmAJyc3dAPWhcehO732dbQs3iGELuD1iQeFjigMbogOjwbkXLKK&X-Amz-Signature=3331180e66f07f0df8bc6a79b41b51687b11394497411f71f978a21afddf6d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC64SNXI%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T011857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt8LxZ%2FqU78cn47PYwaX7%2B3uyR22Vq5eH%2Bp0ZApzTp%2BAIhAKS0L06tuyF4qqMpSGU%2BrybXc%2F6CzsPDKxhPmdIs%2BU99KogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVolTIxXCBJ%2BJ638Uq3ANSIylQorSxgsKEwTsXALe%2FqDxBWFpR8pt3y7l3yNx4lVUroRwptOpSR9yw74aCxL8%2BQC6AmpCgJKkWodrYsvbANFnRdT0n56YwaJCwi2YaVw04ppA9wZFRrtBdBANcGmU%2BIQFccI9PqY0FH5s%2B%2BLDxpkEytrD%2FTSVXxH2xlyXG8RXdN0glDAODUhtjQmBYO9yQC767HxC%2Fy8s7SghorOlj4eUje2WFiOdtTHjQichNWbX4ErcZRnQhJ6lJkEc9wNPLv4RzTwAMLls88cjavKSTjuNPexOYvjH1jbFo8kYw4ANts9C9vmhcYhhr64Mbmtv66iR%2B8FYs0FIgrQZSg8gCXfnc%2BqUZW85UOpUKoObRdhGvcDXmj5yvSxi2Gly7Mgxv2h3cfnFWXu5tW8z7K2SiY84gtVWmGGtv%2FtVfwCYYcI92C0wts6cFTvLreKd0js1lpVr67pZjkpw91oqHK2yrcrCyzYiAHN5H8j4OV8Quzx17fp2sB8xuhJUnOPd%2F%2Fg69HOnwjIFs2LdC%2BTbIbnkpliPwbqvsHB3w0ot9pCA9E%2FmOGYWXVNktXYuxrSgQhwZ46nodzJl7C5cGyAaNzPln1UeN%2B65uGYaTWKG7srdJH044cvF8nCALIAsODDCbjL3GBjqkAbl8roe7UJDg2ProL8rGHbSX4ZLFeMaypqlOmIOXoUpIxFzUrRyKvzIXqcqco5p26pZ8tiZhhqMmO9nhPjZug6H0Ou4YIND2KgX7t0PojveLovpEjwuiwh59ZOvBj%2B8YBKokE5srgizrlYpxTJObmk0hR7JExeqpME9zNbVv5RmAJyc3dAPWhcehO732dbQs3iGELuD1iQeFjigMbogOjwbkXLKK&X-Amz-Signature=293d910127a5ee4228badc5210dbcdd838d9590cd819917793a4f37e11ce04c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


