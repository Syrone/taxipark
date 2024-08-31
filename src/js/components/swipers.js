import Swiper from 'swiper'

const swiperCards = document.querySelectorAll('.swiper-card')

swiperCards?.forEach((element) => {
	new Swiper(element, {
		slidesPerView: 3,
		spaceBetween: 20,
		grabCursor: true,
		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 20
			},
			460: {
				slidesPerView: 1.75,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2.75,
				spaceBetween: 20
			},
			1240: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
})