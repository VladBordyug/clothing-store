// Масив для зберігання товарів у кошику
let cart = [];

// Функція для додавання товару в кошик
function addToCart(productName) {
    cart.push(productName);
    console.log(cart);  // Логування кошика для перевірки

    // Оновлення відображення кількості товарів у кошику
    updateCartDisplay();
}

// Оновлення відображення кількості товарів у кошику
function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-items');
    cartCount.textContent = `Items in Cart: ${cart.length}`;
}

// Додаємо обробник подій на кнопку "ADD TO CART"
const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', function () {
    const productName = "T-shirt";
    addToCart(productName);
});
