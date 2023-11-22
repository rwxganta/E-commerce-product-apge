const showoff = document.querySelector('.js-showoff img');
const tiles = document.querySelector('.js-tiles');
const previousBtn = document.querySelector('.js-previous');
const nextBtn = document.querySelector('.js-next');
const tilesArr = document.querySelectorAll('.tile img');


const tilesURLArray = [];
let currentTile = document.querySelector("[data-selected='true']");

tilesArr.forEach((node) => {
    let src = node.attributes.src.textContent;
    src = `${src.substring(0, 24)}.jpg`;
    tilesURLArray.push(src);
});



tiles.addEventListener('click', showoffHandle);
previousBtn.addEventListener('click', previousBtnHandle);
nextBtn.addEventListener('click', nextBtnHandle);



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
    if (currentTile === 0) return;
    currentTile -= 1;
    showoff.setAttribute('src', tilesURLArray[currentTile]);
}

function nextBtnHandle() {
    if (currentTile === tilesURLArray.length - 1) return;
    currentTile += 1;
    showoff.setAttribute('src', tilesURLArray[currentTile]);
}