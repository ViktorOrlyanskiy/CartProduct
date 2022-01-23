
; (function () {
    let links = ['banner-1.jpg', 'banner-2.jpg', 'banner-1.jpg', 'banner-2.jpg'];
    let banner = document.querySelector('.banner__image');
    let btn = document.querySelector('.sticky__text');
    let count = 1;


    const showSlide = function () {
        let img = `<a src="#" class="${'link-1'}"><img src="./img/banner-${count}.jpg" alt="#"></a>`;
        let imgHidden = `<a src="#" class="${'link-2'}"><img src="./img/banner-${count + 1}.jpg" alt="#"></a>`;
        banner.innerHTML = img;
        banner.innerHTML += imgHidden;
        count++;
    }
    showSlide();



    btn.addEventListener('click', function () {

        link1.classList.add('banner-hide');
        link2.classList.add('banner-show');
        link2.classList.add('show');
        setTimeout(function () {

            // showSlide();

        }, 1000);



    });
})();