let navMain = document.querySelector('.main-nav__menu');
let navToggle = document.querySelector('.main-nav__toggle');
let navClosetoggle = document.querySelector('.main-nav__close-toggle');

navMain.classList.remove('main-nav__menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__menu--closed')) {
    navMain.classList.remove('main-nav__menu--closed');
    navMain.classList.add('main-nav__menu--opened');
  }
});

navClosetoggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__menu--opened')) {
    navMain.classList.remove('main-nav__menu--opened');
    navMain.classList.add('main-nav__menu--closed');
  }
});
