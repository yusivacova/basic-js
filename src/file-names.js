const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    if (!names.length) {
        return [];
    }
    let result = [];

    for (let i = 0; i < names.length; i++) {
        if (result.includes(names[i])) {
            if (result.includes(`${names[i]}(1)`)) {
                result.push(`${names[i]}(2)`);
            } else {
                result.push(`${names[i]}(1)`);
            }

        } else {
            result.push(names[i]);
        }

    }
    return result;
}

module.exports = {
  renameFiles
};
