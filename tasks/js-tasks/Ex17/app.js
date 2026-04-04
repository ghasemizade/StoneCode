
let userInput = Number(prompt("enter your value:"));


let counter = 0;

while (userInput !== 0) {
    userInput = Math.floor(userInput / 10);
    counter++;
    
}
console.log(counter);