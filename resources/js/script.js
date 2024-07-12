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

  /*
   * ************************
   * ==>    Swiper slider
   * ************************
   */
  const slides = document.querySelector(".my__slides");
  const slide = document.querySelector(".my__slide");
  const nextBtn = document.querySelector(".nextBtn");
  const prevBtn = document.querySelector(".prevBtn");
  const slideWidth = slide.clientWidth;
  const totalSlides = document.querySelectorAll(".my__slide").length;
  console.log(totalSlides);
  let currentIndex = 0;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    console.log(currentIndex * slideWidth, "px");
  }

  nextBtn.addEventListener("click", function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  });
  prevBtn.addEventListener("click", function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });
});
