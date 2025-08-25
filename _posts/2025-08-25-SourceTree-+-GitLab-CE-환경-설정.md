---
layout: post
date: 2025-08-25
title: "SourceTree + GitLab CE 환경 설정"
tags: [Tips, ]
categories: [DevOps, ]
---


좋습니다 🙆 GitLab CE + SourceTree 최신 버전 조합에서 **계정(Account) 등록은 불가능**하므로, 대신 **Working Copy 방식**으로만 안정적으로 사용하는 방법을 정리해드릴게요.


---



## **✅ SourceTree + GitLab CE 환경 설정 체크리스트**


---



### **1. SSH 키 생성 및 등록**

1. 로컬에서 키 생성


{% raw %}
```plain text
ssh-keygen -t ed25519 -C "you@example.com"
```
{% endraw %}


1. → ~/.ssh/id_ed25519 (개인키), id_ed25519.pub (공개키)
2. 공개키 등록
    - GitLab CE → **User Settings → SSH Keys** → id_ed25519.pub 내용 붙여넣기

---



### **2. SSH Config 작성 (포트 9022 대응)**


~/.ssh/config 파일 생성/수정:



{% raw %}
```plain text
Host git.xx.com
  HostName git.xx.com
  User git
  Port 9022
  IdentityFile ~/.ssh/id_ed25519
```
{% endraw %}



→ 이렇게 해두면 git@git.xx.com:group/repo.git 주소만 써도 자동으로 9022로 접속됨.


---



### **3. 연결 테스트**



{% raw %}
```plain text
ssh -T git@git.xx.com
```
{% endraw %}



→ 성공 시:



{% raw %}
```plain text
Welcome to GitLab, @username!
```
{% endraw %}



---



### **4. Git Clone & SourceTree 등록**

1. Clone (SSH 주소 사용)


{% raw %}
```plain text
git clone git@git.xx.com:username/bitapi.git
```
{% endraw %}


1. 
2. SourceTree → **Add Working Copy** → 로컬 경로 지정
3. 이제 Push/Pull/Fetch 모두 SSH로 동작

---



### **5. SourceTree에서 주의할 점**

- **Accounts → GitLab CE 계정 등록은 건너뛴다**

    (PAT 기반 API 연동 불가)

- 대신 Working Copy만 관리 → 브랜치/커밋/푸시 모두 가능
- Merge Request, 이슈, 아바타 같은 API 기반 기능은 표시 안 됨

---



### **6. 추가 팁**

- 키 암호(passphrase)를 설정했을 경우 → ssh-agent 실행 + ssh-add ~/.ssh/id_ed25519 등록
- 여러 GitLab CE 서버를 쓰는 경우 → ~/.ssh/config에 Host 블록 여러 개 작성
- SourceTree에서 원격 URL은 반드시 **SSH 주소**로 (https:// 말고 git@...:)

---



## **📌 최종 요약**

- GitLab CE + SourceTree 최신 버전 = **계정(Account) 등록 불가**
- **SSH 키 등록 + SSH Config + Working Copy 추가** 방식으로 사용
- Git 기능(Push/Pull/Branch)은 정상 동작
- GitLab API 기능(MR/이슈/프로필)은 불가

---

