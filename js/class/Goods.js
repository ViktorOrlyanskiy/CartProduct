'use strict'

class Goods {

    /**
     * properties
     * @param [array] data - входные данные
     * @param [number] count - внутренние данные
     */

    constructor(data) {
        this.data = data;
        this.count = 0;
    }


    /**
    *  Method setCard - записывает товары в глобальный массив listCards
    */
    setCard(product) {
        listCards.push(product);
    }

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
    checkProductInArray(product, array) {
        if (array.length !== 0) {
            for (let item of array) {
                if (item['articul'] === product['articul']) {
                    return true
                }
            }
        }
    }

    /**
    *  Method render - создает и отображает товары на странице. 
    */
    render(data) {
        let goodsRow = document.querySelector('.goods__row');
        let count = 1;
        for (let product of data) {
            if (count <= 8) {
                if (!this.checkProductInArray(product, listCards)) {

                    this.setCard(product);
                    this.setCountCards(count);

                    let card = `<div class="goods" data-articul="${product['articul']}">`;
                    card += `<div class="goods__text">`;
                    card += `<p class="goods__code">Код: ${product['articul']}</p>`;
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

                    goodsRow.innerHTML += card;
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

