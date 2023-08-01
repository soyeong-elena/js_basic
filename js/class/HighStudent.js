import { Student } from "./StudentClass.js";

export
class HighStudent extends Student {
  constructor(ssn, name, korean, english, math, age) {
    //  this={};
    super(ssn, name, korean, english, math);
    this.age = age;
  }
  // setter getter 생략

  // 메소드 오버라이딩
  toString() {
    return super.toString() + `\t ${this.age}`;
  }
}

// let highStudent = new HighStudent(12, '이기정', 90, 80, 50, 15);
// console.log(highStudent.toString());