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
// // ---------------------------------------------------------------------------------------------------------

let arr = [];
let ask;
let sum = 0;
do {
    let ask = Number(prompt('Enter number'));
    if (ask !== 0) {
        arr.push(ask);
    }
    console.log(ask);
    console.log(arr);
}while(ask);

if(arr.length !== 0) {
    for (const iteration of arr) {
        sum += iteration;
    }
}
console.log("the sum is" + sum);
