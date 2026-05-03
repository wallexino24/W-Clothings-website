let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.getElementById('cart-container');
const totalDisplay = document.getElementById('total');

function displayCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<h2 style='text-align:center;'>Your cart is empty 😢</h2>";
    totalDisplay.innerText = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    if (!item.quantity) item.quantity = 1;

    total += item.price * item.quantity;

    const product = document.createElement('div');
    product.innerHTML = `
      <div style="border:1px solid #ccc; padding:15px; margin:15px; border-radius:10px;">
        <img src="${item.image}" width="100">
        <h3>${item.name}</h3>
        <p>₦${item.price}</p>

        <div>
          <button onclick="decreaseQty(${index})">-</button>
          <span style="margin:0 10px;">${item.quantity}</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>

        <button onclick="removeItem(${index})" style="margin-top:10px;">Remove</button>
      </div>
    `;

    cartContainer.appendChild(product);
  });

  totalDisplay.innerText = "Total: ₦" + total;
}

function increaseQty(index) {
  cart[index].quantity++;
  updateCart();
}

function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

displayCart();


//====== checkout button ======//

const checkoutBtn = document.getElementById('checkoutBtn');

checkoutBtn.addEventListener('click', () => {

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let message = "Hello, I want to order:%0A%0A";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    message += `🛍 ${item.name}%0A`;
    message += `Qty: ${item.quantity}%0A`;
    message += `Price: ₦${item.price}%0A%0A`;
  });

  message += `Total: ₦${total}`;

  // 🔥 REPLACE WITH YOUR NUMBER
  const phoneNumber = "2348147324876";

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, '_blank');
});
