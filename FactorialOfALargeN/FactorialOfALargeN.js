function FactorialOfALargeN(n){
    let answer = 1
    for(i = n; i>=1; i--){
        answer = answer * i
    }
    console.log(answer)
}

FactorialOfALargeN(10)