// // Возведите 2 в 10 степень. Результат запишите в переменную st.
// let st = Math.pow(2, 10);
// console.log(st);
// // ________________________________________________________________________________________
// // Найдите квадратный корень из 245.

// console.log(Math.sqrt(245));

// // ________________________________________________________________________________________
// // Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))

// console.log(Math.sqrt(379).toFixed());
// console.log(Math.sqrt(379).toFixed(1));
// console.log(Math.sqrt(379).toFixed(2));

// // _________________________________________________________________________________________________
// // Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны
// let num = Math.sqrt(587);
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// // __________________________________________________________________________________________________
// // Даны переменные a и b. Проверьте, что a делится без остатка на b. 
// // Если это так - выведите 'Делится' и результат деления, 
// // иначе выведите 'Делится с остатком' и остаток от деления.

// const a = 30;
// const b = 20;

// let reslt = a % b;

// if (reslt !== 0) {
//     console.log('делится ' + (a/b));
// } else {
//     console.log('делится ' + reslt);
// }

// // _____________________________________________________________________________________________________
// // Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// // ______________________________________________________________________________________________________
// // Выведите на экран случайное целое число от 1 до 100.

// const minNum = 1;
// const maxNum = 100;
// console.log(Math.random());

// ______________________________________________________________________________________________________
// Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, 
// а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.

// const enterNum = Number(prompt('Enter num 1, 2, 3'));
// if (enterNum === 1) {
//     console.log('You enter 1');
// } else if (enterNum === 2) {
//     console.log('You enter 2');
// } else if (enterNum === 3) {
//     console.log('You enter 3');
// } else {
//     Number(prompt('Enter num 1, 2, 3'));
// };

// _______________________________________________________________________________________________________
// Необходимо написать программу, где бы пользователю предлагалось ввести число  1. 
// Если пользователь ввёл число 1, программа должна вывести сообщение: "Вы ввели число 1". 
// Если пользователь ввёл другое число, программа должна вывести такое сообщение: "Вы ввели число не равное 1"
