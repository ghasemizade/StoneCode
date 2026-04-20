
let tasksList = [
    {name: "hosein", tasks: ["clean the room"]},
    {name: "ali", tasks: ["take a bath", "configuration document"]},
    {name: "hesam", tasks: ["take taxi", "clear storage"]},
];


let employee = prompt("which employee you want to asign tasks");
let whatTask = prompt("enter your task");
tasksList.map(function (tasksList){
    if (tasksList.name === employee) {
        tasksList.tasks.push(whatTask);
    }
});


let mainTasks = tasksList.filter(task => task.name === employee);

console.log(mainTasks[0].tasks);