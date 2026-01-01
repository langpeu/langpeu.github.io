---
layout: post
date: 2025-08-16
title: "NumberFormatter - 화폐 단위 표시"
tags: [Study, ]
categories: [Swift, ]
---


```swift
var moneyString: String {
        let formatter: NumberFormatter = NumberFormatter()
        formatter.locale = .current
        formatter.numberStyle = .decimal
        formatter.maximumFractionDigits = 0
        return (formatter.string(for: self) ?? "") + "원"
    }

이 코드로 출력하면  10,000원 으로 나온다.
콤바 표시는 어디에서 처리가 되는거야 ?
```


```swift
formatter.numberStyle = .decimal
```


👉 바로 이 설정 덕분에 숫자가 3자리마다 구분 기호(Thousands Separator)로 끊어집니다.

- numberStyle = .none → 그냥 10000
- numberStyle = .decimal → 10,000
- numberStyle = .currency → ₩10,000 (현재 로케일이 한국이라면)

추가로, formatter.locale = .current 로케일에 따라 구분 기호가 결정됩니다:

- 한국/미국 → , (10,000)
- 독일 → . (10.000)
- 프랑스 → 공백 (10 000)

즉, **콤마는 NumberFormatter 가 로케일에 맞게 자동으로 넣어주는 것**이에요 


```swift
decimal 뜻이 10진수 아냐 ?
```


맞아요 🤔 decimal 하면 흔히 **10진수** 떠올리죠.


근데 **NumberFormatter.NumberStyle.decimal** 에서의 _decimal_ 은 조금 다른 의미예요.


Apple 공식 문서에 따르면:

- .decimal → 숫자를 **소수점이 있는 일반적인 10진수 형식**으로 표시 (로케일에 맞게 천 단위 구분 기호도 넣음)
- .currency → 통화 기호 포함
- .percent → % 표시 포함
- .scientific → 과학적 표기법 (e.g. 1.0E4)

즉 여기서 decimal 은 단순히 “숫자를 10진수 표현으로 보여준다”는 뜻이고, 그 과정에서 **천 단위 구분 기호(콤마)** 를 로케일에 맞게 자동으로 넣어주는 거예요.


👉 그래서 실제 출력이

- 10,000 (en_US)
- 10.000 (de_DE)
- 10 000 (fr_FR)

이렇게 달라집니다.

