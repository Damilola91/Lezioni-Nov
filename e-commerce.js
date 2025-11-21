import { products } from "./product.js";

const prodotti = document.getElementById("prodotti");
const redContainer = document.getElementById("red");
const greenContainer = document.getElementById("green");
const smartSection = document.getElementById("smartSection");
const greenSection = document.getElementById("greenSection");

let allCounters = {};
let memoryStar = JSON.parse(localStorage.getItem("memoryStar")) || {};

const navCounter = document.getElementById("counter");
const favoritesCounter = document.getElementById("favoritesCounter");

const updateLocalStorage = () =>
  localStorage.setItem("memoryStar", JSON.stringify(memoryStar));

const updateCartSummary = () => {
  const cartItemCount = document.getElementById("cartItemCount");
  const cartTotalPrice = document.getElementById("cartTotalPrice");

  const totalItems = Object.values(allCounters).reduce(
    (acc, val) => acc + val,
    0
  );

  const totalPrice = Object.entries(allCounters).reduce((acc, [id, qty]) => {
    const product = products.find((p) => p.id == id);
    return acc + product.price * qty;
  }, 0);

  cartItemCount.textContent = totalItems;
  cartTotalPrice.textContent = totalPrice.toFixed(2);
};

const updateNavCounter = () => {
  navCounter.textContent = Object.values(allCounters).filter(
    (q) => q > 0
  ).length;
};

const updateFavoritesCounter = () => {
  favoritesCounter.textContent = Object.keys(memoryStar).length;
};

const createCard = (product, container) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", product.id);

  const isFavorite = memoryStar[product.id]?.isFavorite || false;
  const qty = allCounters[product.id] || 0;

  card.innerHTML = `
    <div class="card-img-container">
      <img src="${product.img}" alt="${product.name}">
      <div class="star"><ion-icon name="${
        isFavorite ? "star" : "star-outline"
      }"></ion-icon></div>
    </div>
    <div class="card-body">
      <h2>${product.name}</h2>
      <p class="description">${
        product.description || "Prodotto tipico siciliano Slow Food."
      }</p>
      <p class="category">Categoria: <strong>${product.category}</strong></p>
      <div class="nutrition">
        <h4>Nutrition Facts (100g)</h4>
        <ul>
          <li>Calories: ${product.nutritionFacts.calories}</li>
          <li>Carbs: ${product.nutritionFacts.carbs} g</li>
          <li>Fat: ${product.nutritionFacts.fat} g</li>
          <li>Protein: ${product.nutritionFacts.protein} g</li>
          <li>Sugar: ${product.nutritionFacts.sugar} g</li>
        </ul>
      </div>
      <p class="price">€ ${product.price}</p>
      <div class="quantity-controls">
        <button class="minus">-</button>
        <span class="counter">${qty}</span>
        <button class="plus">+</button>
      </div>
      <button class="add-to-cart">${
        qty > 0 ? "Added to Cart" : "Add to Cart"
      }</button>
    </div>
  `;

  container.appendChild(card);

  const star = card.querySelector(".star ion-icon");
  const minusBtn = card.querySelector(".minus");
  const plusBtn = card.querySelector(".plus");
  const counterSpan = card.querySelector(".counter");
  const addToCartBtn = card.querySelector(".add-to-cart");

  // ⭐ Preferiti
  star.addEventListener("click", () => {
    const curr = memoryStar[product.id]?.isFavorite || false;
    if (!curr) memoryStar[product.id] = { product, isFavorite: true };
    else delete memoryStar[product.id];
    star.setAttribute("name", !curr ? "star" : "star-outline");
    updateLocalStorage();
    updateFavoritesCounter();
  });

  // ➖ minus
  minusBtn.addEventListener("click", () => {
    if ((allCounters[product.id] || 0) > 0) {
      allCounters[product.id]--;
      counterSpan.textContent = allCounters[product.id];
      if (allCounters[product.id] === 0)
        addToCartBtn.textContent = "Add to Cart";
      updateCartSummary();
      updateNavCounter();
    }
  });

  // ➕ plus
  plusBtn.addEventListener("click", () => {
    allCounters[product.id] = (allCounters[product.id] || 0) + 1;
    counterSpan.textContent = allCounters[product.id];
    addToCartBtn.textContent = "Added to Cart";
    updateCartSummary();
  });

  // 🛒 Add to cart
  addToCartBtn.addEventListener("click", () => {
    if (!allCounters[product.id] || allCounters[product.id] === 0) {
      allCounters[product.id] = 1;
      counterSpan.textContent = 1;
      addToCartBtn.textContent = "Added to Cart";
    }
    updateCartSummary();
    updateNavCounter();
  });
};

// CREA CARDS NELLE SEZIONI
products.forEach((p) => {
  createCard(p, prodotti); // main container
  if (p.category === "Street Food") createCard(p, redContainer);
  if (p.category === "Conserve") createCard(p, greenContainer);
  if (p.category === "Dolci") createCard(p, smartSection);
  if (p.category === "Olio") createCard(p, greenSection);
});

// 🔍 Ricerca
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("allProducts").value.toLowerCase();
  prodotti.innerHTML = "";
  products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
    .forEach((p) => createCard(p, prodotti));
});

// 🛒 Sidebar carrello
document
  .getElementById("cartBtn")
  .addEventListener("click", () => cartSidebar.classList.toggle("hidden"));
document
  .getElementById("closeCartBtn")
  .addEventListener("click", () => cartSidebar.classList.add("hidden"));

updateFavoritesCounter();
updateCartSummary();
updateNavCounter();
