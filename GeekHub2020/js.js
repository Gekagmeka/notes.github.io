let findOut = document.getElementById('qqq');
// let findOut = document.getElementsByClassName('first-block');

//1) to get namely the NEXT sibling tag on the same level => next sibling tag <p>
console.log(findOut.nextElementSibling);
//2) to get the NEXT sibling => text with spaces and enters
// console.log(findOut.nextSibling);

//3) to get namely the previous sibling tag on the same level => previous sibling tag <h1>
console.log(findOut.previousElementSibling);

//4) to get namely the parent tag => .container
console.log(findOut.parentElement);
//5) to get namely the parent  => parent
console.log(findOut.parentNode);

