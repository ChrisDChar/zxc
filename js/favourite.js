let favProductsContainer = document.getElementById("favProducts");
let favoriteIds = JSON.parse(localStorage.getItem("favourite")) || [];
let fav = JSON.parse(localStorage.getItem("favourite") || "[]");
let favBadge = document.getElementById("favBadge");
let carts = JSON.parse(localStorage.getItem("carts") || "[]");

if (favBadge) {
    favBadge.textContent = fav.length;
}

function renderFavorites() {
  favProductsContainer.innerHTML = "";

  let favItems = products.filter(p => favoriteIds.some(fav => fav.id === p.id));

  if (favItems.length === 0) {
    favProductsContainer.innerHTML = `
      <div class="col-span-full text-center py-10">
        <p class="text-gray-500 text-lg">Нет избранных товаров</p>
      </div>`;
    return;
  }

  favItems.forEach(product => {
    let card = document.createElement("div");
    card.className = "group bg-white rounded-xl shadow transition p-2 sm:p-4 relative hover:shadow-lg hover:scale-102 duration-300 flex flex-col";
    
    let discountedPrice = product.discount > 0 ? product.price - (product.price * product.discount / 100) : null;
    let inCart = carts.find(cart => cart.id === product.id);

    card.innerHTML = `
      <button class="absolute top-3 right-3 removeFav z-10" data-id="${product.id}">
        <img src="../images/fav+.png" alt="Remove from favourites" class="w-6 h-6 transition">
      </button>
      
      <div class="relative mb-2">
        <a href="../html/single.html?id=${product.id}">
          <img src="${product.images[0]}" alt="${product.name}" class="w-full h-28 sm:h-32 object-cover rounded-lg">
        </a>
        ${product.discount ? `<span class="absolute top-2 left-2 bg-[#FF6633] text-white text-xs font-semibold px-2 py-1 rounded">-${product.discount}%</span>` : ""}
      </div>

      <div class="mb-2">
        <div class="flex justify-between items-baseline gap-2">
          ${
            discountedPrice 
              ? `
              <span class="text-sm text-gray-400 line-through">${product.price} ₽</span>
              <span class="text-md font-bold text-[#414141]">${discountedPrice.toFixed(2)} ₽</span>
              `
              : `<span class="text-md font-bold text-[#414141]">${product.price} ₽</span>`
          }
        </div>
      </div>

      <h3 class="text-sm font-semibold text-[#414141] mt-2">${product.name}</h3>
      
      <!-- Product description under the name -->
      <p class="text-xs text-[#606060] mt-1 line-clamp-2">${product.description}</p>

      <div class="flex items-center my-2 space-x-2">
        ${
            product.rating === 5 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
            ` 
            : product.rating === 4.5 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-half.png" alt="Half star" class="w-4 h-4">
            `
            : product.rating === 4 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : product.rating === 3.5 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-half.png" alt="Half star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : product.rating === 3 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : product.rating === 2.5 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-half.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : product.rating === 2 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : product.rating === 1.5 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-half.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : product.rating === 1 ? `
              <img src="../images/Star-orange.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : product.rating === 0.5 ? `
              <img src="../images/Star-half.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
            : `
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
              <img src="../images/Star-gray.png" alt="Rating star" class="w-4 h-4">
            `
        }
      </div>

      ${
        inCart
          ? `
          <div class="quantity-controls grid grid-cols-3 mt-auto bg-white rounded border border-[#70C05B]">
            <button onclick="changeQuantity(${product.id}, 'decrease')" class="text-white bg-red-500 font-bold text-sm py-1">-</button>
            <span id="quantity-${product.id}" class="text-center font-bold text-[#414141] py-1 text-sm">${inCart.quantity}</span>
            <button onclick="changeQuantity(${product.id}, 'increase')" class="text-white bg-green-500 font-bold text-sm py-1">+</button>
          </div>`
          : `
          <button
            onclick="addToCart(${product.id})"
            class="mt-auto w-full bg-white rounded border border-[#70C05B] text-[#70C05B] hover:bg-[#FF6633] hover:text-white transition duration-300 py-1 text-sm">
            В корзину
          </button>`
      }
    `;
    
    favProductsContainer.appendChild(card);
  });

  updateFavBadge();

  document.querySelectorAll(".removeFav").forEach(button => {
    button.addEventListener("click", (e) => {
      let productId = Number(e.currentTarget.dataset.id);
      removeFromFavorites(productId);
    });
  });
}

function removeFromFavorites(productId) {
  let updatedFavorites = favoriteIds.filter(item => item.id !== productId);
  
  localStorage.setItem("favourite", JSON.stringify(updatedFavorites));
  
  favoriteIds.length = 0;
  favoriteIds.push(...updatedFavorites);
  
  updateFavBadge();
  
  renderFavorites();
}

function updateFavBadge() {
  let favBadge = document.getElementById("favBadge");
  if (favBadge) {
    favBadge.textContent = favoriteIds.length;
  }
}

function addToCart(id) {
  let product = products.find(item => item.id === id);

  if (!carts.some(item => item.id === id)) {
    carts.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("carts", JSON.stringify(carts));
  
  let cartBadge = document.getElementById("cartBadge");
  if (cartBadge) {
    cartBadge.textContent = carts.length;
  }

  renderFavorites();
}

function changeQuantity(id, action) {
  let item = carts.find(p => p.id === id);
  if (!item) return;

  if (action === "increase") item.quantity++;
  if (action === "decrease") item.quantity--;

  if (item.quantity < 1) {
    let index = carts.findIndex(p => p.id === id);
    carts.splice(index, 1);

    localStorage.setItem("carts", JSON.stringify(carts));
    
    let cartBadge = document.getElementById("cartBadge");
    if (cartBadge) {
      cartBadge.textContent = carts.length;
    }

    renderFavorites();
    return;
  }

  localStorage.setItem("carts", JSON.stringify(carts));
  
  let quantityText = document.getElementById(`quantity-${id}`);
  if (quantityText) quantityText.textContent = item.quantity;
}

renderFavorites();