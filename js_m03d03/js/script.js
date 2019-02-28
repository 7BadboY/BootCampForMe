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


// ____________________________________Задание 4________________________________________

// /*  
//   Написать функцию, getPx(str) 

//   Функция getPx должна получать строку вида '10px',
//   проверять была ли передана строка, если да, 
//   возвращать только числовую составляющую, к примеру 10.
    
//   Если была передана не строка, функция возвращает null.
// */
// function getPx(str) {
//     if  (typeof str === "string") {
//         return parseFloat(str);
//     } 
//     return null;
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


// _____________________________________Задание 5____________________________________________

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/


// function findLongestWord(str) { 
//     let arr = str.split(' ');
//     let longWord = arr[0];
    
// for (let newArr of arr) {
//     if (newArr.length > longWord.length){ 
//      longWord = newArr;
//         }

// }
// return longWord;
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'
  
// _____________________________________Задание 6____________________________________________

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// function findLargestNumber(numbers) {
//     let max = 0;
//     for (let num of numbers) {
//         if (num > max) {
//             max = num; 

//         }
//     }
// return (max);
// }

// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128
  
// ____________________________________Задание 7_____________________________________________

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers (){
//     let arr = arguments;
//     for(let index of arr) {
//         if (!uniqueNumbers.includes(index)) {
//             uniqueNumbers.push(index)
//         }
//     }

// }
// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// _____________________________________Задание 8____________________________________

/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr, ...args) {

//     for(let input of args) {
//         if (arr.includes(input)) {
//             let index = arr.indexOf(input);
//             arr.splice(index, 1);
//         }
//     }
//   return arr;
// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



// // --------------------------Пример стрелочной функции----------------------

// const double = val => val * 2;
// const triple = val => val * 3;
// const numbers = [1, 2, 3, 4, 5];

// const map = (arr, callback) => { // Обьявляем функцию с аргументами arr(массивом), callback(функции)
//     const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты
//     // перебираем, входящий при вызове функции массив, записывай в аргумент arr. 
//     // в теле цикла елементы пропускаем через функцию callbrck, обьявленную в аргументах
//     // и записываем результат callback-функции в переменную rezult.
//     // последним этапом цикла - записывает result в новый массив, выходим из массива.
//     // последним этапом map будет возврат (return) переменной resultArr.
//     for(const element of arr) {
//       const result = callback(element);
//       resultArr.push(result);
//     }
//     return resultArr;
//   };
//   const double = val => val * 2;
//   const triple = val => val * 3;
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = map(numbers, double);
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//   const tripledNumbers = map(numbers, triple);
//   console.log(tripledNumbers); // [3, 6, 9, 12, 15]
// ////------------------------------------------------------------------------------------------------////


// const ourArray = (transfer,mass) => {
//     let newMass = [];
//     for (const numb of mass) {
//         const newElement = transfer (numb);
//         newMass.push(newElement);
//     }
//     return newMass;
// };
// const double = (number) => number *2;
// const triple = (number) => number *3;

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = ourArray (double, numbers);
// console.log(doubledNumbers);

// const tripledNumbers = ourArray(triple, numbers);
// console.log(tripledNumbers);

