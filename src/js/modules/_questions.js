'use strict'

export function _questions() {
	const arr = document.querySelectorAll('.questions__ask');
	if (arr.length > 0) {
		const newArray = Array.from(arr);

		const initSpoiler = (arr) => {
			arr.forEach(elem => {
				elem.classList.add('_init');
				initSpoilerBody(elem);
				elem.addEventListener('click', setSpoiler);
			})
		}

		const initSpoilerBody = (elem) => {
			elem.removeAttribute('tabindex');
			if(!elem.classList.contains('_active')) {
				elem.nextElementSibling.hidden = true;
			}
		}

		const setSpoiler = (event) => {
			const el = event.target;
			if (el.classList.contains('questions__ask')) {
					const spoilerBlock = el.nextElementSibling;
					spoilerBlock.classList.toggle('_active');
					el.classList.toggle('_active');
				}
			}

		initSpoiler(newArray);
	}
}