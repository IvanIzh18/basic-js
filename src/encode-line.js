const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arrCode = [];
  let arr = str.split('');
  let sum = 1;
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      sum += 1;
    } else {
      if (sum==1) {
        arrCode.push(arr[i]);
      }
      else {
      arrCode.push(sum+arr[i]);
      }
      sum = 1;
    }
  }

  return arrCode.join('');
}

module.exports = {
  encodeLine
};
