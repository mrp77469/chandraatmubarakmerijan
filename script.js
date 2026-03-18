let current = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[current].classList.remove('active');
  current++;

  if (current < slides.length) {
    slides[current].classList.add('active');
  }
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);