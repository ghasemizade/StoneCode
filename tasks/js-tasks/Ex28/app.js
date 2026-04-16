

let products = [
    {id: 1, title: "clothes blue", price: 1_000},
    {id: 2, title: "clothes red", price: 2_000},
    {id: 3, title: "shoes blue", price: 5_000},
    {id: 4, title: "shoes green", price: 6_000},
    {id: 5, title: "clothes green", price: 8_000},
    {id: 6, title: "shoes red", price: 9_000},
]


let searchInput = prompt("What looking for? ");


function searchedItem(products, input) {
    let mapingItem = products.map(item => item.title)
    let filteredItem = mapingItem.filter(item => item.includes(input))
    
    return filteredItem
}


console.log(searchedItem(products, searchInput));
