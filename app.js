document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const offcanvas = document.querySelector(".offcanvas");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Toggle offcanvas menu for mobile
  burger.addEventListener("click", function () {
    offcanvas.classList.toggle("open");
  });

  // Toggle dropdown menus on click for both desktop and mobile
  dropdownToggles.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle("show");
      dropdownMenu.style.display = dropdownMenu.classList.contains("show")
        ? "block"
        : "none";
    });
  });
});

// =================================

const swiper = new Swiper(".mySwiper", {
  crossFade: true,
  effect: "fade",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
