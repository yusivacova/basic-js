function getCommonCharacterCount(s1, s2) {
    let arrS1 = s1.split('');
    let arrS2 = s2.split('');

    let result = 0;

    for (let i = 0; i < arrS1.length; i++) {
        if (arrS2.includes(s1[i])) {
            arrS1[i] = '';
            let index = arrS2.indexOf(s1[i]);
            arrS2[index] = '';
        }

    }


    result = s1.length - arrS1.join('').length;
console.log(result)
    return result;
}

getCommonCharacterCount('aabcc', 'adcaa')
//, 3);
getCommonCharacterCount('zzzz', 'zzzzzzz')
//, 4);
getCommonCharacterCount('abca', 'xyzbac')
//, 3);
getCommonCharacterCount('', 'abc')
//, 0);
getCommonCharacterCount('a', 'b')
//, 0);