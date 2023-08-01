// 표준내장함수

// true, false리턴
const yn = confirm('메세지출력');
if (yn) {
  console.log('true');
} else {
  console.log('false');
}

setTimeout(() => console.log('2초 후 실행되었습니다.'), 2000);
setInterval(() => console.log('5초마다 실행됩니다.'), 5000);

let second = 1;
let timer= setInterval(() => {
  document.write(`<p>${second}초</p>`);
  second++;
}, 1000);

// 10초 후 타이머 제거
setTimeout(() => {
  clearTimeout(timer);  
}, 10000);

// 숫자만 가져오는 함수
let money = '100원';
money=parseInt(money);
console.log(typeof money);

let result = 1000/'김기정';
if (isNaN(result)) {
  console.log('true');
}