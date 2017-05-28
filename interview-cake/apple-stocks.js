const getBestProfit = (arr) => {
  let profit;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let buy = arr[i];
      let sell = arr[j];
      let currentProfit = sell - buy;
      if (currentProfit > profit || profit === undefined) {
        profit = currentProfit;
      }
    }
  }
  return profit;
}

const stock_prices_yesterday = [8,2,3,1,4,5,1,3,1,2];

getBestProfit(stock_prices_yesterday);
