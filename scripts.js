function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
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
        case "*":
            newVal = multiply(num1, num2);
            break;
    }
    return newVal;
}

let numChoice1 = 0;
let numChoice2 = 0;
let opChoice = "";
let displayVal = 0;
let buttonPresses = 0;



const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", () => {
    //here we can put the logic for what needs to happen after a click
    //might be good to institute "clickCount" to show number of clicks,
    //and ensure user clicks number, operator, number, equals, in that order
    let display = document.querySelector("#display-frame");
    display.textContent = button.textContent;
}))