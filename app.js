document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    hamburgerMenu.addEventListener('click', () => {
        if (menu.style.left === "0px") {
            menu.style.left = "-250px"; // Hide menu by sliding out to the left
        } else {
            menu.style.left = "0"; // Show menu by sliding in from the left
        }
    });
});