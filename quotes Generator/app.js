const main = document.querySelector('.main');
const quoteSpace = document.querySelector(".quote-space");
const authorSpace = document.querySelector(".author-space");
const quoteButton = document.querySelector(".quote-button");

// fetching data from json file
const response = await fetch('./quotes.json');
const data = await response.json();

// color array
const colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#77B1A9',
    '#73A857'
]

const textColor = [
    '#77B1A9',
    '#FA6900',
    '#FB6964',
    '#27ae60',
    '#8A9B0F',
    '#69D2E7',
    '#9b59b6'
]

// Quote generation
quoteButton.addEventListener('click', (e) => {
    let rand = randomNum();
    let bc = randColor();
    let tc = Math.floor(Math.random() * 7);

    // design changes
    quoteSpace.innerHTML = data.quotes[rand].quote;
    authorSpace.innerHTML = data.quotes[rand].author;
    quoteSpace.style.color = textColor[tc];
    authorSpace.style.color = textColor[tc];
    main.style.background = `${colors[bc]}`;
    quoteButton.style.background = colors[bc];

});

// random number function
function randomNum(){
    const random = Math.floor(Math.random() * (102)) ;
    return random;
}

function randColor(){
    return Math.floor(Math.random() * 18);
}

quoteButton.addEventListener('mouseover', (e) => {
    quoteButton.style.background = 'inherit';
})









