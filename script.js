let menuIcon = document.getElementById("menu-icon");
let sideBar = document.getElementById("sidebar");
let closeBtn = document.getElementById("closeBtn");

menuIcon.addEventListener("click", () => {
    sideBar.style.display = "flex";
})
closeBtn.addEventListener("click", () => {
    sideBar.style.display = "none";
})