// BruteForce
function SubArray0(arr, sum) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let base = 0;
    for (let j = i; j < arr.length; j++) {
      base += arr[j];
      if (base == sum) counter++;
    }
  }
  if (counter > 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

SubArray0([4, 2, -3, 1, 6], 0);

// Using Hash Map

var subarraySumHashMap = function (arr, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum - k)) count += map.get(sum - k);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  console.log(count);
};

subarraySumHashMap([4, 2, -3, 1, 6], 0);
