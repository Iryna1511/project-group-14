import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BTN_NEXT = document.querySelector('.btn-next');
const BTN_PREV = document.querySelector('.btn-prev');
const swiper_1 = new Swiper('.swiper-box', {
  modules: [Navigation, Keyboard, Pagination],
  navigation: {
    prevEl: BTN_PREV,
    nextEl: BTN_NEXT,
  },

  direction: 'horizontal',
  autoHeight: false,
  autoWidth: false,
  loop: false,
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1440: {
      direction: 'horizontal',
    },
  },
});
swiper_1.update();

const nextObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BTN_NEXT.classList.contains('swiper-button-disabled');
      if (disabled) {
        BTN_NEXT.style.opacity = '0.5';
        BTN_NEXT.style.cursor = 'not-allowed';
      } else {
        BTN_NEXT.style.opacity = '1';
        BTN_NEXT.style.cursor = 'pointer';
      }
    }
  });
});

nextObserver.observe(BTN_NEXT, { attributes: true });

const prevObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BTN_PREV.classList.contains('swiper-button-disabled');
      if (disabled) {
        BTN_PREV.style.opacity = '0.5';
        BTN_PREV.style.cursor = 'not-allowed';
      } else {
        BTN_PREV.style.opacity = '1';
        BTN_PREV.style.cursor = 'pointer';
      }
    }
  });
});

prevObserver.observe(BTN_PREV, { attributes: true });
