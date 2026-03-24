

let enterdNumber = prompt("enter value:", 20_000);
let howDiscount = prompt("enter discount you want:", 10);


function discountCal(num, dis) {
    return num - (num * (dis / 100));
}


console.log(discountCal(enterdNumber, howDiscount));
