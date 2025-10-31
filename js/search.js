let searchInput = document.getElementById("input");
let searchCards = document.getElementById("searchCards");

searchInput.addEventListener("input", function(e){
    let searchValue = e.target.value
    let searchProducts = products.filter((el) =>
         el.name.toLowerCase().includes(searchValue.toLowerCase()))

    if(searchValue) {
        searchCards.classList.remove("hidden");
        searchCards.innerHTML = "";
    } else {
        searchCards.classList.add("hidden");
        searchCards.innerHTML = "";
        return;
    }

    searchCards.innerHTML = "";
    searchProducts.length > 0 ?
    searchProducts.forEach((el) => {
        searchCards.innerHTML += `
        <div class="flex items-center bg-[#FBF5EF] border-[2px] border-green rounded-[5px] gap-[20px] p-[20px]">
                        <img src="${el.images[0]}" alt="" class="w-[40px]">
                        <div class="flex flex-col justify-between">
                            <h1>${el.name}</h1>
                            <p>${el.description}</p>
                        </div>
                    </div>
        `
    }) : searchCards.innerHTML = `<div class="text-center py-2 text-[#414141] text-md bg-[#F9FFF7]">No products were found</div>`
})