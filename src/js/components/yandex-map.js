ymaps.ready(init);

function init() {
	var geolocationControl = new ymaps.control.GeolocationControl()

	var myMap = new ymaps.Map("yandex-map", {
		center: [55.76, 37.64],
		zoom: 10,
		controls: [geolocationControl]
	});

	var placemarks = [
		new ymaps.Placemark([55.76, 37.64], {}, {
			iconLayout: 'default#image',
			iconImageHref: './img/icons/location-map.webp',
			iconImageSize: [64, 88],
			iconImageOffset: [-32, -44],
		}),
		new ymaps.Placemark([55.709830, 37.390270], {}, {
			iconLayout: 'default#image',
			iconImageHref: './img/icons/location-map.webp',
			iconImageSize: [64, 88],
			iconImageOffset: [-32, -44],
		}),
		new ymaps.Placemark([55.883198, 37.727249], {}, {
			iconLayout: 'default#image',
			iconImageHref: './img/icons/location-map.webp',
			iconImageSize: [64, 88],
			iconImageOffset: [-32, -44],
		})
	];

	var clusterer = new ymaps.Clusterer({
		clusterIcons: [
			{
				href: './img/icons/location-map.webp',
				size: [64, 88],
				offset: [-32, -44]
			}
		],
		clusterIconContentLayout: null,
	});

	clusterer.add(placemarks);
	myMap.geoObjects.add(clusterer);

	myMap.setBounds(clusterer.getBounds(), {
		checkZoomRange: true
	});
}