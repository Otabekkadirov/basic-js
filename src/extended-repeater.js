const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // Ensure str is a string
  str = String(str);

  // Set default values for options
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  // Ensure addition is a string
  const additionStr = String(addition);

  // Build the addition part
  const additionPart = Array(additionRepeatTimes)
    .fill(additionStr)
    .join(additionSeparator);

  // Build the main repeated string
  const result = Array(repeatTimes)
    .fill(str + additionPart)
    .join(separator);

  return result;
}

module.exports = {
  repeater,
};
