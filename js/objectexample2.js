// 생성자 함수를 이용한 객체 틀
function Dog(name, age, kind) {
// this={};
// 프로퍼티(속성) 추가
  this.name = name;
  this.age = age;
  this.kind = kind;
  // 기능(메소드)추가
  this.cry = function () {
    console.log(`${this.name}강아지가 웁니다.`); 
  }
  // return this; 알아서 해줌
}

let dog = new Dog('루니', 8, '비숑');
console.log(dog);
dog.cry();

// new를 빼면 this={}, return this;가 실행안됨
let dog2 = Dog('야옹이', 8, '스트릿');
console.log(dog2);

// 자바스크립트 표준 객체(생성자 함수)를 사용
let string = new String('문자열');
const count = string.length;
console.log(count);

// 자바스크립트도 묵시적 생성 가능
// let ssn = new String();
let ssn = "680313-1234567";
let char = ssn.charAt(7);
console.log(char);
switch (char) {
  case '1': console.log('남자'); break;
  case '2': console.log('여자'); break;
  case '3': console.log('남자'); break;
  case '4': console.log('여자'); break;
}
// 자바스크립트의 표준 래퍼개체 String, Number, Boolean/배열 Array
let str = new String('문자열');
let number = new Number(10);
console.log(number);
let bool = new Boolean(true);
console.log(bool);
console.dir(bool);
// 날짜는 date
let today = new Date();
console.log(today);
console.log(today.toLocaleString());
// 자바스크립트는 순수한 배열이 없음, Array라는 객체로 제공
// 자바예시-순수한 배열(계란판) > int[] array = new int[5];
// 자바스크립트는 자바의 List, Set, Queue, Stack 기능이 들어있음-중요개체*
let array = new Array();



