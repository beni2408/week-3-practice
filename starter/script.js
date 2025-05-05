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

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphines, avgKoalas) {
//     if (avgDolphines >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${scoreDolphins} vs ${scoreKoalas}`)
//     } else if (avgKoalas >= 2 * avgKoalas) {
//         console.log(`Koalas win by (${scoreKoalas - scoreDolphins})`)
//     } else {
//         console.log(`no one wins...`);
//     }


// };

// checkWinner(scoreDolphins, scoreKoalas);

// //test case 2 

// let scoreDolphins2 = calcAverage(85, 54, 41);
// let scoreKoalas2 = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins2, scoreKoalas2);


// Arrays : 
// const friends = ['Jascar', 'Shiny', 'Benish'];
// console.log(friends.length);
// console.log(friends);
// console.log(friends[0]);

// friends[3] = 'Jay';
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// const years = [2002, 1991, 1973, 1970];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);

// console.log(age1, age2, age3, age4);

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.



// /* Write your code below. Good luck! 🙂 */

// attempt 1:

// function calcTip(bills[bill1, bill2, bill3]) {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//         const tips = [(15 / 100) * bills[i]];
//         return tips;

//     } else {
//         const tips = [(20 / 100 * bills[i])];
//         return tips;
//     }
// }

// const bills = calcTip[125, 555, 44];
// console.log(bills);

// attempt 2:

// function calcTip(bills1, bills2, bills3) {
//     if (bills1, bills2, bills3 >= 50 && bills1, bills2, bills3 <= 300) {
//         const total1 = ((15 / 100) * bills3) + bills1;
//         const total2 = ((15 / 100) * bills3) + bills2;
//         const total3 = ((15 / 100) * bills3) + bills3;
//         const tips_1 = ((15 / 100) * bills1);
//         const tips_2 = ((15 / 100) * bills2);
//         const tips_3 = ((15 / 100) * bills3);
//         const tips = [tips_1, tips_2, tips_3];
//         const total = [total1, total2, total3];
//         return tips;

//     } else if (bills1, bills2, bills3 > 300) {
//         const total1 = ((20 / 100) * bills3) + bills1;
//         const total2 = ((20 / 100) * bills3) + bills2;
//         const total3 = ((20 / 100) * bills3) + bills3;
//         const tips_1 = ((20 / 100) * bills1);
//         const tips_2 = ((20 / 100) * bills2);
//   0      const tips_3 = ((20 / 100) * bills3);
//         const tips = [tips_1, tips_2, tips_3];
//         const total = [total1, total2, total3];
//         return tips;

//     } else {
//         return (`No Tips`);
//     }
// }

//const totals = calcTip(bill);
//console.log(totals);
// 

// last attempt: ✅

function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]
];

console.log(`Bills = ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${totals}`);





