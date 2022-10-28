// // Задача_1
// let strOne = 'i am in the easycode';
// let newStrOne = '';

// for (let i = 0; i < strOne.length; i++) {
//     if(strOne[i - 1] === ' ' || i === 0) {
//         newStrOne += strOne[i].toUpperCase();
//     } else {
//         newStrOne += strOne[i];
//     }
// }
// console.log(newStrOne);


// // Задача_2
// let strTwo = 'tseb eht ma i';
// let newStrTwo = '';

// for (let i = (strTwo.length - 1); i >= 0; i--) {
//     newStrTwo += strTwo[i];
// }
// console.log(newStrTwo);


// // Задача_3
// let i = 10;
// let factorial = 1;

// while ( --i ) {
//    factorial *= i;
// }
// console.log(factorial);


// // Задача_4
// let strThree = 'Считаем до 10и:';

// for (let i = 1; i <= 10; ++i) {
//     if (i < 10){
//         strThree += ` ${i},`;
//      } else {
//         strThree += ` ${i}`;
//     }
// }
// console.log(strThree);


// // Задача_5
// let strFive = 'JavaScript is a pretty good language';
// let newStrFive = '';

// for (let i = 0; i < strFive.length; i++) {
//     if(strFive[i - 1] === ' ' || i === 0) {
//         newStrFive += strFive[i].toUpperCase();
//     } else if(strFive[i] === ' ') {
//         continue;
//     } else {
//         newStrFive += strFive[i];
//     }
// }
// console.log(newStrFive);


// // Задача_6
// for (let i = 1; i <=15; i++) {
//     if (i%2) console.log(i);
// }
// y

// // Дополнительная задача

let users = [
    {"gender":"Female","name":"Debra","job":"Photofeed"},
    {"gender":"Male","name":"Martin","job":"Linkbuzz"},
    {"gender":"Male","name":"Howard","job":"Photofeed"},
    {"gender":"Male","name":"Jimmy","job":"Zoomdog"},
    {"gender":"Female","name":"Louise","job":"Vidoo"},
    {"gender":"Male","name":"Philip","job":"Feedfish"},
    {"gender":"Male","name":"Andrew","job":"Zoomdog"},
    {"gender":"Male","name":"Anthony","job":"Jamia"},
    {"gender":"Male","name":"Jack","job":"Divanoodle"},
    {"gender":"Male","name":"Philip","job":"Fadeo"},
    {"gender":"Male","name":"Henry","job":"Feedfish"},
    {"gender":"Male","name":"Robert","job":"Jazzy"},
    {"gender":"Male","name":"Alan","job":"Skynoodle"},
    {"gender":"Male","name":"Chris","job":"Browsetype"},
    {"gender":"Female","name":"Katherine","job":"Realblab"},
    {"gender":"Female","name":"Martha","job":"Jazzy"},
    {"gender":"Male","name":"Paul","job":"Jazzy"},
    {"gender":"Male","name":"Carlos","job":"Jazzy"},
    {"gender":"Male","name":"Ernest","job":"Tagfeed"},
    {"gender":"Male","name":"Adam","job":"Skidoo"},
    {"gender":"Female","name":"Denise","job":"Babbleopia"},
    {"gender":"Female","name":"Stephanie","job":"Skyvu"},
    {"gender":"Female","name":"Julia","job":"Topicstorm"},
    {"gender":"Female","name":"Donna","job":"Meeveo"},
    {"gender":"Male","name":"Lawrence","job":"Skyvu"},
    {"gender":"Female","name":"Pamela","job":"Meeveo"},
    {"gender":"Male","name":"Billy","job":"Skyvu"},
    {"gender":"Male","name":"Donald","job":"Feedspan"},
    {"gender":"Male","name":"Ryan","job":"Skyvu"},
    {"gender":"Male","name":"Scott","job":"Feedspan"}
];

// // Перебрать в цикле массив пользователей и посчитать сколько женщин а сколько мужчин.
// let countMan = 0;
// let countWomen = 0;

// for (let i = 0; i < users.length; i++) {
//     users[i]['gender'] === 'Male' ? countMan++ : countWomen++;
// }

// console.log(countMan);
// console.log(countWomen);

// // Кол-во мужчин и женщин записать в объект с полями male и female соответственно.
let usersObj = {};
// usersObj.male = countMan;
// usersObj.female = countWomen;

// // console.log(usersObj);

// // Также каждому пользователю добавить поле verified со значением true;
// let verified = 0;

// for (let i = 0, max = users.length; i < max; i++) {
//     users[i].verified = true;
// }


// // **** Повышенный уровень.

// // Создать объект каждое поле которого называется также как значение в объекте users поля job
// // и посчитать сколько человек относится к какой из професcий.

let work = {};
usersObj['work'] = {};

for (let i = 0; i < users.length; i++) {
    // if (work[users[i].job]) {
    //     work[users[i].job]++;
    // } else {
    //     work[users[i].job] = 1;
    // }
    usersObj['work'][users[i]['job']] = work[users[i].job];
}
console.log(usersObj);

