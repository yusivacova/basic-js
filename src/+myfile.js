function sortByHeight(arr) {
    let obj = {};
    let arrForSort = [];
    let arrIndex = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-1') {
            arrIndex.push(i);
        }

        if (arr[i] != '-1'){
            arrForSort.push(arr[i]);
        }
    }

    arrForSort.sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arrIndex.includes(i)){
            obj[i] = '-1';
        } else {
            obj[i] = arrForSort[j];
            j++;
        }
        if (arr[i] == '-1') {
            arrIndex.push(i);
        }
    }

    return Object.values(obj);
}

console.log(sortByHeight([-1, 190, 150, 170, -1, -1, 160, 180]))
 //   [-1, 150, 160, 170, -1, -1, 180, 190],