const userDB = [
    {username: "hosein", password: "qwertyui"},
    {username: "sajjad", password: "asdfghj"},
    {username: "ali", password: "plmjhgc"},
    {username: "hasan", password: "jkgaiust"},
]


let isForgotten = confirm("Are you forget your password?");
let userName;

if (isForgotten) {
    userName = prompt("Enter your username");
} else {
    alert("You already know your password.\n this is good.");
}

function findForgotenPassword(x, y) {
    let findExactUser = x.find(user => user.username === y);

    return findExactUser.password;
}

let findedUserPassword = findForgotenPassword(userDB, userName);

alert(`Here you are, this is your password "${findedUserPassword}"`);