const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let matrixCopy = structuredClone(matrix);


    for (let i = 0; i < matrixCopy.length; i++) {
        let counter = 0;
        let oneNum = false;

        let arrCheck = matrix[i];
        let arr = matrixCopy[i];
        let nextArr = matrixCopy[i + 1];
        let prevArr = matrixCopy[i - 1];

        for (let j = 0; j < arrCheck.length; j++) {
            if (i < matrixCopy.length - 1 && arrCheck[j] === true) {
                counter++;
                if (i === 0) {
                    arr[j] = arr[j] - 1;
                    if (arr[j + 1] != undefined) {
                        arr[j + 1] = 1;
                        nextArr[j + 1] = 1;
                    }
                    nextArr[j] = 1;
                    if (arr[j - 1] != undefined) {
                        arr[j - 1] = 1;
                        nextArr[j - 1] = 1;
                    }

                } else {
                    if (arr[j + 1] != undefined) {
                        arr[j + 1] += 1;
                        nextArr[j + 1] += 1;
                        prevArr[j + 1] += 1;
                    }
                    nextArr[j] += 1
                    prevArr[j] += 1;
                    if (arr[j - 1] != undefined) {
                        arr[j - 1] += 1;
                        nextArr[j - 1] += 1;
                        prevArr[j - 1] += 1;
                    }
                }
            }


        }

        if (arr.includes(1)) {
            oneNum = true;
        }
        if (!counter && !oneNum) {
            for (let j = 0; j < arrCheck.length; j++) {
                arr[j] = 0;
            }
        }
    }


    return matrixCopy;
}

module.exports = {
  minesweeper
};
