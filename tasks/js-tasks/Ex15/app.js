


const captchaCode = Math.floor(Math.random() * 100000);

let userInput = +prompt(`your code is ${captchaCode}`);


function captchaValidation(u, c) {
    if (u === c) {
        return "your code is fine";
    } else {
        return "agghhh wrong!!!";
    }
}


console.log(captchaValidation(userInput, captchaCode));
