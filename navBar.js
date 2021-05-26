let hamburger = document.getElementById("hamburger");
let navMenu = document.querySelector(".removed");
let pageTint = document.querySelector(".page-tint");

function revealMenu() {
    // document.querySelector("body").classList.toggle("display");
    navMenu.classList.toggle("display");
    pageTint.classList.toggle("display");
}

pageTint.addEventListener("click", () => {
    pageTint.classList.toggle("display");
    navMenu.classList.toggle("display");
});
