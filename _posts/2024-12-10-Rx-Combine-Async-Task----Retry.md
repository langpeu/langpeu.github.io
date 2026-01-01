---
layout: post
date: 2024-12-10
title: "Rx Combine Async Task  - Retry"
tags: [Tips, ]
categories: [Swift, ]
---



## Upstream - Downstream


**1. Upstream (상류)**


•	**데이터를 방출하는 쪽**을 의미합니다.


•	RxSwift에서 Observable 또는 Subject가 upstream의 역할을 합니다.


•	**데이터를 생성하거나 제공**하며, 스트림의 출발점입니다.


•	예: 버튼 탭 이벤트, 네트워크 요청, 데이터베이스에서 읽기 등.


**2. Downstream (하류)**


•	**데이터를 처리하고 소비하는 쪽**을 의미합니다.


•	RxSwift에서 Observer, subscribe(onNext:), 또는 bind가 downstream의 역할을 합니다.


•	upstream에서 내려온 데이터를 **가공하거나 최종적으로 사용**하는 단계입니다.


•	예: UI 업데이트, 로그 출력, 데이터 저장 등.


아래 .retry 기준 위에는 Upstream, 아래는 Downstream 으로 구분 짓는다.


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



## Rx - Retry


에러가 들어왔을때 재요청이 목적



### .retry(횟수)


retry 는 에러 발생시 자동으로 타게 된다.


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



### .retry(when: < (Observable<Error>) -> ObservableType )


에러가 발생 했을때 retry 타고 들어오는데


이때 when 을 사용하면 Observable<Error> 를 받아와 별도 처리를 할 수 있다. 



### .take(횟수)


이때 take 를 사용하면 횟수 제한을 걸 수 있다.


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



### .retry 안에 별도 변수 사용해여 조건 걸기


아래처럼 호출 카운트 변수를 사용하여 호출 수를 제안 할 수 있다. 


그리고 throw err 를 통해 subscribe 에 onError 를 넘길 수 있다.


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



### .delay 를 넣어서 호출간에 지연을 넣을 수 있다.


```swift
return Observable<Void>.just(())
                       .delay(.seconds(3), scheduler: MainScheduler.instance)
```



### 특정 에러, noContent 에러일때 리트라이 3회 실행하게 해보기


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



### if case 를 사용해 간결하게 변경 가능


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



### extension 확장 


retry 활용


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



### Extension 확장


catch 활용


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


when 클로저를 옵셔널로 처리.  필수가 아니게 변경


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



## Reminder



### .just(())

- .just(())에서 ()는 **Swift에서 “빈 값”을 나타내는 특별한 타입**인 **Unit 타입**을 의미합니다.
- 빈 값을 방출하고 싶을 때 사용되며, 보통 이벤트 발생 자체에 초점이 맞춰져 있는 경우 활용됩니다.
1. Void **타입의 값**:

  Swift에서 Void는 사실 빈 튜플 ()로 정의되어 있습니다.


```swift
typealias Void = ()
```

1. **구조적인 일관성 유지**:

입력/출력이 필요 없는 곳에서도 Observable 체인을 유지하기 위해 사용합니다.


**실전 예시**


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



## Combine - Retry


retry / delay 사용


```swift
TodosAPI.fetchTodosWithPublisher(page: 800)
            .delay(for: 3, scheduler: DispatchQueue.main)
            .retry(3)
            .sink { completion in
                switch completion {
                case .finished:
                    print("finished")
                case .failure(let failure):
                    print("failure: \(failure)")
                }
            } receiveValue: { (response: BaseListResponse<Todo>) in
                print("response: \(response)")
            }.store(in: &subscriptions)
```


trayCatch 사용


```swift
TodosAPI.fetchTodosWithPublisher(page: 800)
            .tryCatch({ errPublisher in
                return Just(())
                    .delay(for: 3, scheduler: DispatchQueue.main)
                    .flatMap { _ in
                        return TodosAPI.fetchTodosWithPublisher(page: 800)
                    }
                    .retry(retryCount)
                    .eraseToAnyPublisher()
            })
            .sink { completion in
                switch completion {
                case .finished:
                    print("finished")
                case .failure(let failure):
                    print("failure: \(failure)")
                }
            } receiveValue: { (response: BaseListResponse<Todo>) in
                print("response: \(response)")
            }.store(in: &subscriptions)
```



### Extension  - generic 으로 확장


tryCatch


```swift
//MARK: - Combine retry
extension Publisher {
    func retryWithDelayAndCondition<T, E>(retryCount: Int = 1,
                                          delay: Int = 1,
                                          when: ((Error) -> Bool)? = nil) ->
    Publishers.TryCatch<Self, AnyPublisher<T, E>> where T == Self.Output, E == Self.Failure
    {
        return self.tryCatch({ err -> AnyPublisher<T, E> in
            // 조건
            guard (when?(err) ?? true) else {
                throw err
            }
            
            return Just(())
                .delay(for: .seconds(delay), scheduler: DispatchQueue.main)
                .flatMap { _ in
                    return self
                }
                .retry(retryCount)
                .eraseToAnyPublisher()
            })
    }
}
```


에러가 noContent 일때 2초다마 총 3회 실행


```swift
TodosAPI.fetchTodosWithPublisher(page: 800)
            .retryWithDelayAndCondition(retryCount: 3, delay: 2, when: { err in
                if case TodosAPI.ApiError.noContent = err {
                    return true
                }
                return false
            })
            .sink { completion in
                switch completion {
                case .finished:
                    print("finished")
                case .failure(let failure):
                    print("failure: \(failure)")
                }
            } receiveValue: { (response: BaseListResponse<Todo>) in
                print("response: \(response)")
            }.store(in: &subscriptions)
```



## Async - Retry


간단한 Async 에서 Retry 해보기


```swift
let retryCount: Int = 3
        
        Task {
	          //횟수
            for _ in 0...retryCount {
                do {
                    let result = try await TodosAPI.fetchTodosWithAsync(page: 800)
                    print("result: \(result)")
                }catch {
                    print("error: \(error)")
                    
                    // 특정 조건일때
                    guard case TodosAPI.ApiError.noContent = error else {
                        throw error
                    }
                    
                    print("throw: \(error)")
                    // 딜레이
                    try await Task.sleep(nanoseconds: UInt64(3 * 1_000_000_000))
                    // 위로
                    continue
                }
            }
            
        }
```



### Extension 확장


```swift
//MARK: - Async Retry

extension Task where Failure == Error {
    enum TaskRetryError : Error {
        case maxRetryRequest
    }
    
    static func retry(retryCount: Int = 1,
                      delay: Int = 1,
                      when: ((Error) -> Bool)? = nil,
                      asyncWork: @Sendable @escaping () async throws -> Success
    ) -> Task {
        
        // 횟수, 딜레이, 조건
        return Task {
            for _ in 0...retryCount {
                do {
                    //성공시 리턴
                    let result = try await asyncWork()
                    print("retry - result: \(result)")
                    return result
                }catch {
                    print("retry - error: \(error)")
                    
                    // 특정 조건일때
                    guard (when?(error) ?? true) else {
                        throw error
                    }
                    
                    // 딜레이
                    try await Task<Never, Never>.sleep(nanoseconds: UInt64(delay * 1_000_000_000))
                    // 위로
                    continue
                }
            }
            
            throw TaskRetryError.maxRetryRequest
        }//TASK
    }
}
```


Task.retry 는 asyncWork 의 task 를 리턴한다.


```swift
let fetchTodosTask = Task.retry(retryCount: 3,
                                        delay: 2,
                                        when: { err in
            if case TodosAPI.ApiError.noContent = err {
                return true
            }
            return false
        }, asyncWork: {
            try await TodosAPI.fetchTodosWithAsync(page:800)
        })
        
        Task {
            do {
                let result = try await fetchTodosTask.value
                print("retry - result call: \(result)")
            }catch{
                print("retry - error call: \(error)")
            }
        }
```


when 없이 사용


```swift
let fetchTodosTask = Task.retry(retryCount: 3,
                                        delay: 2, asyncWork: {
                                 try await TodosAPI.fetchTodosWithAsync(page:800)
                             })
   
        Task {
            do {
                let result = try await fetchTodosTask.value
                print("retry - result call: \(result)")
            }catch{
                print("retry - error call: \(error)")
            }
        }
```



## Reminder



### **@frozen의 용도**


@frozen은 ABI(애플리케이션 바이너리 인터페이스) 안정성을 보장하고 컴파일러 최적화를 가능하게 하며, 타입이 변경되지 않을 것을 명시적으로 선언할 때 사용됩니다. 하지만 라이브러리와 프레임워크에서 주로 사용되며, 일반적인 애플리케이션 코드에서는 잘 사용되지 않는 경우가 많습니다.


1.	**라이브러리와 프레임워크 개발**:


    • 라이브러리를 제공하는 개발자가 특정 타입의 ABI 안정성을 보장하고, 클라이언트 코드와의 호환성을 유지하고자 할 때 사용됩니다.


    • 예: 표준 라이브러리의 열거형 및 구조체(예: Optional, Result)는 대부분 @frozen으로 선언되어 있습니다.


2.	**컴파일러 최적화**:


    • 컴파일러는 @frozen 타입의 변경 가능성이 없다고 가정하고, 코드 크기를 줄이고 성능을 최적화할 수 있습니다.


3.	**불변성 표현**:


    • 개발자는 의도적으로 해당 타입이 변경되지 않을 것임을 명시하고 싶을 때 사용합니다.


**제약 및 주의사항**


1.	**소스 코드 호환성 문제**:


    • @frozen으로 선언된 타입은 ABI 안정성을 유지해야 하므로, 이후에 변경하려고 하면 문제가 발생합니다.


2.	**열거형의** @frozen**과 Switch**:


    • @frozen 열거형을 사용할 때, switch 구문은 모든 케이스를 명시해야 합니다.


    • 예를 들어:


```swift
func handleDirection(_ direction: Direction) {
    switch direction {
    case .north:
        print("Going north")
    case .south:
        print("Going south")
    case .east:
        print("Going east")
    case .west:
        print("Going west")
    // 컴파일러는 더 이상 `default` 필요 없다고 판단
    }
}
```


3.	**변경 가능성 제한**:


    • 타입 설계 시 장기적인 유지보수를 고려해야 하며, @frozen은 수정이 어려워지므로 신중히 사용해야 합니다.

