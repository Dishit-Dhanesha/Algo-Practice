function ArrangeAnArrayAlternatively(arr) {
  let i = -1;
  let temp = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[j] < 0) {
      i++;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  let pos =i+1; neg = 0
  while(pos < arr.length && neg < pos && arr[neg] < 0 ){
      temp  = arr[neg];
      arr[neg] = arr[pos]
      arr[pos] = temp
      pos++
      neg+=2
  }
  console.log(arr)
}

ArrangeAnArrayAlternatively([-1, 2, -3, 4, 5, 6, -7, 8, 9]);
