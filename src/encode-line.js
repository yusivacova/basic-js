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
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let j = i + 1;
        let counter = 0;
        if (str[i] === str[j]) {
            counter++;

            while (str[i] === str[j]) {
                counter++;
                j++;
                i++;
            }
        }
        result = (counter) ? `${result}${counter}${str[i]}` : `${result}${str[i]}`;
    }

    return result
}


module.exports = {
  encodeLine
};
