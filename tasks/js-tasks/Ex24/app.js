let wareHouseDB = [
    {
        id: 1,
        name: "laptop", 
        price: 50_000_000, 
        count: 4
    },
    {
        id: 2,
        name: "phone", 
        price: 20_000_000, 
        count: 2
    },
    {
        id: 3,
        name: "pc", 
        price: 80_000_000, 
        count: 6
    }
]

let userItemSelect = prompt(
    "What item you want? \n 1.laptop 2.phone 3.pc"
);

let count = Number(prompt("how much do you want?"));

let userCart = [];

function addToCart(wareHouseDB, userCart) {
    let itemSelect = wareHouseDB.filter(item => item.name === userItemSelect);
    let isThereItem = itemSelect.some(c => c.count > 0)
    
    let itemPrice = itemSelect.map(p => p.price)
    let itemCount = itemSelect.map(i => i.count)

    const addCart = {
        id: userCart.length + 1,
        name: userItemSelect,
        price: itemPrice * count,
        count: count
    }

    if (isThereItem) {
        if (count > itemCount) {
            alert("we don't have this much!!!");
        } else {
            userCart.push(addCart);
        }
    }
    
}

addToCart(wareHouseDB, userCart);
console.log(userCart);