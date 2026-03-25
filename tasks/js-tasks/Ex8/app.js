

let timeEntered = Number(prompt("enter time in minute:", 185));


function minCal(m) {
    let minute = m % 60;
    let hour = (m / 60).toString().split(".")[0];
    console.log("hour:" + hour + "\nminute:" + minute);
    
}


minCal(timeEntered)