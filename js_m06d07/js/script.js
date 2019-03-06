'use strict'

// const user  = {
//     name: 'Eddy',
// };

// const user2 = {
//     name: 'Violla',
// };

// const myFunc = function (message = '') {
//     console.log('this in myFunc:', this);
//     return `Hello my name is ${this.name}. ${message}`;
    
// };
// // console.log(myFunc()); // This in myFunc: undefined
// const result = myFunc.call(user, 'How are you?');
// console.log(result);

// user.getMyname = myFunc;
// console.log('call user1 to user.getMyName:', user.getMyname.call(user2));

// console.log('from user: ', user.getMyname());


// const Dog = function (
//     name = 'Bolls',
//     age,
//     bread,
//     color,
//     male,
//     vegeterian,
//     facebook
// ) {
//     this.name = name;
//     this.age = age;
//     this.bread = bread;
//     this.color = color;
//     this.male = male;
//     this.vegeterian = vegeterian;
//     this.facebook = facebook;
//     this.yelp = function () {
//         return `wwwwwwoooooof wwwwwwwwwooooooofff fffff`
//     }
// };
// const dog = new Dog (
//     'Poops', 
//     3,
//     'чау-чау',
//     'red',
//     'famele',
//     true,
//     'http://facebook.com/poops');

// console.log(dog);

// console.log(dog.yelp());

// dog.getAboutData = function () {
//     return `name: ${this.name}; age: ${this.age}; bread: ${this.bread}; male: ${this.male}; color: ${this.color}`;
// };

// console.log(dog.getAboutData());
// dog.click = 'click';
// console.log(dog);

// const dog1 = new Dog(
//     undefined, 
//     5,
//     'boxer',
//     'black',
//     'male',
//     false,
//     ''
// );

// console.log('dog:', dog);
// console.log('dog1:', dog1);

// const Horse = function (
//     name,
//     age,
//     bread,
//     color,
//     male,
//     vegeterian,
//     facebook
// ) {
//     this.name = name;
//     this.age = age;
//     this.bread = bread;
//     this.color = color;
//     this.male = male;
//     this.vegeterian = vegeterian;
//     this.facebook = facebook;
//     this.yelp = function () {
//         return `Igooo gooo`
//     }
// };

// const horse = new Horse (
//     'Joui',
//     27,
//     'mustang',
//     'black',
//     'mele',
//     true,
//     ''
//     )
// horse.getAboutData = function () {
// return `name: ${this.name}; age: ${this.age}; bread: ${this.bread}; male: ${this.male}; color: ${this.color}`;
// };
// console.log('MyHourse:', horse);

// ____________________________________________________________________________________________________________________________

// обьявляем функцию с аргументами arr(массивом), callback(функцией)
 // обьявляем пустой массив, в который будет записывать новые эл-ты
  // перебираем, входящий при вызове функции массив, записанный в аргумент arr.
  // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
  // и записываем результат callback-функции в переменную result.
  // поседним этапом цикла - записываем result в новый массив, выходим из массива.
  // последним этапом функции map будет возврат(return) переменной resultArr.
//   const numbers = [1, 2, 3, 4, 5]; //not our mass

//   const ourArray =(transfer,numbersClone) => {//new mass
//     let newMass = []; //future mass
//     for (const numbersCloneElement of numbersClone) { //iteration of new mass
//       const newElement = transfer(numbersCloneElement); // rewrite transfer element
//       newMass.push(newElement); // rewrite new mass
//     }
//     return newMass; // return parametrs in numbersclone
//   };
  
//   const double = (number) => number *2; // our function
  
// //   const triple = (number) => number *3;
//   const triple = function (number) {     //our function
//     return number * 3;
//   };
//   const doubledNumbers = ourArray(double, numbers); // we need results
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//   const tripledNumbers = ourArray(triple,numbers);
//   console.log(tripledNumbers); // [3, 6, 9, 12, 15]
  
//   const newMass = [];
//   numbers.map(function(el){ return newMass.push(el*2) });
//   newMass2 = [];
//   const cb = function(el){
//     return newMass2.push(triple(el));
//   };
//   numbers.map(cb);
  
  
  
//   console.log(numbers);
//   console.log(newMass);
//   console.log(newMass2);
  
  
//   const values = [5, 7, 8, 9];
//   // const newArr = values.map(function(el, index) { return el * 2; });
//   // const newArr = values.map((el) => double(el));
//   const newArr = values.map(double);
  
//   console.log(newArr);
// const map = function(array, transfer){
  
//     const numbersNew = [];
//     for(const el of array) {
//       const elNew = transfer(el);
//       const elNew = el * 27.4;
//       console.log(elNew);
//       numbersNew.push(elNew); 
//     }
//         return numbersNew;
//   }
  
//   console.log(map(numbers));
  
//   const arrow = (number) => number * 27.4;
  
//   map(numbers, arrow); 
//   console.log(map(numbers, arrow));