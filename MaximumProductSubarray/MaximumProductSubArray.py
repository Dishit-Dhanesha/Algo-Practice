def MaximumProductSubArray(arr):
    result = arr[0]
    for i in range(0, len(arr), 1):
        mul = arr[i]
        for j in range(i+1, len(arr), 1):
            result = max(result, mul)
            mul *= arr[j]
        result = max(result, mul)
    print(result)


MaximumProductSubArray([6, -3, -10, 0, 2, 10, 10])
