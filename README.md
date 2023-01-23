🔧기술스택 
FE(JavaScript/ ContextAPI/ Styled-Components/ Firebase(Hosting))
BE(Serverless_Firebase(Auth, FireStore))

# Restaurant 배달 어플입니다 :)
 [구경하기🙋‍♀️](https://auth-c1322.web.app/)

## 🎮 주요기능
    - 음식 장바구니에 담기(contextAPI)
    - 로그인(firebase_Auth)
    - 음식내역 가져오기(firebase_DB_realtime)
    - 주문하기 & 주문내역(firebase_DB_fireStore)

##  🎨 Styled
    - 햄버거 메뉴바 등 반응형 웹(@media)
    - 카트 애니메이션(keyframes & useEffect)
    - 로그인사용자 메뉴(react-draggable)

## 🦖 트러블슈팅
    

# React Deep_Dive(udemy t.Max)

    - why react? 자바스크립트 라이브러리로 UI를 더 쉽게 구현
    - why component? 재사용성(중복 감소) / 분리(오류 감소) 작고 관리 가능한 단위로 유지
    - 양방향 바인딩? 기본적으로 부모 -> 자식(단방향)인데 props로 매개변수 받아서 끌어올리면 양방향 가능 data <-> view 서로 업데이트되는 상호 구독 관계
    - key? react가 성능 손실, 버그 없이 효과적으로 DOM을 변경,추가,삭제하게 해준다. => 교유 key값을 통해 엘리먼트 or 컴포넌트 변화를 감지해 효율적으로 DOM 업데이트
    - why NextJS? 
        1) 초기 페이지 로딩 속도 매우증가(초기 페이지를 사전 렌더링해서 유저 대기시간이 없다)
        2) SEO 최적화 (html 요소를 싹 가지고와 검색 상위권 노출이 용이하다)
        3) 풀스택 프레임워크()
    - why useReducer? state를 체계적으로 관리하는데 좋음 useState보다 보일러플레이트는 많아 러닝커브가 조금있지만 로직을 분리해 컴팩트하게 관리 가능
    복잡한 state 관리/ state끼리 연관된 데이터를 다룰때 고려
    - why React.memo? props가 변할 때만 리랜더링 해줌. 근데 따로 저장해놓고 props가 변화했는지 비교하는 '재평가 비용'이 들기 때문에 리랜더링 비용이 더 드는지 props를 비교하는 성능 비용(props의 갯수 컴포넌트 복잡도 memo로 감싼 컴포넌트의 자식 컴포넌트들의 수) 등을 비교해 이득일 경우에만 사용할것 소규모 애플리케이션에선 거의 필요없음
    -> 애플리케이션 규모가 크고 & React.memo 로 컴포넌트 렌더링 방지하면 자식컴포넌트 또한 렌더링이 방지되므로 자식 트리가 많은 경우에 유용하게 쓰일 수 있다. 

    -for (const key in Array) { // 꼭! 외울것, key를가진 배열 key로 뽑아서 반복문 돌리기
      const updatedMeal = {...res2[key], id: key}
      setMealArr(prev => [...prev, updatedMeal])
    }
