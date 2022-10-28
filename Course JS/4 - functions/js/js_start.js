let a = +prompt('number', 0);

function simple() {
    next:
    for (let i = 2; i <= a; i++) {
        if (a % i === 0) {
            console.log(a);
            continue next;
        }
    }
    console.log(a + 'НЕпростое');
}

simple();



// function showSum(a, b) {
//     return a + b;
// }

// let result = showSum(10, 1);
// alert(result);

// function chacekAge(age) {
//     if ( age >= 18 ) {
//         return true;
//     } else {
//         return confirm('А разрешили тебе???');
//     }
// }

// let age = prompt('How old are you?', 0);

// if ( chacekAge(age) === true ) {
//     alert('Доступ разрешен!');
// } else {
//     alert('Нельзя!!!');
// }


// function sms() {
//     console.log('SMS');
// }
// sms();

// let qqq = 111;

// function global() {
//     function internal() {
//         console.log('internal message');
//     }
//     internal();
// }
// global();



// function calc(one, two) {
//     console.log(one);
//     console.log(two);

//     let summ = one + two;
//     console.log(summ);
// }

// calc(1, 12);



// let user = 'Vanya';
// function rename(){
//     let user = 'Illya';
//     console.log(user);
// }
// rename();
// console.log(user);
// // console.log(user);


// let title = document.querySelector('.title');

// console.log(title.getAttribute('name'));
// title.setAttribute('name', 'qqq');
// console.log(title);
// // title.removeAttribute('name');
// title.setAttribute('id', 'myId');

// let myId = document.getElementById('myId');
// console.log(myId);

// myId.style.color = 'red';

// if ( title.hasAttribute('name') ) {
//     console.log('Yes');
// }


// let message = '1';

// function message2(){
//     let message = '2';
//     console.log(message);
// }
// message2();
// console.log(message);

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
// function calcSum(a , b) {
//    // console.log(a + b);
//    return a + b;
// }

// // calcSum(1, 2);
// console.log(calcSum(2, 3));


// // // 7) Code after the return
// function test () {
//    console.log('Start function text()');
//    test2();
//    return;
   
//    function test2() {
//       console.log('The second function');
//       test3();
//       function test3() {
//          console.log('3');
//       }
//    }

//    console.log('The end of function test()');
// }
// test(); // Start function text()
//          // The second function
//          // 3


// // function expression
// let calcSum = function(a = 13, b) {
//    return a + b;
// }

// // calcSum(23, 2);
// console.log(calcSum(1, '5'));


// arrow function
// let someFunc = (a, b) => {
//    return a + b;
// }
// console.log(calcSum(21, 2));
// OR
// let calcSum = (a, b) => a + b;
// console.log(calcSum(21, 2));
// OR
// let calcSum = (a, b = 10) => a + b;
// console.log(calcSum(21)); // 31


// Псевдомассив arguments - т к к нему можно применять только свойство .length
// function test() {
//    console.log(arguments);
// }
// test(4, 5, 6);

// Массив ...args  - можно называть по-разному (...test, ...test2) - это просто название массива, который будет содержать параметры
// function testArg(...args) {
//     console.log(arguments);
//    console.log(args);
// }
// testArg(1, 2, 3);


// It can be written the function and we can refer to it at once, but in future we can not refer to it, because need to have name of this function
// void function() {
//     console.log('Function itself');
// }() // Function itself


// // Example HighOrder function
// function HighOrder(fn, count) {
//     for ( let i = 0; i < count; i++) {
//         fn(); // сколько передадим count, столько вызовется раз и функция
//     }
// }
// // we declare the function in advance
// function sayHello() {
//     console.log('Hello!');
// }

// HighOrder(sayHello, 2); // Hello!  x2
// // OR 
// // we can declare this functuion when we call it at the same time with () =>

// HighOrder( () => { console.log('Hello!') }, 5 ); // in this case, we give () => arrow function to the parametr fn mentioned in HighOrder function
// // OR- with default meaning (to display default meaning need to write undefined like the first parameter when we call function)
// function HighOrder(fn = () => {console.log('Asas')}, count) {
//     for ( let i = 0; i < count; i++) {
//         fn(); // сколько передадим count, столько вызовется раз и функция
//     }
// }

// HighOrder(undefined, 2); // 


// // Пример: 
// // нужна функция , чтоб возвращала новую функцию () = >, далее эту новую функцию мы вызываем и передаем ей разные параметры (имя)
// function getHello(userName) {
//     return () => { console.log('Hello, ' + userName + '!') };
// }
//  // now we create new functions where we call our returned new function and add userName parameter
//  let getHelloRoma = getHello('Roma');
//  // and call this function
//  getHelloRoma(); // Hello, Roma!
//  let getHelloMax = getHello('Max');
//  getHelloMax(); // Hello, Max!


// // // // Замыкание
// // // Замыкание - это механизм, который реализует каждая функция. Механизм заключается в том, что функция запоминает место, где она была создана и замыкает внутри себя верхний Scope (lexical environment). Иными словами, это способность функции запоминать lexical environment (это все переменные, которые храняться выше функции)
// // // сначала объфвляем переменные c and d;
// let c = 4;
// let d = 5;
// // запишем функцию test()
// function test() {
//     let a = 3;
//     console.log('Variable in test() - ' + c);
// }
// // test(); // 4
// // объявляем вторую функцию и в ней запускаем первую test()
// // и пытаемся поменять переменную С внутри второй функции
// function test2() {
//     let c = 5;
//     test();
// }
// test2(); // 4
// так как функция test() замкнула внутри себя Scope и с = 5 во второй функции никак не влияет на нее Scope () Lexical environment

// // // OR

// let c = 4;
// let d = 5;
// // запишем функцию test()
// function test() {
//     let a = 3;
//     console.log(c);
// }
// test(); // 4
// // объявляем вторую функцию и в ней запускаем первую test()
// // и пытаемся поменять переменную С внутри второй функции
// function test2() {
//     let c = 5;
//     // console.log(c); // 5
//     test();
// }
// // но здесь мы переопределяем с = 8 и переменная становиться равная 8
// c = 8;
// test2(); // 8
// // так как функция test() замкнула внутри себя Scope и с = 5 во второй функции никак не влияет на нее Scope () Lexical environment, но повлияет перемення c = 8 из глобального лексического окружения