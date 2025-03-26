gsap.registerPlugin(ScrollTrigger);

// Animação dos Cards
document.querySelectorAll(".card").forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: -30,
        duration: 1,
        delay: index * 0.3,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
