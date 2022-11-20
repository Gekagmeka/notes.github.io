// tabs HTML + js
let jsTabItem = document.querySelectorAll('.js-tab-item');
let hrefAttr;
let jsContentItem = document.querySelectorAll('.js-tab-content .list .item');

for (let jsLink of jsTabItem) {
    jsLink.addEventListener('click', function(e){
        deleteClass();
        deleteClass_item()
        e.preventDefault();
        hrefAttr = this.getAttribute('data-tab'); // 1, 2, 3
        // console.log(hrefAttr);
        // add class to tab
        jsLink.classList.add('active');

        // find li with similar data-attr
        let content = document.querySelector('.js-tab-content .item[data-tab="'+hrefAttr+'"]');
        // console.log(content);

        // add class to item
        content.classList.add('active');
    });
}

function deleteClass() {
    for (let jsLink_2 of jsTabItem) {
        jsLink_2.classList.remove('active');
    }
}

function deleteClass_item() {
    for (let jsLink_2 of jsContentItem) {
        jsLink_2.classList.remove('active');
    }
}