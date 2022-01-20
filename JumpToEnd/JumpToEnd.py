def JumpToEnd(arr):
    newMax = 0
    jump = 0
    oldMax = 0
    for i in range(0 ,len(arr)-1):
        newMax = max(newMax , i+arr[i])
        if(i == oldMax):
            jump += 1
            oldMax = newMax
    print(jump)



JumpToEnd([1 , 2  , 3 , 5 , 8 , 9 , 1 ,])