 
let username = prompt("username:");
let password = prompt("password:");

function inputCheck(u = "hosein", p) {
    if (u.length < 3 || p.length < 8) {
        return "username must be more than 3 or equal and password atleast 8 char!!";
    } else if (username.includes("!","@","#","$","%","&","|")) {
        return "you can't use strict char!!!:/"
    } else {
        return "your username and password checked :)";
    }
}
 
alert(inputCheck(username, password));
