'use strict'
// !!!!!! добавить кнопку очистить всю корзину

// глобальный массив для хранения товаров в корзине
let dataCart = JSON.parse(localStorage.getItem('dataCart'));
// глобальный массив для хранения total и goodsCounter
let dataService = JSON.parse(localStorage.getItem('dataService'));

let totalHTML = document.querySelector('.cart-label__total');
totalHTML.innerHTML = `${dataService['total']} RUB`;


let cart = new Cart();
cart.render(dataCart);

function addEventOnProducts() {

    let products = document.querySelectorAll('.cart__tr');
    products.forEach(product => {

        product.addEventListener('click', function (event) {
            let target = event.target;
            let articul = product.getAttribute('data-articul');

            if (target.classList.contains('td__btn-delete')) {
                cart.delProduct(articul, dataCart);
                dataCart = updateLS('dataCart', dataCart);
                cart.reload(dataCart);

                addEventOnProducts();
            }
            if (target.classList.contains('td__btn-minus')) {
                cart.minusProduct(articul, dataCart);
                dataCart = updateLS('dataCart', dataCart);
                cart.reload(dataCart);

                addEventOnProducts();
            }
            if (target.classList.contains('td__btn-plus')) {
                cart.plusProduct(articul, dataCart);
                dataCart = updateLS('dataCart', dataCart);
                cart.reload(dataCart);

                addEventOnProducts();
            }
            dataService['goodsCounter'] = cart.getGoodsCounter();
            dataService['total'] = cart.getTotal();
            totalHTML.innerHTML = `${cart.getTotal()} RUB`;

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



