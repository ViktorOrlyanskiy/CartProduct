'use strict'
import { returnElementHTML } from "../library";

export default class Slider {

    /**
    * properties дописать функцию назад
    */

    constructor(bannerHTML, links) {
        this.bannerHTML = bannerHTML;
        this.links = links;

        this.sliderHTML = returnElementHTML('div', ['slider__image']);
        this.arrowNext = returnElementHTML('i', ['next', 'fas', 'fa-chevron-right']);
        this.arrowBack = returnElementHTML('i', ['next', 'fas', 'fa-chevron-left']);

        this.currentSlide = '';
        this.lastSlide = '';

        this.step = 0;
        this.opacity = 1;
        this.counterPlus = 0;
        this.counterMinus = 1;

        this.action = '';
        this.drawArrows();
    }

    setAction(action) {
        this.action = action;
    }

    /**
    *  Method drawArrows - рисует стрелки на слайдере
    */
    drawArrows() {
        let arrows = document.createElement('div');
        arrows.classList.add('slider__arrows');
        arrows.append(this.arrowBack);
        arrows.append(this.arrowNext);
        this.bannerHTML.append(arrows)
    }

    /**
    *  Method getArrow - возвращает стрелку
    */
    getArrow(name) {
        if (name === 'next') {
            return this.arrowNext
        }
        else if (name === 'back') {
            return this.arrowBack
        }
    }

    /**
    *  Method changeSlide - плавно меняет слайды 
    */
    changeSlide(timeout = 10) {
        this.currentSlide.style.opacity = `${this.counterMinus}`;
        this.lastSlide.style.opacity = `${this.counterPlus}`;
        this.counterPlus = this.counterPlus + 0.02;
        this.counterMinus = this.counterMinus - 0.02;

        if (this.counterMinus > 0) {
            setTimeout(this.changeSlide.bind(this), timeout);
        }
    }

    /**
    *  Method removeSlide - удаляет текущий слайд
    */
    removeSlide() {
        this.currentSlide.remove();
    }

    /**
    *  Method changeClassCSS - меняет классы CSS у слайдов
    */
    changeClassCSS() {
        this.lastSlide.classList.add('current-slide');
        this.lastSlide.classList.remove('next-slide');
        this.currentSlide.classList.remove('current-slide');
    }

    /**
    *  Method nextSlide - показывает следующий слайд
    */
    playSlider(action) {

        if (this.action !== 'stop') {

            let slides = this.sliderHTML.querySelectorAll('.slide');
            for (let i = 0; i < slides.length - 1; i++) {
                if (i === 0) {
                    this.currentSlide = slides[i];
                    this.lastSlide = slides[i + 1];
                }
            }

            this.changeSlide();

            setTimeout(this.changeClassCSS.bind(this), 2000)
            setTimeout(this.removeSlide.bind(this), 2000)
            setTimeout(this.render.bind(this), 2000)
            setTimeout(this.playSlider.bind(this), 8000)
        }
    }

    /**
    *  Method nextSlide - показывает следующий слайд
    */
    nextSlide(arrowNext, next) {
        arrowNext.removeEventListener('click', next);

        let slides = this.sliderHTML.querySelectorAll('.slide');
        for (let i = 0; i < slides.length - 1; i++) {
            if (i === 0) {
                this.currentSlide = slides[i];
                this.lastSlide = slides[i + 1];
            }
        }

        this.changeSlide(10);

        setTimeout(this.changeClassCSS.bind(this), 1000);
        setTimeout(this.removeSlide.bind(this), 1000);
        setTimeout(this.render.bind(this), 1000);

        setTimeout(() => {
            arrowNext.addEventListener('click', next);
        }, 200);
    }

    /**
    *  Method backSlide - показывает следующий слайд !не работает
    */
    backSlide(arrowBack, back) {
        arrowBack.removeEventListener('click', back);

        let slides = this.sliderHTML.querySelectorAll('.slide');
        for (let i = 0; i < slides.length - 1; i++) {
            if (i === 0) {
                this.currentSlide = slides[i];
                this.lastSlide = slides[i + 1];
            }
        }

        this.changeSlide(10);

        setTimeout(this.changeClassCSS.bind(this), 1000);
        setTimeout(this.removeSlide.bind(this), 1000);
        setTimeout(this.render.bind(this), 1000);

        setTimeout(() => {
            arrowBack.addEventListener('click', back);
        }, 200);
    }

    /**
    *  Method render - отрисовывает header на странице
    */
    render() {

        this.counterPlus = 0;
        this.counterMinus = 1;

        let img = document.createElement('a');
        img.setAttribute('href', '#');
        img.classList.add('slide');

        if (this.opacity !== 0) {
            img.classList.add('current-slide');
        }
        else {
            img.classList.add('next-slide');
        }

        img.style.opacity = `${this.opacity}`;
        img.innerHTML = `<img src="${this.links[this.step]}" alt="#">`;

        this.sliderHTML.append(img);
        this.bannerHTML.prepend(this.sliderHTML);


        if (this.step === this.links.length - 1) {
            this.step = 0;
        }
        else {
            this.step = this.step + 1;
        }

        if (this.opacity === 1) {
            this.opacity = this.opacity - 1;
        }
        else {
            this.opacity = 0;
        }
    }
}