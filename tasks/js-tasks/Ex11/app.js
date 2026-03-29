

let lessonsGrade = Array(3);


function getLessonsGrade(lessonsGrade) {
    for (let i = 0; i < lessonsGrade.length; i++) {
        lessonsGrade[i] = Number(prompt("enter three score of your lesson:"));
        if (isNaN(lessonsGrade[i])) {
            alert("enter valid input!!!");
            break;
        }
    }
}


function calAvg(lessonsGrade) {
    let sum = 0;
    for (let i = 0; i < lessonsGrade.length; i++) {
        sum += lessonsGrade[i];
    }
    
    let result = sum / lessonsGrade.length;

    return result;
}


getLessonsGrade(lessonsGrade)
alert(calAvg(lessonsGrade));