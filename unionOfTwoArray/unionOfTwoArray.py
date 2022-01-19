def getUnion(a, b):
    s = set()
    for i in range(len(a)):
        s.add(a[i])
    for i in range(len(b)):
        s.add(b[i])
    print(s)


# Driver Code
getUnion([1, 2, 5, 6, 2, 3, 5, 23, 7, 3], [2, 4, 5, 6, 8, 9, 4, 6, 5, 4])
