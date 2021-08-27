const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "close-menu");
    } else {
        navToggle.setAttribute("aria-label", "open-menu")
    }
})

window.addEventListener("scroll", function(){
    let header = document.querySelector(".header");
    let submenu = document.querySelector(".menu-sub");
    let windowposition = window.scrollY > 200;

    header.classList.toggle("scrolling_active", windowposition);
    submenu.classList.toggle("submenu_active", windowposition);
})
document.oncontextmenu=function() {return false}
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }   
});
