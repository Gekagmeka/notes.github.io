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
function aFn(a){
    return function(b){
        return a + b;
    }
}
 let sum = aFn(10);
 console.log(sum(22));
 