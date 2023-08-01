// BOM(Browser Object Model)의 구조
console.dir(window);

let myWindow = open('../../hello.html','내 창');
if (!myWindow) {
  alert('팝업해제하세요');
}
// myWindow.close();
