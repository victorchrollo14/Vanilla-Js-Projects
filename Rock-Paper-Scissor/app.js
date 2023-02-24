const rockBtn = document.querySelector('.btn-rock');
const paperBtn = document.querySelector('.btn-paper');
const scissorBtn = document.querySelector('.btn-scissor');

const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const result = document.querySelector('.result');

const buttons = [rockBtn, paperBtn, scissorBtn];
let angle = 10;

// changing rock paper scissor


// Start rotating rock paper scissor on start.
start.addEventListener("click", () => {
    let timer = setInterval(rockPaperScissor, 10);
    function rockPaperScissor(){
        angle = angle + 10;
        circle1.style.transform = `rotate(${angle}deg)`;
        circle2.style.transform = `rotate(${-angle}deg)`;
    }

    buttons.forEach((btn) =>{
        let i = buttons.indexOf(btn);
        let j = Math.floor(Math.random() * 3);

        btn.addEventListener("click", (e) => {
            clearInterval(timer);
            console.log(i);
            removeCurrent(circle1.children[i]);
            circle1.style.transform = `initial`;
            circle2.style.transform = `initial`;
    
            // bot hand control
            removeCurrent1(circle2.children[j]);
    
            // check for winner
            checkWinner();
        })
    })

})




function removeCurrent(nextItem){
    let current = circle1.querySelector('.current');
    current.classList.remove('current');
    current.classList.add('hide');

    // adding current to the next item and removing hide
    nextItem.classList.remove('hide');
    nextItem.classList.add('current');
}

function removeCurrent1(nextItem){
    let current1 = circle2.querySelector('.current-1');
    current1.classList.remove('current-1');
    current1.classList.add('hide-1');

    nextItem.classList.remove('hide-1');
    nextItem.classList.add('current-1');

}

const checkWinner = () => {
    let yourChoice = circle1.querySelector('.current').attributes.alt.value;
    let botChoice = circle2.querySelector('.current-1').attributes.alt.value;
    console.log(yourChoice, botChoice);
    if (yourChoice === botChoice){
        result.innerHTML = `Draw`;
    }
    else if((yourChoice === 'fist' && botChoice === 'paper') || (yourChoice === 'paper' && botChoice === 'scissor') 
    ||(yourChoice === 'scissor' && botChoice === 'fist')){
        result.innerHTML = "'Bot Wins'";
    }
    else if(!(yourChoice === 'fist' && botChoice === 'paper') || !(yourChoice === 'paper' && botChoice === 'scissor') 
    ||!(yourChoice === 'scissor' && botChoice === 'fist')){
        result.innerHTML = "'You Win'";
    }
    
}




