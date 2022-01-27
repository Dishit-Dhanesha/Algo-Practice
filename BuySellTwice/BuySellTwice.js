function BuySellTwice(price, n) {
  let profit = new Array(n);
  for (let i = 0; i < n; i++) profit[i] = 0;
  let max_price = price[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (price[i] > max_price) max_price = price[i];
    profit[i] = Math.max(profit[i + 1], max_price - price[i]);
  }
  let min_price = price[0];
  for (let i = 1; i < n; i++) {
    if (price[i] < min_price) min_price = price[i];
    profit[i] = Math.max(profit[i - 1], profit[i] + (price[i] - min_price));
  }
  let result = profit[n - 1];

  console.log(result);
}

// Driver code

BuySellTwice([2, 30, 15, 10, 8, 25, 80], 7);
