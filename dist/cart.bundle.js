/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/ (() => {

eval("\r\n\r\n/**\r\n * Получет глобальные массивы из localStarage. \r\n * Добавляет условие, если корзина пуста(прячет блок \"Ваш заказ\" / меняет заголовок)\r\n * Выводит информацию в блок Ваш заказ (количество/итого)\r\n * Отрисовывает, с помощью класса Cart, корзину товаров.\r\n * Добавляет методы для управления товарами в корзине.\r\n * Сохраняет все изменения в localStarage.\r\n * \r\n */\r\n\r\n\r\n// глобальный массив для хранения товаров в корзине\r\nlet dataCart = JSON.parse(localStorage.getItem('dataCart'));\r\n\r\n// глобальный массив для хранения total и goodsCounter\r\nlet dataService = JSON.parse(localStorage.getItem('dataService'));\r\n\r\n\r\n// работа с блоком main -------------\r\nlet mainTitle = document.querySelector('.main__title');\r\n\r\nfunction updateMainTitle() {\r\n    if (yourOrder.classList.contains('hidden')) {\r\n        mainTitle.innerHTML = `Ваша корзина пока пуста`;\r\n    }\r\n    else {\r\n        mainTitle.innerHTML = `Корзина`;\r\n    }\r\n}\r\n// ------------------------------------------\r\n\r\n\r\n// Работа с блоком \"Ваш заказ\" -------------\r\nlet yourOrder = document.querySelector('.total');\r\nlet totalSumHTML = document.querySelector('.total__sum');\r\nlet totalCountHTML = document.querySelector('.total__count');\r\nlet btnOrder = document.querySelector('.total__btn-order');\r\n\r\nfunction showYourOrder() {\r\n    if (dataService['total'] === 0) {\r\n        yourOrder.classList.add('hidden');\r\n    }\r\n    else {\r\n        yourOrder.classList.remove('hidden');\r\n    }\r\n    updateMainTitle();\r\n}\r\n// showYourOrder();\r\n\r\nfunction updateTotalNum() {\r\n    totalSumHTML.innerHTML = `Общая стоимость: \r\n    <span>${spaceBetweenNumbers(dataService['total'])} p.</span>`;\r\n\r\n    totalCountHTML.innerHTML = `Выбрано товаров: \r\n    <span> ${spaceBetweenNumbers(dataService['goodsCounter'])} шт.</span>`;\r\n}\r\nupdateTotalNum();\r\n\r\nbtnOrder.addEventListener('click', () => {\r\n    console.log('order')\r\n});\r\n// ------------------------------------------\r\n\r\n\r\n// Работа с товарами в корзине -------------\r\nlet cart = new Cart();\r\ncart.render(dataCart);\r\n\r\n\r\nfunction addEventOnProducts() {\r\n\r\n    let products = document.querySelectorAll('.product');\r\n    products.forEach(product => {\r\n\r\n        product.addEventListener('click', function (event) {\r\n            let target = event.target;\r\n            let articul = product.getAttribute('data-articul');\r\n\r\n            if (target.classList.contains('product__btn-delete')) {\r\n\r\n                cart.delProduct(articul, dataCart);\r\n                dataCart = updateLS('dataCart', dataCart);\r\n                cart.reload(dataCart);\r\n\r\n                addEventOnProducts();\r\n            }\r\n            if (target.classList.contains('minus')) {\r\n                cart.minusProduct(articul, dataCart);\r\n                dataCart = updateLS('dataCart', dataCart);\r\n                cart.reload(dataCart);\r\n\r\n                addEventOnProducts();\r\n            }\r\n            if (target.classList.contains('plus')) {\r\n                cart.plusProduct(articul, dataCart);\r\n                dataCart = updateLS('dataCart', dataCart);\r\n                cart.reload(dataCart);\r\n\r\n                addEventOnProducts();\r\n            }\r\n            dataService['goodsCounter'] = cart.getGoodsCounter();\r\n            dataService['total'] = cart.getTotal();\r\n            updateTotalNum();\r\n            showYourOrder();\r\n            localStorage.setItem('dataService', JSON.stringify(dataService));\r\n        })\r\n    })\r\n}\r\naddEventOnProducts();\r\n\r\n\r\n\r\n// обновляет данные в localStorage\r\nfunction updateLS(key, data) {\r\n    localStorage.setItem(key, JSON.stringify(data));\r\n    return JSON.parse(localStorage.getItem(key));\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/cart.js"]();
/******/ 	
/******/ })()
;