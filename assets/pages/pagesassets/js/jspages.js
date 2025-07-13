
/* gestione menu burger */
const menuToggle = document.getElementById('menu-toggle');
const navHeader = document.getElementById('nav-header');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');

  if (navHeader.style.maxHeight && navHeader.style.maxHeight !== "0px") {
    navHeader.style.maxHeight = "0";
  } else {
    navHeader.style.maxHeight = 240 + "px";
  }
});

/*  Per lo swiper 
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
}); */ 

/* swiper progetti */ 
const swiperproge = new Swiper(".mySwiperProg", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: { el: '.swiper-pagination', clickable: false },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

/* swiper progetti per mobile */ 
const swiperproge2 = new Swiper(".mySwiperProg2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: { el: '.swiper-pagination', clickable: false },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

/* Per gestire le animazioni*/
AOS.init({
  duration: 1000,     
  once: true,         
  offset: 120,        
  easing: 'ease-in-out'
});