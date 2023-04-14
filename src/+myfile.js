
function transform(arr) {
    try {
        let check = arr.slice();
    } catch (e) {
        if (e) throw new Error("'arr' parameter must be an instance of the Array!");
    }
    //if (!arr || !Array.isArray(arr)) return "'arr' parameter must be an instance of the Array!";

    let copyArr = arr.slice();

    let result = {};

    let indexElementRemove = [];
    let indexElementDouble = [];

    for (let i = 0; i < copyArr.length; i++) {
        if (typeof copyArr[i] === 'string') {
            if (copyArr[i].includes('--discard-') || copyArr[i].includes('--double-')) {

                if (!indexElementRemove.includes(i + 1) && copyArr[i + 1]) {
                    if (copyArr[i] === '--discard-next') {
                        indexElementRemove.push(i + 1);
                        delete result[i + 1];
                    }

                    if (copyArr[i] === '--double-next') {
                        indexElementDouble.push(i + 1);
                        result[i + 1] = copyArr[i + 1];
                        result[i + 2] = copyArr[i + 1];
                    }
                }

                if (!indexElementRemove.includes(i - 1) && copyArr[i - 1]) {
                    if (copyArr[i] === '--discard-prev') {
                        indexElementRemove.push(i - 1);
                        delete result[i - 1];
                    }

                    if (copyArr[i] === '--double-prev') {
                        indexElementDouble.push(i - 1);
                        result[i - 1] = copyArr[i - 1];
                        result[i - 2] = copyArr[i - 1];
                    }
                }

                indexElementRemove.push(i);
            }
        }

        if (!indexElementRemove.includes(i) && !indexElementDouble.includes(i)) {
            result[i] = copyArr[i];
        }
    }

    return Object.values(result);
}

console.log(transform(3.312312)),
console.log(transform(false)),
console.log(transform(null)),
console.log(transform(undefined)),
console.log(transform({ 'foo': 'bar' }))

console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
// output: [1, 2, 3, 1337, 1337, 1337, 4, 5]

console.log(transform(['--discard-prev', 1, 2, 3]))
//console.log(transform(['--double-prev', 1, 2, 3])),
// console.log(transform([1, 2, 3, '--double-next'])),
 // console.log(transform([1, 2, 3, '--discard-next']))



/*
function transform(arr) {
   let copyArr = arr.slice();

   let result = [];

   let indexElementRemove = [];
   let indexElementDouble = [];

   for (let i = 0; i < copyArr.length; i++) {
       if (typeof copyArr[i] === 'string') {
           if (copyArr[i].includes('--discard-') || copyArr[i].includes('--double-')) {

               if (!indexElementRemove.includes(i + 1) && copyArr[i + 1]){
                   if (copyArr[i] === '--discard-next'){
                       indexElementRemove.push(i + 1);
                   }

                   if (copyArr[i] === '--double-next') {
                       indexElementDouble.push(i + 1);
                   }
               }

               if (!indexElementRemove.includes(i - 1) && copyArr[i - 1]) {
                   if (copyArr[i] === '--discard-prev') {
                       indexElementRemove.push(i - 1);
                   }

                   if (copyArr[i] === '--double-prev') {
                       indexElementDouble.push(i - 1);
                   }
               }

               indexElementRemove.push(i);
           }
       }

       //result.push(i);
   }

   console.log(indexElementRemove)
   console.log(indexElementDouble)

   indexElementDouble.push('ghbd')

   return result;
}
*/