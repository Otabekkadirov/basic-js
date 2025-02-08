const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const numStr = n.toString();
  let maxNum = 0;

  for (let i = 0; i < numStr.length; i++) {
    // Remove one digit by skipping it and form a new number
    const newNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1), 10);
    // Update the maximum if the new number is larger
    maxNum = Math.max(maxNum, newNum);
  }

  return maxNum;
}
// deleteDigit(190); => 19
// deleteDigit(1001); => 101
// deleteDigit(342); => 42

module.exports = {
  deleteDigit,
};
