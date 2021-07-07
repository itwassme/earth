$('a.menu-toggle').on('click', function () {
  $('.mobile-menu').toggleClass('open');
  $(this).text($(this).html() == 'Menu' ? 'Close' : 'Menu');

  return false;
});

// work sort
$('.filters-list a').on('click', function () {
  var filter = $(this).attr('data-filter');
  $('.project').hide();
  $(filter).show();

  $('.filters-list a').removeClass('selected');
  $(this).addClass('selected');
  return false;
});
