let itemsInput;

function getItemMount() {
    
    let mountOfCart = Number(prompt("How many items do you have in your cart?"));
    while (isNaN(mountOfCart)) {
        alert("enter valid input!!!");
        mountOfCart = Number(prompt("How many items do you have in your cart?"));

    }
    itemsInput = mountOfCart;

    return mountOfCart;
}

getItemMount();

let itemsPrice = Array(itemsInput);

function getItemsPrice(items) {
    for (let i = 0; i < items.length; i++) {
        items[i] = Number(prompt(`input ${items[i]} value`));
    }
}

function finalCartPrice(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += items[i];
    }

    alert(sum);
}

getItemsPrice(itemsPrice);
finalCartPrice(itemsPrice);