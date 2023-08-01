let ssn = prompt('주민번호를 입력하시오');
// 990101-1234567
if (ssn) {  //ssn이 입력되면 true로 인식됨
  const c = ssn.charAt(ssn.indexOf('-') + 1);
  switch (c) {
    case 1:
    case 3: alert('남자입니다.'); break;
    case 2:
    case 4: alert('여자입니다.'); break;
    default: alert('외국인입니다.'); break;
  }
} else {
  alert('ssn을 입력하시오')
}

