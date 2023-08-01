// 전역함수 선언
function doTask() {
  // console.log('어떤 일을 하는 중');
  console.dir(this);
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}
// 객체 생성
let person = {
  name : '강소영',
  age: 5,
  doTeach : function () {
    console.log('프로그래밍을 강의한다.');
  }
}

// 함수 직접 호출
doTask();

// 함수 간접 호출(동적 호출)
// doTask.call();
doTask.call(person);

// 특정객체에 동적 속성 추가 기능
function addAttrubute(key, value) {
  this[key] = value;
}

addAttrubute('name', '김기정');
addAttrubute('age', '15');
console.dir(window);

let user = {};
// addAttrubute.call(user, 'name', '김기정');
// addAttrubute.call(user, 'age', 15);
// addAttrubute.apply(user, ['name', '김기정']);
// addAttrubute.apply(user, ['age', 15]);
let addProperty= addAttrubute.bind(user);
addAttrubute('name', '김기정');
addAttrubute('age', 15);
console.dir(user);

// 오버라이딩되어 오염된 hasOwnProperty 쓰지말라고 Object.hasOwnProperty.call 해서 부름
let array = [2, 9, 7, 4];
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const element = array[key];
    console.log(value);
  }
}




