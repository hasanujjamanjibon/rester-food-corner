document.addEventListener("DOMContentLoaded", (event) => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("dropdown-links");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("change");
    navLinks.classList.toggle("show");
  });
});
