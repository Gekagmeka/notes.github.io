// // to get each slide (collection) to control them
// let slides = document.querySelectorAll('.slide');


// // need to select .slides and to add to each the certain listener ( for of or forEach() )
// for ( let oneSlide of slides ) {
//    oneSlide.addEventListener('click', function() {
//       deleteActiveClass() // to add the function for deleting the class .active

//       oneSlide.classList.add('active'); // namely click on the current slide (like this) add .active
//    })
// }


// // create function - remove from the all .slide class .active
// function deleteActiveClass() {
//    for ( let oneSlide of slides ) {
//       oneSlide.classList.remove("active");
//    }
// }
// // OR
// //variant with method .forEach() and arrow function
// // function deleteActiveClass() {
// //    slides.forEach( (slide) => {
// //       slide.classList.remove("active");
// //    } )
// // }
// //OR
// // function deleteActiveClass() {
// //    slides.forEach( function(slide) {
// //       slide.classList.remove("active");
// //    } )
// // }




// // // repeat
let slides = document.querySelectorAll('.slide');
let idSlide = document.getElementById('qqq');

// idSlide.addEventListener('click', function(){
//    idSlide.classList.toggle('active');
// });

// // //OR

for (let slide of slides) {
   slide.addEventListener('click', function(){
      deleteClass();
      slide.classList.add('active');
   });
};

function deleteClass(){
   for (let slide of slides) {
      slide.classList.remove('active');
   }
}

// // //OR
// slides.forEach(function(slide){
//    slide.addEventListener('click', function() {
//       deletedClass();
//       slide.classList.add('active');
//    })
// })

// function deletedClass() {
//    slides.forEach(function(slide){
//       slide.classList.remove('active');
//    });
// }



// // //OR
// slides.forEach(function(slide){
//    slide.addEventListener('click', function(){
//       slide.classList.toggle('active');
//    })
// })