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
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};



function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeBalance = 0;

  this.countTotalPrice = function(order){
      for(let key in order) {
        this.totalPrice += order[key] * this.productDatabase[key];
      }
      return this.totalPrice;
  };
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  };
  this.countChange = function() {
    if (this.totalPrice > this.costomerMoney) {
      return null;
    }
    this.changeBalance = this.costomerMoney - this.totalPrice;
    return this.changeBalance;
  };
  this.reset = function() {
    this.totalPrice = 0;;
    this.costomerMoney = 0;
    this.changeBalance = 0;
  };
//   this.countChange = function(totalPrice) {
//   if (this.costomerMoney >= totalPrice) {
//       change = this.costomerMoney - totalPrice;
//       return change;
//   } else {
//       return null;
//   } 
// }
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
//  При успешном обслуживании вызываем метод onSuccess
mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
// При неудачном обслуживании вызываем метод onError   
mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); //0
