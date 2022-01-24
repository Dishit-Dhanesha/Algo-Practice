function SumOfPairs(arr , sum){
    let count = 0;
    for(i= 0 ; i < arr.length -1 ; i++){
        for(j = i+1 ; j  < arr.length; j++){
            if(arr[i]+ arr[j] == sum){
                count++
            }
        }
    }
    console.log(count)
}

SumOfPairs([1, 5, 7, 1], 6)