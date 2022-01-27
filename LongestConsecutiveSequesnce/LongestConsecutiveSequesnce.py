def LongestConsecutiveSequesnce(arr):
    ans = 0
    s = set()
    for ele in arr:
        s.add(ele)
    for i in range(0, len(s), 1):
        if (arr[i]-1) not in s:
            j = arr[i]
            while(j in s):
                j += 1
                print(j-arr[i])
                ans = max(ans, j-arr[i])
    print(ans)


LongestConsecutiveSequesnce([1, 9, 3, 10, 4, 20, 2])
