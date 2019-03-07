let menuSlide = new TimelineMax({paused: true, reverse: false})

menuSlide.from('.menu', 1.5, {left: -350})

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open')
  //GSAP Animations;
  menuSlide.reversed() ? menuSlide.play() : menuSlide.reverse();

  // TweenMax.from('.menu', 1.5, {left: '-350px', ease: Circ.easeOut})
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// const listItems = document.querySelector('.slide')
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)
