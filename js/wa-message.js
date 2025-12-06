document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.dataset.name;
        const image = card.dataset.image;

        const message = `Bonjour, je suis intéressé par le modèle ${name}.\nImage: ${image}`;
        const phone = "22955749137";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });
});


const bestSeller = document.querySelector(".best-seller-image");

bestSeller.addEventListener("click", ()=>{
    const name = bestSeller.dataset.name;
    const image = bestSeller.dataset.name;

    const message = `Bonjour, je suis intéressé par le modèle ${name}.\nImage: ${image}`;
    const phone = "22955749137";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
})