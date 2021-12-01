// //-------------------------------------------------------------
// //trainings
// //-------------
// //-------------
// //-------------

// //1)
// // Задача. Создайте переменную str и присвойте ей значение 'abcde'.
// // Обращаясь к отдельным символам этой строки выведите на экран 
// // символ 'a', символ 'b', символ 'e'.
// let str = 'abcde';
// console.log(str[0], str[1], str[str.length - 1]);


// //2)
// //Напишите скрипт, который считает количество секунд в часе.
// let hour,
//    minute,
//    second = 1;
// minute = 60;
// hour = 60 * minute;
// console.log(hour);

// //3)
// // Переделайте приведенный код так, чтобы в нем использовались операции 
// // +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться.
// // Код для переделки: 
// /*
// var num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);*/
// var num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num ++;
// num --;
// console.log(num);


// //4)
// let a = 17,
//    b = 10,
//    c,
//    d = 7,
//    result;
// c = a + b;
// result = c + d;
// console.log(result);


// Работа со строками
//5) Создайте переменную str и присвойте ей значение 'Привет, Мир!'.
// Выведите значение этой переменной на экран.
// str = 'Hello, World!';
// console.log(str);

//6)
// let str1 = 'Hello,';
// let str2 = 'World!';
// let str = str1 + ' ' + str2;
// console.log(str);

//7)
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
// let Name = 'Geka';
// let age = 30;
// console.log(`Hello, ${Name}! and I am ${age} years old`);


// 8)
// Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение)
// цифр этого числа.
// let num = 12345;
// let res = 1;
// //num = num + ''; //OR 
// num = num.toString();
// res = res * num[0] * num[1] * num[2] * num[3] * num[4];
// console.log(res); // 120
// console.log(typeof(res)); // number
// // OR
// num = num.toString();
// for (let i = 0; i < num.length; i++) {
//    res = res * num[i];
// }
// console.log(res); //120


// 9)
// Создайте переменную, присвойте ей число. Возведите это число в квадрат.
// Выведите его на экран.
// let x = 10;
// x = x ** 2;
// console.log(x); // 100




// Arrays and Objects
// 1)
// // Дан массив с элементами 'Привет, ', 'мир' и '!'.
// // Необходимо вывести на экран фразу 'Привет, мир!'.
// let arr = ['Hello', ',', ' World', '!'];
// // let newArr = arr[0] + arr[1] + arr[2] + arr[3];
// // console.log(newArr);
// //OR
// let newArr = arr.join('');
// console.log(newArr);

// 2)
// // Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива 
// // слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').
// let arr = ['Hello', ',', ' World', '!'];
// arr[0] = 'Bye-bye';
// console.log(arr);

// 3)
// // Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран 
// // зарплату Пети и Коли.
// var obj = {
//    'Коля':'1000',
//    'Вася':'500',
//    'Петя':'200'
// };
// console.log(obj['Петя'], obj['Коля']); // 200 1000

// // 4)
// // Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);

// let arr2 = [];
// arr2[0] = 1;
// arr2[1] = 2;
// arr2[2] = 3;
// console.log(arr2);

// // 5)
// /*
// Задача. Дан многомерный массив arr:
// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// Выведите с его помощью слово 'голубой'.
// */
// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// console.log(arr['ru'][0]); // голубой
// console.log(arr['ru']['ru'.length]); //зеленый

// // 6)
// var arr = {
//    	'1':'Monday',
//    	'2':'Tuesday',
//       '3':'Wednesday',
//       '4':'Thursday',
//       '5':'Friday'
//    };
//    let day = 3;
//    console.log(arr[day]); //Wednesday

// // 7)
// // Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// console.log(arr[1][0]); //4

// // 8)
// // {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'
// let obj = {
//    js:['jQuery', 'Angular'],
//    php: 'hello',
//    css: 'world'
// };
// console.log(obj['js'][0]);

// 9)
// var arr = [
//    ["Пн", "Вт", "Ср"],
//    ['Mo', 'Tu', 'We']
// ];
// console.log(arr[0][0], arr[1][2]);



//---------------------------------------------------------
// Задачи на конструкции if-else, switch-case в JavaScript
// 1) Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = +prompt('Enter the number', '1');
// if (a > 10) {
//    console.log('Ok');
// } else {
//    console.log('Wrong');
// }



// 2)
// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число
// (в первую, вторую, третью или четвертую).
// let min = +prompt('Enter the minutes', 0);
// if (min < 0 || min > 59) {
//    console.log("Введите число от 0 до 59");
// } else {
//    if (min >= 0 && min <= 15) {
//       console.log('Первая четверть');
//    } else if (min > 15 && min <= 30) {
//       console.log('Вторая четверть');
//    } else if (min > 30 && min <= 45) {
//       console.log('Третья четверть');
//    } else {
//       console.log('Четвертая четверть');
//    }
// }



// 3)
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
// а если имеет значение 'en' – то на английском.
// Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.
// let lang = 'en'; //or 'en'
// let en_arr = ['Mo', 'Tu', 'We', 'Th', 'Fr'];
// let ru_arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];
// let arr;

//c)
// arr = {
//     'en' : ['Mo', 'Tu', 'We', 'Th', 'Fr'],
//     'ru' : ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'] 
//    };
// console.log(arr[lang]);

//a)
// if ( lang === 'ru' ) {
//    arr = ru_arr;
// } else if ( lang === 'en') {
//    arr = en_arr;
// } else {
//    console.error('Enter RU or EN only');
// }
// console.log(arr);

//b) switch - case
// switch (lang) {
//    case 'ru':
//       arr = ru_arr;
//       console.log(arr);
//       break;
//    case 'en':
//       arr = en_arr;
//       console.log(arr);
//       break;
// }




// 4)
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.

// a)
// let test = true;
// if ( test ) {
//    console.log('Верно');
// } else {
//    console.log('Неправильно');
// }

// b)
// let test = '';
// test ? console.log('Верно') : console.log('Неправильно');




// 5)
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
// то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a = 09,
//    b = 0;
// if ( (a > 2 && a < 11) || (b >= 6 &&  b < 14) ) {
//    console.log('Верно');
//    console.log(a);
// } else {
//    console.log('Wrong');
// }



//6)
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
//Если она имеет значение '1', то в переменную result запишем 'зима',
//если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let num = 1;
// let res;
// switch (num) {
//    case 1 :
//    res = 'Winter';
//    break;
//    case 2 :
//    res = 'Spring';
//    break;
//    case 3 :
//    res = 'Summer';
//    break;
//    case 4 :
//    res = 'Autumn';
//    break;
// }
// console.log(res);




// 7)
// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = 'abcde';
// if ( str[0] === 'a' ) {
//    console.log('Yes');
// } else {
//    console.log('NO');
// }



// 8)
// Дана строка с цифрами, например, '12345'.
// Проверьте, что первым символом этой строки является цифра 1, 2 или 3.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = '12345';
// if ( str[0] == 1 || str[0] == 2 || str[0] == 3) {
//    console.log('Yes'); // yes, because '1' == 1 it's true
// } else {
//    console.log('NO');
// }
// console.log(str[0]); // '1'
// console.log(typeof(str[0])); // string




// 9)
// Дана строка из 3-х цифр. Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.
// let str = '123';
// let res = 0;
// res = (+str[0]) + (+str[1]) + (+str[2]);
// // //OR with for()
// // for (let i = 0; i < str.length; i++) {
// //    //a)
// //    // res = res + Number(str[i]);
// //    //b)
// //    // res = res + (+str[i]);

// //    // console.log(res);
// //    // console.log(typeof(res));
// // }
// console.log(typeof(res));
// console.log(res);





//-------------------------------------------
// Задачи на циклы while, for в JavaScript
//-------------------------------------------

// 10)
// Выведите столбец чисел от 1 до 50.
// let num = 1;
// while ( num <= 50) {
//    console.log(num);
//    num++;
// }

// let i;
// for ( i = 1; i <= 50; i++ ) {
//    console.log(i);
// }



// 11) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }



// 12)
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [2, 3, 4, 5];
// let res = 1;
// for (let i = 0; i < arr.length; i++) {
//    res = res * arr[i];
// }
// console.log(res); // 120


// //13)
// // Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
// // С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'
// let obj = { 
//    'Минск' : 'Беларусь',
//    'Москва' : 'Россия',
//    'Киев' : 'Украина'
//  };

//  for (let nnn in obj) {
//    // console.log(nnn); //'Минск' / 'Москва' / 'Киев'
//    // console.log(obj[nnn]); //'Беларусь'/ 'Россия' / 'Украина'
//    console.log(nnn + ' - это ' + obj[nnn]);
// }



// 14)
// Выведите столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i <= 100; i++) {
//    if ( i % 2 == 0 ) {
//       console.log(i);
//    } else {
//       continue;
//    }
// }


// 15)
// С помощью цикла найдите сумму чисел от 1 до 100.
// let res = 0;
// let i;
// for (i = 1; i <= 100; i++) {
//    res = res + i;
// }
// console.log(res); // 5050


// 16)
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }


// // 17)
// // Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//    res = res + arr[i];
// }
// console.log(res); // 15


// // 18)
// // Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for (let i in obj) {
//    // console.log(i); // keys
//    console.log(obj[i]); // value
// }	


// 19)
// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'
// С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
// var obj = {
//    V: 300,
//    P: 400,
//    K: 200
// };
// for (let i in obj) {
//    console.log(i + ' - зарплата ' + obj[i] + ' долларов.');
// }



// 20)
// Дан массив с элементами 2, 5, 9, 15, 0, 4.
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива,
// которые больше 3-х, но меньше 10.
// let arr = [2, 5, 9, 15, 0, 4];
// let i;
// for ( i = 0; i < arr.length; i++) {
//    if ( arr[i] > 3 && arr[i] < 10 ) {
//       console.log(arr[i]);
//    } else {
//       continue;
//    }
// }



// 21)
// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
// let arr = [2, 5, 0, -10, - 1];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//    if ( arr[i] >= 0) {
//       res = res + arr[i];
//    } else {
//       continue;
//    }
// }
// console.log(res);



// 22)
// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть 
// ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!'
// и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//    if ( arr[i] == 4) {
//       console.log('True'); // "True"
//       console.log(arr[i]); // 4 (index)
//       break;
//    } 
//    else {
//       continue;
//    }
// }



// 23)
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//    if ( arr[0] == 1 || arr[0] == 2 || arr[0] == 5 ) {
//       console.log(arr[i]);
//    }
// }




// 24)
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = '';
// for (let i = 0; i < arr.length; i++) {
//    res = res + '-' + arr[i];
// }
// res = res + '-';
// console.log(res);



// 25)
// Составьте массив дней недели.
//С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// console.log("%cThis is a green text", "font-style:italic");

// let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// for (let i = 0; i < arr.length; i++ ) {
//    if ( arr[i] === 'Saturday' || arr[i] === 'Sunday' ) {
//       console.log(`%c${arr[i]}`, 'font-weight: 700');
//    }
//    else {
//       console.log(arr[i]);
//    }
// }



// 26)
// Составьте массив дней недели.
// С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.
// Текущий день должен храниться в переменной day.
// let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = new Date();
// let today = day.getDay();
// // console.log(today);

// for (let i = 0; i < arr.length; i++) {
//    if ( i == today ) {
//       console.log(`%c${arr[i]}`, 'font-weight: 700');
//    } else {
//       console.log(arr[i]);
//    }
// }



// 27)
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого
// (итерация - это проход цикла), и запишите его в переменную num.
// let n = 100;
// let num = 0;

// // while ( n > 50 ) {
// //    n = n / 2;
// //    num = num + 1;
// // }

// for (num; n > 5; num++) {
//    n = n / 2;
// }

// console.log(n);
// console.log(num);



//Functions
// 28)
// Написать функцию, которая принимает два числа и возращает результат их умножения
// // let a = +prompt('The first number', 0);
// // let b = +prompt('The second number', 0);

// // function multiplication() {
// //    return a * b;
// // }
// // console.log(multiplication(a, b));



// 29)
// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку
// "Привет Иван Петров с возрастом 17 лет"
// (только здесь данные, которые были переданы в функцию)
// // function initials(userName, userSurname, age) {
// //    return `Привет ${userName} ${userSurname} с возрастом ${age} лет`;
// // }
// // // initials('Иван', 'Петров', 17);
// // console.log(initials('Иван', 'Петров', 17));



// 30)
// Написать функцию, которая принимает пол человека ('M','F') в виде строки,
//результат функции возвращает строку "Ваш пол мужской"
// (или женский) или же "Ваш пол не опеределен"
// let gender = prompt('Ваш пол: ', '');
// gender = gender.toUpperCase();
//  function yourGender() {
//     if ( gender === 'М' ) {
//        console.log('Ваш пол мужской');
//       return 'Ваш пол мужской';
//     } else if ( gender === 'Ж' ) {
//       console.log('Ваш пол женский');
//       return 'Ваш пол женский';
//     } else {
//       console.log('Ваш пол средний');
//       return 'Ваш пол средний';
//     }
//  }
//  yourGender();
//  console.log(gender);

// // OR

//  function yourGender(gender) {
//     if ( gender === 'М' ) {
//        console.log('Ваш пол мужской');
//       return 'Ваш пол мужской';
//     } else if ( gender === 'Ж' ) {
//       console.log('Ваш пол женский');
//       return 'Ваш пол женский';
//     } else {
//       console.log('Ваш пол средний');
//       return 'Ваш пол средний';
//     }
//  }
//  yourGender('М');




// 31)
// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели.
// let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// function days(number) {
//    number = number - 1;
//    console.log(arr[number]);
//    return arr[number];
// }
// days(7);



// 32)
// Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток
// (Доброе утро\день\вечер\ночи Иван)
// let timeNow = new Date();
// let hours = timeNow.getHours();
// console.log(hours); // we get current time from the obj Date timeNow

// function hello(name) {
//    if ( hours >= 5 && hours < 12 ) {
//       console.log(`Доброе утро ${name}`);
//       return `Доброе утро ${name}`;
//    } else if ( hours >= 12 && hours < 19 ) {
//       console.log(`Добрый день ${name}`);
//       return `Добрый день ${name}`;
//    } else {
//       console.log(`Доброй ночи ${name}`);
//       return `Доброй ночи ${name}`;
//    }
// }
// hello('Иван');



// 33)
// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
// (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
// let i;
// function ages() {
//    for (i = 1; i <= 100; i++) {
//       if ( i >= 1 && i < 50 ) {
//          console.log(`${i} - ребенок`);
//          // return `${i} - ребенок`;
//       } else if (i >= 50 && i <= 100) {
//          console.log(`${i} - зрелый`);
//          //return `${i} - зрелый`;
//       }
//    }
// }
// ages();

// // OR

// function ages(n) {
//      for (let i = 1; i <= n; i++) {
//          console.log(`${i} - ` + test(i));
//      }
// }

// function test(i) {
//    if ( i <= 5 ) {
//       return 'Child';
//    } else if ( i > 5 && i < 8 ) {
//       return 'Adult';
//    } else {
//       return 'Old';
//    }
// }

// ages(100);
// // test();



// 33) ПРоверка на простые числа через 2 функции
// function simple(n) {
//    for (let i = 2; i < n; i++) {
//       if (!isSimple(i)) { // !true == false
//          continue;
//       }
//       console.log(i);
//    }
// }

// function isSimple(n) {
//    for (let i = 2; i < n; i++) { // 2 < 3 => 3 % 2 == 0 => 2++ => 3 < 3 (2 -> true, 3 -> true)
//       if ( n % i == 0 ) {
//          return false;
//       }
//    }
//    return true;
// }

// simple(100);
// isSimple();


// 34)
// Вычислить сумму  єлементов массива через 2 фукнции
// let arr = [ [1, 2, 1], [10, 11, 10] ];
// function commonSum() {
//    let sum = 0;
//    for ( let i = 0; i < arr.length; i++ ) {
//       // sum = sum + (result of 2-nd function, that counts summ of internal elements of array);
//       sum = sum + intSum(arr[i]);
//    }
//    console.log(sum); // 35 it can be written also like (return sum, but then we must invoke it with console.log(commonSum()); instead of commonSum();)
// }

// // function that counts summ of internal elements of array - seperately [1, 2, 1] and [10, 11, 10]
// function intSum(intArr) {
//    let intSum = 0;
//    for (let i = 0; i < intArr.length; i++) {
//       intSum = intSum + intArr[i];
//    }
//    console.log(intSum); // (1+2+1 = 4) and (10+11+10 = 31)
//    return intSum; // this sum we transfer into commonSum()
// }
// commonSum();


// 35) Вывести сумму чисел (через фукнцию) в div на страничке
// function summ(elem, a, b) {
//    document.querySelector(elem).textContent = a + b;
// }
// summ('.out', 10, 20); // there is 30 in the div.out

// OR

// function summAB(elem, a, b) {
//    elem.textContent = a + b;
// }
// let summ = document.querySelector('.out2');
// summAB(summ, 30, 20);

// OR

// Параметры по умолчанию (если хотим пропустить некоторые значения) - ставят в конец 
// т.к. если поставить их в начало, то перезатрем при вызове агрументоами, кот. подставляются сначала

// function lastArg(a, b, elem = '.out') {
//    document.querySelector(elem).textContent = a + b;
// }
// lastArg(10, 1); // теперь можно упустить значение elem (или изменить его стандартное значение), т.к. оно есть по умолчанию и мы его не перезатрем

//OR

//Можно обращаться к конкретному аргументу по очереди с помощью конструкции,
// // похожей на массив (но это не массив!)
// function lastArg(a, b, elem = '.out') {
//    console.log(arguments);
//    document.querySelector(elem).textContent = arguments[0] + b; // arguments[0] = a (первый элемент в конструкции)
// }
// lastArg(23, 1); // 24


//OR

// function lastArg() {
//    console.log(arguments);
//    document.querySelector(arguments[2]).textContent = arguments[0] + arguments[1]; // arguments[0] = a (первый элемент в конструкции)
// }
// lastArg(3, 1, '.out'); // теперь можно вообще без параметров, но так читабельность падает в разы и никто не делает, но так можно!
