function spinalCase(str) {
  return str
    .split(/[\s_-]|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase('this_Is-SpinalCase Ii'));

