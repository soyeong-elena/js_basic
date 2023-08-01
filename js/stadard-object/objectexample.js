// let user= new Object();
let user = {
  name: '김기정'
};

// let str = 'xxx'; // 기본타입-객체가 아님
// let str = 'xxx'.charAt()); // .찍으면 동적객체변환(기본타입이 객체로 바뀜)
// let str = new String(); // Object타입

console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user));

// Object의 static 메소드 활용
// 얕은 복사
// let user2 = user;
// 깊은 복사
let user2 = {};
Object.assign(user2, user); //user2에 user을 넣음
console.dir(user2);

let prototype1 = Object.getPrototypeOf(user);
console.dir(prototype1);





