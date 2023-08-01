// 강아지 객체 즉시 생성(틀 없이)
// 객체 리터럴 표현식
let dog = {
  name : '루니',
  age : 8,
  kind : '비숑',
  eat : function () {
    // console.log(this.name+'가 식사중');
    console.log(dog.name+'가 식사중');
  },
  toString : function () {
    return "오버라이딩";
  }
}
//객체의 속성 검색
console.log(dog.name);
// []안에 key값으로 접근, css에서 color-background '-'사용할때 씀
console.log(dog['name']);
console.log(dog.age);
console.log(dog['kind']);
dog.eat();

// 속성 변경
dog.name = '로오니';
console.log(dog.name);

// 속성삭제
delete dog.age;
console.log(dog.age);

// 기능추가
dog.work = function () {
  console.log('일하는중');
}
dog.work();

// in 연산자
if ('name' in dog) {
 console.log(dog.name); 
} else {
  console.log('name 속성이 없습니다.');
}
// for in 연산자, []문자열 가져올때
for (const key in dog) {
  console.log(key, dog[key]);
}
// for of 연산자
let array = [5,3,9,1];
for (const value of array) {
  console.log(value);
}
console.log(dog.toString());
console.log(dog);

console.dir(dog);
// [[prototype]]:object 부모개체 출력, 가진 메소드내용 출력됨

// 콘솔창 비우기
console.clear();



