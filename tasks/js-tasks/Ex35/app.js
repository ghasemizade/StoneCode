

let num1 = +prompt("enter number1");
let op = prompt("/, *, +, -");
let num2 = +prompt("enter number2");


function calculator(n1, n2, op) {
    switch (op) {
        case "+":
            console.log(n1 + n2);
            break;
        case "-":
            console.log(n1 - n2);
            break;
        case "/":
            console.log(n1 / n2);
            break;
        case "*":
            console.log(n1 * n2);
            break;
        default:
            break;
    }
}

calculator(num1, num2, op)