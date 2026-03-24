

let entredNumber = prompt("enter value:", 2);


const oddOrEven = (v) => {
    // first way
    if (v % 2 === 0) {
        console.log("this number is even");
    } else {
        console.log("this number is odd");
        
    }

    // second way
    let result = v % 2 === 0 ? "even" : "odd"
    console.log(result);
}

oddOrEven(entredNumber)