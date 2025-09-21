---
layout: post
date: 2025-09-20
title: "1️⃣ WWDC 2025 -SwiftUI New Feature- iOS 26"
tags: [Liquid Glass Effects, ]
categories: [SwiftUI, ]
---



###  Liquid Glass Effects 리퀴드 글래스 효과


새로운 리퀴드 글래스 효과는 거의 모든 시스템 전반의 앱, 컨트롤 등에 사용됩니다.
우리 앱에 이를 적용하는 것은 큰 일이 아닙니다.
다행히도 SwiftUI는 기본 컨트롤뿐 아니라 사용자 정의 뷰에도 리퀴드 글래스 효과를 지원하여, 이러한 효과를 쉽게 추가할 수 있습니다.
그럼 이제 이 글래스 효과를 앱에 어떻게 추가할 수 있는지 살펴봅시다.


![0](/assets/img/2025-09-20-1️⃣ WWDC-2025--SwiftUI-New-Feature--iOS-26.md/0.png)



{% raw %}
```swift
struct ContentView: View {
    @State private var isExpanded: Bool = false
    var body: some View {
        ZStack {
            /// Background Image
            Image("Pic")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: 300, height: 300)
                .clipShape(.rect(cornerRadius: 20))
                
            /// Custom View with Liquid Glass Effect
            Image(systemName: "suit.heart.fill")
                .font(.title)
                .foregroundStyle(.red.gradient)
                .frame(width: 50, height: 50)
            /// Can make any custom glass effect to be interactable!
            /// Can adjust it's background tint as well
                .glassEffect(.regular.tint(.red.opacity(0.35)).interactive(), in: .circle)
        }
    }
}
```
{% endraw %}




#### ✅ GlassEffectContainer (Morphing 및 그룹화에 사용됨)


SwiftUI는 GlassEffectContainer라는 네이티브 컨테이너를 제공합니다.
이 컨테이너를 사용하면 손쉽게 모핑 효과를 만들고, 여러 뷰를 그룹화하여 단일 글래스 효과를 구현할 수 있습니다.


참고:
모핑 효과나 다른 효과들은 간격(Spacing)이 서로 일치하지 않으면 동작하지 않는다는 것을 알게 되었습니다.
예를 들어, VStack에 간격을 20으로 설정했다면, 동일한 간격을 Container에도 적용해야 합니다.



#### ✅ glassEffectTransition()


예를 들어, 앱에서 특정 설정이 활성화되었을 때 애니메이션이 필요하지 않은 경우


(예: “Reduce Animations” 토글), 이 모디파이어를 사용하여 모핑 효과와 애니메이션을 제거할 수 있습니다!


![1](/assets/img/2025-09-20-1️⃣ WWDC-2025--SwiftUI-New-Feature--iOS-26.md/1.png)



{% raw %}
```swift
struct ContentView: View {
    @State private var isExpanded: Bool = false
    var body: some View {
        ZStack {
            /// Background Image
            Image("Pic")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: 300, height: 300)
                .clipShape(.rect(cornerRadius: 20))
                .overlay(alignment: .bottom) {
                    GlassEffectContainer(spacing: 20) {
                        VStack(spacing: 20) {
                            Spacer()
                            
                            if isExpanded {
                                Group {
                                    Image(systemName: "suit.heart.fill")
                                        .font(.title)
                                        .foregroundStyle(.red.gradient)
                                        .frame(width: 50, height: 50)
                                    
                                    Image(systemName: "magnifyingglass")
                                        .font(.title)
                                        .foregroundStyle(.white.gradient)
                                        .frame(width: 50, height: 50)
                                }
                                .glassEffect(.regular, in: .circle)
                                //.glassEffectTransition(.identity) //이 모디파이어를 사용하여 모핑 효과와 애니메이션을 제거할 수 있습니다!
                            }
                            
                            Button {
                                withAnimation(.smooth(duration: 1, extraBounce: 0)) {
                                    isExpanded.toggle()
                                }
                            } label: {
                                Image(systemName: "ellipsis")
                                    .font(.title)
                                    .foregroundStyle(.white.gradient)
                                    .frame(width: 40, height: 40)
                            }
                            .buttonStyle(.glass)
                        }
                    }
                    .padding(15)
                }
        }
    }
}
```
{% endraw %}




#### ✅ glassUnion()


예를 들어, 두 개의 뷰를 그룹화하여 별도의 HStack/VStack을 작성하지 않고 단일 글래스 효과를 만들고 싶다면,
이 모디파이어를 사용할 수 있습니다.
이 모디파이어는 각 뷰가 개별적으로 효과를 가지는 대신, 단일 글래스 효과를 적용합니다!


![2](/assets/img/2025-09-20-1️⃣ WWDC-2025--SwiftUI-New-Feature--iOS-26.md/2.png)



{% raw %}
```swift
struct ContentView: View {
    @State private var isExpanded: Bool = false
    @Namespace private var animation
    var body: some View {
        ZStack {
            /// Background Image
            Image("Pic")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: 300, height: 300)
                .clipShape(.rect(cornerRadius: 20))
                .overlay(alignment: .bottom) {
                    GlassEffectContainer(spacing: 20) {
                        VStack(spacing: 20) {
                            Spacer()
                            
                            Group {
                                Image(systemName: "suit.heart.fill")
                                    .font(.title)
                                    .foregroundStyle(.red.gradient)
                                    .frame(width: 50, height: 50)
                                
                                Image(systemName: "magnifyingglass")
                                    .font(.title)
                                    .foregroundStyle(.white.gradient)
                                    .frame(width: 50, height: 50)
                            }
                            .glassEffect(.regular, in: .capsule)
                            .glassEffectUnion(id: "Group-1", namespace: animation)
                            
                            Button {
                                withAnimation(.smooth(duration: 1, extraBounce: 0)) {
                                    isExpanded.toggle()
                                }
                            } label: {
                                Image(systemName: "ellipsis")
                                    .font(.title)
                                    .foregroundStyle(.white.gradient)
                                    .frame(width: 40, height: 40)
                            }
                            .buttonStyle(.glass)
                        }
                    }
                    .padding(15)
                }
        }
    }
}
```
{% endraw %}




#### 

