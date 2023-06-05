function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(operator, num1, num2) {
    let newVal = 0;
    switch (operator) {
        case "+":
            newVal = add(num1, num2);
            break;
        case "-":
            newVal = subtract(num1, num2);
            break;
        case "/":
            newVal = divide(num1, num2);
            break;
        case "x":
            newVal = multiply(num1, num2);
            break;
    }
    return newVal;
}

let numChoice1 = 0;
let operatedVal = 0;
let opChoice = "";
let displayVal = "";
let buttonHistory = [];
const keyArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "/", "x"]
const display = document.querySelector("#display-frame");


// add event listeners to all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", () => {
    // if equal sign is pressed, calculate operator based on last operand clicked
    // but only if an operand has been selected at least once
    // then update display and return
    if (Number.isFinite(Number(buttonHistory.at(-1))) && opChoice != "" && button.textContent == "=") {
        operatedVal = operate(opChoice, Number(numChoice1), Number(displayVal));
        displayVal = operatedVal;
        display.textContent = displayVal;
        numChoice1 = Number(buttonHistory.at(-1));
        return;
    }
    // if cleared, reset values
    else if (button.textContent == "clear") {
        displayVal = 0;
        numChoice1 = 0;
        opChoice = "";
        buttonHistory = [];
        operatedVal = 0;
    }
    // add key press to list of key presses
    if (keyArray.includes(button.textContent)) {
        buttonHistory.push(button.textContent);
    }
    // if user presses a number after an operand,
    // the display value is set to the new number
    if (Number.isFinite(Number(buttonHistory.at(-1))) && opChoice != "" && buttonHistory.at(-2) == opChoice && button.textContent != "=") {
        displayVal = button.textContent;
    }
    // if the last key pressed was a number or decimal,
    // append new key to display value
    else if (Number.isFinite(Number(buttonHistory.at(-1))) || (buttonHistory.at(-1) == "." && displayVal % 1 == 0)) {
        displayVal += buttonHistory.at(-1);
    }
    else if ((keyArray.includes(buttonHistory.at(-1), 11))) {
        numChoice1 = displayVal;
        opChoice = buttonHistory.at(-1);
    }
    // update display if not calculating anything
    display.textContent = displayVal;
}))