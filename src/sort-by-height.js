const { NotImplementedError } = require('../extensions/index.js');

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
  let newArr = [];
  let newArrResult = [];
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] != -1) {
      newArr.push(arr[i]);
    }
    
  }
  // arr.sort()
  newArr = newArr.sort((a,b) => a -b );
  let k = 0;
  for (let j = 0; j< arr.length; j++) {
    
      if (arr[j] == -1) {
      newArrResult.push(arr[j]);
    }
    else {
      
      // for (let k = 0; k< arr.length; k++) {
        newArrResult.push(newArr[k]);
        k += 1;
      }
    }
return newArrResult;
}

module.exports = {
  sortByHeight
};
