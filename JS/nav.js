const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const nav_items = document.querySelector(".nav-items");
const nav_search = document.querySelector(".Search-container");

burger.addEventListener("click", () => {
    navigation.classList.toggle("h-nav");
    burger.classList.toggle("c-burger");
    nav_items.classList.toggle("v-nav");
    nav_search.classList.toggle("v-search");

});

function home() {
    window.location = "../index.html";
}