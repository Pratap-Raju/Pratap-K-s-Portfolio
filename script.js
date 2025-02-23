gsap.registerPlugin(ScrollTrigger);

function sendEmail(event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent("Message from Portfolio Visitor");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:kpratap1raju@gmail.com?subject=${subject}&body=${body}`;
    document.getElementById("message").value = "";
}

function setupScrollAnimations() {
    gsap.utils.toArray(".bg-image").forEach(bg => {
        gsap.to(bg, {
            y: "20%",
            ease: "none",
            scrollTrigger: {
                trigger: bg.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    gsap.from("#home h1", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top 90%",
        }
    });
    gsap.from("#home p", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top 90%",
        }
    });

    const aboutText = document.getElementById("about-text").textContent.split(" ");
    document.getElementById("about-text").innerHTML = aboutText.map(word => `<span class="word">${word}</span>`).join("");
    gsap.from("#about .word", {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
        }
    });

    gsap.from("#projects .item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#projects-container",
            start: "top 80%",
            toggleActions: "play none none reset"
        }
    });

    gsap.from("#activities .item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#activities-container",
            start: "top 80%",
            toggleActions: "play none none reset"
        }
    });

    gsap.from("#resume-content > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#resume",
            start: "top 80%",
        }
    });

    gsap.from(".contact-section > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        }
    });

    gsap.from(".copyright", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        }
    });

    gsap.to(".navbar", {
        padding: "0.5rem 2rem",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: true
        }
    });

    gsap.to("#resume", {
        scrollTrigger: {
            trigger: "#resume",
            pin: true,
            start: "top 20%",
            end: "bottom 80%", /* Adjusted to end when resume bottom hits 80% of viewport */
            scrub: 1,
            pinSpacing: true /* Ensures space is added below during pinning */
        }
    });
}

setupScrollAnimations();