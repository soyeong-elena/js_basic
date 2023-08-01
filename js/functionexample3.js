// 함수 리터럴 표현식
// 함수 이름 필요없으면 비우기-익명함수
let myfunction = function (message) {
  console.log(message);
}

function doTask(fn){
  // 콜백함수
  
  fn();
}

myfunction('함수 리터럴 표현식입니다.');
doTask(myfunction);