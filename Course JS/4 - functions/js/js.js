// // 1) объявление функции
// function showMessage() {
//    console.log('YOur message');
// }

// // Что б она заработала , её нужно вызвать - при чем неважно где и в каком месте - до или после её объявления
// showMessage();

//----------------------------------------------------------
// // 2) Different functions can be created into other function
// function showMessage() {
//    let num1 = 10, num2;

//    // объявляем функции numOne() and numTwo()
//    function numOne() {
//       num1 = 10;
//    }
//    function numTwo() {
//       num2 = 20;
//    }
//    // we must call these to functions, if we don't do this, we won't get summ = 30, we will get NaN;
//    numOne();
//    numTwo();

//    let summ = num1 + num2;
//    console.log(summ);
// }
// showMessage(); // 30
// //but if we try to call internal function numOne() or numTwo() outside the parent function showMessage(), we get ERROR
// //numOne(); // error - numOne is not defined


//---------------------
// 3) Область видимости

// //EXTERNAL VARIABLE (we can call it inside and outside function)
// let message;

// function showMessage() {
//    message = 'External variable';
// }
// // showMessage();
// // console.log(message); // External variable

// // but if at the begining we call console.log and then call function - we get UNDEFINED, because
// // message hasn't had the meaning yet

// console.log(message); // undefined
// showMessage();


// //LOCAL VARIABLE (try to call local variable outside the function showMessage() and get an ERROR)
// function showMessage() {
//    //local variable (we can call it only inside this function showMessage())
//    let message = 'Local variable';
//    console.log(message);
// }
// showMessage(); // Local variable
// console.log(message); // ERROR - message is not defined


//----------------------------------
// 4) Аргументы
// function showMessage(first, second) {
//    let summ = first + second;
//    console.log(`Summ is ${summ}`);
// }
// showMessage(); //NaN - т.к. нет значений в переменных first and second
// showMessage(1, 3); //Summ is 4



// function showMessage(from, text) {
//    from = 'Sasha' + ': ' + text;
//    //from = from + ': ' + text;
//    console.log(from);
// }
// let from = 'Annya';
// showMessage(from, 'Hello!'); // 'Sasha: Hello!'
// console.log(from); // 'Annya'




// function calcSum(first, second, more, less) {
//    let summ = first + second;

//    // condition
//    if (summ > 3) {
//       more();
//    } else {
//       less();
//    }
// }

// //call functions
// function showMore() {
//    console.log(`Сумма > 3`);
// }
// function showLess() {
//    console.log(`Сумма < 3`);
// }
// // передаем только названия функции - без скобочек
// calcSum(1, 5, showMore, showLess);



//------------------------------
//Параметры по умолчанию
// function showMessage(userName, text = 'текст по умолчанию, поэтому второй парамерт можно гне указывать в функции') {
//    console.log('You entered into account like ' + userName + ': ' + text);
// }
// showMessage('Yohan'); //You entered into account like Yohan: текст по умолчанию, поэтому второй парамерт можно гне указывать в функции


// //Проверка на дефолтное значение параметра для старых версий JavaScript
// function showMessage(userName, text) {
//    if (text === undefined) {
//       text = 'если не указан параметр в функции, то это - значение по умолчанию';
//    }
//    console.log('You are: ' + userName + ' ' + text);
// }
// let userName = 'QQQ';
// showMessage('Anya'); // You are: Anya записываем значение по умолчанию тут
// //showMessage(userName, 'asdasdasda'); // You are: QQQ asdasdasda





//----------------------------------------------------------
// Возвращение значения -> return


// 1) simple summ of two variables
// function showSum(a, b) {
//    return a + b; // return their summ
// }

// let summ = showSum(4, 5); // call out function, give our meaning to the variables a and b, and return (result) is written into variable summ
// console.log(summ); // 9


// // 2) calling several return
// function showMessage() {
//    if (message >= 18) {
//       return true; // переходим к if после переменной
//    } else {
//       return confirm('А родители разрешили? Кнопка Ок - вернет true, Отмена - false'); // переходим к if после переменной
//    }
// }

// let message = prompt('How old are you?', );
// if (showMessage(message)) {
//    console.log("Access - we are glad to see you here"); // выполнится, если if (message >= 18) или else {} вернет true
// } else {
//    console.log('No access, sorry'); // выполнится, если функция вернет false
// }




//------------------------------------------------
// 11) Будет ли эта функция работать как-то иначе, если убрать else?

// let age = prompt('How old are you?', 20);

// function showMessage(age) {
//    if (age > 18) {
//       return true;
//    }
//    // else {
//    //    return confirm('А родители разрешили?');
//    // }
//    return confirm('А родители разрешили?'); // работать будет одинаково
// }

// if (showMessage(age)) {
//    console.log('+++');
// } else {
//    console.log('---');
// }




//---------------------------------------------------
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// function minValue(a, b) {
//    if (a > b) {
//       console.log(`min(${a}, ${b}) == ${b}`);
//       return 'a > b';
//    } else {
//       console.log(`min(${a}, ${b}) == ${a}`);
//       return 'b >= a';
//    }
// }
// let result =  minValue(18, 15);
// console.log(result); // min(18, 15) == 15
//                      // b >= a

// OR

// function showMin(a, b) {
//    if (a > b) {
//       return b;
//    } else {
//       return a;
//    }
// }

// console.log(showMin(21, 5)); // 5

// OR

// function showMin(a, b) {
//    return (a > b) ? b : a;
// }
// console.log(showMin(10, 11));





//--------------------------------------------------
// rewrite the function checkAge(age) in one line
// let age = prompt('Сколько лет?', 18);

// function checkAge(age) {
   // if (age > 18) {
   //   return true;
   // } else {
   //   return confirm('Родители разрешили?');
   // }
//    //1) on one line
   // return (age > 18) ? true : confirm('Родители разрешили?');
//    //2) with operator ||
   // return (age > 18) || confirm('Родители разрешили?');
// }

//  if (checkAge(age)) {
//     console.log('+++');
//  } else {
//     console.log('---');
//  }




//----------------------------------------------------------
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// let x, n;
// let enterValue = prompt('Введите число x', x);
// let enterPow = prompt('Введите степень n', n);

// function showPow(x, n) {
//    let result = x;

//    for (i = 1; i < n; i++) {
//       result *= x; // от 1 до < n, потому что уже на первом шаге идет х * х, а на втором (х * х) * х
//    }

//    console.log(result);
//    return result;
// }

// let x = prompt('Vvedite chislo', '');
// let n = prompt('Vvedite stepen', '');
// showPow(x, n);




//----------------------------------------------
// Сделайте функцию, которая возвращает куб числа. Число передается параметром.
// function rateValue(x) {
//    let res = x;
//    for (i = 1; i < 3; i++) {
//       res = res * x;
//    }
//    return res;
// }
// let x = prompt('Enter X', '');
// console.log(rateValue(x));

//OR

// function cube(num) {
//    return num * num * num;
// }
// let num = prompt('Enter the number', '');
// console.log(cube(num));
// console.log(typeof(cube(num)));



//-------------------------------------------------
// function square(x) {
//    return x * x;
// }
// let num = prompt('Enter the number', '');
// console.log(square(num));





//-------------------------------------------------
// function summ(x, y) {
//    return x + y;
// }
// let a = +prompt('Enter a', 0);
// let b = +prompt('Enter b', 0);
// console.log(summ(a, b));




//-------------------------------------------------
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function showRes(x, y, z) {
//    return (x - y) / z;
// }

// let a = +prompt('Enter a', 0);
// let b = +prompt('Enter b', 0);
// let c = +prompt('Enter c', 0);
// console.log(showRes(a, b, c));




//--------------------------------------------------
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке

// let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let a = +prompt('Enter the number of day', 0);
// let days = '';
// if (a >= 1 && a <= 7) {
//    days = (week[a-1]);
//    console.log(days);
// } else {
//    console.log('Wrong number');
// }

//let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// function showDay(x) {
//    if ( x < 1 || x > 7) {
//       return false;
//    } else {
//       return true;
//    }
// }

// let a = +prompt('Enter', 0);
// showDay(a);

// if (showDay(a) == true) {
//    console.log(week[a-1]);
// } else {
//    console.log('!!!!!!!!!!!!!!');
// }



// function showDay(x) {
//    if ( x < 1 || x > 7) {
//       return 'Wrong!!!!!!!!!';
//    } else {
//       return week[x-1];
//    }
// }
// // если 1 вводим -> (week[x-1]) -> week[0] -> Понедельник
// let a = +prompt('Enter', 0);
// console.log(showDay(a));




// let res = test(1, 2);
// console.log(res);
// function test(a, b) {
//    if (!a) {
//       return console.error('Error!!!'); //если нет параметра а, то выходим из функции
//    } else {
//       console.log(a, b);
//       return `${a} and ${b}`;
//    } 
// }




//-------------------------------------
// Function Expression
//  let square = function(x){
//    return x * x;
//  }
//  console.log(square(3)); //9



 //------------------------------------
 // самовызывающаяся функция
//  (function(msg){
//    console.log(msg);
//  })('Self-calling function'); // 'Self-calling function'


 //we can wrap all our code into self-calling function to avoid conflicts with out variables
//  (function(msg){
//    console.log(msg);

//    let square = function(x){
//       return x * x;
//     }
//     console.log(square(3));

//  })('Self-calling function');




// function test() { //создаем функцию  и присваиваем её значение переменной с именем  test
//    return ('Hello World'); 
// }
// console.log(test()); // Hello World

// let otherFunction = test; // далее копируем значение переменной в переменную otherFunction (без круглых скобок!!!)
// // otherFunction(); // теперь функцию можно вызвать с помощью обеих переменных otherFunction() или test()
// console.log(otherFunction()); // Hello World



//--------------------------------------------------------------
// Function hoisting
// function test() {
//    console.log(a);
//    var a = 'Some text';
//    // let a = 'Some text'; // error - т.к. let -> не всплывает наверх, а находится на своем месте
// }
// test(); // undefined, т.к. происходит всплытие (var a; становится перед вызовом console.log(a)), но по факту значение присваивается уже после console.log(a), поєтому получаем undefined - т.е. значения нет


// function foo(b) {
//    console.log(a);
//    if (b) {
//       var a = 'test';
//    }
// }
// foo('ddd', 'asd'); // undefined




//------------------------------------------------------
// arguments
// function test(a, b) {
//    // console.log(arguments[0]); // 10
//    // console.log(arguments[1]); // 12
//    console.log(arguments); // 0: 10, 1: 12
// }
// test(10, 12);



function summ() {
   let result = arguments[0] + arguments[1];
   console.log(result);
}
summ(20, 1); //21