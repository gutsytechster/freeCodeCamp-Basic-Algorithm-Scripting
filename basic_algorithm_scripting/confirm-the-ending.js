function confirmEnding(str, target) {
  let ending = "";
  // get substring from the end of str
  for (let i = target.length; i > 0; i--){
    // formula for accessing nth character from the last
    // str.length - n
    ending += str[str.length - i]; 
  }
  if (ending == target){
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
