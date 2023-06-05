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
    newVal = 0;
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

numChoice1 = 0;
numChoice2 = 0;
opChoice = "";
displayVal = 0;

