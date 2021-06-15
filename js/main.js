const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

document.addEventListener('click', function () {
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
  } else {
    mobileMenu.classList.add('open');
  }
});

$('.menu-toggle').on('click', function () {
  $('.mobile-menu').toggleClass('open');
  $(this).text($(this).html() == 'Menu' ? 'Close' : 'Menu');

  return false;
});
