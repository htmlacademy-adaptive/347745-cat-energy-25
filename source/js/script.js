let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--hidden');
navToggle.classList.add('main-header__toggle--closed')

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-header--closed')) {
    navToggle.classList.remove('main-header--closed');
    navToggle.classList.add('main-header--opened');
    navMain.classList.remove('main-nav--hidden')

  } else {
    navToggle.classList.add('main-header--closed');
    navToggle.classList.remove('main-header--opened');
    navMain.classList.add('main-nav--hidden')
  }
});
