

let userInput = 789;
let sum = 0;
let counter = 0;

while (userInput / 10 !== 0) {
    sum += (userInput % 10);
    userInput = Math.floor(userInput / 10);
    counter++
}

console.log("sum of digits\n" + sum);
console.log("mount of digits\n" + counter);
