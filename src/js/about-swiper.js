import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const BUTTON_RIGHT = document.querySelector('swiper-btn-right');

const swiper_2 = new Swiper('.swiper-skills', {
  modules: [Navigation, Keyboard, Pagination],
  navigation: {
    nextEl: BUTTON_RIGHT,
  },
  mousewheel: {
    invert: true,
  },
  direction: 'horizontal',
  autoHeight: false,
  autoWidth: false,
  loop: true,
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
});

swiper_2.update();
