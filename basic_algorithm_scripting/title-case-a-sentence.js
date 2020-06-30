function titleCase(str) {
  let sentence = "";
  let word = "";
  for (let i = 0; i < str.length; i++){
    if (str[i] === " "){
      sentence += word + " ";
      word = "";
    } else if (word === "") {
      // str.toUpperCase() would change the case of string to uppercase
      word += str[i].toUpperCase()
    } else {
      word += str[i].toLowerCase()
    }
  }
  // Add the last word to the sentence
  return sentence + word;
}

console.log(titleCase("I'm a little tea pot"));
