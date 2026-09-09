/* ===============================
   PORTFOLIO VERSION 2.0.0
================================ */


/* ---------- MOBILE MENU ---------- */

const menuBtn =
    document.getElementById("menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking link */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* ---------- DARK MODE ---------- */

const themeBtn =
    document.getElementById("theme-btn");

const themeIcon =
    themeBtn.querySelector("i");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* Remember theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


/* ---------- SCROLL ANIMATION ---------- */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop <
            windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* ---------- BACK TO TOP ---------- */

const topBtn =
    document.getElementById("top-btn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ---------- CONTACT FORM ---------- */

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been submitted."
        );

        contactForm.reset();

    }
);


/* ---------- PAGE LOAD ---------- */

window.addEventListener(
    "load",
    revealOnScroll
);

console.log(
    "Portfolio Version 2.0.0 loaded successfully!"
);