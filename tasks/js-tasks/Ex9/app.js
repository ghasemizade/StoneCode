

let lessonsScore = [];
let result = 0;

function getLessonScore(){
    for (let i = 0; i < 3; i++) {
        lessonsScore[i] = Number(prompt(`enter your ${i} lesson:`));
        if (isNaN(lessonsScore[i])) {
            alert("You must enter number !!!!")
            break;
        }
    }

}

function avgCal(scoreArr) {
    let sum = 0;
    for (let i = 0; i < scoreArr.length; i++) {
        sum += scoreArr[i];
    }
    result = sum / scoreArr.length
    
}

function gradeCal(n) {
    switch (true) {
        case n > 15:{
            console.log("Grade A");
            break;
        }
        case n > 12:{
            console.log("Grade B");
            break;
        }
        case n < 12:{
            console.log("Grade C");
            break;
        }
        default:
            console.log("Nothing");
            break;
    }
}




getLessonScore();
avgCal(lessonsScore);
gradeCal(result)