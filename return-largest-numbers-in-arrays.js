function max(a, b) {
  return (a > b) ? a : b;
}

function findLargestOfArray(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++){
    largest = max(arr[i], largest);
  }
  return largest;
}

function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    let current_max = findLargestOfArray(arr[i])
    result.push(current_max);
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
