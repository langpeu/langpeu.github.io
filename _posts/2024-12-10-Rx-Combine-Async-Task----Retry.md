---
layout: post
date: 2024-12-10
title: "Rx Combine Async Task  - Retry"
tags: [Tips, ]
categories: [Swift, ]
---



## Upstream - Downstream


아래 .retry 기준 위에는 Upstream, 아래는 Downstream 으로 구분 짓는다.



{% raw %}
```swift
TodosAPI.fetchTodosWithObservable(page: 800)
----------------↑ Upstream ↑-----------------
            .retry(3)
---------------↓ Downstream ↓-----------------
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
```
{% endraw %}




## Rx - Retry



### .retry(횟수)


retry 는 에러 발생시 자동으로 타게 된다.



{% raw %}
```swift
TodosAPI.fetchTodosWithObservable(page: 800)
            .retry(3)
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
```
{% endraw %}




### .retry(when: < (Observable<Error>) -> ObservableType )


에러가 발생 했을때 retry 타고 들어오는데


이때 when 을 사용하면 Observable<Error> 를 받아와 별도 처리를 할 수 있다. 



### .take(횟수)


이때 take 를 사용하면 횟수 제한을 걸 수 있다.



{% raw %}
```swift
TodosAPI.fetchTodosWithObservable(page: 800)
            .retry(when: { (observableErr: Observable<Error>) in
                observableErr
                    .do { err in
                        print("observableErr - err: \(err) requestCount:\(requestCount)")
                    }
                    .take(3)
            })
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
```
{% endraw %}




### .retry 안에 별도 변수 사용해여 조건 걸기


아래처럼 호출 카운트 변수를 사용하여 호출 수를 제안 할 수 있다. 


그리고 throw err 를 통해 subscribe 에 onError 를 넘길 수 있다.



{% raw %}
```swift
        var requestCount: Int = 1
        var retryCount: Int = 3
        
        TodosAPI.fetchTodosWithObservable(page: 800)
            .retry(when: { (observableErr: Observable<Error>) in
                observableErr
                    .do { err in
                        print("observableErr - err: \(err) requestCount:\(requestCount)")
                    }
                    .flatMap { err in
                        guard requestCount < retryCount else {
                            throw err
                        }
                        requestCount += 1
                        return Observable<Void>.just(())
                    }
            })
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
```
{% endraw %}




### .delay 를 넣어서 호출간에 지연을 넣을 수 있다.



{% raw %}
```swift
return Observable<Void>.just(())
                       .delay(.seconds(3), scheduler: MainScheduler.instance)
```
{% endraw %}




### 특정 에러, noContent 에러일때 리트라이 3회 실행하게 해보기



{% raw %}
```swift
TodosAPI.fetchTodosWithObservable(page: 1)
            .retry(when: { (observableErr: Observable<Error>) in
                observableErr
                    .do { err in
                        print("observableErr - err: \(err) requestCount:\(requestCount)")
                    }
                    .flatMap { err in
                        if let apiErr = err as? TodosAPI.ApiError {
                            switch apiErr {
                            case .noContent:
                                return Observable<Void>
                                    .just(())
                                    .delay(.seconds(3), scheduler: MainScheduler.instance)
                            default: break
                            }
                        }
                        throw err
                    }
                    .take(3)
            })
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
```
{% endraw %}




### if case 를 사용해 간결하게 변경 가능



{% raw %}
```swift
TodosAPI.fetchTodosWithObservable(page: 1)
            .retry(when: { (observableErr: Observable<Error>) in
                observableErr
                    .do { err in
                        print("observableErr - err: \(err) requestCount:\(requestCount)")
                    }
                    .flatMap { err in
                        if case TodosAPI.ApiError.noContent = err {
                            return Observable<Void>
                                .just(())
                                .delay(.seconds(3), scheduler: MainScheduler.instance)
                        }
                        throw err
                    }
                    .take(3)
            })
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
```
{% endraw %}




### extension 확장 


retry 활용



{% raw %}
```swift
extension ObservableType {
    
    //@escaping 키워드는 클로저가 함수의 실행이 끝난 후에도 캡처되어 사용될 수 있음을 나타내느것인데
    //옵셔널 클로저는 @escaping 이 기본으로 들어가 있기에 (Error) -> Bool)? = nil 변경후에는 필요가 없다
    func retryWithDelayAndCondition(retryCount: Int = 1, delay : Int = 1, when: ((Error) -> Bool)? = nil) -> Observable<Element> {
        // 횟수, 딜레이
        var requestCount : Int = 0
        return self.retry(when: { (observableErr: Observable<Error>) in
                observableErr
                    .do { err in
                        print("observableErr - err: \(err) requestCount:\(requestCount)")
                    }
                    .flatMap { err in
                    
                        // 에러 -> Boolean 여부
                        if !(when?(err) ?? true) {
                           throw err
                        }
                        
                        requestCount += 1
                                                
                        return Observable<Void>
                            .just(())
                            .delay(.seconds(delay), scheduler: MainScheduler.instance)
                    }
                    .take(retryCount)
            })
    }
}
```
{% endraw %}




### Extension 확장


catch 활용



{% raw %}
```swift
extension ObservableType {
    
    //Catch를 사용해 에러 처리하기
    func retryWithDelayAndConditionCatch(retryCount: Int = 1, delay : Int = 1, when: ((Error) -> Bool)? = nil) -> Observable<Element> {
        // 횟수, 딜레이
        var requestCount : Int = 0
        return self.catch { err -> Observable<Element> in
            
            // 에러 -> Boolean 여부
            if !(when?(err) ?? true) {
               throw err
            }
            
            return Observable<Void>
                .just(())
                .delay(.seconds(delay), scheduler: MainScheduler.instance)
                .flatMap { _ in
                    requestCount += 1
                    print("requestCount: \(requestCount)")
                    return self
                }.retry(retryCount)
        }
    }
}
```
{% endraw %}



when 클로저를 옵셔널로 처리.  필수가 아니게 변경



{% raw %}
```swift
TodosAPI.fetchTodosWithObservable(page: 800)
            //지정된 카운트,딜레이 만큼 고정으로 재호출
            .retryWithDelayAndCondition(retryCount: 3, delay: 2)
            //Api retry 조건을 클로저로 추가함
            .retryWithDelayAndCondition(retryCount: 3, delay: 2, when: { err in
                print("err: \(err)")
                if case TodosAPI.ApiError.noContent = err {
                    return true
                }
                return false
            })
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
```
{% endraw %}




## Reminder



### .just(())

- .just(())에서 ()는 **Swift에서 “빈 값”을 나타내는 특별한 타입**인 **Unit 타입**을 의미합니다.
- 빈 값을 방출하고 싶을 때 사용되며, 보통 이벤트 발생 자체에 초점이 맞춰져 있는 경우 활용됩니다.
1. Void **타입의 값**:

  Swift에서 Void는 사실 빈 튜플 ()로 정의되어 있습니다.



{% raw %}
```swift
typealias Void = ()
```
{% endraw %}


1. **구조적인 일관성 유지**:

입력/출력이 필요 없는 곳에서도 Observable 체인을 유지하기 위해 사용합니다.


**실전 예시**



{% raw %}
```swift
// 1. 특정 작업이 완료되었음을 알림
let observable = Observable<Void>.just(())
observable.subscribe(onNext: { _ in
    print("Task completed!")
})

// 2. Trigger 역할
let trigger = Observable<Void>.just(())
trigger.subscribe(onNext: { _ in
    print("Triggered an action!")
})
```
{% endraw %}


