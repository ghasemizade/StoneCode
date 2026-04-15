


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


let cartOption = Number(prompt(`Which one you want to delete:\n
    ${userCart[0].id}.${userCart[0].name}
    ${userCart[1].id}.${userCart[1].name}
    ${userCart[2].id}.${userCart[2].name}`)
);

let existItem = userCart.some(item => item.id === cartOption)


if (existItem) {
    let youWantToDelete = confirm("Are you sure to delete this item!?");
    if (youWantToDelete) {
        deleteItem(cartOption, userCart);   
    }
} else if(isNaN(cartOption)) {
    alert("Please enter valid number!!!")
} else if(!existItem) {
    alert("We can't find item you want in your cart.")
}

/*
fuck this shit.
*/


function deleteItem(userInput, userCart) {
    let exactIndex = userCart.findIndex(item => item.id === userInput);
    console.log(exactIndex);
    
    let deleteItem = userCart.splice(exactIndex, 1);
    
    return deleteItem;
}



alert(`Your new cart items => ${userCart.map(item => item.name)}`)


