let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;
let isOperatorEntered = false;
let isEqualEntered = false;

const mainDisplay = document.querySelector('.displayMain');
const secondDisplay = document.querySelector('.displaySecond');
const addButton = document.querySelector('#button-add');
const subtractButton = document.querySelector('#button-subtract');
const multiplyButton = document.querySelector('#button-multiply');
const divideButton = document.querySelector('#button-divide');
const equalButton = document.querySelector('#button-equal');

const deleteButton = document.querySelector('#button-delete');
const clearButton = document.querySelector('#button-clear');
const numberButtons = document.querySelectorAll('.button.numbers');

deleteButton.addEventListener('click', () => deleteLast());
clearButton.addEventListener('click', () => clear());
addButton.addEventListener('click', () => inputOperator('+'));
subtractButton.addEventListener('click', () => inputOperator('-'));
multiplyButton.addEventListener('click', () => inputOperator('*'));
divideButton.addEventListener('click', () => inputOperator('/'));
equalButton.addEventListener('click', () => {
    calculate()
    //TODO:
    isEqualEntered = true;
}
    );

const numbersArray = Array.from(numberButtons);
numbersArray.forEach(numberButton => {

    console.log(numberButton.textContent);
    const numberValue = numberButton.textContent;

    numberButton.addEventListener('click', () => inputNumber(numberValue));

})


function inputNumber(number) {

if(isEqualEntered){
    clear();
    isEqualEntered = false;

}
if (!isOperatorEntered) {
    if (firstNumber === null) {
        firstNumber = number;
    }
    else {
        firstNumber += number;
    }

}
else {
    if (secondNumber === null) {
        secondNumber = number;
    }
    else {
        secondNumber += number;
    }
}
    displayContent();
}

function inputOperator(op) {
    if (firstNumber !== null && result === null) {
        isOperatorEntered = true;
        secondNumber = null;
        operator = op;
    }

    if(firstNumber !== null && result !== null){
        isOperatorEntered = true;
        isEqualEntered = false;
        firstNumber = result;
        secondNumber = null;
        operator = op;
    }
    displayContent();
}

function calculate() {
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            mainDisplay.textContent = result;
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            mainDisplay.textContent = result;
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            mainDisplay.textContent = result;
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            mainDisplay.textContent = result;
            break;
    }
}

function clear() {
    secondDisplay.textContent = '';
    mainDisplay.textContent = '0';
    isOperatorEntered = false;
    result = null;
    firstNumber = null;
    operator = null;
    secondNumber = null;
}

function deleteLast(){
    if(firstNumber !== null && operator === null && secondNumber === null){
        if(firstNumber.length > 1){
            firstNumber = firstNumber.slice(0,-1)
        }
        else{
            firstNumber = null;
        }
    }
    if(firstNumber !== null && operator !== null && secondNumber === null){
        operator = null;
        isOperatorEntered = false;
    }
    if(firstNumber !== null && operator !== null && secondNumber !== null){
        if(secondNumber.length > 1){
            secondNumber = secondNumber.slice(0,-1)
        }
        else{
            secondNumber = null;
            isEqualEntered = false;
        }
    }
    
    displayContent();
}

function displayContent(){

    let content = '';

    if (firstNumber !== null){
        content += firstNumber;
    }
    if (operator !== null){
        content += ' '
        content += operator;
        
    }
    if (secondNumber !== null){
        content += ' '
        content += secondNumber;
    }
    secondDisplay.textContent = content;
}