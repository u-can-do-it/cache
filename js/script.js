// Navbar onscroll animation
const nav = document.querySelector(".nav");
function smallScreenCheck() {
  if (document.documentElement.clientHeight <= 400) {
    nav.classList.add("nav--scrolled");
    return true;
  } else {
    return false;
  }
}
smallScreenCheck();
function navScrollHandler(YOffset) {
  if (smallScreenCheck()) {
    return;
  }
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

function indicateHandler(offset) {
  const hero = document.querySelector(".hero").offsetTop;
  const about = document.querySelector(".about").offsetTop;
  const services = document.querySelector(".services").offsetTop;
  const gallery = document.querySelector(".gallery").offsetTop;
  const blog = document.querySelector(".blog").offsetTop;
  const contact = document.querySelector(".contact").offsetTop;

  function activateNavItem(index) {
    navItems.forEach(item => item.classList.remove("nav__item--active"));
    navItems[index].classList.add("nav__item--active");
  }

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
}

// Scroll handler
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset + 50;
  navScrollHandler(offset);

  indicateHandler(offset);
});
