function nthSmallestNumber(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr[n - 1];
}

nthSmallestNumber([234, 43, 55, 63, 5, 6, 235, 547], 2);
