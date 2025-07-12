document.addEventListener("DOMContentLoaded", () => {
  const swipertech = new Swiper(".swipertech", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
});
