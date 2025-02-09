---
layout: post
date: 2024-12-24
title: "SwiftUI DataModel Property Wrapper"
tags: [Tips, ]
categories: [SwiftUI, ]
---



## iOS 16 이하



### @State

- Struct 내의 프로퍼티를 수정할 수 있게 만듬
- @State 로 선언된 변수를 변경 했을때, 이 변수가 포함된 body내의 모든 View를 다시 그림

![0](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/0.png)_스크린샷_2024-12-29_오후_1.10.14.png_



{% raw %}
```swift
import SwiftUI

struct ContentView: View {
    @State var number = 0
    
    var body: some View {
        VStack {
                Text("\(number)")
                Button {
                    number += 1
                } label: {
                    Text("Plus")
                }
        }
    }
}
```
{% endraw %}




### @Binding

- 기본적으로 전달받은 곳에서 State 변수 수정 불가
- 전달 받은 곳에서 수정하고 싶다면 Binding으로 변환해서 전달해주기
- 넘겨주는 곳에서 $, 받는곳에서 @Binding
- 이를 2-way binding 이라고함


### $(Projected value)

- @State, @Binding 같은 프로퍼티 래퍼는 Projected Value라는 기능이 있음
- $를 이용해서 프로퍼티 래퍼를 통해 저장된 값을 지정된 방법으로 반환 시켜줌
- 이때 반환되는 값은 아무타입이나 상관없는데 이 기능을 통해 @State 프로퍼티 래퍼는

      $(Projected Value)를 통해 Binding<T> 으로 변환해서 반환시켜줌


![1](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/1.png)_스크린샷_2024-12-29_오후_3.12.14.png_


![2](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/2.png)_스크린샷_2024-12-29_오후_3.22.17.png_


데이터 기준으로 의존성을 표기 하기에 관계는 아래 같다.


(클린 아키텍처 기준으론 반대로 되어 있는 거라, 기분이 안좋은데 일단 기초개념만 참고하자)



{% raw %}
```swift
ContentView (데이터 소유) -> SubView (데이터 참조)
```
{% endraw %}




{% raw %}
```swift
struct ContentView: View {
    @State var number = 0
    var body: some View {
        VStack {
            Text("ContentView")
            Button("Button") {
                number += 1
            }
            Text("number: \(number)")
            Divider()
            SubView(number: $number)
        }
    }
}
```
{% endraw %}




{% raw %}
```swift
struct SubView: View {
    @Binding var number: Int
    var body: some View {
        Text("SubView")
        Button("Button") {
            number += 1
        }
        Text("number: \(number)")
    }
}
```
{% endraw %}




### .constant

- Binding<T>  형태로 반환하기 위해 사용,
- 값 수정이 불가능 하기에 상수라는 뜻의 constant 를 사용함
- 개발중 또는 #Preview 에서 임시 바인딩 객체가 필요할때 사용


{% raw %}
```swift
.constant("String")
.constant(100)
.constant(true)
```
{% endraw %}




### ObservableObject, @Published, @ObservedObject

- @State 는 값타입(Int, String,Bool,Enum,Struct) 만 감지가능
- 참조타입 class 는 감지 불가능
- Class 참조타입을 감지하기 위해 위에 3가지 필요함
- ObserveableObject 는 프로토콜이고, @Published, @ObservedObject 는 프로퍼티래퍼다.

![3](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/3.png)_스크린샷_2024-12-29_오후_1.10.14.png_

- ObservableObject 프로토콜 : 감지되어야 할 클래스에 붙여줌
- @Published : 클래스내 감지되어야할 프로퍼티에 붙여줌
- @ObservedObject: 사용할 ObservableObject 클래스 인스턴스 변수에 생성시 붙여줌


{% raw %}
```swift
class NumberCounter: ObservableObject {
    @Published var number: Int = 0
    
    func increaseNumber() {
        number += 1
    }
}

struct ContentView: View {
    @ObservedObject var numberCounter = NumberCounter()
    
    var body: some View {
        VStack {
            Text("\(self.numberCounter.number)")
            Button {
                self.numberCounter.increaseNumber()
            } label: {
                Text("Plus")
            }
        }
    }
}
```
{% endraw %}




### @StateObject

- 데이터를 하위에 보내려면 데이터 소유주가 날라가면 안됨
- ContentView 에서 ChildView 를 생성해서 사용하고 있음
- ChildView 는 NumberCounter 라는 계산 클래스를 생성해서 가지고 있음
1. @State 값 변경시 해당 변수를 포함한 body 는 리로드 된다 이때 @ObservedObject 클래스가

있다면 새로 객체가 생성되며 기존값이 사라진다. 이때 @StateObject 로 클래스 객체를 정의하면


재 갱신시 새로 생성하지 않고 기존껄 가지고 있는다.


![4](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/4.png)_스크린샷_2024-12-29_오후_4.17.06.png_



{% raw %}
```swift
class NumberCounter: ObservableObject {
    @Published var number: Int = 0
    
    func increaseNumber() {
        number += 1
        print("number: ", number)
    }
}

struct ChildView: View {
    @StateObject var numberCounter = NumberCounter()
    
    var body: some View {
        VStack {
            Text("ChildView")
            Text("\(self.numberCounter.number)")
            Button {
                self.numberCounter.increaseNumber()
            } label: {
                Text("Plus")
            }
        }
    }
}

struct ContentView: View {
    @State var text: String = ""
    
    var body: some View {
        VStack (alignment: .center) {
            Text("ContentView")
            TextField("글자를 입력해주세요", text: $text)
                .frame(width: 150, height: 50)
            Divider()
            ChildView()
        }
    }
}
```
{% endraw %}


1. ContentView 에서 NumberCounter 클래스 객체를 ObservedObject 로 생성해서

ChildView 에 프로퍼티로 전달한다. 해당 numberCounter 는 ContentView body 밖에서 생성하기 때문에 이전에 생성했던 numberCounter 값으로 ChildView를 다시 그린다.


![5](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/5.png)_스크린샷_2024-12-29_오후_4.29.25.png_



{% raw %}
```swift
class NumberCounter: ObservableObject {
    @Published var number: Int = 0
    
    func increaseNumber() {
        number += 1
        print("number: ", number)
    }
}

struct ChildView: View {
    @ObservedObject var numberCounter : NumberCounter
    
    var body: some View {
        VStack {
            Text("ChildView")
            Text("\(self.numberCounter.number)")
            Button {
                self.numberCounter.increaseNumber()
            } label: {
                Text("Plus")
            }
        }
    }
}

struct ContentView: View {
    @State var text: String = ""
    @ObservedObject var numberCounter = NumberCounter()
    
    var body: some View {
        VStack (alignment: .center) {
            Text("ContentView")
            TextField("글자를 입력해주세요", text: $text)
                .frame(width: 150, height: 50)
            Divider()
            ChildView(numberCounter: numberCounter)
        }
    }
}
```
{% endraw %}




### @EnvironmentObject

- 상속된 모든 뷰에서 공통적으로 사용할수 있게 해줌
- 필요한 차일드 뷰에서만 불러와 사용 할 수 있음


{% raw %}
```swift
class NumberCounter: ObservableObject {
    @Published var number: Int = 0
    
    func increaseNumber() {
        number += 1
    }
}

struct ChildView: View {
    @EnvironmentObject var numberCounter: NumberCounter
    
    var body: some View {
        VStack {
            Text("\(self.numberCounter.number)")
            Button {
                self.numberCounter.increaseNumber()
            } label: {
                Text("Plus")
            }
        }
    }
}

struct ContentView: View {
    @ObservedObject var numberCounter = NumberCounter()
    
    var body: some View {
        VStack {
            ChildView()
                .environmentObject(numberCounter)
        }
    }
}
```
{% endraw %}




### @Environment

- 시스템에 이미 세팅되어 있는 환경값을 SwiftUI 뷰에서 아무곳에서나 꺼내 쓸수 있다.

![6](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/6.png)_스크린샷_2024-12-29_오후_2.14.35.png_



{% raw %}
```swift
import SwiftUI

struct ContentView: View {
    @Environment(\.colorScheme) var colorScheme
    
    var body: some View {
        Text("Hello, World!")
            .padding()
            .background(colorScheme == .dark ? Color.black : Color.white)
            .foregroundColor(colorScheme == .dark ? Color.white : Color.black)
    }
}
```
{% endraw %}



![7](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/7.png)_스크린샷_2024-12-29_오후_4.37.17.png_



## iOS 17 이상 변경점 - XCode15  2023



### 변경점 요약


![8](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/8.png)_스크린샷_2024-12-29_오후_5.54.17.png_

- @Published 프로퍼티가 변경되면 View에서 사용되는게 아니어도 전체 View가 다시 리로드 되었는데 @Observable 매크로 사용시 @Published 작성할 필요도 없고, 특히 View에 사용된 프로퍼티만 변경시 리로드 되게 감시가 효율적으로 변경됨
- ObservableObject 프로토콜 사용시에는 옵셔널과 객체들에 대한 감시가 불가능 했다.
- 기존 @StateObject와 @EnvironmentObject는  @State 와 @Environment 로 통합됨


### @Observable 매크로


ObservableObject 걷어내고 @Observable 매크로로 변경



{% raw %}
```swift
@Observable
class NumberCounter {
    var number: Int = 0
    
    func increaseNumber() {
        number += 1
        print("number: ", number)
    }
}

struct ContentView: View {
    var numberCounter = NumberCounter()
    
    var body: some View {
        VStack {
            Text("\(self.numberCounter.number)")
            Button {
                self.numberCounter.increaseNumber()
            } label: {
                Text("Plus")
            }
        }
    }
}
```
{% endraw %}




### @StateObject → @State 로 통합


@Observable 매크로로 변경 및  @StateObject 는 @State 로 변경



{% raw %}
```swift
@Observable
class NumberCounter {
    var number: Int = 0
    
    func increaseNumber() {
        number += 1
        print("number: ", number)
    }
}

struct ChildView: View {
    @State var numberCounter = NumberCounter()
    
    var body: some View {
        VStack {
            Text("ChildView")
            Text("\(self.numberCounter.number)")
            Button {
                self.numberCounter.increaseNumber()
            } label: {
                Text("Plus")
            }
        }
    }
}

struct ContentView: View {
    @State var text: String = ""
    
    var body: some View {
        VStack (alignment: .center) {
            Text("ContentView")
            TextField("글자를 입력해주세요", text: $text)
                .frame(width: 150, height: 50)
            Divider()
            ChildView()
        }
    }
}
```
{% endraw %}




### @EnvrionmentObject → @Environment 통합


![9](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/9.png)_스크린샷_2024-12-29_오후_5.49.17.png_



{% raw %}
```swift
@Observable
class NumberCounter {
    var number: Int = 0
    
    func increaseNumber() {
        number += 1
    }
}

struct ChildView: View {
    @Environment(NumberCounter.self) var numberCounter
    
    var body: some View {
        VStack {
		        Text("ChildView")
            Text("\(self.numberCounter.number)")
            Button {
                self.numberCounter.increaseNumber()
            } label: {
                Text("Plus")
            }
        }
    }
}

struct ContentView: View {
    var numberCounter = NumberCounter()
    var body: some View {
        VStack {
	        Text("ContentView")
            ChildView()
                .environment(numberCounter)
        }
    }
}
```
{% endraw %}




### @Bindable 


@ObservedObject  를 @Bindable 로 변경


![10](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/10.png)_스크린샷_2024-12-29_오후_9.18.49.png_


**데이터 소유권**:


 @State는 데이터를 뷰 내부에서 소유하지만, @Bindable은 외부 객체를 바인딩하여 여러 뷰와 공유할 수 있습니다.


**사용 목적**:


 @State는 뷰 내부의 상태 관리에 적합하고, @Bindable은 외부 객체와의 데이터 동기화 및 공유에 적합합니다.


![11](/assets/img/2024-12-24-SwiftUI-DataModel-Property-Wrapper.md/11.png)_스크린샷_2024-12-29_오후_9.46.38.png_



{% raw %}
```swift
@Observable // class 에만 사용 가능
class Ramen {
    var name: String
    init(name: String) {
        self.name = name
    }
}

struct Order {
    var count: Int = 10
}

struct RamenOrderView: View {
    @Binding var order: Order // 상위 객체에서 받아서 사용
    var body: some View {
        VStack {
            Text("RamenOrderView")
            TextField("주문 갯수", value: $order.count, formatter: NumberFormatter())
                .keyboardType(.numberPad)
                .frame(maxWidth: 100)
        }
    }
}

struct ContentView: View {
    @Bindable var ramen = Ramen(name: "신라면") // 소유권 Ramen 클래스가 가지고 있음
    @State var order = Order() // 소유권 View 가 가지고 있음
    
    var body: some View {
        VStack {
            Text("ContentView")
            Text("상품명: \(ramen.name)")
            Text("주문량: \(order.count)")
            TextField("Title", text: $ramen.name)
                .frame(maxWidth: 100)
            Divider()
            RamenOrderView(order: $order)
        }
        .padding()
    }
}
```
{% endraw %}


