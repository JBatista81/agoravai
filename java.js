const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselContainer = document.querySelector('.carousel-container');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) % 3; // 3 é o número de slides
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 3; // 3 é o número de slides
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 300; // 300 é a largura do slide
    carouselContainer.style.transform = `translateX(${offset}px)`;
}
