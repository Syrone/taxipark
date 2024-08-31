import { getHeaderHeight } from '../functions/header-height';
import { throttle } from '../functions/throttle';

const SCROLL_THRESHOLD = 12;

let isScrollable = false;

function handleScroll() {
	const header = document.querySelector('.header');
	const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
	const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

	if (!isScrollable && scrollPosition > headerHeight - 32 + SCROLL_THRESHOLD) {
		header.classList.add('scrollable');
		isScrollable = true;
	} else if (isScrollable && scrollPosition <= headerHeight - 32 - SCROLL_THRESHOLD) {
		header.classList.remove('scrollable');
		isScrollable = false;
	}
}

function init() {
	getHeaderHeight();
	handleScroll();
}

init();

window.addEventListener('resize', throttle(() => {
	getHeaderHeight();
	handleScroll();
}));

window.addEventListener('scroll', throttle(handleScroll));