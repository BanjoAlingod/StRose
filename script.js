/* =========================================
   ST. ROSE COLLEGE WEBSITE
   JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

    });

});


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   ANNOUNCEMENT MODAL
   ========================================= */

const modal = document.getElementById("announcementModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalContent =
    document.getElementById("modalContent");

const modalClose =
    document.getElementById("modalClose");

const modalButton =
    document.getElementById("modalButton");


document.querySelectorAll(".read-more").forEach(button => {

    button.addEventListener("click", () => {

        const title =
            button.dataset.title;

        const content =
            button.dataset.content;

        modalTitle.textContent = title;

        modalContent.textContent = content;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);

modalButton.addEventListener("click", closeModal);


/* Close modal when clicking outside */

modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeModal();

    }

});


/* Close modal with ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================================
   VIEW ALL ANNOUNCEMENTS
   ========================================= */

const showAllBtn =
    document.getElementById("showAllBtn");

showAllBtn.addEventListener("click", () => {

    alert(
        "More announcements can be added here. " +
        "Connect this section to a database or CMS " +
        "when the website is deployed."
    );

});


/* =========================================
   CURRENT YEAR
   ========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   SMOOTH BUTTON EFFECT
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});