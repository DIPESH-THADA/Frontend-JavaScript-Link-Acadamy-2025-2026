"use strict";

import { allProducts } from "./data.js";
// ================= 1. GLOBAL letIABLES & CONSTANTS =====================

// Tax & currency constants
const VAT_RATE = 0.19; // VAT rate (19%)

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

renderItems(allProducts);

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

// ============== SEARCH FUNCTIONALITY =================
const form = document.querySelector("#search-form");
const search = document.querySelector("#search-input");

function searchItemsByName(term) {
  if (!itemContainer) return;
  const inputName = term.trim().toLowerCase();
  if (!inputName) {
    renderItems(allProducts);
    return;
  }
  const results = allProducts.filter((result) =>
    result.name.toLowerCase().includes(inputName),
  );
  if (results.length) {
    renderItems(results);
  } else {
    itemContainer.innerHTML = '<p class="no-results">No items found.</p>';
  }
}

if (form && search) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchItemsByName(search.value);
    search.value = "";
  });

  // optional: live search as user types
  search.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value === "") renderItems(items);
  });
}

// ================ CALCULATE TOTAL STOCK VALUE ====================
function calculateTotalStockValue() {
  let totalValue = 0;
  let lowStock = [];
  allProducts.forEach((item) => {
    totalValue += item.price * item.quantity;
    if (item.quantity < 10) {
      lowStock.push(item.name);
    }
  });
let totalQuantity = 0;

for (let i = 0; i < allProducts.length; i++) {
  totalValue += allProducts[i].price * allProducts[i].quantity;
  totalQuantity += allProducts[i].quantity;
}

  console.log("Total stock value: RON " + totalValue.toFixed(2));
  console.log("Low stock allProducts: " + lowStock.join(", "));
  console.log("Total number of products: " + allProducts.length);
  console.log(
    "Average price per product: RON " +
      (totalValue / allProducts.length).toFixed(2),
  );

  console.log("average price per item: RON " + (totalValue / totalQuantity).toFixed(2));

  console.log(
    "Most expensive product: " +
      allProducts.reduce((max, item) => (item.price > max.price ? item : max))
        .name + " (RON " + allProducts.reduce((max, item) => (item.price > max.price ? item : max)).price.toFixed(2) + ")",
  );
  console.log(
    "total quantity of items in stock: " +
      allProducts.reduce((sum, item) => sum + item.quantity, 0),
  );
  console.log(
    totalValue > 10000 ? "Stock value is high." : "Stock value is manageable.",
  );
}
calculateTotalStockValue();
