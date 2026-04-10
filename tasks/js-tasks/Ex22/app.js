

let arrNums = [];

function getInput(nums) {
    let userInput;
    let i = 0;
    
    while (userInput !== -1) {
        userInput = Number(prompt(`enter number ${i+1}, \n if you want to break input -1:`))
        nums.push(userInput);
        
        i++;
    }

    nums.pop();
}

function avgCal(arrNums) {
    let sum = 0;

    for (let i = 0; i < arrNums.length; i++) {
        sum += arrNums[i];
    }
    let result = sum / arrNums.length;
    return alert("this is your grade avg:" + result)
}

getInput(arrNums)
avgCal(arrNums);