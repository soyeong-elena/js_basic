/*
// 이벤트 소스에 이벤트 리스너 등록
// #1.메모리에 eventListener가 올라가있어서 메모리 낭비됨
function eventListener() {
  console.log('clicking');
}
document.querySelector('button').addEventListener('click', eventListener);
*/

// #2.간단하면 콜백함수로 쓰기
// document.querySelector('button').addEventListener('click', ()=>console.log('clicking'));


document.querySelector('button').addEventListener('click', (event)=>{
  console.dir(event);
  if(event.ctrlKey){
    event.target.style.backgroundColor='blue';
    console.log('clicking');
  }
});

document.querySelector('button').addEventListener('mouseenter', (event)=>{
  event.target.style.backgroundColor='#999';
});

document.querySelector('button').addEventListener('mouseleave', (event)=>{
  event.target.style.backgroundColor='';
});

function serverSend(message) {
  console.log(message+'를 서버에 전송합니다.');
}

// 엔터누를때만 text 전송됨
let input = document.querySelector('[type=Text]');
input.addEventListener('keypress', event => {
  // console.log(input.value);
  if (event.keyCode === 13) {
    const message = input.value;  //event.target.value
    serverSend(message);
    input.value='';
  }
});

// console.dir(document.frm.search);
document.frm.search.addEventListener('change', event => {
  // console.dir(event.target.options);
  let options = event.target.options;
  let selectValue = event.target.options[options.selectedIndex].value;
  console.log(selectValue);
});

document.frm.search.addEventListener('change', event => {
  let options = document.querySelectorAll('option');
  options.forEach(function (element) {
    if (element.selected) {
      console.log(element.value);
    }
  });
});