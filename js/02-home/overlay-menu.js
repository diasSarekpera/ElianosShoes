const burger = document.querySelector(".hero__burger");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", () => {
    const isOpen = burger.classList.toggle("open");
    mobileNav.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);

    burger.setAttribute("aria-expanded", isOpen);
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("open");
        mobileNav.classList.remove("open");
        document.body.classList.remove("nav-open");
        burger.setAttribute("aria-expanded", "false");
    });
});
