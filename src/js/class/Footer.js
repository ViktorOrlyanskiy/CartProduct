'use strict'

export default class Footer {

    /**
    * properties
    */

    constructor() {
        this.footerHTML = document.querySelector('.footer');

        this.data = {
            list1: {
                title: 'О компании',
                items: [
                    { title: 'Реквизиты', link: '#' },
                    { title: 'Вакансии', link: '#' },
                    { title: 'Поставщикам', link: '#' },
                    { title: 'Информация для инвесторов', link: '#' },
                    { title: 'Сертификаты', link: '#' },
                    { title: 'Производители', link: '#' },
                    { title: 'Правовая информация', link: '#' },
                ],
                classCSS: { ul: 'list__body', li: 'list__item', },
            },
            list2: {
                title: 'Акции',
                items: [
                    { title: 'Распродажа', link: '#' },
                    { title: 'Наши акции', link: '#' },
                    { title: 'Наборы', link: '#' },
                ],
                classCSS: { ul: 'list__body', li: 'list__item', },
            },
            list3: {
                title: 'Получение и оплата',
                items: [
                    { title: 'Доставка курьером', link: '#' },
                    { title: 'Доставка ТК', link: '#' },
                    { title: 'Самовывоз', link: '#' },
                    { title: 'Способы оплаты', link: '#' },
                ],
                classCSS: { ul: 'list__body', li: 'list__item', },
            },
            list4: {
                title: 'Сервис и поддержка',
                items: [
                    { title: 'Сервисный центр', link: '#' },
                    { title: 'Сопровождение обращений', link: '#' },
                    { title: 'Обратная связь', link: '#' },
                ],
                classCSS: { ul: 'list__body', li: 'list__item', },
            },
            list5: {
                title: '',
                items: [
                    { src: './src/img/icon-y.png', link: '#' },
                    { src: './src/img/icon-vk.png', link: '#' },
                    { src: './src/img/icon-f.png', link: '#' },
                    { src: './src/img/icon-i.png', link: '#' },
                    { src: './src/img/icon-t.png', link: '#' },
                ],
                classCSS: { ul: 'icons__list', li: 'icons__item', },
            },
        };
    };


    /**
    *  Method createList - создает список текстовых элементов с ссылкой
    */
    createList(object) {
        let ul = `<ul class="${object.classCSS.ul}">`;
        for (let item of object.items) {
            ul += `
                <li class="${object.classCSS.li}">
                    <a href="${item.link}">${item.title}</a>
                </li>`;
        }
        ul += `</ul>`;
        return ul
    };


    /**
    *  Method createIcons - создает список иконок
    */
    createIcons(object) {
        let ul = `<ul class="${object.classCSS.ul}">`;
        for (let item of object.items) {
            ul += `
                <li class="${object.classCSS.li}">
                    <a href="${item.link}"><img src="${item.src}" alt="#"></a>
                </li>`;
        }
        ul += `</ul>`;
        return ul
    }


    /**
    *  Method render - отрисовывает footer на странице
    */
    render() {

        this.footerHTML.innerHTML = `
        <div class="container">
            <div class="footer__row">
                <div class="footer__column footer__info">
                    <div class="list">
                        <div class="list__title">${this.data.list1.title}</div>
                        ${this.createList(this.data.list1)}
                    </div>
                    <div class="list">
                        <div class="list__title">${this.data.list2.title}</div>
                        ${this.createList(this.data.list2)}
                    </div>
                    <div class="list">
                        <div class="list__title">${this.data.list3.title}</div>
                        ${this.createList(this.data.list3)}
                    </div>
                    <div class="list">
                        <div class="list__title">${this.data.list4.title}</div>
                        ${this.createList(this.data.list4)}
                    </div>
                </div>
                <div class="footer__column social-links">
                    <div class="social-links__title">Давайте дружить</div>
                    <div class="social-links__icons icons">
                    ${this.createIcons(this.data.list5)}
                    </div>
                    <div class="social-links__rating">
                        <img src="./src/img/rating.png" alt="#">
                    </div>
                </div>
            </div>
            <div class="footer__line privacy-policy">
                <div class="privacy-policy__text">Вы принимаете условия политики конфиденциальности и
                    пользовательского соглашения каждый раз, когда оставляете свои данные
                    в любой форме обратной связи на сайте ВсеИнструменты.ру</div>
                <div class="privacy-policy__text">© 2006 — 2022. ВсеИнструменты.ру</div>
            </div>
        </div>`
    }
}