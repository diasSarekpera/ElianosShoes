// Bouton WhatsApp flottant : reste invisible sur la section hero et
// apparaît en fondu doux dès que l'utilisateur a scrollé un peu.
(function () {
    const waButton = document.querySelector(".whatsapp-float");
    if (!waButton) return;

    const REVEAL_THRESHOLD = 400; // px de scroll avant apparition

    function updateVisibility() {
        if (window.scrollY > REVEAL_THRESHOLD) {
            waButton.classList.add("show");
        } else {
            waButton.classList.remove("show");
        }
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
})();
