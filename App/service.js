const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Priya",
    position: "Delhi, India",
    photo: "https://randomuser.me/api/portraits/women/15.jpg",
    text: "I had an exceptional experience with LDD Realty! Their team understood my needs and guided me through every step. I am now a proud homeowner, thanks to their expertise and dedication!",
  },
  {
    name: "Amit Singh",
    position: "Dubai",
    photo:
      "https://images.unsplash.com/photo-1628264047194-fbef620a1262?w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    text: "LDD Realty made my property search hassle-free. Their professional team provided great insights and helped me find the perfect apartment. Highly recommend their services!",
  },
  {
    name: " Neha Gupta",
    position: "Delhi Ncr, India",
    photo:
      "https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    text: "I am incredibly grateful to LDD Realty for their assistance in buying my first home. Their knowledge of the market and commitment to client satisfaction is truly commendable!",
  },
];

let idx = 1;

function updateTestimonials() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonials, 2000);

// =======================================================

// ================= Creating Sticky Navbar =========================>

const hading = document.querySelector(".service_observation");
const observer = new IntersectionObserver(
  (entries, observe) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      document.body.classList.add("services_sticky");
    } else {
      document.body.classList.remove("services_sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(hading);
