function getMaxProfit(stockPrices) {
  if (stockPrices.length <= 1)
    throw new Error("Getting a profit requires at least 2 prices");
  // // Calculate the max profit
  // // tabulation
  // // [1, -Infinity, -Infinity, -Infinity, -Infinity, -Infinity]

  // // [10, 7, 5, 8, 11, 9]
  // // 10
  // // [ 7, 5, 8, 11, 9]

  // let table = Array(stockPrices.length).fill(-Infinity);

  // for (let i=0; i<stockPrices.length-1;i++){
  //   for (let j=i+1; j<stockPrices.length; j++){
  //     let profit = stockPrices[j]-stockPrices[i];
  //     table[i] = Math.max(table[i], profit);
  //   }
  // }

  // return Math.max(...table);

  // Need to do in O(n) time and O(1) space

  // If this was sorted, the easiest thing would be to take a max and subtract by min
  // We need to assert that the min comes before the max
  // Iterate through the array once and keep track of a min and max value

  // [10, 7, 5, 8, 11, 9]
  // ele = 10
  // min = 5
  // max = 11
  // at the end, return max - min

  // Tabulation is not the best route here because we don't care what profit we get for
  // EACH stock, just the max profit

  // let max = -Infinity;
  // let min = stockPrices[0];
  // let maxIdx;
  // let minIdx = 0;
  // [9, 7, 4, 1])
  // min = 1
  // maxprofit=-2;
  // [7,4,1]
  // 7-9 = -2
  // 4-7 = -3
  // 1-4 = -3

  // [7, 2, 8, 9]
  // min = 2
  // maxprofit = 7
  // [2, 8, 9]
  // 2-7 = -5
  // 8-2
  // 9-2=7

  // We start off with the first price as the minimum stock price, our buy price
  // Initialize profit to negative infinity
  // At each iteration, subtract the ele by the min stock price for profit, and compare
  let maxProfit = -Infinity;
  let minBuy = stockPrices[0];
  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    let profit = currentPrice - minBuy;
    if (profit > maxProfit) maxProfit = profit;
    if (currentPrice < minBuy) minBuy = currentPrice;
  }

  return maxProfit;
}

// Time Comp -> O(N*M) due to nested iteration
// Space Comp -> O(N) due to table array
