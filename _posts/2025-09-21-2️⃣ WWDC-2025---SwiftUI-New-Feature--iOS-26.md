---
layout: post
date: 2025-09-21
title: "2️⃣ WWDC 2025 - SwiftUI New Feature- iOS 26"
tags: [FoundationModels, streamResponse, ]
categories: [SwiftUI, ]
---



#### ✅ FoundationModels (SDK)
(온디바이스 인텔리전스)


Xcode 26에는 이제 FoundationModels SDK가 포함되어, 온디바이스 인텔리전스 모델을 활용할 수 있습니다.
이 모델들은 디바이스 내에서 동작하기 때문에, 디바이스가 오프라인 상태여도 기능을 수행할 수 있습니다.
이제 이 새로운 SDK의 핵심적인 활용 사례들을 살펴보겠습니다.


+. streamResponse
코드 몇 줄만으로도 우리는 이 새로운 SDK를 이용해 AI 채팅을 만들 수 있습니다.
하지만 답변이 너무 오래 걸린다는 것을 눈치채셨나요?


네, 그 이유는 제가 한 번에 전체 결과를 요청하고 있기 때문입니다.
하지만 부분적인 반복 결과(Partial Iterative Results)를 받을 수 있는 방법이 있습니다.
이 방식은 요즘 AI 채팅에서 가장 흔히 사용되고 있죠.


![0](/assets/img/2025-09-21-2️⃣ WWDC-2025---SwiftUI-New-Feature--iOS-26.md/0.png)



{% raw %}
```swift
import FoundationModels

struct ContentView: View {
    @State private var prompt: String = ""
    @State private var answer: String = ""
    @State private var disableControls: Bool = false
    var body: some View {
        NavigationStack {
            ScrollView(.vertical) {
                Text(answer)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .multilineTextAlignment(.leading)
                    .padding(15)
            }
            .safeAreaBar(edge: .bottom) {
                HStack(spacing: 10) {
                    TextField("Prompt", text: $prompt)
                        .padding(.horizontal, 15)
                        .padding(.vertical, 10)
                        .glassEffect(.regular, in: .capsule)
                    
                    Button {
                        Task {
                            guard !prompt.isEmpty else { return }
                            
                            do {
                                let session = LanguageModelSession()
                                disableControls = true
                                
                                let response = session.streamResponse(to: prompt)
                                
                                
                                for try await chunk in response {
                                    self.answer = chunk.content
                                }
                                
                                disableControls = false
                            }catch {
                                disableControls = false
                                print(error.localizedDescription)
                            }
                        }
                        
                    } label: {
                        Image(systemName: "paperplane.fill")
                            .frame(width: 30, height: 30)
                    }
                    .buttonStyle(.glass)
                }
                .disabled(disableControls)
                .padding(25)
                
            }
            .navigationTitle("Foundataion Model")
        }
    }
}
```
{% endraw %}




#### ✅  **FoundationModels (@Generable)**


FoundationModels에는 @Generable 이라는 매크로가 포함되어 있으며, 이를 통해 LanguageModelSession이 지정된 모델을 위한 데이터를 생성할 수 있습니다.


이 예시에서는 Todo 라는 이름의 모델을 생성할 것입니다.


이 매크로를 사용하면, 언어 모델에게 무작위 할 일(todo) 목록을 생성하도록 요청할 수 있습니다.


비록 이것이 실질적인 사용 사례는 아닐 수 있지만, 다른 많은 시나리오에서 유용하게 활용될 수 있습니다!


+. @Guide()


이것은 LanguageModel에 이러한 속성을 채우는 데 필요한 컨텍스트를 제공합니다.
또한, @Generable에도 이러한 설명을 제공할 수 있습니다!


@Guide() 적용을 하면 아래 사진 처럼 Contenxt 가 @Guide(description: "칫솔질")에 따라 비슷한 형식으로 변경된다. 


![1](/assets/img/2025-09-21-2️⃣ WWDC-2025---SwiftUI-New-Feature--iOS-26.md/1.png)


![2](/assets/img/2025-09-21-2️⃣ WWDC-2025---SwiftUI-New-Feature--iOS-26.md/2.png)



{% raw %}
```swift
import SwiftUI
import FoundationModels

struct ContentView: View {
    @State private var todos: [Todo] = []
    @State private var isWriting: Bool = false
    var body: some View {
        NavigationStack {
            List {
                ForEach(todos) { todo in
                    Text(todo.task)
                }
            }
            .navigationTitle("Todo")
            .toolbar(content: {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("", systemImage: "apple.intelligence") {
                        let propmt = "Create 10 todo list items in Korean"
                        Task {
                            do {
                                let session = LanguageModelSession()
                                let response = session.streamResponse(generating: [Todo].self) {
                                    propmt
                                }
                                
                                isWriting = true
                                for try await chunkTodos in response {
                                    self.todos = chunkTodos.content.compactMap({
                                        if let id = $0.id, let task = $0.task {
                                            return .init(id: id, task: task)
                                        }
                                        
                                        return nil
                                    })
                                }
                                
                                isWriting = false
                            }catch {
                                isWriting = false
                                print(error.localizedDescription)
                            }
                        }
                    }
                    .disabled(isWriting)
                }
            })
        }
    }
}

@Generable
struct Todo: Identifiable {
    var id: String
    @Guide(description: "칫솔질") //어떤 내용이 올지 샘플을 제공함
    var task: String
}
```
{% endraw %}


