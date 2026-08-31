---
layout: post
date: 2024-12-06
title: "Closure to Async"
tags: [Tips, ]
categories: [Swift, ]
---



## Closure  함수를 Async 로 변경



### continuation 활용


```swift
/// 모든 할 일 목록 가져오기
    static func fetchTodos(page: Int = 1, completion: @escaping (Result<BaseListResponse<Todo>, ApiError>) -> Void ) {
        // 1. urlRequest 를 만든다
        let urlString = baseURL + "/todos" + "?page=\(page)"
        
        guard let url = URL(string: urlString) else {
            return completion(.failure(ApiError.notAllowedUrl))
        }
        
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = "GET"
        urlRequest.addValue("application/json", forHTTPHeaderField: "accept")
        
         URLSession.shared.dataTask(with: urlRequest) { data, response, err in
            if let error = err {
                return completion(.failure(ApiError.unknown(error)))
            }
            guard let httpResponse = response as? HTTPURLResponse else {
                print("bad status code")
                return completion(.failure(ApiError.unknown(nil)))
            }
            
            switch httpResponse.statusCode {
            case 401:
                return completion(.failure(ApiError.unauthorized))
            default: print("default")
            }
            
            if !(200...299).contains(httpResponse.statusCode) {
                return completion(.failure(ApiError.badStatus(code: httpResponse.statusCode)))
            }
            
            if let jsonData = data {
                do {
                    let listResponse = try JSONDecoder().decode(BaseListResponse<Todo>.self, from: jsonData)
                    guard let todos = listResponse.data,
                          !todos.isEmpty else {
                        return completion(.failure(ApiError.noContent))
                    }
                    completion(.success(listResponse))
                } catch {
                    completion(.failure(.decodingError))
                }
            }
            
        }.resume()
    }
```



### flatMap


아래 코드는 버튼 탭을 하면 Int 값을 전달하는 Observalble 을 생성가고, 그걸 구독하고 있다.


두번 탭을 통해 스트림 여러개가 누락없이 전부 오는것을 볼 수 있다.


```swift
testBtn.rx.tap
            .scan(0) { aNumber, _ -> Int in
                print("tapped")
                return aNumber + 1
            }.flatMap { tapNumber -> Observable<Int> in
                Observable<Int>.interval(.seconds(1), scheduler: MainScheduler.instance)
                    .do(onNext: { intervalNumber in
                        print(#line, "tapNumber: \(tapNumber) - inervalNumber: \(intervalNumber)")
                    })
            }.subscribe(onNext: { intervalNumber in
                // print(#line, "- \(intervalNumber)") (보기 편하게 주석 처리함)
            }).disposed(by: distposeBag)
```


```swift
tapped 첫 탭
44 tapNumber: 1 - inervalNumber: 0
44 tapNumber: 1 - inervalNumber: 1
44 tapNumber: 1 - inervalNumber: 2
44 tapNumber: 1 - inervalNumber: 3
tapped 두번째 탭
44 tapNumber: 1 - inervalNumber: 4
44 tapNumber: 2 - inervalNumber: 0
44 tapNumber: 1 - inervalNumber: 5
44 tapNumber: 2 - inervalNumber: 1
44 tapNumber: 1 - inervalNumber: 6
44 tapNumber: 2 - inervalNumber: 2
44 tapNumber: 1 - inervalNumber: 7
44 tapNumber: 2 - inervalNumber: 3
44 tapNumber: 1 - inervalNumber: 8
```



### flatMapLatest


동일하게 두번 탭을 해서 Observable 이 2개 생성되었지만


최신 생성한 두번째 탭 이벤트만 전달 하는걸 볼 수 있다.


```swift
testBtn.rx.tap
                    .scan(0) { aNumber, _ -> Int in
                        print("tapped")
                        return aNumber + 1
                    }.flatMapLatest { tapNumber -> Observable<Int> in
                        Observable<Int>.interval(.seconds(1), scheduler: MainScheduler.instance)
                            .do(onNext: { intervalNumber in
                                print(#line, "tapNumber: \(tapNumber) - inervalNumber: \(intervalNumber)")
                            })
                    }.subscribe(onNext: { intervalNumber in
                        // print(#line, "- \(intervalNumber)")
                    }).disposed(by: distposeBag)
```


```swift
tapped 첫 탭
57 tapNumber: 1 - inervalNumber: 0
57 tapNumber: 1 - inervalNumber: 1
57 tapNumber: 1 - inervalNumber: 2
57 tapNumber: 1 - inervalNumber: 3
tapped 두번째 탭
57 tapNumber: 2 - inervalNumber: 0
57 tapNumber: 2 - inervalNumber: 1
57 tapNumber: 2 - inervalNumber: 2
57 tapNumber: 2 - inervalNumber: 3
57 tapNumber: 2 - inervalNumber: 4
```



## Combine



### flatMap


RxSwift 와 동일하게 사용하면 된다.


```swift
testBtn.tapPublisher
                    .handleEvents(receiveOutput: {
                        print("tapped")
                    })
                    .scan(0) { aNumber, _ -> Int in
                        return aNumber + 1
                    }
                    .flatMap { tapNumber -> AnyPublisher<Int, Never> in
                        Timer.publish(every: 1, on: .main, in: .common).autoconnect()
                            .scan(0) { aNumber, _ -> Int in
                                return aNumber + 1
                            }
                            .handleEvents(receiveOutput: { intervalNumber in
                                print(#line, "tapNumber: \(tapNumber) - intervalNumber: \(intervalNumber)")
                            }).eraseToAnyPublisher()
                    }
                    .sink(receiveValue: { intervalNumber in
                        //print(#line, "- \(intervalNumber)")
                    }).store(in: &subscriptions)
```


```swift
tapped
77 tapNumber: 1 - intervalNumber: 1
77 tapNumber: 1 - intervalNumber: 2
77 tapNumber: 1 - intervalNumber: 3
77 tapNumber: 1 - intervalNumber: 4
tapped
77 tapNumber: 1 - intervalNumber: 5
77 tapNumber: 2 - intervalNumber: 1
77 tapNumber: 1 - intervalNumber: 6
77 tapNumber: 2 - intervalNumber: 2
77 tapNumber: 1 - intervalNumber: 7
77 tapNumber: 2 - intervalNumber: 3
77 tapNumber: 1 - intervalNumber: 8
```



#### flatMapLatest


flatMap → map 으로 변경


.sink 위에 .switchToLatest() 를 추가 해야 한다.


```swift
testBtn.tapPublisher
                    .handleEvents(receiveOutput: {
                        print("tapped")
                    })
                    .scan(0) { aNumber, _ -> Int in
                        return aNumber + 1
                    }
                    .map { tapNumber -> AnyPublisher<Int, Never> in
                        Timer.publish(every: 1, on: .main, in: .common).autoconnect()
                            .scan(0) { aNumber, _ -> Int in
                                return aNumber + 1
                            }
                            .handleEvents(receiveOutput: { intervalNumber in
                                print(#line, "tapNumber: \(tapNumber) - intervalNumber: \(intervalNumber)")
                            }).eraseToAnyPublisher()
                    }
                    .switchToLatest()
                    .sink(receiveValue: { intervalNumber in
                        //print(#line, "- \(intervalNumber)")
                    }).store(in: &subscriptions)
```


```swift
tapped
98 tapNumber: 1 - intervalNumber: 1
98 tapNumber: 1 - intervalNumber: 2
98 tapNumber: 1 - intervalNumber: 3
98 tapNumber: 1 - intervalNumber: 4
tapped
98 tapNumber: 2 - intervalNumber: 1
98 tapNumber: 2 - intervalNumber: 2
98 tapNumber: 2 - intervalNumber: 3
98 tapNumber: 2 - intervalNumber: 4
```

