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

function updateHeroContent () {
    heroItems.forEach(item => {
        item.classList.remove('active');
    })

    heroItems.forEach(item => {
        if (Number(item.getAttribute('data-hero')) === indexImg) {
            item.classList.add('active');
        } 
    })
}

nextBtn.addEventListener('click', function () {
    if (indexImg < 3) {
        indexImg++;
        heroSrc.srcset = `./images/desktop-image-hero-${indexImg}.jpg`
        heroImg.src = `./images/mobile-image-hero-${indexImg}.jpg`
    } else {
        indexImg = 1;
        heroSrc.srcset = `./images/desktop-image-hero-${indexImg}.jpg`
        heroImg.src = `./images/mobile-image-hero-${indexImg}.jpg`
    }
    updateHeroContent();
})

prevBtn.addEventListener('click', function () {
    if (indexImg > 1) {
        indexImg--;
        heroSrc.srcset = `./images/desktop-image-hero-${indexImg}.jpg`
        heroImg.src = `./images/mobile-image-hero-${indexImg}.jpg`
    } else {
        indexImg = 3;
        heroSrc.srcset = `./images/desktop-image-hero-${indexImg}.jpg`
        heroImg.src = `./images/mobile-image-hero-${indexImg}.jpg`
    }
    updateHeroContent();
})

menuBtn.addEventListener('click', function () {
    navWrapper.classList.add('active');
    menuBtn.classList.add('hide');
    closeBtn.classList.add('show');
    logo.classList.add('hide');
    navLists.classList.add('active');
})

closeBtn.addEventListener('click', function () {
    navWrapper.classList.remove('active');
    menuBtn.classList.remove('hide');
    closeBtn.classList.remove('show');
    logo.classList.remove('hide');
    navLists.classList.remove('active');
})