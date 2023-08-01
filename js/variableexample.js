// ES6이전 변수 선언
// 변수 재선언 가능

var message;
message = '웹 프로그래밍언어의 최강자 javascript';
console.log(message);

// var는 출력-선언 순서바꿔서 사용 가능, let은 안됨
let age = 20;
console.log(age);

let weight = 50.6;
console.log(weight);
// 결론은 자바처럼 엄격하게 let을 쓰자, 나중에 문제생김

// 동적 타입핑
message = 10;
message = 15.5;
console.log(message);

// 자바스크립트 출력 방법 3가지
// 1.안쓰는 방법
document.write('문서의 동적 출력');
// 2.alert함수-창띄워주기
// alert('메세지 출력입니다.');
// 3. 콘솔창에 출력-주로 사용
console.log('15');

// 상수처리 const
const MAX = 100;
console.log(MAX);

