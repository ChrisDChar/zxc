let path = new URLSearchParams(location.search);
let id = path.get("id");
let item = products.filter((el) => el.id == id);
let singlecontainer = document.getElementById("single-container");
let productHeader = document.getElementById("product-header");


    let el = item[0];
    let discountedPrice = (el.price - (el.price * el.discount / 100)).toFixed(2);

    productHeader.innerHTML = `
        <div class="flex flex-col gap-3 mt-4">
            <h1 class="text-5xl font-bold text-[#414141]">${el.name}</h1>
            <div id="single-rating" class="flex flex-wrap items-center gap-5 text-[#414141]">
                <button class="flex items-center gap-2 text-[#70C05B] font-medium hover:opacity-75 transition">
                    <img src="../images/share.png" alt="share" class="w-5 h-5">Поделиться
                </button>
                <button class="flex items-center gap-2 text-[#FF6633] font-medium hover:opacity-75 transition">
                    <img src="../images/header-fav.png" alt="favorite" class="w-5 h-5">В избранное
                </button>
            </div>
        </div>
    `;

    singlecontainer.innerHTML = `
    <div id="single-card" class="flex flex-col md:flex-row gap-10">
        <div id="single-left" class="flex gap-[10px]">
            <div id="change-images" class="flex flex-col gap-[5px]">
                ${el.images.map(img => 
                    `<img class="w-[90px] h-[90px] object-cover cursor-pointer" src="${img}" alt="${el.name}">`
                ).join('')}
            </div>
            <div class="relative">
                <img id="main-image" class="max-w-[375px] w-full h-[375px] object-cover" src="${el.images[0]}" alt="${el.name}">
                ${el.discount > 0 ? 
                    `<span class="w-[40px] sm:w-[56px] h-[26px] sm:h-[32px] absolute top-3 right-3 bg-[#FF6633] text-white text-[12px] sm:text-[17px] font-semibold px-3 py-1 rounded">${el.discount}%</span>` 
                    : ''}
            </div>
        </div>

        <div id="single-right" class="flex flex-col gap-6 w-full md:w-1/2 px-5 items-start">
            <div class="flex justify-between items-center w-full gap-5">
                ${el.discount > 0 ? 
                    `<p class="text-xl text-gray-500">${el.price}₽</p>` 
                    : ''}
                <p class="text-3xl font-bold text-[#414141]">${discountedPrice}₽</p>
            </div>

            <div class="w-full flex justify-center">
              <button class="bg-[#FF6633] hover:shadow-lg transition text-white text-lg font-semibold py-2 px-4 rounded-2xl">Добавить в корзину</button>
            </div>

            <div class="text-gray-700 space-y-2 w-full">
              <div class="bg-[#F3F2F1] p-1 w-full grid grid-cols-3 gap-2">
                <span class="font-medium">Бренд:</span>
                <span class="font-bold col-span-2 text-left">ПРОСТОКВАШИНО</span>
              </div>
              <div class="p-1 w-full grid grid-cols-3 gap-2">
                <span class="font-medium">Страна-производитель:</span>
                <span class="font-bold col-span-2 text-left">Россия</span>
              </div>
              <div class="bg-[#F3F2F1] p-1 w-full grid grid-cols-3 gap-2">
                <span class="font-medium">Упаковка:</span>
                <span class="font-bold col-span-2 text-left">180гр</span>
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
            }
        });
    }