
let current = 0;
const slides = document.querySelectorAll('.hero-bg');
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);
