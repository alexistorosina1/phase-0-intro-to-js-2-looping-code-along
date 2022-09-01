// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);


function writeCards(names, event) {
    const cart = []
    for (let i = 0; i < names.length; i++) {
        cart.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cart;
}

function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}