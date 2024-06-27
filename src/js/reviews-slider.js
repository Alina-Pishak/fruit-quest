import 'swiper/css';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import reviews from '../data/reviews.json';

const sliderEl = document.querySelector('.reviews__wrapper');

const renderMarkupSlider = reviews => {
  const markup = reviews
    .map(({ id, author, img, srcset, text }) => {
      return `
        <li class="reviews__item swiper-slide">
          <div class="reviews__author--wrapper">
            <img
              srcset="${srcset}"
              src="${img}"
              alt="Avatar of the author of the review number ${id}"
              width="40"
              height="40"
            />
            <h3 class="reviews__author">${author}</h3>
          </div>
          <p class="reviews__text">${text}</p>
        </li>`;
    })
    .join('');
  sliderEl.insertAdjacentHTML('beforeend', markup);
};

renderMarkupSlider(reviews);

const swiper = new Swiper('.reviews__slider', {
  loop: true,
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
