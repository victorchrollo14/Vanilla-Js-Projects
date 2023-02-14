const InputBtns = document.querySelectorAll('.input-sym');
const screen = document.querySelector('.typing-part');
const delBtn = document.querySelector('.del');
const AC = document.querySelector(".ac");
const equal = document.querySelector('.equal');
const OperatorClassList = document.querySelectorAll('.opt');
const preview = document.querySelector('.output-preview');

let cross = document.querySelector('.cross').innerHTML.trim('');
let divide = document.querySelector('.divide').innerHTML.trim('');
let minus = document.querySelector('.minus').innerHTML.trim('');


let OperatorList = [];

for(let i = 0;i < OperatorClassList.length; i++){
    let operator = OperatorClassList[i].innerHTML.trim('');
    OperatorList.push(operator);
}


InputBtns.forEach(input =>{
    input.addEventListener('click',function ShowScreen(e){
        let value = input.innerHTML.trim('');
        screen.value += value;
    })
})


// All clear 
AC.addEventListener("click", function(){
    screen.value = '';
})

// Backspace
delBtn.addEventListener("click", function(){
    CharLen = screen.value.length - 1;
    screen.value = screen.value.substr(0, CharLen);
})

// Evaluating answers
equal.addEventListener('click', function(){
   
    let expression = screen.value;
    for(let i = 0; i < OperatorList.length; i++){
        if (expression.includes(OperatorList[i])){
            let opt = OperatorList[i];
            res = eval(expression, opt);
        }
    }
    if (screen.value === ''){
        screen.value = '';
    }
    else{
        screen.value = res;
    }
    
})

// function to evaluate expression
function eval(exp, opt){
    let midIndex = exp.indexOf(opt);
    let a = Number(exp.slice(0, midIndex));
    let b = Number(exp.slice(midIndex+1, exp.length));
    if (opt == cross){
        return a*b;
    }
    else if(opt == divide){
        return (a/b).toPrecision(4);
    }
    else if(opt == '+'){
        return a+b;
    }
    else if(opt == minus){
        return a - b;
    }
    

}

// Animation
const toggle = document.querySelector('.dark-mode-toggle');
const circle = toggle.firstElementChild;
const calcBody = document.querySelector('.calc-body');
const symbolSpace = document.querySelector('.symbols-space');
let specialbuttons = [delBtn, AC, equal];
const mainBody = document.querySelector('.calc-container');

let count = 1;
function darkMode(){
    if (count == 1){
            mainBody.style.backgroundImage = " ";
            mainBody.style.background = "black";
            toggle.style.background = "black";
            circle.style.background = "white";
            circle.style.transform = "translateX(30px)";
            calcBody.style.background = "white";
            screen.style.background = "white";
            screen.style.color = "black";
            symbolSpace.style.background = "#eef5f5";
            symbolSpace.children[16].style.color = "black";

            InputBtns.forEach(input =>{
                input.classList.add("box-shadow");
                if (input.classList.contains("opt") === false){
                    input.style.color = 'black';
                }
            
            })

            specialbuttons.forEach(btn =>{
                btn.style.background = "#eef5f5";
                btn.classList.add("box-shadow");

            })

            equal.classList.remove("hover-effect");
            equal.classList.add("light-hover-effect");
    } // end of if
    else {
            mainBody.style.backgroundImage = "";
            mainBody.style.background = "white";
            toggle.style.background = "white";
            circle.style.background = "black";
            circle.style.transform = "translateX(0px)";
            calcBody.style.background = "black";
            screen.style.background = "black";
            screen.style.color = "white";
            symbolSpace.style.background = "#353536";
            symbolSpace.children[16].style.color = "white";

            InputBtns.forEach(input =>{
                input.classList.remove("box-shadow");
                if (input.classList.contains("opt") === false){
                    input.style.color = 'white';
                }
            
            })

            specialbuttons.forEach(btn =>{
                btn.style.background = "#353536";
                btn.classList.remove("box-shadow");

            })
            equal.classList.remove("light-hover-effect");
            equal.classList.add("hover-effect");
    }
    count = (count == 1) ? 0:1;

} // end of darkMode()


toggle.addEventListener("click", darkMode);