'use strict'


export default class Slider {

    /**
    * properties
    */

    constructor() {
        // this.sliderHTML = document.querySelector('.banner__image');
        this.sliderHTML = document.querySelector('.slider__image');
        this.firstHiddenSlide = '';
        this.currentSlide = '';
        this.lastSlide = '';
        this.links = ['./img/banner-0.jpg', './img/banner-1.jpg', './img/banner-2.jpg',
            './img/banner-3.jpg', './img/banner-4.jpg',];

        this.step = 0;
        this.opacity = 1;
        this.counterPlus = 0;
        this.counterMinus = 1;
    }

    /**
    *  Method changeSlide - плавно меняет слайды 
    */
    changeSlide() {
        this.currentSlide.style.opacity = `${this.counterMinus}`;
        this.lastSlide.style.opacity = `${this.counterPlus}`;
        this.counterPlus = this.counterPlus + 0.01;
        this.counterMinus = this.counterMinus - 0.01;

        if (this.counterMinus > 0) {
            setTimeout(this.changeSlide.bind(this), 15);
        }
    }

    /**
    *  Method removeSlide - удаляет текущий слайд
    */
    removeSlide(elem) {
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
    playSlider() {

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
        setTimeout(this.playSlider.bind(this), 10000)
    }

    /**
    *  Method nextSlide - показывает следующий слайд
    */
    nextSlide(btn, func) {
        btn.removeEventListener('click', func)

        let slides = this.sliderHTML.querySelectorAll('.slide');
        for (let i = 0; i < slides.length - 1; i++) {
            if (i === 0) {
                this.currentSlide = slides[i];
                this.lastSlide = slides[i + 1];
            }
        }

        this.changeSlide();

        setTimeout(this.changeClassCSS.bind(this), 2000);
        setTimeout(this.removeSlide.bind(this), 2000);
        setTimeout(this.render.bind(this), 2000);

        setTimeout(() => {
            btn.addEventListener('click', func);
        }, 2000);
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