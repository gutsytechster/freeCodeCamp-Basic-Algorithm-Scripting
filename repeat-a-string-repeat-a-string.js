function repeatStringNumTimes(str, num) {
  let result = "";
  if (num < 0){
    return result;
  } else {
    for (let i = 1; i <= num ; i++){
      result += str;
    }
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3));
