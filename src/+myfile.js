function getSumOfDigits(n) {
    let arrN = n.toString().split('');

    let result = arrN.reduce((sum, current) => sum + +current, 0);

    if (result >= 10){
        result = getSumOfDigits(result);
    }

    return result;
}

console.log(getSumOfDigits(99))
//, 9);