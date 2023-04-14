const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    let month;

    try {
        month = date.getMonth();
        date.getTimezoneOffset()
    } catch (e) {
        if (e) throw new Error("Invalid date!");
    }
    
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    if (month === 11 || month <= 1) return 'winter';

    console.log(date)

    return 'Invalid date!';
}

module.exports = {
  getSeason
};
