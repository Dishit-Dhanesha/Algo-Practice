function MinMaxDiffHeights(arr, k) {
  let temp = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] - k > 0) {
      temp.push(arr[i] - k);
    } else {
      temp.push(arr[i] + k);
    }
  }
  let min = temp[0];
  let max = temp[temp.length - 1];
  for (j = 0; j < temp.length; j++) {
    if (temp[j] < min) min = temp[j];
    if (temp[j] > max) max = temp[j];
  }
  console.log("Answer", max - min);
}

MinMaxDiffHeights([3, 9, 12, 16, 20], 3);
