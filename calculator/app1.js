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