// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= SCROLL ANIMATION =================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const product = document.getElementById("product").value;

    const message = document.getElementById("message").value.trim();


    // 10 digit validation

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }


    const whatsappNumber = "919999999999";


    const whatsappMessage =
        `Hello Shree Jewellers,%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Mobile: ${encodeURIComponent(phone)}%0A` +
        `Interested In: ${encodeURIComponent(product)}%0A` +
        `Message: ${encodeURIComponent(message)}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    window.open(whatsappURL, "_blank");

});


// ================= PHONE INPUT =================

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function() {

    this.value = this.value.replace(/\D/g, "").slice(0, 10);

});