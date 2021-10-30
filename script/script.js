'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = parseInt(prompt('Сколько фильмов вы уже посмотрели?', ''), 10);

	while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
		numberOfFilms = parseInt(prompt('Сколько фильмов вы уже посмотрели?', ''), 10);
	}
}

//start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
		const filmScore = parseInt(prompt('На сколько оцените его?', ''), 10);

		if (lastFilm != null && filmScore != null && lastFilm != '' && filmScore != '' && lastFilm.length < 50) {
			personalMovieDB.movies[lastFilm] = filmScore;
		} else {
			i--;
		}
	}
}

//rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else {
		console.log('Вы киноман');
	}
}

function showMyDB() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
	}
}

writeYourGenres();