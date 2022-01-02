'use strict'

class Cart {

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
        delete data[articul];
    }

    /**
    *  Metod minusProduct - умeньшает количество товара в корзине
    */
    minusProduct(articul, data) {
        data[articul]['count']--;
        if (data[articul]['count'] === 0) [
            this.delProduct(articul, data)
        ]
    }

    /**
    *  Metod plusProduct - увеличивает количество товара в корзине
    */
    plusProduct(articul, data) {
        data[articul]['count']++;
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

        let table = document.createElement('table');
        table.classList.add('cart__table');

        for (let articul in data) {
            let product = data[articul];

            let tr = document.createElement('tr');
            tr.classList.add('cart__tr');
            tr.setAttribute('data-articul', articul);

            for (let i = 0; i < 7; i++) {
                let td = `<td class="cart__td td">`;
                if (i === 0) {
                    td += `<div class="td__btn-delete td-btn" ></>`;
                    td += `</td>`;
                }
                else if (i === 1) {
                    td += `<img src="${product['image']}" alt="#" class="td__img">`;
                    td += `</td>`;
                }
                else if (i === 2) {
                    td += `<div class="td__name">${product['name']}</div>`;
                    td += `</td>`;
                }
                else if (i === 3) {
                    td += `<div class="td__btn-minus td-btn">-</div>`;
                    td += `</td>`;
                }
                else if (i === 4) {
                    td += `<div class="td__count">${product['count']}</div>`;
                    td += `</td>`;
                }
                else if (i === 5) {
                    td += `<div class="td__btn-plus td-btn">+</div>`;
                    td += `</td>`;
                }
                else if (i === 6) {
                    td += `<div class="td__sum">${this.sumProduct(product)} RUB</div>`;
                    td += `</td>`;
                }
                tr.innerHTML += td;
            }
            this.goodsCounter += product['count'];
            this.total += this.sumProduct(product);
            table.append(tr);
        }
        this.cart.append(table);
    }
}