const buttonGrid = document.querySelectorAll('.number');
const specBtns = document.querySelectorAll('.special');
const evalBtn = document.querySelector('.eval');
const clrBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const mult = document.querySelector('#multiply');
const lower = document.querySelector('.lower');
const upper = document.querySelector('.upper');
let firstNumExists = false;
let firstNumSet = false;
let firstOp = [];
let secOp = [];
let firstOperation = '';
let secondOperation = '';
let operator = '';

clrBtn.addEventListener('click', () => {
    firstNumExists = false;
    firstNumSet = false;
    firstOp = [];
    secOp = [];
    firstOperation = '';
    secondOperation = '';
    lower.textContent = '';
    upper.textContent = '';
});

deleteBtn.addEventListener('click', () => {
    if (!firstNumSet) {
        firstOp.pop();
        firstOperation = firstOp.join('');
        lower.textContent = firstOperation;
    }
    else {
        secOp.pop();
        secondOperation = secOp.join('');
        lower.textContent = secondOperation;
    }
})

buttonGrid.forEach((button) => {
    button.addEventListener('click', () => {
        firstNumExists = true;
        if(firstNumExists && !firstNumSet){
            console.log(button.textContent);
            firstOp.push(button.textContent);
            firstOperation = firstOp.join('');
            lower.textContent = firstOperation;
        }
        else if (firstNumExists && firstNumSet){
            secOp.push(button.textContent);
            secondOperation = secOp.join('');
            lower.textContent = secondOperation;
            console.log(`firstOp is: ${firstOperation}`);
            console.log(`secondOp is: ${secondOperation}`);
        }
    })
})

specBtns.forEach(button => {
    button.addEventListener('click', () => {
        console.log('I pressed a spec button!');
        firstNumSet = true;
        operator = button.textContent;
        console.log(operator)
        upper.textContent = `${lower.textContent} ${button.textContent}`;
    })
})

evalBtn.addEventListener('click', () => {
    let temp = 0;
    switch(operator){
        case '×':
            temp = multiply(parseFloat(firstOperation), parseFloat(secondOperation));
            break;
        case '÷':
            temp = divide(parseFloat(firstOperation), parseFloat(secondOperation));
            break;
        case '+':
            temp = add(parseFloat(firstOperation), parseFloat(secondOperation));
            break;
        case '-':
            temp = subtract(parseFloat(firstOperation), parseFloat(secondOperation));
    }

    firstOperation = temp;
    secOp = [];
    lower.textContent = temp;
    upper.textContent = '';
    console.log(firstOperation);
    console.log(firstNumExists);
    console.log(firstNumSet);
})

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}