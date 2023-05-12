let navMain = document.querySelector('.main-nav__wrapper');
let navToggle = document.querySelector('.main-nav__toggle');
let navClosetoggle = document.querySelector('.main-nav__close-toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
});

navClosetoggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

