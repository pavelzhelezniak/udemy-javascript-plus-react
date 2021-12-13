'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import formses from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

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
