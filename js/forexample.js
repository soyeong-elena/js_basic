// for in문
// 배열 리터럴(선언, 생성, 초기화 동시에)
let array = [3,20,45,5,43,452];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}
// 요소의 index리턴 for in문
for (const i in array) {
      console.log(i, array[i]);
}
// 자바의 향상 for문
for (let num of array) {
  console.log(num);
}
