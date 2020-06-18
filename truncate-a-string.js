function truncateString(str, num) {
  if (str.length > num) {
    let result = "";
    for (let i = 0; i < num; i++){
      result += str[i];
    }
    return result + "..."
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
