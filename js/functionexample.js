// 함수선언문은 hdisting 되기 때문에 정의전 호출 가능
console.log(sum(900,200));

// 사용자 정의 함수
function sum(x, y) {
  return x + y;
}

// 함수호출
// let result = sum(10, 5);
// console.log(result);

// 함수호출시, 정의된 매개변수와 전달인자의 개수가 일치하지 않더라도 호출이 가능
// 실행은 되도 NaN떨어짐
let result = sum(5);
// 5+undefined=NaN
// 그래서 규칙지키는 자바처럼해야함
console.log(result);

// 전역변수 선언
let global = '전역변수입니다.';

// 함수 선언문
// 구구단 출력
function printGugudan() {
  document.write('<h3>for문을 이용한 구구단 출력</h3>');
  document.write('<table border=1>');
  for (let i = 2; i <= 9; i++) {
    document.write('<tr>');
    for (let j = 1; j <= 9; j++) {
      document.write(`<td>${i} * ${j} = ${i * j}</td>`);
    }
    document.write('</tr>');
  }
  document.write('</table>');
}
printGugudan();

// 이제는 var쓰면 안됨!
// let은 오류남-var변수는 함수스코프
function doTask() {
  let som = 100;
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  // {}바깥에서 i 접근가능함
  console.log(i);
}
// 원래는 블록스코프
function doTask() {
  let som = 100;
  let i = 0;
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  //return undefied;
  // 기본으로 있음!
}

let result2 = doTask();
console.log(result2);

// default parameter 디폴트 파라메터
function sendMessage(message) {
  console.log(message + '를 서버에 전달합니다.');
}
// 디폴트 파라메터
function sendMessage(message='메세지가 없다.'){
  console.log(message + '를 서버에 전달합니다.');
}
sendMessage();
sendMessage('hello');

// Rest parameter(비정형인자)
// 메소드 오버로딩 가능함(매개변수다르면 가능)
function sum(...nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}
sum(1, 2,3,4,5);
sum(922);

const res = sum(99,19192);
console.log(res);




