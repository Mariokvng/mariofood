$(document).ready(function () {
  $('.hamburger').on('click', function() {
    $(this).toggleClass('open');
    $('.topnav').toggleClass('open');
  });
  
});

const loader = document.querySelector('.preloader')
const bodyContent = document.querySelector('.body-content')

function loading() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
    
   // bodyContent.style.display = 'inherit'
    setTimeout(() =>
      (bodyContent.style.opacity = 1), 30);
  }, 7500);
}
loading();

const slides = document.querySelectorAll('.slide');
const auto = true;
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if(current.nextElementSibling) {
    current.nextElementSibling.classList.add('current')
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'), 500);
}

// const prevSlide = () => {
//   const current = document.querySelector('.current');
//   current.classList.remove('current');
//   if (current.previousElementSibling) {
//     current.previousElementSibling.classList.add('current')
//   } else {
//     slides[slides.length -1].classList.add('current');
//   }
//   setTimeout(() => current.classList.remove('current'), 1000);
// }

if(auto) {
  slideInterval = setTimeout(() =>  {
    setInterval(nextSlide, intervalTime)
  }, 6000);
}

  function scrollToTop() {
    window.scrollTo(0, 0);
  };
 
  const toTop = document.querySelector('.scroll-btn');
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > 200 ) {
      toTop.classList.add('active');
    } else {
      toTop.classList.remove('active');
    }
  });
  
  const modalBox = document.querySelector('.modal-box');
  const modalBtn = document.querySelector('.modal-btn')
  
  window.addEventListener('scroll', () => {
    if(pageYOffset > 600) {
      modalBox.classList.add('activee')
    } else {
      modalBox.add();
    }
  modalBtn.addEventListener('click', () => {
    modalBox.remove();
  });
  });
