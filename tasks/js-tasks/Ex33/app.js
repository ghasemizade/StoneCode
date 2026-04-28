

let allState = [
    {stateName: "Mazandaran", cities: ["nowshahr", "nour", "amol", "babol"]},
    {stateName: "Gilan", cities: ["rasht", "roursar", "anzali"]},
    {stateName: "Golestan", cities: ["gorgan", "torkaman"]},
    {stateName: "Tehran", cities: ["eslamshahr", "tehran", "roudhen"]},
];





let userIput = prompt("enter state you want to go");

function returnCity(allState, userInput) {
    allState.map(function(state){
        if (userInput === state.stateName) {
            console.log(state.cities);
            
        }
    });
}

returnCity(allState, userIput);