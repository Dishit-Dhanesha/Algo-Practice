function MaximumProductSubArray(arr) {
  let result = arr[0];
  for (i = 0; i < arr.length; i++) {
    let mul = arr[i];
    for (j = i + 1; j < arr.length; j++) {
      result = Math.max(mul, result);
      mul *= arr[j];
    }
    result = Math.max(mul, result);
  }
  console.log(result);
}

MaximumProductSubArray([6, -3, -10, 0, 2, 10, 10]);
