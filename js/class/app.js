import { Student, yyy } from "./StudentClass.js";
import { HighStudent } from "./HighStudent.js";

let student = new Student(12, '이기정', 90, 80, 50);
console.log(student.toString());
let highStudent = new HighStudent(12, '이기정', 90, 80, 50, 15);
console.log(highStudent.toString());

yyy();

