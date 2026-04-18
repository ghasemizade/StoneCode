

let userInput = "شاش";



let reversedWord = userInput.split("").reverse().join("");


if (userInput === reversedWord) {
    alert("your input is palindrome");
} else {
    alert("your input is not palindrome");
}