const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
    calculateDepth(arr) {
        let counter = 1;

        for (let item of arr) {
            if (Array.isArray(item)) {
                counter = Math.max(counter, 1 + this.calculateDepth(item));
            }
        };

        return counter;
    };
}



module.exports = {
  DepthCalculator
};
