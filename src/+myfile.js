function repeater(str, options) {
    let result = [];

    let counter = options.repeatTimes;

    if (!counter) counter = 1;

    let checkStr;
    let checkAddition;

    try {
        checkStr = String(str);
        str = checkStr;
    } catch (err) {
        checkStr = 0;
    }

    try {
        checkAddition = String(options.addition);
        options.addition = checkAddition;
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

console.log(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }))
//, 'LALA++sLALA++sLALA++'))

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
// 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'))

console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))
//, 'TESTstrADD!');)

console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))
//, 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');)


console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))
//, 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');


/*
For example: 
repeater(
'STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) 
=> 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
*/
let a = null;

console.log(String(a))