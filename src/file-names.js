const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const nameMap = new Map(); // Keeps track of the count of each name
  const result = [];

  for (const name of names) {
    if (!nameMap.has(name)) {
      // If the name is unique, add it to the result
      result.push(name);
      nameMap.set(name, 1); // Mark it as seen
    } else {
      // If the name already exists, find the next available unique name
      let count = nameMap.get(name);
      let newName = `${name}(${count})`;

      // Ensure the new name is also unique
      while (nameMap.has(newName)) {
        count++;
        newName = `${name}(${count})`;
      }

      result.push(newName);
      nameMap.set(name, count + 1); // Update the count for the original name
      nameMap.set(newName, 1); // Mark the new name as seen
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
