import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

// const swiper_2 = document.querySelector('.swiper-skills');
const BUTTON_NEXT = document.querySelector('.btn-right');

export const swiper_2 = new Swiper('.swiper-skills', {
  loop: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',
  navigation: {
    nextEl: BUTTON_NEXT,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

// const swiper_2 = new Swiper('.swiper-skills', {
//   modules: [Navigation, Keyboard, Pagination],
//   navigation: {
//     nextEl: BUTTON_NEXT,
//     prevEl: BUTTON_NEXT,
//     lockClass: '.swiper-lock-step-navs',
//   },

//   // navigation: {
//   //   nextEl: BUTTON_NEXT,
//   //   prevEl: BUTTON_NEXT,
//   // },
//   // loop: true,
//   breakpoints: {
//     375: {
//       slidesPerView: 2,
//     },
//     767: {
//       slidesPerView: 3,
//     },
//     1280: {
//       slidesPerView: 3,
//     },
//     1440: {
//       slidesPerView: 'auto',
//     },
//   },
//   mousewheel: {
//     invert: true,
//   },
//   direction: 'horizontal',
//   // autoHeight: false,
//   // autoWidth: false,
//   loop: true,
//   // watchOverflow: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//     pageUpDown: true,
//   },
//   //  return swiper_2();
// });

swiper_2.update();

// const nextObserver = new MutationObserver(mutations => {
//   mutations.forEach(mutation => {
//     if (mutation.attributeName === 'class') {
//       const disabled = BUTTON_NEXT.classList.contains(
//         'swiper-button-next-disabled'
//       );
//       if (disabled) {
//         BUTTON_NEXT.style.opacity = '0.5';
//         BUTTON_NEXT.style.cursor = 'not-allowed';
//       } else {
//         BUTTON_NEXT.style.opacity = '1';
//         BUTTON_NEXT.style.cursor = 'pointer';
//       }
//     }
//   });
// });

// prevObserver.observe(BUTTON_NEXT, { attributes: true });
