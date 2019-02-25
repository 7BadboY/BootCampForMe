'use strict'
// ---------------------------------------------ClassWork----------------------------------------------


// const users = ['Greengo', 'Riki', 'Floyd', 'Markellos'];
// let userIndex;


// // for(let input of users) {
// //     if (input === 'Riki') {
// //         userIndex = users.indexOf(input);
// //     }
// // }

// console.log(userIndex);

// // Давайте добавим нового юзера, в конец массива ------------

// let ask = prompt('Add a new user');

// const addUser = function(arr,name) {
//     if (arr.includes(name)) {
//         alert("Пользователь уже существует");
//     } else {
//         arr.push(name);
//     }
// }
// addUser(users,'Ajax');
// addUser(users, 'Pablo');
// console.log(users);

// // for (let user of users) {
// //     let exist = false;
// //     if (ask === user) {
// //         exist = true
// //     };
// //     if (exist === true) {
// //         alert ('This user has allready')
        
// //     } else {
// //         users.push(ask)
// //     }
// // }
// // console.log(users);


// if (!users.includes(ask)) {
//     users.push(ask);
// }


// // Удаляем юзера по индексу -------------- 

// users.splice(userIndex,1);
// console.log(users);

// // Обновим юзера по индексу -----------------
// users[1] = 'Max';
// console.log(users);


// // Дальше давайте перепишем каждый шаг в отдельную функцию getUserByID(id),

// function getUserByID(name) {
//     let userIndex = '';
//     for(let input of users) {
//         if (input === name) {
//             userIndex = users.indexOf(input);
//         }
//     }
//     if (userIndex !== '') {
//         return userIndex
//     } else {
//         alert('Такого юзера нет!')
//     }
//     console.log(userIndex);
    
// }
// console.log(getUserByID('Stivi'))
// // getUserByID('Max');
// console.log(users);

// const deleteUser = () => {
//     users.splice(userIndex, 1)
// }
// deleteUser(2);
// console.log('aftedDelete', users);
// deleteUser(getUserByID('Ajax'));
// console.log(users);


// const updateUser = function (index, name, arr) {
//     arr[index] = name; 
//     return arr;
//   }
//   console.log(getUserByID('Pablo'));
//   console.log(updateUser(getUserByID('Pablo'),'Max',users));

// _____________________________________________________________________________________________________________

const users = [
    {id: 'user_id_111', name: 'Greengo'},
    {id: 'user_id_222', name: 'Riki'},
    {id: 'user_id_333', name: 'Floyd'},
    {id: 'user_id_444', name: 'Marchellos'},
  ];

  function getUserID(id){
      let userIndex = '';
    for(let input of users) {
      if(input.id === id) {
        userIndex = users.indexOf(input);
      }
    }
    if(userIndex !== '') {
      return userIndex;
    }else{
      alert('user is not finded');
    }
    console.log(userIndex);
}
console.log (getUserID('user_id_444'));

console.log(users[getUserID('user_id_222')].name);


// обновим функцию deleteUser(id = 'user_id_111') - должно удалить юзера
// с id user_id_111

const deleteUser = userIndex => {
    users.splice(userIndex, 1)
  }
  console.log('beforeDelete', users);  
  deleteUser(2);
  console.log(users);
  console.log(deleteUser("user_id_111"));
  console.log(users);

// обновим функцию updateUser(id = 'user_id_111') - должно обновить юзера
// с id user_id_111

const addUser = function(arr, obj) {
    arr.push(obj);
  }

addUser(users, {id: 'user_id_555', name:'Ajax'});
addUser(users, {id: 'user_id_666', name: 'Pablo'});
console.log(users);

// обновляем юзера по id

const updateUser = function(index, name, arr) {
    arr[index].name = name;
    return arr[index];
}

  const update = updateUser(getUserID("user_id_444"), 'Max', users);
  console.log(getUserID("user_id_222"));
  console.log(users);


// Написать функцию getAllUsers(arr) которая выводит сообщение в консоль id : name

const getAllUsers = function(arr) {
    for (const el of arr) {
        console.log(`id: ${el.id} name: ${el.name}`);
    }
}
getAllUsers(users);

// _______________________________________________________________________________________________


