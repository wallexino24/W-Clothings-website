
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ----- TABS -----
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;
    tabContents.forEach(tc => {
      tc.classList.toggle('active', tc.id === target);
    });
  });
});

//----contact me button
const contactButton = document.getElementById('contactMeButton');
const contactMe = document.querySelector('.message');

contactMe.classList.remove("active");

contactButton.addEventListener('click', function () {
contactMe.classList.toggle("active");

});



// ----- FEATURE / LAYOUT CARD HIGHLIGHT -----
const featureCards = document.querySelectorAll('.feature-card, .layout-card, .card');

featureCards.forEach(card => {
  card.addEventListener('click', () => {
    const parent = card.parentElement;
    parent.querySelectorAll('div').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const targetId = card.dataset.target;
    const contents = document.querySelectorAll(`#${targetId}`);
    contents.forEach(c => c.classList.add('active'));

  });
});

//--- for the section cards ---//
const sectionCards = document.querySelectorAll('.section-card');

sectionCards.forEach(card => {

card.addEventListener('click', () => {

const targetId = card.dataset.target;
const targetContent = document.getElementById(targetId);

const alreadyActive = card.classList.contains('active');

document.querySelectorAll('.section-card').forEach(c => {
c.classList.remove('active');
});

document.querySelectorAll('.card-option').forEach(c => {
c.classList.remove('active');
});

if(!alreadyActive) {
card.classList.add('active');
targetContent.classList.add('active');

}

});

});

//------- Pricing --------// 
const pricing = document.querySelectorAll('.pricing-card');

pricing.forEach(p => {

p.addEventListener('click', () => {

const targetId = p.dataset.target;
const targetContent = document.getElementById(targetId);

const alreadyActive = p.classList.contains('active');

document.querySelectorAll('.pricing-card').forEach(p => {
p.classList.remove('active');
});

document.querySelectorAll('.pricing-content').forEach(pc => {
pc.classList.remove('active');
});

if(!alreadyActive) {
p.classList.add('active');
targetContent.classList.add('active');

}

});

});

//==== FAQS UNDER PRICING ====//
const acd = document.querySelectorAll('.accordion-header');

acd.forEach(a => {

a.addEventListener('click', () => {

const targetId = a.dataset.accordion;
const targetContent = document.getElementById(targetId);

const alreadyActive = a.classList.contains('active');

document.querySelectorAll('.accordion-header').forEach(a => {
a.classList.remove('active');
});

document.querySelectorAll('.accordion-content').forEach(ac => {
ac.classList.remove('active');
});

if(!alreadyActive) {
a.classList.add('active');
targetContent.classList.add('active');

}

});

});

// ----- MODAL ----- //
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.modal-overlay');

openModal?.addEventListener('click', () => modalOverlay.classList.add('active'));
closeModal?.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay?.addEventListener('click', e => {
  if(e.target === modalOverlay) modalOverlay.classList.remove('active');
});

// ----- MOBILE MENU TOGGLE ----- //
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.querySelector('.nav-links');

menuIcon?.addEventListener('click', () => navLinks.classList.toggle('show'));


const tabIcon = document.getElementById('tabIcon');
const myTabs = document.querySelector('.tabs');

tabIcon?.addEventListener('click', () => myTabs.classList.toggle('active'));


// ========= for the add to cart ======= //

const cartButton = document.querySelectorAll('.add-to-cart');
const cartId = document.getElementById("cartButton");

cartButton.forEach(button => {
	button.addEventListener('click', () => {

		const name = button.dataset.name.toLowerCase();
		const price = button.dataset.price;
		const image = button.dataset.image;

		const product = {
			name,
			price: Number(price),
			image
		};

		//-==== get existing cart or empty array ==//

		let cart = JSON.parse(localStorage.getItem('cart')) || [];

		//== check if it's already in cart ==//
		const alreadyInCart = cart.find(item => item.name.toLowerCase() === name);

		// ===== add new product to cart ====//
		if (!alreadyInCart) {
			cart.push(product);

			// ===== save cart back =====//

			localStorage.setItem('cart', JSON.stringify(cart));
		}
		//=== Change button when clicked ===// 
			button.textContent = "✅";
			button.disabled = true;

		});
});



