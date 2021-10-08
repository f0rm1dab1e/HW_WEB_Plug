//HW 4_1
function returnString(arr) {
    let stringArr = arr.filter(item => typeof (item) === 'string');
    return stringArr.map(item => item[0].toUpperCase() + item.slice(1)).join('');

}

function returnLetter(arr) {
    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr_en[arr[i] - 1]);
    }
    return result;
}

function moreThanZero(obj) {
    let myObj = {};
    for (let item in obj) {
        if (obj[item] > 0) {
            myObj[item] = obj[item];
        }
    }
    return myObj;
}
