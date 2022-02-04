'use strict'
import Header from './class/Header.js';
import Footer from './class/Footer.js';
import Cart from './class/Cart.js';
import { spaceBetweenNumbers } from './library.js';


/**
 * Получет глобальные массивы из localStarage. 
 * Добавляет условие, если корзина пуста(прячет блок "Ваш заказ" / меняет заголовок)
 * Выводит информацию в блок Ваш заказ (количество/итого)
 * Отрисовывает, с помощью класса Cart, корзину товаров.
 * Добавляет методы для управления товарами в корзине.
 * Сохраняет все изменения в localStarage.
 * 
 */


// глобальный массив для хранения товаров в корзине
let dataCart = JSON.parse(localStorage.getItem('dataCart'));

// глобальный массив для хранения total и goodsCounter
let dataService = JSON.parse(localStorage.getItem('dataService'));

// создает header на странице
{
    let headerHTML = new Header();
    headerHTML.render();
}


// работа с блоком main -------------
let mainTitle = document.querySelector('.main__title');

function updateMainTitle() {
    if (yourOrder.classList.contains('hidden')) {
        mainTitle.innerHTML = `Ваша корзина пока пуста`;
    }
    else {
        mainTitle.innerHTML = `Корзина`;
    }
}
// ------------------------------------------


// Работа с блоком "Ваш заказ" -------------
let yourOrder = document.querySelector('.total');
let totalSumHTML = document.querySelector('.total__sum');
let totalCountHTML = document.querySelector('.total__count');
let btnOrder = document.querySelector('.total__btn-order');

function showYourOrder() {
    if (dataService['total'] === 0) {
        yourOrder.classList.add('hidden');
    }
    else {
        yourOrder.classList.remove('hidden');
    }
    updateMainTitle();
}
// showYourOrder();

function updateTotalNum() {
    totalSumHTML.innerHTML = `Общая стоимость: 
    <span>${spaceBetweenNumbers(dataService['total'])} p.</span>`;

    totalCountHTML.innerHTML = `Выбрано товаров: 
    <span> ${spaceBetweenNumbers(dataService['goodsCounter'])} шт.</span>`;
}
updateTotalNum();

btnOrder.addEventListener('click', () => {
    console.log('order')
});
// ------------------------------------------


// Работа с товарами в корзине -------------
let cart = new Cart();
cart.render(dataCart);


function addEventOnProducts() {

    let products = document.querySelectorAll('.product');
    products.forEach(product => {

        product.addEventListener('click', function (event) {
            let target = event.target;
            let articul = product.getAttribute('data-articul');

            if (target.classList.contains('product__btn-delete')) {

                cart.delProduct(articul, dataCart);
                dataCart = updateLS('dataCart', dataCart);
                cart.reload(dataCart);

                addEventOnProducts();
            }
            if (target.classList.contains('minus')) {
                cart.minusProduct(articul, dataCart);
                dataCart = updateLS('dataCart', dataCart);
                cart.reload(dataCart);

                addEventOnProducts();
            }
            if (target.classList.contains('plus')) {
                cart.plusProduct(articul, dataCart);
                dataCart = updateLS('dataCart', dataCart);
                cart.reload(dataCart);

                addEventOnProducts();
            }
            dataService['goodsCounter'] = cart.getGoodsCounter();
            dataService['total'] = cart.getTotal();
            updateTotalNum();
            showYourOrder();
            localStorage.setItem('dataService', JSON.stringify(dataService));
        })
    })
}
addEventOnProducts();



// обновляет данные в localStorage
function updateLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return JSON.parse(localStorage.getItem(key));
}

// создает footer и выводит его на страницу
{
    let footerHTML = new Footer();
    footerHTML.render();
}

