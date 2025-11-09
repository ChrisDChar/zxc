function updateAllBadges() {
    const fav = JSON.parse(localStorage.getItem("favourite") || "[]");
    const carts = JSON.parse(localStorage.getItem("carts") || "[]");
    const profile = JSON.parse(localStorage.getItem("profile") || "{}");
    
    const favBadge = document.getElementById("favBadge");
    const cartBadge = document.getElementById("cartBadge");
    
    if (favBadge) favBadge.textContent = fav.length;
    if (cartBadge) cartBadge.textContent = carts.length;
    
    const mobileFavBadge = document.getElementById("mobileFavBadge");
    const mobileCartBadge = document.getElementById("mobileCartBadge");
    
    if (mobileFavBadge) mobileFavBadge.textContent = fav.length;
    if (mobileCartBadge) mobileCartBadge.textContent = carts.length;
    
    const profileImage = document.getElementById("profile-image");
    const mobileProfileImage = document.getElementById("mobileProfileImage");
    
    if (profileImage && profile.PhotoURL) profileImage.src = profile.PhotoURL;
    if (mobileProfileImage && profile.PhotoURL) mobileProfileImage.src = profile.PhotoURL;
}

document.addEventListener('DOMContentLoaded', updateAllBadges);