const nav = document.querySelector('.main-nav')
const navButton = document.querySelector('.main-nav__toggle');

if (nav) {
	if (nav.classList.contains('main-nav--nojs')) {
		nav.classList.remove('main-nav--nojs');
	}

	navButton.addEventListener('click', () => {
		nav.classList.toggle('main-nav--opened');
		nav.classList.toggle('main-nav--closed');
	})
}