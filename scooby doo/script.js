// script.js

const slides = document.querySelector('.slides');
const manualBtns = document.querySelectorAll('.manual-btn');
let index = 0;
const totalSlides = manualBtns.length;

function goToSlide(n) {
    index = (n + totalSlides) % totalSlides; // Garantir que o índice esteja no intervalo correto
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
    updateManualBtns();
}

function updateManualBtns() {
    manualBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

manualBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        goToSlide(i);
        resetAutoSlide(); // Reinicia o intervalo automático ao clicar manualmente
    });
});

let autoSlideInterval = setInterval(() => {
    index = (index + 1) % totalSlides;
    goToSlide(index);
}, 5000); // Muda de slide a cada 5 segundos

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        index = (index + 1) % totalSlides;
        goToSlide(index);
    }, 5000);
}
