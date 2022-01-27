function AppearsMoreThenK(arr, k) {
  let x = arr.length / k;
  let y = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!y.has(arr[i])) y.set(arr[i], 1);
    else {
      let count = y.get(arr[i]);
      y.set(arr[i], count + 1);
    }
  }
  for (let [key, value] of y.entries()) {
    let temp = value;
    if (temp > x) console.log(key);
  }
}
AppearsMoreThenK([1, 1, 2, 2, 3, 5, 4, 2, 2, 3, 1, 1, 1], 4);
