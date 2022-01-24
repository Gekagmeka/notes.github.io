// href="##" - не будет скрола наверх по клику (перехода не будет)

let popupLinks = document.querySelectorAll('.popup-open');
let body = document.querySelector('body');

// чтоб не было двойных нажатий (для дальнейшего использования)
let unlock = true;

// переменная с таким же знаечением, что и в transition , для норм работы скрола и его блокировки (в милисек)
let timeout = 800;


// 1) Проверяем - есть ли вообще такие ссылки
if (popupLinks.length > 0) {

   // 2) если есть - то пробегаемся по ним всем с циклом for и добавляем события на каждую
   for (let index = 0; index < popupLinks.length; index++) {
         const popupLink = popupLinks[index]; // получаю каждую ссылочку в переменную popupLink
         
         popupLink.addEventListener('click', function(e) {
         // создаю переменную popupName, в неё получаю значение атрибута href="" (в нашем случае это #popup) и
         // удаляю из него # , путем замещения replace('#', '') , в итоге остается чистое значение popup
         const popupName = popupLink.getAttribute('href').replace('#', '');
         //Далее в переменную currentPopup получаю текущий элемент с id (popupName - в нашем случае, это уже чистый popup)
         const currentPopup = document.getElementById(popupName);
         // И теперь отправляю этот элемент в функцию popupOpen()
         popupOpen(currentPopup);
         // Запрет перехода - блок дальнейшей работы ссылки (перезагрузить страничку)
         e.preventDefault();
      });
   }
}

// 3) Закрываем popup окно по классу (так можно закрывать окно не только по крестику, но и элеменам, которые содержат этот класс)
// Помими крестика можно этот класс добавить кнопке формы и тп
let popupCloseIcon = document.querySelectorAll('.close-popup');
// Проверяем , если такие элементы
// перебираем их и каждому добавляем слушатель
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         // отправляю ближайший родитель нажатого єлемента с классом .popup в функцию popupClose()
         // то есть при нажатии на .close-popup - скрипт будет бежать вверх от нажатого элемента и уже его будет закрывать
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(currentPopup) {
   if (currentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      body.classList.add('locked');
      // если он существует (т.е. если у .popup  есть .open, то)
      if (popupActive) {
         // если есть то отправляем его в функцию
         popupClose(popupActive);
      } 
      // else {
      //    bodyLock();
      // }
      // добавляем нашему текущему элементу с полученным id
      currentPopup.classList.add('open');
      // и сразу сюда добавляем слушатель
      currentPopup.addEventListener('click', function (e) {
         //если происходит клик по элементу, у которого нет родителя (.popup-content),
         // т.е. по всему, что выше (.popup-content), то передаем наше активное окно (e.target.closest('.popup') в функцию popupClose() - а уже в ней удаляем класс), а , если клик внутри (.popup-content) - то ничего не происходит
         // отсекаем все, что кроме темной области
         if (!e.target.closest('.popup-content')) {
            popupClose(e.target.closest('.popup')); // если мы кликнули по внешнему (не внутри .popup-content), то передаем .popup в функцию
         }
      });
   }
}

function popupClose(popupActive) {
   if (unlock) {
      popupActive.classList.remove('open');
      body.classList.remove('locked');
   }
}