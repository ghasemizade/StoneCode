

let inputNumbers = 0;
let sum = 0;
let counter = -1;

while (inputNumbers !== -1) {

    inputNumbers = +prompt(`enter numbers`);
    sum += inputNumbers;
    counter++
}

console.log(sum);
console.log(counter);

