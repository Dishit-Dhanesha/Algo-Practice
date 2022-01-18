def sortZeroOneTwo(arr):
    c0 = c1 = c2 = 0
    for num in arr:
        if num == 0:
            c0 += 1
        elif num == 1:
            c1 += 1
        else:
            c2 += 1
    arr[:c0] = [0] * c0
    arr[c0:c0+c1] = [1] * c1
    arr[c0+c1:] = [2] * c2

    print(arr)

sortZeroOneTwo([0,1,2,2,0,1])


