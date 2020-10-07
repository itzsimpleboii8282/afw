$('a[href*="#"]').on('click', function (el) {
  el.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});
