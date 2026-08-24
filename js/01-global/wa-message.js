const WA_PHONE = "22955749137";

function buildWhatsAppMessage({ name, price, image }) {
    const lines = [
        `Bonjour 👋, je suis intéressé(e) par le modèle *${name}*${price ? ` (${price})` : ""}.`,
        `Pourriez-vous me confirmer la disponibilité, les pointures et les modalités de commande ?`,
        ``,
        `Merci d'avance !`,
    ];

    if (image) {
        lines.push(``, `Référence photo : ${image}`);
    }

    return lines.join("\n");
}

function getWhatsAppUrl(data) {
    const message = buildWhatsAppMessage(data);
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

// ----- Boutons "Commander" sur les cartes produit -----
document.querySelectorAll(".product-card__order-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // n'affecte pas le reste de la carte

        const card = btn.closest(".product-card");
        if (!card) return;

        const url = getWhatsAppUrl({
            name: card.dataset.name,
            price: card.dataset.price,
            image: card.dataset.image,
        });

        window.open(url, "_blank");
    });
});

// ----- Bouton "Commander maintenant" de la section Meilleure vente -----
const bestSellerCta = document.querySelector(".best-seller__cta");

if (bestSellerCta) {
    bestSellerCta.addEventListener("click", (e) => {
        e.preventDefault(); // on remplace le lien statique par le lien avec message pré-rempli

        const url = getWhatsAppUrl({
            name: bestSellerCta.dataset.name,
            price: bestSellerCta.dataset.price,
            image: bestSellerCta.dataset.image,
        });

        window.open(url, "_blank");
    });
}
