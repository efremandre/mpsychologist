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
            let elementEvent = event.target;
            let srcImg = el.previousElementSibling.src;
            if (elementEvent) {
                popup.classList.add('_popup-visible');
                image.src = srcImg;
                body.classList.add('stop-scroll');
                body.style.paddingRight = `${scrollWidth}px`;
            }
        })
    })

    popup.addEventListener('click', () => {
        popup.classList.remove('_popup-visible');
        body.classList.remove('stop-scroll');
        body.style.paddingRight = `0px`;
    })

}