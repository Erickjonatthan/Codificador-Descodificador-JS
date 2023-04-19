
// adiciona uma seta para descer a pag
const arrow = document.querySelector('.scroll-to-bottom');

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
