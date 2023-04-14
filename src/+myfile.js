function getSeason(date) {
    
    console.log(Object.getOwnPropertyNames(date))
    if (Object.getOwnPropertyNames(date).length){
        return 'Invalid date!';
    }

    if (Object.getOwnPropertyNames(date).length && Object.getOwnPropertyNames(date).length != 7) {
        return 'Invalid date!';
    }

    if (!(date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date))){
        return 'Invalid date!';
    }
   
    if (!date) return 'Unable to determine the time of year!';
    if (!(date instanceof Date)) return 'Invalid date!';
   // if (Object.prototype.toString.call(date) !== '[object Date]'){
    if (typeof date.getMonth != 'function') {
        return "Invalid date!"
    }
   

    //if (isNaN(month)) return 'Invalid date!';
    let month = date.getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    if (month === 11 || month <= 1) return 'winter';

    //return false;
}

console.log(getSeason(new Date(2350, 11, 22, 20, 38, 2, 848)), 'winter')


console.log(getSeason('foo'))

console.log(getSeason(new Date(2350, 11, 22, 20, 38, 2, 848)), 'winter')

console.log(getSeason(new Date(866, 2, 10, 12, 53, 10, 825)), )
//'spring');
console.log(getSeason(new Date(2455, 5, 24, 5, 17, 19, 809)))
//, 'summer');
//console.log(getSeason(new Date(1726, 7, 22, 23, 9, 55, 515)))
//, 'summer');
//console.log(getSeason(new Date(655, 0, 1, 4, 56, 39, 676)))
//, 'winter');


const [
    winter,
    spring,
    summer,
    autumn,
] = [
        new Date(2019, 11, 22, 23, 45, 11, 500),
        new Date(2018, 4, 17, 11, 27, 4, 321),
        new Date(2017, 6, 11, 23, 45, 11, 500),
        new Date(1994, 8, 26, 3, 0, 11, 500),
    ];


console.log(getSeason(winter), 'winter');
/*
console.log(getSeason(spring), 'spring');
console.log(getSeason(summer), 'summer');
*/
console.log(getSeason('foo'));
console.log(getSeason(20192701))
console.log(getSeason([2019, '27', 0 + '1']))
console.log(getSeason(() => new Date()))
console.log(getSeason({ John: 'Smith' }))


