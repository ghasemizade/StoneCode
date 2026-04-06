

let firstInput = Number(prompt("enter first number:"));
let secondInput = Number(prompt("enter second number:"));

if (secondInput >= firstInput) {
    while (firstInput <= secondInput) {
        if (firstInput % 2 === 0) {
            console.log(firstInput);
        }
        
        firstInput++;
    }
} else {
    console.log("enter correct number");
}