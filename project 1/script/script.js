'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = parseInt(prompt('Сколько фильмов вы уже посмотрели?', ''), 10);

		while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = parseInt(prompt('Сколько фильмов вы уже посмотрели?', ''), 10);
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
			const filmScore = parseInt(prompt('На сколько оцените его?', ''), 10);

			if (lastFilm != null && filmScore != null && lastFilm != '' && filmScore != '' && lastFilm.length < 50) {
				personalMovieDB.movies[lastFilm] = filmScore;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log('Вы классический зритель');
		} else {
			console.log('Вы киноман');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {

			let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
			if (genres === null || genres === '') {
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genres;
			}
		}
		personalMovieDB.genres.forEach((item, index) => console.log(`Любимый жанр ${index + 1} - это ${item}`));
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};

