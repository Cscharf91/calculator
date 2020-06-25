let operator;
let prevNum = '';
let currentNum = '';
let displayNum = document.querySelector('#numText');
displayNum.textContent = currentNum;

//Operator functions
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

//Converts current and previous number strings into numbers and calls
//operator functions
function operate(operator, num1, num2) {
    num1 = parseFloat(prevNum, 10);
    num2 = parseFloat(currentNum, 10);
    if (operator == 'add') {
        return add(num1, num2);
    } if (operator == 'subtract') {
        return subtract(num1, num2);
    } if (operator == 'multiply') {
        return multiply(num1, num2);
    } if (operator == 'divide') {
        return divide(num1, num2);
    } if (operator == '') {
        displayNum.textContent = '';
    }
}

//Number buttons

let buttonZero = document.querySelector('#num0');
buttonZero.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '0';
    displayNum.textContent = currentNum;
    }
});

let buttonOne = document.querySelector('#num1');
buttonOne.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '1';
    displayNum.textContent = currentNum;
    }
});

let buttonTwo = document.querySelector('#num2');
buttonTwo.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '2';
    displayNum.textContent = currentNum;
    }
});

let buttonThree = document.querySelector('#num3');
buttonThree.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '3';
    displayNum.textContent = currentNum;
    }
});

let buttonFour = document.querySelector('#num4');
buttonFour.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '4';
    displayNum.textContent = currentNum;
    }
});

let buttonFive = document.querySelector('#num5');
buttonFive.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '5';
    displayNum.textContent = currentNum;
    }
});

let buttonSix = document.querySelector('#num6');
buttonSix.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '6';
    displayNum.textContent = currentNum;
    }
});

let buttonSeven = document.querySelector('#num7');
buttonSeven.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '7';
    displayNum.textContent = currentNum;
    }
});

let buttonEight = document.querySelector('#num8');
buttonEight.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '8';
    displayNum.textContent = currentNum;
    }
});

let buttonNine = document.querySelector('#num9');
buttonNine.addEventListener('click', () => {
    if (currentNum.length < 10) {
    currentNum = currentNum + '9';
    displayNum.textContent = currentNum;
    }
});

//Utility (clear/del) and operator buttons

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    prevNum = '';
    currentNum = '';
    operator = '';
    displayNum.textContent = currentNum;
    }
);

let delBtn = document.querySelector('#delete');
delBtn.addEventListener('click', () => {
    currentNum = currentNum.slice(0, currentNum.length - 1);
    displayNum.textContent = currentNum;
    }
);

let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    if (currentNum !== '') {
    prevNum = currentNum;
    operator = 'add';
    currentNum = '';
    } else {
        operator = 'add';
    }
    }
);

let subtractBtn = document.querySelector('#subtract');
subtractBtn.addEventListener('click', () => {
    if (currentNum !== '') {
    prevNum = currentNum;
    operator = 'subtract';
    currentNum = '';
    } else {
        operator = 'subtract';
    }
    }
);

let multiplyBtn = document.querySelector('#multiply');
multiplyBtn.addEventListener('click', () => {
    if (currentNum !== '') {
    prevNum = currentNum;
    operator = 'multiply';
    currentNum = '';
    } else {
        operator = 'multiply';
    }
    }
);

let divideBtn = document.querySelector('#divide');
divideBtn.addEventListener('click', () => {
    if (currentNum !== '') {
    prevNum = currentNum;
    operator = 'divide';
    currentNum = '';
    } else {
        operator = 'divide';
    }
    }
);

let equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
    if (currentNum == '') {
    displayNum.textContent = '';
    } else if (prevNum == '') {
        displayNum.textContent = currentNum;
    } else {
    currentNum = operate(operator, prevNum, currentNum);
    displayNum.textContent = currentNum;
    }
});

let decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    if (currentNum.length < 10 && !displayNum.textContent.includes('.')) {
        if (currentNum.textContent == '') {
            currentNum = currentNum + '0';
            displayNum.textContent = currentNum;
        } else {
        currentNum = currentNum + '.';
        displayNum.textContent = currentNum;
        }
        }
});