let cart = document.querySelector(".numberOfItems");
let button = document.querySelectorAll(".order");
let numberOfOrders = 0;
let categorySelector = document.querySelector("#categories");

//cartArray is an array to hold selected items(items added to the cart) which will be filled later in the addItem function:
let cartArray = [];
let dropDown = document.querySelector("section.dropDown");
let searchInput = document.querySelector(".searchInput");
let items = document.querySelectorAll(".card");


//allProducts is an array for holding all available items:
let allProducts = [];
items.forEach(addToProducts = (item) => {
    allProducts.push(item.id);
});

const addItem = (id) => {
    cart.style.background = "red";
    numberOfOrders++;
    cart.innerHTML = numberOfOrders;
    cartArray.push(id);
}

const showShoes = () => {
    items.forEach(checkId = (item) =>{
        if (!item.id.startsWith("s")){
            item.style.display = "none";
        }
    });
}

const showRaquets = () => {
    items.forEach(checkId = (item) =>{
        if (!item.id.startsWith("r")){
            item.style.display = "none";
        }
    });
}

const showBags = () => {
    items.forEach(checkId = (item) =>{
        if (!item.id.startsWith("b")){
            item.style.display = "none";
        }
    });
}

const showAll = () => {
    items.forEach(checkId = (item) =>{
            item.style.display = "flex";
    });
}

const goToDesiredCategory = () => {
    if (categorySelector.value === "shoes") {
        showAll();
        showShoes();
    } else if (categorySelector.value === "bags") {
        showAll();
        showBags();
    } else if (categorySelector.value === "raquets") {
        showAll();
        showRaquets();
    }
}

const hanldeSearch = () => {

    // const remove = (item) => {
    //     item.style.display = "none";
    // };

    let searchedItem = "";
    items.forEach(remove = (item) => {
        item.style.display = "none";
    });

    switch (searchInput.value) {
        case "pure aero":
            searchedItem = "r-pureAero";
            break;
        case "speed MP":
            searchedItem = "r-speedMP"
            break;
        case "shift 99 pro":
            searchedItem = "r-shift99";
            break;
        case "vcore 95":
            searchedItem = "r-vcore";
            break;
        case "FX500":
            searchedItem = "r-FX500";
            break;
        case "whiteout 98":
            searchedItem = "r-whiteout98";
            break;
        case "TFight ISO":
            searchedItem = "r-TFightISO";
            break;
        case "vapor pro 2":
            searchedItem = "s-vapor";
            break;
        case "barricade":
            searchedItem = "s-barricade";
            break;
        case "court FF3":
            searchedItem = "s-courtFF3";
            break;
        case "jet tere":
            searchedItem = "s-jetTere";
            break;
        case "speed B.Icon2":
            searchedItem = "s-speedB";
            break;
        case "Ultrashot 3 Clay":
            searchedItem = "s-ultraShot";
            break;
        case "AG-LT23":
            searchedItem = "s-AGLT23";
            break;
        case "wave exceed tour 5":
            searchedItem = "s-waveExceed";
            break;
        case "Rush Pro 4.0":
            searchedItem = "s-rushPro";
            break;
        case "22 Sonicage 3 AC":
            searchedItem = "s-sonicage";
            break;
        case "Pure Aero RH12 Bag":
            searchedItem = "b-aero12r";
            break;
        case "Federer DNA 12 Pack Bag":
            searchedItem = "b-federerDNA";
            break;
        case "Pro X Racket Bag M":
            searchedItem = "b-proX";
            break;
        case "Pro Racket Blue Bag":
            searchedItem = "b-yonexPro";
            break;
        default:
            searchedItem = "not found!";
    }

    let selectedItem = document.getElementById(searchedItem);
    selectedItem.style.display = "block";

    console.log(selectedItem);
    console.log(searchInput.value);
}

