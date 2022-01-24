def SumOfPairs(arr , sum):
    count = 0
    for i in range(len(arr)-1):
        for j in range(i+1,len(arr), 1):
           if sum  == arr[i] + arr[j]:
               count +=1
    print(count)  

SumOfPairs([1, 5, 7, 1], 6)