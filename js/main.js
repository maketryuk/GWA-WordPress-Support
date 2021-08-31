"use strict";

AOS.init({
  once: true,
});

$(function () {
  $(".link__more").click(function (e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".packages h2").offset().top
    }, 800);
  });
  
  $(".contact__btn").click(function (e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".packages h2").offset().top
    }, 800);
  });

  $('.accordion__title').click(function () {
    $(".accordion__text").not($(this).next()).slideUp(300);
    $(this).next().slideToggle(300);
    $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("active");
    $(this).closest(".accordion__item").toggleClass("active");
  });
});

if (window.matchMedia('(max-width: 768px)').matches) {
  $('.contact__btn').text('Contact Us');
} else {
  $('.contact__btn').text('Choose a package now');
};
