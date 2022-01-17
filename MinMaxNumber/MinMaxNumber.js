function MinMaxNumber(a) {
  //array to populate answer
  minmax = new Array();
  var i;
  var min;
  var max;
  // if the length of array is only 1
  if (a.length == 1) {
    minmax.min = a[0];
    minmax.max = a[0];
    return minmax;
  }
  // if there are only two elements in an array
  if (a[0] > a[1]) {
    minmax.min = a[1];
    minmax.max = a[0];
  } else {
    minmax.min = a[0];
    minmax.max = a[1];
  }
  for (i = 2; i <= a.length; i++) {
    if (a[i] > minmax.max) {
      minmax.max = a[i];
    } else if (a[i] < minmax.min) {
      minmax.min = a[i];
    }
  }
  return minmax;
}

minmax = MinMaxNumber([1, 2, 5, 8, 3]);
console.log("Minimum element is ", minmax.min);
console.log("Maximum element is ", minmax.max);
