const squares = document.querySelectorAll('.item');
const symbols = document.querySelectorAll('.sym');
const reset = document.querySelector('.reset');
const player = document.querySelector('.player');

// music
const gameOver = new Audio("Music/gameover.mp3");
const ting = new Audio("Music/ting.mp3");
const music = new Audio("Music/music.mp3");

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


// reStart the game
const reStart = () =>{
    squares.forEach(square => {
        if(!square.firstElementChild){
            return;
        }
        square.firstElementChild.remove();
        player.innerHTML = "Player 1";
        document.querySelector('.line').style.width = '0px';
        i = 1;
        music.play();
    })
}


// checking if any player has won
const checkWin = () =>{
    let winCombo = [
            [0, 1, 2, 0, -115, 0],
            [3, 4, 5, 0, -28, 0],
            [6, 7, 8, 0, 55, 0],
            [0, 3, 6, -84, -30, 90],
            [1, 4, 7, 0, -30, 90],
            [2, 5, 8, 84, -30, 90],
            [0, 4, 8, 0, -30, 45],
            [2, 4, 6, 0, -30, -45]
    ];
    let winGame = false;

    winCombo.forEach(e=>{
        let box1 = squares[e[0]].innerText;
        let box2 = squares[e[1]].innerText;
        let box3 = squares[e[2]].innerText;
        if (box1 === box2 && box2 === box3 && box3 === box1 && box1 != ''){
            winGame = true;
            document.querySelector('.line').style.width = '300px';
            document.querySelector('.line').style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
        }
        
    })
    return winGame;
}


//Game Logic
let i = 1;
const X = document.createElement('div');
X.classList.add('x-mark');
X.innerHTML = "✖";

const O = document.createElement('div');
O.classList.add('o-mark');
O.innerHTML = "O";

music.play();
squares.forEach(square => {
    square.addEventListener("click", (e) =>{
        if (i === 1 && !e.target.hasChildNodes()){
            let XClone = X.cloneNode(true);
            e.target.appendChild(XClone);
            player.innerHTML = `${players[i]}'s Turn`;
        }
        else if(i === 0 && !e.target.hasChildNodes()){
            let OClone = O.cloneNode(true);
            e.target.appendChild(OClone);
            player.innerHTML = `${players[i]}'s Turn`;
        }

        // changing the player and symbols on each turn
        i = (i == 0) ? 1:0; 
        let isGameOver = checkWin();                               
        if (isGameOver){
            music.pause();
            gameOver.play();
            player.innerHTML = `${players[i]} wins the game`;
            return;
        }

        ting.play();   
    })
})


// reset
reset.addEventListener("click", reStart)











