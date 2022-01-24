def BuySell(prices):
    min = prices[0]
    max = 0
    for i in range(len(prices)):
        if min - prices[i] > max:
            max = min - prices[0]
        if min - prices[i] > max:
             max = prices[i]
    print(max)

BuySell([7,1,5,3,6,4])