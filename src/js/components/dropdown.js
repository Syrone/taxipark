const dropdowns = document.querySelectorAll('.dropdown');
const dropdownOpenClass = 'is-show';
const dropdownShownClass = 'shown';

dropdowns.forEach(dropdown => {
	const button = dropdown.querySelector('.dropdown-button');

	button.addEventListener('click', function (event) {
		event.stopPropagation();
		const isCurrentlyOpen = dropdown.classList.contains(dropdownOpenClass);

		closeAllDropdowns();

		if (!isCurrentlyOpen) {
			openDropdown(dropdown);
		}
	});
});

document.addEventListener('click', function () {
	closeAllDropdowns();
});

function openDropdown(dropdown) {
	dropdown.classList.add(dropdownShownClass);
	setTimeout(() => {
		dropdown.classList.add(dropdownOpenClass);
	}, 0);
}

function closeAllDropdowns() {
	const openDropdowns = document.querySelectorAll(`.dropdown.${dropdownOpenClass}`);
	openDropdowns.forEach(dropdown => {
		dropdown.classList.remove(dropdownOpenClass);
		setTimeout(() => {
			dropdown.classList.remove(dropdownShownClass);
		}, 600);
	});
}