'use strict'
// // ---------------------------------------------ClassWork----------------------------------------------


// // const users = ['Greengo', 'Riki', 'Floyd', 'Markellos'];
// // let userIndex;


// // // for(let input of users) {
// // //     if (input === 'Riki') {
// // //         userIndex = users.indexOf(input);
// // //     }
// // // }

// // console.log(userIndex);

// // // Давайте добавим нового юзера, в конец массива ------------

// // let ask = prompt('Add a new user');

// // const addUser = function(arr,name) {
// //     if (arr.includes(name)) {
// //         alert("Пользователь уже существует");
// //     } else {
// //         arr.push(name);
// //     }
// // }
// // addUser(users,'Ajax');
// // addUser(users, 'Pablo');
// // console.log(users);

// // // for (let user of users) {
// // //     let exist = false;
// // //     if (ask === user) {
// // //         exist = true
// // //     };
// // //     if (exist === true) {
// // //         alert ('This user has allready')
        
// // //     } else {
// // //         users.push(ask)
// // //     }
// // // }
// // // console.log(users);


// // if (!users.includes(ask)) {
// //     users.push(ask);
// // }


// // // Удаляем юзера по индексу -------------- 

// // users.splice(userIndex,1);
// // console.log(users);

// // // Обновим юзера по индексу -----------------
// // users[1] = 'Max';
// // console.log(users);


// // // Дальше давайте перепишем каждый шаг в отдельную функцию getUserByID(id),

// // function getUserByID(name) {
// //     let userIndex = '';
// //     for(let input of users) {
// //         if (input === name) {
// //             userIndex = users.indexOf(input);
// //         }
// //     }
// //     if (userIndex !== '') {
// //         return userIndex
// //     } else {
// //         alert('Такого юзера нет!')
// //     }
// //     console.log(userIndex);
    
// // }
// // console.log(getUserByID('Stivi'))
// // // getUserByID('Max');
// // console.log(users);

// // const deleteUser = () => {
// //     users.splice(userIndex, 1)
// // }
// // deleteUser(2);
// // console.log('aftedDelete', users);
// // deleteUser(getUserByID('Ajax'));
// // console.log(users);


// // const updateUser = function (index, name, arr) {
// //     arr[index] = name; 
// //     return arr;
// //   }
// //   console.log(getUserByID('Pablo'));
// //   console.log(updateUser(getUserByID('Pablo'),'Max',users));

// // _____________________________________________________________________________________________________________

// const users = [
//     {id: 'user_id_111', name: 'Greengo'},
//     {id: 'user_id_222', name: 'Riki'},
//     {id: 'user_id_333', name: 'Floyd'},
//     {id: 'user_id_444', name: 'Marchellos'},
//   ];

//   function getUserID(id){
//       let userIndex = '';
//     for(let input of users) {
//       if(input.id === id) {
//         userIndex = users.indexOf(input);
//       }
//     }
//     if(userIndex !== '') {
//       return userIndex;
//     }else{
//       alert('user is not finded');
//     }
//     console.log(userIndex);
// }
// console.log (getUserID('user_id_444'));

// console.log(users[getUserID('user_id_222')].name);


// // обновим функцию deleteUser(id = 'user_id_111') - должно удалить юзера
// // с id user_id_111

// const deleteUser = userIndex => {
//     users.splice(userIndex, 1)
//   }
//   console.log('beforeDelete', users);  
//   deleteUser(2);
//   console.log(users);
//   console.log(deleteUser("user_id_111"));
//   console.log(users);

// // обновим функцию updateUser(id = 'user_id_111') - должно обновить юзера
// // с id user_id_111

// const addUser = function(arr, obj) {
//     arr.push(obj);
//   }

// addUser(users, {id: 'user_id_555', name:'Ajax'});
// addUser(users, {id: 'user_id_666', name: 'Pablo'});
// console.log(users);

// // обновляем юзера по id

// const updateUser = function(index, name, arr) {
//     arr[index].name = name;
//     return arr[index];
// }

//   const update = updateUser(getUserID("user_id_444"), 'Max', users);
//   console.log(getUserID("user_id_222"));
//   console.log(users);


// // Написать функцию getAllUsers(arr) которая выводит сообщение в консоль id : name

// const getAllUsers = function(arr) {
//     for (const el of arr) {
//         console.log(`id: ${el.id} name: ${el.name}`);
//     }
// }
// getAllUsers(users);

// // __________________________________________________________________________________________________

// ____________________________________Module_04_home_work____________________________________________
// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   cheese: 40,
// };



// function Cashier(name, productDatabase) {
//   this.name = name;
//   this.productDatabase = productDatabase;
//   this.totalPrice = 0;
//   this.customerMoney = 0;
//   this.changeBalance = 0;

//   this.countTotalPrice = function(order){
//       for(let key in order) {
//         this.totalPrice += order[key] * this.productDatabase[key];
//       }
//       return this.totalPrice;
//   };
//   this.getCustomerMoney = function(value) {
//     this.customerMoney = value;
//   };
//   this.countChange = function() {
//     if (this.totalPrice > this.costomerMoney) {
//       return null;
//     }
//     this.changeBalance = this.costomerMoney - this.totalPrice;
//     return this.changeBalance;
//   };
//   this.reset = function() {
//     this.totalPrice = 0;;
//     this.costomerMoney = 0;
//     this.changeBalance = 0;
//   };
// //   this.countChange = function(totalPrice) {
// //   if (this.costomerMoney >= totalPrice) {
// //       change = this.costomerMoney - totalPrice;
// //       return change;
// //   } else {
// //       return null;
// //   } 
// // }
// };

// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// };

// /* Пример использования */
// const mango = new Cashier('Mango', products);

// // Проверяем исходные значения полей
// console.log(mango.name); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0

// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// const totalPrice = mango.countTotalPrice(order);

// // Проверям что посчитали
// console.log(totalPrice); // 110

// // Вызываем getCustomerMoney для запроса денег покупателя
// mango.getCustomerMoney(300);

// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
// const change = mango.countChange();

// // Проверяем что нам вернул countChange
// console.log(change); // 190

// // Проверяем результат подсчета денег
// if(change !== null) {
// //  При успешном обслуживании вызываем метод onSuccess
// mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
// } else {
// // При неудачном обслуживании вызываем метод onError   
// mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }

// // Вызываем reset при любом исходе обслуживания
// mango.reset();

// // Проверяем значения после reset
// console.log(mango.customerMoney); //0


// ____________________________________Модуль 4 допольнительные задание_______________________________

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';

// user.hobby = 'javaScript';

// delete user.premium;

// for (let item in user) {
//   console.log(`${item}, ${user[item]}`);
// }

// let arr = Object.keys(user);
// for (let element of arr) {
//   console.log(element, ':', user[element]);
// }

// let arr2 = Object.entries(user);
// console.log(arr2);

// for (let key of arr2) {
//   console.log(key[0], ':', key[1]);
// }
// ______________________________________Задание 2_____________________________________

// /*
//   Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// let maxNum = 0;
// let first;
// for (const keys in tasksCompleted) {
//   if (tasksCompleted[keys] > maxNum) {
//     first = keys;
//     maxNum = tasksCompleted[keys]
//   }
//   console.log(keys, maxNum);
  
// }
// console.log(first, maxNum);

// // ______________________________________Задание 3_______________________________________


/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// function countProps(obj) {
//   let count = 0;
//   for (let elem in obj) {
//     count++;
//   }
//   return count;
// }


// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// // ________________________________________________Задание 4_________________________________

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// function isObjectEmpty(obj) {
//   let arr = Object.keys(obj);
//   if (arr.length === 0) {
//     return true;
//   }
//   return false;
// }

// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// __________________________________________________Задание 5______________________________________
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// function countTotalSalary (salaries) {

//   let sum = 0;
//   let arr = Object.values(salaries);
//   for (let elem of arr) {
//     sum += elem;
//   }
//   return sum;
// }

// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// // _______________________________________Задание 6____________________________________


/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// function getAllPropValues(arr, prop) {
//   let arrOfprops = [];
//   for (let obj of arr) {
//     if(obj.hasOwnProperty(prop)) {
//     arrOfprops.push(obj[prop]);
//   }
// }
//   return arrOfprops;
// }

  

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []
// _______________________________________Задание 7______________________________


/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/


// const User = function(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function() {
//     console.log(`User ${name} is ${age} years old and has ${friends} friends`);
    
//   }
// }

// let user = new User('Sergey', true, 30, 7)
// console.log(user)
// console.log();
// ______________________________________Задание 9____________________________________________

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    this.password = newPassword;

    console.log(this.password);
  };

  this.getAccountInfo = function() {
    console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc"); // 'asdzxc'

account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

