'use strict';

const numberOfFilms = parseInt(prompt('Сколько фильмов вы уже посмотрели?', ''), 10);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastFilmNumberOne = prompt('Один из последних просмотренных фильмов?', '');
const firstFilmScore = parseInt(prompt('На сколько оцените его?', ''), 10);
const lastFilmNumberTwo = prompt('Один из последних просмотренных фильмов?', '');
const secondFilmScore = parseInt(prompt('На сколько оцените его?', ''), 10);

personalMovieDB.movies[lastFilmNumberOne] = firstFilmScore;
personalMovieDB.movies[lastFilmNumberTwo] = secondFilmScore;

console.log(personalMovieDB);