const menuBtn = document.querySelector('.discover__nav-menu');
const closeBtn = document.querySelector('.discover__nav-close');
const logo = document.querySelector('.discover__nav-logo');
const navLists = document.querySelector('.discover__nav-lists'); 
const navWrapper = document.querySelector('.discover__nav-wrapper'); 
const heroSrc = document.querySelector('.discover__hero source'); 
const heroImg = document.querySelector('.discover__hero img'); 
const nextBtn = document.querySelector('.discover__control .next-btn'); 
const prevBtn = document.querySelector('.discover__control .prev-btn'); 
const heroItems = document.querySelectorAll('.discover__content'); 
let indexImg = 1;

const SLIDE_COUNT = 3;

function goTo(slide) {
  indexImg = ((slide - 1 + SLIDE_COUNT) % SLIDE_COUNT) + 1;
  heroSrc.srcset = `./images/desktop-image-hero-${indexImg}.jpg`;
  heroImg.src = `./images/mobile-image-hero-${indexImg}.jpg`;
  heroItems.forEach(item => item.classList.toggle('active', Number(item.dataset.hero) === indexImg));
}

nextBtn.addEventListener('click', () => goTo(indexImg + 1));
prevBtn.addEventListener('click', () => goTo(indexImg - 1));
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(indexImg + 1);
  if (e.key === 'ArrowLeft') goTo(indexImg - 1);
});

menuBtn.addEventListener('click', function () {
    navWrapper.classList.add('active');
    menuBtn.classList.add('hide');
    closeBtn.classList.add('show');
    logo.classList.add('hide');
    navLists.classList.add('active');
    closeBtn.focus();
})

closeBtn.addEventListener('click', function () {
    navWrapper.classList.remove('active');
    menuBtn.classList.remove('hide');
    closeBtn.classList.remove('show');
    logo.classList.remove('hide');
    navLists.classList.remove('active');
})