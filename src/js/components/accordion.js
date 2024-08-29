const accordions = document.querySelectorAll('.accordion');
const accordionOpenClass = 'is-show';

accordions.forEach(accordion => {
	const button = accordion.querySelector('.accordion-button');

	button.addEventListener('click', function() {
		const isCurrentlyOpen = accordion.classList.contains(accordionOpenClass);

		if (isCurrentlyOpen) {
				closeAccordion(accordion);
		} else {
				closeAllAccordions();
				openAccordion(accordion);
		}
	});
});

function openAccordion(accordion) {
	accordion.classList.add(accordionOpenClass);
}

function closeAccordion(accordion) {
	accordion.classList.remove(accordionOpenClass);
}

function closeAllAccordions() {
	accordions.forEach(accordion => {
		closeAccordion(accordion);
	});
}