def ArrangeAnArrayAlternatively(arr):
     i = -1
     temp = 0
     for j in range(0 , len(arr),1):
         if arr[j] < 0:
            i+=1
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
     pos = i+1
     neg = 0
     while arr[neg] < 0 and neg < pos and pos < len(arr):
          temp  = arr[neg];
          arr[neg] = arr[pos]
          arr[pos] = temp
          pos+=1
          neg+=2
     print(arr) 

ArrangeAnArrayAlternatively([-1, 2, -3, 4, 5, 6, -7, 8, 9])