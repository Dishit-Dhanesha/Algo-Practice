function TripletSum(arr, sum) {
  let l, r;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    l = i + 1;
    r = arr.length - 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] == sum) {
        console.log("Triplet is " + arr[i] + ", " + arr[l] + ", " + arr[r]);
        return true;
      } else if (arr[i] + arr[l] + arr[r] < sum) l++;
      // A[i] + A[l] + A[r] > sum
      else r--;
    }
  }
  return false;
}

//Driver Code

TripletSum([1, 4, 45, 6, 10, 8], 22);
