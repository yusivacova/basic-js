function deleteDigit(n) {
    let arrN = n.toString().split('');

    let arrDigitN = [];

    for (let i = 0; i < arrN.length; i++){
        let next = arrN[i + 1];
        let prev = arrN[i - 1];

        if (i) {
            if (prev < arrN[i]) {
                arrN[i - 1] = '';
                arrDigitN.push(arrN.join(''));
                arrN[i - 1] = prev;
            }

            if (next > arrN[i]){
                let current = arrN[i];
                arrN[i] = '';
                arrDigitN.push(arrN.join(''));
                arrN[i] = current;
            } 
        }
    }

   // if (!arrDigitN.length) return n;
    return +(arrDigitN.join(''));
}

console.log(deleteDigit(222219))
//, 22229);
//console.log(deleteDigit(109))
//, 19);
console.log(deleteDigit(342))
//, 42);

//console.log(deleteDigit(1001))
//, 101);)
console.log(deleteDigit(10))
//, 1);


/*
function deleteDigit(n) {
    let arrN = n.toString().split('');
    const minOne = Math.min(...arrN).toString();
    let index = arrN.indexOf(minOne);
    arrN[index] = '';
   
    let firstNumber = Number(arrN.join(''));
    arrN[index] = 10;
    const minTwo = Math.min(...arrN).toString();
 
    arrN[index] = minOne;
    index = arrN.indexOf(minTwo);
    arrN[index] = '';
    let secondNumber = Number(arrN.join(''));

    return Math.max(firstNumber, secondNumber);
}
*/