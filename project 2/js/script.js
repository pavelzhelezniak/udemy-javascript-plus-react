/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		input = document.querySelector('.adding__input'),
		checkbox = document.querySelector('[type="checkbox"]');



	const deleteAvd = (arr) => {
		arr.forEach(item => item.remove());
	};

	const makeChanges = () => {
		genre.textContent = 'ДРАМА';

		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	function createMovieList(films, parent) {
		parent.innerHTML = '';

		sortArr(movieDB.movies);

		films.forEach((item, index) => {
			parent.innerHTML += `
			<li class="promo__interactive-item">${index + 1}. ${item}
				<div class="delete"></div>
			</li>
			`;
		});

		const deleteMovieList = document.querySelectorAll('.delete');

		deleteMovieList.forEach((btn, index) => {

			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(index, 1);
				createMovieList(films, parent);

			});

		});

	}

	deleteAvd(adv);
	makeChanges();
	sortArr(movieDB.movies);
	createMovieList(movieDB.movies, movieList);

	addForm.addEventListener('submit', (event) => {

		event.preventDefault();
		let newFilm = input.value;
		const favorite = checkbox.checked;

		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = newFilm.slice(0, 21) + '...';
			}

			if (favorite) {
				console.log('Добавляем любимый фильм');
			}

			movieDB.movies.push(newFilm);
			createMovieList(movieDB.movies, movieList);

		}



		event.target.reset();

	});

});