function LongestConsecutiveSequesnce(arr) {
  let S = new Set();
  let ans = 0;
  for (let i = 0; i < arr.length; i++) S.add(arr[i]);
  console.log(S);
  for (let i = 0; i < arr.length; i++) {
    if (!S.has(arr[i] - 1)) {
      let j = arr[i];
      while (S.has(j)) j++;
      ans = Math.max(ans, j - arr[i]);
    }
  }
  console.log(ans);
}
LongestConsecutiveSequesnce([1, 9, 3, 10, 4, 20, 2]);
