let path = new URLSearchParams(location.search);
let id = path.get("id");
let item = products.filter((el) => el.id == id);
let singlecontainer = document.getElementById("single-container");
let productHeader = document.getElementById("product-header");
let fav = JSON.parse(localStorage.getItem("favourite") || "[]");
let carts = JSON.parse(localStorage.getItem("carts") || "[]");

updateAllBadges();

if (item.length > 0) {
    let el = item[0];
    let discountedPrice = (el.price - (el.price * el.discount / 100)).toFixed(2);
    let inCart = carts.find(cart => cart.id === el.id);

    productHeader.innerHTML = `
        <div class="flex flex-col gap-3 mt-4">
            <h1 class="text-5xl font-bold text-[#414141]">${el.name}</h1>
            <div id="single-rating" class="flex flex-wrap items-center gap-5 text-[#414141]">
                <!-- Rating Stars -->
                <div class="flex items-center gap-2">
                    <div class="flex items-center space-x-1">
                        ${
                            el.rating === 5 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                            ` 
                            : el.rating === 4.5 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-half.png" alt="Half star" class="w-5 h-5">
                            `
                            : el.rating === 4 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : el.rating === 3.5 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-half.png" alt="Half star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : el.rating === 3 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : el.rating === 2.5 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-half.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : el.rating === 2 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : el.rating === 1.5 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-half.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : el.rating === 1 ? `
                                <img src="../images/Star-orange.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : el.rating === 0.5 ? `
                                <img src="../images/Star-half.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                            : `
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                                <img src="../images/Star-gray.png" alt="Rating star" class="w-5 h-5">
                            `
                        }
                    </div>
                    <span class="text-[#414141] font-medium">${el.rating}</span>
                </div>
                
                <button class="flex items-center gap-2 text-[#70C05B] font-medium hover:opacity-75 transition">
                    <img src="../images/share.png" alt="share" class="w-5 h-5">Поделиться
                </button>
                <button id="favorite-btn" class="flex items-center gap-2 font-medium hover:opacity-75 transition ${fav.find(item => item.id === el.id) ? 'text-[#FF6633]' : 'text-[#414141]'}">
                    <img src="${fav.find(item => item.id === el.id) ? '../images/fav+.png' : '../images/header-fav.png'}" alt="favorite" class="w-5 h-5">
                    ${fav.find(item => item.id === el.id) ? 'В избранном' : 'В избранное'}
                </button>
            </div>
        </div>
    `;

    singlecontainer.innerHTML = `
    <div id="single-card" class="flex flex-col md:flex-row gap-10">
        <div id="single-left" class="flex gap-[10px]">
            <div id="change-images" class="flex flex-col gap-[5px]">
                ${el.images.map(img => 
                    `<img class="w-[90px] h-[90px] object-cover cursor-pointer border-2 border-transparent rounded-lg transition" src="${img}" alt="${el.name}">`
                ).join('')}
            </div>
            <div class="relative">
                <img id="main-image" class="max-w-[375px] w-full h-[375px] object-cover rounded-lg" src="${el.images[0]}" alt="${el.name}">
                ${el.discount > 0 ? 
                    `<span class="w-[40px] sm:w-[56px] h-[26px] sm:h-[32px] absolute top-3 right-3 bg-[#FF6633] text-white text-[12px] sm:text-[17px] font-semibold px-3 py-1 rounded">${el.discount}%</span>` 
                    : ''}
            </div>
        </div>

        <div id="single-right" class="flex flex-col gap-6 w-full md:w-1/2 px-5 items-start">
            <div class="flex justify-between items-center w-full gap-5">
                ${el.discount > 0 ? 
                    `<p class="text-xl text-gray-400 line-through">${el.price}₽</p>` 
                    : ''}
                <p class="text-3xl font-bold text-[#414141]">${discountedPrice}₽</p>
            </div>

            <div class="w-full flex justify-center">
                ${
                    inCart
                        ? `
                        <div class="quantity-controls grid grid-cols-3 bg-white rounded border border-[#70C05B] w-48">
                            <button onclick="changeQuantity(${el.id}, 'decrease')" class="text-white bg-red-500 font-bold text-xl py-2">-</button>
                            <span id="quantity-${el.id}" class="text-center font-bold text-[#414141] py-2 text-lg">${inCart.quantity}</span>
                            <button onclick="changeQuantity(${el.id}, 'increase')" class="text-white bg-green-500 font-bold text-xl py-2">+</button>
                        </div>`
                        : `
                        <button onclick="addToCart(${el.id})" class="bg-[#FF6633] hover:shadow-lg transition text-white text-lg font-semibold py-3 px-8 rounded-2xl">
                            Добавить в корзину
                        </button>`
                }
            </div>

            <div class="text-gray-700 space-y-2 w-full">
                <div class="bg-[#F3F2F1] p-3 w-full grid grid-cols-3 gap-2 rounded-lg">
                    <span class="font-medium">Бренд:</span>
                    <span class="font-bold col-span-2 text-left">ПРОСТОКВАШИНО</span>
                </div>
                <div class="p-3 w-full grid grid-cols-3 gap-2 rounded-lg">
                    <span class="font-medium">Страна-производитель:</span>
                    <span class="font-bold col-span-2 text-left">Россия</span>
                </div>
                <div class="bg-[#F3F2F1] p-3 w-full grid grid-cols-3 gap-2 rounded-lg">
                    <span class="font-medium">Упаковка:</span>
                    <span class="font-bold col-span-2 text-left">180гр</span>
                </div>
            </div>
        </div>
    </div>
    `;

    let changeImages = document.getElementById("change-images");
    let mainImage = document.getElementById("main-image");

    if (changeImages && mainImage) {
        changeImages.addEventListener("click", (e) => {
            if (e.target.tagName === 'IMG') {
                mainImage.src = e.target.src;
                document.querySelectorAll('#change-images img').forEach(img => {
                    img.classList.remove('border-[#70C05B]');
                    img.classList.add('border-transparent');
                });
                e.target.classList.remove('border-transparent');
                e.target.classList.add('border-[#70C05B]');
            }
        });
    }

    let favoriteBtn = document.getElementById("favorite-btn");
    if (favoriteBtn) {
        favoriteBtn.addEventListener("click", () => {
            let isInFavorites = fav.find(item => item.id === el.id);
            
            if (isInFavorites) {
                fav = fav.filter(item => item.id !== el.id);
                favoriteBtn.classList.remove('text-[#FF6633]');
                favoriteBtn.classList.add('text-[#414141]');
                favoriteBtn.innerHTML = `<img src="../images/header-fav.png" alt="favorite" class="w-5 h-5">В избранное`;
            } else {
                fav.push(el);
                favoriteBtn.classList.remove('text-[#414141]');
                favoriteBtn.classList.add('text-[#FF6633]');
                favoriteBtn.innerHTML = `<img src="../images/fav+.png" alt="favorite" class="w-5 h-5">В избранном`;
            }
            
            localStorage.setItem("favourite", JSON.stringify(fav));
            
            let favBadge = document.getElementById("favBadge");
            if (favBadge) {
                favBadge.textContent = fav.length;
            }
        });
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

    location.reload();
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

        location.reload();
        return;
    }

    localStorage.setItem("carts", JSON.stringify(carts));
    
    let quantityText = document.getElementById(`quantity-${id}`);
    if (quantityText) quantityText.textContent = item.quantity;
    
    let cartBadge = document.getElementById("cartBadge");
    if (cartBadge) {
        cartBadge.textContent = carts.length;
    }
}

function updateAllBadges() {
    let fav = JSON.parse(localStorage.getItem("favourite") || "[]");
    let carts = JSON.parse(localStorage.getItem("carts") || "[]");
    
    let favBadge = document.getElementById("favBadge");
    let cartBadge = document.getElementById("cartBadge");
    
    if (favBadge) favBadge.textContent = fav.length;
    if (cartBadge) cartBadge.textContent = carts.length;
    
    let mobileFavBadge = document.getElementById("mobileFavBadge");
    let mobileCartBadge = document.getElementById("mobileCartBadge");
    
    if (mobileFavBadge) mobileFavBadge.textContent = fav.length;
    if (mobileCartBadge) mobileCartBadge.textContent = carts.length;
}