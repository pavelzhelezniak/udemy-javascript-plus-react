'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const tabs = require('./modules/tabs'),
		modal = require('./modules/modal'),
		timer = require('./modules/timer'),
		cards = require('./modules/cards'),
		calc = require('./modules/calc'),
		formses = require('./modules/forms'),
		slider = require('./modules/slider');

	tabs();
	modal();
	timer();
	cards();
	calc();
	formses();
	slider();

	fetch('http://localhost:3000/menu ')
		.then(data => data.json()) // берем ответ от сервера и превращаем его в обычный JS-объект
		.then(res => console.log(res)); // берем наш объект и выводим его в консоль

});
