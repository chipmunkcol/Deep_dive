🔧기술스택 <br/>
FE(JavaScript/ ContextAPI/ Styled-Components/ Firebase(Hosting)) <br/>
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

<details> 

<summary>1.state </summary>

    요 프로젝트는 state 관리에 공을 많이 들였다. 일부러 props 드릴링도 해보고 recoil로 관리도 해봤다가 생각해보니 로그인이랑 장바구니 state정도만 쓸건데 contextAPI 써도 될거같아서 context로 관리했다. docs엔 많이 안 변하는 state 관리할 때 쓰라고해서 좀 걱정했는데 저정도는 세이프였다.
    그리고 생각보다 나를 괴롭혔던(?)건 장바구니에 item 추가하는거였는데 item 각 수량을 반복문으로 만든 item 컴포넌트 안에서 useState(0)에 넣고 관리하다보니까 장바구니에서 수량을 추가하거나 뺄 때 반복문 item의 useState(0)들이 모두 랜더링돼서 빠르게 추가하거나 빼면 버그가 발생했다. useState(0)를 item 반복문 밖으로 빼서 수량이 변경된 item만 랜더링 시켜줘서 문제를 해결했는데 요거 디버깅 과정에서 랜더링을 차분히 관찰해 볼수 있었다. (react devtools로 components와 profiler의 컴포넌트 랜더링 highlight 관찰하면서 디버깅했는데 뭐 하다가 중간에 console도 찍긴 했지만..ㅎ 디버깅 연습정도는 해볼수있었다 디버깅 많이 해보자 :) )
    
</details>

<details>

<summary>2.DataBase(DB)</summary>

    전에 몽고디비 써보긴했는데 진짜 병아리때 써봐서 느낌이 잘 안왔는데(지금도 병아리긴함), 백엔드랑 API 설계하고 AJAX 통신했을때랑 또 다른 맛이었다. 데이터베이스 설계라던지 안해봐서 처음엔 부담이 좀 있었는데 Firebase는 애초에 NoSQL이라(스키마가없어서) 시작하기도 좋고 특히 실시간 동기화가 너무 좋았음!
    데이터베이스가 값이 변하면 알려주는 기능이있어서 내장된 코드 onSnapshot & onAuthStateChanged 써서 실시간 주문한 내역 가지고오고 로그인 내역 가지고오는 등 
    그만큼 코드 신경을 덜 쓸수있었고 사용법도 굉장히 간편했다.  

    푸쉬알람기능도 있어서 전에 알람기능 구현하려고 sse썼는데 다음엔 이거 써봐야징 

</details>

<details>

<summary>3.css</summary>

    레이아웃 구성하는거 좀 자신감이 붙었다🐱‍🏍 css 하다보면 좀 시간 아깝고 그랬는데 익숙해지기도했고 animation 뭐 넣을지 고민하는게 생각보다 쏠쏠하다.
    반응형 웹 안해봐서 어려운건줄 알았는데 생각보다 싱거웠다. 다음엔 sass 써봐야징

</details>
    
    

# React Deep_Dive(udemy t.Max)

    - why react? 자바스크립트 라이브러리로 UI를 더 쉽게 구현
    - why component? 재사용성(중복 감소) / 분리(오류 감소) 작고 관리 가능한 단위로 유지
    - 양방향 바인딩? 기본적으로 부모 -> 자식(단방향)인데 props로 매개변수 받아서 끌어올리면 양방향 가능 data <-> view 서로 업데이트되는 상호 구독 관계
    - why key? react가 성능 손실, 버그 없이 효과적으로 DOM을 변경,추가,삭제하게 해준다. => 교유 key값을 통해 엘리먼트 or 컴포넌트 변화를 감지해 효율적으로 DOM 업데이트
    - why NextJS? (React 프레임워크_라이브러리보다 더 크고 기능과 규칙이 많음)
        1) 초기 페이지 로딩 속도 매우증가(SSR_초기 페이지를 사전 렌더링해서 유저 대기시간이 없다)   
        2) SEO 최적화 (html 요소를 싹 가지고와 검색 상위권 노출이 용이하다)
        - Automatic page pre-rendering: Great for SEO and initial load
        - Blending client-side and server-side: Fetch data on the server and render finished pages
        3) 풀스택 프레임워크(Fullstack Capabilities)
        - Easily add backend (server-side) code to your Next / React apps
        - Storing data, getting data, authentication etc. can be added to your React projects 
        4) routing (File-based Routing)
        - Define pages and routes with files and folders instead of code
        - Less code, less work, highly understandable
    - why useReducer? state를 체계적으로 관리하는데 좋음 useState보다 보일러플레이트는 많아 러닝커브가 조금있지만 로직을 분리해 컴팩트하게 관리 가능
    복잡한 state 관리/ state끼리 연관된 데이터를 다룰때 고려
    - why React.memo? props가 변할 때만 리랜더링 해줌. 근데 따로 저장해놓고 props가 변화했는지 비교하는 '재평가 비용'이 들기 때문에 리랜더링 비용이 더 드는지 props를 비교하는 성능 비용(props의 갯수 컴포넌트 복잡도 memo로 감싼 컴포넌트의 자식 컴포넌트들의 수) 등을 비교해 이득일 경우에만 사용할것 소규모 애플리케이션에선 거의 필요없음
    -> 애플리케이션 규모가 크고 & React.memo 로 컴포넌트 렌더링 방지하면 자식컴포넌트 또한 렌더링이 방지되므로 자식 트리가 많은 경우에 유용하게 쓰일 수 있다. 

    -for (const key in Array) { // 꼭! 외울것, key를가진 배열 key로 뽑아서 반복문 돌리기
      const updatedMeal = {...res2[key], id: key}
      setMealArr(prev => [...prev, updatedMeal])
    }
    - why .env? git에 중요 api등을 올리기 싫을 때 사용/ 근데 git에만 안올라가고 배포할때는 같이 업로드되기때문에 추가 관리필요

