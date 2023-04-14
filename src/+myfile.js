
function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {};

    result.turns = 2 ** disksNumber - 1;


    result.seconds = Math.floor(result.turns / turnsSpeed * 3600) ;
    

    return result;
}

console.log(calculateHanoi(9, 4308))
//=> { turns: 511, seconds: 427 }