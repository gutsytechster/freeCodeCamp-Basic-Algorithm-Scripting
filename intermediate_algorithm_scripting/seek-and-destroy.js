function destroyer(arr, ...val) {
  return arr.filter(curr => val.includes(curr) === false)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
