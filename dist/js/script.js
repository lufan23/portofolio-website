const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active'); 
    menu.classList.toggle('menu-active')
});

window.addEventListener('scroll', () => {
    hamburger.classList.toggle('is-active'); 
    menu.classList.toggle('menu-active')
})
