let discountCards = document.querySelector(".discountCards");
let carts = JSON.parse(localStorage.getItem("carts") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));
let cartBadge = document.getElementById("cartBadge");
cartBadge.textContent = carts.length;

let cardsHTML = "";
products
  .filter(p => p.discount > 0)
  .slice(0, 4)
  .forEach(el => {
    cardsHTML += `
      <div class="group bg-white rounded-xl shadow transition p-2 sm:p-4 relative hover:shadow-lg hover:scale-102 duration-300 flex flex-col">
        <button class="group-hover:block absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
          <img src="../images/fav.png" alt="Favourite" class="w-6 h-6 transition">
        </button>

        <div class="relative mb-2">
          <img src="${el.images[0]}" alt="${el.name}" class="w-full h-38 sm:h-52 object-cover rounded-lg">
          <span class="w-[40px] sm:w-[56px] h-[26px] sm:h-[32px] absolute bottom-6 left-2 bg-[#FF6633] text-white text-[12px] sm:text-[17px] font-semibold px-3 py-1 rounded">${el.discount}%</span>
        </div>

        <div class="mb-2">
          <div class="flex justify-between items-baseline gap-2">
            <span class="text-md sm:text-xl font-bold text-[#414141]">${el.price}₽</span>
          </div>
        </div>

        <h3 class="text-sm sm:text-[16px] font-semibold text-[#414141] mt-3">${el.name}</h3>

        <div class="flex items-center my-1 space-x-2">
        ${
            el.rating === 5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
            ` 
            : el.rating === 4.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Half star">
            `
            : el.rating === 4 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 3.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Half star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 3 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 2.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 2 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 1.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 1 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 0.5 ? `
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : `
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
  }
        </div>

        ${
          carts.find(cart => cart.id === el.id)
          ? `
          <div class="quantity-controls grid grid-cols-3 mt-auto bg-white rounded border border-[#70C05B]">
          <button onclick="changeQuantity(${el.id}, 'decrease')" class="text-white bg-red-500 font-bold text-xl py-1">-</button>
          <span id="quantity-${el.id}" class="text-center font-bold text-[#414141] py-1">
          ${carts.find(cart => cart.id === el.id)?.quantity || 1}
          </span>
          <button onclick="changeQuantity(${el.id}, 'increase')" class="text-white bg-green-500 font-bold text-xl py-1">+</button>
          </div>`
          : `<button
          onclick="addToCart(${el.id})"
          class="mt-auto w-full bg-white rounded border border-[#70C05B] text-[#70C05B] hover:bg-[#FF6633] hover:text-white transition duration-300 py-1">
          В корзину
          </button>`
}
        

      </div>
    `;
  });

  function addToCart(id) {
    let item = products.find((el) => el.id === id);
    carts.push(item)
    console.log(carts);
    cartBadge.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
  }

discountCards.innerHTML = cardsHTML;







let newItems = document.querySelector(".newItems");

let newItemsHTML = "";
products
  .slice(-4)
  .forEach(el => {
    newItemsHTML += `
      <div class="group bg-white rounded-xl shadow transition p-2 sm:p-4 relative hover:shadow-lg hover:scale-105 duration-300 flex flex-col justify-between h-full">
        <button class="group-hover:block absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
          <img src="../images/fav.png" alt="Favourite" class="w-6 h-6 transition">
        </button>

        <div class="relative mb-4">
          <img src="${el.images[0]}" alt="${el.name}" class="w-full h-38 sm:h-52 object-cover rounded-lg">
        </div>

        <div class="mb-4">
          <span class="text-md sm:text-xl font-bold text-[#414141]">${el.price} ₽</span>
        </div>

        <h3 class="text-sm sm:text-[16px] font-semibold text-[#414141] mt-3">${el.name}</h3>

        <div class="flex items-center my-1 space-x-2">
        ${
            el.rating === 5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
            ` 
            : el.rating === 4.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Half star">
            `
            : el.rating === 4 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 3.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Half star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 3 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 2.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 2 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 1.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 1 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 0.5 ? `
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : `
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
  }
        </div>

        <button class="mt-auto w-full bg-[#FFFFFF] rounded border border-[#70C05B] text-[#70C05B] group-hover:bg-[#FF6633] group-hover:border-none group-hover:text-[#FFFFFF] transition duration-300 py-1">В корзину</button>
      </div>
    `;
  });

newItems.innerHTML = newItemsHTML;





let prevBought = document.querySelector(".prevBought");

let prevBoughtHTML = "";
products
  .slice(-4)
  .forEach(el => {
    prevBoughtHTML += `
      <div class="group bg-white rounded-xl shadow transition p-2 sm:p-4 relative hover:shadow-lg hover:scale-105 duration-300 flex flex-col justify-between h-full">
        <button class="group-hover:block absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
          <img src="../images/fav.png" alt="Favourite" class="w-6 h-6 transition">
        </button>

        <div class="relative mb-4">
          <img src="${el.images[0]}" alt="${el.name}" class="w-full h-38 sm:h-52 object-cover rounded-lg">
        </div>

        <div class="mb-4">
          <span class="text-md sm:text-xl font-bold text-[#414141]">${el.price} ₽</span>
        </div>

        <h3 class="text-sm sm:text-[16px] font-semibold text-[#414141] mt-3">${el.name}</h3>

        <div class="flex items-center my-1 space-x-2">
        ${
            el.rating === 5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
            ` 
            : el.rating === 4.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Half star">
            `
            : el.rating === 4 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 3.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Half star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 3 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 2.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 2 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 1.5 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 1 ? `
              <img src="./images/Star-orange.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : el.rating === 0.5 ? `
              <img src="./images/Star-half.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
            : `
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
              <img src="./images/Star-gray.png" alt="Rating star">
            `
  }
        </div>

        <button class="mt-auto w-full bg-[#FFFFFF] rounded border border-[#70C05B] text-[#70C05B] group-hover:bg-[#FF6633] group-hover:border-none group-hover:text-[#FFFFFF] transition duration-300 py-1">В корзину</button>
      </div>
    `;
  });

prevBought.innerHTML = prevBoughtHTML;

let loader = document.getElementById("loadingScreen");
window.addEventListener("load", function() {
  loader.classList.add("hidden")
});

