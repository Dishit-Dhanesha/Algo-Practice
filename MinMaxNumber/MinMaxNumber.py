class pair:
    def __init__(self):
        self.min = 0
        self.max = 0


def MinMaxNumber(arr: list) -> pair:
    minmax = pair()

    # If there is only one element then return it as min and max both
    if len(arr) == 1:
        minmax.max = arr[0]
        minmax.min = arr[0]
        return minmax

    # If there are more than one elements, then initialize min
    # and max
    if arr[0] > arr[1]:
        minmax.max = arr[0]
        minmax.min = arr[1]
    else:
        minmax.max = arr[1]
        minmax.min = arr[0]

    for i in range(2, len(arr)):
        if arr[i] > minmax.max:
            minmax.max = arr[i]
        elif arr[i] < minmax.min:
            minmax.min = arr[i]

    return minmax


# Driver Code
if __name__ == "__main__":
    minmax = MinMaxNumber([1000, 11, 445, 1, 330, 3000], )
    print("Minimum element is", minmax.min)
    print("Maximum element is", minmax.max)
