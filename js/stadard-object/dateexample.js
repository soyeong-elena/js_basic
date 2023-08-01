let today = new Date();
console.log(today.toString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());

console.log(today.getTime());

//date의 static 함수 now
today = Date.now();
today = new Date.setTime(today);
// console.log(today.constructor);
console.log(today.toLocaleString());

