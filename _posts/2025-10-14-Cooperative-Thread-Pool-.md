---
layout: post
date: 2025-10-14
title: "Cooperative Thread Pool "
tags: [Tips, ]
categories: [Swift, Concurrency, ]
---



### Cooperative Thread Pool 는 CPU 코어수 만큼 Thread 를 만든다


확인용 코드 (Playground 에서 실행)


```swift
import Foundation

// 가장 간단한 버전 - Swift 5.5+에서 작동

print("🖥️  CPU Cores: \(ProcessInfo.processInfo.processorCount)")
print("Starting Swift Concurrency Thread Pool Test...\n")

var threads: Set<String> = []
let lock = NSLock()

func recordThread() -> String {
    let info = String(format: "%p", Thread.current)
    lock.lock()
    threads.insert(info)
    lock.unlock()
    return info
}

Task {
    await withTaskGroup(of: Void.self) { group in
        // CPU 코어의 2배만큼 작업 생성
        let taskCount = ProcessInfo.processInfo.processorCount * 2
        
        for i in 1...taskCount {
            group.addTask {
                let threadId = recordThread()
                print("Task \(i) on Thread \(threadId)")
                
                // CPU 작업
                let end = Date().addingTimeInterval(0.3)
                var sum = 0
                while Date() < end {
                    sum += Int.random(in: 1...100)
                }
            }
        }
    }
    
    print("\n" + String(repeating: "=", count: 50))
    print("✅ All tasks completed")
    print("🧵 Total unique threads used: \(threads.count)")
    print("🖥️  CPU cores: \(ProcessInfo.processInfo.processorCount)")
    print("📊 Ratio: \(String(format: "%.2f", Double(threads.count) / Double(ProcessInfo.processInfo.processorCount)))")
    
    if threads.count <= ProcessInfo.processInfo.processorCount + 2 {
        print("\n✅ SUCCESS: Thread count ≈ Core count")
        print("   Cooperative Thread Pool is working as expected!")
    }
    
    exit(0)
}
```



####   👉🏻 실행결과


```swift
/*
내 M1 Macbook Pro 에서 돌려봄
🖥️  CPU Cores: 10
Starting Swift Concurrency Thread Pool Test...

Task 1 on Thread 0x600001719000
Task 3 on Thread 0x600001724b40
Task 2 on Thread 0x600001720b00
Task 8 on Thread 0x60000170e980
Task 9 on Thread 0x600001721340
Task 10 on Thread 0x600001725040
Task 7 on Thread 0x600001720dc0
Task 4 on Thread 0x60000171e340
Task 5 on Thread 0x600001724680
Task 6 on Thread 0x600001724700
Task 11 on Thread 0x600001719000
Task 12 on Thread 0x600001724b40
Task 13 on Thread 0x600001720b00
Task 14 on Thread 0x600001721340
Task 15 on Thread 0x60000170e980
Task 16 on Thread 0x600001725040
Task 17 on Thread 0x600001720dc0
Task 18 on Thread 0x600001724680
Task 19 on Thread 0x60000171e340
Task 20 on Thread 0x600001724700

==================================================
✅ All tasks completed
🧵 Total unique threads used: 10
🖥️  CPU cores: 10
📊 Ratio: 1.00

✅ SUCCESS: Thread count ≈ Core count
   Cooperative Thread Pool is working as expected!

*/
```



#### ☝🏻 NSLock() 을 쓰는 목적은 공유 리소스(여기선 threads 집합) 에 대한 동시 접근을 제어하기 위함이에요.
 
 🔍 구체적 역할
 •    여러 Task들이 거의 동시에 recordThread() 함수를 호출해서
 threads.insert(info) 하려고 할 수도 있어요.
 •    이때 threads가 Set<String>이고 내부 구조상 삽입(insert) 등 동작이 내부 변조(mutation)이므로
 동시에 여러 스레드가 접근하면 데이터 레이스(race condition) 나 메모리 손상, 크래시 위험이 있어요.
 •    NSLock 을 사용해서 임계영역(critical section) 을 만들고,
 한 스레드가 lock() 한 뒤 threads.insert(...) 을 수행하고 unlock() 하면
 다른 스레드는 그 unlock() 될 때까지 대기하게 돼요.
 → 공유 상태가 일관성 있게 유지됨.
 



###  Swift Concurrency 도 Context Switching 일어난다. 단 최소화 할 뿐이다.


확인용 코드 (Playground 에서 실행)


```swift
// Xcode Playground에서 실행하세요
// File > New > Playground > macOS > Blank

import Foundation
import PlaygroundSupport

PlaygroundPage.current.needsIndefiniteExecution = true

// 현재 스레드 정보 확인 함수
func getThreadInfo() -> String {
    let thread = Thread.current
    let threadId = String(format: "%p", thread)
    
    if thread.isMainThread {
        return "🔴 Main Thread (\(threadId))"
    }
    
    // 큐 이름 확인
    if let queueLabel = String(validatingUTF8: __dispatch_queue_get_label(nil)) {
        if queueLabel.contains("cooperative") {
            return "🟢 Cooperative Pool (\(threadId))"
        }
        return "🟡 GCD Queue: \(queueLabel)"
    }
    
    return "⚪️ Unknown Thread (\(threadId))"
}

// 시간 측정 헬퍼
func measureTime<T>(_ label: String, block: () -> T) -> T {
    let start = Date()
    let result = block()
    let elapsed = Date().timeIntervalSince(start)
    print("   ⏱️  \(label): \(String(format: "%.6f", elapsed))초")
    return result
}

print("=" .repeating(70))
print("🔍 Cooperative Thread Pool 컨텍스트 스위칭 확인")
print("=" .repeating(70))
print()

// ============================================================================
// 예제 1: MainActor ↔ Cooperative Pool 컨텍스트 스위칭
// ============================================================================
print("📊 예제 1: MainActor ↔ Cooperative Pool (가장 명확한 컨텍스트 스위칭)")
print("-" .repeating(70))

@MainActor
func mainActorWork() {
    print("1️⃣ MainActor에서 실행")
    print("   스레드: \(getThreadInfo())")
}

func cooperativePoolWork() async {
    print("2️⃣ Cooperative Pool에서 실행")
    print("   스레드: \(getThreadInfo())")
}

Task { @MainActor in
    print("\n시작: \(getThreadInfo())")
    
    // MainActor에서 실행
    mainActorWork()
    
    print("\n3️⃣ await로 Cooperative Pool로 전환 시도...")
    print("   ⚠️  여기서 컨텍스트 스위칭 발생!")
    
    // Cooperative Pool로 전환
    await cooperativePoolWork()
    
    print("\n4️⃣ 다시 MainActor로 복귀")
    print("   스레드: \(getThreadInfo())")
    print("   ⚠️  다시 컨텍스트 스위칭 발생!")
    
    print("\n✅ 예제 1 완료: 스레드가 바뀌는 것 = 컨텍스트 스위칭!")
    print()
    
    example2()
}

// ============================================================================
// 예제 2: Actor Hopping으로 인한 컨텍스트 스위칭
// ============================================================================
actor CounterActor {
    private var count = 0
    
    func increment() -> Int {
        count += 1
        let threadInfo = getThreadInfo()
        print("   CounterActor.increment() - \(threadInfo)")
        return count
    }
}

@MainActor
func example2() {
    print("\n📊 예제 2: Actor Hopping (빈번한 컨텍스트 스위칭)")
    print("-" .repeating(70))
    print("⚠️  MainActor와 Actor 사이를 100번 왔다갔다")
    print("   → 200번의 컨텍스트 스위칭 발생!\n")
    
    let counter = CounterActor()
    
    Task { @MainActor in
        let start = Date()
        
        // 처음 3번만 상세 출력
        for i in 1...3 {
            print("\(i)번째: MainActor → CounterActor")
            let count = await counter.increment()
            print("         CounterActor → MainActor (결과: \(count))")
            print("         현재: \(getThreadInfo())")
        }
        
        print("\n   ... 나머지 97번 실행 중 ...\n")
        
        // 나머지 97번 (출력 없이)
        for _ in 4...100 {
            _ = await counter.increment()
        }
        
        let elapsed = Date().timeIntervalSince(start)
        
        print("\n📊 결과:")
        print("   • 총 왕복: 100번")
        print("   • 컨텍스트 스위칭: 200번 (왕복마다 2번)")
        print("   • 소요 시간: \(String(format: "%.6f", elapsed))초")
        print("   • 평균 스위칭 시간: \(String(format: "%.6f", elapsed/200))초/회")
        
        print("\n✅ 예제 2 완료: 빈번한 actor hopping = 성능 저하!")
        print()
        
        example3()
    }
}

// ============================================================================
// 예제 3: 같은 Pool 내에서 (Task Switching - 가벼움)
// ============================================================================
@MainActor
func example3() {
    print("\n📊 예제 3: 같은 Cooperative Pool 내 (Task Switching)")
    print("-" .repeating(70))
    print("⚠️  같은 Pool이지만 스레드가 바뀔 수 있음\n")
    
    Task.detached {  // Background에서 시작
        var threadChanges = 0
        var lastThread = ""
        
        print("1️⃣ 첫 실행: \(getThreadInfo())")
        lastThread = getThreadInfo()
        
        for i in 2...10 {
            // CPU 작업
            var sum = 0
            for _ in 1...100_000 {
                sum += Int.random(in: 1...10)
            }
            
            let currentThread = getThreadInfo()
            
            if currentThread != lastThread {
                threadChanges += 1
                print("\(i)️⃣  스레드 변경 감지!")
                print("   이전: \(lastThread)")
                print("   현재: \(currentThread)")
            }
            
            lastThread = currentThread
            
            // 명시적으로 양보
            await Task.yield()
        }
        
        print("\n📊 결과:")
        print("   • 10번 실행 중 스레드 변경: \(threadChanges)번")
        
        if threadChanges == 0 {
            print("   • 같은 스레드 유지 (Task switching만 발생)")
        } else {
            print("   • 스레드 변경 발생 (컨텍스트 스위칭)")
        }
        
        print("\n✅ 예제 3 완료")
        print()
        
        await MainActor.run { example4() }
    }
}

// ============================================================================
// 예제 4: 컨텍스트 스위칭 비용 측정
// ============================================================================
@MainActor
func example4() {
    print("\n📊 예제 4: 컨텍스트 스위칭 비용 측정")
    print("-" .repeating(70))
    
    Task {
        // 측정 1: MainActor ↔ Background (컨텍스트 스위칭)
        print("\n1️⃣ MainActor ↔ Background (1000번)")
        
        await Task { @MainActor in
            let start = Date()
            for _ in 1...1000 {
                await Task.detached {
                    // 빈 작업
                }
                .value
            }
            let elapsed = Date().timeIntervalSince(start)
            print("   ⏱️ 시간: \(String(format: "%.6f", elapsed))초")
            print("   📊 평균: \(String(format: "%.6f", elapsed / 1000))초/회")
        }
        .value  // 기다림
        
        // 측정 2: 같은 Pool 내 (Task switching)
        print("\n2️⃣ 같은 Pool 내 Task switching (1000번)")
        
        await Task.detached {
            let start = Date()
            
            await withTaskGroup(of: Void.self) { group in
                for _ in 1...1000 {
                    group.addTask {
                        // 빈 작업
                    }
                }
            }
            
            let elapsed = Date().timeIntervalSince(start)
            print("   ⏱️  시간: \(String(format: "%.6f", elapsed))초")
            print("   📊 평균: \(String(format: "%.6f", elapsed/1000))초/회")
        }.value
        
        print("\n💡 차이를 비교해보세요!")
        
        await MainActor.run { example5() }
    }
}

// ============================================================================
// 예제 5: 실제 시각적으로 스레드 변경 확인
// ============================================================================
@MainActor
func example5() {
    print("\n\n📊 예제 5: 스레드 변경 실시간 모니터링")
    print("-" .repeating(70))
    
    Task {
        print("\n🎬 10초 동안 스레드 변경 모니터링...\n")
        
        var previousThread = ""
        var switchCount = 0
        let startTime = Date()
        
        await Task.detached {
            while Date().timeIntervalSince(startTime) < 10 {
                let current = getThreadInfo()
                
                if previousThread.isEmpty {
                    print("시작: \(current)")
                    previousThread = current
                } else if current != previousThread {
                    switchCount += 1
                    print("[\(String(format: "%.2f", Date().timeIntervalSince(startTime)))초] 스레드 변경 #\(switchCount)")
                    print("   \(previousThread)")
                    print("   → \(current)")
                    previousThread = current
                }
                
                // CPU 작업
                var sum = 0
                for _ in 1...500_000 {
                    sum += Int.random(in: 1...10)
                }
                
                await Task.yield()
            }
        }.value
        
        print("\n📊 모니터링 결과:")
        print("   • 10초 동안 스레드 변경: \(switchCount)번")
        print("   • 평균: \(String(format: "%.1f", Double(switchCount)/10))번/초")
        
        await MainActor.run { finalSummary() }
    }
}

// ============================================================================
// 최종 요약
// ============================================================================
@MainActor
func finalSummary() {
    print("\n\n" + "=" .repeating(70))
    print("📚 요약: Cooperative Thread Pool의 컨텍스트 스위칭")
    print("=" .repeating(70))
    
    print("""
    
    ✅ 확인된 사실:
    
    1️⃣ MainActor ↔ Cooperative Pool
       → 명확한 컨텍스트 스위칭 발생 (OS 레벨)
       → 스레드가 Main ↔ Background로 바뀜
    
    2️⃣ Actor Hopping (빈번한 왕복)
       → 매번 컨텍스트 스위칭
       → 성능 저하의 주범
    
    3️⃣ 같은 Pool 내
       → Task switching (가벼움)
       → 경우에 따라 스레드 변경 가능
    
    💡 핵심:
    
    컨텍스트 스위칭은 "사라진" 게 아님!
    
    ❌ 사라진 것:
       • 스레드 생성/제거에 따른 스위칭
       • 불필요한 OS 개입
    
    ✅ 여전히 존재:
       • MainActor ↔ Pool 사이
       • Actor 간 전환
       • 필요한 경우의 스레드 전환
    
    🎯 최적화 방법:
       • Actor hopping 최소화 (배치 처리)
       • MainActor 호출 줄이기
       • await 포인트 신중하게 배치
    
    """)
    
    print("✅ 모든 예제 완료!")
    PlaygroundPage.current.finishExecution()
}

// 메인 실행은 Task에서 시작됨

extension String {
    func repeating(_ count: Int) -> String {
        guard count > 0 else { return "" }
        return (0..<count).reduce(into: "") { result, _ in
            result += self
        }
    }
}

//: [Next](@next)
```



####   👉🏻 실행결과


```swift
======================================================================
🔍 Cooperative Thread Pool 컨텍스트 스위칭 확인
======================================================================

📊 예제 1: MainActor ↔ Cooperative Pool (가장 명확한 컨텍스트 스위칭)
----------------------------------------------------------------------

시작: 🔴 Main Thread (0x60000170c000)
1️⃣ MainActor에서 실행
   스레드: 🔴 Main Thread (0x60000170c000)

3️⃣ await로 Cooperative Pool로 전환 시도...
   ⚠️  여기서 컨텍스트 스위칭 발생!
2️⃣ Cooperative Pool에서 실행
   스레드: 🟢 Cooperative Pool (0x600001714900)

4️⃣ 다시 MainActor로 복귀
   스레드: 🔴 Main Thread (0x60000170c000)
   ⚠️  다시 컨텍스트 스위칭 발생!

✅ 예제 1 완료: 스레드가 바뀌는 것 = 컨텍스트 스위칭!


📊 예제 2: Actor Hopping (빈번한 컨텍스트 스위칭)
----------------------------------------------------------------------
⚠️  MainActor와 Actor 사이를 100번 왔다갔다
   → 200번의 컨텍스트 스위칭 발생!

1번째: MainActor → CounterActor
   CounterActor.increment() - 🟢 Cooperative Pool (0x6000017104c0)
         CounterActor → MainActor (결과: 1)
         현재: 🔴 Main Thread (0x60000170c000)
2번째: MainActor → CounterActor
   CounterActor.increment() - 🟢 Cooperative Pool (0x600001709580)
         CounterActor → MainActor (결과: 2)
         현재: 🔴 Main Thread (0x60000170c000)
3번째: MainActor → CounterActor
   CounterActor.increment() - 🟢 Cooperative Pool (0x600001714900)
         CounterActor → MainActor (결과: 3)
         현재: 🔴 Main Thread (0x60000170c000)

   ... 나머지 97번 실행 중 ...

   CounterActor.increment() - 🟢 Cooperative Pool (0x600001706d00)
   .....생략.....
   CounterActor.increment() - 🟢 Cooperative Pool (0x600001706d00)

📊 결과:
   • 총 왕복: 100번
   • 컨텍스트 스위칭: 200번 (왕복마다 2번)
   • 소요 시간: 0.783460초
   • 평균 스위칭 시간: 0.003917초/회

✅ 예제 2 완료: 빈번한 actor hopping = 성능 저하!


📊 예제 3: 같은 Cooperative Pool 내 (Task Switching)
----------------------------------------------------------------------
⚠️  같은 Pool이지만 스레드가 바뀔 수 있음

1️⃣ 첫 실행: 🟢 Cooperative Pool (0x600001706d00)
3️⃣  스레드 변경 감지!
   이전: 🟢 Cooperative Pool (0x600001706d00)
   현재: 🟢 Cooperative Pool (0x600001704a40)
5️⃣  스레드 변경 감지!
   이전: 🟢 Cooperative Pool (0x600001704a40)
   현재: 🟢 Cooperative Pool (0x600001706d00)
6️⃣  스레드 변경 감지!
   이전: 🟢 Cooperative Pool (0x600001706d00)
   현재: 🟢 Cooperative Pool (0x6000017104c0)
7️⃣  스레드 변경 감지!
   이전: 🟢 Cooperative Pool (0x6000017104c0)
   현재: 🟢 Cooperative Pool (0x600001704a40)
8️⃣  스레드 변경 감지!
   이전: 🟢 Cooperative Pool (0x600001704a40)
   현재: 🟢 Cooperative Pool (0x600001706d00)
9️⃣  스레드 변경 감지!
   이전: 🟢 Cooperative Pool (0x600001706d00)
   현재: 🟢 Cooperative Pool (0x600001714900)
10️⃣  스레드 변경 감지!
   이전: 🟢 Cooperative Pool (0x600001714900)
   현재: 🟢 Cooperative Pool (0x6000017104c0)

📊 결과:
   • 10번 실행 중 스레드 변경: 7번
   • 스레드 변경 발생 (컨텍스트 스위칭)

✅ 예제 3 완료


📊 예제 4: 컨텍스트 스위칭 비용 측정
----------------------------------------------------------------------

1️⃣ MainActor ↔ Background (1000번)
   ⏱️ 시간: 0.022972초
   📊 평균: 0.000023초/회

2️⃣ 같은 Pool 내 Task switching (1000번)
   ⏱️  시간: 0.036019초
   📊 평균: 0.000036초/회

💡 차이를 비교해보세요!


📊 예제 5: 스레드 변경 실시간 모니터링
----------------------------------------------------------------------

🎬 10초 동안 스레드 변경 모니터링...

시작: 🟢 Cooperative Pool (0x600001fefd00)
[2.84초] 스레드 변경 #1
   🟢 Cooperative Pool (0x600001fefd00)
   → 🟢 Cooperative Pool (0x600019ad1f40)
[6.79초] 스레드 변경 #2
   🟢 Cooperative Pool (0x600019ad1f40)
   → 🟢 Cooperative Pool (0x600001714900)
[9.85초] 스레드 변경 #3
   🟢 Cooperative Pool (0x600001714900)
   → 🟢 Cooperative Pool (0x600019ad1f40)

📊 모니터링 결과:
   • 10초 동안 스레드 변경: 3번
   • 평균: 0.3번/초


======================================================================
📚 요약: Cooperative Thread Pool의 컨텍스트 스위칭
======================================================================

✅ 확인된 사실:

1️⃣ MainActor ↔ Cooperative Pool
   → 명확한 컨텍스트 스위칭 발생 (OS 레벨)
   → 스레드가 Main ↔ Background로 바뀜

2️⃣ Actor Hopping (빈번한 왕복)
   → 매번 컨텍스트 스위칭
   → 성능 저하의 주범

3️⃣ 같은 Pool 내
   → Task switching (가벼움)
   → 경우에 따라 스레드 변경 가능

💡 핵심:

컨텍스트 스위칭은 "사라진" 게 아님!

❌ 사라진 것:
   • 스레드 생성/제거에 따른 스위칭
   • 불필요한 OS 개입

✅ 여전히 존재:
   • MainActor ↔ Pool 사이
   • Actor 간 전환
   • 필요한 경우의 스레드 전환

🎯 최적화 방법:
   • Actor hopping 최소화 (배치 처리)
   • MainActor 호출 줄이기
   • await 포인트 신중하게 배치

✅ 모든 예제 완료!
```

