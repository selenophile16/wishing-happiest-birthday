// navigation function
function goToSlide(nextSlideId) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.add('hidden'));
    const target = document.getElementById(nextSlideId);
    if (target) target.classList.remove('hidden');
}

// decision handling for slide14
let askedTimes = 0; // count how many times user clicked No (optional tracking)

function handleDecision(choice) {
    const questionEl = document.getElementById('final-question');

    if (choice === 'yes') {
        // accepted -> move to slide15
        goToSlide('slide15');
        return;
    }

    // choice === 'no'
    askedTimes += 1;

    // Change the question text to ask again. Keep showing yes/no.
    // If you want different messages depending on attempts, modify here.
    if (askedTimes === 1) {
        questionEl.textContent = 'are you sure? please think again?';
        // small visual cue
        flashElement(questionEl);
    } else {
        // subsequent "no" clicks keep the same message and flash
        questionEl.textContent = 'please think again... are you sure?';
        flashElement(questionEl);
    }
}

// small flash animation to draw attention
function flashElement(el) {
    if (!el) return;
    el.style.transition = 'transform 0.15s ease, opacity 0.15s ease';
    el.style.transform = 'scale(1.03)';
    el.style.opacity = '0.95';
    setTimeout(() => {
        el.style.transform = '';
        el.style.opacity = '';
    }, 150);
}

// initialize first slide visible (in case script loads after HTML)
document.addEventListener('DOMContentLoaded', () => {
    // ensure slide1 is visible if none visible (optional)
    const visible = document.querySelectorAll('.slide:not(.hidden)');
    if (visible.length === 0) goToSlide('slide1');
});

// override decision behavior
function handleDecision(choice) {
    const questionEl = document.getElementById('final-question');

    if (choice === 'yes') {
        // accepted -> go directly to reasons (slide16)
        goToSlide('slide16');
        return;
    }

    // choice === 'no'
    goToSlide('slide18');
}

// flip card click handling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});
