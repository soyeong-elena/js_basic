console.log(location.href);

// let url = 'https://www.naver.com';
// location.href = url;

function go() {
  let url = 'https://www.naver.com';
  location.href = url;
  // location.assign(url);
  // location.replace(url);  //히스토리가 안남음
  location.reload(); //새로고침
}

