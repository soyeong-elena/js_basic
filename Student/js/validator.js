class Validator {
/**
 * 
 * @param {String} 문자열 값 
 * @returns 유효성 여부
 */
  static hasText(value){
    if (value == undefined || value.length === 0) {
      return false;
    }
    return true;
  }  
  static hasNumber(value){
    if (value == undefined || value.length === 0) {
      
    }
  }
}


export{Validator}