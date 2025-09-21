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


[MesloLGS_NF_Regular.ttf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/3230b59b-0400-4488-9b1f-e87eed5e220b/MesloLGS_NF_Regular.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3BJTYG%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T003426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETdQcNtT5%2BJkNavj0hqWFNVbAeGStkcwRFALJLT0iYKAiEA7BktNSi25g80gdppEY%2FOTWCiAGn2WYfOdGKqcAAPDSYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKSnSdq4ZRtzllX%2FyrcAyxM3lZ5qd9NZqPw6VinYSAc4Y6YG9LAyv3MFaDtFQAmRB%2Fl9PHCoH4BoZ4MyAUgD90x%2BCgwtGHAGg3wudV7JJGJ1hCkVsxpzGsLL4hBwUomW%2FE5bFn4BxKMX05B3%2F%2FL5u0Oo3S59%2BndD0FI2ixex7zTI8ds5IdvdH9n7F1KeUVObhohG8RFQ5HgG4Qjel4eF3xm2m9LXXVQF6oQdYJrrvyH4lWeT8AsDNlo51ShUxKqjsB00UfWCdSOVv%2BHDb1sks5SoyY5LR7Jit5C6oDNnDarWY%2FgufoR6HPYy%2ByvtYmJHeeBeiXzFxErbByPSxNWCJuN%2B%2FpsEZgtdXi3A7ECpZKQfgvuywvSBbXq9IkXoNEO%2BLIeg7uY3o2gyjJMXpTA%2F5mTbXgVb8ZtTpyD8L4deXX04%2FgiraZsp%2BljfoxcIIs01f9%2BoU3a6PZL25tXr8dCJocoGS0TEpJMSaH5GqE5efKivJFtc0CKnxHGvwgTkjN5byI%2Fi%2FcgyXJNkKySvNXbNHWy7RI11KY3ED2Y0Q63MSpEG%2BZfw1A5ZsGuUlE7uAt%2BkySU6hRu0%2F3BjySJ45ALhUz1nYJdLex9lNjss1MCG7GwUrj2nJEDqMy9g%2By70fRWT8xWkmBau5IyBP2GMPyLvcYGOqUBihD2BXPJNYAnEwCm3gPKCU5C4XnjETWRCLlfRVoXHqV%2FOuvemMRYB4Vy6tc%2BBH3acbRlf5O2jCXcf9aXXs0gjoCMZ%2B%2BIMnPp3uGOF52NNmqQc5Wk9cw8NR8WYDo4wigBnZRpiDKaT5aQxJG6WfTgmhMoe8UBNfLqmFLqmSi6El3iRsOeHsY4mcp3n03MgKz%2F%2FvyzgAbDMHZlS95mJ6pmmwBdN6cy&X-Amz-Signature=6c431d33610c608570d7a757141a74dbc1d4585ce33cb48fa428cf5d1f1093e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


컬러테마 출처


[https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)



터미널용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/d3a6c42d-c62b-4f75-bb68-59d217cc4e17/Framer.terminal?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3BJTYG%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T003426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETdQcNtT5%2BJkNavj0hqWFNVbAeGStkcwRFALJLT0iYKAiEA7BktNSi25g80gdppEY%2FOTWCiAGn2WYfOdGKqcAAPDSYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKSnSdq4ZRtzllX%2FyrcAyxM3lZ5qd9NZqPw6VinYSAc4Y6YG9LAyv3MFaDtFQAmRB%2Fl9PHCoH4BoZ4MyAUgD90x%2BCgwtGHAGg3wudV7JJGJ1hCkVsxpzGsLL4hBwUomW%2FE5bFn4BxKMX05B3%2F%2FL5u0Oo3S59%2BndD0FI2ixex7zTI8ds5IdvdH9n7F1KeUVObhohG8RFQ5HgG4Qjel4eF3xm2m9LXXVQF6oQdYJrrvyH4lWeT8AsDNlo51ShUxKqjsB00UfWCdSOVv%2BHDb1sks5SoyY5LR7Jit5C6oDNnDarWY%2FgufoR6HPYy%2ByvtYmJHeeBeiXzFxErbByPSxNWCJuN%2B%2FpsEZgtdXi3A7ECpZKQfgvuywvSBbXq9IkXoNEO%2BLIeg7uY3o2gyjJMXpTA%2F5mTbXgVb8ZtTpyD8L4deXX04%2FgiraZsp%2BljfoxcIIs01f9%2BoU3a6PZL25tXr8dCJocoGS0TEpJMSaH5GqE5efKivJFtc0CKnxHGvwgTkjN5byI%2Fi%2FcgyXJNkKySvNXbNHWy7RI11KY3ED2Y0Q63MSpEG%2BZfw1A5ZsGuUlE7uAt%2BkySU6hRu0%2F3BjySJ45ALhUz1nYJdLex9lNjss1MCG7GwUrj2nJEDqMy9g%2By70fRWT8xWkmBau5IyBP2GMPyLvcYGOqUBihD2BXPJNYAnEwCm3gPKCU5C4XnjETWRCLlfRVoXHqV%2FOuvemMRYB4Vy6tc%2BBH3acbRlf5O2jCXcf9aXXs0gjoCMZ%2B%2BIMnPp3uGOF52NNmqQc5Wk9cw8NR8WYDo4wigBnZRpiDKaT5aQxJG6WfTgmhMoe8UBNfLqmFLqmSi6El3iRsOeHsY4mcp3n03MgKz%2F%2FvyzgAbDMHZlS95mJ6pmmwBdN6cy&X-Amz-Signature=cd42808c618eba35f3cde531425ca6c507617ec4fd88894c308bc3236f6afac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


iTerm2 용 컬러 테마


[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/c0a60f17-c7c2-4720-9496-d840b2564836/Framer.itermcolors?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3BJTYG%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T003426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETdQcNtT5%2BJkNavj0hqWFNVbAeGStkcwRFALJLT0iYKAiEA7BktNSi25g80gdppEY%2FOTWCiAGn2WYfOdGKqcAAPDSYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKSnSdq4ZRtzllX%2FyrcAyxM3lZ5qd9NZqPw6VinYSAc4Y6YG9LAyv3MFaDtFQAmRB%2Fl9PHCoH4BoZ4MyAUgD90x%2BCgwtGHAGg3wudV7JJGJ1hCkVsxpzGsLL4hBwUomW%2FE5bFn4BxKMX05B3%2F%2FL5u0Oo3S59%2BndD0FI2ixex7zTI8ds5IdvdH9n7F1KeUVObhohG8RFQ5HgG4Qjel4eF3xm2m9LXXVQF6oQdYJrrvyH4lWeT8AsDNlo51ShUxKqjsB00UfWCdSOVv%2BHDb1sks5SoyY5LR7Jit5C6oDNnDarWY%2FgufoR6HPYy%2ByvtYmJHeeBeiXzFxErbByPSxNWCJuN%2B%2FpsEZgtdXi3A7ECpZKQfgvuywvSBbXq9IkXoNEO%2BLIeg7uY3o2gyjJMXpTA%2F5mTbXgVb8ZtTpyD8L4deXX04%2FgiraZsp%2BljfoxcIIs01f9%2BoU3a6PZL25tXr8dCJocoGS0TEpJMSaH5GqE5efKivJFtc0CKnxHGvwgTkjN5byI%2Fi%2FcgyXJNkKySvNXbNHWy7RI11KY3ED2Y0Q63MSpEG%2BZfw1A5ZsGuUlE7uAt%2BkySU6hRu0%2F3BjySJ45ALhUz1nYJdLex9lNjss1MCG7GwUrj2nJEDqMy9g%2By70fRWT8xWkmBau5IyBP2GMPyLvcYGOqUBihD2BXPJNYAnEwCm3gPKCU5C4XnjETWRCLlfRVoXHqV%2FOuvemMRYB4Vy6tc%2BBH3acbRlf5O2jCXcf9aXXs0gjoCMZ%2B%2BIMnPp3uGOF52NNmqQc5Wk9cw8NR8WYDo4wigBnZRpiDKaT5aQxJG6WfTgmhMoe8UBNfLqmFLqmSi6El3iRsOeHsY4mcp3n03MgKz%2F%2FvyzgAbDMHZlS95mJ6pmmwBdN6cy&X-Amz-Signature=cab3e988c6b7013c8a1a0b04b11756024a73ebda3db991ae018e8037f0960513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)



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


