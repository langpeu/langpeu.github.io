---
layout: post
date: 2024-12-06
title: "URLSession Cheat-Sheet 정리"
tags: [Tips, ]
categories: [Swift, ]
---



### **URLSession 호출 정리**


출처: [link] [https://github.com/timojaask/URLSession-Cheat-Sheet](https://github.com/timojaask/URLSession-Cheat-Sheet)


**Simple GET request**



{% raw %}
```swift
//URL, URLReqeust 형태로 호출이 가능
URLSession.shared.dataTask(with: url) { (data, response, error) in
    guard let statusCode = (response as? HTTPURLResponse)?.statusCode else {
        // request failed
        return
    }
    // handle status code
}.resume()
```
{% endraw %}



**Query parameters**



{% raw %}
```swift
var urlComponents = URLComponents(string: "https://www.google.com")!
urlComponents.queryItems = [
    URLQueryItem(name: "foo1", value: "bar"),
    URLQueryItem(name: "foo2", value: "baz")
]
let url = urlComponents.url // https://www.google.com?foo1=bar&foo2=baz
```
{% endraw %}



**Extension example**



{% raw %}
```swift
extension URL {
    init?(baseUrl: String, queryItems: [String: String]) {
        guard var urlComponents = URLComponents(string: baseUrl) else { return nil }
        urlComponents.queryItems = queryItems.map { URLQueryItem(name: $0.key, value: $0.value) }
        guard let finalUrlString = urlComponents.url?.absoluteString else { return nil }
        self.init(string: finalUrlString)
    }
}
```
{% endraw %}



**Method, body and headers**



{% raw %}
```swift
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.httpBody = data
request.addValue("application/json", forHTTPHeaderField: "Content-Type")
request.addValue("*/*", forHTTPHeaderField: "Accept")
```
{% endraw %}



**Extension example**



{% raw %}
```swift
extension URLRequest {
    static func request(url: URL, headers: [String: String] = [:], method: String = "GET", data: Data? = nil) -> URLRequest {
        var request = URLRequest(url: url)
        request.httpMethod = method
        request.httpBody = data
        headers.forEach { header in
            request.addValue(header.value, forHTTPHeaderField: header.key)
        }
        return request
    }
}
```
{% endraw %}



**JSON**


**From Dictionary to JSON object - 중요: 보통 Post방식으로 JSON을 요청 데이터로 넣을때**


사용 httpBody



{% raw %}
```swift
guard let data = try? JSONSerialization.data(withJSONObject: dictionary, options: [.prettyPrinted]) else {
    // JSON serialization failed
    return
}
```
{% endraw %}



**From JSON object to Data**



{% raw %}
```swift
guard let data = try? JSONSerialization.data(withJSONObject: jsonObject, options: []) else {
    // JSON serialization failed
    return
}
```
{% endraw %}



**From Data to JSON object**



{% raw %}
```swift
guard let json = try? JSONSerialization.jsonObject(with: data, options: []) else {
    // JSON serialization failed
    return
}
```
{% endraw %}



출처: [link] [https://github.com/alexpaul/UIKit](https://github.com/alexpaul/UIKit)


**URLSession Cheatsheet**


**Vocabulary**

- JSON
- endpoint
- RESTFul API
- URLSession
- URLSession.shared
- JSONDecoder, JSONEncoder
- URL
- URLRequest
- URLResponse
- HTTPURLResponse
- Status Code
- Data
- Codable
- Encodable
- Decodable
- HTTP methods: GET, POST, PUT, DELETE, PATCH, UPDATE
- Asynchronous
- Result
- @escaping closures
- capture list e.g [weak self], [unowned self]
- weak vs unowned

**Using a closure to capture the** **`Result`** **of the asynchronous network request**


`Result` type is an `enum` type that has two arguments, a `success` state and an `failure` state.



{% raw %}
```swift
func fetchWebData(completion: @escaping (Result<[ModelObject], Error>) -> ()) {
 // netowrking code here
}
```
{% endraw %}



**Perform a GET request using** **`URLSession`**


`URLSession.shared` is a singleton instance on `URLSession` with basic networking configurations.



{% raw %}
```swift
let dataTask = URLSession.shared.dataTask(with: url) { (data, response, error) in
  // networking code here
}
dataTask.resume()
```
{% endraw %}



**Check that the** **`HTTPURLResponse`** **status code is within the valid range of** **`200...299`** **indicating a successful response**



{% raw %}
```swift
guard let httpResponse = response as? HTTPURLResponse,
      (200...299).contains(httpResponse.statusCode) else {
  print("bad status code")
  return
}
```
{% endraw %}



**Converting** **`JSON`** **data to Swift objects**



{% raw %}
```swift
do {
  let topLevelModel = try JSONDecoder().decode(TopLevelModel.self, from: jsonData)
  let modelObjects = topLevelModel.modelObjects
  completion(.success(modelObjects)
} catch {
  // decoding error
  completion(.failure(error))
}
```
{% endraw %}



**Using the** **`Codable`** **protocol to parse JSON to Swift model(s)**



{% raw %}
```swift
struct CovidCountriesWrapper: Codable {
  let countries: [CountrySummary]
  
  // CodingKeys allows us to rename properties
  enum CodingKeys: String, CodingKey {
    case countries = "Countries"
  }
}

struct CountrySummary: Codable {
  let country: String
  let totalConfirmed: Int
  let totalRecovered: Int
  
  enum CodingKeys: String, CodingKey {
    case country = "Country"
    case totalConfirmed = "TotalConfirmed"
    case totalRecovered = "TotalRecovered"
  }
}
```
{% endraw %}



**The** **`CodingKeys`** **built-in** **`enum`** **type allows us to change JSON property names to our own custom names**


In this example we change `Countries` to a more Swift naming conventional name `countries`.



{% raw %}
```swift
struct CovidCountriesWrapper: Codable {
  let countries: [CountrySummary]
  
  // CodingKeys allows us to rename properties
  enum CodingKeys: String, CodingKey {
    case countries = "Countries"
  }
}
```
{% endraw %}



**Completed API Client to fetch web data**



{% raw %}
```swift
func fetchWebData(completion: @escaping (Result<[ModelObject], Error>) -> ()) {
    // 1. - endpoint URL string
    let endpointURLString = "https://........"
    
    // 2. - convert the string to an URL
    guard let url = URL(string: endpointURLString) else {
      print("bad url")
      return
    }
    
    // URL vs URLRequest
    
    // 3. - make the request using URLSession
    // .shared is an singleton instance on URLSession comes with basic configuration needed for most requests
    let dataTask = URLSession.shared.dataTask(with: url) { (data, response, error) in
      if let error = error {
        return completion(.failure(error))
      }
      
      // first we have to type cast URLResponse to HTTPURLRepsonse to get access to the status code
      // we verify the that status code is in the 200 range which signals all went well with the GET request
      guard let httpResponse = response as? HTTPURLResponse,
            (200...299).contains(httpResponse.statusCode) else {
        print("bad status code")
        return
      }
      
      if let jsonData = data {
        // convert data to our swift model
        do {
          let topLevelModel = try JSONDecoder().decode(TopLevelModel.self, from: jsonData)
          let modelObjects = topLevelModel.modelObjects
          completion(.success(modelObjects))
        } catch {
          // decoding error
          completion(.failure(error))
        }
      }
    }
    dataTask.resume()
  }
```
{% endraw %}



**dictionary -> Urlencoded 처리**



{% raw %}
```swift
extension URLRequest {
  
  private func percentEscapeString(_ string: String) -> String {
    var characterSet = CharacterSet.alphanumerics
    characterSet.insert(charactersIn: "-._* ")
    
    return string
      .addingPercentEncoding(withAllowedCharacters: characterSet)!
      .replacingOccurrences(of: " ", with: "+")
      .replacingOccurrences(of: " ", with: "+", options: [], range: nil)
  }
  
  mutating func encodeParameters(parameters: [String : String]) {
    httpMethod = "POST"
    
    let parameterArray = parameters.map { (arg) -> String in
      let (key, value) = arg
      return "\(key)=\(self.percentEscapeString(value))"
    }
    
    httpBody = parameterArray.joined(separator: "&").data(using: String.Encoding.utf8)
  }
}

let url = URL(string: "<YOUR URL HERE>")
let config = URLSessionConfiguration.default
config.httpAdditionalHeaders = [
  "Accept" : "application/json",
  "Content-Type" : "application/x-www-form-urlencoded"
]

let session = URLSession(configuration: config)

var request = URLRequest(url: url!)
request.encodeParameters(parameters: ["username": username, "password": password])

let task = session.dataTask(with: request) { data, response, error in
  guard error == nil && data != nil else {
      print(error)
      return
  }
  print(JSON(data:data!))
}
task.resume()
```
{% endraw %}


