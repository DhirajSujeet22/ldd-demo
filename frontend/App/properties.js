// ================= Creating Sticky Navbar =========================>

const hading = document.querySelector(".properties_observation");
const observer = new IntersectionObserver(
  (entries, observe) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      document.body.classList.add("properties_sticky");
    } else {
      document.body.classList.remove("properties_sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(hading);
