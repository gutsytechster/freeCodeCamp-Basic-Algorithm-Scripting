function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0, arr2.length);
  let afterElements = arr3.splice(n, arr3.length - n, ...arr1);
  return [...arr3, ...afterElements]
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
