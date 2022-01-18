
# Python program for implementation of Bubble Sort

def kthSmallestNumber(arr, k):
    n = len(arr)

    # Traverse through all array elements
    for i in range(n-1):
        # range(n) also work but outer loop will
        # repeat one time more than needed.

        # Last i elements are already in place
        for j in range(0, n-1):

            # traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    print(arr[k-1])


# Driver code to test above
arr = [64, 34, 25, 12, 22, 11, 90]

kthSmallestNumber(arr, 2)
