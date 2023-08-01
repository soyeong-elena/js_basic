import { Validator } from "./validator";
// 이벤트 처리를 객체화
class EventHandler {
  constructor() { }

  // 이벤트 소스에 이벤트 핸들러 등록
  eventRegist() {
    document.querySelector('#addBtn').addEventListener('click', event => {
      this.addStudent(event);
    });
  }

  // 학생 등록
  addStudent(event) {
    const ssn = document.inputForm.ssn.value;
    if(!Validator.hasText(ssn)){
      alert('학번을 입력하여 주세요');
    }
  }

  // 학생 목록
  findAllStudent() {

  }

}


export { EventHandler }
















