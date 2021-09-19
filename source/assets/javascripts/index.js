import 'bootstrap';

const navOpen = document.querySelector('.hamburger');
navOpen.addEventListener('click', (event) => {
  console.log(navOpen);
  document.querySelector('.nav-links').classList.toggle('open');
  navOpen.classList.toggle('open');
});
