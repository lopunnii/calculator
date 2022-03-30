const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2; 
}

const divide = function (num1, num2) {
    return num1 / num2; 
}

const operate = function (operator, num1, num2) {
     return operator(num1, num2); 
}


const clickNumberButton = function() {
    const zeroButton = document.querySelector('.zero');
    zeroButton.addEventListener('click', () => {
        const zero = 0;
        display(zero);
    });
    const oneButton = document.querySelector('.one');
    oneButton.addEventListener('click', () => {
        const one = 1;
        display(one);
    });
    const twoButton = document.querySelector('.two');
    twoButton.addEventListener('click', () => {
        const two = 2;
        display(two);
    });
    const threeButton = document.querySelector('.three');
    threeButton.addEventListener('click', () => {
        const three = 3;
        display(three);
    });
    const fourButton = document.querySelector('.four');
    fourButton.addEventListener('click', () => {
        const four = 4;
        display(four);
    });
    const fiveButton = document.querySelector('.five');
    fiveButton.addEventListener('click', () => {
        const five = 5;
        display(five);
    });
    const sixButton = document.querySelector('.six');
    sixButton.addEventListener('click', () => {
        const six = 6;
        display(six);
    });
    const sevenButton = document.querySelector('.seven');
    sevenButton.addEventListener('click', () => {
        const seven = 7;
        display(seven);
    });
    const eightButton = document.querySelector('.eight');
    eightButton.addEventListener('click', () => {
        const eight = 8;
        display(eight);
    });
    const nineButton = document.querySelector('.nine');
    nineButton.addEventListener('click', () => {
        const nine = 9;
        display(nine);
    });
}
clickNumberButton(); 

let displayValue = [];

let display = function(number) {
    const display = document.querySelector('.display');
    displayValue.push(number); 
    display.textContent = displayValue.join('');
}

const clickClearButton = function() {
    const display = document.querySelector('.display');
    const clearButton = document.querySelector('.clear')
    clearButton.addEventListener('click', () => {
        display.textContent = 0;
        return displayValue = [];
    });
}
clickClearButton();

const defaultZero = function() {
    const display = document.querySelector('.display');
    return display.textContent = 0;
}
defaultZero();

let firstValue = []; 

const clickOperatorButton = function () {
    const addButton = document.querySelector('.add');
    addButton.addEventListener('click', () => {
        displayValue.forEach(element => firstValue.push(element));
        return displayValue = [];
    });
}
clickOperatorButton();