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
    setCard(articul, data) {
        listCards[articul] = data[articul];
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
    *  Method render - создает и отображает товары на странице. 
    */
    render(data) {
        let goodsRow = document.querySelector('.goods__row');
        let count = 1;
        for (let key in data) {
            if (count <= 6) {
                if (listCards[key] === undefined) {
                    let articul = key;
                    this.setCard(articul, data);
                    this.setCountCards(count);

                    let card = `<div class="goods" data-articul="${articul}">`;
                    card += `<div class="goods__text">`;
                    card += `<p class="goods__code">Код: ${articul}</p>`;
                    card += `<i class="far fa-heart" aria-hidden="true"></i>`;
                    card += `</div>`;
                    card += `<div class="goods__image">`;
                    card += `<a href="#">`;
                    card += `<img src="${data[articul]['image']}" alt="#">`;
                    card += `</a>`;
                    card += `</div>`;
                    card += `<h2 class="goods__title">`;
                    card += `<a href="#">${data[articul]['name']}</a>`;
                    card += `</h2>`;
                    card += `<div class="goods__line">`;
                    card += `<div class="goods__price">${data[articul]['price']} <span>р.</span></div>`;
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

