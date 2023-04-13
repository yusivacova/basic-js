const { NotImplementedError } = require('../extensions/index.js');

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
function countCats(...arg) {
	let array = [...arg];
	if (!array.length) return false;

	let counter = 0;

	function countCatsInner(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				countCatsInner(arr[i]);
			}

			if (arr[i] === '^^') {
				counter++;
			}
		};
		return counter;
	};

	return countCatsInner(array);
}

module.exports = {
	countCats
};



