
let cart = [];


function addToCart(productName) {
    cart.push(productName);
    console.log(cart);  

   
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-items');
    cartCount.textContent = `Items in Cart: ${cart.length}`;
}


const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', function () {
    const productName = "T-shirt";
    addToCart(productName);
});

