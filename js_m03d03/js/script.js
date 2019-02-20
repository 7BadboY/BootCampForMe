'use strict'

// let a = 'Hello world';

// if (5>3) {
//     let b = a + "! how are you";
// console.log(b);

// }


// const add = function ( a, b, c) {
//     return a + b + c;
// }; 
// console.log(add(1, 2, 3));
// // ----------------------------------------------------------------------------------------------------------------------



// const showTestDays = function(name = "Пользователь", days = 30){
//     return `Имя - ${name}, использовано ${days} тестових дня(ей)`;
// }
// console.log(showTestDays("Екатерина", 10));
// // ------------------------------------------------------------------------------------------------------------------------

const summ = function () {
    const max = arguments.length;
    let total = 0;

    for (let i = 0; i < max; i += 1) {
        total += arguments[i];
    }
    return total;
};

console.log (`sum = ${summ(134, 158)}`);