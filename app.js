const body = document.body;
const openMenu = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');
const closeMenu = document.querySelector('.js-close-menu');
const backdrop = document.querySelector('.backdrop');


openMenu.addEventListener('click', openMenuHandle);
closeMenu.addEventListener('click', closeMenuHandle);
backdrop.addEventListener('click', closeMenuHandle);




// TODO: Solve resize problem while on mobile-menu open
function openMenuHandle() {
    body.classList.toggle('overflow');
    backdrop.style.display = 'initial';
    menu.style.display = 'initial';
}

function closeMenuHandle() {
    body.classList.toggle('overflow');
    backdrop.style.display = 'none';
    menu.style.display = 'none';
}