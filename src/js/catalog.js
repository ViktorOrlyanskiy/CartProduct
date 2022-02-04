'use strict'

import { products } from './products.js';
import Header from './class/Header.js';
import Footer from './class/Footer.js';
import Slider from './class/Slider.js';
import Goods from './class/Goods.js';
import sortProducts from './functions/catalog/sortProducts.js';
import { spaceBetweenNumbers, reloadDataFromLS, fixedHeader } from './library.js'

/**
 * Создает глобальные массивы для хранения товаров добавленные в корзину [dataCart], хранения количества добавленных товаров и итоговой сумму [dataService].
 * Обновляет и выводит данные из dataService в header
 * Отрисовывает товары каталога и добавляет события на них
 * 
 */

// глобальный массив для хранения товаров в корзине
let dataCart = [];

// глобальный массив для хранения total и goodsCounter
let dataService = {
    'total': 0,
    'goodsCounter': 0,
};


// создает header и выводит его на страницу
{
    let showStickyMenu = true;
    let headerHTML = new Header();
    headerHTML.render(showStickyMenu);
    window.onscroll = fixedHeader;
}


// создает slider, добавляет события на стрелки и выводит его на страницу
{
    let bannerHTML = document.querySelector('.banner');
    let links = ['./src/img/banner-0.jpg', './src/img/banner-1.jpg', './src/img/banner-2.jpg',
        './src/img/banner-3.jpg', './src/img/banner-4.jpg',];

    let slider = new Slider(bannerHTML, links);
    slider.render();
    slider.render();

    slider.playSlider();

    let arrowNext = slider.getArrow('next');
    let arrowBack = slider.getArrow('back');

    const next = function () {
        slider.nextSlide(this, next)
        slider.setAction('stop')
    };
    const back = function () {
        slider.backSlide(this, next)
        slider.setAction('stop')
    };

    arrowNext.addEventListener('click', next);
    arrowBack.addEventListener('click', back);
}



//  Обновляет глобальные массивы
dataCart = reloadDataFromLS('dataCart', dataCart);
dataService = reloadDataFromLS('dataService', dataService);


// записывает количество товаров корзины в header
let goodsCounterHTML = document.querySelector('.cart-label__count');

function reloadGoodsCounter() {
    if (dataService['goodsCounter'] === 0) {
        goodsCounterHTML.classList.add('hidden');
    }
    else {
        goodsCounterHTML.classList.remove('hidden');
        goodsCounterHTML.innerHTML = dataService['goodsCounter'];
    }
}
reloadGoodsCounter();


// записывает итоговую сумму корзины в header
let totalHTML = document.querySelector('.cart-label__total');

function showTotal(total) {
    if (total === 0) {
        totalHTML.innerHTML = 'Корзина';
        totalHTML.classList.remove('totalCSS');
    }
    else {
        totalHTML.innerHTML = `${spaceBetweenNumbers(total)} p.`;
        totalHTML.classList.add('totalCSS');
    }
}
showTotal(dataService['total']);
// ------------------------------------------


// Работа с товарами каталога -------------

// отрисовывает товары на странице и добавляет обработку событий
function drawProducts(products) {
    let listProducts = new Goods(products);
    listProducts.render();
    checkCountCards(listProducts.getCountCards());

    sortProducts(listProducts, addEventOnGoods);
    addEventOnGoods(listProducts);

    let btnAddGoods = document.querySelector('.add-goods');
    btnAddGoods.addEventListener('click', () => {
        listProducts.render();
        addEventOnGoods(listProducts);
    })

    function checkCountCards(count) {
        if (count < 24) {
            btnAddGoods.classList.add('hidden');
        }
    }
}
drawProducts(products);


// добавляет событие на товары
function addEventOnGoods(listProducts) {
    let goods = document.querySelectorAll('.goods');

    goods.forEach(card => {
        card.addEventListener('click', function (event) {
            let target = event.target;

            if (target.classList.contains('add-in-cart')) {
                let articul = card.getAttribute('data-articul');
                let product = returnProduct(articul, listProducts.getListCards());

                if (checkProductInArray(product, dataCart)) {
                    product = returnProduct(articul, dataCart);
                    product['count']++;
                    product['sumProduct'] = sumProduct(product);

                    dataService['goodsCounter']++;
                }
                else {
                    product = returnProduct(articul, listProducts.getListCards());
                    product['count'] = 1;
                    product['sumProduct'] = sumProduct(product);
                    dataCart.push(product);

                    dataService['goodsCounter']++;

                }

                dataService['total'] = calculateTotal(dataCart);
                goodsCounterHTML.innerHTML = dataService['goodsCounter'];
                showTotal(dataService['total']);
                reloadGoodsCounter();
            }

            localStorage.setItem('dataCart', JSON.stringify(dataCart));
            localStorage.setItem('dataService', JSON.stringify(dataService));
        })
    })


    // считает сумму по отдельному товару в корзине
    function sumProduct(product) {
        product['sumProduct'] = 0;
        return (product['count'] * product['price'])
    }

    // считает итоговую сумму в корзине
    function calculateTotal(dataCart) {
        let total = 0;
        for (let product of dataCart) {
            total += product['sumProduct'];
        }
        return total
    }

    // возвращает товар из массива
    function returnProduct(articul, array) {
        for (let item of array) {
            if (item['articul'] === articul) {
                return item
            }
        }
    }

    // проверяет содержит массив товар или нет
    function checkProductInArray(product, array) {
        if (array.length !== 0) {
            for (let item of array) {
                if (item['articul'] === product['articul']) {
                    return true
                }
            }
        }
    }
}

// создает footer и выводит его на страницу
{
    let footerHTML = new Footer();
    footerHTML.render();
}






