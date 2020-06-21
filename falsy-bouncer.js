function bouncer(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++){
    // !<value> returns a bool representing opposite of truth value of <value>
    // e.g. !7 returns false as 7 is considered as truthy value 
    // while !0 returns true as 0 is considered as falsy value
    // Using !! will return the bool representative of a value
    if (!!arr[i] !== false) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(bouncer([7, "ate", "", false, 9]));