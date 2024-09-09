// ================= Creating Sticky Navbar =========================>

const heading = document.querySelector(".observation");
const observer = new IntersectionObserver(
  (entries, observe) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heading);
