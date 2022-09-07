/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Tue Jul 19 2022
 */

// Accepted
// REFERENCE: https://leetcode.com/problems/pascals-triangle/

const pascalTriangle = [
  [1],
  [1, 1],
];

function generate(numRows: number): number[][] {
  // console.log('org = ', JSON.stringify(pascalTriangle));
  if (pascalTriangle[numRows - 1]) {
    const result = pascalTriangle.slice(
      0, numRows,
    );
    return result;
  }
  // console.log('generating');
  for (let i = pascalTriangle.length; i < numRows; i++) {
    const arr = [1];
    const earlierRow = pascalTriangle[i - 1];
    for (let j = 1; j < earlierRow.length; j++) {
      arr.push(earlierRow[j - 1] + earlierRow[j]);
    }
    arr.push(1);
    pascalTriangle.push(arr);
  }
  return pascalTriangle;
}

console.log(JSON.stringify(generate(4)));
// console.log(JSON.stringify(generate(2)));
// console.log(JSON.stringify(generate(1)));
// console.log(JSON.stringify(generate(30)));
// console.log(JSON.stringify(generate(10)));
