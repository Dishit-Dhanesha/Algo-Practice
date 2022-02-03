def ChocolateProblem(arr,  m):
    if (m==0 or len(arr)==0):
        return 0    
    arr.sort()
    if (len(arr) < m):
        return -1
    min_diff = arr[len(arr)-1] - arr[0]
    for i in range(len(arr) - m + 1):
        min_diff = min(min_diff ,  arr[i + m - 1] - arr[i])
    return min_diff
  
# Driver Code
if __name__ == "__main__":
  
     m = 7 # Number of students
     print("Minimum difference is", ChocolateProblem( [12, 4, 7, 9, 2, 23, 25, 41,
          30, 40, 28, 42, 30, 44, 48, 
          43, 50],  m))