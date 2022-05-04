// // // 1) Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение.Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// function getNumbers(a, b) {
// // if pair(even)
//    if ( a % 2 === 0 && b % 2 === 0) {
//       console.log(`a * b`);
//       return a * b;
//    } else if ( a % 2 !== 0 && b % 2 !== 0) {
//       console.log(`a + b`);
//       return a + b;
//    } else if ( (a % 2 === 0 && b % 2 !== 0)) {
//       console.log(`b odd number`);
//       return b;
//    } else if ( (a % 2 !== 0 && b % 2 === 0) ) {
//       console.log(`a odd number`);
//       return a;      
//    }

// }

// console.log(getNumbers(0, 4));



// // 2) Создайте функцию sum, которая будет возвращать сумму любого количества чисел. Вызываться функция должна вот так (обратите внимание на скобки): x = sum(2)(5)(10)
//a)
// function sum(...args) {
//     let result = 0;
//     for ( let i = 0; i < args.length; i++){
//         result = result + args[i];
//     }
//     console.log(result);
// }
// sum(1,2,3);
