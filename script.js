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
   ST. ROSE COLLEGE
   RESPONSIVE WEBSITE TOUR
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
            "Use the navigation menu to quickly access Home, Announcements, Courses, About, and Contact."
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
            "Get to know the faculty members and learn about their professional backgrounds and areas of expertise."
    },

    {
        target: "contact",
        icon: "📍",
        title: "Contact St. Rose College",
        description:
            "Find the school's location, contact information, and official Facebook page."
    }

];


/* =====================================================
   TOUR ELEMENTS
===================================================== */

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


let currentTourStep = 0;


/* =====================================================
   CHECK TOUR ELEMENTS
===================================================== */

if (
    tourOverlay &&
    tourHighlight &&
    tourTooltip &&
    tourIcon &&
    tourTitle &&
    tourDescription &&
    tourStepNumber &&
    tourTotalSteps &&
    tourNext &&
    tourBack &&
    tourSkip &&
    tourClose &&
    startTour
) {

    tourTotalSteps.textContent =
        tourSteps.length;


    /* =================================================
       START TOUR
    ================================================= */

    function startWebsiteTour() {

        currentTourStep = 0;

        tourOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

        showTourStep();

    }


    /* =================================================
       SHOW TOUR STEP
    ================================================= */

    function showTourStep() {

        const step =
            tourSteps[currentTourStep];


        const target =
            document.querySelector(
                `[data-tour="${step.target}"]`
            );


        /* Target does not exist */

        if (!target) {

            console.warn(
                `Tour target not found: ${step.target}`
            );

            /*
             * If Faculty hasn't been added yet,
             * automatically skip to the next step.
             */

            if (
                currentTourStep <
                tourSteps.length - 1
            ) {

                currentTourStep++;

                showTourStep();

            }

            return;
        }


        /* =================================================
           UPDATE CONTENT
        ================================================= */

        tourIcon.textContent =
            step.icon;

        tourTitle.textContent =
            step.title;

        tourDescription.textContent =
            step.description;

        tourStepNumber.textContent =
            currentTourStep + 1;


        /* =================================================
           BUTTONS
        ================================================= */

        if (currentTourStep === 0) {

            tourBack.style.display =
                "none";

        } else {

            tourBack.style.display =
                "inline-flex";

        }


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


        /* =================================================
           MOBILE / DESKTOP SCROLL
        ================================================= */

        const isMobile =
            window.innerWidth <= 700;


        target.scrollIntoView({

            behavior: "smooth",

            block:
                isMobile
                    ? "start"
                    : "center"

        });


        /*
         * Wait for smooth scrolling before
         * positioning the highlight.
         */

        setTimeout(() => {

            positionTour(target);

        }, isMobile ? 500 : 400);

    }


    /* =================================================
       POSITION HIGHLIGHT
    ================================================= */

    function positionTour(target) {

        const rect =
            target.getBoundingClientRect();


        const isMobile =
            window.innerWidth <= 700;


        const padding =
            isMobile ? 5 : 8;


        tourHighlight.style.top =
            `${rect.top - padding}px`;

        tourHighlight.style.left =
            `${rect.left - padding}px`;

        tourHighlight.style.width =
            `${rect.width + padding * 2}px`;

        tourHighlight.style.height =
            `${rect.height + padding * 2}px`;


        positionTooltip(rect);

    }


    /* =================================================
       POSITION TOOLTIP
    ================================================= */

    function positionTooltip(rect) {

        const isMobile =
            window.innerWidth <= 700;


        const margin =
            isMobile ? 12 : 20;


        const tooltipWidth =
            Math.min(
                tourTooltip.offsetWidth,
                window.innerWidth - margin * 2
            );


        const tooltipHeight =
            tourTooltip.offsetHeight;


        let top;
        let left;


        /* =================================================
           MOBILE
        ================================================= */

        if (isMobile) {

            /*
             * On phones the tooltip is fixed near
             * the bottom of the screen.
             */

            left = margin;

            top =
                window.innerHeight -
                tooltipHeight -
                margin;


            /*
             * If the tooltip is too tall,
             * move it to the top.
             */

            if (
                tooltipHeight >
                window.innerHeight * 0.55
            ) {

                top = margin;

            }

        }


        /* =================================================
           DESKTOP
        ================================================= */

        else {

            left = rect.left;

            top =
                rect.bottom + 20;


            /* Right edge */

            if (
                left + tooltipWidth >
                window.innerWidth - margin
            ) {

                left =
                    window.innerWidth -
                    tooltipWidth -
                    margin;

            }


            /* Left edge */

            if (left < margin) {

                left = margin;

            }


            /* Bottom edge */

            if (
                top + tooltipHeight >
                window.innerHeight - margin
            ) {

                top =
                    rect.top -
                    tooltipHeight -
                    20;

            }


            /* Top edge */

            if (top < margin) {

                top = margin;

            }

        }


        tourTooltip.style.width =
            `${tooltipWidth}px`;

        tourTooltip.style.left =
            `${left}px`;

        tourTooltip.style.top =
            `${top}px`;

    }


    /* =================================================
       NEXT
    ================================================= */

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


    /* =================================================
       BACK
    ================================================= */

    function previousTourStep() {

        if (currentTourStep > 0) {

            currentTourStep--;

            showTourStep();

        }

    }


    /* =================================================
       FINISH
    ================================================= */

    function finishTour() {

        tourOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* =================================================
       BUTTON EVENTS
    ================================================= */

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


    /* =================================================
       ESC KEY
    ================================================= */

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


    /* =================================================
       WINDOW RESIZE
    ================================================= */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function() {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(() => {

                if (
                    tourOverlay.classList.contains("active")
                ) {

                    const step =
                        tourSteps[currentTourStep];

                    const target =
                        document.querySelector(
                            `[data-tour="${step.target}"]`
                        );

                    if (target) {

                        positionTour(target);

                    }

                }

            }, 150);

        }
    );

}
