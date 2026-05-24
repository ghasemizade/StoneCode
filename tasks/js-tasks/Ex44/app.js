const searchValue = document.getElementById("search-city");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const cityHumadity = document.getElementById("city-humadity");

const weatherByCities = [
    {cityName: "tehran", temp: "30", humadity: "37"},
    {cityName: "nowshahr", temp: "28", humadity: "78"},
    {cityName: "shiraz", temp: "29", humadity: "45"},
    {cityName: "mashhad", temp: "25", humadity: "86"},
    {cityName: "zanjan", temp: "28", humadity: "87"},
    {cityName: "ahvaz", temp: "31", humadity: "24"},
]

let citiesName = weatherByCities.map(city => city.cityName)

searchValue.addEventListener('input', function(e){
    const value = e.target.value.toLowerCase();
    const suggestions = citiesName.filter(city => 
        city.toLocaleLowerCase().startsWith(value)
    )
    
    weatherByCities.map(function(selected){
        if (selected.cityName === suggestions[0]) {
            cityName.innerHTML = selected.cityName
            cityTemp.innerHTML = selected.temp + "°C"
            cityHumadity.innerHTML = "Humidity: " + selected.humadity + "%"
        }
    })
})
