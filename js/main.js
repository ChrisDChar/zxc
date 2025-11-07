let discountCards = document.querySelector(".discountCards");
let carts = JSON.parse(localStorage.getItem("carts") || "[]");
let fav = JSON.parse(localStorage.getItem("favourite") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));
localStorage.setItem("favourite", JSON.stringify(fav));
let profile = document.getElementById("Profile");
let formmodal = document.getElementById("form-modal");
let innermodal = document.getElementById("inner-modal");
let inputmodal = document.getElementsByClassName("modal-input");
let modalform = document.getElementById("modal-form");
let profilename = document.getElementById("profile-name");
let profileimage =document.getElementById("profile-image")
let cartBadge = document.getElementById("cartBadge");
let favBadge = document.getElementById("favBadge")
cartBadge.textContent = carts.length;
favBadge.textContent = fav.length;

let profileObj = JSON.parse(localStorage.getItem("profile") || "{}");

profileimage.src = profileObj.PhotoURL;
profilename.textContent = profileObj.Name;

profile.addEventListener("click", function(){
  formmodal.classList.remove("hidden")
})

formmodal.addEventListener("click", function(){
  formmodal.classList.add("hidden")
})

innermodal.addEventListener("click", function(e){
  e.stopPropagation();
})

modalform.addEventListener("submit", function(e){
  e.preventDefault();
  profileObj.PhotoURL = e.target[0].value
  profileObj.Name = e.target[1].value
  profileObj.Phone = e.target[2].value
  profileimage.src = e.target[0].value
  profilename.textContent = e.target[1].value
  localStorage.setItem("profile", JSON.stringify(profileObj))
  formmodal.classList.add("hidden")
})

let cardsHTML = "";
products
  .filter(p => p.discount > 0)
  .slice(0, 4)
  .forEach(el => {
    cardsHTML += `
      <div class="group bg-white rounded-xl shadow transition p-2 sm:p-4 relative hover:shadow-lg hover:scale-102 duration-300 flex flex-col">
        <button class="group-hover:block absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
        ${
          fav.find((item) => item.id === el.id) ? `<img
          onClick="removeFromFav(${el.id})"
           class="w-6 h-6 transition" src="../images/fav+.png" alt="Favourite">`  : `<img
          onClick="addToFav(${el.id})"
           class="w-6 h-6 transition" src="../images/fav.png" alt="Favourite">`
        }
        </button>

        <div class="relative mb-2">
          <a href="../html/single.html?id=${el.id}">
          <img src="${el.images[0]}" alt="${el.name}" class="w-full h-38 sm:h-52 object-cover rounded-lg">
          </a>
          <span class="w-[40px] sm:w-[56px] h-[26px] sm:h-[32px] absolute bottom-3 left-2 bg-[#FF6633] text-white text-[12px] sm:text-[17px] font-semibold px-3 py-1 rounded">${el.discount}%</span>
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
  let product = products.find(item => item.id === id);

  if (!carts.some(item => item.id === id)) {
    carts.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("carts", JSON.stringify(carts));
  cartBadge.textContent = carts.length;

  let button = document.querySelector(`button[onclick="addToCart(${id})"]`);
  if (button) {
    button.outerHTML = `
      <div class="quantity-controls grid grid-cols-3 mt-auto bg-white rounded border border-[#70C05B]">
        <button onclick="changeQuantity(${id}, 'decrease')" class="text-white bg-red-500 font-bold text-xl py-1">-</button>
        <span id="quantity-${id}" class="text-center font-bold text-[#414141] py-1">1</span>
        <button onclick="changeQuantity(${id}, 'increase')" class="text-white bg-green-500 font-bold text-xl py-1">+</button>
      </div>
    `;
  }
}

function addToFav (id) {
    let favItem = products.find((el) => el.id === id)
    fav.push(favItem);
    favBadge.textContent = fav.length;
    localStorage.setItem("favourite", JSON.stringify(fav));
    let img = document.querySelector(`button img[onclick="addToFav(${id})"]`);
    if (img) {
        img.src = "../images/fav+.png";               // Make it red
        img.setAttribute("onclick", `removeFromFav(${id})`);  // Update click
    }
  }

function removeFromFav (id) {
  fav = fav.filter((el) => el.id !== id)
  favBadge.textContent = fav.length;
  localStorage.setItem("favourite", JSON.stringify(fav));
  let img = document.querySelector(`button img[onclick="removeFromFav(${id})"]`);
    if (img) {
        img.src = "../images/fav.png";               // Make it normal
        img.setAttribute("onclick", `addToFav(${id})`);  // Update click
    }
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
    cartBadge.textContent = carts.length;

    let card = document.querySelector(`#quantity-${id}`)?.closest(".quantity-controls");
    if (card) {
      card.outerHTML = `
        <button
          onclick="addToCart(${id})"
          class="mt-auto w-full bg-white rounded border border-[#70C05B] text-[#70C05B] hover:bg-[#FF6633] hover:text-white transition duration-300 py-1">
          В корзину
        </button>
      `;
    }
    return;
  }


  let quantityText = document.getElementById(`quantity-${id}`);
  if (quantityText) quantityText.textContent = item.quantity;

  localStorage.setItem("carts", JSON.stringify(carts));
}


discountCards.innerHTML = cardsHTML;







let newItems = document.querySelector(".newItems");

let newItemsHTML = "";
products
  .slice(-4)
  .forEach(el => {
    let inCart = carts.find(cart => cart.id === el.id);

    newItemsHTML += `
      <div class="group bg-white rounded-xl shadow transition p-2 sm:p-4 relative hover:shadow-lg hover:scale-102 duration-300 flex flex-col justify-between h-full">
        <button class="group-hover:block absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
          <img src="../images/fav.png" alt="Favourite" class="w-6 h-6 transition">
        </button>

        <a href="../html/single.html?id=${el.id}">
          <img src="${el.images[0]}" alt="${el.name}" class="w-full h-38 sm:h-52 object-cover rounded-lg">
        </a>

        <div class="mb-4">
          <span class="text-md sm:text-xl font-bold text-[#414141]">${el.price} ₽</span>
        </div>

        <h3 class="text-sm sm:text-[16px] font-semibold text-[#414141] mt-3">${el.name}</h3>

        <div class="flex items-center my-1 space-x-2">
          ${/* --- Your rating code stays exactly as it is --- */ ""}
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
          inCart
            ? `
            <div class="quantity-controls grid grid-cols-3 mt-auto bg-white rounded border border-[#70C05B]">
              <button onclick="changeQuantity(${el.id}, 'decrease')" class="text-white bg-red-500 font-bold text-xl py-1">-</button>
              <span id="quantity-${el.id}" class="text-center font-bold text-[#414141] py-1">${inCart.quantity}</span>
              <button onclick="changeQuantity(${el.id}, 'increase')" class="text-white bg-green-500 font-bold text-xl py-1">+</button>
            </div>`
            : `
            <button
              onclick="addToCart(${el.id})"
              class="mt-auto w-full bg-white rounded border border-[#70C05B] text-[#70C05B] group-hover:bg-[#FF6633] group-hover:text-white transition duration-300 py-1">
              В корзину
            </button>`
        }

      </div>
    `;
  });

newItems.innerHTML = newItemsHTML;






let prevBought = document.querySelector(".prevBought");

let prevBoughtHTML = "";
products
  .slice(-4)
  .forEach(el => {
    let prevCart = carts.find(cart => cart.id === el.id);

    prevBoughtHTML += `
      <div class="group bg-white rounded-xl shadow transition p-2 sm:p-4 relative hover:shadow-lg hover:scale-102 duration-300 flex flex-col justify-between h-full">
        <button class="group-hover:block absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
          <img src="../images/fav.png" alt="Favourite" class="w-6 h-6 transition">
        </button>

        <a href="../html/single.html?id=${el.id}">
          <img src="${el.images[0]}" alt="${el.name}" class="w-full h-38 sm:h-52 object-cover rounded-lg">
        </a>

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

        ${
          prevCart
            ? `
            <div class="quantity-controls grid grid-cols-3 mt-auto bg-white rounded border border-[#70C05B]">
              <button onclick="changeQuantity(${el.id}, 'decrease')" class="text-white bg-red-500 font-bold text-xl py-1">-</button>
              <span id="quantity-${el.id}" class="text-center font-bold text-[#414141] py-1">${prevCart.quantity}</span>
              <button onclick="changeQuantity(${el.id}, 'increase')" class="text-white bg-green-500 font-bold text-xl py-1">+</button>
            </div>`
            : `
            <button
              onclick="addToCart(${el.id})"
              class="mt-auto w-full bg-white rounded border border-[#70C05B] text-[#70C05B] group-hover:bg-[#FF6633] group-hover:text-white transition duration-300 py-1">
              В корзину
            </button>`
        }

      </div>
    `;
  });

prevBought.innerHTML = prevBoughtHTML;


let loader = document.getElementById("loadingScreen");
window.addEventListener("load", function() {
  loader.classList.add("hidden")
});

