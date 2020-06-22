function mutation(arr) {
  let [ str1, str2 ] = arr;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0 ; i < str2.length; i++){
    let flag = false;
    for (let j = 0; j < str1.length; j++){
      if (str2[i] == str1[j]){
        flag = true;
        break;
      }
    }
    if (flag === false) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Hello", "hey"]));
