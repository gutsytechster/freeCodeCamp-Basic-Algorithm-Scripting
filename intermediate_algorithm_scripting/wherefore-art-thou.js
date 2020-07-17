function whatIsInAName(collection, source) {
  let arr = [];
  let flag = true;
  // Only change code below this line
  return collection.reduce((acc, curr) => {
    for (let property in source){
      if (
        !curr.hasOwnProperty(property)
        || curr[property] !== source[property]
      ){
        flag = false;
      }
    }
    if (flag === true){
      acc.push(curr);
    } else {
      // rest the flag variable
      flag = true;
    }
    return acc;
  }, arr)
  // Only change code above this line
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
