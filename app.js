const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');
const navLinks = document.querySelectorAll('.mobile-menu a'); 


window.addEventListener('load', () => {
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
});


menuOpen.addEventListener('click', () => {
  mobileMenu.style.left = '0';
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
  });
});




window.addEventListener('scroll', function () {
  var navBar = document.querySelector('.nav-bar ul');
  var navLinks = document.querySelectorAll('.nav-bar ul li a'); // Select all nav links

  if (window.scrollY > 400) {
    // When scrolled 500px or more
    navBar.style.backgroundColor = 'blue';
    navBar.style.padding = '10px 0';

    navLinks.forEach(function (link) {
      // Change color of each link
      link.style.color = 'white';
    });
  } else {
    navBar.style.backgroundColor = 'transparent'; // Reset to initial background

    navLinks.forEach(function (link) {
      // Reset link color
      link.style.color = '#555'; // Original color
    });
  }
});


// -----JS for product Gallery----

var productImg = document.getElementById('productImg');
var smallImg = document.getElementsByClassName('small-img-item');

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    productImg.src = smallImg[i].src;
  };
}

  // Cart-related variables
// Cart-related variables
let cart = [];
let total = 0;

const addProductButton = document.getElementById('add-product');
const totalPriceElement = document.getElementById('total-price');
const cartItemsContainer = document.querySelector('.cart-items');
const clearDescriptionButton = document.getElementById('clear-description'); // Get the clear button

// Event listener for adding product
addProductButton.addEventListener('click', () => {
  const productDescription = document.getElementById('product-description').value;
  const productPrice = parseFloat(document.getElementById('product-price').value);
  const productQuantity = parseInt(document.getElementById('product-quantity').value);

  // Validate input
  if (productDescription && !isNaN(productPrice) && productPrice > 0 && productQuantity > 0) {
    const existingProduct = cart.find(item => item.description === productDescription);

    if (existingProduct) {
      existingProduct.quantity += productQuantity;
      existingProduct.totalPrice += productPrice * productQuantity;
    } else {
      cart.push({
        description: productDescription,
        price: productPrice,
        quantity: productQuantity,
        totalPrice: productPrice * productQuantity,
      });
    }

    total += productPrice * productQuantity;
    renderCart();

    // Clear input fields
    document.getElementById('product-price').value = '';
    document.getElementById('product-quantity').value = '1'; // Reset quantity to 1
  } else {
    alert('Please enter valid product details.');
  }
});

// Function to render cart items and total price
function renderCart() {
  cartItemsContainer.innerHTML = ''; // Clear previous cart items

  cart.forEach(item => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <span>${item.description} (x${item.quantity})</span>
      <span>$${item.totalPrice.toFixed(2)}</span>
    `;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  totalPriceElement.textContent = total.toFixed(2);
}



