'use strict'

export function _headerAnimation() {
	document.addEventListener('DOMContentLoaded', () => {
        const profile = document.querySelector('.profile');
        profile.classList.add('_load');
    });
}