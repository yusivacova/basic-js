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
    let obj = {};
    let arrForSort = [];
    let arrIndex = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-1') {
            arrIndex.push(i);
        }

        if (arr[i] != '-1') {
            arrForSort.push(arr[i]);
        }
    }

    arrForSort.sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arrIndex.includes(i)) {
            obj[i] = -1;
        } else {
            obj[i] = arrForSort[j];
            j++;
        }
        if (arr[i] == -1) {
            arrIndex.push(i);
        }
    }

    return Object.values(obj);
}

module.exports = {
  sortByHeight
};
