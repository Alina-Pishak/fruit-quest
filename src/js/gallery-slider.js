import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import gallery from '../data/gallery.json';

const sliderEl = document.querySelector('.gallery__swiper__wrapper');

const renderMarkupSlider = gallery => {
  const markup = gallery
    .map(({ src, srcset, alt }) => {
      return `
         <div class="swiper-slide gallery__swiper__slide">
            <img src="${src}" srcset="${srcset}" alt="${alt}" class="gallery__slide__img" width="288" height="500"/>
        </div>`;
    })
    .join('');
  sliderEl.insertAdjacentHTML('beforeend', markup);
};

renderMarkupSlider(gallery);

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 24,
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
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  modules: [Navigation, Pagination],
});
