import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination-custom',
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-custom-next',
    prevEl: '.swiper-button-custom-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  modules: [Navigation, Pagination],
});
