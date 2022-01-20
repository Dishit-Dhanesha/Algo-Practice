def MinMaxDiffHeights(arr, k):
    temp = []
    for i in range(0, len(arr)):
        if arr[i] - k > 0:
            temp.append(arr[i] - k)
        else:
            temp.append(arr[i] + k)
    min = temp[0]
    max = temp[len(temp)-1]
    for j in range(0, len(temp)):
        if temp[j] < min:
            min = temp[j]
        if temp[j] > max:
            max = temp[j]
    print(f"Answer {max-min}")


MinMaxDiffHeights([3, 9, 12, 16, 20], 3)
