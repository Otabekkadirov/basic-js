const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // Extract the heights, ignoring -1, and sort them
  const heights = arr.filter((value) => value !== -1).sort((a, b) => a - b);

  // Insert the sorted heights back into the array, keeping -1 in place
  let index = 0;
  return arr.map((value) => (value === -1 ? -1 : heights[index++]));
}

module.exports = {
  sortByHeight,
};
