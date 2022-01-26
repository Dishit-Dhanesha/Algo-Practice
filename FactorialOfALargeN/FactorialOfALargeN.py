def FactorialOfALargeN(n):
    answer = 1
    for i in range(n , 1, -1):
        answer = answer * i
    print(answer) 

FactorialOfALargeN(10)