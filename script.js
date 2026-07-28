/* ==========================================
   SHOOT Camera Rentalss
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Smooth Scrolling
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ===============================
       Fade Animation
    =============================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });


    document.querySelectorAll(".fade-up").forEach(item => {

        observer.observe(item);

    });


    /* ===============================
       Back To Top Button
    =============================== */

    const topButton = document.createElement("button");

    topButton.id = "backToTop";

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.style.display = "flex";

        } else {

            topButton.style.display = "none";

        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ===============================
       Card Hover Animation
    =============================== */

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-8px) scale(1.03)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px) scale(1)";

        });

    });


    /* ===============================
       Navbar Shadow
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 30) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.35)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* ===============================
       Current Year
    =============================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});