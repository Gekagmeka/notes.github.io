console.log(S);
var S = 25;
console.log(S);


//rows
let str = "Hello World!";
let num = 10;
console.log(str);
console.log(str.length); //возвращает общую длинну символов (начиная с 0) - т.е. 12
console.log(str[0]); // вернет первый символ, которые есть по нулевому индексу - т.е. H
console.log(str[str.length]); //underfined  - так как счет начинается с нулевого, а не с 1
console.log(str[str.length - 1]); //будет выведен последний символ в строке - т.е. !


//методы строк - не влияют на исходную строку!!!
console.log(str.toUpperCase()); // метода делает все большими буквами - но исходную строку оставляет такой, как была
//str = str.toUpperCase(); // вот это уже переопределит нашу переменную и после - сначала выполняется .toUppeCase справа от равно,
                        // а далее выполняется присвоение - и переменная str уже будет содержать в верхнем регистре строку

console.log(str.indexOf('World')); // находит индекс, под которым находится искомое в скобках - в данном случае это индекс 6
console.log(str.indexOf('l', 5)); // 9

//методы вырезания подстрок в строках
console.log(str.substring(0, 5)); //Hello ->  вырезает буквы с 0 по 5 (не включая) индексы
console.log(str.substr(0, 1)); //H -> 2-й аргумент - (кол-во) сколько отрезаем букв


//сложение строк (конкатинация)
console.log(str + 'New str'); //Hello World!New str

//unicode
console.log('a'.charCodeAt(0)); //97

// метод приведения к строке .toString() или сложить с пустой строкой "" примитивный тип данных - в итоге получим строку
let a = 20;
let b = a + str;
console.log(b); //20Hello World! - это уже строка

b = a + '';
console.log(b); //20 - уже строка



//Object
let user = {
   key: 'meaning',
   name: 'Ey',
   age: 30
}
//2 methods of output the filed of object
console.log(user.age);
console.log(user['name']);

var firstName = 'VVVVVVVVVV';
let user2 = {
   name: 'Ey',
   more: {
      work: 'school'
   },
   '+': 'easy',
   'some-key': 'some-meaning',
   firstName: firstName //В ES6 , если у нас название переменной такое же, как и название значения, куда мы подставляем её, то можно сократить эту запись просто firstName и все
}

console.log(user2.more.work);
console.log(user2.firstName);
//but with special keys (+, - or something like that - we need to use only [])
console.log(user2['+']);



//array
let arr = [20, 15, 10];
let users = [
   {
      nameUser: 'QQQ'
   },
   {
      ageUser: 40
   }
];

console.log(users);
console.log(users[0]);// получаем первый элемент со значением и ключом
console.log(users[0].nameUser); // так выводим именно значение первого элемента с ключом nameUser 
console.log(arr);
//console.log(arr[arr.length - 1]); //всегда последний элемент в массиве выводим