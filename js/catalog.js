'use strict'

/**
 * Создает глобальные массивы для хранения товаров добавленные в корзину [dataCart], хранения количества добавленных товаров и итоговой сумму [dataService].
 * Обновляет и выводит данные из dataService в header
 * Отрисовывает товары каталога и добавляет события на них
 */

// глобальный массив для хранения товаров в корзине
let dataCart = {};

// глобальный массив для хранения total и goodsCounter
let dataService = {
    'total': 0,
    'goodsCounter': 0,
};

// глобальный массив для хранения отрисованных артикулов
let listCards = {};


// работа с блоком header -------------

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


drawProducts(products);

let btnAddGoods = document.querySelector('.add-goods');
btnAddGoods.addEventListener('click', () => {
    drawProducts(products);
})

// отрисовывает товары на странице и добавляет обработку события
function drawProducts(products) {
    let listProducts = new Goods();
    listProducts.render(products);
    checkCountCards(listProducts.getCountCards())
    addEventOnGoods(products);

    function checkCountCards(count) {
        if (count < 6) {
            btnAddGoods.classList.add('hidden');
        }
    }
}


// добавляет событие на товары
function addEventOnGoods() {
    let goods = document.querySelectorAll('.goods');

    goods.forEach(card => {
        card.addEventListener('click', function (event) {
            let target = event.target;

            if (target.classList.contains('add-in-cart')) {
                let articul = card.getAttribute('data-articul');

                if (dataCart[articul] !== undefined) {
                    dataCart[articul]['count']++;
                    dataCart[articul]['sumProduct'] = sumProduct(dataCart[articul]);

                    dataService['goodsCounter']++;

                }
                else {
                    dataCart[articul] = listCards[articul];
                    dataCart[articul]['count'] = 1;
                    dataCart[articul]['sumProduct'] = sumProduct(dataCart[articul]);

                    dataService['goodsCounter']++;
                }

                dataService['total'] = calculateTotal(dataCart);
                goodsCounterHTML.innerHTML = dataService['goodsCounter'];
                showTotal(dataService['total']);
                reloadGoodsCounter()
            }

            localStorage.setItem('dataCart', JSON.stringify(dataCart))
            localStorage.setItem('dataService', JSON.stringify(dataService))
        })
    })


    // считает сумму по отдельному товару в корзине 
    function sumProduct(product) {
        return product['count'] * product['price']
    }

    // считает итоговую сумму в корзине
    function calculateTotal(dataCart) {
        let total = 0;
        for (let articul in dataCart) {
            let product = dataCart[articul];
            total += product['sumProduct'];
        }
        return total
    }
}




