//3.26.22
function solution(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("")
    return joinArray;
  }