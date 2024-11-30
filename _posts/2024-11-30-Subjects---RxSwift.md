---
layout: post
date: 2024-11-30
title: "Subjects - RxSwift"
tags: [Tips, ]
categories: [RxSwift, ]
---


![0](/assets/img/2024-11-30-Subjects---RxSwift.md/0.png)



### Subjects


Observable + Observer 역학을 모두 가지고 있다

- PublishSubject : Subject 로 전달되는 새로운 이벤트를 구독자에게 전달
- BehaviorSubject : 생성시점 시작 이벤트 지정함, Subject로 넘어오는 가장 마지막 최신 이벤트를 저장해 뒀다, 새로운 구독자에게 전달
- ReplaySubject : 하나 이상의 최신 이벤트를 버퍼에 저장, Observer가 구독을 시작하면 전부 전달
- AsyncSubject : Subject로 complete 가 호출될때 마지막 이벤트 전달


#### Relay


일반적 Subject와 달리 Next 이벤트만 받고, 나머지 Complete와 Error 이벤트는 받지 않음,


주로 종료없이 순차적으로 전달되는 이벤트에 사용

- PublishRelay : PublishSubject를 wrapping 한것
- BehaviorRelay: BehaviorSubject를 wrapping 한것

플레이 그라운드에서 아래 extension 세팅후 샘플 코드 시작



{% raw %}
```swift
extension ObservableType {
    
    /**
     Add observer with `id` and print each emitted event.
     - parameter id: an identifier for the subscription.
     */
    func addObserver(_ id: String) -> Disposable {
        subscribe { print("Subscription:", id, "Event:", $0) }
    }
    
}

func writeSequenceToConsole<Source: ObservableType>(name: String, sequence: Source) -> Disposable {
    return sequence.subscribe { event in
        print("Subscription: \(name), event: \(event)")
    }
}
```
{% endraw %}




#### PublishSubject


구독 시점부터 모든 옵저버에게 새로운 이벤트를 전달합니다.



{% raw %}
```swift
example("PublishSubject") {
    let disposeBag = DisposeBag()
    let subject = PublishSubject<String>()
    
    subject.addObserver("1").disposed(by: disposeBag)
    subject.onNext("🐶")
    subject.onNext("🐱")
    
    subject.addObserver("2").disposed(by: disposeBag)
    subject.onNext("🅰️")
    subject.onNext("🅱️")
}
```
{% endraw %}




{% raw %}
```swift
--- PublishSubject example ---
Subscription: 1 Event: next(🐶)
Subscription: 1 Event: next(🐱)
Subscription: 1 Event: next(🅰️)
Subscription: 2 Event: next(🅰️)
Subscription: 1 Event: next(🅱️)
Subscription: 2 Event: next(🅱️)
```
{% endraw %}



이 예제에서는 onNext(_:) 편의 메서드 사용을 소개합니다. 이는 on(.next(_))와 동일하며, 제공된 요소를 포함한 새로운 Next 이벤트를 구독자에게 전달합니다.
이와 유사하게 onError(_:)와 onCompleted() 편의 메서드도 제공되며, 이는 각각 on(.error(_:))와 on(.completed)에 해당합니다.



#### ReplaySubject


새로운 이벤트를 모든 구독자에게 전달하며, 새 구독자에게는 지정된 bufferSize만큼의 이전 이벤트도 전달합니다.



{% raw %}
```swift
example("ReplaySubject") {
    let disposeBag = DisposeBag()
    let subject = ReplaySubject<String>.create(bufferSize: 1)
    
    subject.addObserver("1").disposed(by: disposeBag)
    subject.onNext("🐶")
    subject.onNext("🐱")
    
    subject.addObserver("2").disposed(by: disposeBag)
    subject.onNext("🅰️")
    subject.onNext("🅱️")
}
```
{% endraw %}




{% raw %}
```swift
--- ReplaySubject example ---
Subscription: 1 Event: next(🐶)
Subscription: 1 Event: next(🐱)
Subscription: 2 Event: next(🐱)
Subscription: 1 Event: next(🅰️)
Subscription: 2 Event: next(🅰️)
Subscription: 1 Event: next(🅱️)
Subscription: 2 Event: next(🅱️)
```
{% endraw %}




#### BehaviorSubject


새로운 이벤트를 모든 구독자에게 전달하며, 새 구독자에게는 가장 최근의 값(또는 초기 값)을 전달합니다.



{% raw %}
```swift
example("BehaviorSubject") {
    let disposeBag = DisposeBag()
    let subject = BehaviorSubject(value: "🔴")
    
    subject.addObserver("1").disposed(by: disposeBag)
    subject.onNext("🐶")
    subject.onNext("🐱")
    
    subject.addObserver("2").disposed(by: disposeBag)
    subject.onNext("🅰️")
    subject.onNext("🅱️")
    
    subject.addObserver("3").disposed(by: disposeBag)
    subject.onNext("🍐")
    subject.onNext("🍊")
}
```
{% endraw %}




{% raw %}
```swift
--- BehaviorSubject example ---
Subscription: 1 Event: next(🔴)
Subscription: 1 Event: next(🐶)
Subscription: 1 Event: next(🐱)
Subscription: 2 Event: next(🐱)
Subscription: 1 Event: next(🅰️)
Subscription: 2 Event: next(🅰️)
Subscription: 1 Event: next(🅱️)
Subscription: 2 Event: next(🅱️)
Subscription: 3 Event: next(🅱️)
Subscription: 1 Event: next(🍐)
Subscription: 2 Event: next(🍐)
Subscription: 3 Event: next(🍐)
Subscription: 1 Event: next(🍊)
Subscription: 2 Event: next(🍊)
Subscription: 3 Event: next(🍊)
```
{% endraw %}



이전 예제들에서 빠져있는 것을 보셨나요? **Completed 이벤트**입니다.


PublishSubject, ReplaySubject, 그리고 BehaviorSubject는 해제(Dispose)될 때 자동으로 **Completed 이벤트**를 방출하지 않습니다.


출처: 


[link_preview](https://github.com/ReactiveX/RxSwift)

