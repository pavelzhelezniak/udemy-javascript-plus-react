'use strict';

const numberOfFilms = parseInt(prompt('Сколько фильмов вы уже посмотрели?', ''), 10);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
	const filmScore = parseInt(prompt('На сколько оцените его?', ''), 10);

	if (lastFilm != null && filmScore != null && lastFilm != '' && filmScore != '' && lastFilm.length < 50) {
		personalMovieDB.movies[lastFilm] = filmScore;
	} else {
		i--;
	}

}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else {
	console.log('Вы киноман');
}

console.log(personalMovieDB);