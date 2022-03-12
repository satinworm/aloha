"use strict";
// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof answer);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваше фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);

// const category = "toys";
// console.log(`https://someurl.com/${category}`);

// const user = "Ilya";
// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;
// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// const isChecked = false,
//     isClosed = false;
// console.log(isChecked && isClosed);
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const a = prompt("Один из последних просмотренных фильмов", ""),
    b = prompt("Насколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов", ""),
    d = prompt("Насколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
