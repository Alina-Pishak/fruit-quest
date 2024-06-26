import rules from '../data/rules.json';

const rulesEl = document.querySelector('.rules__list');

const renderMarkup = rules => {
  const markup = rules
    .map(({ id, img, img_retina, alt, text }) => {
      return `
        <li class="rules__item">
          <img
            srcset="${img} 1x, ${img_retina} 2x"
            src="${img}"
            alt="${alt}"
            width="40"
            class="rules__img"
          />
          <p class="rules__point">${text}</p>
        </li>`;
    })
    .join('');
  rulesEl.insertAdjacentHTML('beforeend', markup);
};

renderMarkup(rules);
