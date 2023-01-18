function mobileMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var menuItems = document.getElementsByTagName(ul);
        var i;
        for (i = 0; i < menuItems.length; i++) {
        var openDropdown = menuItems[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
} 

// Animated Hamburger Icon
function menuIcon(x) {
}
