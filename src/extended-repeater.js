const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = [];

    let counter = options.repeatTimes;

    if (!counter) counter = 1;

    let checkStr;
    let checkAddition;

    try {
        checkStr = String(str);
        if (checkStr === 'null'){
            str = checkStr;
        }
    } catch (err) {
        checkStr = 0;
    }

    try {
        checkAddition = String(options.addition);
        if (checkAddition === 'null') {
            options.addition = checkAddition;
        }
    } catch (err) {
        checkAddition = 0;
    }

    if (checkStr) {
        while (counter) {
            let additionCounter = options.additionRepeatTimes;
            result.push(str);

            if (checkAddition) {

                if (!additionCounter) additionCounter = 1;

                while (additionCounter) {
                    result.push(options.addition);
                    additionCounter--;

                    if (additionCounter) {
                        if (options.additionSeparator) {
                            result.push(options.additionSeparator);
                        } else {
                            result.push('|');
                        }
                    }
                }
            }
            counter--;

            if (counter) {
                if (options.separator) {
                    result.push(options.separator);
                } else {
                    result.push('+');
                }
            }
        }
    }

    return result.join('');
}



module.exports = {
  repeater
};
