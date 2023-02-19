const squares = document.querySelectorAll('.item');
const symbols = document.querySelectorAll('.sym');
const X = document.querySelector('.x-mark');

const O = document.querySelector('.o-mark');

console.log(X);


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


let i = 1;
squares.forEach(square => {
    square.addEventListener("click", (e) =>{
        if (i === 1 && !e.target.hasChildNodes()){
            let XClone = X.cloneNode(true);
            e.target.appendChild(XClone);
        }
        else if(i === 0 && !e.target.hasChildNodes()){
            let OClone = O.cloneNode(true);
            e.target.appendChild(OClone);
        }
    i = (i == 0) ? 1:0;
       
    })
})



