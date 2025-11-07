const cartItems = JSON.parse(localStorage.getItem("carts")) || [];

const cartCountEl = document.getElementById("cart__count");
const cartItemsContainer = document.querySelector(".cartProducts");
const cartBadge = document.getElementById("cartBadge");

function renderCart() {
    if (!cartItemsContainer) return;
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-center py-8">Cart is empty</p>`;
        updateCartCount();
        updateCartSummary();
        return;
    }
    
    let cartItemsHTML = '';
    cartItems.forEach(el => {
        const discountedPrice = el.price * (1 - el.discount / 100);
        const total = discountedPrice * el.quantity;
        
        const imagePath = el.images[0];
        
        cartItemsHTML += `
          <div class="bg-white p-4 rounded-lg shadow mb-4">
            <div class="flex items-center gap-4">
              <img src="${imagePath}" alt="${el.name}" class="w-20 h-20 object-cover rounded">
                <div class="flex-1">
                  <h3 class="font-bold">${el.name}</h3>
                  <div class="flex items-center gap-2 mt-2"> <!-- Added flex container -->
                  <p class="text-green-600 font-bold">${discountedPrice.toFixed(0)} ₽</p>
                  ${el.discount > 0 ? `<span class="bg-[#FF6633] text-white text-sm px-2 py-1 rounded">-${el.discount}%</span>` : ''}
                  </div>
                </div>
                <div class="flex items-center gap-2 text-white rounded-md p-2 ml-4">
                  <button onclick="changeCartQuantity(${el.id}, -1)" class="w-10 h-10 flex justify-center items-center bg-[red]">-</button>
                  <span class="px-2 text-black font-bold">${el.quantity}</span>
                  <button onclick="changeCartQuantity(${el.id}, 1)" class="w-10 h-10 flex justify-center items-center bg-[#70C05B]">+</button>
                </div>
                <p class="font-bold min-w-[80px] text-right">${total.toFixed(0)} ₽</p>
            </div>
          </div>
      `;
    });

    const html = `
    <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1 space-y-4">
            ${cartItemsHTML}
        </div>

        <aside class="w-full md:w-[320px] rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div class="flex space-y-1 items-center justify-between">
                <label for="use-bonus" class="text-[#414141] font-semibold">Списать 200 ₽</label>
                <input id="use-bonus" type="checkbox" checked class="accent-[#70C05B] w-5 h-5 cursor-pointer">
            </div>

            <p class="text-[#606060] text-sm">На карте накоплено 200 ₽</p>
            <hr class="border-gray-200">
            <div class="space-y-2">
                <div class="flex justify-between text-[#606060]">
                    <p class="text-md" id="cart-item-count">3 товара</p>
                    <p class="text-lg" id="cart-total-price">258,10 ₽</p>
                </div>
                <div class="flex justify-between text-[#606060]">
                    <p class="text-md">Скидка</p>
                    <p class="text-[#FF6633] text-lg font-bold" id="cart-discount">-8,01 ₽</p>
                </div>
                <hr class="border-gray-200 my-6">
                <div class="flex justify-between items-center text-lg text-[#414141] mt-4">
                    <p class="">Итого</p>
                    <p class="text-2xl font-bold" id="cart-final-price">250,09 ₽</p>
                </div>
            </div>

            <div class="flex items-center justify-center text-sm text-[#70C05B] gap-1 mt-2">
                <img src="../images/cart-bonus.png" alt="">
                <span>Вы получите <span class="font-semibold" id="cart-bonus">100</span> бонусов</span>
            </div>

            <div class="bg-[red] w-[80%] text-white items-center mx-auto justify-center text-center rounded-md p-1 text-[12px]">Минимальная сумма заказа 1000 ₽</div>

            <button class="w-full bg-[#FCD5BA] shadow hover:shadow-lg transition text-[#FF6633] text-lg font-semibold rounded-lg py-3">Оформить заказ</button>
        </aside>
    </div>
    `;
    
    cartItemsContainer.innerHTML = html;
    updateCartCount();
    updateCartSummary();
}

function updateCartSummary() {
    const itemCountEl = document.getElementById("cart-item-count");
    const totalPriceEl = document.getElementById("cart-total-price");
    const discountEl = document.getElementById("cart-discount");
    const finalPriceEl = document.getElementById("cart-final-price");
    const bonusEl = document.getElementById("cart-bonus");

    if (cartItems.length === 0) {
        if (itemCountEl) itemCountEl.textContent = "0 товаров";
        if (totalPriceEl) totalPriceEl.textContent = "0 ₽";
        if (discountEl) discountEl.textContent = "0 ₽";
        if (finalPriceEl) finalPriceEl.textContent = "0 ₽";
        if (bonusEl) bonusEl.textContent = "0";
        return;
    }

    let totalItems = 0;
    let totalOriginalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalDiscount = 0;

    cartItems.forEach(el => {
        totalItems += el.quantity;
        
         const originalPrice = el.price * el.quantity;
        
        const discountedPrice = el.price * (1 - el.discount / 100) * el.quantity;
        
        totalOriginalPrice += originalPrice;
        totalDiscountedPrice += discountedPrice;
        totalDiscount += (originalPrice - discountedPrice);
    });

    const bonus = Math.floor(totalDiscountedPrice / 10);

    if (itemCountEl) itemCountEl.textContent = `${totalItems} товаров`;
    if (totalPriceEl) totalPriceEl.textContent = `${totalOriginalPrice.toFixed(2)} ₽`;
    if (discountEl) discountEl.textContent = `-${totalDiscount.toFixed(2)} ₽`;
    if (finalPriceEl) finalPriceEl.textContent = `${totalDiscountedPrice.toFixed(2)} ₽`;
    if (bonusEl) bonusEl.textContent = 100;
}

function updateCartCount() {
    const totalItems = cartItems.reduce((sum, el) => sum + el.quantity, 0);
    if (cartCountEl) cartCountEl.textContent = totalItems;
    if (cartBadge) cartBadge.textContent = totalItems;
}

function changeCartQuantity(id, delta) {
    const item = cartItems.find(c => c.id === id);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity < 1) {
        const index = cartItems.findIndex(c => c.id === id);
        cartItems.splice(index, 1);
    }
    
    localStorage.setItem("carts", JSON.stringify(cartItems));
    renderCart();
}

renderCart();