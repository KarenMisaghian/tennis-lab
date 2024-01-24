let cart = document.querySelector(".numberOfItems");
let button = document.querySelectorAll(".order");
let numberOfOrders = 0;
let categorySelector = document.querySelector("#categories")
let cartArray = [];

function addItem (id) {
    cart.style.background = "red";
    numberOfOrders ++;
    cart.innerHTML = numberOfOrders;
    cartArray.push(id);

    console.log(cartArray);

}