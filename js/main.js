var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    538: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  }
});