// Sélection des éléments
const statsSection = document.querySelector('.stats');
const statsCards = document.querySelectorAll('.stat-card');
const statNumbers = document.querySelectorAll('.stat-card__number');

let hasAnimated = false;

// Observer pour déclencher l'effet lorsque la section apparaît
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            
            // Reveal stagger
            statsCards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('revealed');
                }, i * 1000);
            });

            // Animation des compteurs
            statNumbers.forEach(num => animateCounter(num));

            hasAnimated = true;
        }
    });
}, { threshold: 0.3 });

observer.observe(statsSection);


// Animation du compteur
function animateCounter(element) {
    const target = +element.getAttribute('data-target');
    const suffix = element.getAttribute('data-suffix') || "";
    const duration = 1000; // ✔️ vitesse plus lente
    const startTime = performance.now();

    function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentValue = Math.floor(progress * target);

        element.textContent = currentValue + suffix;

        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}
