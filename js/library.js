'use strict'

// добавляет пробелы между разрядами цифр
function spaceBetweenNumbers(num) {
    let str = String(num);
    str = [...str].reverse().join('');
    str = str.replace(/(\d{3})/g, '$1 ');
    str = [...str].reverse().join('');
    return str
}


// обновляет данные из localStorage
function reloadDataFromLS(key, data) {
    let dataLS = JSON.parse(localStorage.getItem(key));

    if (dataLS === null) {
        return data
    }
    else {
        return dataLS
    }
}

