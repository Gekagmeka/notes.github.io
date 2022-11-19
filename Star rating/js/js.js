// const bodyEl = document.querySelector('.main');

// let prev = bodyEl.previousElementSibling;
// console.log(prev);

// let next = bodyEl.nextElementSibling;
// console.log(next);

// let data_attr = document.querySelector('[data-item]');
// console.log(data_attr);

// let item = document.querySelectorAll('.item');
// for (let items of item) {
//     // console.log(items);
//     items.addEventListener('click', function(){
//         deleteActive();
//         items.classList.add('active');
//     })
// }

// function deleteActive(){
//     for (let items of item) {
//         items.classList.remove('active');
//     }
// }

// item.forEach( items => {
//     console.log(items);
// })


let child = document.getElementById('qwe');

// let parent = child.closest('.item');
// console.log(parent);

// let nextEl = child.closest('.list').nextElementSibling;
// console.log(nextEl);

// child.innerHTML = `<p>New text</p>`;
// let childContent = child.innerHTML;
// console.log(childContent);

let createEl = document.createElement('div');

createEl.innerHTML = `<p class="new_content">New text</p>`;
console.log(createEl);

let textPoint = document.createTextNode('Hi!');
console.log(textPoint);

// child.before(createEl);
child.prepend(createEl);
// child.after(textPoint);
// child.append(textPoint);
// child.append(`<p class="new_content">New text</p>`);

let second = document.getElementById('rty');
let title = document.querySelector('.title');
console.log(title.textContent);

title.style.color = 'black';
title.style.textDecoration = 'underline';
title.style.marginBottom = '30px';
title.style.marginBottom = '';

// title.style = `
//     margin-bottom: 30px;
//     color: blue;
//     text-transform: uppercase;
// `;
second.prepend(title);

// console.log(title.hasAttribute('name'));
// console.log(title.getAttribute('name'));
console.log(title.setAttribute('value', 'name'));