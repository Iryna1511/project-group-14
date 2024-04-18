import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  duration: 600,
  showMultiple: false,
  openOnInit: [0],
});

const aboutListEl = document.querySelector('.about-list');
const arrowBtn = document.querySelectorAll('.button-up');
aboutListEl.addEventListener('click', event => {
  console.log(event);
  if (event.target === arrowBtn) {
    arrowBtn.classList.toggle('rotated');
  }
});
