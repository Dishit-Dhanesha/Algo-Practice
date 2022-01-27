def AppearsMoreThenK(arr, k):
    x = len(arr) // k
    # unordered_map initialization
    freq = {}
    for i in range(len(arr)):
        if arr[i] in freq:
            freq[arr[i]] += 1
        else:
            freq[arr[i]] = 1
    for i in freq:
        if (freq[i] > x):
            print(i)


AppearsMoreThenK([1, 1, 2, 2, 3, 5, 4, 2, 2, 3, 1, 1, 1], 4)
