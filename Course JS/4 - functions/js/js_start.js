// function sayHi() {
//    console.log('Hello!');
// }
// sayHi();

// // 2)
// function sayName(name, surname) {
// console.log(name);
// console.log(surname);
// }
// sayName('Vorona', 'Folk'); // Vorona Folk
// sayName('Vorona'); // Vorona Undefined

// // 3) variant
// function sayHi(name = 'Sanya', surname = 'Chook') {
//    console.log(name);
//    console.log(surname);
// }
// sayHi('Roma', 'Abb');

// // 4) old variant but working
// function sayHi(name, surname) {
//    console.log(name || 'roma');
//    console.log(surname || 'vorona');
// }
// sayHi('Taras');

// // // 5)
// function sayHi(name, surname) {
//    console.log(name || 'roma');
//    console.log(surname || 'vorona');
// }
// sayHi( null, 'Taras'); // OR (undefined, "Taras")

// // 6) Return
function calcSum(a , b) {
   // console.log(a + b);
   return a + b;
}

// calcSum(1, 2);
console.log(calcSum(2, 3));