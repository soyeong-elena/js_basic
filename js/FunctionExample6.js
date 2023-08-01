// 함수를 만드는 방법 3가지
// #1. 함수 선언식
// #2. 함수 표현식
// #3. Function 생성자 함수를 이용한 동적 함수 생성

// 스크립트 준비단계에서 하는 동작
// function Function(){
//   //----------
// }
// let Object = new Function('----');
// let String = new Function('----');
// let Date = new Function('----');
// let Number = new Function('----');
// let Boolean = new Function('----');

// let window = new Function('-----');
//  let document = new Document();
//  let history = new History();
//  let location = new Location();
//  let navigator = new Navigator();

// 동적으로 함수 만들기
let sum = new Function('x', 'y', 'return x+y');
let result = sum(10,20);
console.log(result);

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}






