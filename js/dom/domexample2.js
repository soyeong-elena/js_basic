/*
// 동적 스타일 적용하기
let h1Element = document.querySelector('h1'); //위에 하나만 바뀜
h1Element.style.color = 'white';
h1Element.style['background-color'] = 'blue';

let h1List = document.querySelectorAll('h1'); //selectorAll 같은속성은 다 바뀜
h1List.forEach(element => {
  element.style.color = 'white';
  element.style['background-color'] = 'blue';
});

// css클래스 선택자 적용
let h1List1 = document.querySelectorAll('h1');
h1List1.forEach(element => {
  element.className = 'head';
});
*/

// add 속성 추가/remove 속성 제거
let h1List1 = document.querySelectorAll('h1');
h1List1.forEach(element => {
  element.classList.add('head');
  element.classList.remove('head');
  // setInterval(()=> {
  //   element.classList.toggle('head');
  // },1000);
});





