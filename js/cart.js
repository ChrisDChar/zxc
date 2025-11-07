let carts = JSON.parse(localStorage.getItem("carts") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));

let cartCountEl = document.getElementById("cart__count");
let cartItemsContainer = document.querySelector(".cartProducts");
let useBonusCheckbox = document.getElementById("use-bonus");
let cartBadge = document.getElementById("cartBadge");

if (cartBadge) {
  cartBadge.textContent = carts.length;
}

localStorage.setItem("carts", JSON.stringify(carts));

function updateCartBadge() {
  let badge = document.getElementById("cart-count");
  if (badge) {
    badge.textContent = carts.length;
  }
}

function showProductCards (content, data) {
  data.map((el) => {
    content.innerHTML += `
    <div class="relative flex flex-col justify-between items-start bg-white shadow-md rounded-xl p-4 gap-4">
        <input type="checkbox" class="absolute top-2 left-2 w-5 h-5 accent-[#70C05B] cursor-pointer">

        <div class="flex items-center gap-4 flex-1 w-full">
          <div>
            <img src="${el.images[0]}" alt="${el.name}" class="w-full h-full object-cover rounded-md">
          </div>
          <div class="flex flex-col flex-1">
            <h2 class="text-[#414141] font-semibold text-lg">${el.name}</h2>
            <p class="text-[#414141] text-[12px] font-bold mt-3">
              ${el.discount.toFixed(2)} ₽ 
              <span class="text-[#606060] text-[12px] font-semibold ml-4">за шт.</span>
            </p>
            ${el.discount ? `<span class="w-[50px] h-[30px] rounded-md flex justify-center text-[14px] inline-block mt-2 bg-[#FF6633] font-semibold text-white px-2 py-1">-${el.discount}%</span>` : ""}

          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 bg-[#70C05B] text-white rounded-md text-lg font-bold p-2">
              <button onclick="changeQuantity(${el.id}, -1)" class="w-8 h-8 flex justify-center items-center">-</button>
              <span class="text-lg font-semibold" id="quantity-${el.id}">${cartItem.quantity}</span>
              <button onclick="changeQuantity(${el.id}, 1)" class="w-8 h-8 flex justify-center items-center">+</button>
            </div>
            <p class="text-lg font-bold text-[#414141] text-[18px]">${(el.discount * cartItem.quantity).toFixed(2)} ₽</p>
          </div>
        </div>
      </div>
    `
  })
}
showProductCards (cartProducts, carts)


  document.querySelector(".flex.justify-between.text-[#606060] p:nth-child(2)").textContent = totalPrice.toFixed(2) + " ₽";
  document.querySelector(".flex.justify-between.text-[#606060] p.text-[#FF6633]").textContent = "-" + totalDiscount.toFixed(2) + " ₽";
  document.querySelector(".flex.justify-between.items-center.text-lg.text-[#414141] p.text-2xl").textContent = (totalPrice).toFixed(2) + " ₽";

function changeQuantity(id, delta) {
  let cartItem = carts.find(c => c.id === id);
  if (!cartItem) return;

  cartItem.quantity = Math.max(1, cartItem.quantity + delta);
  localStorage.setItem("carts", JSON.stringify(carts));
  renderCart();
  updateCartCount();
}

renderCart();
updateCartCount();
