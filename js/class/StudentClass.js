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
  static showSchoolName() {
    console.log(Student.schoolName);
  }
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
/*
let student = new Student(12, '이기정', 90, 80, 50);
console.log(student.schoolName);

// 프로토타입 상속 체인 검증
// in은 부모까지 검색
console.log('name' in student);
console.log('valueOf' in student);

// Object 프로토타입객체의 메소드 재사용
// hasOwnProperty 자기자신것만 검색
console.log(student.hasOwnProperty('name'));
console.log(student.hasOwnProperty('valueOf'));
console.log(student.toString());


Student.showSchoolName();

console.dir(Student);*/

// 변수, 함수도 내보내기 가능
let xxx = 5000;
function yyy() {
  console.log('yyy함수');
}

export {Student, xxx, yyy}
// export {Student as '별칭가능-보안'}