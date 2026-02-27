// ================= 1. GLOBAL letIABLES & CONSTANTS =====================

// Product 1 constants
// const PRODUCT1_NAME = "Jens Decathlons Jacket";
// const PRODUCT1_PRICE = 149.99; // number (in RON)
// const PRODUCT1_QTY = 1;

// // Product 2 constants
// const PRODUCT2_NAME = "Ladies Casual Coat";
// const PRODUCT2_PRICE = 129.99; // number (in RON)
// const PRODUCT2_QTY = 1;

// // Product 3 constants
// const PRODUCT3_NAME = "Mens Suede Shoe";
// const PRODUCT3_PRICE = 229.99; // number (in RON)
// const PRODUCT3_QTY = 1;

const productNames = [
  "Jens Decathlons Jacket",
  "Ladies Casual Coat",
  "Mens Suede Shoe",
];
const productPrices = [149.99, 129.99, 229.99];
const productQuantities = [1, 1, 1];

// ================= 7. TRACK TOTAL AMOUNT OF PURCHASES =====================
// Global letiable for the total amount of purchases
let totalPrice = 0;
let VAT_RATE = 0.19; // 19% VAT rate

// Function that takes the price of the product and adds it to the overall amount
function addToSum(index) {
  const totalSum = productPrices[index] * productQuantities[index];
  totalPrice += totalSum;
  console.log(
    "Product price added: $" +
      totalSum.toFixed(2) +
      " | Total sum: $" +
      totalPrice.toFixed(2),
  );
}

// Note: Do NOT call addToSum() automatically here
// The total will be calculated based on actual cart items and quantities
// console.log("Total initial: $" + totalPrice.toFixed(2));

// Raw coupon
const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

// =============== 2. NORMALIZE COUPON FUNCTION =================
function normalizeCoupon(code) {
  let trimmed = code.trim();
  let uppercased = trimmed.toUpperCase();
  return uppercased;
}

function isValidCoupon(code) {
  for (let i = 0; i < VALID_COUPONS.length; i++) {
    if (VALID_COUPONS[i] === code) {
      return true;
    }
  }
  return false;
}

// Console self-checking examples
console.log("isValidCoupon('SAVE10'):", isValidCoupon("SAVE10"));
console.log("isValidCoupon('SAVE15'):", isValidCoupon("SAVE15"));
console.log("isValidCoupon('FREESHIP'):", isValidCoupon("FREESHIP"));
console.log("isValidCoupon('INVALID'):", isValidCoupon("INVALID"));

// =============== 4. VALIDATE AND NOTIFY (coupon validation on checkout.html) =================

function validateAndNotify() {
  const promoInput = document.getElementById("promo-input");
  if (!promoInput) return;

  const normalizedInput = normalizeCoupon(promoInput.value);

  switch (normalizedInput) {
    case "SAVE10":
      alert("Coupon applied successfully! You saved 10% on your order.");
      break;
    case "SAVE15":
      alert("Coupon applied successfully! You saved 15% on your order.");
      break;
    case "FREESHIP":
      alert(
        "Coupon applied successfully! You get free shipping on your order.",
      );
      break;
    default:
      alert("Invalid coupon code. Please try again.");
  }

  // clear input after validation
  promoInput.value = "";
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

// Connect Proceed to Checkout button
let checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function () {
    validateCheckoutForm();
  });
}

// =============== ORDER SUMMARY CALCULATION (checkout.html) =================
function calculateOrderSummary() {
  // Get all quantity inputs for each product
  let qtyInputs = document.querySelectorAll(".qty-input");
  if (qtyInputs.length === 0) return;

  // Calculate subtotal based on each product's quantity
  let subtotal = 0;
  for (let i = 0; i < productPrices.length; i++) {
    let quantity = parseInt(qtyInputs[i].value) || 1;
    subtotal += productPrices[i] * quantity;
  }

  let shippingCost = 5.99;
  let tax = subtotal * VAT_RATE;
  let total = subtotal + shippingCost + tax;

  // Update the order summary spans
  let subtotalEl = document.querySelector(".subtotal");
  let shippingEl = document.querySelector(".shipping");
  let taxEl = document.querySelector(".tax");
  let totalEl = document.querySelector(".total-price");

  if (subtotalEl) subtotalEl.textContent = "RON " + subtotal.toFixed(2);
  if (shippingEl) shippingEl.textContent = "RON " + shippingCost.toFixed(2);
  if (taxEl) taxEl.textContent = "RON " + tax.toFixed(2);
  if (totalEl) totalEl.textContent = "RON " + total.toFixed(2);
}

// Run calculation on page load
calculateOrderSummary();

// =============== QUANTITY BUTTONS (+/−) =================
let qtyButtons = document.querySelectorAll(".qty-btn");
qtyButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let qtyInput = this.closest(".qty-control").querySelector(".qty-input");
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
    calculateOrderSummary();
  });
});
