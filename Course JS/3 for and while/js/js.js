//-------------------
//1...5

//let num = 0;

// while (num < 5) {
//    num++;
//    console.log(num); //1,2,3,4,5
// }

// let num_2;
// for (num = 0; num < 5; num++){
//    num_2 = num + 1;
//    console.log(num_2);
// }

// for (num; num < 6; num++) {
//    if (num == 0){
//       continue;
//    }
//    console.log(num);
// }

// for (num = 1; num <= 5; num++) {
//    console.log(num);
// }

// let i = 0;
// while (i < 5) {
//    i++;
//    console.log(i);
// }



//----------------------------------
// 2)
// let num = 8;
// while(num) {
//    console.log(num);
//    num--;
// } // 1



//---------------------------------
// 3)
// for (let num = 0; num < 3; num++) {
//    console.log(`Number: ${num}`); // NUmber: 0, Number: 1, Number: 2
// }

// let num_2 = 0;
// while (num_2 < 3) {
//    console.log(`Number: ${num_2}`);
//    num_2++;
// }


//----------------------------------
// 4) to break external for, if internal size == 4
// for (let num = 0; num < 2; num++) {
//    for (let size = 0; size < 5; size++) {
//       console.log(size); //2 раза выполниться внутренний код (0..4 -> 2 раза выведется)
//    }
// }

// for (let num = 0; num < 2; num++) {
//    for (let size = 0; size < 5; size++) {
//       if (size == 4) {
//          break;
//       }
//       console.log(size); // 0,1,2,3,0,1,2,3 т.е. 2 итерации (по 0,1,2,3) так как num < 2
//    }
// }

// for (let num = 0; num < 2; num++) {
//    for (let size = 10; size < 15; size++) {
//       if (size == 14) {
//          break;
//       }
//       console.log(size); // 10,11,12,13,10,11,12,13 т.е. 2 итерации (по 10,11,12,13) так как num < 2
//    }
// }


// let list = ['one', 'two', 'three'];

// for (let i = 0; i < list.length; i++) {
//    console.log(list[i]); // one, two, three
//    list[i] = list[i].toUpperCase();
// }
// console.log(list); // ['ONE', 'TWO', 'THREE']


// 5) Method .split() - divides string into the array
// let str = 'I am in the easycode';
// let str_2,
//       str_3;
// let arr = str.split([' ']);
// console.log(arr); // ['I', 'am', 'in', 'the', 'easycode']

// let i;
// for (i = 0; i < arr.length; i++) {
//    // console.log(arr[i]);
//    //arr[i] = (arr[i].charAt(0)).toUpperCase() + arr[i].slice(1); //(I a i t e)

//    str_2 = arr[i].charAt(0);
//    // choose the first index in the words (I a i t e)
//    str_2 = str_2.toUpperCase();
//    //console.log(str_2); // I A I T E

//    str_3 = arr[i].slice(1); // cut the first letter in every word
//    //console.log(str_3);

//    arr[i] = str_2 + str_3;
//    console.log(arr[i]);
// }
// //arr = String(arr);
// //console.log(arr); //I,Am,In,The,Easycode (string) - but it is a problem to delete , between the words
// //OR
// //arr = arr.join(); //I,Am,In,The,Easycode (string)
// arr = arr.join(' '); //I Am In The Easycode (string with space betweem the words)
// console.log(arr);

// this task but with while()
// let str = 'I am in the easycode';
// let i = 0;
// let arr = str.split([' ']);
// let str_2;
// // console.log(arr);
// //console.log(arr.length); //5

// while(i < arr.length) {
//       str_2 = arr[i].slice(1);
//       arr[i] = (arr[i].charAt(0)).toUpperCase() + str_2;
//       i++;
//       // console.log(arr[i]);
// }

// arr = arr.join([' ']);
// console.log(arr); // I Am In The Easycode




//---------------------------------------------------
// need to make reverse sentence 'tseb eht ma i'

// let str = 'tseb eht ma i';
// let str_2,
//     i,
//     arr;

// arr = str.split([]); //['t', 's', 'e', 'b', ' ', 'e', 'h', 't', ' ', 'm', 'a', ' ', 'i']
// arr = arr.reverse(); //['i', ' ', 'a', 'm', ' ', 't', 'h', 'e', ' ', 'b', 'e', 's', 't']
// arr = arr.join(''); // i am the best
// console.log(arr);

// variant 2) need to use for()
// let str = 'tseb eht ma i';
// // console.log(str.length); //13
// let str_2 = '',
//     i;
// // можно сделать не превращая в массив - используем декремент
// for (i = (str.length - 1); i >= 0 ; i--) { // from 12 to 0 position
//     // console.log(i);
//     str_2 = str_2 + str[i]; // (13 - 1) = 12 индекс это последняя буква, складываем её с '' и сохраняем в строку str_2 = '' + [12] т.е. i
//     //далее i-- , тогда уже (12 -1) = 11 - выполняем тело str_2 = 'i' + [11]т.е. space , итого str_2 = 'i' + ' ' = 'i '
// }
// console.log(str_2);





//----------------------------------
// 3) calculate factorial 10 with for or while = 3628800
// !3 = 3 * 2 * 1 => n * (n-1) * (n-2)
// в данном случае нужно задать значеие fact изначально

// let n = 10;
// let i = 0;
// let fact = 1;

// for (i; i < n; i++) {
//    fact *= (n - i); // basic fact = 1, 1 * (10 -0) and so on
//    // fact = fact * (n - i);
//    // console.log(fact);
// }
// console.log(fact);

// // while ()

// while ( i < n) {
//    fact *= (n - i);
//    i++;
// }
// console.log(fact);



//---------------------------------
// 4) Create string "Считаем до 10и: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
// let n = 10;
// let i,
//    newStr = '';
// let str = `"Считаем до ${n}и: "`;
// console.log(str); //"Считаем до 10и: "

// for (i = 1; i <= n; i++) {
//    if (i == 10) {
//       newStr = newStr + i;
//    } else {
//       newStr = newStr + i + ', ';
//    }
// }
// console.log(newStr); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// str = str.slice(0, (str.length -1)); // cut last " from the str
// console.log(str); //"Считаем до 10и:

// str = str + newStr + '"';
// console.log(str); //"Считаем до 10и: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"




//-------------------------------------------
// 5) "JavaScript is a pretty good language" need to make new string, where each word is started with big letter adn spaces are deleted (JavaScriptIsAPrettyGoodLanguage)

// let str = 'JavaScript is a pretty good language';
// let i,
//    arr,
//    str_2,
//    str_3;

// arr = str.split([' ']); // str is transformed into array arr = ['JavaScript', 'is', 'a', 'pretty', 'good', 'language']
// console.log(arr);

// for (i = 0; i < arr.length; i++) {
//    str_2 = arr[i].charAt(0).toUpperCase(); // choose the first word of each word [i]
//    // console.log(str_2);
//    str_3 = arr[i].slice(1);
//    // console.log(str_3);
//    arr[i] = str_2 + str_3; // summ each indexes og  two arrays
//    console.log(arr[i]); // array with big letters for each index
// }

// console.log(arr); // ['JavaScript', 'Is', 'A', 'Pretty', 'Good', 'Language']
// str = arr.join([]); //JavaScriptIsAPrettyGoodLanguage
// console.log(str);

//OR without transfering to array

// let str = 'javaScript is a pretty good language';
// let str_2 = '';
// let i;

// for (i = 0; i < str.length; i++) {
//    if ( str[i - 1] == ' ' || i == 0) { // смотреть на i-1 -> в этом смысл так как сравниваем это, а выводим во второй строке просто i
//       str_2 = str_2 + str[i].toUpperCase();
//    } else if (str[i] == ' ') {
//       continue; // если есть пробелы, то их пропускаем
//    } else {
//       str_2 = str_2 + str[i]; //иначе просто добавляем буквы в строку
//    }
// }
//    console.log(str_2); //JavaScriptIsAPrettyGoodLanguage



//-------------------------------------------
// 6) Find all odd numbers [1, 15] and show them
// let i;

// for (i = 1; i <= 15; i++) {
//    if (i % 2 === 0) {
//       continue;
//     } else {
//       console.log(i);
//     }
// }




//----------------------------------------------
// 8) Learn js tasks
// let i = 3;

// while (i) {
//   alert( i-- ); // 3, 2, 1
// }

//-------------
// 9)
// let i = 0;
// while (++i < 5) alert( i ); //1, 2, 3, 4

// let i = 0;
// while (i++ < 5) alert( i ); //1, 2, 3, 4, 5

//-------------
// 10)
// for (let i = 2; i <= 10; i++) {
//   if ( i % 2 == 0 ) {
//     console.log(i);
//   } else {
//     continue;
//   }
// } // 2, 4, 6, 8, 10

//-------------
// 11) replace for() onto while()
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0;
// while ( i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

//-------------
// 12) show simple numbers from 1 to n = 10; (simple = divides on 1 and itself without reminder)
// let n = 10;
// let i,
//     j;
// first:
//  for (i = 2; i <= n; i++) {

//   for (j = 2; j < i; j++) { // j = 2 , т.к. проверяем деления начиная с 2
//     if (i % j == 0) {
//       continue first; // если условие выполняется, то возвращаемся к первому циклу и i++
//     }
//   }
//   console.log(i); // 2, 3, 5, 7
// }

//--------------------------------------------
// 13)
// let n = 8;
// let i;
// let sum = 0;

// for (i = 0; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum); // 36
//OR

// let i;
// let sum = 0;
// let a = +prompt('Vvedite chislo: ');

// for (i = 0; i <= a; i++) {
//   sum = sum + i;
// }
// alert(sum);

//--------------------------------------
// 14)
// let j = '',
//     i;
// for (i = 1; i <= 5; i++) {
//  j = j + ' ' + i;
// }
// console.log(j); //1 2 3 4 5 - string

//--------------------------------------
// 15)
// let j = '',
//     i;
// for (i = 5; i > 0; i--) {
//   j = j + ' ' + i;
// }
// console.log(j); // 5 4 3 2 1

//--------------------------------------
// 16)
// let num = 3,
//     i,
//     res;
// for (i = 1; i <= 10; i++) {
//   res = num * i;
//   console.log(`${num} * ${i} = ` + res); // таблица умножения на 3 построчно
// }

//--------------------------------------
// 17) column [1, 50]
// let num,
//     i;

// for (i = 1; i <= 50; i++) {
//   console.log(i);
// }

//---------------------------------------
// 18) array = [1, 2, 3, 4, 5] - beed to show them
// let arr = [1, 2, 3, 4, 5];
// let i;

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//---------------------------------------
// 19) arr [2, 3, 4, 5] - need to find out the (a * b)
// let arr = [2, 3, 4, 5];
// let i,
//     res = 1;

// for (i = 0; i < arr.length; i ++) {
//   res *= arr[i];
// }
// console.log(res); //120

//----------------------------------------
// 20) Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

// let obj = {
//   Minsk: 'Belarussia',
//   Moskva: 'Russia',
//   Kiev: 'Ukraine'
// }

// for (country in obj) {
//   console.log(country); // Minsk | Moskva | Kiev
//   console.log(country + ' - это ' + obj[country]);
// //console.log( obj[country]); //Belarussia | Russia | Ukraine
// }

//-----------------------------------------
// 21) [1, 100] - need to make summ of these numbers
// let sum = 0;
// let i;
// for (i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum); // 5050

//-----------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let i;
// let result = 0;

// for (i = 0; i < arr.length; i++) {
//   result = result + arr[i];
// }
// console.log(result); //15




//------------------------------------------
// array [2, 5, 9, 15, 0, 4] - need to display in a column numbers > 3 but less than 10

// let arr = [2, 5, 9, 15, 0, 4];
// let i;

// for (i = 0; i < arr.length; i++) {
//    if ( arr[i] > 3 && arr[i] < 10 ) {
//       console.log(arr[i]);
//    } else {
//       continue;
//    }
// }




//------------------------------------------
// if number = 4 and need to exit from the cycle

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// let i;

// for (i = 0; i < arr.length; i ++) {
//    if ( arr[i] === 4 ) {
//       console.log(`${arr[i]} = 4 - yes`)
//       break;
//    }
// }




//--------------------------------------------
//Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
//method transforming array to string = >    str = String(array)

// let arr = [10, 20, 30, 50, 235, 3000];
// let i,
//    str;
//    //console.log(arr); // [10, 20, 30, 50, 235, 3000]

// for (i = 0; i < arr.length; i++) {
//    str = String(arr[i]); // each separately numbers 10 | 20 | 30 | 50 | 235 | 3000 - string
//    // console.log(str);
//    if (str[0] == 1 || str[0] == 2 || str[0] == 5) {
//       //console.log(arr[i]); // 10 | 20 | 50 | 235 - elements of array
//       //console.log(str); // 10 | 20 | 50 | 235 - string + transform to Numbers
//       str = Number(str);
//       console.log(str);
//    } else {
//       continue;
//    }
// }




//----------------------------------------
// [1, 2, 3, 4, 5, 6, 7, 8, 9] -> '-1-2-3-4-5-6-7-8-9-'
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i,
//    str;
//    //console.log(arr.length);
//    str = arr.join('-');
//    //console.log(str);

// for ( i = 0 ; i < str.length; i++ ) {
//    if (i == 0) {
//       console.log(str[i]);
//       //str = '-' + str;
//    }
//    // else if () {

//    // }
//    // console.log(arr[i]);
//    //console.log(str);
// }
// //console.log(str);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '';

// for (let i = 0; i < arr.length; i++) {
//   //str += `-${arr[i]}`;
//   if (i == (arr.length - 1)) {
//       str += `-${arr[i]}-`;
//   } else {
//      str += `-${arr[i]}`;
//    }

//    console.log(str);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str,
//    str_2 = '';
// for (let i = 0; i < arr.length; i++) {
//    //str = "-" + (i < arr.length ? arr[i] : "");
//    if (i < arr.length) {
//       str = "-" + arr[i];
//    }
//    str_2 = str_2 + str;
// }
// str_2 = str_2 + '-';
// console.log(str_2);





//--------------------------------------
// let arr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
// let day = new Date();
// let i;
// for (i = 0; i < arr.length; i++) {
//    if ( i == day.getDay()) {
//       console.log(`%c${arr[i]}`, 'font-weight: bold');
//    } else {
//       console.log(arr[i]);
//    }
// }
// // console.log(date.getDay());
// //console.log("%cThis is a green text", "font-style:italic");
// console.log(day);




//------------------------------------------------
// let num = 0;
// let n = 1000;
// let i;
// let limit = 50;

// while (n > limit) {
//    num++;
//    n = n / 2;
//    console.log(n);
// }
// console.log(num);





//----------------------------------------------------
// Дополнительная задача

// let i;
// let users = [
//    {
//       "gender":"Female",
//       "name":"Debra",
//       "job":"Photofeed"
//    },
//    {
//       "gender":"Male",
//       "name":"Martin",
//       "job":"Linkbuzz"
//    },
//    {"gender":"Male","name":"Howard","job":"Photofeed"},
//    {"gender":"Male","name":"Jimmy","job":"Zoomdog"},
//    {"gender":"Female","name":"Louise","job":"Vidoo"},
//    {"gender":"Male","name":"Scott","job":"Feedspan"}
// ];
//console.log(users[0]); //choose the first obj in array of objs {gender: 'Female', name: 'Debra', job: 'Photofeed'}
//console.log(users[1]); //choose the second obj in array of objs {gender: 'Male', name: 'Martin', job: 'Linkbuzz'}
//console.log(users[0].gender); //Female
//console.log(users[0]['gender']); //Female
//console.log(users.length); //6


// Также каждому пользователю добавить поле verified со значением true;
// for (i = 0; i < users.length; i++) {
//    users[i]['verified'] = 'true'; // add to each users[i] new field 'verified' with new meaning
// }
// console.log(users); // {gender: 'Female', name: 'Debra', job: 'Photofeed', verified: 'true'},
                     // {gender: 'Male', name: 'Martin', job: 'Linkbuzz', verified: 'true'} ...


// // Перебрать в цикле массив пользователей и посчитать сколько женщин а сколько мужчин.
// let men = 0;
// let women = 0;
// for (i = 0; i < users.length; i++) {
//    if ( users[i]['gender'] == 'Male' ) {
//       men++;
//    }
//    else {
//       women++;
//    }
// }
// console.log(`Number men is: ${men}`); // 4
// console.log(`Number men is: ${women}`);// 2


// // Кол-во мужчин men и женщин women записать в объект с полями Male и Female соответственно.
// let newUsers = {};
// newUsers.Male = men; // create a new field 'Male'; into a new obj newUsers = {}; and add into this Male field  our count of men
// newUsers.Female = women; // create a new field 'Female'; into a new obj newUsers = {}; and add into this Female field  our count of women
// console.log(newUsers); // {Male: 4, Female: 2}


// 1) Создать объект каждое поле которого называется также как значение в объекте users поля job
// 2) и посчитать сколько человек относится к какой из професcий.
let i;
let users = [
   {"gender":"Female","name":"Debra","job":"Photofeed"},
   {"gender":"Male","name":"Martin","job":"Linkbuzz"},
   {"gender":"Male","name":"Howard","job":"Photofeed"},
   {"gender":"Male","name":"Jimmy","job":"Zoomdog"},
   {"gender":"Female","name":"Louise","job":"Vidoo"},
   {"gender":"Male","name":"Scott","job":"Feedspan"}
];
// // console.log(users[0]['job']); // Photofeed
//console.log(users[0].job); // Photofeed

let arr = {};
let newArr = {};

for (i = 0; i < users.length; i++) {
   arr[users[i]['job']] = users[i]; // create new key (like in users -> the field 'job') in new arr = {Photofeed: {…}, Linkbuzz: {…}, Zoomdog: {…}, Vidoo: {…}, Feedspan: {…}}
   // arr = {
   //          Feedspan: {gender: 'Male', name: 'Scott', job: 'Feedspan'}
   //          Linkbuzz: {gender: 'Male', name: 'Martin', job: 'Linkbuzz'}
   //          Photofeed: {gender: 'Male', name: 'Howard', job: 'Photofeed'}
   //          Vidoo: {gender: 'Female', name: 'Louise', job: 'Vidoo'}
   //          Zoomdog: {gender: 'Male', name: 'Jimmy', job: 'Zoomdog'}
   // [[Prototype]]: Object
   // }
   
   if (newArr[arr[users[i]['job']]['job']]) {
      newArr[arr[users[i]['job']]['job']]++;
      } else {
         newArr[arr[users[i]['job']]['job']] = 1; // key like arr[users[i]['job']]['job'] -> i=0) Feedspan: 1, i=1) Feedspan: 1, Linkbuzz: 1, i=2) Feedspan: 2, Linkbuzz: 1 ...
      }
      
}
//console.log(arr[users[0]['job']]['job']); //Photofeed
console.log(arr); // {Photofeed: {…}, Linkbuzz: {…}, Zoomdog: {…}, Vidoo: {…}, Feedspan: {…}}
console.log(newArr); // {Photofeed: 2, Linkbuzz: 1, Zoomdog: 1, Vidoo: 1, Feedspan: 1}


//(другой вариант решения с обїяснением)
// let i;
// let users = [
//    {"gender":"Female","name":"Debra","job":"Photofeed"},
//    {"gender":"Male","name":"Martin","job":"Linkbuzz"},
//    {"gender":"Male","name":"Howard","job":"Photofeed"},
//    {"gender":"Male","name":"Jimmy","job":"Zoomdog"},
//    {"gender":"Female","name":"Louise","job":"Vidoo"},
//    {"gender":"Male","name":"Scott","job":"Feedspan"}
// ];

// // let arr = {
// //    Photofeed: 1,
// //    Linkbuzz: 1,
// // };
// let arr = {};

// //console.log(users[0].job); // Photofeed
// //console.log(arr[users[0].job]); // undefined

// for (i = 0; i < users.length; i++) {
//    //1) i = 0, arr['Photofeed'] ищем в пустом объекте = undefined -> false
//    if (arr[users[i].job]) { // true
//       arr[users[i].job]++; // arr[users[i].job] = arr[users[i].job] + 1
//    } else {
//       arr[users[i].job] = 1;
//    }
// }
// console.log(arr);
// console.log(arr);
//{Photofeed: 2, Linkbuzz: 1, Zoomdog: 1, Vidoo: 1, Feedspan: 1}

//сначала у нас выполняется false, т.к. arr[users[0].job] -> arr['Photofeed'], а нас этот объект пустой (undefined)
   //значит идет присвоение значения 1 в новосозданный ключ users[i].job в объекте arr (выполняется false условие)
   // т.е. let arr = { Photofeed: 1 };

   //опять выполняем for() для i = 1 (уже  arr = {Photofeed: 1})
   // arr[users[1].job] -> arr['Linkbuzz'] , но у нас опять же новый объект не содержит [1] элемента, поэтому результат arr['Linkbuzz'] = undefined,
   // т.е. выполняется false условие - в новосозданный arr добавляется ключ Linkbuzz и ему присваивается значение 1
   // let arr = { Photofeed: 1, Linkbuzz: 1 };

   //опять выполняем for() для i = 2 ( уже arr = {Photofeed: 1}, {Linkbuzz: 1})
   // arr[users[2].job] -> arr['Photofeed'] , а тут уже у нас есть такой ключ, т.е. выполняется условие if (), т.к. это true
   // и уже работаем с его значением 1, которое было получено после первой итерации
   // arr[users[i].job] = arr[users[i].job] + 1 или arr[users[i].job]++ (увеличиваем его значение на 1)
   // let arr = { Photofeed: 1+1, Linkbuzz: 1 };

