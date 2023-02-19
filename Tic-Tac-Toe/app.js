const squares = document.querySelector('.game-board').children;
const symbols = document.querySelectorAll('.sym');
const X = document.querySelector('.x-mark');
const O = document.querySelector('.o-mark');

console.log(O, X);


// changing focus on the selected symbol
symbols.forEach(symbol => {
    symbol.addEventListener("click", (e) => {
        e.target.classList.add('active');
        if(e.target.previousElementSibling){
            e.target.previousElementSibling.classList.remove('active');
        }
        else{
            e.target.nextElementSibling.classList.remove('active');
        }
        
    })
});