// 여러 학생 목록관리 객체
// 기능위주
function StudentRepository() {
  // this={};
  this.students = new Array();
  // this.students = [];

  // 학생추가
  this.addStudent = function (student) {
    this.students.push(student);
  }
  // 학생 전체
  this.getstudents = function () {
    return this.students;
  }
  // 학번으로 학생 검색
  this.findBySsn = function (ssn) {
    // this.students.filter(ssn === this.ssn);
    let x = 0;
    for (let index = 0; index < this.students.length; index++) {
      if (ssn === this.students[index].ssn) {
        x = index;
        return this.students[x];
      }
    }
    return undefined;
  }

  // 이름으로 학생 검색
  this.findByName = function (name) {
    let sameName = [];
    // let sameName = new Array();
    for (let index = 0; index < this.students.length; index++) {
      if (name === this.students[index].name) {
        sameName.push(new Student(this.students[index]));
      }
    }
    return sameName;
  }
  // 학번으로 학생 삭제
  this.removeBySsn = function (ssn) {
    let x;
    for (let index = 0; index < this.students.length; index++) {
      if (ssn === this.students[index].ssn) {
        x = index;
         this.students.splice(x, 1);
         return true;
      }
    }
    return false;
  }
  // 점수평균 범위로 검색
  this.findByRange = function (start, end) {
    let avgrange = [];
    for (let index = 0; index < this.students.length; index++) {
      if (start <= this.students[index].getAvg() &&
        this.students[index].getAvg() <= end) {
        avgrange.push(new Student(this.students[index]));
      }
    }
    return avgrange;
  }
  // return this;
}

// 임시테스트
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(120, '이기정', 90, 80, 50));
studentRepository.addStudent(new Student(150, '김기정', 90, 80, 50));
studentRepository.addStudent(new Student(166, '박기정', 30, 20, 10));
studentRepository.addStudent(new Student(153, '최기정', 90, 80, 50));
studentRepository.addStudent(new Student(120, '강기정', 20, 40, 30));
studentRepository.addStudent(new Student(200, '이기정', 90, 80, 50));

console.log("학생전체리스트 테스트");
let alllist = studentRepository.getstudents();

for (const student of alllist) {
  console.log(student.toString());
}

console.log("학번검색테스트");
//  let ssnfind = studentRepository.findBySsn(120);
let findssn = studentRepository.findBySsn(150);
console.log(findssn.toString());


console.log("이름검색테스트");
let findname = studentRepository.findByName('이기정');
for (const student of findname) {
  console.log(student.toString());
}

console.log("학번삭제테스트");
let deletessn = studentRepository.removeBySsn(150);
console.log(deletessn);

console.log('삭제확인을 위한 전체리스트 출력');
let alllist2 = studentRepository.getstudents();
for (const student of alllist2) {
  console.log(student.toString());
}

console.log('평균점수 70~80사이 출력');
let avgscore = studentRepository.findByRange(70, 80);
for (const student of avgscore) {
  console.log(student.toString());
}

// console.dir(studentRepository.students);