import 'bootstrap';

const navOpen = document.querySelector('.jedi-burger');
navOpen.addEventListener('click', () => {
  console.log(navOpen);
  document.querySelector('.nav-links').classList.toggle('open');
});
