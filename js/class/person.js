class Person {
  // 정적 static 속성
  static commonAttribute = '공통속성';
  // 정적 메소드
  static commonMethod (){
    console.log('공통메소드입니다.');
  }

  constructor (name, age){
    // this={};
    this.name = name;
    this.age = age;
    // return this;
  }
  // 캡슐화를 위해 setter/getter추가
   get name(){
    return this._name;
   }
   set name(name){
    // 데이터 유효성 검증
    if (name === undefined) {
      throw new Error('이름은 반드시 입력하여야 합니다.');
    }
    this._name = name;
   }
   get age(){
    return this._age;
   }
   set age(age){
    if (age <10 || age > 100) {
      throw new Error('나이는 10에서 100사이로 입력하시오');
    }
    this._age = age;
   }
  showInfo(){
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  }
}

let person = new Person('김기정', 15);
console.log(person.name);
console.log(person.age);
person.showInfo();

try{
  person.name = undefined;
  // person.age = 900;
} catch (e){
  alert(e.message);
  // console.dir();
}

person.showInfo();

console.log(Person.commonAttribute);
Person.commonMethod();
// person.commonMethod(); //소문자.접근은 error

