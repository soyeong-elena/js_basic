// let array = new Array();
let array = [];
// let array = [30];
// let array = [{name:'김기정'}];
// let array = [function (){}];
array.push(10);
array.push('문자열');
array.push(new Student(12, '이르음', 50,20,90));
array.push(new Student(15, '다음사람',60,80,50));
// 첫번째로 추가
array.unshift(new Student(20, '처음사람',60,80,50));

for (const value of array) {
  console.log(value);
}

// array 0번째
console.log(array[0]); 
console.log(array['0']);
// console.dir(array);
console.log(array.length);

// 삭제방법
delete array[0];
// 배열의 끝에서 삭제하고 length줄임
array.pop();
// 배열의 맨앞에서 삭제하고 length줄임
array.shift()

console.dir(array);