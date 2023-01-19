var menuToggle = document.querySelector("#menu-toggle");
var menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function(event) {
        var menuOpen = menu.checked;

        if(menuOpen) {
            menu.checked = false;
        } else {
            menu.checked = true;
        }
});