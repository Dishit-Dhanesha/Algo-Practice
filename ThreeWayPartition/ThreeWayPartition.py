def ThreeWayPartition(arr, n, lowVal, highVal):
    start = 0
    end = n - 1
    i = 0
    while i <= end:
        if arr[i] < lowVal:
            temp = arr[i]
            arr[i] = arr[start]
            arr[start] = temp
            i += 1
            start += 1
        elif arr[i] > highVal:
            temp = arr[i]
            arr[i] = arr[end]
            arr[end] = temp
            end -= 1
 
        else:
            i += 1
 
# Driver code
if __name__ == "__main__":
    arr = [1, 14, 5, 20, 4, 2, 54,
           20, 87, 98, 3, 1, 32]
    n = len(arr)
 
    ThreeWayPartition(arr, n, 10, 20)
 
    print(arr)