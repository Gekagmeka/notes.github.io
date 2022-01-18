// We have only one item with class .item
// and we get this item
let item = document.querySelector('.item');

// add .addEventListener() when we start moving and finish moving
item.addEventListener('dragstart', funcStart);
item.addEventListener('dragend', funcEnd);

// when we take item
function funcStart(event) {
   // event.target is namely the item we take
   // console.log('start', event.target);
   // and we can add styles to it when we are pulling this item
   event.target.classList.add('brd');

   // now we have 2 elements (default and pulled) and we need to hide
   // default item
   //event.target.classList.add('hide');
   
   // but need to add SetTimeout() function - function will be caused after some time (period) one time,
   // because if it is not,
   // and default, and moved items will be hidden
   setTimeout(function(){
      event.target.classList.add('hide');
   }, 0);

}

// when we drop item
function funcEnd(event) {
   // console.log('end', event.target);
   // when we drop the item, delete class brd from the item
   // event.target.classList.remove('brd');
   // event.target.classList.remove('hide');
   // event.target.classList.remove('brd', 'hide');
   // OR
   // delete all classes from this item and add only one class ="item"
   event.target.className = "item";
   // className always works with string!
   // classList - is an obj that has some methods to operate with classes
}

let placeholders = document.querySelectorAll('.placeholder');
// divide them
for (let placeholder of placeholders) {
   // when our item is above placeholder
   placeholder.addEventListener('dragover', dragover);
   // when our item is on the border of placeholder
   placeholder.addEventListener('dragenter', dragenter);
   // when our item is outside the placeholder
   placeholder.addEventListener('dragleave', dragleave);
   // when we drop the item
   placeholder.addEventListener('drop', dragdrop);
}

// we need to add functions that will operate this EventsListeners
function dragover(event) {
   // by default - it cancels our removing elements, for this reason we need to delete its default behaviour
   event.preventDefault();
   // console.log('over');
}

function dragenter(event) {
   // when we are placed in the area of placeholder -> add class with border on the placeholder
   event.target.classList.add('hovered');
   console.log('enter');
}

function dragleave(event) {
   // when we are leaving in the area of placeholder -> remove class with border on the placeholder
   event.target.classList.remove('hovered');
   console.log('leave');
}

function dragdrop(event) {
   // we need to replace item in HTML -> when we drop the item
   // in this case event.target is our placeholder where we are
   event.target.append(item);
   event.target.classList.remove('hovered');
   console.log('drop');
}