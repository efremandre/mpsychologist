'use strict'

export function _pressUp() {
	const buttonUp = document.querySelector('.button-up');

	buttonUp.addEventListener('click', () => {
		window.scrollTo(pageXOffset, 0);
	})

	window.addEventListener('scroll', () => {

		buttonUp.hidden = (pageYOffset < document.documentElement.clientHeight);
	});
}