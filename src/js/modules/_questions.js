'use strict'

export function _questions() {
	const arrButtons = document.querySelectorAll('.questions__ask');
	const arrAnswer = document.querySelectorAll('.questions__answer')

	if (arrButtons.length > 0) {
		const buttons = Array.from(arrButtons);
		const answers = Array.from(arrAnswer);

		const initSpoiler = (arr) => {
			arr.forEach(elem => {
				elem.classList.add('_init');
			})
		}

		buttons.forEach(el => {
			el.addEventListener('click', () => {
				let answer = el.nextElementSibling;

				if(answer.classList.contains('_active')) {
					answers.forEach((el) => el.classList.remove('_active'));
					el.classList.toggle('_active');
				} else {
					answers.forEach((el) => el.classList.remove('_active'));
					el.classList.toggle('_active');
					answer.classList.add('_active');
				}
			})
		})
		initSpoiler(buttons);
	}
}