'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	/* 	const request = new XMLHttpRequest();
	
		request.open('GET', 'js/current.json');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		request.send();
	
		request.addEventListener('load', () => {       //'readestatechange'
			if (request.status === 200) {               // && request.readystate === 4
				console.log(request.response);
				const data = JSON.parse(request.response);
				inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
			} else {
				inputUsd.value = 'Allarm!';
			}
		}); */


	fetch('js/current.json')
		.then(data => data.json())
		.then(data => {
			console.log(data);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		});
});

