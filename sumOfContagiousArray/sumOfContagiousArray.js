//Also Know as Kadane's algorithm
function sumOfContagiousArray(arr) {
  var maxReached = 0;
  var maxSoFar = 0;
  for (i = 0; i <= arr.length; i++) {
    maxReached = maxReached + arr[i];
    if (maxSoFar < maxReached) {
      maxSoFar = maxReached;
    }
    if (maxReached < 0) {
      maxReached = 0;
    }
  }
  console.log(maxSoFar);
}

sumOfContagiousArray([-2, -3, 4, -1, -2, 1, 5, -3]);
