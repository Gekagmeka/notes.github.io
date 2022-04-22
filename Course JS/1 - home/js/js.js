// let price;
// const MAX_VALUE;
// const USER_NAME;
// let userInfo;

//What will be in console?
//----------------------------
//1)
// console.log(test);
// var test = 'string';
// it will be 'underfined, because var is floating up before the console.log

//2)
// var x = 'string';
// var x = 'string № 2';
// console.log(x);
//it will be 'string № 2', because the second var x -> overrides the first one

//3)
// console.log(test);
// let test = 'string';
//it will be mistake - because 'let' is not float up

//4)
// const X = 'string';
// X = 'string 2';
// console.log(X);
//it will be NO 'string' - it will be mistake - because X is CONSTANT, and you can't change it

//5)
// let someVeriable = 15;
// let someVeriable = 10;
//it will be mistake, because 'let' has already been declared



//----------------------------
//1)
// let str1 = 'There is a str one',
//    str2 = 'There is the second str';
//    someValue = 2020;

//    console.log(str1.length); //18
//    console.log(str1[1]); //h (the 1 index - and we start from 0)
//    console.log(str1.toLowerCase());
//    console.log(str1.toUpperCase());
//    console.log(str1.indexOf('is')); //6
//    console.log(str1.indexOf('e')); //2
//    console.log(str1.lastIndexOf('e')); //17 - the last entering
//    console.log(str1.substr(5, 2)); // _i (5 - from what index, 2 - how much symbols)
//    console.log(str1.substring(5, 10)); //_is_a (10 - to what index , do not including it)
//    console.log(str1.slice(5, 10)); //_is_a (10 - to what index , do not including it)
//    console.log(str1.slice(5, -1)); //_is_a_str_on (we can cut from the end of the row)
//    console.log(str1 + str2); //There is a str oneThere is the second str
//    console.log(str1.charCodeAt(0)); //84
//    console.log('a' > 'A'); //true - string and string are compared like strings
//    console.log('ab' > 'aa'); //true
//    console.log("2" < '11'); //false - need use ASCII table 2=50 and 1 = 49
//    console.log("23" > '231'); //false
//    console.log(2 > '11'); //false - munbers and string are compared like numbers
//    console.log(someValue.toString()); // number is converted into string '2020'
//    console.log(someValue + ''); // to add empty string to number = string result



//Strings - tasks
//----------------------------
// let string = 'some test string';

// //1) the first and the last letter of the row
// console.log(`${string[0] + ' and ' + string[string.length - 1]}`);
// console.log(string[0], string[string.length -1]); //s g
// //2) the first and the last letter - need to be done Uppercase
// console.log(`${string[0] + string[string.length - 1]}`.toUpperCase());
// console.log(string[0].toUpperCase(), string[string.length -1].toUpperCase()); // S G
// //3) find placement of the string 'string'
// console.log(string.indexOf('string'));
// console.log(string.indexOf('string')); //10
// //4) find placement of the second space
// console.log(string.indexOf(' ', 5));
// console.log(string.indexOf(' ', 5)); //9
// //5) to get string from the 5th word (length 4 words)
// console.log(string.substring(5, 9));
// console.log(string.substr(5, 4));
// console.log(string.slice(5, -7));
// console.log(string.substr(5, 4)); // test
// //6) to get string from the 5th to 9th words
// console.log(string.substring(5,9));
// console.log(string.substring(5, 9)); //test
// //7) to get srting without 6 symbols at the end
// console.log(string.slice(0, -6));
// console.log(string.slice(0, -6)); //some_test_
// //8) to get string from summ of numbers 20 and 16
// let a = 20;
// let b = 16;
// a = a.toString();
// b = b.toString();
// let c = a + b;
// console.log(c); //2016

// // 9) Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
// with methos .replace() and global search /str/g
// let str = 'aaa@bbb@ccc';
// str = str.replace('@', '!'); // only the first coincidence aaa!bbb@ccc
// str = str.replace( /@/g, '!'); // global search aaa!bbb!ccc
// console.log(str);

// // 10) Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// let str = 'aaa bbb ccc';
// console.log(str.substr(4, 3));
// console.log(str.substring(4, 7));
// console.log(str.slice(4, -4)); // or (4, 7)

// // 11) Задача. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'
// method .split() -> to make string into the array
// method .join() -> to make array into str
// method .reverse() -> to reverse elements of array
// *Test
// let date = '31/12/2025';
// // date = date.replace(/\//g, '-');
// // console.log(date, typeof date);

// let arr = date.split('/');
// console.log(arr);
// arr = arr.reverse();
// arr = arr.join('-');
// OR
// arr = arr.reverse().join('-');
// console.log(arr, typeof arr);
// OR
// let newStr = arr[2] + '-' + arr[1] + '-' + arr[0];
// console.log(newStr, typeof newStr);

// // 12) Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
// let str = 'я учу javascript!';
// console.log(str.indexOf('учу'));

// // 13) Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
// let n = prompt('Enter the number', 0);
// let str = 'some text is here';
// let result = '';
// console.log(str.length);
// if ( str.length > n ) {
//     for ( let i = 0; i <= n; i++) {
//         result = result + str[i];
//     }
//     result = result + '...';
// } else {
//     result = result + str;
// }
// console.log(result, typeof result);

// // 14) Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены
// let str = 'Я-учу-javascript!';
// console.log(str);
// str = str.replace(/-/g, '!');
// console.log(str);

// // 15) Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
// let str = 'я учу javascript!';
// str = str.split(' ');
// console.log(str);

// // 16)  Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// str = str.split('');
// console.log(str);

// // 17) В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
// let date = '2025-12-31';
// date = date.split('-').reverse();
// // let res = date[0] + '.' + date[1] + '.' + date[2];
// // OR
// date = date.join('.');
// console.log(date);

// // 18) Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
// let arr = ['я', 'учу', 'javascript', '!'];
// arr = arr.join('+');
// console.log(arr);

// // 19) Преобразуйте первую букву строки в верхний регистр.
// let str = 'some string';
// str = str.replace(str[0], 'S');
// console.log(str);

 // // 21) Преобразуйте первую букву каждого слова строки в верхний регистр.
// let str = 'some string text';
// str = str.split(' ');
// for (let i = 0; i < str.length; i++) {
//     // str = str.slice(1);
//     // str[i] = str[i].slice(1);
//     str[i] = str[i].replace(str[i][0], str[i][0].toUpperCase());
//     console.log(str[i]);
// }
// str = str.join(' ');
// console.log(str);
// // OR
// for (let i = 0; i < str.length; i++) {
//     // str = str.slice(1);
//     // str[i] = str[i].slice(1);
//     str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//     console.log(str[i]);
// }
// str = str.join(' ');
// console.log(str);

 // // 20) Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
//  let str = 'var_test_text';
// str = str.split('_');
//  console.log(str);
//  for (let i = 0; i < str.length; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//     // console.log(str[i]);
//  }
//  str = str.join('');
//  let newStr = str[0].toLowerCase() + str.slice(1);
//  console.log(newStr);
// // OR
// let newStr = '';
// let i = 0;
// while( i < str.length ) {
//    if( str[i] === '_' ) {
//       newStr = newStr + str[i + 1].toUpperCase();
//       i += 2;
//    } else {
//       newStr = newStr + str[i];
//       i++;
//    }
// }
// console.log(newStr);
// // OR
// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//     if ( str[i] === '_' ) {
//         newStr = newStr + str[i + 1].toUpperCase();
//         i++;
//     } else {
//         newStr = newStr + str[i];
//     }
// }
// console.log(newStr);



//-------------------------
//Numbers - tasks
//1)Pi and round it to 2 values
// let pi = Math.PI;
// pi = pi.toFixed(2); //3.14
// console.log(pi);
//2) min and max value
// console.log(Math.min(10, 115, 12, 90, 50)); //10
// console.log(Math.max(10, 115, 12, 90, 50)); //115
//3) random number and round it
//let rand = Math.random();
// console.log(rand);
// console.log(rand.toFixed(2));
//[0, 10)
// console.log(rand * 10);
// //[0, 10) - integer number (without float numbers)
// console.log((rand.toFixed(1) * 10));

//(min, max)
//Math.random() * (max - min)  + min;

//[min, max]
// Math.floor( Math.random() * (max - min + 1) ) + min; (without float number)
//[5, 10]
//console.log(Math.floor((rand) * (10 - 5 + 1)) + 5);

//4) to check result of 0.6 + 0.7
//console.log((0.6 + 0.7).toFixed(2)); // 1.30 - it is string!
//console.log(+(0.6 + 0.7).toFixed(2)); //1.3 - it is number

//5) to get number from the string '100$'
//let $ = '100$';
//console.log(parseInt($)); //100 - is number now

// 6)  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. Показать решение.
// let a = 10;
// let b = 5;
// console.log(a % b);

 // 7) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// if ( a % b === 0 ) {
//    console.log('yes');
// } else {
//    console.log('no');
// }

// 8)  Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых
// let num = 379;
// console.log((Math.sqrt(num)).toFixed(), typeof((Math.sqrt(num)).toFixed()));
// console.log(Math.round(Math.sqrt(num)), typeof(Math.round(Math.sqrt(num))));

// // 9)  Выведите на экран случайное целое число от 1 до 100.
// let a = Math.floor(Math.random() * (100 - 1) + 1);
// console.log(a);

// // 10) Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while)
// let arr = [];
// let a;
// for (let i = 0; i < 10; i++) {
//    a = Math.round(Math.random() * 10);
//    // arr = arr + i;
//    arr[i] = a;
//    // console.log(a, typeof a);
// }
// // console.log(a);
// console.log(arr, typeof arr);

// // 11) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// // 12) Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
// let arr = [12, 15, 20, 25, 59, 79];
// console.log(arr);
// let res = 0;
// let n = 0;
// for ( let i = 0; i < arr.length; i++) {
//    res = res + arr[i];
//    n++;
// }
// res = res / n;
// console.log(res, typeof res); // 35 (all right)

 // // 13) Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
// let a = 4;
// let res = 1;
// for ( let i = 1; i <= a; i++ ) {
//    // console.log(i);
//    res = res * i;
// }
// console.log(res);

// let num1 = 3;
// let num2 = --num1;
// console.log(num1);
// console.log(num2);

// let num1 = 3;
// let num2 = num1--;
// console.log(num1);
// console.log(num2);

// let num1 = 3; // 1-3
// num1++; // 1-4
// let num2 = num1--; // 2-4 1-4
// console.log(num1++); // 1-3
// console.log(--num2); // 2-3

// let num1 = 3;
// num1++;
// let num2 = num1--;
// console.log(num1++); // 3
// console.log(--num2); // 3
// console.log(num2); // 3
// console.log(num1); // 4

// let num1 = 3;
// num1++;
// let num2 = --num1; // 2-3 1-3
// console.log(num1++); // 3
// console.log(--num2); // 2
// console.log(num2); // 2
// console.log(num1); // 4

// // 14) С помощью функции prompt спросите у пользователя сторону квадрата. Выведите на экран площадь введенного квадрата
// let question = +prompt('Enter number', 0);
// let res = question * question;
// console.log(`square with side a = ${question} cm is equal to ${res} cm^2`);



//--------------------------
//Objects - tasks
// let obj = {
//    product: 'iphone',
//    price: 1000,
//    currency: 'dollar',
//    details: {
//       model: 'HP',
//       color: 'black'
//    }
// };

// console.log(obj.product,
//             obj['price'],
//             obj['currency'],
//             obj['details']['model'],
//             obj.details['color']); //iphone 1000 dollar HP black




//--------------------------
// assignment - tasks
//1) to write in a short way
// let a, b, c, x, y, z, i;
// a += 10; //a = a + 10;
// b *= 18;
// c -= 10;
// x += a;
// y = 10;
// i = 2;
// i *= 5 * y; //(the first will be (5 * y), and then i*=50 , i.e. i = i * 50;)
// console.log(i); // 100
// //2)
// // i **= 2;
// console.log(Math.pow(i, 2));


//--------------------------
// let a = 5;
// console.log(a++);// 5
// console.log(++a); //6
// console.log(`Префиксный инкремент ${++a}`); //6

// let res_1 = 20 - 2 + 'ZZZ' + 4 - 3; //NaN
// let res_2 = 20 - 2 + 'ZZZ' + 4; //'18ZZZ4'
// console.log(res_1, res_2);

// let res_3 = +'25';
// console.log(res_3, typeof (res_3));



//--------------------------
//operator ||, &&, !, !! - tasks
// console.log(1 || 0); //1
// console.log(true || 'free'); //true
// console.log(null || 58); //58
// console.log(null || 'free' || 0); // 'free'
// console.log(undefined || '' || null || 0); // 0 (because there is no any true => the last value returns)

// // operator && has bigger priority than ||
// console.log('Free' && 0 && 2 && 3); //0, because it's the first false - and the process will be stopped
// console.log(1 && 2 && null);//null
// console.log('15' && '42');//'42' - there are all true - that why is showed the last meaning
// console.log(1 && 0 || 2 && 1);//1, because && > ||

// // operator ! has the biggest priority
// console.log(!null); //true
// console.log(!1); //false
// console.log(!''); //true
// console.log(!'Free'); //fasle
// console.log(!true && 58 || 18 && !1); // false, because !true || !1 => false

// // !! - to transform to Boolean type like a function Boolean()
// console.log(!!'Free'); // true
// console.log(Boolean('Free'));// true

// // concatenate with 0
// let userName;
// console.log(userName ?? 'Without name'); //userName doesn't have meaning (undefined), that's why -> 'Without name'
// userName = 10;
// console.log(userName ?? 'Without name'); //10, because the first argument is and it is not equal to null or undefined

// let x = true && false;
// console.log(x); //false
// x = '' && 'str';
// console.log(x); //''
// x = 'str' && 0 && '';
// console.log(x); // 0

// let nameU = 'kitten',
//       otherName, str;
//       str = otherName && nameU;
// console.log(str); //undefined, because otherName doesn't have meaning -> processing is stopped and show us meaning

// console.log('35' + '22'); //3522
// console.log('35' - '22'); //13
// console.log('35' + - '22'); //35-22
// console.log('35' * '2'); //70
// //console.log('558' > 22++); // error! because 22++ cann't be!  operator ++ could be added only to variables

// let userCount = 0;
// let newUser = userCount++;
// console.log(newUser); // 0, newUser gets the basic userCount's value, before the increment

// console.log(!false && 11 || 18 && !''); // 11, the first true

// let n = 0;
// console.log(n ?? 'without name'); // 0, because it is defined




//--------------------------
// document.write('<b>some text</b>');
// // 1) Выведите в окно браузера столбец чисел от 1 до 5.
// let i;
// for (i = 1; i <= 5; i++) {
//    // console.log(i);
//    document.write(`${i}<br />`);
// }

// // 2) Пусть дана переменная a со стороной квадрата. Найдите площадь квадрата и запишите ее в переменную s. Выведите содержимое этой переменной на экран.
// let a = '10 см';
// a = parseInt(a);
// let s = Math.pow(a, 2);
// document.write(s);



// --------------------------
// ПРоверка ошибок
// // // 1)
// let num1 = 1;
// let num2 = 2;
// console.log(`сумма: ${num1 + num2}`);

// // // 2) Код должен находить сумму чисел:
// let a = 1;
// let b = 2;
// console.log(a + b);

// // 3) Код должен находить сумму цифр числа:
// let num = '123';
// let sum = parseInt(num[0]) + parseInt(num[1]) + parseFloat(num[2]);
// console.log(sum, typeof sum);

// // 4) Код должен вывести первую цифру числа
// let num = 123;
// num = num.toString();
// console.log(num[0]);

// // 5) Код должен был вывести в консоль число 1, но выводит 0:
// let a = 0;
// console.log(++a);

// // 6) Код должен вывести количество цифр в числе:
// let num = 123;
// num = num + '';
// console.log(num.length);

// // 7) Код должен найти количество секунд в сутках:
// let a = 24 * 60 * 60;
// console.log(a);

// // 8) Код должен вывести количество цифр в числе:
// let num = 123;
// let str = String(num);
// console.log(str.length);

// // 9) Код должен вывести последнюю цифру числа:
// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// // 10) Код должен вывести количество цифр в числе:
// let num = 123;
// let str = String(num);
// console.log(str.length);

// // 11) Код должен вывести последнюю цифру числа:
// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// // 12) Код должен найти сумму чисел:
// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);
// console.log(s);

// // 13) Код должен найти сумму чисел:
// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(aaa + bbb + ccc);


// // 16) Найдите количество секунд в 30 сутках.
// let sec = 1;
// let min = 60 * sec;
// let hour = 60 * min;
// let day = 24 * hour;
// let day_30 = 30 * day;
// console.log(day_30);




// ----------------------
// array = [];
// let arr = ['a', 'b', 'c'];
// console.log(arr);
// alert(arr);

// // 2)
// let arr = ['a', 'b', 'c'];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr[0]);

// // 3) Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'
// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr.join('+'));

// // 4) Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
// let arr = [1, 2, 3];
// let sum = 0;
// for ( let i = 0; i < arr.length; i++ ) {
//     sum = sum + arr[i];
// }
// console.log(sum);
// // console.log(arr[0] + arr[1] + arr[2]);

// // 5) Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// let arr = [2, 5, 3, 9];
// let res = 0;
// console.log(arr[0] * arr[1] + arr[2] * arr[3]);

// // 6) Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3. (Элементы массивов, в отличие от символов строк, можно изменять!!!)
// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);

// // 7) Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
// let arr = [21, 3, 5];
// arr[0] = arr[0] + 3;
// arr[1] = arr[1] + 3;
// arr[2] = arr[2] + 3;
// console.log(arr); // [24, 6, 8]

// // 8) Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
// let arr = [1, 2, 3];
// arr[0]++;
// ++arr[1];
// console.log(arr[0]++, ++arr[1], arr[2]);

// // 9) Добавление элементов в пустой массив
// let arr = []; // создаем пустой массив
// arr[0] = 'a'; // в ключ 0 добавим элемент 'a'
// arr[1] = 'b'; // в ключ 1 добавим элемент 'b'
// arr[2] = 'c'; // в ключ 2 добавим элемент 'c'
// console.log(arr); // выведет ['a', 'b', 'c']

// // 10) Добавьте ему в конец элементы 4 и 5.
// let arr = [1, 2, 3];
// console.log(arr.length);
// arr[3] = 4;
// arr[4] = 5;
// arr[arr.length] = 0;
// console.log(arr);

// // 11)
// let arr = [1, 2, 3];
// arr[4] = 5;
// console.log(arr); // [1, 2, 3, empty, 5]

// // 12) Length of this array?
// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length); // 9