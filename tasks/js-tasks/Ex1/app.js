
const defaultValue = 1;


let firstNumber = Number(prompt("enter number one:", defaultValue));
let secondNumber = Number(prompt("enter number two:", defaultValue));


function doPlus(a, b) {
    return a + b;
}

function doMul(a, b) {
    return a * b;
}

function doMinus(a, b) {
    return a - b;
}

function doDivide(a, b) {
    return a / b;
}



console.log(doPlus(firstNumber, secondNumber));
console.log(doMul(firstNumber, secondNumber));
console.log(doMinus(firstNumber, secondNumber));
console.log(doDivide(firstNumber, secondNumber));

