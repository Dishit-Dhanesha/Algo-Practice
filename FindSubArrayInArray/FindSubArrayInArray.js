function FindSubArrayInArray(arr1, arr2) {
  let hset = new Set();
  if (arr1) {
    for (i = 0; i < arr1.length; i++) {
      if (!hset.has(arr1[i])) {
        hset.add(arr1[i]);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (!hset.has(arr2[i])) {
        return false;
        break;
      }
    }
    return true;
  }
}

if (FindSubArrayInArray([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]))
  console.log("Array 2  is a subset of Array 1 ");
else console.log("Array 2  is not a subset of Array 1");
