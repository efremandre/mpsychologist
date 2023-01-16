'use strict'

export function _feedbackButton() {
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    const button = document.querySelectorAll('[data-popupBtn]');
    const image = document.querySelector('[data-imgPopup]');
    const popup = document.querySelector('.popup');
    const scrollWidth = window.innerWidth - wrapper.offsetWidth;
    const scrollWidthPopup = window.innerWidth - popup.offsetWidth;



    button.forEach(el => {

        el.addEventListener('click', (event) => {
            console.log(scrollWidthPopup)
            let elementEvent = event.target;
            let srcImg = el.previousElementSibling.src;
            if (elementEvent) {
                console.log(scrollWidth);
                body.classList.add('stop-scroll');
                body.style.paddingRight = `${scrollWidth}px`;
                popup.classList.add('_popup-visible');
                image.src = srcImg;
            }
        })
    })

    popup.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        body.style.paddingRight = `0px`;
        popup.classList.remove('_popup-visible');

    })

}