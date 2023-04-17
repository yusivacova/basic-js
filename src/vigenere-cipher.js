const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(value = true) {
        this.value = value;
    }

    base = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }

        let regexp = /^\p{L}$/u;

        let result = [];

        let j = 0;

        for (let i = 0; i < message.length; i++) {
            if (regexp.test(message[i])) {
                let indexInTableMessage = this.base.indexOf(message[i].toUpperCase());

                if (j > key.length - 1) {
                    j = 0;
                }

                let indexInTableKey = this.base.indexOf(key[j].toUpperCase());

                let sumIndexMessageAndKey = indexInTableMessage + indexInTableKey;

                let indexEncrypt = (sumIndexMessageAndKey >= 26) ? sumIndexMessageAndKey % 26 : sumIndexMessageAndKey;
                result.push(this.base[indexEncrypt]);
                j++;
            } else {
                result.push(message[i]);
            }
        }

        if (!this.value) return result.reverse().join('');
        return result.join('');
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!');
        }
        let regexp = /^\p{L}$/u;

        let result = [];

        let j = 0;

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (regexp.test(encryptedMessage[i])) {
                let indexInTableMessage = this.base.indexOf(encryptedMessage[i].toUpperCase());

                if (j > key.length - 1) {
                    j = 0;
                }

                let indexInTableKey = this.base.indexOf(key[j].toUpperCase());

                let differenceIndexMessageAndKey = indexInTableMessage - indexInTableKey;

                let indexEncrypt = (differenceIndexMessageAndKey < 0) ? differenceIndexMessageAndKey + 26 : differenceIndexMessageAndKey;

                result.push(this.base[indexEncrypt]);
                j++;
            } else {
                result.push(encryptedMessage[i]);
            }
        }

        if (!this.value) return result.reverse().join('');
        return result.join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
