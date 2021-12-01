// 1) anonymous function
// document.querySelector('.button').addEventListener('click', function() {
//    let res = sum(10, 11);
//    console.log(res);
// });

function sum(a, b) {
   return a + b;
}


// 2) rewrite this function with arrow function
// function ()  we change to  () => 
// document.querySelector('.button').addEventListener('click', () => {
//    let res = sum(12, 2);
//    console.log(res);
// });


// // 3) if we have only one argument of function(a) , we can write anonymous function without brackets
// const arr = [10, 14, 16, 19];
// const res = arr.map(function(a) { // method .map() перебирает каждій элемент массива и применяет к нему функцию в скобках 
//    return a**2;
// });
// console.log(res); // [100, 196, 256, 361]

// // we can rewrite the function
// const res2 = arr.map( (a) => {
//  return a**2;
// });
// console.log(res2);

// // if we have only one line (even it is return), we can write function this way
// // if we have only one argument in function, we can remove brackets round a
// const res3 = arr.map( a => a**2 );
// console.log(res3);


// 4) need to get numbers from array which indexes are pair (0, 2, 4, 6 ...)
// methos .filter()  - создает новый массив, в который пойдут лишь те элементы массива, для которых вызов функции вернет true
// const arr = [22, 11, 13, 7, 14];
// let res = arr.filter( function(item, index) {
//    if ( index % 2 === 0 ) {
//       return true;
//    }
// });
// console.log(res); // index 0, 2, 4 -> [22, 13, 11]

// rewrite with arrow function
// let res = arr.filter( (item, index) => {
//    if (index % 2 === 0) {
//       return true;
//    }
// } );
// console.log(res);
// //OR
// let res = arr.filter( (item, index) => index % 2 === 0 );
// console.log(res);

// simple numbers which are divided into 2
// let res = arr.filter( (item) => item % 2 === 0 );
// console.log(res); // [22, 14]


// 6) Cоздать отфильтрованный массив, все элементы которого больше или равны 10,
// а все меньшие 10 удалены.
// let arr = [12, 5, 8, 130, 44];
// console.log(arr);
// // // let res = arr.filter( (item) => {
// // //    if ( item > 10 ) {
// // //       return true;
// // //    }
// // // });
// // // console.log(res); // [12, 130, 44]
// // //OR
// // let res = arr.filter( (item) => item > 10);
// // console.log(res); // [12, 130, 44]
// //OR
// function isBigger( value ) {
//    return value > 10;
// }
// let res = arr.filter(isBigger);
// console.log(res); // [12, 130, 44]


// 7) Следующий пример возвращает все простые числа в массиве:
const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isSimple(value) {
   for (let i = 2; value > i; i++ ) {
      if ( value % i === 0 ) {
         return false;
      }
   }
   return value > 1; // it will be true , if for == false, and this true will be going to the function in method .filter() 
// and it will be displayed the value of arr
// по факту мы тут только проверяем false or true и каждый раз выходим из функции , когда получаем return
// когда только получаем return , то сразу выходим из функции и только благодаря методу перебора массива .filter, 
// мы переходим к след числу
}
let res = arr.filter(isSimple); // тут именно метод .filter() перебирает массив! а не цикл for()
console.log(res);