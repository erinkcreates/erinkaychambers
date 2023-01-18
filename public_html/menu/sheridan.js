var menuToggle = document.querySelector("#menu-toggle");
var menu = document.querySelector("#menu");

var enterKeyCode = 13;
var spaceKeyCode = 32;

menuToggle.addEventListener("keyup", function(event) {
    if(event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
        var menuOpen = menu.checked;

        if(menuOpen) {
            menu.checked = false;
        } else {
            menu.checked = true;
        }
    }
});