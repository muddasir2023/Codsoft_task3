let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let currentResult = null;

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    currentResult = null;
    display.textContent = "0";
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function setOperator(operator) {
    if (currentInput !== "") {
        if (currentResult !== null) {
            calculate();
        }
        currentOperator = operator;
        currentResult = parseFloat(currentInput);
        currentInput = "";
    }
}

function calculate() {
    if (currentOperator !== "" && currentInput !== "") {
        const input = parseFloat(currentInput);
        switch (currentOperator) {
            case "+":
                currentResult += input;
                break;
            case "-":
                currentResult -= input;
                break;
            case "*":
                currentResult *= input;
                break;
            case "/":
                currentResult /= input;
                break;
        }
        display.textContent = currentResult;
        currentInput = "";
        currentOperator = "";
    }
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        setOperator(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

clearDisplay();
