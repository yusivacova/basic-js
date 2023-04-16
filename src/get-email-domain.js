const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            let email1 = email.slice(i + 1);

            if (email1.includes('@')) {
                getEmailDomain(email1);
            } else {
                return email1;
            }

        }
    }
}

module.exports = {
  getEmailDomain
};
