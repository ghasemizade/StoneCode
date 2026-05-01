

// let randomCaptcha =  

let dictionary = "0123456789abcdefghiklmnopqrstuvwxyz";
let randomCounter;
let captchaCharacter = "";

console.log(Math.floor(Math.random() * 35));

for (let i = 0; i < 5; i++) {
    randomCounter = Math.floor(Math.random() * 35)
    captchaCharacter += dictionary[randomCounter];
}


console.log(captchaCharacter);

