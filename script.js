// Select menu icon, close icon, and the mobile menu
const menuToggle = document.querySelector('.menu-toggle'); // The icon (menu or close)
const mobileMenu = document.querySelector('ul.mobile');    // The menu items

// Event listener for menu toggle
menuToggle.addEventListener('click', () => {
  // Toggle the visibility of the menu
  mobileMenu.classList.toggle('active');

  // Check if the menu is active
  if (mobileMenu.classList.contains('active')) {
    // If menu is visible, show the close icon
    menuToggle.setAttribute('src', 'assets/images/icon-menu-close.svg');
  } else {
    // If menu is hidden, show the default menu icon
    menuToggle.setAttribute('src', 'assets/images/icon-menu.svg');
  }
});
