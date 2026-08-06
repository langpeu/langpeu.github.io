---
layout: post
date: 2026-01-28
title: "TCA + Clean Architecture 프로젝트 구조 - 트렌디"
tags: [Study, ]
categories: [SwiftUI, TCA, ]
---



## TCA + Clean Architecture 핵심 요약



### 1. 폴더 구조


```plain text
AppStore/
  ├── App/
  │   ├── AppFeature.swift
  │   └── AppStoreApp.swift
  │
  ├── Domain/                    // 비즈니스 로직
  │   ├── Models/               // Entity (비즈니스 모델)
  │   │   ├── User.swift
  │   │   ├── Place.swift
  │   │   └── YTVisitedPlace.swift
  │   │
  │   └── Services/             // UseCase + Repository 역할
  │       ├── AuthService.swift
  │       └── PlacesService.swift
  │
  ├── Data/                      // Infrastructure
  │   ├── Clients/              // 외부 시스템 접근
  │   │   ├── AppSupabaseClient.swift
  │   │   ├── KeychainClient.swift
  │   │   ├── LocationClient.swift
  │   │   └── UserDefaultsClient.swift
  │   │
  │   └── DTOs/                 // API 응답 모델 (필요시만)
  │       └── UserDTO.swift
  │
  ├── Features/                  // Presentation
  │   ├── Login/
  │   │   ├── LoginFeature.swift
  │   │   └── LoginView.swift
  │   └── HomeMap/
  │       ├── HomeMapFeature.swift
  │       └── HomeMapView.swift
  │
  ├── Shared/
  │   ├── Components/
  │   ├── Extensions/
  │   └── Utils/
  │
  └── Config/
      ├── Debug.xcconfig
      ├── Release.xcconfig
      └── Secrets.xcconfig
```



### 2. 레이어별 역할


| Layer                | 역할                     | 예시                                    |
| -------------------- | ---------------------- | ------------------------------------- |
| **Domain/Models**    | 비즈니스 엔티티               | `User`, `Place`                       |
| **Domain/Services/** | 비즈니스 로직 + 데이터 접근       | `AuthService`, `PlacesService`        |
| **Data/Clients/**    | 외부 시스템 접근              | `AppSupabaseClient`, `LocationClient` |
| **Data/DTOs/**       | API 응답 구조 (필요시만)       | `UserDTO`                             |
| **Features/**        | 화면 로직 (Reducer + View) | `LoginFeature`, `LoginView`           |



### 3. Client vs Service 구분



#### Client (Infrastructure)


```swift
// 외부 시스템/하드웨어 접근만
KeychainClient          // iOS Keychain 접근
LocationClient          // GPS 접근
AppSupabaseClient       // Supabase SDK 래핑
```



#### Service (Business Logic)


```swift
// 여러 Client 조합 + 비즈니스 로직
AuthService             // Supabase + Keychain + 인증 로직
PlacesService           // Location + Supabase + 거리 계산
```



### 4. Entity vs DTO



#### Entity (Domain 모델)


```swift
// Domain/Models/User.swift
struct User: Equatable, Identifiable {
    let id: String
    let email: String
    let name: String
    let createdAt: Date

    // 비즈니스 로직 포함
    var displayName: String {
        name.isEmpty ? email : name
    }
}
```



#### DTO (API 모델)


```swift
// Data/DTOs/UserDTO.swift
struct UserDTO: Codable {
    let user_id: String
    let email_address: String
    let full_name: String
    let created_at: String  // API는 String

    // Entity 변환
    func toDomain() -> User {
        User(
            id: user_id,
            email: email_address,
            name: full_name,
            createdAt: ISO8601DateFormatter().date(from: created_at) ?? Date()
        )
    }
}
```


**API와 도메인 모델이 같으면 DTO 생략 가능!**



### 5. Service 구현 패턴 (추천)


```swift
// Domain/Services/AuthService.swift
struct AuthService {
    var signIn: (String, String) async throws -> User
}

extension AuthService: DependencyKey {
    static let liveValue: AuthService = {
        @Dependency(\.supabaseClient) var client
        @Dependency(\.keychainClient) var keychain

        return AuthService(
            signIn: { email, password in
                // 1. API 호출 (Repository 역할)
                let dto: UserDTO = try await client
                    .from("users")
                    .select()
                    .execute()
                    .value

                // 2. DTO → Entity 변환 (Repository 역할)
                let user = dto.toDomain()

                // 3. 비즈니스 로직 (UseCase 역할)
                if !user.isVerified {
                    throw AuthError.emailNotVerified
                }

                try keychain.save("token", ...)

                return user
            }
        )
    }()
}

extension DependencyValues {
    var authService: AuthService {
        get { self[AuthService.self] }
        set { self[AuthService.self] = newValue }
    }
}
```


**Service가 Repository + UseCase 역할 모두 수행 ✅**



### 6. Feature에서 사용


```swift
// Features/Login/LoginFeature.swift
@Reducer
struct LoginFeature {
    @ObservableState
    struct State {
        var user: User?  // Entity만 사용
    }

    @Dependency(\.authService) var authService  // Service만 의존

    var body: some ReducerOf<Self> {
        Reduce { state, action in
            case .loginButtonTapped:
                return .run { send in
                    // DTO? 몰라도 됨. Entity만 받음
                    let user = try await authService.signIn(email, password)
                    await send(.loginResponse(.success(user)))
                }
        }
    }
}
```



### 7. 데이터 흐름


```plain text
Feature
   ↓ (Entity)
Service (Repository + UseCase 역할)
   ↓ (DTO)
Client
   ↓ (JSON)
API
```



### 8. 핵심 원칙

1. **Feature는 Entity만 알면 됨** - DTO 몰라도 OK
2. **Service가 DTO → Entity 변환** - Repository 역할 포함
3. **Client는 순수 Infrastructure** - 외부 접근만
4. **API 같으면 DTO 생략** - Entity에 Codable 추가
5. **Service = Repository + UseCase** - 한 파일에 통합 (실용적)


### 9. DependencyValues 등록


```swift
// ❌ 틀림
@Dependency(\.AuthService) var auth

// ✅ 맞음
@Dependency(\.authService) var auth
//            ↑ property 이름 사용
```



### 10. 파일 위치 체크리스트

- ✅ Entity → `Domain/Models/`
- ✅ Service → `Domain/Services/` (Repository 역할 포함)
- ✅ DTO → `Data/DTOs/` (필요시만)
- ✅ Client → `Data/Clients/`
- ✅ Feature → `Features/{FeatureName}/`
- ✅ View → `Features/{FeatureName}/`

**끝!** 🎯

