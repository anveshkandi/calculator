const buttonGrid = document.querySelectorAll('.number');
const specBtns = document.querySelectorAll('.special');
const clrBtn = document.querySelector('#clear');
const mult = document.querySelector('#multiply');
const lower = document.querySelector('.lower');
const upper = document.querySelector('.upper');
let firstNumExists = false;
let firstNumSet = false;
let specUsable = true;
let firstOp = [];
let secOp = [];
let firstOperation = '';
let secondOperation = '';

clrBtn.addEventListener('click', () => {
    firstNumExists = false;
    firstNumSet = false;
    specUsable = true;
    firstOp = [];
    secOp = [];
    firstOperation = '';
    secondOperation = '';
    lower.textContent = '';
    upper.textContent = '';
});

buttonGrid.forEach((button) => {
    button.addEventListener('click', () => {
        firstNumExists = true;
        if(firstNumExists && !firstNumSet){
            firstOp.push(button.textContent);
            firstOperation = firstOp.join('');
            lower.textContent = parseFloat(firstOperation);
        }
        else if (firstNumExists && firstNumSet){
            secOp.push(button.textContent);
            secondOperation = secOp.join('');
            lower.textContent = `${upper.textContent} ${secondOperation}`;
            console.log(`firstOp is: ${firstOperation}`);
            console.log(`secondOp is: ${secondOperation}`);
        }
    })
})

specBtns.forEach(button => {
    button.addEventListener('click', () => {
        if(specUsable){
            firstNumSet = true;
            specUsable = false;
            upper.textContent = `${lower.textContent} ${button.textContent}`;
        }
    })
})
