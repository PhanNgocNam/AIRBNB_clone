// Sticky header
var headerWrapper = document.getElementById("header-wrapper");

document.addEventListener("scroll", function () {
    if (window.pageYOffset >= 48) {
        headerWrapper.classList.add("header-nav-sticky");
    } else
        headerWrapper.classList.remove("header-nav-sticky");
});