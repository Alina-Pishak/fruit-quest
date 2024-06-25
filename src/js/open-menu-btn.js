const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const body = document.querySelector('body');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
  console.log('click');
};

openMenuBtn.addEventListener('click', toggleMobileMenu);

closeMenuBtn.addEventListener('click', toggleMobileMenu);
