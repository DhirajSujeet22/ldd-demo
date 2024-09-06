// ================= Creating Sticky Navbar =========================>

const heading = document.querySelector(".observation");
// const aboutUs = document.querySelector(".aboutUs_observation");
// console.log(aboutUs);
// const logo = document.querySelector(".logo");
const observer = new IntersectionObserver(
  (entries, observe) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      document.body.classList.add("sticky");
      // logo.src = "img/logo2.png";
    } else {
      document.body.classList.remove("sticky");
      // logo.src = "img/logo2.png";
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heading);
