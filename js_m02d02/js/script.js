// // // 'use strict'

// const clients = ["Mango","Poly","Ajax"];

// // // console.log(clients[0]);
// // // console.log(clients[2]);
// // // console.log(clients[1]);

// // // clients[3] = 'Alex';
// // // console.log(clients[3]);

// // // clients.length = 2;
// // // console.log(clients.length);
// // // console.log(clients);

// // // // Split
// const message = "Welcom to Bahamas!"
// // // Разбивает строку по разделителю,в данном случае это пробел
// // console.log(message.split(" ")); // (3) ["Welcom", "to", "Bahamas!"]

// // console.log(clients.join("")); //MangoPolyAjax
// // console.log(clients.join(",")); //Mango,Poly,Ajax
// // console.log(clients.join("_")); //Mango_Poly_Ajax



// // console.log(clients.indexOf('Poly')); // 1
// // console.log(clients.indexOf('Monkong')); // -1

// // console.log(clients.includes('Poly')); // true
// // console.log(clients.includes('Monkong')); // false



// clients.push('Margo'); //Добавить в конец
// clients.unshift('Sergio'); //добавить в начало


// // console.log(clients);

// // clients.pop(); //Удалит последний
// // clients.shift(); //Удалить первый

// // console.log(clients);

// // const bests = clients.slice(0,3) // копирует в новый масив три элемента с 0-3
// // console.log('bests', bests);


// // clients.splice(0, 3); // удалить все элементы с 0 по 3
// // console.log(clients);

// // clients.splice(1,0, 'Evhen', 'Artem'); // добавляем элемен с индекса
// // console.log(clients);

// // clients.splice(1, 5, 'Python'); 
// // console.log(clients);

// // const newClients = ['Adam', 'Franky'];
// // const newArr = clients.concat(newClients); // создает новый массив из 2
// // console.log('newArr', newArr);

// // console.log(newArr.reverse()); // сортирует массив в обратную сторону
// // console.log('isArray:', Array.isArray(newArr)); //проверка на тип "array"

// let string = "добавляем элеменt с индекса"
// let arr = string.split(' ');



// for (let i = 0; i < arr.length; i += 1) {
//     console.log(i);
    
// }
// for ( let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);    
// }

// for ( let i = 0; i < arr.length; i += 1) {
//     console.log(arr.indexOf(arr[i]));    
// }

// // Используя цикл, вивести в консоли все пары индекс:значение массива arr
// for (const i of arr) {
//     console.log(arr.indexOf(i) + ":" + i);
// }
// ------------------------------------------------------------------------------------------------------

// let num = 100;
// let input;

// do {
//     input = Number(prompt ('ввести число больше 100'))
// }
// while (input <= num);

// ------------------------------------------------------------------------------------------------------
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/
// const min = 1;
// const max = 100;

// for (let i = min; i < max ; i += 1) {
//     if ( i % 3 === 0) {
//         console.log('Fizz');
        
//     } else if ( i % 5 === 0 && i % 3 !== 0) {
//         console.log('Buzz');
        
//     } else {
//         console.log(i);    
//     }
// }
// ------------------------------------------------------------------------------------------------------

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];
// for(const index of numbers) {
//     if( index > num) {
//         newArray.push(index);
//     }
// }
// console.log(newArray);
// // -------------------------------------------------------------------------------------------------------

// const string = 'May the force be with you';
// let longestWord;

// const newArry = string.split(' ');
// longestWord = newArry[0];
// for (const value of newArry) {
//     if (value.length > longestWord.length) {
//         longestWord = value;
//     }
// }

// console.log(longestWord);
// // // ---------------------------------------------------------------------------------------------------------
/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let arr = [];
// let ask;
// let sum = 0;
// do {
//     let ask = Number(prompt('Enter number'));
//     if (ask !== 0) {
//         arr.push(ask);
//     }
//     console.log(ask);
//     console.log(arr);
// }while(ask);

// if(arr.length !== 0) {
//     for (const iteration of arr) {
//         sum += iteration;
//     }
// }
// console.log("the sum is" + sum);
// -------------------------------------------------------------------------------------------------------------





// Дополнительное домашнее задание.
// // -------------------------------------------------------------------------------------------------------------
// const numbers = [12, 15, 25, 37, 41];
// const min = numbers[0];
// const max = numbers[numbers.length-1];

// const answer = Number (prompt(`Enter number form ${min} to ${max}!`));
// if (Number.isNaN(answer)) {
//     alert ('Было введено не число');
// }
// else {
//     if (numbers.includes(answer)) {
//         alert ('Поздравляем вы угадали');
//     }
//     else {
//         alert (`Сожалеем, Вы не угадали ${answer} `);
//     }
// }
// // --------------------------------------------------------------------------------------------------------------


// Домашнее задание дополнительное
// 

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd']
// let attempts = 3;
// let inputPassword 
// do { 
//     inputPassword = prompt('Enter password:');
//     if (passwords.includes(inputPassword)) {
//         alert('Добро пожаловать!');
//         break;
//     }
//     else if (inputPassword !== null){
//         attempts -= 1;
//         if(attempts > 0){
//             alert (`Неверный пароль, у вас осталось ${attempts} попыток`);
//         }
//         else {
//             alert('У вас закончилилсь попитки, акаунт заблокирован!');
//         }
//     }
// }   while (attempts > 0 && inputPassword !== null);
// // ---------------------------------------------------------------------------------------------------------------------------------------------------------