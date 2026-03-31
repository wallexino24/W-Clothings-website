
const cartContainer = document.getElementById('cart-container');
const total = document.getElementById('total');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
	cartContainer.innerHTML = "";
	let totalPrice = 0;

	cart.forEach((item, index) => {

		totalPrice += item.price;

		const product = document.createElement('div');
		product.innerHTML = `
		<div style="border: 1px solid #ccc; padding: 10px; margin: 10px; max-width: 500px;">
		<img src="${item.image}" width="100%">
		<h3>${item.name}</h3>
		<p>₦${item.price}</p>
		<button onclick="removeItem(${index})">Remove Item</button>
		</div>" 
		`;

		cartContainer.appendChild(product);
	});

	total.innerText="Total: ₦" +totalPrice;
}

function removeItem(index) {
	cart.splice(index, 1);
	localStorage.setItem('cart', JSON.stringify(cart));
	displayCart();
}

displayCart();