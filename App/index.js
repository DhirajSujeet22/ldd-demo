document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelectorAll(".burger");
  const cancelIcon = document.querySelector(".fa-xmark");
  const offcanvas = document.querySelector(".offcanvas");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const dropdownMenu = document.querySelectorAll(".dropdown-menu");

  // -------------------------------------------------------

  // ================= data fetching =========================>

  const about_title = document.getElementById("about-title");
  const aboutContent = document.querySelector(".about-content");
  const about_btn = document.getElementById("about-btn");

  // ------------------------------------------------------

  const real_title = document.getElementById("real_title");
  const real_estate = document.querySelector(".real_estate");
  const real_btn = document.getElementById("real_btn");

  // =================================================================

  async function dataFetch() {
    try {
      const response = await fetch("http://localhost:5000/api");

      if (!response.ok) {
        throw new Error(
          `Network response was not ok (status ${response.status})`
        );
      }

      const data = await response.json();

      // ---------------------------------------------------------

      const { aboutLdd, titles, Gurugram_real_estate } = await data[0];
      console.log(Gurugram_real_estate);

      // index tiitle changes

      document.getElementById("index_title1").innerText = titles[0].title1;
      document.getElementById("index_title2").innerHTML = titles[1].title2;

      // ---------------------------------------

      // about ldd changes

      about_title.innerText = aboutLdd[0].title;
      about_btn.innerText = aboutLdd[5].button;
      const paragraphs = aboutLdd
        .slice(1, 5)
        .map(
          (item) =>
            `<p>${item.para1 || item.para2 || item.para3 || item.para4}</p `
        );
      aboutContent.innerHTML = paragraphs.join("");

      // ----------------------------------------------------------

      // Gurugram real estate destination  changes

      real_title.innerText = Gurugram_real_estate[0].title;
      real_btn.innerText = Gurugram_real_estate[5].button;
      const paragraph = Gurugram_real_estate.slice(1, 5).map(
        (item) =>
          `<p>${item.para1 || item.para2 || item.para3 || item.para4}</p `
      );
      real_estate.innerHTML = paragraph.join("");

      // ----------------------------------------------------------
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  dataFetch();

  // ================= Navbar Hamburger Functionality =========================>

  // Toggle offcanvas menu for mobile
  burger.forEach((item) => {
    item.addEventListener("click", function () {
      offcanvas.classList.toggle("open");
    });
  });

  cancelIcon.addEventListener("click", function () {
    dropdownMenu.forEach((item) => {
      item.style.display = item.classList.contains("show") ? "none" : "none";
    });
  });

  // -------------------------------------------------------

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

// ================= Images Swiping Animation =========================>

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

// ================= Number Running Animation =========================>

const AnimationOfNumbers = () => {
  const countNumber = document.querySelectorAll(".counter_number");
  const speed = 200;

  countNumber.forEach((curElem) => {
    const updateNumber = () => {
      const initialNumber = parseInt(curElem.textContent);
      const targetNumber = parseInt(curElem.dataset.number);

      const incrementNumber = Math.ceil(targetNumber / speed);

      if (initialNumber < targetNumber) {
        curElem.innerText = `${initialNumber + incrementNumber} +`;
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateNumber, 10);
  });
};

// ================= Smooth Scrolling Animation for numbers =========================>

const workSection = document.querySelector(".numbers");

const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      return AnimationOfNumbers();
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);
