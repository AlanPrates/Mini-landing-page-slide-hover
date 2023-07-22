let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.getElementsByClassName('slide');

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

setInterval(nextSlide, 3000); // Troca a cada 3 segundos (3000 ms)