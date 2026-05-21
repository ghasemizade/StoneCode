
let getUsername = document.getElementById("username");
let getPassword = document.getElementById("password");
let getBtnSubmit = document.querySelector(".submit-btn");
let getFaildToast = document.querySelector(".faild-alert");
let getSuccesToast = document.querySelector(".succes-alert");


getUsername.addEventListener("focus", function () {
    console.log("in");
    
})
getUsername.addEventListener("blur", function () {
    if(getUsername.value.trim().length === 0){
        getFaildToast.innerHTML = "enter value for username!!!";
        getFaildToast.classList.remove("faild-alert");
    } else {
        getFaildToast.innerHTML = "wrong password or username";
    }
    
})

getBtnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (getUsername.value.trim().length >= 3 && getPassword.value.trim().length >= 8) {
        getSuccesToast.classList.remove("succes-alert");
        getSuccesToast.classList.add("right-input");
    } else {
        getFaildToast.classList.remove("faild-alert");
        getFaildToast.classList.add("wrong-input");

    }
})

getUsername.addEventListener("keyup", function() {
    if (getUsername.value.trim().length >= 3) {
        getSuccesToast.classList.remove("succes-alert");
        getSuccesToast.classList.add("right-input");
        getFaildToast.classList.add("faild-alert");

    } else {
        getFaildToast.classList.remove("faild-alert");
        getFaildToast.classList.add("wrong-input");
        getSuccesToast.classList.add("succes-alert");
    }
})



getPassword.addEventListener("keyup", function() {
    if (getPassword.value.trim().length >= 8) {
        getSuccesToast.classList.remove("succes-alert");
        getSuccesToast.classList.add("right-input");
        getFaildToast.classList.add("faild-alert");

    } else {
        getFaildToast.classList.remove("faild-alert");
        getFaildToast.classList.add("wrong-input");
        getSuccesToast.classList.add("succes-alert");
    }
})