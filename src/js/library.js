'use strict'

const library = {
    // добавляет пробелы между разрядами цифр
    spaceBetweenNumbers: function (num) {
        let str = String(num);
        str = [...str].reverse().join('');
        str = str.replace(/(\d{3})/g, '$1 ');
        str = [...str].reverse().join('');
        return str
    },
    // обновляет данные из localStorage
    reloadDataFromLS: function (key, data) {
        let dataLS = JSON.parse(localStorage.getItem(key));
        if (dataLS === null) {
            return data
        }
        else {
            return dataLS
        }
    },
    // удаляет массив классов CSS  у переданных элементов
    removeCSSFromElems: function (arrayCSS, elems) {
        elems.forEach(elem => {
            for (let classCSS of arrayCSS) {
                elem.classList.remove(classCSS)
            }
        });
    },
    // фиксирует липкое меню во время скрола
    fixedHeader: function () {
        let headerSticky = document.querySelector('.header__line_sticky');
        if (window.pageYOffset > 200) {
            headerSticky.classList.add('sticky-fixed');
        }
        else {
            headerSticky.classList.remove('sticky-fixed');
        }
    },
    // Возвращает элемент HTML с указанным переданным массивом классов CSS
    returnElementHTML(teg, array) {
        let element = document.createElement(teg);
        for (let key of array) {
            element.classList.add(key);
        }
        return element
    },
};

export const spaceBetweenNumbers = library.spaceBetweenNumbers;
export const reloadDataFromLS = library.reloadDataFromLS;
export const removeCSSFromElems = library.removeCSSFromElems;
export const fixedHeader = library.fixedHeader;
export const returnElementHTML = library.returnElementHTML;



