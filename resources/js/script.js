document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(".animation");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust this value to change the visibility threshold
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.add("hidden");
      }
    });
  }, observerOptions);
  sections.forEach((section) => {
    section.classList.add("hidden"); // Initialize all sections as hidden
    observer.observe(section);
  });
  /*
   * ************************
   * ==>    Nav Menu
   * ************************
   */
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("dropdown-links");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("change");
    navLinks.classList.toggle("show");
  });
});
