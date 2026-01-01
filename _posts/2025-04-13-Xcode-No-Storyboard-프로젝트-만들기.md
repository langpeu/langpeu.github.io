---
layout: post
date: 2025-04-13
title: "Xcode No Storyboard 프로젝트 만들기"
tags: [Tips, ]
categories: [Swift, Development, ]
---



## 1️⃣ Xcode 에서 프로젝트 생성


![0](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/0.png)



## 2️⃣ Interface 를 Storyboard 로 Language 는 Swift t선택


![1](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/1.png)



## 3️⃣ Main.storyboard 파일 삭제



### Delete to Move to Trash


![2](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/2.png)


![3](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/3.png)



## 4️⃣ Info 파일에서 아래 Storyboard Name 필드 선택후 Back 키로 해당 줄 삭제


![4](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/4.png)


![5](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/5.png)



## 5️⃣ 타겟 프로젝트 Info 탭에 Main storyboard file base name 항목 value 값 “Main” 을 삭제


![6](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/6.png)


![7](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/7.png)



## 6️⃣ SceneDelegate.swift 파일 수정


```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }
        
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = ViewController()
        self.window = window
        window.makeKeyAndVisible()
    }
```



## 7️⃣ AppDelegate 프로젝트로 세팅시

- **SceneDelegate.swift 삭제**
- AppDelegate.swift 수정

```swift
import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        
        window = UIWindow()
        window?.rootViewController = ViewController()
        window?.makeKeyAndVisible()        
        return true
    }

}
```

- Info 내 **Application Scene Manifest** 항목 **Back 키로 전부 삭제**

![8](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/8.png)


![9](/assets/img/2025-04-13-Xcode-No-Storyboard-프로젝트-만들기.md/9.png)



## 8️⃣  이후 빌드하면  ViewController.swift 가 로드됨



#### **이때 어떤 워닝 이나 에러가 뜨면 안됨.**

