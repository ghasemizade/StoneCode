
let userAge = Number(prompt("How old are you?", 18));
let hasAccess = true;


function agePermission(age) {
    if (age >= 18) {
        hasAccess = true;
        return hasAccess;
    } else {
        hasAccess = false;
        return hasAccess;
    }
}

function redirect(access) {
    access ? 
    alert("you have permission to this site :)") : 
    alert("you have not permission to this site :/")
}


console.log(agePermission(userAge));
redirect(hasAccess)


