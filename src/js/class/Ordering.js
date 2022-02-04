'use strict'

export default class Ordering {

    /**
    * properties
    */

    constructor() {
        this.orderingHTML = document.querySelector('.ordering');
    }

    /**
    *  Method render - отрисовывает Ordering на странице
    */
    render() {
        this.orderingHTML.innerHTML = `
            <div class="ordering">
                <div class="main__title">Оформление заказа</div>
                <div class="back-arrow btn__back-cart">
                    <i class="fas fa-chevron-left"></i>
                    <a href="#">Вернуться к корзине</a>
                </div>
                <div class="ordering__body">
                    <form action="submit" id="" name="form-order">
                        <div class="form__section">
                            <div class="section__title">1. Контактные данные</div>
                            <div class="section__body">
                                <div class="section__column">
                                    <label>Имя*<input type="text" name="" id=""
                                            placeholder="Введите ваше имя">
                                    </label>
                                    <label>Телефон*<input type="tel" name="" id=placeholder="+7">
                                    </label>
                                </div>
                                <div class="section__column">
                                     <label>Фамилия*<input type="text" name="" id=""
                                            placeholder="Введите вашу фамилию">
                                    </label>
                                    <label>Email<input type="text" name="" id=""
                                            placeholder="Введите адрес электроннпочты">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form__section">
                             <div class="section__title">2. Способ получения</div>
                            <div class="section__tabs">
                                <div class="section__tab">Самовывоз</div>
                                <div class="section__tab section__tab_active">Доставкdiv>
                            </div>
                            <div class="section__body tab__pickup">
                                Самовывоз на данный момент недоступен. <br> Приноссвои извинения за
                                неудобства.
                            </div>
                            <div class="section__body tab__delivery">
                                <div class="section__column">
                                    <label>Город*<input type="text" name="" id=""
                                            placeholder="Введите город">
                                    </label>
                                    <label>Дом*<input type="text" name="" id=""
                                            placeholder="Введите номер дома">
                                    </label>
                                 </div>
                                <div class="section__column">
                                    <label>Улица*<input type="text" name="" id=""
                                            placeholder="Введите улицу">
                                    </label>
                                    <label>Квартира<input type="text" name="" id=""
                                            placeholder="Введите номер квартиры">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form__section">
                            <div class="section__title">3. Способы оплаты</div>
                            <div class="section__body">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        
        `;
    }
}