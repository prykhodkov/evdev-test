$('#section-top').css('min-height', `calc(100vh - ${$('#header').outerHeight()}px`);

var swiperTop = new Swiper('.top__carousel', {
  loop: false,
  centeredSlides: false,
  slidesPerView: 1.22,
  spaceBetween: 25,
  breakpoints: {
    500: {
      spaceBetween: 28,
    },
    600: {
      slidesPerView: 1.45,
      spaceBetween: 31,
    },
  }
});