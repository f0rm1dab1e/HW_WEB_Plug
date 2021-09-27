'use strict';

function toCase(str){
    let result = [];
    for (let i = 0;i < str.length;i++){
        if (str[i] === str[i].toUpperCase()) {
            result.push(str[i].toLowerCase());
            continue}
        result.push(str[i].toUpperCase());
    }
    return result.join('');
};
