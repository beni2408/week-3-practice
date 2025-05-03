// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive: D')

// function logger() {
//     console.log('My name is Jascar');
// }

// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(`apples: ${apples}, oranges: ${oranges}`);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }

// const age1 = calcAge1(2002);
// console.log(age1, age2);

// // Arrow function

// const calcAge3 = birthYear => 2025 - birthYear;



// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your 
// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


// solution : 

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphines, avgKoalas) {
    if (avgDolphines >= 2 * avgKoalas) {
        console.log(`Dolphins win ${scoreDolphins} vs ${scoreKoalas}`)
    } else if (avgKoalas >= 2 * avgKoalas) {
        console.log(`Koalas win by (${scoreKoalas - scoreDolphins})`)
    } else {
        console.log(`no one wins...`);
    }


};

checkWinner(scoreDolphins, scoreKoalas);

//test case 2 

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins2, scoreKoalas2);
