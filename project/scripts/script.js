const products = [
  {
    id: 1,
    name: "Celestial Charm Bracelet",
    category: "bracelet",
    price: 32,
    description: "White howlite beads strung with tiny star and moon charms — a little night sky for your wrist.",
    materials: "Howlite beads, gold-plated accents, cubic-zirconia charms, stretch cord.",
    image: "images/opt/pexels-thevallaki-jewels-770158105-20768646.jpg",
    alt: "Beaded bracelet with star and moon charms on navy silk",
  },
  {
    id: 2,
    name: "Wildflower Ceramic Necklace",
    category: "necklace",
    price: 28,
    description: "A hand-knotted cord scattered with ceramic blossoms and glass leaves, finished with a red flower pendant.",
    materials: "Ceramic flower beads, glass leaf beads, waxed cotton cord.",
    image: "images/opt/pexels-roo-1110882060-30130003.jpg",
    alt: "Red ceramic flower necklace and matching bracelet on a knit blanket",
  },
  {
    id: 3,
    name: "Coral Drop Chain Necklace",
    category: "necklace",
    price: 45,
    description: "A delicate gold chain dotted with coral beads and faceted crystal drops that catch the light.",
    materials: "14k gold-filled chain, coral-toned resin beads, cut-glass crystals.",
    image: "images/opt/pexels-lauraoliveira-34444200.jpg",
    alt: "Gold chain necklace with pink beads and crystal drops",
  },
  {
    id: 4,
    name: "Crystal Beaded Ring Stack",
    category: "ring",
    price: 18,
    description: "A playful trio of stretchy beaded rings — mix, match, and stack them across your fingers.",
    materials: "Glass seed beads, quartz chips, elastic thread. Set of three.",
    image: "images/opt/pexels-wynonah-rebutar-95843527-11518667.jpg",
    alt: "Three beaded rings worn on a hand",
  },
  {
    id: 5,
    name: "Sapphire Bead Strands",
    category: "necklace",
    price: 22,
    description: "Glossy sapphire-blue beads in layered strands for a bold pop of color.",
    materials: "Acrylic pearl beads, nylon thread.",
    image: "images/opt/pexels-irina-p-225422935-14820550.jpg",
    alt: "Strands of shiny blue beads",
  },
  {
    id: 6,
    name: "Layered Bead Necklace Set",
    category: "necklace",
    price: 38,
    description: "Three necklaces in one — a beaded choker, a pearl strand, and a silver charm chain to layer together.",
    materials: "Glass seed beads, freshwater pearls, sterling silver star charm.",
    image: "images/opt/pexels-virgimaldonado-3460045-10052693.jpg",
    alt: "Layered beaded and charm necklaces on a model",
  },
  {
    id: 7,
    name: "Huayruro Seed Necklace",
    category: "necklace",
    price: 26,
    description: "Naturally red-and-black huayruro seeds, hand-knotted for a bohemian, good-luck look.",
    materials: "Natural huayruro seeds, waxed cord.",
    image: "images/opt/pexels-alexeydemidov-10596289.jpg",
    alt: "Necklace of red and black seed beads",
  },
  {
    id: 8,
    name: "Sea Glass & Silver Necklace",
    category: "necklace",
    price: 34,
    description: "A frosted aqua sea-glass nugget framed by tiny faceted silver beads.",
    materials: "Recycled sea glass, hematite beads, silver-plated spacers.",
    image: "images/opt/pexels-alexeydemidov-10624296.jpg",
    alt: "Aqua sea glass necklace with silver beads",
  },
  {
    id: 9,
    name: "Green Jade Heishi Bracelet",
    category: "bracelet",
    price: 20,
    description: "Smooth stacked jade discs in mixed greens — easy to wear alone or piled high.",
    materials: "Dyed jade heishi beads, stretch cord.",
    image: "images/opt/pexels-alexeydemidov-10835520.jpg",
    alt: "Green jade disc bead bracelet",
  },
  {
    id: 10,
    name: "Smoky Quartz Bead Bracelet",
    category: "bracelet",
    price: 24,
    description: "Translucent smoky quartz rounds with a hint of silver sparkle between them.",
    materials: "Smoky quartz beads, Tibetan silver spacers, stretch cord.",
    image: "images/opt/pexels-alexeydemidov-10950896.jpg",
    alt: "Smoky quartz beaded bracelet",
  },
  {
    id: 11,
    name: "Daisy Chain Choker",
    category: "necklace",
    price: 19,
    description: "A cheerful turquoise choker with beaded daisies — pure summer.",
    materials: "Glass seed beads, nylon cord.",
    image: "images/opt/pexels-cottonbro-10607967.jpg",
    alt: "Turquoise beaded daisy choker on a model",
  },
  {
    id: 12,
    name: "Rainbow Crystal Strand Set",
    category: "necklace",
    price: 30,
    description: "A bundle of shimmering crystal and glass strands in every color — wear one or all at once.",
    materials: "Assorted crystal and glass beads, gold seed-bead accents.",
    image: "images/opt/pexels-zeal-creative-studios-58866141-20618742.jpg",
    alt: "Many colorful beaded strands hanging together",
  },
  {
    id: 13,
    name: "Amazonite Chip Necklace",
    category: "necklace",
    price: 27,
    description: "Raw amazonite chips in soft sea-blues, strung by hand for a natural, earthy feel.",
    materials: "Amazonite stone chips, beading wire.",
    image: "images/opt/pexels-miriam-alonso-7585867.jpg",
    alt: "Amazonite chip necklace being strung by hand",
  },
  {
    id: 14,
    name: "Artisan Glass Bead Necklace",
    category: "necklace",
    price: 42,
    description: "Handblown glass beads on a copper chain — no two beads, and no two necklaces, are alike.",
    materials: "Handblown glass beads, copper chain.",
    image: "images/opt/pexels-lilartsy-2220253.jpg",
    alt: "Handmade glass bead necklaces hanging at a market stall",
  },
  {
    id: 15,
    name: "Green Sea Glass Leaf Bracelet",
    category: "bracelet",
    price: 23,
    description: "Frosted green glass beads centered on an engraved silver leaf — a woodland touch.",
    materials: "Sea glass beads, engraved silver leaf bead, stretch cord.",
    image: "images/opt/pexels-alexeydemidov-11006297.jpg",
    alt: "Green sea glass bracelet with an engraved silver leaf bead",
  },
];

function productCard(product) {
  return `<li class="card">
      <img class="card-img" src="${product.image}" alt="${product.alt}"
           width="400" height="400" loading="lazy" decoding="async" data-id="${product.id}">
      <p class="card-name">${product.name}</p>
      <div class="card-info hidden" id="info-${product.id}">
        <p class="card-price">$${product.price.toFixed(2)}</p>
        <p class="card-desc">${product.description}</p>
        <p class="card-materials"><strong>Materials:</strong> ${product.materials}</p>
      </div>
      <button class="card-add" data-id="${product.id}" data-action="add">Add to Cart</button>
    </li>`;
}

function renderProducts(list) {
  const grid = document.getElementById("product-grid");
  if (list.length === 0) {
    grid.innerHTML = `<li class="no-results">No pieces match your search.</li>`;
  } else {
    grid.innerHTML = list.map(productCard).join("");
  }
  document.getElementById("result-count").textContent =
    `Showing ${list.length} of ${products.length}`;
}

function applyFilters() {
  const category = document.getElementById("category-filter").value;
  const search = document.getElementById("search").value.toLowerCase();

  let list = products;
  if (category !== "all") {
    list = list.filter((product) => product.category === category);
  }
  if (search !== "") {
    list = list.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.materials.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );
  }
  renderProducts(list);
}

document.getElementById("category-filter").addEventListener("change", applyFilters);
document.getElementById("search").addEventListener("input", applyFilters);

document.getElementById("product-grid").addEventListener("click", function (e) {
  const id = e.target.getAttribute("data-id");
  if (!id) return;
  if (e.target.getAttribute("data-action") === "add") {
    addToCart(id);
  } else {
    document.getElementById("info-" + id).classList.toggle("hidden");
  }
});

let cart = [];

function addToCart(id) {
  const line = cart.find((item) => item.id == id);
  if (line) {
    line.qty = line.qty + 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }
  updateCart();
  openCart();
}

function changeQty(id, amount) {
  const line = cart.find((item) => item.id == id);
  if (!line) return;
  line.qty = line.qty + amount;
  if (line.qty <= 0) {
    removeLine(id);
  } else {
    updateCart();
  }
}

function removeLine(id) {
  cart = cart.filter((item) => item.id != id);
  updateCart();
}

function cartCount() {
  let count = 0;
  cart.forEach((line) => {
    count = count + line.qty;
  });
  return count;
}

function cartTotal() {
  let total = 0;
  cart.forEach((line) => {
    const product = products.find((item) => item.id == line.id);
    total = total + product.price * line.qty;
  });
  return total;
}

function cartRow(line) {
  const product = products.find((item) => item.id == line.id);
  return `<li class="cart-item">
      <img src="${product.image}" alt="${product.alt}" width="60" height="60" loading="lazy">
      <div class="cart-item-info">
        <p class="cart-item-name">${product.name}</p>
        <p class="cart-item-price">$${product.price.toFixed(2)}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" data-action="dec" data-id="${line.id}" aria-label="Decrease quantity">&minus;</button>
          <span>${line.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${line.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-action="remove" data-id="${line.id}">Remove</button>
    </li>`;
}

function updateCart() {
  document.getElementById("cart-count").textContent = cartCount();
  document.getElementById("cart-total").textContent = `$${cartTotal().toFixed(2)}`;
  document.getElementById("cart-items").innerHTML = cart.map(cartRow).join("");
  document.getElementById("cart-empty").style.display = cart.length ? "none" : "block";
}

document.getElementById("cart-items").addEventListener("click", function (e) {
  const id = e.target.getAttribute("data-id");
  const action = e.target.getAttribute("data-action");
  if (!action) return;
  if (action === "inc") changeQty(id, 1);
  else if (action === "dec") changeQty(id, -1);
  else if (action === "remove") removeLine(id);
});

function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.add("hidden");
}

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
document.getElementById("cart-overlay").addEventListener("click", closeCart);

document.getElementById("checkout-btn").addEventListener("click", function () {
  if (cart.length === 0) return;
  alert(`Thank you for your order! Your total was $${cartTotal().toFixed(2)}.`);
  cart = [];
  updateCart();
  closeCart();
});

applyFilters();
updateCart();
document.getElementById("year").textContent = new Date().getFullYear();
