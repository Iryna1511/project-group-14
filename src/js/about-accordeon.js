// import Accordion from 'accordion-js';
// // import 'accordion-js/dist/accordion.min.css';
// const acordionContainer = document.querySelector('.about-list');
// acordionContainer.addEventListener('click', handleAcordion);

// export function handleAcordion(event) {
//   console.log(event);
//   const ac = new Accordion(acordionContainer, {
//     showMultiple: true,
//     onclose: currEl => console.log('Open!', currEl),
//   });

//   const buttons = acordionContainer.querySelectorAll('.button-up');
//   [...buttons].map((button, idx) => {
//     button.addEventListener('click', () => ac.open(idx));
//   });
// }

// const accordions = Array.from(
//   document.querySelectorAll('.accordion-container')
// );
// new Accordion(accordions, {});

// // Detach events
// const accordion = new Accordion('.container-first');
// accordion.detachEvents();
