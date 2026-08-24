const testimonials = [
    {
        text: "« Un cuir magnifique et une finition impeccable. Chaque paire Eliano Shoes se porte comme une seconde peau, avec une élégance qui ne passe jamais inaperçue. »",
        rating: 5,
        author: "Kevin Adjovi"
    },
    {
        text: "« Confort remarquable dès les premières heures et un savoir-faire artisanal qu'on ressent à chaque détail. Je recommande sans hésiter. »",
        rating: 5,
        author: "Nadia Houngbo"
    },
    {
        text: "« Livraison rapide, service à l'écoute et une paire qui a dépassé mes attentes. Eliano Shoes est devenu mon adresse cuir de référence. »",
        rating: 4,
        author: "Steve Dossou"
    }
];

let currentTestimonial = 0;

const textEl = document.getElementById('testimonial-text');
const ratingEl = document.getElementById('testimonial-rating');
const authorEl = document.getElementById('testimonial-author');
const prevBtn = document.querySelector('.testimonials__nav--prev');
const nextBtn = document.querySelector('.testimonials__nav--next');

function renderTestimonial(index) {
    const t = testimonials[index];
    const content = document.querySelector('.testimonials__content');

    content.style.opacity = 0;

    setTimeout(() => {
        textEl.textContent = t.text;
        ratingEl.textContent = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
        ratingEl.setAttribute('aria-label', `Note ${t.rating} sur 5`);
        authorEl.textContent = t.author;
        content.style.opacity = 1;
    }, 200);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        renderTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonial(currentTestimonial);
    });
}
