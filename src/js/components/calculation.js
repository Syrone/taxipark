class TaxiCalculator {
	constructor(calculationElement) {
		this.calculationElement = calculationElement;
		this.selectedDays = 1;
		this.selectedHours = 6;
		this.earningsPerHour = {
			economy: {
				6: 4590, 7: 5355, 8: 6120, 9: 6885, 10: 7650, 11: 8415, 12: 9180
			},
			comfort: {
				6: 5610, 7: 6545, 8: 7480, 9: 8415, 10: 9350, 11: 10285, 12: 11220
			},
			comfortPlus: {
				6: 6930, 7: 7835, 8: 8755, 9: 9520, 10: 10410, 11: 12110, 12: 13430
			}
		};

		this.init();
	}

	init() {
		this.setupDayButtons();
		this.setupHourButtons();
		this.calculationElement.querySelector('.calculation-main-days').addEventListener('click', (e) => this.handleDayClick(e));
		this.calculationElement.querySelector('.calculation-main-hours').addEventListener('click', (e) => this.handleHourClick(e));
		this.selectInitButtons();
		this.updateResult();
	}

	selectInitButtons() {
		const dayButton = this.calculationElement.querySelector(`.calculation-main-days button[data-days="${this.selectedDays}"]`);
		const hourButton = this.calculationElement.querySelector(`.calculation-main-hours button[data-hours="${this.selectedHours}"]`);

		if (dayButton) {
			dayButton.classList.add('is-active');
		}

		if (hourButton) {
			hourButton.classList.add('is-active');
		}
	}

	setupDayButtons() {
		const daysContainer = this.calculationElement.querySelector('.calculation-main-days');
		const dayButtons = daysContainer.querySelectorAll('button');
		dayButtons.forEach((button, index) => {
			const day = index + 1;
			button.setAttribute('data-days', day);
			button.textContent = day;
		});
	}

	setupHourButtons() {
		const hoursContainer = this.calculationElement.querySelector('.calculation-main-hours');
		const hourButtons = hoursContainer.querySelectorAll('button');
		hourButtons.forEach((button, index) => {
			const hour = index + 6;
			button.setAttribute('data-hours', hour);
			button.textContent = hour;
		});
	}

	handleDayClick(e) {
		if (e.target.tagName === 'BUTTON') {
			this.selectedDays = parseInt(e.target.dataset.days);
			this.calculationElement.querySelectorAll('.calculation-main-days button').forEach(btn => {
				btn.classList.remove('is-active');
			});
			e.target.classList.add('is-active');
			this.updateResult();
		}
	}

	handleHourClick(e) {
		if (e.target.tagName === 'BUTTON') {
			this.selectedHours = parseInt(e.target.dataset.hours);
			this.calculationElement.querySelectorAll('.calculation-main-hours button').forEach(btn => {
				btn.classList.remove('is-active');
			});
			e.target.classList.add('is-active');
			this.updateResult();
		}
	}

	updateResult() {
		if (this.selectedDays && this.selectedHours) {
			const categories = ['economy', 'comfort', 'comfortPlus'];
			categories.forEach(category => {
				const earning = this.earningsPerHour[category][this.selectedHours] * this.selectedDays * 4;
				const outputElements = this.calculationElement.querySelectorAll(`.calculation-price-${category.replace('Plus', '-plus')}`);
				outputElements.forEach(outputElement => {
					outputElement.textContent = earning;
				});
			});
		}
	}
}

document.querySelectorAll('.js-calculation').forEach(calculationElement => {
	new TaxiCalculator(calculationElement);
});