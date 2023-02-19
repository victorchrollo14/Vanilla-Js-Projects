const squares = document.querySelectorAll('.item');
const symbols = document.querySelectorAll('.sym');
const reset = document.querySelector('.reset');
const player = document.querySelector('.player');

// music
const gameOver = new Audio("Music/gameover.mp3");
const ting = new Audio("Music/ting.mp3");
const music = new Audio("Music/music.mp3");
// music.play();

// internal varibles
const players = ["Player 1", "Player 2"];



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


// Displaying X and O.
let i = 1;
const X = document.createElement('div');
X.classList.add('x-mark');
X.innerHTML = "✖";

const O = document.createElement('div');
O.classList.add('o-mark');
O.innerHTML = "O";

squares.forEach(square => {
    square.addEventListener("click", (e) =>{
        if (i === 1 && !e.target.hasChildNodes()){
            let XClone = X.cloneNode(true);
            e.target.appendChild(XClone);
            player.innerHTML = `${players[i]}`;
        }
        else if(i === 0 && !e.target.hasChildNodes()){
            let OClone = O.cloneNode(true);
            e.target.appendChild(OClone);
            player.innerHTML = `${players[i]}`;
        }
        
    i = (i == 0) ? 1:0;
       
    })
})


// reset
reset.addEventListener("click", function(e){
    squares.forEach(square => {
        if(!square.firstElementChild){
            return;
        }
        square.firstElementChild.remove();

    })
})



// checking if any player has won
const checkWin = () =>{

}



