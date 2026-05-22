const selectedState = document.getElementById("state-name");
const selectedCity = document.getElementById("city-name");

const statesAndCities = {
    Alabama: ["Alexander City", "Andalusia", "Anniston", "Athens", "Atmore", "Auburn", "Bessemer", "Birmingham", "Chickasaw", "Clanton", "Cullman", "Decatur"],
    Arizona: ["Ajo","Avondale","Bisbee","Casa Grande","Chandler","Clifton","Douglas","Flagstaff","Florence","Gila Bend","Glendale","Globe"],
    California: ["Alameda","Alhambra","Anaheim","Antioch","Arcadia","Bakersfield","Barstow","Belmont","Berkeley","Beverly Hills","Brea","Buena Park","Burbank","Calexico"],
    Massachusetts: ["Abington","Adams","Amesbury","Amherst","Andover","Arlington","Athol","Attleboro","Barnstable","Bedford","Beverly","Boston"]
}

const statesName = Object.keys(statesAndCities);
selectedState.addEventListener("change", function () {
    selectedCity.innerHTML = "";
    let selectedCities = statesAndCities[selectedState.value];
    selectedCities.forEach(function(city){
        let optionElem = document.createElement("option");
        optionElem.setAttribute("value", city);
        selectedCity.append(optionElem);
        optionElem.innerHTML = city;
    });
})