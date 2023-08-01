console.dir(window.document.firstChild);  //<!doctype html>접근
console.dir(document.firstElementChild);  //<html lang=ko></html>접근
console.dir(document.firstElementChild.constructor); 

// 돔트리 계층 구조로 검색
// Node의 공통속성 3개
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);

// body요소 접근
console.log(document.firstElementChild.lastElementChild.nodeName); //빈공백도 자식으로 인식 lastchild안됨

// #1.태그이름으로 접근
let pArray = document.getElementsByTagName('p');
// 리턴타입은 배열이 아니고 유사배열입니다.(유사배열-함수는 사용못함)
console.log(pArray.constructor);
for (const element in pArray) {
  console.log(element.nodeName);
}
// #2. get 메소드로 특정 요소 접근
let pElement = document.getElementById('myP');
console.dir(pElement);

let htmlCollection = document.getElementsByClassName('container');
console.log(htmlCollection);

// #3. CSS 선택자를 이용한 검색
// console.dir(document.querySelector('p')); //하나 얻어올때
// console.dir(document.querySelectorAll('p'));  //여러개 얻어올때,nodelist x타입

let nodeList = document.querySelectorAll('p');
for (const pe of nodeList) {
  console.log(pe.nodeName);
}
nodeList.forEach(element => {
  console.log(element.nodeName);
});

let pEl = document.querySelector('#myP');
console.log(pEl.nodeName);

let textNode = pEl.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);
// alert(textNode.nodeValue);

console.log(document.querySelector('.container').firstChild.nodeValue);

console.log(document.querySelector('li:first-child').firstChild.nodeValue);
console.log(document.querySelector('li:first-child').firstChild.data);
console.log(document.querySelector('li:last-child').firstChild.nodeValue);
console.log(document.querySelector('li:nth-child(2)').firstChild.nodeValue);
let list = document.querySelectorAll('li:nth-child(2n+1)');
list.forEach(element => {
  console.log(element.firstChild.nodeValue);
});
