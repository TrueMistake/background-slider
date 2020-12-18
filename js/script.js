const body = document.querySelector('body');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.slide-prev');
const next = document.querySelector('.slide-next');

let counter = 0;

function activeSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides.forEach((slide, key) => {
        if (key === counter) {
            slide.classList.add('active');
        }

        if (slide.classList.contains('active')) {
            body.style.backgroundImage = slide.style.backgroundImage;
        }

    });
}

function funcArrow() {
    prev.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = slides.length - 1;
        }

        activeSlide();
    });

    next.addEventListener('click', () => {
        counter++;
        if (counter > slides.length - 1) {
            counter = 0;
        }

        activeSlide();
    })
}

funcArrow();
