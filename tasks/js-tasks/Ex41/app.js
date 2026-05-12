let getBodyBg = document.getElementById("body");
let getHexColor = document.querySelector(".hex-class");
let getCopyBtn = document.querySelector(".copy-btn");

let hexColorChar = "0123456789abcdef";
let randomChar;
let genColor;
let hexCopied;

getBodyBg.addEventListener("keydown", function () {
    genColor = "";
    for (let i = 0; i < 6; i++) {
        randomChar = Math.floor(Math.random() * 16)
        genColor += hexColorChar[randomChar];
    }
    getBodyBg.style.background = `#${genColor}`
    getHexColor.innerHTML = `#${genColor}`
    hexCopied = getHexColor.innerHTML;
    console.log("#" + genColor);
});


getCopyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(hexCopied);
    getCopyBtn.innerHTML = "Copied!";
    setTimeout(() => {
        getCopyBtn.innerHTML = "Copy";
    }, 3000);
});