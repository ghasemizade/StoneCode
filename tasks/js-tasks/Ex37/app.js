

let min = +prompt("enter minutes");
let sec = +prompt("enter seconds");

if (min >= 0 && sec >= 0) {
    const timer = setInterval(function(){
        sec--;
        console.log(`${min} : ${sec}`);
        
        if (min === 0 && sec === 0) {
            clearInterval(timer);
        }
        
        if (sec === 0) {
            min--;
            sec = 59;
        }
    }, 1000)
    
}