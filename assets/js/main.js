AOS.init(); // Per far funzionare libreria AOS

/* gestione effetto border radius su navbar */ 

const header = document.getElementById('header');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

  if (window.scrollY > homeBottom - 100) { 
    header.classList.add('rounded');
  } else {
    header.classList.remove('rounded');
  }
});

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

/* swiper skilss*/ 
const swiperSkills = new Swiper(".mySwiper", {
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




/* funzione cambia colore freccie per swiper skills */ 
function updateSwiperColor() {
  const activeCard = document.querySelector('.swiper-slide-active  .card-swiper');
  if (!activeCard) return;
    
  if( activeCard.id === 'html-swiper-card') { 
    document.querySelector('.swiper-button-next').style.color = '#e96228'; 
    document.querySelector('.swiper-button-prev').style.color = '#e96228'; 
  }
  
  if( activeCard.id === 'css-swiper-card') {
    document.querySelector('.swiper-button-next').style.color = '#2862e9'; 
    document.querySelector('.swiper-button-prev').style.color = '#2862e9'; 
  }
  
  if( activeCard.id === 'js-swiper-card') {
    document.querySelector('.swiper-button-next').style.color = '#efd81d'; 
    document.querySelector('.swiper-button-prev').style.color = '#efd81d'; 
  }
 
  if( activeCard.id === 'bootstrap-swiper-card') {
    document.querySelector('.swiper-button-next').style.color = '#8a12fc'; 
    document.querySelector('.swiper-button-prev').style.color = '#8a12fc';  
  }
  
  if( activeCard.id === 'angular-swiper-card') {
    document.querySelector('.swiper-button-next').style.color = 'red'; 
    document.querySelector('.swiper-button-prev').style.color = 'red';  
  }
  
  if( activeCard.id === 'react-swiper-card') {
    document.querySelector('.swiper-button-next').style.color = '#087ea4'; 
    document.querySelector('.swiper-button-prev').style.color = '#087ea4';  
  }
  
  if( activeCard.id === 'java-swiper-card') {
    document.querySelector('.swiper-button-next').style.color = '#f29111'; 
    document.querySelector('.swiper-button-prev').style.color = '#f29111';  
  }
  
};

swiperSkills.on('slideChangeTransitionStart', updateSwiperColor);

/* Funzioni per il form */ 

idEmailjs = "MYa8EFWEuEg14JmI_"; 
emailjs.init(idEmailjs); 

const form = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');
const statusMsg = document.getElementById('status-msg');

// Controlla se tutti i campi sono compilati per abilitare il pulsante
function checkForm() {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const title = form.title.value.trim();
  const message = form.message.value.trim();
  const emailValid = email.includes('@');

  sendBtn.disabled = !(name && email && title && message && emailValid);
  statusMsg.textContent = '';
}

form.addEventListener('input', checkForm);

// Solo per dare mex. che l'email è scritta male
form.addEventListener('input', () => {
  checkForm();

  const email = form.email.value.trim();
  if (email && !email.includes('@')) {
    statusMsg.style.color = 'red';
    statusMsg.textContent = 'Inserisci un\'email valida (deve contenere "@").';
  } else {
    statusMsg.textContent = '';
  }

});


// funzione per inviare il form 
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (sendBtn.disabled) {
    statusMsg.style.color = 'red';
    statusMsg.textContent = 'Compila tutti i campi prima di inviare.';
    return;
  }

  sendBtn.textContent = 'Invio in corso...';
  sendBtn.disabled = true;

  emailjs.send('service_67hbidd', 'template_8lt94vd', {
    name: form.name.value,
    email: form.email.value,
    title: form.title.value,
    message: form.message.value
  })
  .then(() => {
    statusMsg.style.color = 'green';
    statusMsg.textContent = 'Messaggio inviato con successo!';
    form.reset();
    sendBtn.textContent = 'Invia';
    sendBtn.disabled = true;
  }, (error) => {
    statusMsg.style.color = 'red';
    statusMsg.textContent = 'Errore nell\'invio, riprova.';
    sendBtn.textContent = 'Invia';
    sendBtn.disabled = false;
    console.error('EmailJS error:', error);
  });
});

/* Per gestire le animazioni*/
AOS.init({
  duration: 1000,     
  once: true,         
  offset: 120,        
  easing: 'ease-in-out'
});