//Basic Operator Functions

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
    num1 = Number(firstValue.join(''));
    num2 = Number(secondValue.join(''));
    if (operator(num1, num2) >= 99999){
        return parseFloat(operator(num1, num2)).toExponential(3);
    } else {
    return parseFloat(operator(num1, num2).toFixed(3)); 
    }
}
//Values

let displayValue = [];
let firstValue = []; 
let secondValue = []; 

//Number Buttons

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
    const decimalButton = document.querySelector('.decimal');
    decimalButton.addEventListener('click', () => {
        const decimal = '.';
        display(decimal);
        disableDecimal();
    });
    
}
clickNumberButton(); 

//Decimals 

const disableDecimal = function () {
    if (displayValue.includes('.')) {
        document.querySelector('.decimal').disabled = true; 
    }
}

const enableDecimal = function () {
    document.querySelector('.decimal').disabled = false;
}

//Display 

let display = function(number) {
    const display = document.querySelector('.display');
    if (displayValue.length >= 8) {
        return
    } else {
    displayValue.push(number); 
    display.textContent = displayValue.join('');
    }
}

const defaultZero = function() {
    const display = document.querySelector('.display');
    return display.textContent = 0;
}
defaultZero();

//Backspace Button

const clickBackspaceButton = function() {
    const display = document.querySelector('.display');
    const backspaceButton = document.querySelector('.backspace');
    backspaceButton.addEventListener('click', () => {
    if (displayValue.length <= 1) {
        display.textContent = 0;
        return displayValue = [];
    } else {
        displayValue.pop();
        display.textContent = displayValue.join('');
    } 
    })
}
clickBackspaceButton();

//Clear Button

const clickClearButton = function() {
    const display = document.querySelector('.display');
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => {
        display.textContent = 0;
        resetFirstValue();
        resetSecondValue();
        enableDecimal();
        return displayValue = [];
    });
}
clickClearButton();

//Operator Buttons

let chosenOperator = 0;

const clickOperatorButton = function () {
    const addButton = document.querySelector('.add');
    addButton.addEventListener('click', () => {
        enableDecimal();
        if (!firstValue.length) {
            displayValue.forEach(element => firstValue.push(element));    
        } else {
            displayValue.forEach(element => secondValue.push(element));
            displayValue = [];
            operateValue();
        }
        changeChosenOperator(add);
        return displayValue = [];
    });
    const subtractButton = document.querySelector('.subtract');
    subtractButton.addEventListener('click', () => {
        enableDecimal();
        if (!firstValue.length) {
            displayValue.forEach(element => firstValue.push(element));    
        } else {
            displayValue.forEach(element => secondValue.push(element));
            displayValue = [];
            operateValue();
        }
        changeChosenOperator(subtract);
        return displayValue = [];
    });
    const multiplyButton = document.querySelector('.multiply');
    multiplyButton.addEventListener('click', () => {
        enableDecimal();
        if (!firstValue.length) {
            displayValue.forEach(element => firstValue.push(element));    
        } else {
            displayValue.forEach(element => secondValue.push(element));
            displayValue = [];
            operateValue();
        }
        changeChosenOperator(multiply);
        return displayValue = [];
    });
    const divideButton = document.querySelector('.divide');
    divideButton.addEventListener('click', () => {
        enableDecimal();
        if (!firstValue.length) {
            displayValue.forEach(element => firstValue.push(element));    
        } else {
            displayValue.forEach(element => secondValue.push(element));
            displayValue = [];
            operateValue();
        }
        changeChosenOperator(divide);
        return displayValue = [];
    });
}
clickOperatorButton();

let changeChosenOperator = function (operator) {
    return chosenOperator = operator; 
}

//Equal Button

const clickEqualButton = function () {
    const display = document.querySelector('.display');
    const equalButton = document.querySelector('.equal');
    equalButton.addEventListener('click', () => {
        enableDecimal();
        displayValue.forEach(element => secondValue.push(element));
        display.textContent = operate(chosenOperator, firstValue, secondValue);
        resetFirstValue();
        resetSecondValue();
        return displayValue = [];
    });
}
clickEqualButton(); 

//Operating complex equations (more than two values)

const operateValue = function () {
    display(operate(chosenOperator, firstValue, secondValue));
    if ((firstValue.length) && (secondValue.length)) {
        resetFirstValue();
        resetSecondValue();
        displayValue.forEach(element => firstValue.push(element));
    }
    return displayValue = [];
}

//Reset

const resetFirstValue = function () {
    return firstValue = [];
}

const resetSecondValue = function () {
    return secondValue = [];
}

//Keyboard Support

/*const keyboardSupport = function () {
    window.addEventListener("keydown", function(event) {
        if (event.key === 1){
            document.querySelector('.one').click();
        }
    })
}
keyboardSupport();*/