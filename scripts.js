window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100 && cardBottom > 100) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
});