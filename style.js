
document.addEventListener("DOMContentLoaded", () => {

    // ① スクロールするとヘッダーに影をつける
    const header = document.querySelector("header");

    if (header) {
        const updateHeader = () => {
            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", updateHeader);
        updateHeader();
    }

    // ② カードをふわっと表示する
    const cards = document.querySelectorAll(".item, .card");

    if (
        "IntersectionObserver" in window &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        cards.forEach((card) => {
            card.classList.add("fade-in");
            observer.observe(card);
        });
    }

});