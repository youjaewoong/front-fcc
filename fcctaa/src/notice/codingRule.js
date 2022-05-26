//***********************************************************************************
//* 이름: src/notice/codingRule.js
//*
//* 설명:
//*
//* 참고:
//*
//*
//***********************************************************************************

/** 

개발 시 권고사항 (2022.04.19)

(1) 여기서는 eslint, prettier에서 설정한 사항 외의 내용들을 규정한다.

(2) 개발자의 개발 편의를 위해 가급적 최소한의 사항들만을 규정한다.




[필수]

1. (매우 중요) 주석을 상세히 달 것.


2.  .vue 파일은 대문자로 시작할 것.
     .js 파일은 소문자로 시작할 것.




[권고]

1. (중요) 가급적이면 jquery 보다는 자바스크립트를 이용하여 구현 권고.
          jquery가 필요한 경우에는 jquery 사용해도 된다.



2. (중요) var 사용 지양

    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    let b = 2;



3. (중요) 가급적이면 es6문법으로 코딩 권고.



4. vue 컴포넌트 객체의 프로퍼티 순서는 아래와 같이 권고.

	name, props, components, data, computed, watch, created, methods 순.



5. 모든 주석은 읽기 쉽도록 공백으로 시작 권고.

    // bad
    //is current tab


    // good
    // is current tab



6. ==보다는 ===를 사용 권고.



7. new 사용 지양

    // bad
    const obj = new Object();
    const arr = new Object();

    // good
    const obj = {};
    const arr = [];



8. 변수명, 함수명 등은 가급적 최소 3자리 이상으로 권고.

    // bad
    for (let i=0; ;i++)

    // not bad
    for (let ii=0; ;ii++)

    // good
    for (let idx=0; ;idx++)



9. 변수명, 함수명, 파일명 등 명명시 이해하기 쉽게 뜻을 가지게끔 명명 권고.

    // bad
    function sbp() {
      // ...
    }

    // good
    function startingBusPoint() {
      // ...
    }



10. 상수명은 전부 대문자로 작성 권고.



11. 객체명, 함수명은 camelCase 사용 권고.

    // bad
    const this_is_my_object = {};
    function this_is_my_function() {}

    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}



12. 생성자명, 클래스명에는 pascalCase 사용 권고.

    // bad
    new user();

    // good
    new User();



13. 후행,선행 밑줄 사용 지양.

    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';
    this._firstName = 'Panda';

    // good
    this.firstName = 'Panda';



14. 가급적이면 화살표함수 사용 권고.

    // bad
    function foo() {
      const that = this;
      return function () {
        console.log(that);
      };
    }

    // good
    function foo() {
      return () => {
        console.log(this);
      };
    }



15. 속성이나 메소드값이 불리언인 경우 이름앞에 is를 붙임 권고.

    // bad
    mobile() {  return false; }

    // good
    isMobile() { return false; }



16. 직접 할당보다는 가급적 push 사용 권고.
    직접 할당이 필요한 경우에는 직접 할당해도 된다.

    const arr = [];

    // bad
    arr[arr.length] = 'abracada';

    // good
    arr.push('abracada');



17. eval() 사용 지양.



18.  객체 속성 접근시 [] 보다는 가급적 . 사용 권고.

    // bad
    const isJedi = luke['jedi'];

    // good
    const isJedi = luke.jedi;


19. 변수 선언시 const, let 생략 지양.

    // bad
    const items = getItems(),
          goSportsTeam = true,
          dragonball = 'z';

    // good
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';



20. 가급적이면 num++ 보다는 num += 1 사용 권고.



21. 삼항연산자 중첩 사용 지양.

    // bad
    const foo = maybe1 > maybe2
      ? "bar"
      : value1 > value2 ? "baz" : null;

    // good
    if () {
    } else if() {
    }



*/
