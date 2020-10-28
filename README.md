# portfolio 설명  
https://sangmin802.github.io/portfolio/  
위의 url로 이동하여 각 포트폴리오 사이트를 볼 수 있습니다.
## artbox(jQuery) 190812~190819  
* JSON을 활용하여 대량상품등록이 구현되었습니다.  
  * 세부옵션을 통해, 상품을 분류하여 출력하도록 되어있습니다.  
* 인기상품을 출력할 수 있습니다.  
* localStorage를 통해 상품을 저장할 수 있습니다.  
## posco-products(jQuery) 190819~190828  
* POSCO 원페이지식 웹사이트입니다.  
* scroll animation이 활용되었습니다.  
* 반응형 환경 또한 구현되었습니다.  
## 상쾌환(jQuery) 190828~190904  
* 상쾌환 숙취음로 웹사이트입니다.  
* animation을 중점으로 한 웹사이트입니다.  
* 좌측 버튼을 통해 웹사이트의 전체적인 분위기를 변경할 수 있습니다.  
* date 메소드를 활용하여 제작한 달력을 통해 해당 달의 행사를 조회할 수 있습니다.  
## COOKIT(jQuery) 190903~191003  
* time, date 메소드를 활용하여 필요한 기능을 만들었습니다.  
  * 상품 배달 예정날짜  
    * 일요일일경우, 다음날 배송  
  * 실제 날짜를 확인하여, 오늘 이후 5일까지 계속 자동 최신화  
  * 매진된 상품, block  
* sort 메소드를 활용하여, 인기순 등 분류할 수 있도록 하였습니다.  
* 상품 상세보기 페이지에서 상품의 날짜 및 수량을 각 각 설정할 수 있습니다.  
* localStorage를 통해 상품을 저장하고, 상단에서 확인할 수 있습니다.  
* 장바구니에서 상품을 제거하고 수정할 수 있습니다.  
* 반응형 환경 또한 구현되었습니다.  
## 플라이어스(Angular2)  
* 백엔드 개발자와 협업을 통해 제작한 식자재마트를 대상 웹 전단제작 어플리케이션입니다.  
* 간단한 절차를 통해 회원가입이 가능합니다.  
* 지점별 분류되어있으며, 생산한 전단 세부옵션을 복사하여 재활용할 수 있습니다.  
* 전단 제작 시, 상품 등록 양식 엑셀을 다운받을 수 있습니다.  
* 바코드, 상품명, 가격 등 입력된 엑셀을 input을 통해 받으면, script에서 확인한 뒤, 분류하여 우측에 출력합니다.  
  * 없는 상품일 경우, 입력 요청이옵니다.  
  * 중복상품일 경우 알람이 뜹니다.
* 엑셀을 통해 대량등록이 가능하고, 입력폼으로 개별등록도 가능합니다.  
* font-size, color, background등 세부옵션설정이 가능하며, 전단제작시 특정 이벤트 웹페이지를 생성하며, url주소를 반환합니다.  
## 플라이어스 전단(Angular2)  
* 위의 플라이어스 웹 어플로 제작된 전단으로, 모바일환경에서만 확인가능합니다.  
* 마트의 고객들에게 발송되는 전단입니다.  
* 클릭시 상품의 정보를 볼 수 있습니다.  
* 메뉴를 통해 마트명, 행사기간, 전화번호를 확인할 수 있습니다.  
* 메뉴를 통해 전단 배열을 상품분류로할지, 날짜별로할지 선택할 수 있습니다.  
## 해물한상(React.js) 200211~200227  
* React-Router를 통한 path가 있는 SPA  
  * 웹사이트에서 특정 위치를 기억할 수 있도록 React-Router를 사용하였습니다.  
  * menutitle component에서 path마다 다른 값들을 출력할 수 있도록 하였습니다.
* React-Redux를 통한 state관리  
  * 상, 하위 component 불필요한 props 전달을 최소화하기위해 redux디자인패턴을 사용하였습니다.  
  * action type을 통해 return되는 state값을 분류하였습니다.  
  * state를 반환할 때, 이전의 state를 남길 수 있도록 immutability를 사용하였습니다.  
  * redux로 connect 된 component 또한, 재활용할 수 있도록 분리하였습니다.  
* ES5 이상의 문법을 최대한 활용하였습니다.  
  * 첫 접속 시, state의 상수값을 확인하여 두개의 index페이지중 필요한 한가지만 띄우도록 하였습니다.  
* fetch api를 활용하여 필요한 json정보를 가져오도록 하였습니다.  
* 반응형 환경 또한 구현되었습니다.  
## 던파 유저검색 앱  
* 사이트 대신 코드를 보여드립니다.  
* 프레임워크 없이, 바닐라자바스크립트를 활용하였습니다.  
* node.js 와, mysql을 통해 서버 및 db관리를 하였습니다.  
* webpack을 통해 배포용 build파일을 만들수 있습니다.  
* 네오플 제공 open api를 활용했습니다.  
## TwoFastGif(Vue.js) 200717~  
* 백엔드를 공부중인 친구와 함께 만든 웹 어플리케이션입니다.  
* Vue-Cli를 사용한 웹 어플리케이션.  
* Prerendering을 사용하여, 검색엔진 최적화가 되어있습니다.  
  * 현재 Google, Naver 모두 검색 가능합니다.  
* ES5 이상의 문법을 최대한 활용하였습니다.  
* 반응형 환경 또한 구현되었습니다.  
## LostArk Hands(Kotlin - Android) 201007~
* 안드로이드 개발 언어인 코틀린과 코루틴을 활용하여 만든 로스트아크 유저 검색기입니다.
* 해당 게임사에서 API를 제공하지 않아, 공식 사이트를 직접 파싱하여 필요한 데이터를 추출하여 만든 앱입니다.
## LostArk Hands(React) 201009~
* React를 활용하여 만든 로스트아크 유저 검색기입니다.
* 해당 게임사에서 API를 제공하지 않아, 공식 사이트를 직접 파싱하여 필요한 데이터를 추출하여 만든 앱입니다.
* React-hook, Redux-hook