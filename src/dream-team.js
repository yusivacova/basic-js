const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

    let result = true;
    if (!members || !Array.isArray(members)) return false;


    let arrFirstLetters = members.map((item) => {
        if (typeof item !== 'string') {
            item = '';
        } else {
            item = item.trim()
            return item[0].toUpperCase();
        }
    })
    if (!result) {
        return false;
    }
    arrFirstLetters.sort((a, b) => a > b ? 1 : -1);
    return arrFirstLetters.join('');
}

module.exports = {
  createDreamTeam
};
