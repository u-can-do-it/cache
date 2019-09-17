// Navbar onscroll animation
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    nav.classList.add("nav--scrolled");
  } else {
    nav.classList.remove("nav--scrolled");
  }
});

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
const hero = document.querySelector(".hero").offsetTop;
const about = document.querySelector(".about").offsetTop;
const services = document.querySelector(".services").offsetTop;
const gallery = document.querySelector(".gallery").offsetTop;
const blog = document.querySelector(".blog").offsetTop;
const contact = document.querySelector(".contact").offsetTop;
console.log(about);
