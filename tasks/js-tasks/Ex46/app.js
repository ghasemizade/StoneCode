const passwordInput = document.querySelector(".password");
const showPasswordIcon = document.querySelector(".show-password");
console.log(passwordInput);

let isShowPassword = false;

showPasswordIcon.addEventListener("click", function () {
  if (isShowPassword) {
    passwordInput.setAttribute("type", "password");
    isShowPassword = false;
  } else {
    passwordInput.setAttribute("type", "text");
    isShowPassword = true;
  }
});
