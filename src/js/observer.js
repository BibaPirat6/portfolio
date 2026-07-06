// Call this once, after all dynamic content (projects, skills, roadmap)
// has been injected into the DOM, so every .reveal element gets observed.
export function observeReveals() {
    const revealEls = document.querySelectorAll(".reveal:not(.visible)");

    if ("IntersectionObserver" in window && revealEls.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealEls.forEach((el) => observer.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("visible"));
    }
}
