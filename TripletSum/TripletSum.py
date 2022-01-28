def TripletSum(arr , sum):
     l = 0
     r = 0
     arr.sort()
     for i in range(0, len(arr)-2):
         l = i + 1
         r = len(arr)-1
         while (l < r):
            if( arr[i] + arr[l] + arr[r] == sum):
                print("Triplet is", arr[i],
                     ', ', arr[l], ', ', arr[r])
                return True
            elif (arr[i] + arr[l] + arr[r] < sum):
                l += 1
            else:
                r -= 1
     return False
     
    


TripletSum([1, 4, 45, 6, 10, 8] , 22)