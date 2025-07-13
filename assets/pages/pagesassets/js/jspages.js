/* Per lo swiper */
document.addEventListener("DOMContentLoaded", () => {
  const swipertech = new Swiper(".swipertech", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 3,     
        centeredSlides: true
      },
      768: {
        slidesPerView: 3,     
        centeredSlides: true
      }
    }
  });
});

/* Per gestire le animazioni*/
AOS.init({
  duration: 1000,     
  once: true,         
  offset: 120,        
  easing: 'ease-in-out'
});