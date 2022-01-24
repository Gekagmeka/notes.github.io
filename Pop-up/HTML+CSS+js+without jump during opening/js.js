// href="##" - не будет скрола наверх по клику (перехода не будет)

let popupLinks = document.querySelectorAll('.popup-open');
let body = document.querySelector('body');
let lockPadding = document.querySelectorAll('.lock-padding');

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
      // body.classList.add('locked');
      // если он существует (т.е. если у .popup  есть .open, то)
      if (popupActive) {
         // если есть то отправляем его в функцию
         popupClose(popupActive, false);
      } 
      else {
         bodyLock();
      }
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

// doUnlock = true - стоит или не стоит использовать блокирование скролла - єто нужно для того , что б открівать другой popup при нажатии на ссылку из первого
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      // body.classList.remove('locked');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   // вычисляем ширину скрола - ширину всего окна viewport минус ширину объекта внутри него 
   // по факту, получение ширины скролла
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   // перебираем (только для элементов, которые позиционированы fixed!)
   // для элементов, которые фиксированы на странице, что б не было сдвига и для них - этот класс тогда надо на них повесить
   // допустим, если бы шапка была pos fixed; то нужно біло на нее добавлять єтот класс, иначе будет виден сдвиг все равно при открытии модального окна
   // есть ли такие объекты вообще
   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }

   // добавляем эту вычисленную ширину скролла в виде правого паддинга на body
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('locked');

   // блочим нашу переменную пока происходят всякие манипуляции и потом , через некоторое время(указівали сначала) мы опять ей указываем значение true
   unlock = false;
   // во избежание двойного нажатия - пока закрывается окно мы можем нажать открыть и друг на друга накладутся события, поэтому ставим на паузу одно из них
   setTimeout(function(){
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   //чтоб не было рывка - а окно закрылось и потом появился скрол, если не будет задержки, то при закрытии мод окна, он сразу дергнется влево, т..к. появиться скрол
   // а так через 800 появиться скрол - т.е. когда уже мод окно закрется
   setTimeout(function() {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         // меняем 17 пикс на 0 правый паддинг
         el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('locked');
      // body.style.paddingRight = '0px';
   }, timeout);

   unlock = false;
   setTimeout(function(){
      unlock = true;
   }, timeout);
}