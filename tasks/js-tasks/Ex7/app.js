
let theYear = 2026;
let userBirthYear = Number(prompt("enter your birth year:", 2002));


function ageCal(theYear, birthAge) {
    return theYear - birthAge
}


console.log(ageCal(theYear, userBirthYear));
