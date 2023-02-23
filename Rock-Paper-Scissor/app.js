const rockBtn = document.querySelector('.btn-rock');
const paperBtn = document.querySelector('.btn-paper');
const scissorBtn = document.querySelector('.btn-scissor');

const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

const buttons = [rockBtn, paperBtn, scissorBtn]


// changing rock paper scissor
buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        let i = buttons.indexOf(btn);
        removeCurrent(circle1.children[i]);
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

