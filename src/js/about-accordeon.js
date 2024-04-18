import Accordion from 'accordion-js';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

const buttons = document.querySelectorAll('.ac-trigger');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const clickedButton = this;
    clickedButton.classList.toggle('rotated');
  });
});
