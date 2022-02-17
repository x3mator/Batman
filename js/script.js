



const sliderThumbs = new Swiper('.slider-thumbs', {
  preloadImages: true,
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  loopedSlides: 4
});

sliderThumbs.on('click', (swiper) => {
  swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper('.slider-main', {
  preloadImages: true,
  loop: true,
  autoHeight: true,
  loopedSlides: 4,
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;
