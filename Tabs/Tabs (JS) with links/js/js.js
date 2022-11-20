// <!-- tabs HTML + CSS + link -->
let jsHeaderLinks = document.querySelectorAll('.js-link');
let jsContentItems = document.querySelectorAll('.js-content .item');
let jsGetAttr;
let jsSuite;

for (let jsHeaderLink of jsHeaderLinks) {
    jsHeaderLink.addEventListener('click', function() {
        deletedClassForLink();
        deletedClassForLink_2();

        jsHeaderLink.classList.add('active');
        jsGetAttr = jsHeaderLink.getAttribute('href');
        // console.log(jsGetAttr);

        jsSuite = document.querySelector('.js-content .item[data-tab="'+jsGetAttr+'"]');
        jsSuite.classList.add('active');
    });
}

function deletedClassForLink(){
    for (let i of jsHeaderLinks) {
        i.classList.remove('active');
    }
}

function deletedClassForLink_2(){
    for (let i of jsContentItems) {
        i.classList.remove('active');
    }
}