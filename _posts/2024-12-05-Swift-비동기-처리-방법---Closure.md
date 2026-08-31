---
layout: post
date: 2024-12-05
title: "Swift 비동기 처리 방법 - Closure"
tags: [Tips, ]
categories: [Swift, ]
---



#### Closure 클로저 

- Result<Success, Failure> 활용

    Result 는 제너릭 타입을 가진 enum 으로 아래처럼 선택한 case에 맞는 성공데이터 또는 실패 에러코드를 전달 한다.


```swift
@frozen public enum Result<Success, Failure> where Failure : Error, Success : ~Copyable {}

//사용시
.success(BaseListResponse<Todo>)
.fail(ApiError)
```

- Todo 목록을 조회하는 API 호출 함수

```swift
static func fetchTodos(page: Int = 1, completion: @escaping (Result<BaseListResponse<Todo>, ApiError>) -> Void ) {
        
        // 1. urlRequest 를 만든다
        let urlString = baseURL + "/todos" + "?page=\(page)"
        
        guard let url = URL(string: urlString) else {
            return completion(.failure(ApiError.notAllowedUrl))
        }
        
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = "GET"
        urlRequest.addValue("application/json", forHTTPHeaderField: "accept")
        
        // 2. urlSession 으로 API 호출한다.
        // 3. API 호출에 대한 응답을 받는다
        
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
                // convert data to our swift model
                do {
                    //JSON -> Struct 로 변경 즉 디코딩 즉 데이터 파싱
                    let listResponse = try JSONDecoder().decode(BaseListResponse<Todo>.self, from: jsonData)
                    
                    // 상태 코드는 200인데 파싱한 데이터에 따라서 에러처리
                    guard let todos = listResponse.data,
                          !todos.isEmpty else {
                        return completion(.failure(ApiError.noContent))
                    }
                    completion(.success(listResponse))
                    
                } catch {
                    // decoding error
                    completion(.failure(.decodingError))
                }
            }
        }.resume()
    }
```

- 연쇄 API 호출

    할일을 등록후 성공이면 이어서 전체목록을 조회해 오는 연속 API 호출


```swift
static func addATodoAndFetchTodos(title: String,
                                      isDone: Bool = false, completion: @escaping (Result<BaseListResponse<Todo>, ApiError>) -> Void) {
        
        self.addATodo(title: title) { result in
            switch result {
                // 1-1
            case .success(_):
                self.fetchTodos {
                    //2
                    switch $0 {
                        //2-1
                    case .success(let data):
                        completion(.success(data))
                        //2-2
                    case .failure(let err):
                        completion(.failure(err))
                    }
                }
                // 1-2
            case .failure(let err):
                completion(.failure(err))
            }
        }
    }
```

- 동시 API 호출 [Int] 응답 - Dispatch Group 활용

    선택한 할일들을 동시에 삭제후 삭제가 성공한 녀석들만 todoId 값을 [Int] 리턴하는 함수


```swift
static func deleteSelectedTodos(seletedTodoIds: [Int],
                                    completion: @escaping ([Int]) -> Void)  {
        
        let group = DispatchGroup()
        
        // 성공적으로 삭제가 이뤄진 녀석들
        var deletedTodoIds: [Int] = [Int]()
        
        seletedTodoIds.forEach { aTodoId in
            group.enter()
            self.deleteATodo(id: aTodoId) { result in
                switch result {
                case .success(let response):
                    // 삭제된 아이디를 삭제된 아이디 배열에 넣는다
                    if let todoId = response.data?.id {
                        deletedTodoIds.append(todoId)
                        print("inner deleteATodo - success: \(todoId)")
                    }
                case .failure(let failure):
                    print("inner deleteATodo - failure: \(failure)")
                }
            }
            group.leave()
        } // 단일 삭제 API 호출
        
        // configure a completion callback
        group.notify(queue: .main) {
            // all requests completed
            print("모든 api 완료 됨")
            completion(deletedTodoIds)
        }
    }
```

- 동시 API 호출 Result<> 응답 - Dispatch Group 활용

```swift
static func fetchSelectedTodos(seletedTodoIds: [Int],
                                   completion: @escaping (Result<[Todo], ApiError>) -> Void)  {
        
        let group = DispatchGroup()
        
        // 가져온 할일들
        var fetchedTodoIds: [Todo] = [Todo]()
        // 에러들
        var apiErros: [ApiError] = []
        
        seletedTodoIds.forEach { aTodoId in
            group.enter()
            
            self.fetchATodo(id: aTodoId) { result in
                switch result {
                case .success(let response):
                    // 삭제된 아이디를 삭제된 아이디 배열에 넣는다
                    if let todo = response.data {
                        fetchedTodoIds.append(todo)
                        print("inner fetchATodo - success: \(todo)")
                    }
                case .failure(let failure):
                    apiErros.append(failure)
                    print("inner fetchATodo - failure: \(failure)")
                }
            }
            group.leave()
        } // 단일 삭제 API 호출
        
        // configure a completion callback
        group.notify(queue: .main) {
            // all requests completed
            print("모든 api 완료 됨")
            
            // 만약 에러가 있다면 에러 올려주기
            if !apiErros.isEmpty {
                if let firstError = apiErros.first {
                    completion(.failure(firstError))
                    return
                }
            }
            
            completion(.success(fetchedTodoIds))
        }
        
    }
```

