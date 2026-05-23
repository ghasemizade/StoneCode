const changerBtn = document.getElementById("changer");
const valueInput = document.getElementById("temp-input");
const convertBtn = document.getElementById("convert");
const output = document.getElementById("output");

let convertorFlag = true;

const toCelsius = (f) => (f - 32) * 5 / 9;
const toFahrenheit = (c) => c * 9 / 5 + 32;

changerBtn.addEventListener('click', function(){
    if (convertorFlag) {
        convertorFlag = false
        console.log(convertorFlag);
        
        valueInput.value = ""
    } else {
        convertorFlag = true
        console.log(convertorFlag);

        valueInput.value = ""

    }
})


convertBtn.addEventListener('click', function () {
    if (!convertorFlag) {
        output.innerHTML = toCelsius(valueInput.value)
    } else {
        output.innerHTML = toFahrenheit(valueInput.value)
    }
})


console.log(typeof(toCelsius));
