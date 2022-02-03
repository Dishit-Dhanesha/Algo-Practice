function MinimumSwapsRequired(arr,  n,  k) {
     
    // Find count of elements which are
    // less than equals to k
    var count = 0;
    for (var i = 0; i < n; ++i)
        if (arr[i] <= k)
            ++count;
     
    // Find unwanted elements in current
    // window of size 'count'
    var bad = 0;
    for (var i = 0; i < count; ++i)
        if (arr[i] > k)
            ++bad;
     
    // Initialize answer with 'bad' value of
    // current window
    var ans = bad;
    for (var i = 0, j = count; j < n; ++i, ++j) {
         
        // Decrement count of previous window
        if (arr[i] > k)
            --bad;
         
        // Increment count of current window
        if (arr[j] > k)
            ++bad;
         
        // Update ans if count of 'bad'
        // is less in current window
        ans = Math.min(ans, bad);
    }
    return ans;
}
 
    // Driver code
    var arr=[2, 1, 1, 6, 3];
    var n =5;
    var k = 3;
   console.log(MinimumSwapsRequired(arr, n, k));
     