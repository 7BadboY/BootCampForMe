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



// // -----------Псевдомассив arguments------------------------------------------------------------------------
// const summ = function () {
//     const max = arguments.length;
//     let total = 0;

//     for (let i = 0; i < max; i += 1) {
//         total += arguments[i];
//     }
//     return total;
// };
// console.log (`sum = ${summ(134, 158, 564, 1024, 1345)}`);



// // ---------------------------------------------------------------------------------------------------------- 


// let a = 10;
// const fn = function (value) {
//     const ifValue = Number(value) || a;
//     if (!Number.isNaN (ifValue)) {
//         console.log(ifValue + 10);
//     } else {
//     console.log('value is NaN');
// }
// };
// fn();
// -----------------------------------------

// let a = 10;

// const fn = function (value) {
//   // console.log('loaded');  // проверяем или функция вызвалась
//   const ifValue = Number(value) || a;
//   // console.log('ifValue', ifValue); // проверяем что на выходе в константе ifValue
//   if(!Number.isNaN(ifValue)) {
//     // console.log('firstIF'); // проверяем или выполняется первое условие
//     console.log(ifValue + 10);
//   } else {
//     // console.log('secondIF'); // проверяем или выполняется второе условие 
//     console.log('value is NaN');
//   }
// };
// fn();

//// ------------------------------Call-Back--Функция---------------------------------////
// const printMessage = function (callback) {
//     const message = callback(); //вызываем функцию чтобы получить её значение
//     console.log(message);
// };

// const getMessage = function () {
//     return 'Welcom to the jungle!';
// };
// printMessage (getMessage); // 'Welcom to the jungle!'
////-------------------------------------------------------------------------------------////


////----------------------------d03 Task1------------------------------------------////
/* 
    Напишите функцию CheckNumberType(num)

    функция получает число num как аргумент и возвращает
    строку "Even" ечли число четное и строку "Odd" если не четное. 
*/
// Call function

// const CheckNumberType = function (num) {
//     const even = num % 2 === 0;
//     return even ? 'even' : 'odd';
// }
// console.log (CheckNumberType(2) );
// console.log (CheckNumberType(46) );
// console.log (CheckNumberType(3) );
// console.log (CheckNumberType(17) );
// ----------------------------------------

////---------------------------------d03--Task-2------------------------////
// let formatString = function (str) {
//     if (str.length < 40) {
//       console.log('str if < 40', str);
//       return str;
//     } else {
//       let newStr = str.slice(0, 40) + '...'
//       console.log('str if > 40', newStr);
//       return newStr;
//     }
//   }
// -----------------------------------------------------------------------------//

//----------------------------------d03--Task-3---------------------------------//

/*
  Напишите функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale

  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки


// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// function checkForSpam(str) {
//   // if( str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//   //   return true
//   // } else {
//   //   return false
//   // }
//   return ( str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale'))
// }

