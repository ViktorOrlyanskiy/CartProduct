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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Header.js */ \"./js/class/Header.js\");\n/* harmony import */ var _class_Cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Cart.js */ \"./js/class/Cart.js\");\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library.js */ \"./js/library.js\");\n\r\n;\r\n\r\n\r\n\r\n\r\n/**\r\n * Получет глобальные массивы из localStarage. \r\n * Добавляет условие, если корзина пуста(прячет блок \"Ваш заказ\" / меняет заголовок)\r\n * Выводит информацию в блок Ваш заказ (количество/итого)\r\n * Отрисовывает, с помощью класса Cart, корзину товаров.\r\n * Добавляет методы для управления товарами в корзине.\r\n * Сохраняет все изменения в localStarage.\r\n * \r\n */\r\n\r\n\r\n// глобальный массив для хранения товаров в корзине\r\nlet dataCart = JSON.parse(localStorage.getItem('dataCart'));\r\n\r\n// глобальный массив для хранения total и goodsCounter\r\nlet dataService = JSON.parse(localStorage.getItem('dataService'));\r\n\r\n// создает header на странице\r\n; (function () {\r\n    let headerHTML = new _class_Header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    headerHTML.render();\r\n})();\r\n\r\n\r\n// работа с блоком main -------------\r\nlet mainTitle = document.querySelector('.main__title');\r\n\r\nfunction updateMainTitle() {\r\n    if (yourOrder.classList.contains('hidden')) {\r\n        mainTitle.innerHTML = `Ваша корзина пока пуста`;\r\n    }\r\n    else {\r\n        mainTitle.innerHTML = `Корзина`;\r\n    }\r\n}\r\n// ------------------------------------------\r\n\r\n\r\n// Работа с блоком \"Ваш заказ\" -------------\r\nlet yourOrder = document.querySelector('.total');\r\nlet totalSumHTML = document.querySelector('.total__sum');\r\nlet totalCountHTML = document.querySelector('.total__count');\r\nlet btnOrder = document.querySelector('.total__btn-order');\r\n\r\nfunction showYourOrder() {\r\n    if (dataService['total'] === 0) {\r\n        yourOrder.classList.add('hidden');\r\n    }\r\n    else {\r\n        yourOrder.classList.remove('hidden');\r\n    }\r\n    updateMainTitle();\r\n}\r\n// showYourOrder();\r\n\r\nfunction updateTotalNum() {\r\n    totalSumHTML.innerHTML = `Общая стоимость: \r\n    <span>${(0,_library_js__WEBPACK_IMPORTED_MODULE_2__.spaceBetweenNumbers)(dataService['total'])} p.</span>`;\r\n\r\n    totalCountHTML.innerHTML = `Выбрано товаров: \r\n    <span> ${(0,_library_js__WEBPACK_IMPORTED_MODULE_2__.spaceBetweenNumbers)(dataService['goodsCounter'])} шт.</span>`;\r\n}\r\nupdateTotalNum();\r\n\r\nbtnOrder.addEventListener('click', () => {\r\n    console.log('order')\r\n});\r\n// ------------------------------------------\r\n\r\n\r\n// Работа с товарами в корзине -------------\r\nlet cart = new _class_Cart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\ncart.render(dataCart);\r\n\r\n\r\nfunction addEventOnProducts() {\r\n\r\n    let products = document.querySelectorAll('.product');\r\n    products.forEach(product => {\r\n\r\n        product.addEventListener('click', function (event) {\r\n            let target = event.target;\r\n            let articul = product.getAttribute('data-articul');\r\n\r\n            if (target.classList.contains('product__btn-delete')) {\r\n\r\n                cart.delProduct(articul, dataCart);\r\n                dataCart = updateLS('dataCart', dataCart);\r\n                cart.reload(dataCart);\r\n\r\n                addEventOnProducts();\r\n            }\r\n            if (target.classList.contains('minus')) {\r\n                cart.minusProduct(articul, dataCart);\r\n                dataCart = updateLS('dataCart', dataCart);\r\n                cart.reload(dataCart);\r\n\r\n                addEventOnProducts();\r\n            }\r\n            if (target.classList.contains('plus')) {\r\n                cart.plusProduct(articul, dataCart);\r\n                dataCart = updateLS('dataCart', dataCart);\r\n                cart.reload(dataCart);\r\n\r\n                addEventOnProducts();\r\n            }\r\n            dataService['goodsCounter'] = cart.getGoodsCounter();\r\n            dataService['total'] = cart.getTotal();\r\n            updateTotalNum();\r\n            showYourOrder();\r\n            localStorage.setItem('dataService', JSON.stringify(dataService));\r\n        })\r\n    })\r\n}\r\naddEventOnProducts();\r\n\r\n\r\n\r\n// обновляет данные в localStorage\r\nfunction updateLS(key, data) {\r\n    localStorage.setItem(key, JSON.stringify(data));\r\n    return JSON.parse(localStorage.getItem(key));\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/cart.js?");

/***/ }),

/***/ "./js/class/Cart.js":
/*!**************************!*\
  !*** ./js/class/Cart.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library.js */ \"./js/library.js\");\n\r\n\r\n;\r\n\r\nclass Cart {\r\n\r\n    /**\r\n    * properties\r\n    * @param [HTMLElement] cart - элемент в котором размещается таблица с товарами\r\n    *  \r\n    */\r\n\r\n    constructor() {\r\n        this.cart = document.querySelector('.cart');\r\n        this.goodsCounter = 0;\r\n        this.total = 0;\r\n\r\n    }\r\n    // обновляет товары в корзине - ok\r\n    // удалять товар - ok\r\n    // уменьшать количество\r\n    // увеличивать количество\r\n    // считать сумму строки\r\n    // считать общую сумму\r\n    // отрисовывать таблицу товаров - ok\r\n\r\n\r\n    /**\r\n    *  Metod getGoodsCounter - возвращает количество товаров в корзине\r\n    */\r\n    getGoodsCounter() {\r\n        return this.goodsCounter\r\n    }\r\n\r\n    /**\r\n    *  Metod getTotal - возвращает итоговую сумму товаров в корзине\r\n    */\r\n    getTotal() {\r\n        return this.total\r\n    }\r\n\r\n    /**\r\n    *  Metod reload - обновляет товары в корзине\r\n    */\r\n    reload(data) {\r\n        this.cart.innerHTML = '';\r\n        this.render(data);\r\n    }\r\n\r\n    /**\r\n    *  Metod delProduct - удаляет товар из корзины\r\n    */\r\n    delProduct(articul, data) {\r\n        for (let i = 0; i < data.length; i++) {\r\n            if (data[i]['articul'] === articul) {\r\n                data.splice(i, 1)\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n    *  Metod minusProduct - умeньшает количество товара в корзине\r\n    */\r\n    minusProduct(articul, data) {\r\n        for (let i = 0; i < data.length; i++) {\r\n            if (data[i]['articul'] === articul) {\r\n                data[i]['count']--;\r\n                if (data[i]['count'] === 0) {\r\n                    this.delProduct(articul, data)\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n    *  Metod plusProduct - увеличивает количество товара в корзине\r\n    */\r\n    plusProduct(articul, data) {\r\n        for (let i = 0; i < data.length; i++) {\r\n            if (data[i]['articul'] === articul) {\r\n                data[i]['count']++;\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n    *  Metod sumProduct - считает сумму товаров\r\n    */\r\n    sumProduct(product) {\r\n        return product['count'] * product['price']\r\n    }\r\n\r\n    /**\r\n    *  Metod render - отрисовывает корзину\r\n    */\r\n    render(data) {\r\n        this.goodsCounter = 0; // обнуляем так как постоянно перерисовывается таблица\r\n        this.total = 0; // обнуляем так как постоянно перерисовывается таблица\r\n\r\n\r\n        for (let product of data) {\r\n\r\n            let productHTML = `<div class=\"product\" data-articul=\"${product['articul']}\">`;\r\n            productHTML += `<div class=\"product__image\">`;\r\n            productHTML += `<img src=\"${product['image']}\" alt=\"#\">`;\r\n            productHTML += `</div>`;\r\n            productHTML += `<div class=\"product__body\">`;\r\n            productHTML += `<div class=\"product__name\">${product['name']}</div>`;\r\n            productHTML += `<div class=\"product__buttons\">`;\r\n            productHTML += `<div class=\"product__btn-minus btn-counter minus\">`;\r\n            productHTML += `<i class=\"fas fa-minus minus\"></i>`;\r\n            productHTML += `</div>`;\r\n            productHTML += `<div class=\"product__count\">${product['count']}</div>`;\r\n            productHTML += `<div class=\"product__btn-plus btn-counter plus\">`;\r\n            productHTML += `<i class=\"fas fa-plus plus\"></i>`;\r\n            productHTML += `</div>`;\r\n            productHTML += `<div class=\"product__sum\">\r\n            ${(0,_library_js__WEBPACK_IMPORTED_MODULE_0__.spaceBetweenNumbers)(this.sumProduct(product))}<span> p.</span></div>`;\r\n            productHTML += `<div class=\"product__btn-heart\">`;\r\n            productHTML += `<i class=\"far fa-heart\" aria-hidden=\"true\"></i>`;\r\n            productHTML += `</div>`;\r\n            productHTML += `<div class=\"product__btn-delete\">&#215</div>`;\r\n            productHTML += ` </div>`;\r\n            productHTML += ` </div>`;\r\n            productHTML += ` </div>`;\r\n\r\n\r\n            this.goodsCounter += product['count'];\r\n            this.total += this.sumProduct(product);\r\n            this.cart.innerHTML += productHTML;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/class/Cart.js?");

/***/ }),

/***/ "./js/class/Header.js":
/*!****************************!*\
  !*** ./js/class/Header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n\r\n\r\nclass Header {\r\n\r\n    /**\r\n    * properties\r\n    */\r\n\r\n    constructor() {\r\n        this.headerHTML = document.querySelector('.header');\r\n    }\r\n\r\n    /**\r\n    *  Method render - отрисовывает header на странице\r\n    */\r\n    render(showStickyMenu) {\r\n        let headerLineInfo = `\r\n            <div class=\"header__line header__line_info\">\r\n                <div class=\"container\">\r\n                    <div class=\"h-info\">\r\n                        <div class=\"h-info__label\">\r\n                            <a href=\"index.html\">\r\n                                <img src=\"./img/label.png\" alt=\"#\">\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"h-info__title\">Цены ниже, <span>доставка быстрее!</span></div>\r\n                        <div class=\"h-info__city\">\r\n                            <i class=\"fas fa-map-marker-alt\"></i>\r\n                            <p>Санкт-Петербург</p>\r\n                        </div>\r\n                        <div class=\"h-info__contacts contacts\">\r\n                            <div class=\"contacts__tel\">+7 (812) 426-37-55</div>\r\n                            <div class=\"contacts__tel\">8 800 550-37-55</div>\r\n                            <div class=\"contacts__text\">Звонок бесплатный 05:00 – 22:00</div>\r\n                        </div>\r\n                        <div class=\"h-info__login\">\r\n                            <i class=\"fas fa-user\"></i>\r\n                            <p>Вход | Регистрация</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>`;\r\n\r\n\r\n        let headerLineSticky = `\r\n                <div class=\"header__line header__line_sticky\">\r\n                    <div class=\"container\">\r\n                        <div class=\"sticky\">\r\n                            <div class=\"sticky__btn-catalog\">\r\n                                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n                                <span>Каталог товаров</span>\r\n                            </div>\r\n                            <div class=\"sticky__search search\">\r\n                                <input type=\"text\" class=\"search__input\"\r\n                                    placeholder=\"Поиск среди 10 товаров. Введите запрос\">\r\n                                <div class=\"search__btn\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\r\n                            </div>\r\n                            <div class=\"sticky__selected-products\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"selected-products__count\"></span>\r\n                                    <span class=\"sticky__text\">Избранное</span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"sticky__cart\">\r\n                                <div class=\"cart-label\">\r\n                                    <a href=\"cart.html\">\r\n                                        <div class=\"cart-label__image\">\r\n                                            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n                                            <div class=\"cart-label__count\"></div>\r\n                                        </div>\r\n                                        <div class=\"cart-label__total\">Корзина</div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            `;\r\n\r\n\r\n        if (!showStickyMenu) {\r\n            this.headerHTML.innerHTML = headerLineInfo;\r\n            this.headerHTML.classList.add('bottom-shadow');\r\n        }\r\n        else {\r\n            this.headerHTML.innerHTML += headerLineInfo;\r\n            this.headerHTML.innerHTML += headerLineSticky;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/class/Header.js?");

/***/ }),

/***/ "./js/library.js":
/*!***********************!*\
  !*** ./js/library.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"spaceBetweenNumbers\": () => (/* binding */ spaceBetweenNumbers),\n/* harmony export */   \"reloadDataFromLS\": () => (/* binding */ reloadDataFromLS),\n/* harmony export */   \"removeCSSFromElems\": () => (/* binding */ removeCSSFromElems),\n/* harmony export */   \"fixedHeader\": () => (/* binding */ fixedHeader),\n/* harmony export */   \"returnElementHTML\": () => (/* binding */ returnElementHTML)\n/* harmony export */ });\n\r\n\r\nconst library = {\r\n    // добавляет пробелы между разрядами цифр\r\n    spaceBetweenNumbers: function (num) {\r\n        let str = String(num);\r\n        str = [...str].reverse().join('');\r\n        str = str.replace(/(\\d{3})/g, '$1 ');\r\n        str = [...str].reverse().join('');\r\n        return str\r\n    },\r\n    // обновляет данные из localStorage\r\n    reloadDataFromLS: function (key, data) {\r\n        let dataLS = JSON.parse(localStorage.getItem(key));\r\n        if (dataLS === null) {\r\n            return data\r\n        }\r\n        else {\r\n            return dataLS\r\n        }\r\n    },\r\n    // удаляет массив классов CSS  у переданных элементов\r\n    removeCSSFromElems: function (arrayCSS, elems) {\r\n        elems.forEach(elem => {\r\n            for (let classCSS of arrayCSS) {\r\n                elem.classList.remove(classCSS)\r\n            }\r\n        });\r\n    },\r\n    // фиксирует липкое меню во время скрола\r\n    fixedHeader: function () {\r\n        let headerSticky = document.querySelector('.header__line_sticky');\r\n        if (window.pageYOffset > 200) {\r\n            headerSticky.classList.add('sticky-fixed');\r\n        }\r\n        else {\r\n            headerSticky.classList.remove('sticky-fixed');\r\n        }\r\n    },\r\n    // Возвращает элемент HTML с указанным переданным массивом классов CSS\r\n    returnElementHTML(teg, array) {\r\n        let element = document.createElement(teg);\r\n        for (let key of array) {\r\n            element.classList.add(key);\r\n        }\r\n        return element\r\n    },\r\n};\r\n\r\nconst spaceBetweenNumbers = library.spaceBetweenNumbers;\r\nconst reloadDataFromLS = library.reloadDataFromLS;\r\nconst removeCSSFromElems = library.removeCSSFromElems;\r\nconst fixedHeader = library.fixedHeader;\r\nconst returnElementHTML = library.returnElementHTML;\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/library.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/cart.js");
/******/ 	
/******/ })()
;