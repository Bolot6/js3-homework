// function myFunction() {
//     let a = 44
//     let b = 23
//     return a + b
// }
//
// console.log(myFunction());

// let str = 'Hello world'
// function myFunction() {
//     let res = str.slice(0, 5) .toUpperCase()
//     return res
// }
//  function Bolot() {
//     let res = str.slice(0, 5) .toLowerCase()
//      return res
//  }
//  console.log(Bolot())
// console.log(myFunction())

// function myFunction() {
//     let a = 'Admin'
//     if (a.toLowerCase()=== 'admin'){
//         return 'Welcome admin'
//     }else{
//         return 'Welcome user'
//     }
// }
//
// console.log(myFunction())

// function myFunction() {
//     let a = 'Bolot'
//     if (a.toLowerCase()=== 'admin'){
//         return 'Welcome admin'
//     }else{
//         return `Welcome ${a}`
//     }
// }
//
// console.log(myFunction())

// function myFunction(name) {
//     if (name.toLowerCase()=== 'admin'){
//         return 'Welcome admin'
//     }else{
//         return `Welcome ${name}`
//     }
// }
//
// console.log(myFunction('Aydin'))
// console.log(myFunction('Bolot'))
// console.log(myFunction('Tatyana'))
// console.log(myFunction('Diana'))
// console.log(myFunction('Elba'))

// function myFunction(age) {
//     if (age >= 17){
//         return 'Welcome'
//     }else{
//         return 'Access denied'
//     }
// }
// console.log(myFunction(18))
// console.log(myFunction(16))

//||-or(+) first true &&-and(*) first false

//Homework

//#1

// user admin true welcome, 'user'
// false not correct user

// function myFunction(name) {
//     if (name === 'admin') {
//         return 'Welcome, user';
//     } else {
//         return 'not correct user';
//     }
// }
//
// console.log(myFunction('admin'));
// console.log(myFunction('vkfn'));

//#2

// today is 'day' of february
// on february only 28 day, your day is 'day' of another month


// function myFunction(day) {
//     if (day >= 1 && day <= 28) {
//         return `Today is ${day} of February`;
//     } else (day > 28 ) {
//         return `On February, there are 28 days. Your day is ${day - 28} of another month.`;
//     }
// }
//
// console.log(myFunction(9));
// console.log(myFunction(29));

//#3
// 'num' is equals of 50
// 'num' is not correct

// function myFunction(num) {
//     if (num === 50) {
//         return `Number is equal to 50`;
//     } else if (num > 50 ) {
//         return `Number is not correct`;
//     } else {
//         return `Number is not correct`
//     }
// }
//
// console.log(myFunction(60));
// console.log(myFunction(50));

//#4
// 'user' 'age' old, welcome
// 'user' 'age' old, rejected

// function myFunction(age, name) {
//     if (age >= 18){
//         return `${name} ${age} welcome`
//     }else {
//         return `${name} ${age} rejected`
//     }
// }
//
// console.log(myFunction(17, 'Karl'))
// console.log(myFunction(56, 'Carmen'))

//#5
// 'user' name is too short (min 3)
// 'user' name is accepted

// function myFunction(name) {
//         if (name.length <= 3) {
//             return 'Name is too short (min 3)';
//         } else {
//             return 'Name is accepted';
//         }
//     }
//
// console.log(myFunction('kmkni'));
// console.log(myFunction('km'));

//#6
// 'user' name is too long (max 5)
// 'user' name is accepted

// function myFunction(name) {
//         if (name.length >= 5) {
//             return 'Name is too long (max 5)';
//         } else {
//             return 'Name is accepted';
//         }
//     }
//
// console.log(myFunction('kmkn'));
// console.log(myFunction('kmkngbt'))

//#7

// 'age' must be a number ('20')

// function myFunction(age) {
//         if (age===20) {
//             return 'accepted';
//         } else {
//             return 'Age must be a number 20';
//         }
//     }
//
// console.log(myFunction(26));

//#8

// today is monday/tuesday/wednesday/thursday/friday weekend
// max days of weeks 7

// function myFunction(day) {
//     if (day === 1) {
//         return 'Today is Monday';
//     } else if (day === 2) {
//         return 'Today is Tuesday';
//     } else if (day === 3) {
//         return 'Today is Wednesday';
//     } else if (day === 4) {
//         return 'Today is Thursday';
//     } else if (day === 5) {
//         return 'Today is Friday';
//     } else if (day === 6) {
//         return 'Today is Saturday';
//     } else if (day === 7) {
//         return 'Today is Sunday';
//     } else {
//         return 'max days of weeks 7';
//     }
// }
//
// console.log(myFunction(5))

//#9

// hello world
// 1. вам надо будет проверить и убрать пробелы в начале и в конце
// 2. поменять местами world hello
// 3. не первое o поменять на а

// let a= ' hello world '
// let b = a.slice(1, 12)
// let c = a.slice(7, 12)
// let d =a.slice(1,6)
// let e = c+ ' ' +d
// let f = e.slice(10,11)
// let g = f='a'
// let h = e.slice(0, 10) + g
//
// console.log(h)

//#10

// 1. проверить длинну на четность (?)
// *Длину чего проверить? Нет данных

//#11

// 1. lorem ipsum dolor sit amet => loremipsumdolorsitamet
// price и discount (?)
//* Непонятно price и discount от чего, куда и тд.

// let a = 'lorem ipsum dolor sit amet'
// let b = a.slice(0, 5)
// let c = a.slice(6, 11)
// let d = a.slice(12, 17)
// let e = a.slice(18, 21)
// let f = a.slice (22,26)
//
// console.log(b+c+d+e+f)

//#12
// str в задаче вам надо проверить что это строка.(?)
// вы проверяете не пустая ли она. длина мин 4 макс 10. четность длины.(?)
//*Непонятно как выполнять эту задачу. Где взять данные, или самим написать рандомный текст? 