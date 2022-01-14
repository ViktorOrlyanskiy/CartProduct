'use strict'

// глобальный массив для хранения товаров в корзине
let dataCart = {};

// глобальный массив для хранения total и goodsCounter
let dataService = {
    'total': 0,
    'goodsCounter': 0,
};

// глобальный массив для хранения отрисованных артикулов
let listCards = {};


/* Обновляет глобальные массивы и выводит данные на страницу */
dataCart = reloadDataOutLS('dataCart', dataCart);
dataService = reloadDataOutLS('dataService', dataService);

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
        totalHTML.innerHTML = `${total} p.`;
        totalHTML.classList.add('totalCSS');
    }
}
showTotal(dataService['total']);
// totalHTML.innerHTML = `${dataService['total']} RUB`;


/* -------------------------------------------------------- */


// выводит первые 6 товаров на страницу
drawProducts(products);

let btnAddGoods = document.querySelector('.add-goods');
btnAddGoods.addEventListener('click', () => {
    drawProducts(products)
})

// отрисовывает товары на странице и добавляет обработку события
function drawProducts(products) {
    let listProducts = new Goods();
    listProducts.render(products);
    checkCountCards(listProducts.getCountCards())
    addEventOnGoods(products);
}

// проверяет количество отрисованных товаров
function checkCountCards(count) {
    if (count < 6) {
        btnAddGoods.classList.add('hidden');
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
            // !!!!!! Добавить проверку уже имеющихся данных в локалСторадж
            localStorage.setItem('dataCart', JSON.stringify(dataCart))
            localStorage.setItem('dataService', JSON.stringify(dataService))
        })
    })
}


// обновляет данные из localStorage
function reloadDataOutLS(key, data) {
    let dataLS = JSON.parse(localStorage.getItem(key));

    if (dataLS === null) {
        return data
    }
    else {
        return dataLS
    }
}

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