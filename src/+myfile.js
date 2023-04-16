function encodeLine(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let j = i + 1;
        let counter = 0;
        if (str[i] === str[j]) {
            counter++;

            while (str[i] === str[j]) {
                counter++;
                j++;
                i++;
            }
        }

        result = (counter) ? `${result}${counter}${str[i]}` : `${result}${str[i]}`;
    }

    return result
}

console.log(encodeLine('abbcca'))
//, 'a2b2ca');
console.log(encodeLine('xyz'))
//, 'xyz');
