

let todoLists = [
    {id:1, title: "workout", status: false},
    {id:2, title: "shopping", status: false},
    {id:3, title: "study", status: true},
]

let optionableMenu = +prompt(
    "what do you want to do: \n 1.add to do \n 2.delete specefic item \n 3.changing status"
);


switch (optionableMenu) {
    case 1:
        addTodo(todoLists);
        break;
    case 2:
        deleteTodo(todoLists);
        break
    case 3:
        changingStatus(todoLists);
        break;
    default:
        break;
}

function addTodo(todoLists) {
    let enterTitle = prompt("enter your todo title:");
    let enterStatus = prompt("enter your status about todo:");
    let newTodo = {
        id: todoLists.length + 1,
        title: enterTitle,
        status: enterStatus
    }

    todoLists.push(newTodo);
}

function deleteTodo(todoLists) {
    let enterTodoTitle = prompt("enter todo title you want to delete:");
    let filteredTodo = todoLists.filter(todo => todo.title === enterTodoTitle);
    
    let mainIndex = filteredTodo[0].id - 1;
    todoLists.splice(mainIndex, 1);
}

function changingStatus(todoLists) {
    let enterTodoTitle = prompt("enter todo title you want to change status:");
    todoLists.map(function (todo) {
        if (todo.title === enterTodoTitle) {
            if (todo.status === true) {
                todo.status = false;
            } else {
                todo.status = true;
            }
        }
    });
    
}


console.log(todoLists);
