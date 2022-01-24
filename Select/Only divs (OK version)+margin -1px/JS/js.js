let select = document.querySelectorAll('.selectBtn');
let option = document.querySelectorAll('.option');
// let index = 1;



select.forEach(a => {
	a.addEventListener('click', b => {
		let next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		b.target.classList.toggle('active');
		b.target.closest('.select').classList.toggle('active');
		// next.style.zIndex = index++;
		// console.log(b.target);
	});
});




// option.forEach(a => {
// 	a.addEventListener('click', b => {
// 		b.target.parentElement.classList.remove('toggle');
		
// 		const parent = b.target.closest('.select').children[0];
// 		console.log(b.target.closest('.select').children[0]);
// 		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
// 		parent.innerText = b.target.innerText;
// 	});
// });


for (let currentOption of option) {
	currentOption.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		let optionParent = b.target.closest('.select').children[0];
		// write in data-type our getting b.target.getAttribute('data-type')
		optionParent.setAttribute('data-type', b.target.getAttribute('data-type'));
		// also write in .selectBtn text b.target.innerText
		optionParent.innerText = b.target.innerText;
		optionParent.classList.remove('active');

		let parentSelect = b.target.closest('.select');
		parentSelect.classList.remove('active');
		// console.log(b.target.innerText);
		// console.log(b.target);
	})
}