function sumAll(arr) {
  arr.sort((a, b) => a -b);
  let sum = 0;
  for (let num = arr[0]; num <= arr[1]; num++){
    sum += num;
  }
  return sum;
}

console.log(sumAll([1, 4]));
