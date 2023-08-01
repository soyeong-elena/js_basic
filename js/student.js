// 학생객체 생성을 위한 틀(생성자 함수)
function Student(ssn, name, korean, english, math) {
  // this = {};
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;

  

  // 이렇게 넣으면 각각의 객체가 함수를 가져서 메모리 낭비가 됨
  // this.getSum = function () {
  //   return this.korean + this.english + this.math;
  // }
  // this.getAvg = function () {
  //   return this.getSum()/3;
  //   // this 빼면 {}바깥에서 변수 찾아다녀서 없다고 나옴
  // }
  // this.toString = function () {
  //   return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`;
  // }
  // return this;
}
// 정적(static) 속성 및 메소드 추가
Student.schoolName = 'EZen 초등학교';
Student.showSchoolName = function () {
  alert(Student.schoolName);
}

// 생성자 함수(객체)의 메소드를 Student의 프로토타입 객체에 할당
Student.prototype.getSum = function () {
  return this.korean + this.english + this.math;
}
Student.prototype.getAvg = function () {
  return this.getSum()/3;
}
Student.prototype.toString = function () {
  return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`;
}


// let 인스턴스변수 = new 생성자함수
let student1 = new Student(12,'이기정', 90,80,50);
console.log(student1.schoolName);
let student2 = new Student(12,'이기정', 90,80,50);
let student3 = new Student(12,'이기정', 90,80,50);
let student4 = new Student(12,'이기정', 90,80,50);
console.log(student1.toString());   //프로토타입객체의 toString() 메소드 호출
console.log(student2.toString());
console.log(student3.toString());
console.log(student4.toString());

// 프로토타입 상속 체인 검증
// in은 부모까지 검색
console.log('name' in student1);
console.log('valueOf' in student1);

// Object 프로토타입객체의 메소드 재사용
// hasOwnProperty 자기자신것만 검색
console.log(student1.hasOwnProperty('name'));
console.log(student1.hasOwnProperty('valueOf'));
console.log(student1.toString());

// constructor 쓰임새
function doTask(object) {
  // if (object.constructor === Student) {
  if (object instanceof Object) {
    console.log('학생일때만 수행하는 메소드입니다.');
  }
}
doTask({});

Student.showSchoolName();

