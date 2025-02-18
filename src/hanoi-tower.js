const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // Calculate the number of turns (minimum required)
  const turns = Math.pow(2, disksNumber) - 1;

  // Convert turnsSpeed from turns/hour to turns/second
  const turnsPerSecond = turnsSpeed / 3600;

  // Calculate time in seconds
  const seconds = Math.floor(turns / turnsPerSecond);

  // Return the result as an object
  return { turns, seconds };
}

module.exports = {
  calculateHanoi,
};
