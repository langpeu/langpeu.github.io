---
layout: post
date: 2024-12-05
title: "Git CLI & GUI"
tags: [Tips, ]
categories: [Development, ]
---



{% raw %}
```shell
> git --version
git version 2.47.1
```
{% endraw %}




{% raw %}
```shell
> git config --global init.defaultBranch main
```
{% endraw %}




{% raw %}
```shell
> git add targetFilename

> git add .
```
{% endraw %}



![0](/assets/img/2024-12-05-Git-CLI-&-GUI.md/0.png)



{% raw %}
```shell
> vi .gitignore

# 이렇게 #를 사용해서 주석

# 모든 file.c
file.c

# 최상위 폴더의 file.c
/file.c

# 모든 .c 확장자 파일
*.c

# .c 확장자지만 무시하지 않을 파일
!not_ignore_this.c

# logs란 이름의 파일 또는 폴더와 그 내용들
logs

# logs란 이름의 폴더와 그 내용들
logs/

# logs 폴더 바로 안의 debug.log와 .c 파일들
logs/debug.log
logs/*.c

# logs 폴더 바로 안, 또는 그 안의 다른 폴더(들) 안의 debug.log
logs/**/debug.log
```
{% endraw %}




{% raw %}
```shell
> git commit

> git commit -m "Init Commit"
```
{% endraw %}




{% raw %}
```shell
>git log
```
{% endraw %}



![1](/assets/img/2024-12-05-Git-CLI-&-GUI.md/1.png)



{% raw %}
```shell
>git diff
```
{% endraw %}



![2](/assets/img/2024-12-05-Git-CLI-&-GUI.md/2.png)



{% raw %}
```shell
>git add .
>git commit -m "Message"

# untracked 된 파일이 없을때 add & commit 한번에 처리됨
>git commit -am "Message"
```
{% endraw %}




{% raw %}
```shell

# 마지막 커밋 상태로 돌아가고 싶을때
>git reset --hard


# 돌아가고 싶은 커밋으로 reset
>git reset --hard 5fc64f1d7c3f2f7c0fb0996dd7040ac8f3eee2f9


# 특정커밋만 원복하는 커밋을 생성 revert
>git revert 3cfb9d5b419d362b7690401676de5bd481bad7aa


# 특정커밋을 원복하고 커밋을 생성하지 않는 revert
>git revert --no-commit 3cfb9d5b419d362b7690401676de5bd481bad7aa
```
{% endraw %}



상황 1


leopards.yaml 이 추가되고 수정된 내역이 있는데


leopards.yaml 추가했던 commit 를 revert 하려고 할때 뜨는 이슈


![3](/assets/img/2024-12-05-Git-CLI-&-GUI.md/3.png)


![4](/assets/img/2024-12-05-Git-CLI-&-GUI.md/4.png)



{% raw %}
```shell
# 브랜치 생성
>git branch add-coach

# 전체 브랜치 확인
>git branch
```
{% endraw %}



![5](/assets/img/2024-12-05-Git-CLI-&-GUI.md/5.png)



{% raw %}
```shell
# 지정한 브랜치로 변경
>git switch add-coach
```
{% endraw %}



![6](/assets/img/2024-12-05-Git-CLI-&-GUI.md/6.png)



{% raw %}
```shell
#브랜치 생성하면서 해당 브랜치로 변경
>git switch -c new-teams
```
{% endraw %}



![7](/assets/img/2024-12-05-Git-CLI-&-GUI.md/7.png)



{% raw %}
```shell
# 브랜치 이름 변경
>git branch -m to-delete to-rerase

# 브랜치 삭제
>git branch -d to-erase

# 지울 브랜치에 다른 브랜치로 미적용된 커밋이 남아 있을때 강제삭제
>git branch -D to-erase
```
{% endraw %}




{% raw %}
```shell
# 전체 브랜치 log 편하게 보기
> git log --all --decorate --oneline --graph
```
{% endraw %}



![8](/assets/img/2024-12-05-Git-CLI-&-GUI.md/8.png)


![9](/assets/img/2024-12-05-Git-CLI-&-GUI.md/9.png)


Merge


2개의 브랜치를 합친 새로운 커밋을 마지막에 생성한다.


기존 브랜치가 남아 있다.


새로운 커밋 있기에 reset 으로 과거로 돌아갈 수 있다.


Rebase


2개의 브랜치를 합친 새로운 커밋을 



{% raw %}
```shell

# Merge 머지
# add-coard -> main 에 머지하려면
# branch 를 main 으로 이동후 아래 명령어 사용
> git merge add-coach
```
{% endraw %}



![10](/assets/img/2024-12-05-Git-CLI-&-GUI.md/10.png)



{% raw %}
```shell
# Rebase 리베이스
# new-teams -> main 브랜치로 rebase 하려면
# 머지와 반대로 new-teams 로 브랜치 이동후 아래 명령어 사용
> git switch new-teams
> git rebase main
# new-teams 가 main 라인의 최근 커밋으로 들어가게 된다.
# main 브랜치는 new-teams rebase 한 커밋보다 뒤에 있기에
# new-teams -> main 에 머지 해야 한다.
# 그럴려면 다시 브랜치를 main 으로 변경해야 한다.
> git switch main
> git merge new-teams

# new-teams 브랜치를 삭제한다.
> git branch -d new-teams
```
{% endraw %}



![11](/assets/img/2024-12-05-Git-CLI-&-GUI.md/11.png)


![12](/assets/img/2024-12-05-Git-CLI-&-GUI.md/12.png)


---


![13](/assets/img/2024-12-05-Git-CLI-&-GUI.md/13.png)



{% raw %}
```shell
#merge 는 main브랜치에서 feature 당겨온다
#rebase 는 feature브랜치를 main에 rebase한다.
#위치가 서로 반대이다. 헤깔리지 말자.

# conflict-1 을 main 에 merge 시도
>git switch main
>git merge conflict-1

자동 병합: gittest/folder/tigers.yaml
충돌 (내용): gittest/folder/tigers.yaml에 병합 충돌
자동 병합이 실패했습니다. 충돌을 바로잡고 결과물을 커밋하십시오.
```
{% endraw %}



![14](/assets/img/2024-12-05-Git-CLI-&-GUI.md/14.png)


HEAD 나 자신 main 브랜치


>>>>> conflict-1  머지하려는 브랜치



{% raw %}
```shell
# 진행중인 머지 취소
>git merge --abort
```
{% endraw %}



![15](/assets/img/2024-12-05-Git-CLI-&-GUI.md/15.png)


![16](/assets/img/2024-12-05-Git-CLI-&-GUI.md/16.png)


충돌 부분 수정후 



{% raw %}
```shell
# 충돌된 파일 수정후
>git add .
>git commit
```
{% endraw %}



![17](/assets/img/2024-12-05-Git-CLI-&-GUI.md/17.png)


![18](/assets/img/2024-12-05-Git-CLI-&-GUI.md/18.png)


---



{% raw %}
```shell
#conflict-2 를 main 에 rebase 해보자

>git switch conflict-2
>git rebase main
# rebase 취소하기
>git rebase --abort
```
{% endraw %}



![19](/assets/img/2024-12-05-Git-CLI-&-GUI.md/19.png)



{% raw %}
```shell
#rebase 는 커밋 하나하나 적용되기 때문에 커밋마다 충돌시 각각
#처리해줘야 한다.

#충돌되는 코드 수정후 저장
> git add .
> git rebase --continue

#아직 충돌하는 커밋이 남아 있다면 아래처럼 나온다.
#더이상 rebase 할 커밋이 없다면 아래처럼 Successs 완료가 뜬다.
```
{% endraw %}



![20](/assets/img/2024-12-05-Git-CLI-&-GUI.md/20.png)


![21](/assets/img/2024-12-05-Git-CLI-&-GUI.md/21.png)



{% raw %}
```shell
#rebase 가 완료된후에 main 을 보면 conflict-2 뒤에 있다.
> git switch main
> git merge conflict-2
# main 에 conflict-2 를 당겨와야 한다.
```
{% endraw %}



![22](/assets/img/2024-12-05-Git-CLI-&-GUI.md/22.png)



{% raw %}
```shell
#그후 conflict-1 / conflict-2 브랜치를 삭제하면 아래와 같다.
> git branch -d conflict-1
> git branch -d conflict-2
```
{% endraw %}



![23](/assets/img/2024-12-05-Git-CLI-&-GUI.md/23.png)


---



### Git merge/rebase test 연습문제


iOS 앱 프로젝트


[gittest.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/6418cdd3-3974-4c93-91e2-ff78d8683257/6c8b443a-f138-4391-a0fc-7af57ed1c72b/gittest.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FVZTJNZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T030230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9BX0RSXW3xaQz6OiNfGh8z3HNhtnE3JHkM5uVyWhSIAiAPOTaGJWJyQDEU3dm3g7kGPTCr4I2E6mHoKF6Ksb%2FXFCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpzs5KPikKtZyd4uKtwD8Tuzsp0AD15MeJCHqZUu%2FnQ9VU%2Ft34V4qgvqfIZExek%2FE%2BOld0l5escK8Be6Vgy75RU40crr1li%2BcPxGHkvyxywbypITVYtk2qv%2BFSN8oyVJkTNP%2Fzqo0iOp1FY6XM0oVe60QVYsOdd7KqLPZask49eVrtor6r%2F%2Budr6oK0mbddpqA4%2BbutLqOwXVKHbjeeS538%2BWbMKyARHv4B2RcDoP3MeP%2FqH%2FctE9GkuhfdafhMzuHrpg46NOe%2Bm7K%2BkBrsW4GO7C3Hx%2BGQYZwiwl7kmgSAIdvbrhxNiNnkKzf%2BMpsMc7sSZ1PoHaGdaukwCOlcZbJfmlzI5WjRpYMnCSx2f1ltBea3b3E3OjHyCfsFA9U8VCCp8Er1VUmsX4gRk4xlzgQZHX711I5key7%2Bj0ZmPngyziF1bMAZnYU06xC9kyT9VndxA2hCnjR1Gyrs5sBM3HzVDWqAjLoAfyLD8B3oQinybhVylsY7D%2BHF32ICXt81xPFZ9t6HY0CEpZyH0sxL1CFrB8QyNNRWCnwJB8haaVFbe62cVOrV%2Bt0dDqSPRtJlnzrcyxz%2FMDb3HPcdTcu2sICfam5vfzlszTJTrL5wfWkqyPAojSmVjc0mhoGGn0q8OfFxIuH0H9nxOcu4wtaCgvQY6pgH3rs2ZBq3S1VYrXGfNukMzkdRHO01dLW7iSm9uZXiI0ab1aG%2Bhnodqj9yjMtxSabHQ1xyqYQ0DKjq4ILj%2B%2BfhhPLjWBZgmytgjoRrDQZEQfw3blyMQrQ3lkhc4kbbZENlO2Avs6chMwWW0NQT2bx5v1EPdDeoUvLJKPa%2BaZ9XlyV2%2FlnZrWBRfQ2qx%2FFsyKMqrc1V%2FlLIas2tKR8s9foR6um%2F6%2FRL5&X-Amz-Signature=0a29bcdabb3777ab8300b961e48412dc2de4969046a21b76ad5407cca1d6e4ea&X-Amz-SignedHeaders=host&x-id=GetObject)


![24](/assets/img/2024-12-05-Git-CLI-&-GUI.md/24.png)

1. conflict-1 을 main 에 merge 하시오

      충돌시 conflict-1 을 따름



{% raw %}
```shell
> git branch main
> git merge conflict-1
> git branch -d confilct-1
```
{% endraw %}




{% raw %}
```shell
team: Tigers
manager: Deborah
coach: Grace
```
{% endraw %}



![25](/assets/img/2024-12-05-Git-CLI-&-GUI.md/25.png)

1. conflict-2 를 main 에 rebase 하시오.

      충돌시 conflict-2 를 따름



{% raw %}
```shell
> git branch conflict-2
> git rebase main
> git add .
> git rebase --continue
> git branch main
> git merge confilct-2
> git branch -d confilct-2
```
{% endraw %}



아래 와 같이 나와야 한다.


![26](/assets/img/2024-12-05-Git-CLI-&-GUI.md/26.png)



{% raw %}
```shell
team: Leopards
manager: Nora
coach: Melissa

team: Panthers
manager: Sebastian
coach: Raymond
```
{% endraw %}


