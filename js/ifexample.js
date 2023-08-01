// 고정값
// let score = 88;

// 화면에서 입력받아 출력, 브라우저마다 기본 입력창디자인이 다름
// prompt 문자열로 받음(비정형인자, 0-placeholder기본값넣을수있음)
let score = prompt('점수를 입력하세요', 0);
console.log(typeof score);

if (score >= 60) {
  console.log('pass');
} else {
  console.log('불합격');
}
// true여서 합격으로 나옴...error조심!
if (score) {
  console.log('pass');
}

if (score >= 90) {
  console.log('수');
} else if (score >= 80) {
  console.log('우');
} else if (score >= 70) {
  console.log('미');
} else if (score >= 60) {
  console.log('양');
} else {
  console.log('가');
} 

