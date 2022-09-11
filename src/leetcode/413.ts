/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Sun Sep 11 2022
 */

// Accepted
// REFERENCE: https://leetcode.com/problems/arithmetic-slices/

function numberOfArithmeticSlices(nums: number[]): number {
  if (nums.length < 3) {
    return 0;
  }
  let cnt = 0;
  let consecutiveArithmaticSubArr = -1;

  for (let i = 2; i < nums.length; i++) {
    const diff1 = nums[i] - nums[i - 1];
    const diff2 = nums[i - 1] - nums[i - 2];

    if (diff1 === diff2) {
      cnt++;
      consecutiveArithmaticSubArr++;
      cnt += consecutiveArithmaticSubArr;
      continue;
    }
    consecutiveArithmaticSubArr = -1;
  }
  return cnt;
}

const tests: number[][] = [
  [1, 2, 3, 4],
  [1],
  [1, 3, 5, 7, 9],
  [7, 7, 7, 7],
  [3, -1, -5, -9],
];

function run(): void {
  tests.forEach((test) => {
    console.log(numberOfArithmeticSlices(test));
  });
}

run();

export {};
