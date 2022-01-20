# Also Know as Kadane's algorithm

def sumOfContagiousArray(arr):
    maxReached = 0
    maxSoFar = 0
    for i in range(0, len(arr)):
        maxReached = maxReached + arr[i]
        if(maxReached > maxSoFar):
            maxSoFar = maxReached
        if(maxReached < 0):
            maxReached = 0
    print(maxSoFar)


sumOfContagiousArray([-2, -3, 4, -1, -2, 1, 5, -3])
