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
    if (Number(num2) == 0) {
        return "Can't divide by 0"
    }
    else {
        return Number(num1) / Number(num2);
    }

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
        case "":
            newVal = num1;
            break;
    }
    return newVal;
}

let numChoice1 = 0;
let numChoice2 = 0;
let opChoice = "";
let displayVal = "";
const keyArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const fnArray = ["power", "clear", "%", "+/-"]
const opArray = ["+", "-", "/", "x"]
let buttonHistory = [];


const display = document.querySelector("#display-frame");


// add event listeners to all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", () => {
    const buttonText = button.textContent;
    buttonHistory.push(buttonText);
    // if equal sign is pressed, calculate operator based on last operand clicked
    // but only if an operand has been selected at least once
    // then update display and return
    if (buttonText == "=" && opChoice != "") {
        numChoice2 = displayVal
        displayVal = operate(opChoice, Number(numChoice1), Number(numChoice2));
        numChoice1 = displayVal;
        opChoice = "";
    }
    // if cleared, reset values
    else if (buttonText == "clear") {
        displayVal = "";
        numChoice1 = 0;
        opChoice = "";
    }
    // if user presses a number after an operand,
    // the display value is set to the new number
    // and the new number is saved in case of operation
    if ((Number.isFinite(Number(buttonText)) && opArray.includes(buttonHistory.at(-2))) || display.textContent == "") {
        displayVal = buttonText;
        numChoice2 = buttonText;
    }
    // if the last key pressed was a number or decimal,
    // append new key to display value
    else if (Number.isFinite(Number(buttonText)) || (buttonText == "." && displayVal % 1 == 0)) {
        displayVal += buttonText;
    }
    // when operand button is pressed
    else if ((opArray.includes(buttonText))) {
        // if no operand selected yet, save number and set operand
        if (opChoice == "") {
            numChoice1 = displayVal;
            opChoice = buttonText;
        }
        // if operand previously selected, perform calculation
        // and save calculated number in case of operation
        // and set new operand
        else {
            displayVal = operate(opChoice, Number(numChoice1), Number(displayVal));
            numChoice1 = displayVal;
            opChoice = buttonText;
        }
    }
    // update display if not calculating anything
    display.textContent = displayVal;
}))