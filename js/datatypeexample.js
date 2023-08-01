// 템플릿 스트링
let name ='김기정';
let message = `템플릿 스트링 ${name}`;
console.log(message);

// typeof 연산자
let age = 10;
console.log(typeof age);
let weight = 50.5;
console.log(typeof weight);

// 특수 숫자리터럴-키워드
console.log(10/0);
console.log(-10/0);
console.log('문자열'/10);

// 논리형-0제외 다 true, 0와 빈것 false
let flag = false;
let flag2 = NaN;
if(flag2){
  console.log('참');
}

// 자바스크립트는 자동형변환이 엄청 많이 발생
// 숫자가 문자 위에 있음
console.log('1000'*'4');
console.log(1000 * '4');

