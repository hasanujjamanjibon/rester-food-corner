document.addEventListener("DOMContentLoaded", (event) => {
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
