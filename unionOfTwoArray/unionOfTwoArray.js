function unionOfTwoArray(a, b) {
  var s = new Set();
  for (let i = 0; i < a.length; i++) s.add(a[i]);
  for (let i = 0; i < b.length; i++) s.add(b[i]);
  console.log(s);
}
// Driver Code
unionOfTwoArray([1, 2, 5, 6, 2, 3, 5, 7, 3], [2, 4, 5, 6, 8, 9, 4, 6, 5, 4]);
