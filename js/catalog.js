'use strict'


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

// глобальный массив для хранения отрисованных артикулов
let listCards = [];


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

    sortProducts(listProducts);

    function checkCountCards(count) {
        if (count < 8) {
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
                let product = returnProduct(articul, listCards);

                if (checkProductInArray(product, dataCart)) {
                    product = returnProduct(articul, dataCart);
                    product['count']++;
                    product['sumProduct'] = sumProduct(product);

                    dataService['goodsCounter']++;
                }
                else {
                    product = returnProduct(articul, listCards);
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


// Работа с сортировкой товаров -------------
function sortProducts(listProducts) {

    let SortButtons = document.querySelectorAll('.sort__item');
    SortButtons.forEach(elem => {

        elem.addEventListener('click', () => {
            if (elem.classList.contains('popular')) {
                if (!elem.classList.contains('sort__item_active')) {
                    products.sort((a, b) => Number(a.sales) < Number(b.sales) ? 1 : -1)
                    redrawsProductCards();

                    removeCSSFromElems('sort__item_active', SortButtons);
                    elem.classList.add('sort__item_active');
                }
            }
            else if (elem.classList.contains('reviews')) {
                if (!elem.classList.contains('sort__item_active')) {
                    products.sort((a, b) => Number(a.reviews) < Number(b.reviews) ? 1 : -1)
                    redrawsProductCards();

                    removeCSSFromElems('sort__item_active', SortButtons);
                    elem.classList.add('sort__item_active');
                }
            }
            else if (elem.classList.contains('rating')) {
                if (!elem.classList.contains('sort__item_active')) {
                    products.sort((a, b) => Number(a.rating) < Number(b.rating) ? 1 : -1)
                    redrawsProductCards();

                    removeCSSFromElems('sort__item_active', SortButtons);
                    elem.classList.add('sort__item_active');
                }
            }
            else if (elem.classList.contains('sort-price')) {
                // if (!elem.classList.contains('sort__item_active')) {
                if (elem.classList.contains('up')) {
                    products.sort((a, b) => Number(a.price) < Number(b.price) ? 1 : -1);
                    elem.classList.remove('up');
                    elem.classList.add('down');
                    // sortProducts(listProducts)
                }
                else if (elem.classList.contains('down')) {
                    products.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
                    elem.classList.remove('down');
                    elem.classList.add('up');
                    // sortProducts(listProducts)
                }

                redrawsProductCards();
                sortProducts(listProducts)
                removeCSSFromElems('sort__item_active', SortButtons);
                // elem.classList.add('sort__item_active');
                // }
            }
        });





    });


    // удаляет все товары и рисует их заново
    function redrawsProductCards() {
        listCards = [];
        listProducts.clearGoodsRow();
        drawProducts(products);
    }

}








