// Navbar onscroll animation
const nav = document.querySelector(".nav");
function navScrollHandler(YOffset) {
  if (YOffset > 150) {
    nav.classList.add("nav--scrolled");
  } else {
    nav.classList.remove("nav--scrolled");
  }
}

// Show mobile menu.
const btn = document.querySelector(".nav-mobile__button");
const menu = document.querySelector(".nav__list");
btn.addEventListener("click", () => {
  menu.classList.toggle("nav__list--active");
});

// Hide mobile menu
const links = document.querySelectorAll(".nav__link");
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("nav__list--active");
  });
});

// Current section indicator
const navItems = document.querySelectorAll(".nav__item");

const hero = document.querySelector(".hero").offsetTop - 200;
const about = document.querySelector(".about").offsetTop - 200;
const services = document.querySelector(".services").offsetTop - 200;
const gallery = document.querySelector(".gallery").offsetTop - 200;
const blog = document.querySelector(".blog").offsetTop - 200;
const contact = document.querySelector(".contact").offsetTop - 200;

function activateNavItem(index) {
  navItems.forEach(item => item.classList.remove("nav__item--active"));
  navItems[index].classList.add("nav__item--active");
}

// Scroll handle
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  navScrollHandler(offset);

  switch (true) {
    case offset >= about && offset < services:
      activateNavItem(1);
      break;
    case offset >= services && offset < gallery:
      activateNavItem(2);
      break;
    case offset >= gallery && offset < blog:
      activateNavItem(3);
      break;
    case offset >= blog && offset < contact:
      activateNavItem(4);
      break;
    case offset >= contact:
      activateNavItem(5);
      break;
    default:
      activateNavItem(0);
  }
});
