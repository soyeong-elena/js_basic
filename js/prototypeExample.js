console.clear();
console.dir(Student);   //최상위 객체는 Function 프로토타입 객체-함수
console.dir(student1);   //최상위 객체는 Object 프로토타입 객체

let string = new String('김기정입니다.');
console.dir(String);
console.dir(string);

let array =[2,33,44];
console.dir(array);

//객체 리터럴 표현식을 이용한 객체 즉시 생성
let person = {
  name : '강소영' ,
  age: 10,
  doTeach : function() {
    console.log('강의합니다.');
  }
};
console.log(person.constuctor === Object);
console.log(person);
console.dir(person.hasOwnProperty('name'));
