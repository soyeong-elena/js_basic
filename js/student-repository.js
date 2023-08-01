// 여러 학생 목록관리 객체
function StudentRepository() {
  // this={};
  this.students = new Array();
  // this.students = [];
  // return this;
}

// 학생추가
StudentRepository.prototype.addStudent = function (student) {
  this.students.push(student);
}
// 학생 전체
StudentRepository.prototype.getstudents = function () {
  return this.students;
}
// 학번으로 학생 검색
StudentRepository.prototype.findBySsn = function (ssn) {
  // return this.students.find(student =>{student.ssn === this.ssn ? true : false});
  // return this.students.find(student => student.ssn === this.ssn || false);   //or이 ||
  return this.students.find(student => student.ssn === this.ssn || '');
}

// 이름으로 학생 검색
StudentRepository.prototype.findByName = function (name) {
  return this.students.filter(student => student.name === name ? true : false);
}

// 학번으로 학생 삭제
StudentRepository.prototype.removeBySsn = function (ssn) {
  let deleted = false;
  this.students.forEach((student, index) => {
    if (student.ssn === ssn) {
      this.students.splice(index, 1);
      deleted = true;
    }
  });
  return deleted;
}

// 점수평균 범위로 검색
StudentRepository.prototype.findByRange = function (start, end) {
  let list = [];
  this.students.forEach(student => {
    if (student.getAvg() >= start && student.getAvg() <= end) {
      list.push(student);
    }
  });
  return list;
}

// ???로 정렬하여 전체 탐색
StudentRepository.prototype.findAllbySort = function (fn) {
  return this.students.sort(fn);
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
console.log(findssn);


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

console.log('평균을 내림차순으로 정렬');
let sortedlist = studentRepository.findAllbySort((student1, student2) => student2.getAvg() - student1.getAvg());
sortedlist.forEach(student => {
  console.log(student.toString());
})

console.log('총합을 오름차순으로 정렬');
studentRepository.findAllbySort((student1, student2) => student1.getSum() - student2.getSum());

  // console.dir(studentRepository.students);

