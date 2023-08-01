// Array 객체의 주요 메소드
let array = [1,2,3,4,5,6,7,10];

let list = array.slice(2,5);
console.dir(list);

let deleteList = array.splice(5,1);
console.dir(deleteList);

// array.splice(1,0,'A','B');
console.dir(array);

// 검색 메소드 활용
// 판별함수
function findCondition(num) {
  if (num === 7) {
    return true;
  }
  return false;
}
let findnum = array.find(findCondition);
console.log(findnum);

array.find(function(num){
  if (num === 7) {
    return true;
  }
  return false;
});

// 조건삼항 연산자
array.find(function (num) {
  return num === 7 ? true : false;
});

// 화살표함수
array.find((num)=> num===7 ? true : false);
array.find(num => num===7 ? true : false);

// 배열에서 짝수 목록만 검색
let findNums = array.filter(num => num % 2 === 0 ? true : false);
console.dir(findNums);

// 배열 반복(순회)
array.forEach((num,index) => {
  console.log(num, index);
});

// 배열정렬: 문자열배열>유니코드값으로 배열함-문제생김(문자열만 있으면 괜찮을지도)
// array.sort();
// console.log(array);

array.sort((num1, num2) => {
  // return num1 - num2; //오름차순
  return num2 - num1; //내림차순
});
console.dir(array);

