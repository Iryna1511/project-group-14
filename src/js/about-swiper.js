import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';

// const swiper_2 = document.querySelector('.swiper-skills');
const BUTTON_NEXT = document.querySelector('.btn-right');

const swiper_2 = new Swiper('.swiper-skills', {
  loop: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',
  pagination: true,
  oneWayMovement: false,
  navigation: {
    nextEl: '.btn-right',
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

swiper_2.update();
