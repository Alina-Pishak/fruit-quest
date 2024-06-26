const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuLinks = Array.from(
  document.querySelectorAll('#mobile-menu-link')
);
const body = document.querySelector('body');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
};

openMenuBtn.addEventListener('click', toggleMobileMenu);

closeMenuBtn.addEventListener('click', toggleMobileMenu);

mobileMenu.addEventListener('click', e => {
  const isLink = mobileMenuLinks.find(link => link === e.target);
  if (isLink) {
    toggleMobileMenu();
  }
});
