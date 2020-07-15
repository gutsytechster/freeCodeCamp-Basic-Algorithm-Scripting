function diffArray(arr1, arr2) {
  let newArr = [];
  arr1.reduce(function(acc, curr) {
    if (arr2.indexOf(curr) === -1) {
      acc.push(curr);
    }
    return acc;
  }, newArr)

  arr2.reduce(function(acc, curr) {
    if (arr1.indexOf(curr) === -1) {
      acc.push(curr);
    }
    return acc;
  }, newArr)

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
