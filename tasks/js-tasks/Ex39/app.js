
const getBulbImg = document.getElementById("bulb");
const getBtn = document.querySelector(".bulb-btn");
let isBulbOn = false;

console.log(getBulbImg);



getBtn.addEventListener("click", function(){
    if (isBulbOn) {
        getBulbImg.setAttribute("src", "../../asset/off.jpeg");
        getBtn.innerHTML = "ON"
        isBulbOn = false;
    } else {
        getBulbImg.setAttribute("src", "../../asset/on.jpeg");
        getBtn.innerHTML = "OFF"
        isBulbOn = true;
    }
})