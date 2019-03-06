
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open')
  //GSAP Animations
  TweenMax.to('.menu', 1.5, {left: '0px'})
}

const toggleMenuClose = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu-close')
  //GSAP Animations
  // TweenMax.to('.menu', 3, {left: '-350px'})
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)
menuButton.addEventListener('click', toggleMenuClose)
