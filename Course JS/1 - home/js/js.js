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
//    console.log(str1.substr(5, 2)); // _i (5 - from what index, 2 - how much symvols)
//    console.log(str1.substring(5, 10)); //_is_a_ (10 - to what index , do not including it)
//    console.log(str1.slice(5, 10)); //_is_a_ (10 - to what index , do not including it)
//    console.log(str1.slice(5, -1)); //_is_a_str_on (we can cut from the end of the row)
//    console.log(str1 + str2); //There is a str oneThere is the second str
//    console.log(str1.charCodeAt(0)); //84
//    console.log('a' > 'A'); //true - string and string are compared like strings
//    console.log('ab' > 'aa'); //true
//    console.log("2" < '11'); //false - need use ASCII table 2=50 and 1 = 49
//    console.log("23" > '231'); //false
//    console.log(2 > '11'); //false - munbers and string are compared like munbers
//    console.log(someValue.toString()); // number is converted into string '2020'
//    console.log(someValue + ''); // to add empty string to number = string result



//Strings - tasks
//----------------------------
// let string = 'some test string';

// //1) the first and the last word of the row
// console.log(string[0], string[string.length -1]); //s g
// //2) the first and the last word - need to be done Uppercase
// console.log(string[0].toUpperCase(), string[string.length -1].toUpperCase()); // S G
// //3) find placement of the string 'string'
// console.log(string.indexOf('string')); //10
// //4) find placement of the second space
// console.log(string.indexOf(' ', 5)); //9
// //5) to get string from the 5th word (length 4 words)
// console.log(string.substr(5, 4)); // test
// //6) to get string from the 5th to 9th words
// console.log(string.substring(5, 9)); //test
// //7) to get srting without 6 symbols at the end
// console.log(string.slice(0, -6)); //some_test_
// //8) to get string from summ of numbers 20 and 16
// let a = 20;
// let b = 16;
// a = a.toString();
// b = b.toString();
// let c = a + b;
// console.log(c); //2016



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