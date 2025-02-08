const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const cat = "^^";
  // let numOfCats = 0;
  // for (let row of matrix) {
  //   row.forEach((el) => {
  //     if (el === cat) {
  //       numOfCats++;
  //     }
  //   });
  // }
  // return numOfCats;

  return matrix.flat().filter((el) => el === "^^").length;
}

module.exports = {
  countCats,
};
