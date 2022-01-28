def FindSubArrayInArray(arr1 , arr2):
    hashset = set()
    for i in range(0, len(arr1)):
        hashset.add(arr1[i])
    for i in range(0, len(arr2)):
        if arr2[i] in hashset:
            continue
        else:
            return False
    return True

if(FindSubArrayInArray([ 11, 1, 13, 21, 3, 7 ] , [ 11, 3, 7, 1 ])):
    print("Array 2 is a subset of Array 1")
else:
    print("Array 2 is a not subset of Array 1")
