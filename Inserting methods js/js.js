//create new Element
let newElement = document.createElement('div');

//add class to my new Element
newElement.classList.add('new__block');

//add content into the new Element (tags are tags, because of method .innerHTML)
newElement.innerHTML = `Text for the new <span class="red">Element</span>
<div class="column">
   <div class="column__content">
      Text text text
   </div>
   <div class="column__content">
      LOrem lorem lorem
   </div>
</div>`;
console.log(newElement);


//-----------------------------------
//Now our content is ready but it is only in our LET or CONST
//to include their in our document , need to use insert's methods
// (.before, .after, .prepend, .append)
let ulList = document.querySelector('.list');

//before ulList
//ulList.before(newElement);

//into ulList before the content
//ulList.prepend(newElement);

//into ulList after the content
//ulList.append(newElement);

//after ulList
//ulList.after(newElement);