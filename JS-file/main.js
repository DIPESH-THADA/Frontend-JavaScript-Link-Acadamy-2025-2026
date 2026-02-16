// ================= 1. GLOBAL letIABLES & CONSTANTS =====================

// Product 1 constants
const PRODUCT1_NAME = "Jens Decathlons Jacket";
const PRODUCT1_PRICE = 149.99; // number (in RON)
const PRODUCT1_QTY = 1;

// Product 2 constants
const PRODUCT2_NAME = "Ladies Casual Coat";
const PRODUCT2_PRICE = 129.99; // number (in RON)
const PRODUCT2_QTY = 1;

// Product 3 constants
const PRODUCT3_NAME = "Mens Suede Shoe";
const PRODUCT3_PRICE = 229.99; // number (in RON)
const PRODUCT3_QTY = 1;

// Tax & currency constants
const VAT_RATE = 0.19; // VAT rate (19%)
const CURRENCY = "RON";

// Raw coupon
const RAW_COUPON = " SAVE 10 ";

// typeof demonstrations
console.log("typeof PRODUCT1_NAME:", typeof PRODUCT1_NAME); // "string"
console.log("typeof PRODUCT1_PRICE:", typeof PRODUCT1_PRICE); // "number"
console.log("typeof PRODUCT1_QTY:", typeof PRODUCT1_QTY); // "number"
console.log("typeof VAT_RATE:", typeof VAT_RATE); // "number"
console.log("typeof CURRENCY:", typeof CURRENCY); // "string"
console.log("typeof RAW_COUPON:", typeof RAW_COUPON); // "string"

// ================= 7. TRACK TOTAL AMOUNT OF PURCHASES =====================
// Global letiable for the total amount of purchases
let price = 0;

// Function that takes the price of the product and adds it to the overall amount
function addToSum(price) {
  price = price + price;
  console.log(
    "Product price added: $" +
      price.toFixed(2) +
      " | Total sum: $" +
      price.toFixed(2),
  );
}

// Demonstrate how the feature works with at least three calls
addToSum(PRODUCT1_PRICE);
addToSum(PRODUCT2_PRICE);
addToSum(PRODUCT3_PRICE);

console.log("Total after 3 demo calls: $" + price.toFixed(2));

// ================= HAMBURGER MENU TOGGLE =====================
const hamburgerBtn = document.querySelector(".hamburger-btn");
const headerNav = document.querySelector(".header__nav");

if (hamburgerBtn && headerNav) {
  hamburgerBtn.addEventListener("click", function () {
    hamburgerBtn.classList.toggle("active");
    headerNav.classList.toggle("mobile-open");
  });

  // Close menu when a nav link is clicked
  const navLinks = headerNav.querySelectorAll(".menu a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburgerBtn.classList.remove("active");
      headerNav.classList.remove("mobile-open");
    });
  });
}

// ================= BACK TO TOP =====================
const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =============== CURRENT YEAR =====================
const yearEl = document.querySelector(".year");
if (yearEl) {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

// ============= CHANGE COLOR WHEN CLICK ON CHECKBOX ================
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    const zaraEl = this.closest(".zara");
    if (!zaraEl) return;
    const span = zaraEl.querySelector("span");
    if (!span) return;

    if (this.checked) {
      span.style.color = "#00ccdd";
      span.style.fontWeight = "500";
    } else {
      span.style.color = "#4b5563";
      span.style.fontWeight = "400";
    }
  });
});

// =============== PRODUCTS ARRAY (with numeric prices) =================
const itemContainer = document.querySelector(".product-section");
const items = [
  {
    image: "assets/images/jens decathlons jacket.avif",
    name: "Jens Jecathlons Jacket",
    price: 299.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/ladies casual coat.webp",
    name: "Ladies Casual Coat",
    price: 129.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/ladies-jackets.webp",
    name: "Ladies jacket",
    price: 29.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/ladies-skirts.webp",
    name: "ladies Skirt",
    price: 79.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/jens-jeans.webp",
    name: "Mens Jeans",
    price: 59.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/top-ware.webp",
    name: "Ladies Topware",
    price: 39.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/mens t-shirts.webp",
    name: "Mens T-shirt",
    price: 19.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/mens-hoodi.webp",
    name: "Mens Hoodi",
    price: 39.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/mens-sweeter.jpg",
    name: "Mens Sweeter",
    price: 44.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/mens-leather-jacket.webp",
    name: "Mens Jeather Jacket",
    price: 229.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/ladies-sweeter.jpg",
    name: "ladies Sweeter",
    price: 79.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/mens-suede-shoe.webp",
    name: "Mens Suedue Shoe",
    price: 89.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/mens-shorts.webp",
    name: "Mens short",
    price: 39.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/mens-partyware-shoe.webp",
    name: "Mens Partyware Shoe",
    price: 199.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/Cheyanne - Elegant cashmere sweater for women.webp",
    name: "Cheyanne - Elegant cashmere sweater for women",
    price: 129.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
  {
    image: "assets/images/Franca – Refined midi dress with classic cut.webp",
    name: "Franca – Refined midi dress with classic cut",
    price: 159.99,
    favorite: "assets/icons/icon-set/heart.png",
  },
];

// =============== RENDER PRODUCT ITEMS (index.html) =================

const renderItems = function (items) {
  if (!itemContainer) return;
  itemContainer.innerHTML = "";
  items.forEach(function (item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("product-items");
    const priceWithVAT = (item.price * (1 + VAT_RATE)).toFixed(2);
    itemDiv.innerHTML =
      '<img class="product-img" src="' +
      item.image +
      '" alt="' +
      item.name +
      '">' +
      '<div class="details">' +
      '<span class="product-name">' +
      item.name +
      "</span>" +
      '<div class="price_favorite">' +
      '<span class="prices">RON ' +
      item.price.toFixed(2) +
      " <small>(incl. VAT: RON " +
      priceWithVAT +
      ")</small></span>" +
      '<button class="heart"><img src="' +
      item.favorite +
      '" alt="add to favorite"></button>' +
      "</div>" +
      "</div>" +
      '<button class="cart-btn" onclick="addToCart(' +
      item.price +
      ')">Add To Cart</button>';
    itemContainer.appendChild(itemDiv);
  });
};

renderItems(items);

// =============== ADD TO CART FUNCTION =================
function addToCart(price) {
  addToSum(price);

  const cartBadge = document.querySelector(".cart-badge");
  if (cartBadge) {
    // add items on cart badge
    let currentCount = parseInt(cartBadge.textContent) || 0;
    cartBadge.textContent = currentCount + 1;
  }
  // Show a brief message
  alert("Item added to cart! Total amount: $" + price.toFixed(2));
}

// =============== 2. NORMALIZE COUPON FUNCTION =================
function normalizeCoupon(code) {
  let trimmed = code.trim();
  // b) Convert to uppercase
  let uppercased = trimmed.toUpperCase();
  return uppercased;
}

// =============== 4. VALIDATE AND NOTIFY (coupon validation on checkout.html) =================
// Reads #promo-input, calls normalizeCoupon(), compares to RAW_COUPON
function validateAndNotify() {
  let promoInput = document.getElementById("promo-input");
  if (!promoInput) return;

  let inputCode = promoInput.value;

  // Call normalizeCoupon on the input
  let normalizedInput = normalizeCoupon(inputCode);

  // Also normalize RAW_COUPON for comparison
  let normalizedRawCoupon = normalizeCoupon(RAW_COUPON);

  // Use a condition to verify that the coupon is valid
  if (normalizedInput === normalizedRawCoupon) {
    alert(
      "Congratulation you have successfully applied the coupon! You saved 10% on your order.",
    );
  } else {
    alert("The code entered is not valid.");
  }
}

// =============== CHECKOUT FORM VALIDATION (checkout.html) =================
function validateCheckoutForm() {
  // Get form fields
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let address = document.getElementById("address");
  let zip = document.getElementById("zip");
  let cardholderName = document.getElementById("cardholder-name");
  let cardNumber = document.getElementById("card-number");
  let cvv = document.getElementById("cvv");

  // Check if required fields are filled
  if (
    !firstName ||
    !lastName ||
    !address ||
    !zip ||
    !cardholderName ||
    !cardNumber ||
    !cvv
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  if (firstName.value.trim() === "" || lastName.value.trim() === "") {
    alert("Please fill in your first and last name.");
    return;
  }

  if (address.value.trim() === "") {
    alert("Please fill in your address.");
    return;
  }

  if (zip.value.trim() === "") {
    alert("Please fill in your zip code.");
    return;
  }

  if (cardholderName.value.trim() === "") {
    alert("Please fill in the cardholder name.");
    return;
  }

  if (cardNumber.value.trim() === "") {
    alert("Please fill in the card number.");
    return;
  }

  if (cvv.value.trim() === "") {
    alert("Please fill in the CVV.");
    return;
  }

  // If all fields are valid
  alert("Order placed successfully! Thank you for your purchase.");
}

// Connect Pay With Card button
let payBtn = document.getElementById("pay");
if (payBtn) {
  payBtn.addEventListener("click", function () {
    validateCheckoutForm();
  });
}

// =============== 5. LOGIN FUNCTION (login.html) =================

function login(event) {
  event.preventDefault(); // Prevent the default form submission

  let emailField = document.getElementById("username");
  let passwordField = document.getElementById("password");

  if (!emailField || !passwordField) {
    alert("Form fields not found.");
    return false;
  }

  // Remove leading and trailing spaces from both entries using trim()
  let email = emailField.value.trim();
  let password = passwordField.value.trim();

  // Check if fields are empty
  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return false;
  }

  // Case-sensitive comparison against the predefined set of key-value elements
  if (validUsers[email] !== undefined && validUsers[email] === password) {
    alert("Login successful! Welcome back, " + email + ".");
    return true;
  } else {
    alert("Invalid username or password. Please try again.");
    return false;
  }
}

// Connect Admin Check Button
let adminCheckBtn = document.getElementById("admin-check-btn");
if (adminCheckBtn) {
  adminCheckBtn.addEventListener("click", function () {
    checkPassword();
  });
}

function checkPassword() {
  const MAX_ATTEMPTS = 3;
  const CORRECT_PASSWORD = "admin12345";
  const USER_NAME = "admin";

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const userInput = prompt("Enter admin password:");

    if (userInput === CORRECT_PASSWORD || userInput === USER_NAME) {
      alert("✅ Welcome back, admin!");
      break; // stop after success
    } else {
      if (attempt === MAX_ATTEMPTS) {
        alert("🚫 Account temporarily locked after 3 failed attempts.");
      } else {
        alert(
          `❌ Incorrect password. You have ${MAX_ATTEMPTS - attempt} attempt(s) left.`,
        );
      }
    }
  }
}

// Connect login form
let loginForm = document.querySelector(".login-section form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    login(event);
  });
}

// =============== ORDER SUMMARY CALCULATION (checkout.html) =================
// Uses PRODUCT constants instead of hardcoded values
function calculateOrderSummary() {
  let qtyInput = document.querySelector(".qty-input");
  if (!qtyInput) return;

  let quantity = parseInt(qtyInput.value) || 1;

  // Use the product constants for calculation
  let subtotal =
    PRODUCT1_PRICE * quantity +
    PRODUCT2_PRICE * PRODUCT2_QTY +
    PRODUCT3_PRICE * quantity;
  let shippingCost = 5.99;
  let tax = subtotal * VAT_RATE;
  let total = subtotal + shippingCost + tax;

  // Update the order summary spans
  let subtotalEl = document.querySelector(".subtotal");
  let shippingEl = document.querySelector(".shipping");
  let taxEl = document.querySelector(".tax");
  let totalEl = document.querySelector(".total-price");

  if (subtotalEl) subtotalEl.textContent = "$" + subtotal.toFixed(2);
  if (shippingEl) shippingEl.textContent = "$" + shippingCost.toFixed(2);
  if (taxEl) taxEl.textContent = "$" + tax.toFixed(2);
  if (totalEl) totalEl.textContent = "$" + total.toFixed(2);
}

// Run calculation on page load
calculateOrderSummary();

// =============== QUANTITY BUTTONS (+/−) =================
let qtyButtons = document.querySelectorAll(".qty-btn");
qtyButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let qtyInput = document.querySelector(".qty-input");
    if (!qtyInput) return;

    let currentQty = parseInt(qtyInput.value) || 1;

    if (this.getAttribute("data-action") === "increase") {
      currentQty = currentQty + 1;
    } else if (this.getAttribute("data-action") === "decrease") {
      if (currentQty > 1) {
        currentQty = currentQty - 1;
      }
    }

    qtyInput.value = currentQty;
    // Recalculate order summary
    calculateOrderSummary();
  });
});
