const { NotImplementedError } = require('../extensions/index.js');

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
	let copyArr = [];
	try {
		copyArr = arr.slice();
	} catch (e) {
		if (e) throw new Error("'arr' parameter must be an instance of the Array!");
	}

	let result = {};

	let indexElementRemove = [];
	let indexElementDouble = [];

	for (let i = 0; i < copyArr.length; i++) {
		if (typeof copyArr[i] === 'string') {
			if (copyArr[i].includes('--discard-') || copyArr[i].includes('--double-')) {

				if (!indexElementRemove.includes(i + 1) && copyArr[i + 1]) {
					if (copyArr[i] === '--discard-next') {
						indexElementRemove.push(i + 1);
						delete result[i + 1];
					}

					if (copyArr[i] === '--double-next') {
						indexElementDouble.push(i + 1);
						result[i + 1] = copyArr[i + 1];
						result[i + 2] = copyArr[i + 1];
					}
				}

				if (!indexElementRemove.includes(i - 1) && copyArr[i - 1]) {
					if (copyArr[i] === '--discard-prev') {
						indexElementRemove.push(i - 1);
						delete result[i - 1];
					}

					if (copyArr[i] === '--double-prev') {
						indexElementDouble.push(i - 1);
						result[i - 1] = copyArr[i - 1];
						result[i - 2] = copyArr[i - 1];
					}
				}

				indexElementRemove.push(i);
			}
		}

		if (!indexElementRemove.includes(i) && !indexElementDouble.includes(i)) {
			result[i] = copyArr[i];
		}
	}

	return Object.values(result);
}

module.exports = {
  transform
};
