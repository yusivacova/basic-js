const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let obj = {};
    domains.forEach(element => {
        let arrItemsElement = element.split('.').reverse();

        while (arrItemsElement.length) {
            let res = `.${arrItemsElement.join('.')}`;
            obj[res] = (obj[res]) ? obj[res] + 1 : 1;
            arrItemsElement.pop();
            console.log(arrItemsElement)
        }

        console.log(arrItemsElement)
    });

    return obj;
}

module.exports = {
  getDNSStats
};
