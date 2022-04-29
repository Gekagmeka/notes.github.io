// // 1) Пример с замыканием
// function chooseDomain(domain) {
//     // возвращает новую функцию с параметром url
//     return function(url){
//         // которая в свою очередь, возвращает ссылку, состоящую из параметров url and domain
//         return `https://${url}.${domain}`;    
//     }
// }
// // теперь, создаем новую функцию comDomain (переменную), которая была получена из функции chooseDomain и в нее мы передаем параметр (domain)
// let comDomain = chooseDomain('com');
// // и далее мы посомтрим в консоле эту новую функцию conDomain(), а параметр этой функции уже будет совпадать с параметром (url) возвращаемой функции
//  console.log(comDomain('ex'));

//  // если захотим поменять домен, то
//  let uaDomain = chooseDomain('ua');
//  console.log(uaDomain('www'));


// // // 2) функция в if
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();


// // 3) Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// чтоб вторые скобки заработали, то первые - должны вернуть функцию
// function aFn(a){
//     return function(b) {
//         return a + b;
//     }
// }
// console.log(aFn(2)(19)); // 21
// // OR
// function aFn(a){
//     return function(b){
//         return a + b;
//     }
// }
//  let sum = aFn(10);
//  console.log(sum(22));
 

// Задача 4 - периметр треугольника
// function perimetrFn(a, b) {
//     return function(c) {
//         return a + b + c;
//     }
// }
// let res = perimetrFn(10, 2);
// console.log(res(23));
// // OR
// function calcPerimetr(a, b, c) {
//     return a + b + c;
// }
// console.log(calcPerimetr(10, 11, 12));


// // 5) Должна вывестись посимвольно строка (второй параметр) 
// 2 парметра в фнукции первый - это функция, которая делает uppercase каждый символ строки, второй параметр - это строка
// fn
function toUpper(symbol) {
    console.log(symbol.toUpperCase());
}

function useToUppercase(fn, str) {
    // // for...of -> можно пройтись по элементам строки
    // // Проходится по каждому символу строки str и сохраняет на каждой итерации этот символ в переменную index
    for (let index of str) {
        // console.log(index);
        //s
        //o
        //m
        //e
        // 
        //s
        // .....
        //g
        // А теперь используем (вызываем) функцию useToUppercase с параметром (fn), где этот параметр и есть функцией toUpper -> useToUppercase(toUpper, 'some string');
        // исключить пробелы
        // if ( index === ' ' ) {
        //     continue;
        // }
        // OR
         // if ( index !== ' ' ) {
        //     fn(index);
        // }
        fn(index);
        }
        
    // // OR
    // for ( let i = 0; i < str.length; i++) {
    //     // console.log(str[i]);
    //     fn(str[i]);
    // }

}
useToUppercase(toUpper, 'some string');