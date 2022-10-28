// let arr = ['я', '', 'ты', "он"];

// arr.splice(1, 1);
// console.log(arr);

// let removed = arr.splice(1,2);
// console.log(removed);

// arr.splice(1, 2, "qqq", '000', '1 - q');
// console.log(arr);


// arr[0] = 'мы';

// console.log(arr);

// arr.push('all of us');

// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift('I am');
// console.log(arr);


// ----------------------------------------
let width = window.innerWidth;
console.log(width);

console.log(navigator.userAgent);

// console.log(location.href);
// location.href = 'https://www.google.com/';

// let bodyEl = document.body;
// console.log(bodyEl);

// console.log(bodyEl.previousElementSibling);

// console.log(bodyEl.parentElement);

// let span = document.querySelectorAll('.qqq');
// console.log(span);


// let text = document.querySelector('.out');
// console.log(text.outerHTML);
// text.innerHTML = `New text will be here with a new element <p class="marked">A lot of the text</p>`;
// console.log(text.outerHTML);
// console.log(text.textContent);

const newEl = document.createElement('div');
// A.innerHTML = `Method .before() <span class="red">!!!</span>`;
newEl.innerHTML = `Method .after() <span class="red">!!!</span>`;
// console.log(A);

let out2 = document.querySelector('.out2');
// console.log(B);

out2.prepend(newEl);

newEl.style.color = 'blue';
newEl.style.marginBottom = '20px';

// newEl.style.cssText = `
//     margin-bottom: 20px;
//     text-transform: uppercase;
//     color: #f00;
// `;

console.log(getComputedStyle(newEl));

// let computedStyle = getComputedStyle(newEl);

// console.log(computedStyle.color);

// console.log(newEl.style.color);

// newEl.classList.add('red');  
// console.log(newEl);

// // B.append(A, `Method .after() <span class="red">!!!</span>`);
// B.insertAdjacentHTML('afterend', `Method .after() <span class="red">!!!</span>`)


// let c = document.querySelector('.out');
// console.log(c.className);

// c.style.color = 'red';


// for (let i of span) {
//     i.addEventListener('click', function(){
//         i.nextElementSibling.classList.toggle('active');
//     })
// }


// for (let i of span) {
//     i.addEventListener('click', function(){
//         deleted();
//         i.closest('.qqq').classList.add('active');
//         // console.log(i.closest('.qqq'));
//     })
// }

// function deleted(){
//     span.forEach(function(e){
//         e.closest('.qqq').classList.remove('active');
//     })
// }

// let h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.parentElement);

// let collection = document.querySelectorAll('div');
// console.log(collection[1]);

// collection.forEach(function(coll){
//     coll.addEventListener('click', function(){
//         deleted();
//         coll.classList.add('active');
//     })
// })
// function deleted(){
//     collection.forEach(function(e){
//         e.classList.remove('active');
//     })
// }
// for ( let i of collection ) {
//     i.addEventListener('click', function(){
//         i.classList.toggle('active');
//     })
// }

// let firstChild = bodyEl.firstChild;
// let lastChild = bodyEl.lastChild;
// console.log(firstChild, lastChild);

// console.log(bodyEl.childNodes);

// let nodes = bodyEl.childNodes;
// for (let node of nodes) {
//     console.log(node);
// }

// const bodyChildren = bodyEl.children;
// console.log(bodyChildren);

// let fEl = bodyEl.firstElementChild;
// let lEl = bodyEl.lastElementChild;
// console.log(fEl, lEl);