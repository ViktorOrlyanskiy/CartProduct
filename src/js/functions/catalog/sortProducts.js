'use strict'

import { removeCSSFromElems } from "../../library.js";

/**
 * !Сортирует товары в катологе!
 * Принимает объект [listProducts] созданный на основании класса Goods и функцию 
 * [addEventOnGoods] которая добавляет события на отрисованные карточки товаров
 */


export default function sortProducts(listProducts, addEventOnGoods) {
    let sortButtons = document.querySelectorAll('.sort__item');

    sortButtons.forEach(elem => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('sort__item_active')) {

                let key = elem.getAttribute('data-sort');
                listProducts.sortCards(key);

                removeCSSFromElems(['sort__item_active'], sortButtons);

                if (key !== 'price') {
                    removeCSSFromElems(['price_up', 'price_down'], sortButtons);

                    elem.classList.remove('price_active');
                    elem.classList.add('sort__item_active');
                }
                else {
                    if (elem.classList.contains('price_up')) {
                        elem.classList.remove('price_up');
                        elem.classList.add('price_down');
                    }
                    else {
                        elem.classList.remove('price_down');
                        elem.classList.add('price_up');
                    }
                }

                addEventOnGoods(listProducts);
            }
        });
    });
}