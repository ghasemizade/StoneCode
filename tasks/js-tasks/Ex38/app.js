
let isLogin = confirm("Are you login");

let isProfilePicSet = false;


if (isLogin) {
    setTimeout(function ProfilePicCheck(){
        if (!isProfilePicSet) {
            alert("please set profile picture!")
        }
    }, 5000)
}


