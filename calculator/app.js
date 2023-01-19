const InputValues = document.querySelectorAll('.input-sym');
const OutputBox = document.querySelector('.typing-part');
const AllClearBtn = document.querySelector('.ac');
const DelBtn = document.querySelector('.del');
const OutputPreview = document.querySelector('.output-preview');
const equal = document.querySelector('.equal');
const OperatorClasList = document.querySelectorAll('.opt');
let OperatorList = [];
let Expression = '';

OperatorClasList.forEach(opt =>{
      OperatorList.push(opt.innerHTML);
})
console.log(OperatorList);


InputValues.forEach(function(input, index){
    let col = 0;
    let content = input.innerHTML;
    let ClassNames = input.classList;
    

    input.addEventListener('click', function PrintContent(e){
        if(ClassNames.contains('special-1')){
            col = 1;
        }

        OutputBox.style.color = (col == 1)?'rgb(245, 112, 112)':'white';

        OutputBox.value += content;

        if (isNaN(content)){
            console.log("checking last value");
            OutputPreview.innerHTML = OutputBox.value.slice(0, length - 1);
        }
    });
} // end of function
)   // end of forEach()


// clearing the input box when the AC button is pressed.
AllClearBtn.addEventListener('click', function(e){
    OutputBox.value = '';
    OutputPreview.innerHTML = '';
})


// Removing the last character from input when Del button is click.
DelBtn.addEventListener('click', function(e){
    let DelOutput = OutputBox.value;
    OutputBox.value = DelOutput.slice(0, length-1);
    OutputPreview.innerHTML = OutputBox.value;
})

equal.addEventListener("click", function(event){
        if (OutputBox.value == ''){
            OutputBox.value = '';
        }
        else{
            let answer = eval(OutputBox.value);
            OutputBox.value = answer;
        }
})




