/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Sat Sep 10 2022
 */

// TLE
// REFERENCE: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  const visitedArr: number[] = [];
  let maxProfitVal = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < visitedArr.length; j++) {
      const profit = prices[i] - visitedArr[j];
      if (profit > maxProfitVal) {
        maxProfitVal = profit;
      }
    }
    visitedArr.push(prices[i]);
  }
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
