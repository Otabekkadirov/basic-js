const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const skipped = new Set(); // Keeps track of skipped indices due to `--discard-next`

  for (let i = 0; i < arr.length; i++) {
    if (skipped.has(i)) continue; // Skip elements that were "discarded"

    switch (arr[i]) {
      case "--discard-next":
        if (i + 1 < arr.length) skipped.add(i + 1); // Mark the next element as skipped
        break;

      case "--discard-prev":
        if (i > 0 && !skipped.has(i - 1)) {
          result.pop(); // Remove the previous element if it was not skipped
        }
        break;

      case "--double-next":
        if (i + 1 < arr.length && !skipped.has(i + 1)) {
          result.push(arr[i + 1]); // Duplicate the next element if it exists and is not skipped
        }
        break;

      case "--double-prev":
        if (i > 0 && !skipped.has(i - 1)) {
          result.push(arr[i - 1]); // Duplicate the previous element if it exists and is not skipped
        }
        break;

      default:
        result.push(arr[i]); // Add regular elements to the result
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
