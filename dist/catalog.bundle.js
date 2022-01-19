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

/***/ "./js/catalog.js":
/*!***********************!*\
  !*** ./js/catalog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Goods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Goods.js */ \"./js/class/Goods.js\");\n\r\n\r\n;\r\n\r\n\r\n/**\r\n * Создает глобальные массивы для хранения товаров добавленные в корзину [dataCart], хранения количества добавленных товаров и итоговой сумму [dataService].\r\n * Обновляет и выводит данные из dataService в header\r\n * Отрисовывает товары каталога и добавляет события на них\r\n * \r\n */\r\n\r\n// глобальный массив для хранения товаров в корзине\r\nlet dataCart = [];\r\n\r\n// глобальный массив для хранения total и goodsCounter\r\nlet dataService = {\r\n    'total': 0,\r\n    'goodsCounter': 0,\r\n};\r\n\r\n// глобальный массив для хранения отрисованных артикулов\r\nlet listCards = [];\r\n\r\n\r\n\r\n// работа с блоком header -------------\r\n\r\n//  Обновляет глобальные массивы\r\ndataCart = reloadDataFromLS('dataCart', dataCart);\r\ndataService = reloadDataFromLS('dataService', dataService);\r\n\r\n\r\n// записывает количество товаров корзины в header\r\nlet goodsCounterHTML = document.querySelector('.cart-label__count');\r\n\r\nfunction reloadGoodsCounter() {\r\n    if (dataService['goodsCounter'] === 0) {\r\n        goodsCounterHTML.classList.add('hidden');\r\n    }\r\n    else {\r\n        goodsCounterHTML.classList.remove('hidden');\r\n        goodsCounterHTML.innerHTML = dataService['goodsCounter'];\r\n    }\r\n}\r\nreloadGoodsCounter();\r\n\r\n\r\n// записывает итоговую сумму корзины в header\r\nlet totalHTML = document.querySelector('.cart-label__total');\r\n\r\nfunction showTotal(total) {\r\n    if (total === 0) {\r\n        totalHTML.innerHTML = 'Корзина';\r\n        totalHTML.classList.remove('totalCSS');\r\n    }\r\n    else {\r\n        totalHTML.innerHTML = `${spaceBetweenNumbers(total)} p.`;\r\n        totalHTML.classList.add('totalCSS');\r\n    }\r\n}\r\nshowTotal(dataService['total']);\r\n// ------------------------------------------\r\n\r\n\r\n// Работа с товарами каталога -------------\r\n\r\n// отрисовывает товары на странице и добавляет обработку событий\r\nfunction drawProducts(products) {\r\n    let listProducts = new _class_Goods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](products);\r\n    listProducts.render();\r\n    checkCountCards(listProducts.getCountCards());\r\n\r\n    sortProducts(listProducts);\r\n    addEventOnGoods(listProducts);\r\n\r\n    let btnAddGoods = document.querySelector('.add-goods');\r\n    btnAddGoods.addEventListener('click', () => {\r\n        listProducts.render();\r\n        addEventOnGoods(listProducts);\r\n    })\r\n\r\n    function checkCountCards(count) {\r\n        if (count < 24) {\r\n            btnAddGoods.classList.add('hidden');\r\n        }\r\n    }\r\n}\r\ndrawProducts(products);\r\n\r\n\r\n// Сортирует товары \r\nfunction sortProducts(listProducts) {\r\n    let sortButtons = document.querySelectorAll('.sort__item');\r\n\r\n    sortButtons.forEach(elem => {\r\n        elem.addEventListener('click', () => {\r\n            if (!elem.classList.contains('sort__item_active')) {\r\n\r\n                let key = elem.getAttribute('data-sort');\r\n                // listCards = [];\r\n                listProducts.sortCards(key);\r\n\r\n                removeCSSFromElems(['sort__item_active'], sortButtons);\r\n\r\n                if (key !== 'price') {\r\n                    removeCSSFromElems(['price_up', 'price_down'], sortButtons);\r\n\r\n                    elem.classList.remove('price_active');\r\n                    elem.classList.add('sort__item_active');\r\n                }\r\n                else {\r\n                    if (elem.classList.contains('price_up')) {\r\n                        elem.classList.remove('price_up');\r\n                        elem.classList.add('price_down');\r\n                    }\r\n                    else {\r\n                        elem.classList.remove('price_down');\r\n                        elem.classList.add('price_up');\r\n                    }\r\n                }\r\n                addEventOnGoods(listProducts.data)\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n// добавляет событие на товары\r\nfunction addEventOnGoods(listProducts) {\r\n    let goods = document.querySelectorAll('.goods');\r\n\r\n    goods.forEach(card => {\r\n        card.addEventListener('click', function (event) {\r\n            let target = event.target;\r\n\r\n            if (target.classList.contains('add-in-cart')) {\r\n                let articul = card.getAttribute('data-articul');\r\n                // let product = returnProduct(articul, listCards);\r\n                let product = returnProduct(articul, listProducts.getListCards());\r\n\r\n                if (checkProductInArray(product, dataCart)) {\r\n                    product = returnProduct(articul, dataCart);\r\n                    product['count']++;\r\n                    product['sumProduct'] = sumProduct(product);\r\n\r\n                    dataService['goodsCounter']++;\r\n                }\r\n                else {\r\n                    // product = returnProduct(articul, listCards);\r\n                    product = returnProduct(articul, listProducts.getListCards());\r\n                    product['count'] = 1;\r\n                    product['sumProduct'] = sumProduct(product);\r\n                    dataCart.push(product);\r\n\r\n                    dataService['goodsCounter']++;\r\n\r\n                }\r\n\r\n                dataService['total'] = calculateTotal(dataCart);\r\n                goodsCounterHTML.innerHTML = dataService['goodsCounter'];\r\n                showTotal(dataService['total']);\r\n                reloadGoodsCounter();\r\n            }\r\n\r\n            localStorage.setItem('dataCart', JSON.stringify(dataCart));\r\n            localStorage.setItem('dataService', JSON.stringify(dataService));\r\n        })\r\n    })\r\n\r\n\r\n    // считает сумму по отдельному товару в корзине\r\n    function sumProduct(product) {\r\n        product['sumProduct'] = 0;\r\n        return (product['count'] * product['price'])\r\n    }\r\n\r\n    // считает итоговую сумму в корзине\r\n    function calculateTotal(dataCart) {\r\n        let total = 0;\r\n        for (let product of dataCart) {\r\n            total += product['sumProduct'];\r\n        }\r\n        return total\r\n    }\r\n\r\n    // возвращает товар из массива\r\n    function returnProduct(articul, array) {\r\n        for (let item of array) {\r\n            if (item['articul'] === articul) {\r\n                return item\r\n            }\r\n        }\r\n    }\r\n\r\n    // проверяет содержит массив товар или нет\r\n    function checkProductInArray(product, array) {\r\n        if (array.length !== 0) {\r\n            for (let item of array) {\r\n                if (item['articul'] === product['articul']) {\r\n                    return true\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/catalog.js?");

/***/ }),

/***/ "./js/class/Goods.js":
/*!***************************!*\
  !*** ./js/class/Goods.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goods)\n/* harmony export */ });\n\r\n\r\nclass Goods {\r\n\r\n    /**\r\n     * properties\r\n     * @param [array] data - входные данные\r\n     * @param [number] count - внутренние данные\r\n     */\r\n\r\n    constructor(data) {\r\n        this.data = data;\r\n        this.count = 0;\r\n        this.goodsRow = document.querySelector('.goods__row');\r\n        this.sortButton = document.querySelectorAll('.sort__item');\r\n        this.sortDirection = 'down';\r\n        this.listCards = [];\r\n    }\r\n\r\n\r\n    /**\r\n    *  Method setCard - записывает товары в глобальный массив listCards\r\n    */\r\n    // setCard(item, array) {\r\n    //     array.push(item);\r\n    // }\r\n\r\n    /**\r\n    *  Method setCountCards - записывает количество отрисованных товаров\r\n    */\r\n    setCountCards(count) {\r\n        this.count = count;\r\n    }\r\n\r\n    /**\r\n    *  Method getCountCards - получает количество отрисованных товаров\r\n    */\r\n    getCountCards() {\r\n        return this.count;\r\n    }\r\n\r\n    /**\r\n    *  Method checkProductInArray - проверяет содержит массив товар или нет\r\n    */\r\n    includesInListCards(product) {\r\n        if (this.listCards.length !== 0) {\r\n            for (let item of this.listCards) {\r\n                if (item['articul'] === product['articul']) {\r\n                    return true\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n    *  Method clearGoodsRow - удаляет все товары из блока .goods__row\r\n    */\r\n    clearGoodsRow() {\r\n        this.goodsRow.innerHTML = '';\r\n    }\r\n\r\n    /**\r\n    *  Method sortCards - сортирует товары в блоке .goods__row\r\n    */\r\n    sortCards(key) {\r\n        this.listCards = [];\r\n\r\n        if (key === 'price') {\r\n            if (this.sortDirection === 'up') {\r\n                this.data.sort((a, b) => Number(a[key]) > Number(b[key]) ? 1 : -1);\r\n                this.sortDirection = 'down';\r\n            }\r\n            else {\r\n                this.data.sort((a, b) => Number(a[key]) < Number(b[key]) ? 1 : -1);\r\n                this.sortDirection = 'up';\r\n            }\r\n        }\r\n        else {\r\n            this.data.sort((a, b) => Number(a[key]) < Number(b[key]) ? 1 : -1);\r\n\r\n        }\r\n        this.clearGoodsRow();\r\n        this.render();\r\n        console.log(this.sortDirection)\r\n    }\r\n\r\n    getListCards() {\r\n        return this.listCards;\r\n    }\r\n\r\n    /**\r\n    *  Method render - создает и отображает товары на странице. \r\n    */\r\n    render() {\r\n        let count = 1;\r\n        for (let product of this.data) {\r\n            if (count <= 24) {\r\n                // if (!this.checkProductInArray(product, listCards)) {\r\n                if (!this.includesInListCards(product)) {\r\n\r\n                    // this.setCard(product, listCards);\r\n                    this.listCards.push(product);\r\n                    this.setCountCards(count);\r\n\r\n                    let card = `<div class=\"goods\" data-articul=\"${product['articul']}\">`;\r\n                    card += `<div class=\"goods__text\">`;\r\n                    // card += `<p class=\"goods__code\">Код: ${product['articul']}</p>`;\r\n                    card += `<p class=\"goods__code\">${product['sales']}   / \r\n                    ${product['reviews']} / ${product['rating']}</p>`;\r\n                    card += `<i class=\"far fa-heart\" aria-hidden=\"true\"></i>`;\r\n                    card += `</div>`;\r\n                    card += `<div class=\"goods__image\">`;\r\n                    card += `<a href=\"#\">`;\r\n                    card += `<img src=\"${product['image']}\" alt=\"#\">`;\r\n                    card += `</a>`;\r\n                    card += `</div>`;\r\n                    card += `<h2 class=\"goods__title\">`;\r\n                    card += `<a href=\"#\">${product['name']}</a>`;\r\n                    card += `</h2>`;\r\n                    card += `<div class=\"goods__line\">`;\r\n                    card += `<div class=\"goods__price\">\r\n                    ${spaceBetweenNumbers(product['price'])} <span>р.</span></div>`;\r\n                    card += `<div class=\"goods__button add-in-cart\">`;\r\n                    card += `<i class=\"fa fa-shopping-cart add-in-cart\" aria-hidden=\"true\"></i>`;\r\n                    card += `</div>`;\r\n                    card += `</div>`;\r\n\r\n                    this.goodsRow.innerHTML += card;\r\n                    count++;\r\n                }\r\n            }\r\n            else {\r\n                count = 0;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/class/Goods.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/catalog.js");
/******/ 	
/******/ })()
;