"use strict";

// ================= BACK TO TOP =====================
document
  .querySelector(".back-to-top span")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// =============== CURRENT YEAR =====================
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ============= CHANGE COLOR WHEN CLICK ON CHECKBOX ================
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    const span = this.closest(".zara").querySelector("span");

    if (this.checked) {
      span.style.color = "#00ccdd";
      span.style.fontWeight = "500";
    } else {
      span.style.color = "#4b5563";
      span.style.fontWeight = "400";
    }
  });
});

// =============== ADD ITEM DYNAMICALLY =================
const itemContainer = document.querySelector(".product-section");

const items = [
  {
    image: "./image-folder/jens decathlons jacket.avif",
    name: "Jens Jecathlons Jacket",
    price: "$299.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/ladies casual coat.webp",
    name: "Ladies Casual Coat",
    price: "$129.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/t-shirt.webp",
    name: "Ladies T-shirt",
    price: "$29.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/ladies-skirts.webp",
    name: "ladies Skirt",
    price: "$79.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/jens-jeans.webp",
    name: "Mens Jeans",
    price: "$59.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/top-ware.webp",
    name: "Ladies Topware",
    price: "$39.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/mens t-shirts.webp",
    name: "Mens T-shirt",
    price: "$19.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/mens-hoodi.webp",
    name: "Mens Hoodi",
    price: "$39.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/mens-sweeter.jpg",
    name: "Mens Sweeter",
    price: "$44.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/mens-leather-jacket.webp",
    name: "Mens Jeather Jacket",
    price: "$229.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/ladies-sweeter.jpg",
    name: "ladies Sweeter",
    price: "$79.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/mens-suede-shoe.webp",
    name: "Mens Suedue Shoe",
    price: "$89.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/mens-shorts.webp",
    name: "Mens short",
    price: "$39.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/mens-partyware-shoe.webp",
    name: "Mens Partyware Shoe",
    price: "$199.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/Cheyanne - Elegant cashmere sweater for women.webp",
    name: "Cheyanne - Elegant cashmere sweater for women",
    price: "$129.99",
    favorite: "./icons-folder/heart.png",
  },

  {
    image: "./image-folder/Franca – Refined midi dress with classic cut.webp",
    name: "Franca – Refined midi dress with classic cut",
    price: "$159.99",
    favorite: "./icons-folder/heart.png",
  },
];

const renderItems = (items) => {
  itemContainer.innerHTML = "";
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("product-items");
    itemDiv.innerHTML = `
    <div class="product-items">
          <img src="${item.image}" alt="${item.name}">
          <div class="details">
            <span>${item.name}</span>
            <div class="price_favorite">
              <span>${item.price}</span>
              <img src="${item.favorite}" alt="add to favorite">
            </div>
          </div>
          <button class="cart-btn">Add To Cart</button>
        </div>
    `;
    itemContainer.appendChild(itemDiv);
  });
};

renderItems(items);

// =============== RENDER FAVORITE ITEMS ==================
let favoriteItems = [];

const renderFavorite = () => {
  const favoriteContainer = document.querySelector(".checkout-product-section");
  favoriteContainer.innerHTML = "";
  favoriteItems.forEach((items) => {
    const favoriteDiv = document.createElement("div");
    favoriteDiv.classList.add("favorite-items");
    favoriteDiv.innerHTML = `
  <div class="favorite-items">
            <img src="${items.image}" alt="${items.name}">
            <div class="details">
                <span>${items.name}</span>
                <div class="price_favorite">
                    <span>${items.price}}</span>
                    <img src="../icons-folder/heart.png" alt="add to favorite">
                </div>
            </div>
            <button class="cart-btn">Add To Cart</button>
        </div>
  `;

    favoriteContainer.appendChild(favoriteDiv);
  });
};

renderFavorite();
// 3. Add click event to heart icons in all items
const favoriteItemListner = () => {
  document.querySelectorAll(".product-items .heart").forEach((icon, idx) => {
    icon.addEventListener("click", () => {
      console.log("you got click");
      const item = items[idx];
      if (!favorites.some((fav) => fav.name === item.name)) {
        favorites.push(item);
        renderFavorite();
      }
    });
  });
};
