function BuySell(prices){
    let min = prices[0] , max = 0;
    for(i=0; i<= prices.length; i++){
        if(prices[i] - min > max){
            max = prices[i] - min;
        }
        if(prices[i]< min){
            min = prices[i]
        }
    }
    console.log(max);
}

BuySell([7,1,5,3,6,4])