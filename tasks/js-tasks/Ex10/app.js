

let userAge = Number(prompt("enter your age:"));
let userGender = confirm("If you'r girl select `OK` otherwise `Cancel`");

function permissionGrant(age, sex) {
    if (userGender || userAge < 18) {
        alert("oohhhh you can't have access to this content!!");
    } else {
        alert("here you are :)")
    }
}

permissionGrant(userAge, userGender);