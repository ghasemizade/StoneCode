
let arrNumbers = []

function getNumber() {
    for (let i = 0; i < 3; i++) {
        arrNumbers[i] = Number(prompt("enter three values: ", 1));
    }
}

const avgMount = (arr) => {
    let sumResult = 0;
    for (let i = 0; i < arr.length; i++) {
        sumResult += arr[i];
    }
    let result = sumResult / arrNumbers.length;
    console.log(result);
    
}


getNumber();
avgMount(arrNumbers);