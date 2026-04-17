

let userBasket = [
    {id: 1, title: "milk", price: 85_000},
    {id: 2, title: "water", price: 25_000},
    {id: 3, title: "soda", price: 80_000},
    {id: 4, title: "tea", price: 50_000},
    {id: 5, title: "coffee", price: 180_000},
    {id: 6, title: "macha", price: 250_000},
]

let deliveryPrice = 1_000;
let postCost = 0;
let sum = 0;

let result = userBasket.forEach(function (drink) {
    if (drink.price < 100_000) {
        postCost += deliveryPrice;
    }

    sum += drink.price;
})




console.log(sum + postCost);
