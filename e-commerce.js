const products = [
  {
    id: 1,
    name: "Pomodoro Siccagno della Valle del Belìce",
    description: "",
    price: 4.5,
    category: "Ortaggi",
    img: "img/pomodoro-siccagno.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 2,
    name: "Mandorla di Noto",
    description: "",
    price: 6.9,
    category: "Frutta secca",
    img: "img/mandorla-noto.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 3,
    name: "Fava Cottoia Modicana",
    description: "",
    price: 3.8,
    category: "Legumi",
    img: "img/fava-modicana.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 4,
    name: "Suino Nero dei Nebrodi – Salame",
    description: "",
    price: 12.5,
    category: "Salumi",
    img: "img/suino-nero-salame.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 5,
    name: "Caciocavallo Ragusano DOP",
    description: "",
    price: 9.9,
    category: "Formaggi",
    img: "img/ragusano.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 6,
    name: "Provola dei Nebrodi",
    description: "",
    price: 8.5,
    category: "Formaggi",
    img: "img/provola-nebrodi.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 7,
    name: "Cipolla di Giarratana",
    description: "",
    price: 2.8,
    category: "Ortaggi",
    img: "img/cipolla-giarratana.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 8,
    name: "Pistacchio di Bronte",
    description: "",
    price: 7.5,
    category: "Frutta secca",
    img: "img/pistacchio-bronte.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 9,
    name: "Pane Nero di Castelvetrano",
    description: "",
    price: 3.2,
    category: "Pane",
    img: "img/pane-nero-castelvetrano.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 10,
    name: "Arancia Ribera DOP",
    description: "",
    price: 2.9,
    category: "Frutta",
    img: "img/arancia-ribera.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 11,
    name: "Manna delle Madonie",
    description: "",
    price: 11.9,
    category: "Dolci",
    img: "img/manna-madonie.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 12,
    name: "Cappero di Pantelleria",
    description: "",
    price: 5.7,
    category: "Sottaceti",
    img: "img/capperi-pantelleria.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 13,
    name: "Sale Marino di Trapani",
    description: "",
    price: 1.8,
    category: "Spezie",
    img: "img/sale-trapani.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 14,
    name: "Oliva di Sant’Agostino",
    description: "",
    price: 4.2,
    category: "Olive",
    img: "img/oliva-sant-agostino.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
  {
    id: 15,
    name: "Bottarga di Muggine di Trapani",
    description: "",
    price: 14.5,
    category: "Pesce",
    img: "img/bottarga-trapani.jpg",
    availableInStock: 100,
    nutritionFacts: { calories: 0, carbs: 0, fat: 0, protein: 0, sugar: 0 },
  },
];

// DOM elements
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

  // Preferiti
  star.addEventListener("click", () => {
    const curr = memoryStar[product.id]?.isFavorite || false;

    if (!curr) memoryStar[product.id] = { product, isFavorite: true };
    else delete memoryStar[product.id];

    star.setAttribute("name", !curr ? "star" : "star-outline");
    updateLocalStorage();
    updateFavoritesCounter();
  });

  // -
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

  // +
  plusBtn.addEventListener("click", () => {
    allCounters[product.id] = (allCounters[product.id] || 0) + 1;
    counterSpan.textContent = allCounters[product.id];
    addToCartBtn.textContent = "Added to Cart";

    updateCartSummary();
  });

  // Add to Cart
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

products.forEach((p) => createCard(p, prodotti));

// Ricerca
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

document
  .getElementById("cartBtn")
  .addEventListener("click", () => cartSidebar.classList.toggle("hidden"));
document
  .getElementById("closeCartBtn")
  .addEventListener("click", () => cartSidebar.classList.add("hidden"));

updateFavoritesCounter();
updateCartSummary();
updateNavCounter();
