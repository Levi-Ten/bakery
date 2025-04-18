let mobile__menu = document.querySelector(".mobile__menu");
const icon = document.querySelector(".mobile__menu>i");
let navigation__links = document.querySelector(".navigation__links");
let navLinks = document.querySelectorAll(".navigation__links>a");
mobile__menu.addEventListener("click", () => {
  navigation__links.classList.toggle("show");

  if (navigation__links.classList.contains("show")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
// Închide meniul la click pe un link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navigation__links.classList.remove("show");
      document.body.classList.remove("no-scroll");
  
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });

let go__top = document.querySelector(".go__top");
window.addEventListener("scroll", scrollFn);

function scrollFn() {
  let y = window.scrollY;
  console.log(y);
  if (y < 200) {
    go__top.classList.add("hideElement");
  } else {
    go__top.classList.remove("hideElement");
  }
}
scrollFn()