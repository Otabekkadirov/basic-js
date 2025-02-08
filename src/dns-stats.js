const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = {};

  for (let domain of domains) {
    const domainArr = domain.split(".");

    let domainForObject = "";
    for (let i = domainArr.length - 1; i >= 0; i--) {
      domainForObject += "." + domainArr[i];
      if (result[domainForObject]) {
        result[domainForObject] += 1;
      } else {
        result[domainForObject] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats,
};
