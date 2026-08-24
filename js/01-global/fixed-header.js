// Header fixe : on mesure sa vraie hauteur pour pousser le contenu
// du hero d'autant (variable CSS --header-h), et on ajoute une classe
// "scrolled" au header dès qu'on quitte le tout haut de page.
(function () {
    const header = document.querySelector(".hero__header");
    if (!header) return;

    function updateHeaderHeight() {
        const height = header.offsetHeight;
        document.documentElement.style.setProperty("--header-h", height + "px");
    }

    function updateScrolledState() {
        if (window.scrollY > 10) {
            header.classList.add("hero__header--scrolled");
        } else {
            header.classList.remove("hero__header--scrolled");
        }
    }

    updateHeaderHeight();
    updateScrolledState();

    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", updateScrolledState, { passive: true });
})();
