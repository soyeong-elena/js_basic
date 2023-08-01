// 학생객체 생성을 위한 틀(클래스)
// export
class Student {
  constructor(ssn, name, korean, english, math) {
    // this = {};
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
  // 정적(static) 속성 및 메소드 추가
  static schoolName = 'EZen 초등학교';

  // 생성자 함수(객체)의 메소드를 Student의 프로토타입 객체에 할당
  getSum() {
    return this.korean + this.english + this.math;
  }
  getAvg() {
    return this.getSum() / 3;
  }
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`;
  }
}
export{Student}