const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    if (!sampleActivity || isNaN(sampleActivity)) return false;
    if (sampleActivity < 0) return false;
    if (typeof sampleActivity != 'string') return false;

    let age = Math.log2((MODERN_ACTIVITY / +sampleActivity)) * HALF_LIFE_PERIOD;

    if (!isFinite(age)) return false;
    if (age < 0) return false;
    

    return Math.ceil(age);
}

module.exports = {
    dateSample
};
