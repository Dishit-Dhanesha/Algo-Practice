function ThreeWayPartition(arr, n, lowVal, highVal) {
  let start = 0,
    end = n - 1;
  for (let i = 0; i <= end; ) {
    if (arr[i] < lowVal) {
      let temp = arr[start];
      arr[start] = arr[i];
      arr[i] = temp;
      start++;
      i++;
    } else if (arr[i] > highVal) {
      let temp = arr[end];
      arr[end] = arr[i];
      arr[i] = temp;
      end--;
    } else i++;
  }
}

// Driver code
let arr = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32];
let n = arr.length;

ThreeWayPartition(arr, n, 10, 20);

console.log(arr);
