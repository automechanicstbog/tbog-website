const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = navLinks.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");

  const expanded = menuToggle.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", expanded);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
