// to get each slide (collection) to control them
let slides = document.querySelectorAll('.slide');


// neen to select .slides and to add to each the certain listener ( for of or forEach() )
for ( let oneSlide of slides ) {
   oneSlide.addEventListener('click', function() {
      deleteActiveClass() // to add the function for deleting the class .active

      oneSlide.classList.add('active'); // namely click on the current slide (like this) add .active
   })
}


// create function - remove from the all .slide class .active
function deleteActiveClass() {
   for ( let oneSlide of slides ) {
      oneSlide.classList.remove("active");
   }
}
// OR
//variant with method .forEach() and arrow function
// function deleteActiveClass() {
//    slides.forEach( (slide) => {
//       slide.classList.remove("active");
//    } )
// }
//OR
// function deleteActiveClass() {
//    slides.forEach( function(slide) {
//       slide.classList.remove("active");
//    } )
// }