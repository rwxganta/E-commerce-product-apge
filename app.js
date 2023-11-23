const body = document.body;
const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');
const backdrop = document.querySelector('.backdrop');

const showoff = document.querySelector('.js-showoff img');
const tiles = document.querySelector('.js-tiles');
const previousBtn = document.querySelector('.js-previous');
const nextBtn = document.querySelector('.js-next');
const tilesArr = document.querySelectorAll('.tile img');
const addCountBtn = document.querySelector('.js-addBtn');
const subtractCountBtn = document.querySelector('.js-subtractBtn');
const countValue = document.querySelector('.js-countValue');


const tilesURLArray = [];
let currentTileMobile = 0;
let currentTile = document.querySelector("[data-selected='true']");

tilesArr.forEach((node) => {
    let src = node.attributes.src.textContent;
    src = `${src.substring(0, 24)}.jpg`;
    tilesURLArray.push(src);
});



menuBtn.addEventListener('click', menuHandle);
backdrop.addEventListener('click', menuHandle);
tiles.addEventListener('click', showoffHandle);
previousBtn.addEventListener('click', previousBtnHandle);
nextBtn.addEventListener('click', nextBtnHandle);
subtractCountBtn.addEventListener('click', subtractBtnHandle);
addCountBtn.addEventListener('click', addBtnHandle);



function menuHandle() {
    const bodyAttr = body.getAttribute('data-overflow');
    const menuAttr = menu.getAttribute('data-visible');
    const btnAttr = menuBtn.getAttribute('aria-expanded');
    const backdropAttr = backdrop.getAttribute('data-visible');

    body.setAttribute('data-overflow', bodyAttr === 'false' ? 'true' : 'false');
    menu.setAttribute('data-visible', menuAttr === 'false' ? 'true' : 'false');
    menuBtn.setAttribute('aria-expanded', btnAttr === 'false' ? 'true' : 'false');
    backdrop.setAttribute('data-visible', backdropAttr === 'false' ? 'true' : 'false');
}

function showoffHandle(e) {
    const srcAttr = e.target.attributes.src;
    if (!srcAttr) return;
    let showoffURL = e.target.attributes.src.textContent;
    showoffURL = `${showoffURL.substring(0, 24)}.jpg`;
    showoff.setAttribute('src', showoffURL);
    currentTile.setAttribute('data-selected', 'false');
    currentTile = e.target.parentElement;
    currentTile.setAttribute('data-selected', 'true');
}

function previousBtnHandle() {
    if (currentTileMobile === 0) return;
    currentTileMobile -= 1;
    showoff.setAttribute('src', tilesURLArray[currentTileMobile]);
}

function nextBtnHandle() {
    if (currentTileMobile === tilesURLArray.length - 1) return;
    currentTileMobile += 1;
    showoff.setAttribute('src', tilesURLArray[currentTileMobile]);
}

function subtractBtnHandle() {
    let value = parseInt(countValue.textContent);
    countValue.textContent = value === 0 ? 0 : --value;
}

function addBtnHandle() {
    countValue.textContent = parseInt(countValue.textContent) + 1;
}