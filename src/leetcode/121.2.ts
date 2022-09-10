/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Sat Sep 10 2022
 */

// Accepted
// REFERENCE: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let maxProfitVal = 0;
  let lowestBuyVal = prices[0];

  prices.forEach((price) => {
    const profit = price - lowestBuyVal;
    if (profit > maxProfitVal) {
      maxProfitVal = profit;
    }
    if (price < lowestBuyVal) {
      lowestBuyVal = price;
    }
  });
  return maxProfitVal;
}

const tests: number[][] = [
  [7, 1, 5, 3, 6, 4],
  [7, 6, 4, 3, 1],
  [1, 2, 5, 9, 0],
  [0, 1, 5, 8, 4],
];

function run(): void {
  tests.forEach((test) => {
    console.log(maxProfit(test));
  });
}

run();

export {};
