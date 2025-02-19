---
layout: post
date: 2024-12-08
title: "Rx ↔ Combine"
tags: [Tips, ]
categories: [Swift, ]
---



## Rx ↔ Combine 변환  feat. RxCombine


RxCombine 라이브러리 사용


[https://github.com/CombineCommunity/RxCombine](https://github.com/CombineCommunity/RxCombine)



{% raw %}
```swift
.package(url: "https://github.com/CombineCommunity/RxCombine.git", from: "1.6.0")
```
{% endraw %}




{% raw %}
```swift
TodosAPI.fetchTodosWithPublisher(page: 1)
            .asObservable()
            .subscribe (onNext: {
                print("onNext \($0)")
            }, onError: {
                print("onError \($0)")
            }, onCompleted: {
                print("onCompleted")
            }, onDisposed: {
                print("onDisposed")
            }).disposed(by: disposeBag)
        
        
        
        TodosAPI.fetchTodosWithObservable(page: 1)
            .publisher
            .sink { completion in
                switch completion {
                case .finished:
                    print("finished")
                case .failure(let failure):
                    print("failure: \(failure)")
                }
            } receiveValue: { response in
                print("response:\(response)")
            }.store(in: &subscriptions)
```
{% endraw %}




{% raw %}
```swift
static func fetchTodosWithPublisher(page: Int = 1) -> AnyPublisher<BaseListResponse<Todo>, ApiError> {
        
        let urlString = baseURL + "/todos" + "?page=\(page)"
        guard let url = URL(string: urlString) else {
            return Fail(error: ApiError.notAllowedUrl).eraseToAnyPublisher()
        }
        
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = "GET"
        urlRequest.addValue("application/json", forHTTPHeaderField: "accept")
        
         return URLSession.shared.dataTaskPublisher(for: urlRequest)
            .tryMap({ (data: Data, response: URLResponse) -> Data in
                print("data: \(data)")
                print("response: \(response)")
                
             
                 guard let httpResponse = response as? HTTPURLResponse else {
                    print("bad status code")
                    
                    throw ApiError.unknown(nil)
                }
                
                switch httpResponse.statusCode {
                case 401:
                    throw ApiError.unauthorized
                default: print("default")
                }
                
                if !(200...299).contains(httpResponse.statusCode) {
                    throw ApiError.badStatus(code: httpResponse.statusCode)
                }
                
               return data
            })
            
            .decode(type: BaseListResponse<Todo>.self, decoder: JSONDecoder()) //JSON -> Struct 로 변경 즉 디코딩 즉 데이터 파싱
            .tryMap({ response in // 상태 코드는 200인데 파싱한 데이터에 따라서 에러처리
                guard let todos = response.data,
                        !todos.isEmpty
                else {
                    throw ApiError.noContent
                }
                
                return response
            })
            .mapError({ err -> ApiError in
                if let error = err as? ApiError { // ApiError 에러라면
                    return error
                }
                
                if let _ = err as? DecodingError { // 디코딩 에 러라면
                    return ApiError.decodingError
                }
                
                return ApiError.unknown(nil)
            })
            .eraseToAnyPublisher()
        
    }
```
{% endraw %}




{% raw %}
```swift
static func fetchTodosWithObservable(page: Int = 1) -> Observable<BaseListResponse<Todo>> {
        
        let urlString = baseURL + "/todos" + "?page=\(page)"
        guard let url = URL(string: urlString) else {
            return Observable.error(ApiError.notAllowedUrl)
        }
        
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = "GET"
        urlRequest.addValue("application/json", forHTTPHeaderField: "accept")
         
        return URLSession.shared.rx.response(request: urlRequest)
            .map({
                (response: HTTPURLResponse, data: Data) -> BaseListResponse<
                    Todo
                > in
                print("data: \(data)")
                print("response: \(response)")
                
                guard let httpResponse = response as? HTTPURLResponse else {
                    print("bad status code")
                    
                    throw ApiError.unknown(nil)
                }
                
                switch httpResponse.statusCode {
                case 401:
                    throw ApiError.unauthorized
                default: print("default")
                }
                
                if !(200...299).contains(httpResponse.statusCode) {
                    throw ApiError.badStatus(code: httpResponse.statusCode)
                }
                
                do {
                    //JSON -> Struct 로 변경 즉 디코딩 즉 데이터 파싱
                    let listResponse = try JSONDecoder().decode(
                        BaseListResponse<Todo>.self, from: data)
                    
                    // 상태 코드는 200인데 파싱한 데이터에 따라서 에러처리
                    guard let todos = listResponse.data,
                          !todos.isEmpty
                    else {
                        throw ApiError.noContent
                    }
                    return listResponse
                    
                } catch {
                    // decoding error
                    throw ApiError.decodingError
                }
            })
    }
```
{% endraw %}


