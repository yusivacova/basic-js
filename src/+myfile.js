function createDreamTeam(members) {

    let result = true;
    if (!members || !Array.isArray(members)) return false;


    let arrFirstLetters = members.map((item) => {
        if (typeof item !== 'string') {
            item = '';
        } else {
            item = item.trim()
            return item[0].toUpperCase();
        }
        })
        if (!result) {
            return false;
        }
    arrFirstLetters.sort((a, b) => a > b ? 1 : -1);
    return arrFirstLetters.join('');
}


console.log(createDreamTeam(undefined))
//, false);

/*
console.log(createDreamTeam([
    'Grace',
    'Lily',
    'Ruby',
    'Amelia'
]))
//, 'AGLR');

*/
console.log(createDreamTeam([
    'Amelia',
    null,
    undefined,
    'Ruby',
    'Lily',
    11,
    'Grace',
    22,
    'Millie',
    'Daisy',
    true,
    'Freya',
    false,
    'Erin',
    new Set([1, 2, 3, 4, 5]),
    'Megan',
    {
        'John': 'Smith'
    },
    'Jasmine',
    1,
    2,
    3,
    4,
    5,
    'Brooke',
]))
//, 'ABDEFGJLMMR');

console.log(createDreamTeam([
    '   William Alston ',
    ' Paul Benacerraf',
    '  Ross Cameron',
    '       Gilles Deleuze',
    '  Arda Denkel ',
    '  Michael Devitt',
    '  Kit Fine',
    ' Nelson Goodman',
    'David Kolb',
    '   Saul Kripke',
    '  Trenton Merricks',
    '  Jay Rosenberg',
]))
//, 'ADGJKMNPRSTW');)