function max(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}

function findLongestWordLength(str) {
  let max_count = 0;
  let current_count = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === " "){
      max_count = max(current_count, max_count);
      current_count = 0;
    } else {
      current_count++;
    }
  }
  return max(current_count, max_count);
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
