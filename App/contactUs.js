// ================= collect user information from user =========================>

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form elements
    const formElements = document.querySelectorAll(
      "#contactForm input, #contactForm textarea"
    );

    // Initialize an object to store user input
    const formData = {};

    // Loop through form elements and collect data
    Array.from(formElements).forEach((element) => {
      const name = element.name;
      const value = element.value;
      if (name) {
        formData[name] = value;
      }
    });

    console.log(formData);

    // // Construct the message for WhatsApp
    // const whatsappMessage = encodeURIComponent(
    //   `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nProperty: ${formData.property}\nMessage: ${formData.message}`
    // );

    // // Replace with the admin's phone number (including country code but without '+')
    // const whatsappNumber = "YOUR_ADMIN_PHONE_NUMBER";

    // // Create the WhatsApp URL
    // const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // // Redirect to WhatsApp
    // window.location.href = whatsappUrl;
  });

// ==========================================

// ================= Creating Sticky Navbar =========================>

const hading = document.querySelector(".contact_observation");
console.log(hading);
// const logo = document.querySelector(".logo");
const observer = new IntersectionObserver(
  (entries, observe) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      document.body.classList.add("stickyness");
      // logo.src = "img/logo2.png";
    } else {
      document.body.classList.remove("stickyness");
      // logo.src = "img/logo2.png";
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(hading);
