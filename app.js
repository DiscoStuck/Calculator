/* Declarations */
let operator = null
let previousNumber = null
let nextNumber = null
let decimal = false
let previousDigits = null
let newDigit = null
let resetNumber = false

/* Operations */
function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}


/* Add digit */
function addDigit(newDigit, previousDigits){
    if(Math.floor(Number(screen.textContent)) == screen.textContent){
        if(decimal){
            printDigit(previousDigits + newDigit/10)
            decimal = false
        }
        else if(resetNumber == true || screen.textContent == ''){
            printDigit(newDigit)
            resetNumber = false
        }
        else printDigit(previousDigits * 10 + newDigit)
        }
    else{
        if(resetNumber == true || screen.textContent == ''){
            printDigit(newDigit)
            resetNumber = false
        }
        else printDigit(previousDigits * 10 + newDigit)
    }
}

/* Result */
function getResult(current, previous, operator){
    switch (operator){
        case '+':
            printResult(add(previous,current))
            break
        case '-':
            printResult(subtract(previous,current))
            break
        case 'x':
            printResult(multiply(previous,current))
            break
        case '/':
            printResult(divide(previous,current))
            break
    }

}

/* Print Result */
function printResult(result){
    if (result/100000000 > 1) screen.textContent = 'ERROR'
    else screen.textContent = Math.round(result*10)/10

}

/* Print digit */
    let screen = document.querySelector('#screenNumber')
    function printDigit(number){
        if (number === null) screen.textContent = ''
        else if (number/100000000 < 1){
            previousDigits = number
            screen.textContent = number
        }
    }

/* Buttons click */
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('number')){
        nextDigit = Number(e.target.id)
        addDigit(nextDigit, previousDigits)
    }
    else if(e.target.classList.contains('operator')){
        if(!previousNumber) previousNumber = Number(screen.textContent)
        else{
            getResult(Number(screen.textContent), previousNumber, operator)
            previousNumber = Number(screen.textContent)
        }
        operator = e.target.id
        resetNumber = true
    } 
    else if(e.target.classList.contains('delete')){
        screen.textContent = ''
        operator = null
        previousNumber = null
        nextNumber = null
        decimal = false
    }
    else if(e.target.classList.contains('equal')){
        if(operator){
        getResult(Number(screen.textContent),previousNumber, operator)
        operator = null
        resetNumber = true
        }
    }
    else if(e.target.classList.contains('dot') && Number(screen.textContent) == Math.floor(Number(screen.textContent))){
        decimal = true
    }
    }
))
