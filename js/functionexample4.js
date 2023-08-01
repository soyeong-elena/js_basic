// 콜백함수는 왜 써야하나?
function calculate(fn,a,b) {
  // 데이터 처리
  return fn(a,b);
}

let num1 = 300, num2 = 500;

// 처리방법을 호출하는 쪽에서 관리
let result=calculate(function (x,y) {
  return x+y;
}, num1,num2);
console.log(result);

result = calculate((x,y)=>x+y,num1,num2);
console.log(result);

result = calculate(function (x,y) {
  return x * y;
}, num1, num2);
console.log(result);
result = calculate((x,y)=>x*y,num1,num2);

// self즉시 호출: 선언하고 바로 호출, 메모리에서 바로 삭제
(function doTask() {
  console.log("나는 즉시 호출됩니다.");
})();