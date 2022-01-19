'use strict'

export default class Goods {

    /**
     * properties
     * @param [array] data - входные данные
     * @param [number] count - внутренние данные
     */

    constructor(data) {
        this.data = data;
        this.count = 0;
        this.goodsRow = document.querySelector('.goods__row');
        this.sortButton = document.querySelectorAll('.sort__item');
        this.sortDirection = 'down';
        this.listCards = [];
    }


    /**
    *  Method setCard - записывает товары в глобальный массив listCards
    */
    // setCard(item, array) {
    //     array.push(item);
    // }

    /**
    *  Method setCountCards - записывает количество отрисованных товаров
    */
    setCountCards(count) {
        this.count = count;
    }

    /**
    *  Method getCountCards - получает количество отрисованных товаров
    */
    getCountCards() {
        return this.count;
    }

    /**
    *  Method checkProductInArray - проверяет содержит массив товар или нет
    */
    includesInListCards(product) {
        if (this.listCards.length !== 0) {
            for (let item of this.listCards) {
                if (item['articul'] === product['articul']) {
                    return true
                }
            }
        }
    }

    /**
    *  Method clearGoodsRow - удаляет все товары из блока .goods__row
    */
    clearGoodsRow() {
        this.goodsRow.innerHTML = '';
    }

    /**
    *  Method sortCards - сортирует товары в блоке .goods__row
    */
    sortCards(key) {
        this.listCards = [];

        if (key === 'price') {
            if (this.sortDirection === 'up') {
                this.data.sort((a, b) => Number(a[key]) > Number(b[key]) ? 1 : -1);
                this.sortDirection = 'down';
            }
            else {
                this.data.sort((a, b) => Number(a[key]) < Number(b[key]) ? 1 : -1);
                this.sortDirection = 'up';
            }
        }
        else {
            this.data.sort((a, b) => Number(a[key]) < Number(b[key]) ? 1 : -1);

        }
        this.clearGoodsRow();
        this.render();
        console.log(this.sortDirection)
    }

    getListCards() {
        return this.listCards;
    }

    /**
    *  Method render - создает и отображает товары на странице. 
    */
    render() {
        let count = 1;
        for (let product of this.data) {
            if (count <= 24) {
                // if (!this.checkProductInArray(product, listCards)) {
                if (!this.includesInListCards(product)) {

                    // this.setCard(product, listCards);
                    this.listCards.push(product);
                    this.setCountCards(count);

                    let card = `<div class="goods" data-articul="${product['articul']}">`;
                    card += `<div class="goods__text">`;
                    // card += `<p class="goods__code">Код: ${product['articul']}</p>`;
                    card += `<p class="goods__code">${product['sales']}   / 
                    ${product['reviews']} / ${product['rating']}</p>`;
                    card += `<i class="far fa-heart" aria-hidden="true"></i>`;
                    card += `</div>`;
                    card += `<div class="goods__image">`;
                    card += `<a href="#">`;
                    card += `<img src="${product['image']}" alt="#">`;
                    card += `</a>`;
                    card += `</div>`;
                    card += `<h2 class="goods__title">`;
                    card += `<a href="#">${product['name']}</a>`;
                    card += `</h2>`;
                    card += `<div class="goods__line">`;
                    card += `<div class="goods__price">
                    ${spaceBetweenNumbers(product['price'])} <span>р.</span></div>`;
                    card += `<div class="goods__button add-in-cart">`;
                    card += `<i class="fa fa-shopping-cart add-in-cart" aria-hidden="true"></i>`;
                    card += `</div>`;
                    card += `</div>`;

                    this.goodsRow.innerHTML += card;
                    count++;
                }
            }
            else {
                count = 0;
                break;
            }
        }
    }
}

