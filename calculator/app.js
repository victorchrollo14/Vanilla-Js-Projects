const InputValues = document.querySelectorAll('.input-sym');
const OutputBox = document.querySelector('.typing-part');
const AllClear = document.querySelector('.ac');
const del = document.querySelector('.del');
const OutputPreview = document.querySelector('.output-preview')


InputValues.forEach(input =>{
    let content = input.innerHTML;
    input.addEventListener('click', function PrintContent(){
        OutputBox.value += content;
        let Expression = OutputBox.value;
        let LastValue = Expression.charAt(Expression.length - 1);

        console.log(isNaN(LastValue));
        if (isNaN(LastValue) == false){
            OutputPreview.innerHTML = OutputBox.value;
        }
        

    });
} // end of function
)   // end of forEach()


AllClear.addEventListener('click', function(){
    OutputBox.value = '';
    OutputPreview.innerHTML = '';
})

del.addEventListener('click', function(){
    let DelOutput = OutputBox.value;
    OutputBox.value = DelOutput.slice(0, length-1);
    OutputPreview.innerHTML = OutputBox.value;
})

console.log(OutputPreview.innerHTML);

