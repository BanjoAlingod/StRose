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

/* =====================================================
   ST. ROSE COLLEGE WEBSITE TOUR
===================================================== */

const tourSteps = [

    {
        target: "hero",
        icon: "👋",
        title: "Welcome to St. Rose College",
        description:
            "Welcome! This quick tour will show you around the St. Rose College website."
    },

    {
        target: "header",
        icon: "🧭",
        title: "Website Navigation",
        description:
            "Use the navigation menu to quickly access Home, Announcements, Courses, Faculty, About, and Contact."
    },

    {
        target: "announcements",
        icon: "📢",
        title: "Announcements",
        description:
            "Check this section regularly for important school announcements, examination schedules, reminders, and activities."
    },

    {
        target: "courses",
        icon: "🎓",
        title: "Courses Offered",
        description:
            "Explore the academic programs offered by St. Rose College. Click View Program to learn more about a course."
    },

    {
        target: "faculty",
        icon: "👨‍🏫",
        title: "Meet the Faculty",
        description:
            "Get to know the Computer Science faculty, including their professional backgrounds and areas of expertise."
    },

    {
        target: "contact",
        icon: "📍",
        title: "Contact St. Rose College",
        description:
            "Find the school's location and contact information, or visit the official Facebook page for additional updates."
    }

];


let currentTourStep = 0;

const tourOverlay =
    document.getElementById("tourOverlay");

const tourHighlight =
    document.getElementById("tourHighlight");

const tourTooltip =
    document.getElementById("tourTooltip");

const tourIcon =
    document.getElementById("tourIcon");

const tourTitle =
    document.getElementById("tourTitle");

const tourDescription =
    document.getElementById("tourDescription");

const tourStepNumber =
    document.getElementById("tourStepNumber");

const tourTotalSteps =
    document.getElementById("tourTotalSteps");

const tourNext =
    document.getElementById("tourNext");

const tourBack =
    document.getElementById("tourBack");

const tourSkip =
    document.getElementById("tourSkip");

const tourClose =
    document.getElementById("tourClose");

const startTour =
    document.getElementById("startTour");


tourTotalSteps.textContent =
    tourSteps.length;


/* =====================================================
   START TOUR
===================================================== */

function startWebsiteTour() {

    currentTourStep = 0;

    tourOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

    showTourStep();

}


/* =====================================================
   SHOW STEP
===================================================== */

function showTourStep() {

    const step =
        tourSteps[currentTourStep];

    const target =
        document.querySelector(
            `[data-tour="${step.target}"]`
        );


    if (!target) {

        console.warn(
            `Tour target not found: ${step.target}`
        );

        return;

    }


    /* Scroll target into view */

    target.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    setTimeout(() => {

        const rect =
            target.getBoundingClientRect();


        const padding = 7;


        /* Highlight */

        tourHighlight.style.top =
            `${rect.top - padding}px`;

        tourHighlight.style.left =
            `${rect.left - padding}px`;

        tourHighlight.style.width =
            `${rect.width + padding * 2}px`;

        tourHighlight.style.height =
            `${rect.height + padding * 2}px`;


        /* Text */

        tourIcon.textContent =
            step.icon;

        tourTitle.textContent =
            step.title;

        tourDescription.textContent =
            step.description;

        tourStepNumber.textContent =
            currentTourStep + 1;


        /* Back button */

        if (currentTourStep === 0) {

            tourBack.style.display =
                "none";

        } else {

            tourBack.style.display =
                "block";

        }


        /* Next button */

        if (
            currentTourStep ===
            tourSteps.length - 1
        ) {

            tourNext.textContent =
                "Finish ✓";

        } else {

            tourNext.textContent =
                "Next →";

        }


        positionTooltip(rect);

    }, 400);

}


/* =====================================================
   POSITION TOOLTIP
===================================================== */

function positionTooltip(rect) {

    const tooltipWidth =
        tourTooltip.offsetWidth;

    const tooltipHeight =
        tourTooltip.offsetHeight;

    const margin = 20;


    let top =
        rect.bottom + 20;

    let left =
        rect.left;


    /* Prevent right overflow */

    if (
        left + tooltipWidth >
        window.innerWidth - margin
    ) {

        left =
            window.innerWidth -
            tooltipWidth -
            margin;

    }


    /* Prevent left overflow */

    if (left < margin) {

        left = margin;

    }


    /* If tooltip doesn't fit below,
       place it above */

    if (
        top + tooltipHeight >
        window.innerHeight - margin
    ) {

        top =
            rect.top -
            tooltipHeight -
            20;

    }


    /* If it doesn't fit above either,
       center vertically */

    if (top < margin) {

        top =
            (window.innerHeight -
            tooltipHeight) / 2;

    }


    tourTooltip.style.top =
        `${top}px`;

    tourTooltip.style.left =
        `${left}px`;

}


/* =====================================================
   NEXT
===================================================== */

function nextTourStep() {

    if (
        currentTourStep <
        tourSteps.length - 1
    ) {

        currentTourStep++;

        showTourStep();

    } else {

        finishTour();

    }

}


/* =====================================================
   BACK
===================================================== */

function previousTourStep() {

    if (currentTourStep > 0) {

        currentTourStep--;

        showTourStep();

    }

}


/* =====================================================
   CLOSE / FINISH
===================================================== */

function finishTour() {

    tourOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   EVENTS
===================================================== */

startTour.addEventListener(
    "click",
    startWebsiteTour
);

tourNext.addEventListener(
    "click",
    nextTourStep
);

tourBack.addEventListener(
    "click",
    previousTourStep
);

tourSkip.addEventListener(
    "click",
    finishTour
);

tourClose.addEventListener(
    "click",
    finishTour
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            tourOverlay.classList.contains("active")
        ) {

            finishTour();

        }

    }
);


/* WINDOW RESIZE */

window.addEventListener(
    "resize",
    function() {

        if (
            tourOverlay.classList.contains("active")
        ) {

            showTourStep();

        }

    }
);
