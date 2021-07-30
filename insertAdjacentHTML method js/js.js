//create new Element
let newElement = document.createElement('div');

//add class to my new Element
newElement.classList.add('new__block');


//-----------------------------------
//Need 2 parameters for this method
// 1 - shows the place, where exectly will be the 2 parameter
// 2 - namely our HTML string with tags
// (beforebegin, afterbegin, beforeend, afterend)


//take Element
let ulList = document.querySelector('.list');

//beforebegin - namely before the ul
// ulList.insertAdjacentHTML(
//    'beforebegin',
//    `<div>Text for the new <span class="red">Element</span>
//        <div class="column">
//           <div class="column__content">
//              Text text text
//           </div>
//           <div class="column__content">
//              LOrem lorem lorem
//           </div>
//        </div>
//    </div>`
// );

//afterbegin - namely inside ul before the content
// ulList.insertAdjacentHTML(
//    'afterbegin',
//    `<div>Text for the new <span class="red">Element</span>
//        <div class="column">
//           <div class="column__content">
//              Text text text
//           </div>
//           <div class="column__content">
//              LOrem lorem lorem
//           </div>
//        </div>
//    </div>`
// );

//beforeend - namely inside ul after the content
// ulList.insertAdjacentHTML(
//    'beforeend',
//    `<div>Text for the new <span class="red">Element</span>
//        <div class="column">
//           <div class="column__content">
//              Text text text
//           </div>
//           <div class="column__content">
//              LOrem lorem lorem
//           </div>
//        </div>
//    </div>`
// );

//afterend - after ul
ulList.insertAdjacentHTML(
   'afterend',
   `<div>Text for the new <span class="red">Element</span>
       <div class="column">
          <div class="column__content">
             Text text text
          </div>
          <div class="column__content">
             LOrem lorem lorem
          </div>
       </div>
   </div>`
);