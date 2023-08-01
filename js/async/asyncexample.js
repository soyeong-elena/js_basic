// 동기-순차적실행
// console.log('1실행');
// function doTask() {
//   console.log('doTask 실행');
// }
// console.log('2실행');
// console.log('3실행');
// doTask();

// 비동기-callback은 대기실에 있다가  callstack이 비어지고 마지막에 나옴
console.log('1실행');
doTask();

function doTask() {
  setTimeout( ()=> {
    console.log('doTask비동기 실행');
  },1000);
}
console.log('2실행');
console.log('3실행');


