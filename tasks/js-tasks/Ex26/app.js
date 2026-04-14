

let storeDB = [
    {id: 1, name: "milk", price: 1_000, qty: 20},
    {id: 2, name: "water", price: 500, qty: 100},
    {id: 3, name: "choclate", price: 2_000, qty: 60},
    {id: 4, name: "chips", price: 4_000, qty: 40},
    {id: 5, name: "soda", price: 3_000, qty: 10},
    {id: 6, name: "tomato", price: 2_500, qty: 50},
    {id: 7, name: "potato", price: 1_500, qty: 30},
]

let userCart = [
    {id: 1, name: "milk", price: 1_000, qty: 20},
    {id: 2, name: "water", price: 500, qty: 100},
    {id: 3, name: "choclate", price: 2_000, qty: 60},
]

let itemCartName = userCart.map(item => item.name)

let itemYouWant = prompt(
    `what item you want to delete? \n${itemCartName}`
)


function deleteItem(userInput, userCart) {
    let exactIndex = userCart.findIndex(item => item.name === userInput);
    let deleteItem = userCart.splice(exactIndex, 1);
    
    return deleteItem;
}

let deletedItem = deleteItem(itemYouWant, userCart);


alert(`Your new cart items => ${userCart.map(item => item.name)}`)


