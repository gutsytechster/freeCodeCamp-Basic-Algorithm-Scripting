function correctCase(before, after) {
  switch (before[0]){
    case before[0].toUpperCase():
       // slice() works over string just like arrays
       // It slices the string from provided lower bound 
       // upto provided upper bound(excluded)
       after = `${after[0].toUpperCase()}${after.slice(1)}`;
       break;
    case before[0].toLowerCase():
       after = `${after[0].toLowerCase()}${after.slice(1)}`;
       break;
  }
  return after;
}

function myReplace(str, before, after) {
  return str.replace(
    before, 
    correctCase(before, after)
  );
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
