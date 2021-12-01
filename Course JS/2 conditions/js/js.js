//conditions

//--------------------------------------------
// if (true) {
//    expression 1;
// }
// else {
//    expression 2;
// }

// or

//let num = (true) ? expression 1 : expression 2

// let x, y, z;

// if (x) {
//    console.log('X is');
// }
// else  if (y){
//    console.log('Y is');
// }
// else {
//    console.log('Z is'); //'Z is', because x, y and z don't have value
// }

// //----------------
// //tasks if() {}
// let message = (98 > '11' && 70 < 100) ? 'TRUE' : 'FALSE';
// console.log(message); // TRUE

// if (5 == '5') {
//    console.log('TRUE'); // TRUE, because '5' will be converted to the number 5
// }
// else {
//    console.log("FALSE");
// }

// if (0) {
//    console.log('FALSE');
// }
// else if (' ') {
// console.log("TRUE"); //TRUE, because the second condition contains the space '_'
// }

// let x = 'aaaaahidden';
// // if ( x == 'hidden' ) {
// //    x = 'visible';
// // }
// // else {
// //    x = 'hidden';
// // }
// // console.log(x); // hidden

// //or

// x = (x == 'hidden') ? 'visible' : 'hidden'; // hidden
// console.log(x);

//let x = 1;
// if (x == 0) {
//    x += 1;   // x = x + 1
// }
// else if ( x < 0) {
//    x = 'less then 0';
// }
// else if ( x > 0) {
//    x = x * 10;
// }
// else {
//    x = 1;
// }
// console.log(x); // 'less then 0'

//or

// x = (x == 0) ? x + 1 :
//     (x < 1) ? 'less then 0' : (x > 1) ? x * 10 : 1;
// console.log(x);



//----------------------------------
//switch...case tasks

// let a = 'IG';
// switch(a) {
//     case 'USA':
//         console.log('Your choice - USA');
//         break;
//     case 'UK':
//         console.log('Your choice - UK');
//         break;
//     case 'OG':
//     case 'IG':
//         console.log('Your choice - OG or IG'); //'Your choice - OG or IG', because a = 'IG'
//         break;
//     default:
//         console.log('other team');
// }

// a = true;
// console.log(+a);

// console.log('12' > 2); //true
// console.log('23' > '2'); //false (only strs comparing (UTF table))
// console.log(null == 0);



//-----------------------------
// transfering types - tasks
// console.log(parseInt('200px')); //200

// console.log(1 + '15'); // 115 (string)
// console.log(100 - '18'); // 82 (number)
// console.log('string' == true); // NaN == 1 -> false
// console.log(undefined == null); // true, only under this ==
// console.log(null + ''); //'null'
// console.log(null + 5); //0 + 5 -> 5

// console.log('12' > 2); // true, 12 > 2
// console.log('12' > '2'); //false, regarding the table UTF '1' < '2', -> '12' < '2'
// console.log(true < 2); //true, true == 1
// console.log(false == 0); // true, false -> 0 (in number transfering)

// console.log(undefined == false); // false, undefined == null - and just in this case
// console.log(null == false); // false

// console.log(0 || 'str'); // 'str'
// console.log(1 && 'str'); // 'str'
// console.log(null || 25); // 25
// console.log(null && 25); // null
// console.log(null || 0 || 35); //35
// console.log(null && 0 && 35); //null

// console.log(Number(undefined));// NaN

// console.log(12 + 14 + '12'); //'2612'
// console.log(3 + 2 - '1'); // 4
// console.log('3' + 2 - 1); // 31
// console.log(true + 2); // 3
// console.log(+'10' + 1); // 11
// console.log(undefined + 2); //NaN   (Number(undefined) -> NaN,   NaN + 2 -> NaN)
// console.log(null + 5); // 5
// console.log(true + undefined); //NaN

console.log(5 > 4); //true
console.log('ананас' > 'яблоко'); // false   ('я' > 'а')
console.log('ананас' > 'Яблоко'); // true   ('Я' < 'а')
console.log('2' > '12'); // true
console.log(undefined == null); // true
console.log(undefined === null); // false (types are different!)
console.log(null == '\n0\n'); // \n - перевод строки  -> false , null == undefined
console.log('\n' == false); // true
console.log(null === +'\n0\n'); // false (types are different)
console.log(true + false); //1
console.log(NaN == NaN); // false