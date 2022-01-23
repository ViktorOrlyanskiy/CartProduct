'use strict'

import { spaceBetweenNumbers } from '../library.js';

export default class Cart {

    /**
    * properties
    * @param [HTMLElement] cart - элемент в котором размещается таблица с товарами
    *  
    */

    constructor() {
        this.cart = document.querySelector('.cart');
        this.goodsCounter = 0;
        this.total = 0;

    }
    // обновляет товары в корзине - ok
    // удалять товар - ok
    // уменьшать количество
    // увеличивать количество
    // считать сумму строки
    // считать общую сумму
    // отрисовывать таблицу товаров - ok


    /**
    *  Metod getGoodsCounter - возвращает количество товаров в корзине
    */
    getGoodsCounter() {
        return this.goodsCounter
    }

    /**
    *  Metod getTotal - возвращает итоговую сумму товаров в корзине
    */
    getTotal() {
        return this.total
    }

    /**
    *  Metod reload - обновляет товары в корзине
    */
    reload(data) {
        this.cart.innerHTML = '';
        this.render(data);
    }

    /**
    *  Metod delProduct - удаляет товар из корзины
    */
    delProduct(articul, data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i]['articul'] === articul) {
                data.splice(i, 1)
            }
        }
    }

    /**
    *  Metod minusProduct - умeньшает количество товара в корзине
    */
    minusProduct(articul, data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i]['articul'] === articul) {
                data[i]['count']--;
                if (data[i]['count'] === 0) {
                    this.delProduct(articul, data)
                }
            }
        }
    }

    /**
    *  Metod plusProduct - увеличивает количество товара в корзине
    */
    plusProduct(articul, data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i]['articul'] === articul) {
                data[i]['count']++;
            }
        }
    }

    /**
    *  Metod sumProduct - считает сумму товаров
    */
    sumProduct(product) {
        return product['count'] * product['price']
    }

    /**
    *  Metod render - отрисовывает корзину
    */
    render(data) {
        this.goodsCounter = 0; // обнуляем так как постоянно перерисовывается таблица
        this.total = 0; // обнуляем так как постоянно перерисовывается таблица


        for (let product of data) {

            let productHTML = `<div class="product" data-articul="${product['articul']}">`;
            productHTML += `<div class="product__image">`;
            productHTML += `<img src="${product['image']}" alt="#">`;
            productHTML += `</div>`;
            productHTML += `<div class="product__body">`;
            productHTML += `<div class="product__name">${product['name']}</div>`;
            productHTML += `<div class="product__buttons">`;
            productHTML += `<div class="product__btn-minus btn-counter minus">`;
            productHTML += `<i class="fas fa-minus minus"></i>`;
            productHTML += `</div>`;
            productHTML += `<div class="product__count">${product['count']}</div>`;
            productHTML += `<div class="product__btn-plus btn-counter plus">`;
            productHTML += `<i class="fas fa-plus plus"></i>`;
            productHTML += `</div>`;
            productHTML += `<div class="product__sum">
            ${spaceBetweenNumbers(this.sumProduct(product))}<span> p.</span></div>`;
            productHTML += `<div class="product__btn-heart">`;
            productHTML += `<i class="far fa-heart" aria-hidden="true"></i>`;
            productHTML += `</div>`;
            productHTML += `<div class="product__btn-delete">&#215</div>`;
            productHTML += ` </div>`;
            productHTML += ` </div>`;
            productHTML += ` </div>`;


            this.goodsCounter += product['count'];
            this.total += this.sumProduct(product);
            this.cart.innerHTML += productHTML;
        }
    }
}
