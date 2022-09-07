let burgerBtn = document.getElementById('burger');
let navigation = document.querySelector('nav');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    navigation.classList.toggle('open');
});