document.addEventListener("DOMContentLoaded", (event) => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("dropdown-links");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("change");
    navLinks.classList.toggle("show");
  });

  /*  ================
  ! ==>    Swiper slider 
  =================== */
  const slides = document.querySelector(".my__slides");
  const slide = document.querySelector(".my__slide");
  const nextBtn = document.querySelector(".nextBtn");
  const prevBtn = document.querySelector(".prevBtn");
  const slideWidth = slide.clientWidth;
  const totalSlides = document.querySelectorAll(".my__slide").length;
  let currentIndex = 0;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  prevBtn.addEventListener("click", function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  });
  nextBtn.addEventListener("click", function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });
});
