
let getUsername = prompt("enter your username:").toLowerCase();

const usernameStash = "ali";
let isLogin = false;


function Auth(u){
    if (u === "ali") {
        isLogin = true;
        return alert("you are Login.");
    } else {
        return alert("you are not Login!");
    }
}


Auth(getUsername)