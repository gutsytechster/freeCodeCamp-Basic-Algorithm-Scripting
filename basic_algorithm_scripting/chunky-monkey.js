function chunkArrayInGroups(arr, size) {
  let newArray = [];
  while (arr.length > 0){
    let removedArray = arr.splice(0, size);
    newArray.push(removedArray);
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
