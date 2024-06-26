const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuLinks = Array.from(
  document.querySelectorAll('.mobile-menu-link')
);
const body = document.querySelector('body');

const openMenu = () => {
  mobileMenu.classList.remove('hidden');
  body.classList.add('overflow-hidden');
  document.addEventListener('keydown', handleEscape);
  body.addEventListener('click', handleBackground);
  closeMenuBtn.addEventListener('click', closeMenu);
  mobileMenu.addEventListener('click', handleLink);
};

const closeMenu = () => {
  mobileMenu.classList.add('hidden');
  body.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', handleEscape);
  body.removeEventListener('click', handleBackground);
  closeMenuBtn.removeEventListener('click', closeMenu);
  mobileMenu.removeEventListener('click', handleLink);
};

const handleEscape = event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
};

const handleLink = e => {
  const isLink = mobileMenuLinks.find(link => link === e.target);
  if (isLink) {
    closeMenu();
  }
};

const handleBackground = e => {
  if (!mobileMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
    closeMenu();
  }
};

openMenuBtn.addEventListener('click', openMenu);

function setScrollBehavior() {
  const currentPage = window.location.pathname;

  const html = document.documentElement;

  if (currentPage === '/' || currentPage === '/index.html') {
    html.style.scrollBehavior = 'smooth';
  } else {
    html.style.scrollBehavior = 'auto';
  }
}

window.onload = setScrollBehavior;
