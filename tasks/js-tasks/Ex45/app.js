const getKey = document.querySelector(".key");
const getLocation = document.querySelector(".location");
const getCode = document.querySelector(".code");
const getWhich = document.querySelector(".which");


window.addEventListener('keydown', function(e){
    
    getKey.innerHTML = "key is => " + e.key
    getLocation.innerHTML = "location of key is => " + e.location
    getCode.innerHTML = "code is => " + e.code
    getWhich.innerHTML = "acii code is => " + e.which
})



function keyLogger(e) {
    
}