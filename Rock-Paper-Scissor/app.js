const rockBtn = document.querySelector('.btn-rock');
const paperBtn = document.querySelector('.btn-paper');
const scissorBtn = document.querySelector('.btn-scissor');

const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

const buttons = [rockBtn, paperBtn, scissorBtn];
const circles = [circle1, circle2];
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
        btn.addEventListener("click", (e) => {
            clearInterval(timer);
            let i = buttons.indexOf(btn);
            removeCurrent(circle1.children[i]);
        })
    })

})


function removeCurrent(nextItem){
    let current = document.querySelector('.current');
    current.classList.remove('current');
    current.classList.add('hide');

    // adding current to the next item and removing hide
    nextItem.classList.remove('hide');
    nextItem.classList.add('current');
}






