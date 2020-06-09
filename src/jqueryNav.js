/* eslint-disable no-undef */
$('.nav navlink').on('click', function () {
  $('.nav').find('.active').removeClass('active');
  $(this).addClass('active');
});
