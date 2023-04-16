const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arrN = n.toString().split('');
    const minOne = Math.min(...arrN).toString();
    let index = arrN.indexOf(minOne);
    arrN[index] = '';

    let firstNumber = Number(arrN.join(''));
    arrN[index] = 10;
    const minTwo = Math.min(...arrN).toString();

    arrN[index] = minOne;
    index = arrN.indexOf(minTwo);
    arrN[index] = '';
    let secondNumber = Number(arrN.join(''));

    return Math.max(firstNumber, secondNumber);
}

module.exports = {
  deleteDigit
};
