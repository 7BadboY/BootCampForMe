'use strict'


// const taba = 6;
// const sharm = 15;
// const hurgada = 25;

// let hotel = "";

// const requiredPlaces = prompt('Введите количество мест');
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= taba){
//     hotel = "Taba";
//   }
//   else if (+requiredPlaces <= sharm) {
//     hotel = "Sharm";
//   }
//   else if (+requiredPlaces <= hurgada) {
//     hotel = "Hurgada";
//   }
//   if (hotel && confirm(`хотите ли вы остаться в ${hotel}?`)) {
//     alert(`добро пожаловать в ${hotel}`);
//   } else if(!hotel) {
//     alert('Извините, столько мест нет ни в одной группе!');
//   } else {
//     alert ('Нам очень жаль, приходите еще!');
//   }
// } else if (!requiredPlaces) {
//   alert ('Нам очень жаль, приходите еще!');
// }


// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// let hotel = "";

// const requiredPlaces = prompt('Введите количество мест');
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= sharm){
//     if (confirm('хотите ли вы остаться в Sharm?')) {
//       alert('добро пожаловать в Sharm');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }
//   else if (+requiredPlaces <= hurgada) {
//     if (confirm('хотите ли вы остаться в Hurgada?')) {
//       alert('добро пожаловать в Hurgada');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }
//   else if (+requiredPlaces <= taba) {
//     if (confirm('хотите ли вы остаться в Taba?')) {
//       alert('добро пожаловать в Taba');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }

// } else if (!requiredPlaces) {
//   alert ('Нам очень жаль, приходите еще!')
// }

// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';

// const adminLoginAccessSkiped = 'Отменено пользователем!';
// const adminLoginAccessWrong = 'Доступ запрещен, неверный логин!';

// const adminPasswordAccessSkiped = 'Отменено пользователем!';
// const adminPasswordAccessWrong = 'Доступ запрещен, неверный пароль!';

// const adminAccessGreat = 'Добро пожаловать!';

// const login = prompt('enter your login');

// if (login === null) {
//     alert (adminLoginAccessSkiped);
// } else if (login !== adminLogin) {
//     alert (adminLoginAccessWrong);
// } else {
//     const password = prompt('enter your password');

// if (password === null) {
//     alert (adminPasswordAccessSkiped);
// } else if (password !== adminPassword) {
//     alert (adminPasswordAccessWrong);
// } else {
//     alert (adminAccessGreat);
//  }
// } 






// // // // // // // let guest;
// // // // // // // let name;

// // // // // // // name = 'Mango';
// // // // // // // guest = name;
// // // // // // // console.log(guest);



// // // // // // const day = 02;
// // // // // // const month = 10;
// // // // // // const year = 2017;

// // // // // // const date = " 0" + day + "\\" + month + "\\" + year;
// // // // // // console.log(date); 



// // // // // const name = prompt('enter your name')
// // // // // alert (name);


// // // // const name = 'Mango';
// // // // const date = '14/08/2031';
// // // // const roomType = 'lux'

// // // // const message = `${name} coming to the rest ${date} in ${roomType}`;

// // // // console.log(message);

// // // const padding = "20px";
// // // const border = "5px";
// // // const contentWidth = "100px";

// // // let totalWidth;
// // // totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth) + "px";

// // // console.log(totalWidth);


// // const year = +prompt('What year now?');

// // if (year === 2018) {
// //     alert('all good');
// // } else {
// //     alert("it's not true");
// // }


// const value = +prompt('введите целое произвольное');
// console.log(value);

// if (value === null) {

//     alert ('приходите ещё!')
// }
// else if (Number.isInteger(Number(value))) {
//     alert('спасибо')   
// }
// else {
//     alert('Необходимо ввести целое число')
// }



// const num = Number.parseInt(Math.random() * 100);

// let type;

// console.log('num',num);

// switch (num % 2) {
//     case 0: 
//     type = "even";
//     break;
//     default:
//     type = "odd";
// }

// console.log(`${num} is ${type}`);


// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// const time =`${hours < 10 ? 
// '0' + hours : hours}:${minutes < 10 ? 
// '0' + minutes : minutes}:${seconds < 10 ? 
// '0' + seconds : seconds}`;

// console.log('Time is: ' , time);


// const promptValue = prompt("Type number from 1-5");

// if (Number.isInteger(+promptValue) && (promptValue > 0 && promptValue <= 5) ) {
//     switch(+promptValue) {
//         case 1 :
//         alert ("Каталог хостелов")
//         break;
//         case 2 :
//         alert ("Каталог отелей ***")
//         break;
//         case 3 :
//         alert ("Каталог отелей ****")
//         break;
//         case 4 :
//         alert ("Каталог лучших отелей")
//         break;
//     }
// } else if (promntValue === null) {
//     alert ("очень жаль, приходите еще!")
// } else {
//     alert ("Неверный ввод, возможные варианты 1-5!")
// }



// __________________________________________Доп-10____________________________________________

/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// _____________________________________________Решение_______________________________________________

let inputUser = +prompt('Enter your number from 1 to 5');
inputUser >= 1 || inputUser <=5 || Number.isNaN(inputUser) 