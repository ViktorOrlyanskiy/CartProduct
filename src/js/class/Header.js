'use strict'

export default class Header {

    /**
    * properties
    */

    constructor() {
        this.headerHTML = document.querySelector('.header');
    }

    /**
    *  Method render - отрисовывает header на странице
    */
    render(showStickyMenu) {
        let headerLineInfo = `
            <div class="header__line header__line_info">
                <div class="container">
                    <div class="h-info">
                        <div class="h-info__label">
                            <a href="index.html">
                                <img src="./src/img/label.png" alt="#">
                            </a>
                        </div>
                        <div class="h-info__title">Цены ниже, <span>доставка быстрее!</span></div>
                        <div class="h-info__city">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Санкт-Петербург</p>
                        </div>
                        <div class="h-info__contacts contacts">
                            <div class="contacts__tel">+7 (812) 426-37-55</div>
                            <div class="contacts__tel">8 800 550-37-55</div>
                            <div class="contacts__text">Звонок бесплатный 05:00 – 22:00</div>
                        </div>
                        <div class="h-info__login">
                            <i class="fas fa-user"></i>
                            <p>Вход | Регистрация</p>
                        </div>
                    </div>
                </div>
            </div>`;


        let headerLineSticky = `
                <div class="header__line header__line_sticky">
                    <div class="container">
                        <div class="sticky">
                            <div class="sticky__btn-catalog">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                                <span>Каталог товаров</span>
                            </div>
                            <div class="sticky__search search">
                                <input type="text" class="search__input"
                                    placeholder="Поиск среди 10 товаров. Введите запрос">
                                <div class="search__btn"><i class="fa fa-search" aria-hidden="true"></i></div>
                            </div>
                            <div class="sticky__selected-products">
                                <a href="#">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <span class="selected-products__count"></span>
                                    <span class="sticky__text">Избранное</span>
                                </a>
                            </div>
                            <div class="sticky__cart">
                                <div class="cart-label">
                                    <a href="cart.html">
                                        <div class="cart-label__image">
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div class="cart-label__count"></div>
                                        </div>
                                        <div class="cart-label__total">Корзина</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;


        if (!showStickyMenu) {
            this.headerHTML.innerHTML = headerLineInfo;
            this.headerHTML.classList.add('bottom-shadow');
        }
        else {
            this.headerHTML.innerHTML += headerLineInfo;
            this.headerHTML.innerHTML += headerLineSticky;
        }
    }
}