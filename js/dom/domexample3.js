// 속성 제어하기
let aElement = document.querySelector('a');
let value = aElement.getAttribute('href');
console.log(value);
aElement.setAttribute('href','http://www.naver.com');
/*
// node 생성 및 연결
let liE = document.createElement('li');
let text = document.createTextNode('text');
liE.appendChild(text);
document.querySelector('ol').appendChild(liE);

*/
// 추가로 넣을 때
document.querySelector('ol').textContent='<strong>text</strong>';
document.querySelector('ol').innerText='<b>text</b>';
document.querySelector('ol').innerHTML='<b>text</b>';

// 읽을때
console.log(document.querySelector('ol').innerHTML);
console.log(document.querySelector('ol').innerText);

function show() {
  let divText = '<div>댓글 내용입니다.</div>';
  let articles = document.querySelector('article');
  articles.innerHTML=divText;
  // body.insertAdjacentHTML('afterend',divText);
}


