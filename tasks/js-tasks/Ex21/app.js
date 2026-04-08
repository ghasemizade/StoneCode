

let firstNum = Number(prompt("enter first number:"));
let secondNum = Number(prompt("enter second number:"));


const withFor = (a, b) => {
    let mul = 1;
    for (let i = 0; i < b; i++) {
        mul *= a;
    }

    alert(mul);
}

const withWhile = (a, b) => {
    let mul = 1;
    let i = 0;
    while (i < b) {
        mul *= a;
        i++;
    }

    alert(mul);
}

const withDoWhile = (a, b) => {
    let mul = 1;
    let i = 0;
    do {
        mul *= a;
        i++;
    } while (i < b);

    alert(mul);
}


withFor(firstNum, secondNum);
withWhile(firstNum, secondNum);
withDoWhile(firstNum, secondNum);
