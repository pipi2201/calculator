function add(a, b) {
    return +a + +b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1;
let num2;
let operator;
let operatorCount = 0;
let decimalCount = 0;
let displayContent = [];
const display = document.querySelector(".display");
display.textContent = displayContent;

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    }
    if (operator === "-") {
        return substract(num1, num2);
    }
    if (operator === "*") {
        return multiply(num1, num2);
    }
    if (operator === "/") {
        return divide(num1, num2);
    }
}

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    displayContent.push("9");
    display.textContent = displayContent.join("");
});

addEventListener("keydown", (event) => {
    switch (event.key) {
        case "9":
            displayContent.push("9");
            display.textContent = displayContent.join("");
            break;
        case "8":
            displayContent.push("8");
            display.textContent = displayContent.join("");
            break;
        case "7":
            displayContent.push("7");
            display.textContent = displayContent.join("");
            break;
        case "6":
            displayContent.push("6");
            display.textContent = displayContent.join("");
            break;
        case "5":
            displayContent.push("5");
            display.textContent = displayContent.join("");
            break;
        case "4":
            displayContent.push("4");
            display.textContent = displayContent.join("");
            break;
        case "3":
            displayContent.push("3");
            display.textContent = displayContent.join("");
            break;
        case "2":
            displayContent.push("2");
            display.textContent = displayContent.join("");
            break;
        case "1":
            displayContent.push("1");
            display.textContent = displayContent.join("");
            break;
        case "0":
            displayContent.push("0");
            display.textContent = displayContent.join("");
            break;
        case "Backspace":
            displayContent.pop();
            display.textContent = displayContent.join("");
            break;
        case ".":
            handleComma();
            break;
        case "=":
            getResult();
            break;
        case "+":
            operatorCount++;
            decimalCount = 0;
            if (operatorCount > 1) {
                getResult();
            };
            displayContent.push("+");
            display.textContent = displayContent.join("");
            break;
        case "-":
            operatorCount++;
            decimalCount = 0;
            if (operatorCount > 1) {
                getResult();
            };
            displayContent.push("-");
            display.textContent = displayContent.join("");
            break;
        case "/":
            operatorCount++;
            decimalCount = 0;
            if (operatorCount > 1) {
                getResult();
            };
            displayContent.push("/");
            display.textContent = displayContent.join("");
            break;
        case "*":
            operatorCount++;
            decimalCount = 0;
            if (operatorCount > 1) {
                getResult();
            };
            displayContent.push("*");
            display.textContent = displayContent.join("");
            break;
    }
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    displayContent.push("8");
    display.textContent = displayContent.join("");
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    displayContent.push("7");
    display.textContent = displayContent.join("");
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    displayContent.push("6");
    display.textContent = displayContent.join("");
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    displayContent.push("5");
    display.textContent = displayContent.join("");
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    displayContent.push("4");
    display.textContent = displayContent.join("");
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    displayContent.push("3");
    display.textContent = displayContent.join("");
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    displayContent.push("2");
    display.textContent = displayContent.join("");
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    displayContent.push("1");
    display.textContent = displayContent.join("");

});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    displayContent.push("0");
    display.textContent = displayContent.join("");
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    displayContent.pop();
    display.textContent = displayContent.join("");
});

const comma = document.querySelector("#comma");
comma.addEventListener("click", handleComma);

const divideOperator = document.querySelector("#divideOperator");
divideOperator.addEventListener("click", () => {
    operatorCount++;
    decimalCount = 0;
    if (operatorCount > 1) {
        getResult();
    };
    displayContent.push("/");
    display.textContent = displayContent.join("");

});

const multiplyOperator = document.querySelector("#multiplyOperator");
multiplyOperator.addEventListener("click", () => {
    operatorCount++;
    decimalCount = 0;
    if (operatorCount > 1) {
        getResult();
    };
    displayContent.push("*");
    display.textContent = displayContent.join("");
});

const substractOperator = document.querySelector("#substractOperator");
substractOperator.addEventListener("click", () => {
    operatorCount++;
    decimalCount = 0;
    if (operatorCount > 1) {
        getResult();
    };
    displayContent.push("-");
    display.textContent = displayContent.join("");
});

const addOperator = document.querySelector("#addOperator");
addOperator.addEventListener("click", () => {
    operatorCount++;
    decimalCount = 0;
    if (operatorCount > 1) {
        getResult();
    };
    displayContent.push("+");
    display.textContent = displayContent.join("");
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    displayContent = [];
    display.textContent = displayContent;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    operatorCount = 0;
    decimalCount = 0;
});

const equalSign = document.querySelector("#equalSign");
equalSign.addEventListener("click", getResult);

function handleComma() {
    decimalCount++;
    if (decimalCount === 1) {
        displayContent.push(".");
        display.textContent = displayContent.join("");
    }
};

function getIndexOfOperatorN(array, n) {
    let count = 0;
    for (let i = 0; i < displayContent.length; i++) {
        if (isNaN(parseInt(displayContent[i])) && (displayContent[i] != ".")) { 
            count++;
        }
        if (count === n) {
            return i;
        }
    }
    return false;
}

function getResult() {
    let operatorIndex = getIndexOfOperatorN(displayContent, 1);
    if (operatorIndex === false) {
        display.textContent = "Please enter an operator!";
        return 1;
    }
    num1 = displayContent.toSpliced(operatorIndex).join("");
    operator = displayContent[operatorIndex];
    num2 = displayContent.toSpliced(0, (operatorIndex + 1)).join("");
    if (operator === "/" && num2 === "0") {
        display.textContent = "Duh! Can't divide by 0";
        return 1;
    }
    let result = operate(num1, num2, operator);
    if (result % 1 !== 0) {
        result = parseFloat(result.toFixed(2));
    };
    display.textContent = result;
    num1 = result;
    displayContent = [num1];
    decimalCount = 0;
}