let firstNumber = null;
let operator = '';
let secondNumber = null;
let result = null;
let isOperatorEntered = false;

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
equalButton.addEventListener('click', () => calculate());

const numbersArray = Array.from(numberButtons);
numbersArray.forEach(numberButton => {

    console.log(numberButton.textContent);
    const numberValue = numberButton.textContent;

    numberButton.addEventListener('click', () => inputNumber(numberValue));

})


function inputNumber(number) {

    if (!isOperatorEntered) {
        if (firstNumber === null) {
            firstNumber = number;
        }
        else {
            firstNumber += number;
        }

        secondDisplay.textContent = firstNumber;
    }
    else {
        if (secondNumber === null) {
            secondNumber = number;
        }
        else {
            secondNumber += number;
        }

        secondDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }

}

function inputOperator(op) {
    if (firstNumber !== null && result === null) {
        isOperatorEntered = true;
        secondNumber = null;
        operator = op;
        secondDisplay.textContent = `${firstNumber} ${operator}`;
    }

    if(firstNumber !== null && result !== null){
        isOperatorEntered = true;
        firstNumber = result;
        secondNumber = null;
        operator = op;
        secondDisplay.textContent = `${firstNumber} ${operator}`;
    }

}

function calculate() {
    switch (operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            mainDisplay.textContent = result;
            break;
        case '-':
            result = parseInt(firstNumber) - parseInt(secondNumber);
            mainDisplay.textContent = result;
            break;
        case '*':
            result = parseInt(firstNumber) * parseInt(secondNumber);
            mainDisplay.textContent = result;
            break;
        case '/':
            result = parseInt(firstNumber) / parseInt(secondNumber);
            mainDisplay.textContent = result;
            break;
    }
}

function clear() {
    secondDisplay.textContent = '';
    mainDisplay.textContent = '0';
    isOperatorEntered = false;
    firstNumber = null;
    secondNumber = null;
}

function deleteLast(){
    if(firstNumber !== null && secondNumber === null){
        if(firstNumber.length > 1){
            firstNumber = firstNumber.slice(0,-1)
        }
        else{
            firstNumber = null;
        }
        secondDisplay.textContent = firstNumber;
    }

}