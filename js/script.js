// "use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// // const obj = {
// // 	a: 50
// // };

// // obj.a = 10;

// // console.log(obj);

// const obj = {
// 	name: "Rost",
// 	age: 26,
// 	isMarried: false
// };

// console.log(obj.name);

// let arr = ["plum.png", "orange.jpg", 6, "apple.bpm", {}, []];
// console.log(arr[2]);

// const arr = [1, 2, 3];
// const arrObj = {
// 	0: "a",
// 	1: "b",
// 	2: "c"
// }; 
// const b = "b";

// arrObj["b"] = "1234";


// console.log(arrObj[1]);
// console.log(arrObj.b);

// const obj = {a: 1, b: 2};

// const result = confirm("Are u here?");
// console.log(result);
// const answer = +prompt("are u idiot?", "yes");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("What's u name?", "");
// answers[1] = prompt("What's u second name?", "");
// answers[2] = prompt("How old are u?", "");

// document.write(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Rost";
// alert(`Hi, ${user}`);

// console.log('arr' + ' - object');

// let incr = 10,
//     decr = 10;

//     incr++;
//     decr--;

//     console.log(incr);
//     console.log(decr);


//     const isCheked = true,
//         isClose = false;
    
//     console.log(isCheked || isClose);



// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцениваете его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцениваете его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// if (4 == 9) {
//     console.log("ok");
// } else {
//     console.log("error");
// }


// const num = 50;

// if(num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("too much");
// } else {
//     console.log("Ok!");
// }

// (num === 50) ? console.log("Ok!") : console.log("Error");


// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Error");
//         break;
//     case 100:
//         console.log("Error");
//         break;
//     case 50:
//         console.log("Verno");
//         break;
//     default:
//         console.log("Ne v etot raz");
//         break;    
// }


// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("Ja syt!");
// }

// const hamburger = 3;
// const fries = 2;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);


// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("All is happy");
// } else {
//     console.log("My valim");
// }


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("All is happy");
} else {
    console.log("My valim");
}


let JohnReport, alexReport, samReport, mariaReport = "done";

console.log(JohnReport || alexReport || samReport || mariaReport);



// console.log( NaN || 2 || undefined );
// console.log( 0 && NaN && 2);
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

