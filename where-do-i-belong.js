function sort(arr){
  for (let i = 0; i < arr.length; i++){
    let min = arr[i];
    let index = i
    for (let j = i; j < arr.length; j++){
      if (arr[j] < min){
        min = arr[j];
        index = j;
      }
    }
    let temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }
  return arr;
}


function getIndexToIns(arr, num) {
  sort(arr);
  for ( let i = 0; i < arr.length; i++){
    if (arr[i] >= num){
      return i;
    } 
  }
  // If code reaches here, it means that the element
  // must be largest in the sorted array.
  // Therefore, it should appear at the last index.
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50))